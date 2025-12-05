// app/(application)/loans/apply/details/page.tsx
"use client";

import React, { useState, useEffect, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";

// Define the form data type
interface FormData {
  employmentType: string;
  firstName: string;
  lastName: string;
  email: string;
  placeOfWork: string;
  bvn: string;
  nin: string;
  phoneNumber: string;
  ippis: string;
  gender: string;
  dateOfBirth: string;
  // Step 2 fields - now only 2 uploads
  selfieImage: File | null;
  idCardImage: File | null;
  // Step 3 fields
  bankName: string;
  accountNumber: string;
  referralCode: string;
  hearAboutUs: string;
  agreeToTerms: boolean;
}

// Dummy icon paths
const DUMMY_BACK_ICON = "/icons/back-arrow.svg";
const DUMMY_PHONE_ICON = "/icons/phone-icon.svg";

// File Upload Component with Webcam Support
interface FileUploadProps {
  title: string;
  description: string;
  value: File | null;
  onChange: (file: File | null) => void;
  accept?: string;
}

// Helper function to get file type display
const getFileDisplay = (file: File) => {
  const fileType = file.type;
  const fileName = file.name.toLowerCase();

  if (fileType.startsWith("image/")) {
    return {
      content: (
        <div className="flex flex-col items-center space-y-2">
          <img
            src={URL.createObjectURL(file)}
            alt="Preview"
            className="w-32 h-32 object-contain rounded-lg border border-gray-300 bg-white"
          />
          <div className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 border border-blue-200">
            Image
          </div>
        </div>
      ),
      typeLabel: "Image",
    };
  } else if (fileType === "application/pdf" || fileName.endsWith(".pdf")) {
    return {
      content: (
        <div className="flex flex-col items-center space-y-4">
          {/* PDF Icon using SVG since Font Awesome might not be loaded */}
          <div className="w-20 h-20 flex items-center justify-center bg-red-50 rounded-lg">
            <svg
              className="w-12 h-12 text-red-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z M14 9h-1V4l5 5h-4z M8 9h8v2H8V9z M8 13h8v2H8v-2z M8 17h5v2H8v-2z" />
            </svg>
          </div>
          <div className="px-3 py-1 rounded-full text-xs font-semibold bg-red-50 text-red-600 border border-red-200">
            PDF
          </div>
        </div>
      ),
      typeLabel: "PDF",
    };
  } else if (
    fileType.includes("word") ||
    fileType.includes("document") ||
    fileName.endsWith(".doc") ||
    fileName.endsWith(".docx")
  ) {
    return {
      content: (
        <div className="flex flex-col items-center space-y-4">
          {/* Word Icon using SVG */}
          <div className="w-20 h-20 flex items-center justify-center bg-blue-50 rounded-lg">
            <svg
              className="w-12 h-12 text-blue-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z M14 9h-1V4l5 5h-4z M8 9h3v2H8V9z M12 9h3v2h-3V9z M8 13h8v2H8v-2z M8 17h8v2H8v-2z" />
            </svg>
          </div>
          <div className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 border border-blue-200">
            Word
          </div>
        </div>
      ),
      typeLabel: "Word",
    };
  } else if (
    fileType.includes("excel") ||
    fileType.includes("spreadsheet") ||
    fileName.endsWith(".xls") ||
    fileName.endsWith(".xlsx")
  ) {
    return {
      content: (
        <div className="flex flex-col items-center space-y-4">
          {/* Excel Icon using SVG */}
          <div className="w-20 h-20 flex items-center justify-center bg-green-50 rounded-lg">
            <svg
              className="w-12 h-12 text-green-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z M14 9h-1V4l5 5h-4z M8 9h8v2H8V9z M8 13h3v2H8v-2z M12 13h3v2h-3v-2z M8 17h8v2H8v-2z" />
            </svg>
          </div>
          <div className="px-3 py-1 rounded-full text-xs font-semibold bg-green-50 text-green-600 border border-green-200">
            Excel
          </div>
        </div>
      ),
      typeLabel: "Excel",
    };
  } else {
    return {
      content: (
        <div className="flex flex-col items-center space-y-4">
          {/* Generic File Icon using SVG */}
          <div className="w-20 h-20 flex items-center justify-center bg-gray-50 rounded-lg">
            <svg
              className="w-12 h-12 text-gray-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z M14 9h-1V4l5 5h-4z" />
            </svg>
          </div>
          <div className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-50 text-gray-600 border border-gray-200">
            Document
          </div>
        </div>
      ),
      typeLabel: "Document",
    };
  }
};

const FileUploadArea = ({
  title,
  description,
  value,
  onChange,
  accept = "image/*",
}: FileUploadProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showWebcam, setShowWebcam] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [isWebcamReady, setIsWebcamReady] = useState(false);
  const [webcamError, setWebcamError] = useState<string | null>(null);

  useEffect(() => {
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
  }, []);

  useEffect(() => {
    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [stream]);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onChange(file);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleBrowseFiles = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleCameraClick = () => {
    if (isMobile) {
      if (fileInputRef.current) {
        fileInputRef.current.setAttribute("capture", "environment");
        fileInputRef.current.click();
        setTimeout(() => {
          if (fileInputRef.current) {
            fileInputRef.current.removeAttribute("capture");
          }
        }, 100);
      }
    } else {
      openWebcam();
    }
  };

  const openWebcam = async () => {
    try {
      setWebcamError(null);
      setIsWebcamReady(false);
      setShowWebcam(true);

      await new Promise((resolve) => setTimeout(resolve, 100));

      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "user",
          width: { ideal: 1280 },
          height: { ideal: 720 },
        },
      });

      setStream(mediaStream);

      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;

        videoRef.current.onloadedmetadata = () => {
          videoRef.current
            ?.play()
            .then(() => {
              setIsWebcamReady(true);
            })
            .catch((error) => {
              console.error("Error playing video:", error);
              setIsWebcamReady(true);
            });
        };

        videoRef.current.onerror = (error) => {
          console.error("Video element error:", error);
          setWebcamError("Failed to initialize video stream");
          setIsWebcamReady(false);
        };

        setTimeout(() => {
          if (!isWebcamReady && videoRef.current) {
            videoRef.current
              .play()
              .then(() => {
                setIsWebcamReady(true);
              })
              .catch(console.error);
          }
        }, 1000);
      }
    } catch (error) {
      console.error("Error accessing webcam:", error);
      setWebcamError(
        "Unable to access webcam. Please check your permissions and make sure your camera is not being used by another application."
      );
      setShowWebcam(false);
    }
  };

  const closeWebcam = () => {
    if (stream) {
      stream.getTracks().forEach((track) => {
        track.stop();
      });
      setStream(null);
    }
    setShowWebcam(false);
    setIsWebcamReady(false);
    setWebcamError(null);
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current && isWebcamReady) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      if (!context) {
        console.error("Could not get canvas context");
        return;
      }

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      canvas.toBlob(
        (blob) => {
          if (blob) {
            const file = new File([blob], `webcam-capture-${Date.now()}.jpg`, {
              type: "image/jpeg",
              lastModified: Date.now(),
            });
            onChange(file);
            closeWebcam();
          } else {
            console.error("Failed to create blob from canvas");
            alert("Failed to capture photo. Please try again.");
          }
        },
        "image/jpeg",
        0.8
      );
    } else {
      console.error("Webcam not ready for capture");
      alert("Webcam is not ready yet. Please wait a moment and try again.");
    }
  };

  const handleDelete = () => {
    onChange(null);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const retryWebcam = () => {
    setWebcamError(null);
    openWebcam();
  };

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-1">{title}</h3>
        <p className="text-xs text-gray-500">{description}</p>
      </div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileSelect}
        accept={accept}
        className="hidden"
      />

      {/* Webcam Modal */}
      {showWebcam && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col">
          {/* Header */}
          <div className="p-4 bg-black bg-opacity-80 flex justify-between items-center shrink-0">
            <h3 className="text-lg font-semibold text-white">
              Take a Passport Photo
            </h3>
            <button
              onClick={closeWebcam}
              className="text-white text-xl bg-red-600 w-8 h-8 rounded-full flex items-center justify-center"
            >
              ✕
            </button>
          </div>

          {/* Camera View */}
          <div className="flex-1 bg-black relative flex items-center justify-center overflow-hidden">
            {webcamError ? (
              <div className="text-white text-center p-8">
                <div className="text-red-400 text-lg mb-4">⚠️</div>
                <p className="mb-4">{webcamError}</p>
                <button
                  onClick={retryWebcam}
                  className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                >
                  Retry
                </button>
              </div>
            ) : (
              <>
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  muted
                  className="w-full h-full object-cover"
                  onCanPlay={() => {
                    setIsWebcamReady(true);
                  }}
                  onError={() => {
                    setWebcamError("Failed to load video stream");
                    setIsWebcamReady(false);
                  }}
                />

                {/* Passport Guide */}
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                  <div className="relative">
                    <div className="w-96 h-112 border-4 border-white border-dashed rounded-lg opacity-70"></div>
                    <div className="absolute top-1/3 left-0 right-0 h-px bg-white opacity-50"></div>
                    <div className="absolute top-2/3 left-0 right-0 h-px bg-white opacity-50"></div>
                    <div className="absolute left-1/3 top-0 bottom-0 w-px bg-white opacity-50"></div>
                    <div className="absolute right-1/3 top-0 bottom-0 w-px bg-white opacity-50"></div>

                    <div className="absolute -bottom-20 left-0 right-0 text-center">
                      <p className="text-white text-lg font-semibold bg-black bg-opacity-70 px-6 py-3 rounded-lg">
                        📸 Position your face within the frame
                      </p>
                    </div>
                  </div>
                </div>

                {!isWebcamReady && !webcamError && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-2"></div>
                      <p>Initializing camera...</p>
                    </div>
                  </div>
                )}
              </>
            )}

            <canvas ref={canvasRef} className="hidden" />
          </div>

          {/* Capture Button */}
          <div className="p-6 bg-black bg-opacity-90 flex flex-col items-center space-y-4 shrink-0 border-t border-gray-600">
            <button
              onClick={capturePhoto}
              disabled={!isWebcamReady || !!webcamError}
              className="w-20 h-20 rounded-full border-4 border-white bg-red-600 hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-all duration-200 shadow-2xl transform hover:scale-105 active:scale-95"
            >
              <div className="w-16 h-16 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-red-500 border-2 border-white"></div>
              </div>
            </button>

            <p className="text-white text-lg font-bold text-center">
              📷 CLICK TO CAPTURE PHOTO
            </p>
          </div>
        </div>
      )}

      {/* Upload Area */}
      {value ? (
        <div className="space-y-4">
          {/* File Preview Container - Dashed Box */}
          <div className="border-2 border-dashed border-green-300 rounded-lg p-6 bg-green-50">
            {/* File Preview */}
            <div className="flex items-center justify-center mb-4">
              {value.type.startsWith("image/") ? (
                <div className="relative">
                  <img
                    src={URL.createObjectURL(value)}
                    alt="Preview"
                    className="w-32 h-32 object-cover rounded-lg border border-gray-300"
                  />
                </div>
              ) : (
                <div className="w-32 h-32 bg-gray-100 rounded-lg border border-gray-300 flex items-center justify-center">
                  {/* Use our new file type icons here if needed */}
                  <div className="text-center">
                    <div className="text-3xl mb-2">
                      {value.type === "application/pdf"
                        ? "📄"
                        : value.name.toLowerCase().endsWith(".doc") ||
                          value.name.toLowerCase().endsWith(".docx")
                        ? "📝"
                        : value.name.toLowerCase().endsWith(".xls") ||
                          value.name.toLowerCase().endsWith(".xlsx")
                        ? "📊"
                        : "📎"}
                    </div>
                    <div
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        value.type === "application/pdf"
                          ? "bg-red-100 text-red-700"
                          : value.name.toLowerCase().endsWith(".doc") ||
                            value.name.toLowerCase().endsWith(".docx")
                          ? "bg-blue-100 text-blue-700"
                          : value.name.toLowerCase().endsWith(".xls") ||
                            value.name.toLowerCase().endsWith(".xlsx")
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {value.type === "application/pdf"
                        ? "PDF"
                        : value.name.toLowerCase().endsWith(".doc") ||
                          value.name.toLowerCase().endsWith(".docx")
                        ? "Word"
                        : value.name.toLowerCase().endsWith(".xls") ||
                          value.name.toLowerCase().endsWith(".xlsx")
                        ? "Excel"
                        : "File"}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* File Summary - SEPARATE BOX BELOW */}
          <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between">
              {/* Left side - File info with Completed pill next to it */}
              <div className="flex items-center space-x-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center">
                    <p className="text-sm font-medium text-gray-900 truncate mr-3">
                      {value.name}
                    </p>
                    {/* Completed pill moved here, next to file name */}
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 flex-shrink-0">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                      Completed
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {formatFileSize(value.size)} • {value.type}
                  </p>
                </div>
              </div>

              {/* Right side - Delete button */}
              <button
                onClick={handleDelete}
                className="ml-4 p-2 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg transition-colors flex items-center justify-center flex-shrink-0"
                title="Delete file"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        // Empty Upload Area
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-purple-400 transition-colors bg-gray-50">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center justify-center space-x-3">
              {/* Upload icon SVG */}
              <svg
                className="w-8 h-8 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <div className="text-left">
                <p className="text-sm text-gray-600 font-medium">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs text-gray-500">
                  PNG, JPG, PDF, DOC, XLS up to 10MB
                </p>
              </div>
            </div>

            <div className="flex space-x-3">
              <button
                type="button"
                onClick={handleBrowseFiles}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors"
              >
                Browse Files
              </button>
              <button
                type="button"
                onClick={handleCameraClick}
                className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-lg text-sm font-medium hover:bg-purple-200 transition-colors"
              >
                {/* Camera icon SVG */}
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {isMobile ? "Take Photo" : "Open Webcam"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Success Modal Component - Larger version
const SuccessModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/20 z-40"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Content - Now Larger */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full mx-auto p-10 text-center pointer-events-auto">
          {/* Success Icon - Slightly larger */}
          <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg
              className="w-10 h-10 text-purple-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          {/* Header Text - Slightly larger */}
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Application Submitted!
          </h2>

          {/* Success Message - More spacing */}
          <p className="text-gray-600 mb-8 text-lg">
            Your loan application has been successfully submitted. We will
            review your application and get back to you within 24 hours.
          </p>

          {/* Enquiries Text */}
          <p className="text-sm text-gray-500 mb-8">
            For enquiries, contact us at{" "}
            <a
              href="mailto:support@mystash.com"
              className="text-purple-600 hover:text-purple-700 font-medium"
            >
              support@mystash.com
            </a>
          </p>

          {/* Close Button - Larger */}
          <button
            onClick={onClose}
            className="w-full bg-purple-600 text-white font-semibold py-4 px-6 rounded-lg hover:bg-purple-700 transition-colors duration-200 text-lg"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};

// The main content component that uses useSearchParams
function LoanDetailsContent() {
  const [currentStep, setCurrentStep] = useState(1);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    employmentType: "",
    firstName: "",
    lastName: "",
    email: "",
    placeOfWork: "",
    bvn: "",
    nin: "",
    phoneNumber: "",
    ippis: "",
    gender: "",
    dateOfBirth: "",
    selfieImage: null,
    idCardImage: null,
    bankName: "",
    accountNumber: "",
    referralCode: "",
    hearAboutUs: "",
    agreeToTerms: false,
  });

  const searchParams = useSearchParams();

  // Get employment type from URL parameters
  useEffect(() => {
    const employmentType = searchParams.get("employmentType");
    if (employmentType) {
      setFormData((prev) => ({
        ...prev,
        employmentType:
          employmentType.charAt(0).toUpperCase() +
          employmentType.slice(1) +
          " Government",
      }));
    }
  }, [searchParams]);

  const steps = [
    {
      number: 1,
      title: "Personal Information",
      description: "Basic details about yourself",
    },
    {
      number: 2,
      title: "Upload Documents",
      description: "Upload required documents",
    },
    {
      number: 3,
      title: "Bank & Agreement",
      description: "Finalize your loan application",
    },
  ];

  // Check if all required fields are filled for each step
  const isStep1Complete = () => {
    const requiredFields: (keyof FormData)[] = [
      "firstName",
      "lastName",
      "email",
      "placeOfWork",
      "bvn",
      "phoneNumber",
      "gender",
      "dateOfBirth",
      "nin", // Added NIN as required
      "ippis", // Added IPPIS as required
    ];
    return requiredFields.every((field) => {
      const value = formData[field];
      return typeof value === "string" && value.trim() !== "";
    });
  };

  const isStep2Complete = () => {
    return formData.selfieImage !== null && formData.idCardImage !== null;
  };

  const isStep3Complete = () => {
    const requiredFields: (keyof FormData)[] = [
      "bankName",
      "accountNumber",
      "hearAboutUs",
    ];
    return (
      requiredFields.every((field) => {
        const value = formData[field];
        return typeof value === "string" && value.trim() !== "";
      }) && formData.agreeToTerms
    );
  };

  const handleInputChange = (
    field: keyof FormData,
    value: string | boolean | File | null
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleFileUpload = (field: keyof FormData, file: File | null) => {
    handleInputChange(field, file);
  };

  const handleContinue = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      console.log("Submitting application:", formData);
      setShowSuccessModal(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      window.history.back();
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Success Modal */}
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
      />

      {/* Header with Logo */}
      <div className="py-6 px-8">
        <img
          src="/logo/mystashlogo.svg"
          alt="MyStash"
          className="h-8 w-auto mt-4"
        />
      </div>

      {/* Main Content */}
      <div className="flex min-h-[calc(100vh-120px)]">
        {/* Left Sidebar */}
        <div className="w-1/3 bg-gray-50 pl-16 pr-8 py-8">
          <div className="max-w-sm">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              Complete Your Application
            </h1>
            <p className="text-gray-600 mb-10 text-base">
              Follow these simple steps to finalize your loan request
            </p>

            <div className="space-y-4">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-start space-x-3">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold transition-all duration-300 ${
                        currentStep === step.number
                          ? "bg-purple-600 text-white shadow-lg shadow-purple-500/50"
                          : currentStep > step.number
                          ? "bg-purple-500 text-white shadow-lg shadow-purple-500/30"
                          : "bg-white border border-gray-300 text-gray-400"
                      }`}
                    >
                      {step.number}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-0.5 h-8 bg-gray-300 mt-1"></div>
                    )}
                  </div>

                  <div className="flex-1 pt-0.5">
                    <h3
                      className={`font-semibold text-sm ${
                        currentStep === step.number
                          ? "text-gray-900"
                          : "text-gray-600"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-xs mt-0.5 leading-tight">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 p-8">
          <div className="max-w-2xl mx-auto">
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8">
                <div className="flex items-center justify-between mb-10">
                  <button
                    onClick={handleBack}
                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <img
                      src={DUMMY_BACK_ICON}
                      alt="Back"
                      className="w-6 h-6"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src =
                          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M15 19l-7-7 7-7'%3E%3C/path%3E%3C/svg%3E";
                      }}
                    />
                  </button>

                  <div className="text-center flex-1">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">
                      {steps[0].title}
                    </h2>
                    <p className="text-gray-600 text-lg">
                      {steps[0].description}
                    </p>
                  </div>

                  <div className="w-6"></div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Employment Type
                    </label>
                    <input
                      type="text"
                      value={formData.employmentType}
                      readOnly
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-gray-50 text-gray-700"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={(e) =>
                          handleInputChange("firstName", e.target.value)
                        }
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={(e) =>
                          handleInputChange("lastName", e.target.value)
                        }
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="john.doe@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Place of Work <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Federal Ministry of Finance"
                      value={formData.placeOfWork}
                      onChange={(e) =>
                        handleInputChange("placeOfWork", e.target.value)
                      }
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        BVN <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="12345678901"
                        value={formData.bvn}
                        onChange={(e) =>
                          handleInputChange("bvn", e.target.value)
                        }
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        NIN <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="12345678901"
                        value={formData.nin}
                        onChange={(e) =>
                          handleInputChange("nin", e.target.value)
                        }
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <img
                            src={DUMMY_PHONE_ICON}
                            alt="Phone"
                            className="w-5 h-5 text-gray-400"
                            onError={(e) => {
                              e.currentTarget.onerror = null;
                              e.currentTarget.src =
                                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'%3E%3C/path%3E%3C/svg%3E";
                            }}
                          />
                        </div>
                        <div className="absolute inset-y-0 left-8 w-px bg-gray-300"></div>
                        <input
                          type="tel"
                          placeholder="08012345678"
                          value={formData.phoneNumber}
                          onChange={(e) =>
                            handleInputChange("phoneNumber", e.target.value)
                          }
                          className="w-full border border-gray-300 rounded-lg pl-12 pr-4 py-3 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        IPPIS <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="IPPIS number"
                        value={formData.ippis}
                        onChange={(e) =>
                          handleInputChange("ippis", e.target.value)
                        }
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Gender
                      </label>
                      <select
                        value={formData.gender}
                        onChange={(e) =>
                          handleInputChange("gender", e.target.value)
                        }
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      >
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={(e) =>
                          handleInputChange("dateOfBirth", e.target.value)
                        }
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end mt-8">
                  <button
                    onClick={handleContinue}
                    disabled={!isStep1Complete()}
                    className={`px-8 py-3 rounded-lg font-semibold ${
                      isStep1Complete()
                        ? "bg-purple-700 text-white hover:bg-purple-800"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Upload Documents */}
            {currentStep === 2 && (
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8">
                <div className="flex items-center justify-between mb-10">
                  <button
                    onClick={handleBack}
                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <img
                      src={DUMMY_BACK_ICON}
                      alt="Back"
                      className="w-6 h-6"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src =
                          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M15 19l-7-7 7-7'%3E%3C/path%3E%3C/svg%3E";
                      }}
                    />
                  </button>

                  <div className="text-center flex-1">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">
                      {steps[1].title}
                    </h2>
                    <p className="text-gray-600 text-lg">
                      {steps[1].description}
                    </p>
                  </div>

                  <div className="w-6"></div>
                </div>

                <div className="space-y-8">
                  <FileUploadArea
                    title="Selfie Photo"
                    description="Take a clear selfie showing your face"
                    value={formData.selfieImage}
                    onChange={(file) => handleFileUpload("selfieImage", file)}
                  />

                  <FileUploadArea
                    title="ID Card"
                    description="Upload a clear photo of your government issued ID"
                    value={formData.idCardImage}
                    onChange={(file) => handleFileUpload("idCardImage", file)}
                  />
                </div>

                <div className="flex justify-end mt-8">
                  <button
                    onClick={handleContinue}
                    disabled={!isStep2Complete()}
                    className={`px-8 py-3 rounded-lg font-semibold ${
                      isStep2Complete()
                        ? "bg-purple-700 text-white hover:bg-purple-800"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Bank & Agreement */}
            {currentStep === 3 && (
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8">
                <div className="flex items-center justify-between mb-10">
                  <button
                    onClick={handleBack}
                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <img
                      src={DUMMY_BACK_ICON}
                      alt="Back"
                      className="w-6 h-6"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src =
                          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M15 19l-7-7 7-7'%3E%3C/path%3E%3C/svg%3E";
                      }}
                    />
                  </button>

                  <div className="text-center flex-1">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">
                      {steps[2].title}
                    </h2>
                    <p className="text-gray-600 text-lg">
                      {steps[2].description}
                    </p>
                  </div>

                  <div className="w-6"></div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Bank Name <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.bankName}
                      onChange={(e) =>
                        handleInputChange("bankName", e.target.value)
                      }
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="">Select your bank</option>
                      <option value="access">Access Bank</option>
                      <option value="zenith">Zenith Bank</option>
                      <option value="gtb">GTBank</option>
                      <option value="firstbank">First Bank</option>
                      <option value="uba">UBA</option>
                      <option value="fidelity">Fidelity Bank</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Salary Account Number{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="0123456789"
                        value={formData.accountNumber}
                        onChange={(e) =>
                          handleInputChange("accountNumber", e.target.value)
                        }
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Referral Code
                      </label>
                      <input
                        type="text"
                        placeholder="Optional"
                        value={formData.referralCode}
                        onChange={(e) =>
                          handleInputChange("referralCode", e.target.value)
                        }
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      How did you hear about us?{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.hearAboutUs}
                      onChange={(e) =>
                        handleInputChange("hearAboutUs", e.target.value)
                      }
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="">Select an option</option>
                      <option value="friend">Friend or Family</option>
                      <option value="social">Social Media</option>
                      <option value="search">Search Engine</option>
                      <option value="ad">Advertisement</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 mt-6">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      By submitting this application, you agree to allow MyStash
                      Financial Services to perform credit checks, verify your
                      employment, and access your financial information for the
                      purpose of processing your loan application. You
                      understand that providing false information may result in
                      application rejection or legal action. You consent to
                      receive communications regarding your application via
                      email, SMS, or phone. MyStash reserves the right to
                      approve or decline your application based on our lending
                      criteria. All loan agreements are subject to our terms and
                      conditions and regulatory requirements.
                    </p>
                  </div>

                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={(e) =>
                        handleInputChange("agreeToTerms", e.target.checked)
                      }
                      className="mt-1 w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                    />
                    <label
                      htmlFor="agreeToTerms"
                      className="text-sm text-gray-700"
                    >
                      I have read and agree to the terms and conditions above
                    </label>
                  </div>
                </div>

                <div className="flex justify-end mt-8">
                  <button
                    onClick={handleContinue}
                    disabled={!isStep3Complete()}
                    className={`px-8 py-3 rounded-lg font-semibold ${
                      isStep3Complete()
                        ? "bg-purple-700 text-white hover:bg-purple-800"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    Submit Application
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Main export with Suspense boundary
export default function LoanDetailsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading application form...</p>
          </div>
        </div>
      }
    >
      <LoanDetailsContent />
    </Suspense>
  );
}