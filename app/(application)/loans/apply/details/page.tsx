// app/(application)/loans/apply/details/page.tsx
"use client";

import React, { useState, useEffect, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

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
const DUMMY_BACK_ICON = "/icons/formback.svg";
const DUMMY_PHONE_ICON = "/icons/loanflag.svg";

// File Upload Component with Webcam Support
interface FileUploadProps {
  title: string;
  value: File | null;
  onChange: (file: File | null) => void;
  accept?: string;
  allowWebcam?: boolean;
  showPreview?: boolean; // New prop to control preview visibility
}

const FileUploadArea = ({
  title,
  value,
  onChange,
  accept = "image/*",
  allowWebcam = true,
  showPreview = true, // Default to showing preview
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
      // Validate file size (10MB limit)
      if (file.size > 10 * 1024 * 1024) {
        alert("File size exceeds 10MB limit");
        return;
      }
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

  const checkCameraPermissions = async () => {
    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error("Camera API not supported in this browser");
      }

      if (navigator.permissions && navigator.permissions.query) {
        const permission = await navigator.permissions.query({ name: "camera" as any });
        if (permission.state === "denied") {
          throw new Error("Camera permissions denied");
        }
      }
      
      return true;
    } catch (error) {
      console.error("Permission check failed:", error);
      throw error;
    }
  };

  const handleCameraClick = async () => {
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
      try {
        await checkCameraPermissions();
        openWebcam();
      } catch (error: any) {
        alert(error.message || "Cannot access camera. Please check permissions.");
      }
    }
  };

  const openWebcam = async () => {
    try {
      setWebcamError(null);
      setIsWebcamReady(false);
      setShowWebcam(true);

      await new Promise((resolve) => setTimeout(resolve, 100));

      const constraints = {
        video: {
          facingMode: "user",
          width: { ideal: 1280, max: 1920 },
          height: { ideal: 720, max: 1080 },
        },
        audio: false,
      };

      const fallbackConstraints = {
        video: true,
        audio: false,
      };

      let mediaStream;
      
      try {
        mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
      } catch (err) {
        console.warn("Primary constraints failed, trying fallback:", err);
        mediaStream = await navigator.mediaDevices.getUserMedia(fallbackConstraints);
      }

      setStream(mediaStream);

      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;

        const video = videoRef.current;
        
        const onLoadedMetadata = () => {
          video
            .play()
            .then(() => {
              setIsWebcamReady(true);
            })
            .catch((error) => {
              console.error("Error playing video:", error);
              video.muted = true;
              video.play().then(() => {
                setIsWebcamReady(true);
              }).catch(e => {
                console.error("Second play attempt failed:", e);
                setWebcamError("Failed to start video playback. Please refresh and try again.");
              });
            });
        };

        const onError = (error: any) => {
          console.error("Video element error:", error);
          setWebcamError("Video stream error. Please check camera permissions.");
          setIsWebcamReady(false);
        };

        video.onloadedmetadata = onLoadedMetadata;
        video.onerror = onError;

        const timeoutId = setTimeout(() => {
          if (!isWebcamReady) {
            if (video.readyState >= 2) {
              video.play().catch(console.error);
            }
          }
        }, 3000);

        return () => clearTimeout(timeoutId);
      }
    } catch (error: any) {
      console.error("Error accessing webcam:", error);
      
      let errorMessage = "Unable to access webcam.";
      
      if (error.name === "NotAllowedError" || error.name === "PermissionDeniedError") {
        errorMessage = "Camera access was denied. Please allow camera permissions in your browser settings.";
      } else if (error.name === "NotFoundError" || error.name === "DevicesNotFoundError") {
        errorMessage = "No camera found. Please connect a camera and try again.";
      } else if (error.name === "NotReadableError" || error.name === "TrackStartError") {
        errorMessage = "Camera is already in use by another application.";
      } else if (error.name === "OverconstrainedError" || error.name === "ConstraintNotSatisfiedError") {
        errorMessage = "Camera doesn't support requested settings. Please try a different camera.";
      } else if (error.name === "SecurityError") {
        errorMessage = "Camera access is blocked for security reasons. Try accessing via HTTPS.";
      } else if (error.name === "AbortError") {
        errorMessage = "Camera access was aborted. Please try again.";
      }

      setWebcamError(errorMessage);
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
    <div className="space-y-6">
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
              <div className="text-white text-center p-8 max-w-md">
                <div className="text-red-400 text-4xl mb-4">📷</div>
                <h4 className="text-xl font-semibold mb-3">Camera Error</h4>
                <p className="mb-6 text-gray-300">{webcamError}</p>
                <div className="space-y-3">
                  <button
                    onClick={retryWebcam}
                    className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 w-full"
                  >
                    Try Again
                  </button>
                  <button
                    onClick={closeWebcam}
                    className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 w-full"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <>
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  muted
                  className={`w-full h-full object-cover ${!isWebcamReady ? 'opacity-0' : 'opacity-100'}`}
                  onCanPlay={() => {
                    setIsWebcamReady(true);
                  }}
                  onError={() => {
                    setWebcamError("Failed to load video stream");
                    setIsWebcamReady(false);
                  }}
                />

                {!isWebcamReady && !webcamError && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                      <p className="text-lg">Initializing camera...</p>
                      <p className="text-sm text-gray-400 mt-2">
                        Please allow camera permissions if prompted
                      </p>
                    </div>
                  </div>
                )}

                {/* Only show passport guide when webcam is ready */}
                {isWebcamReady && (
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
                )}

                <canvas ref={canvasRef} className="hidden" />
              </>
            )}
          </div>

          {/* Capture Button - Only show when ready */}
          {isWebcamReady && !webcamError && (
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
          )}
        </div>
      )}

      {/* Upload Area */}
      {value ? (
        <div className="space-y-4">
          {/* Only show preview box if showPreview is true */}
          {showPreview && (
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
          )}

          {/* File Summary - ALWAYS SHOWN */}
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
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 shrink-0">
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
                className="ml-4 p-2 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg transition-colors flex items-center justify-center shrink-0"
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
                <p className="text-base text-gray-700 font-medium">
                  Click to upload or drag and drop
                </p>
                <p className="text-sm text-gray-500">
                  You can upload jpeg,png, or pdf files
                </p>
              </div>
            </div>

            <div className="flex space-x-3">
              <button
                type="button"
                onClick={handleBrowseFiles}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg text-base font-medium hover:bg-purple-700 transition-colors"
              >
                Browse Files
              </button>
              
              {/* Conditionally show camera button */}
              {allowWebcam && (
                <button
                  type="button"
                  onClick={handleCameraClick}
                  className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-lg text-base font-medium hover:bg-purple-200 transition-colors"
                >
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
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Better approach using React state
const SuccessModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [imgError, setImgError] = useState(false);
  
  if (!isOpen) return null;

  const SUCCESS_ICON = "/icons/successmodalicon.svg";

  return (
    <>
      <div
        className="fixed inset-0 bg-black/20 z-40"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full mx-auto p-10 text-center pointer-events-auto">
          {/* Icon container */}
          <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-8">
            {imgError ? (
              // Fallback SVG when image fails to load
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
            ) : (
              // Try to load the image first
              <img
                src={SUCCESS_ICON}
                alt="Success"
                className="w-10 h-10"
                onError={() => setImgError(true)}
              />
            )}
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Loan Application Successful!
          </h2>

          <p className="text-gray-600 mb-8 text-lg">
            Please check your email for confirmation or spam folder
          </p>

          <p className="text-base text-gray-500 mb-8"> {/* Changed from text-sm to text-base */}
            For enquiries, or assistance; please call{" "}
            <a
              href="mailto:support@mystash.com"
              className="text-gray-800 font-bold" //{/* Added font-bold */}
            >
              +2348131462292
            </a>
          </p>

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
      text: "Personal Details",
    },
    {
      number: 2,
      text: "KYC Documents",
    },
    {
      number: 3,
      text: "Bank Details",
    },
  ];

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
      "nin",
      "ippis",
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

  const getStepStatus = (stepNumber: number) => {
    if (stepNumber === currentStep) return "current";
    if (stepNumber < currentStep) return "completed";
    return "upcoming";
  };

  return (
    <div className="min-h-screen bg-white pt-6"> {/* Added 25px padding-top */}
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
      />

      {/* Main Content */}
      <div className="flex min-h-screen">
        {/* Left Sidebar - 50% width */}
        <div className="w-1/2 bg-white pl-16 pr-8 py-8">
          <div className="max-w-lg">
            {/* MyStash Logo */}
            <div className="mb-10">
              <Link href="/">
                <img
                  src="/logo/mystashlogo.svg"
                  alt="MyStash Home"
                  className="h-10 w-auto"
                />
              </Link>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-2 mt-25">
              We've Got a Payday Loan for <span className="text-purple-600">You!</span> 
            </h1>
            <p className="text-2xl text-gray-600 mb-12">
              Apply now- Loan approved in 5 minutes
            </p>

            {/* Steps with reduced spacing and smaller circles */}
            <div className="space-y-8"> {/* Reduced from space-y-10 to space-y-8 */}
              {steps.map((step, index) => {
                const status = getStepStatus(step.number);
                
                return (
                  <div key={step.number} className="flex items-center space-x-6">
                    <div className="flex flex-col items-center relative">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-semibold transition-all duration-300 ${
                          status === "current"
                            ? "bg-gray-200 text-gray-700 border-2 border-gray-300"
                            : status === "completed"
                            ? "bg-gray-300 text-gray-700 border-2 border-gray-400" // Changed to gray for completed steps
                            : "bg-white border-2 border-gray-300 text-gray-400"
                        }`}
                      >
                        {step.number}
                      </div>
                      {index < steps.length - 1 && (
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-gray-300"></div> //{/* Reduced height from h-16 to h-12 */}
                      )}
                    </div>

                    <div className="flex-1 pt-1">
                      <h3
                        className={`font-medium text-xl ${
                          status === "current"
                            ? "text-gray-900"
                            : "text-gray-600"
                        }`}
                      >
                        {step.text}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Content - 50% width with extra 5px padding-top */}
        <div className="w-1/2 bg-gray-50 p-8 pt-18"> {/* Added pt-13 for extra 5px above right card section */}
          <div className="max-w-2xl mx-auto">
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8">
                <div className="flex items-center justify-between mb-10">
                  <button
                    onClick={handleBack}
                    className="p-3"
                  >
                    <img
                      src={DUMMY_BACK_ICON}
                      alt="Back"
                      className="w-20 h-20" // Already 20px × 20px
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src =
                          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M15 19l-7-7 7-7'%3E%3C/path%3E%3C/svg%3E";
                      }}
                    />
                  </button>

                  <div className="text-center flex-1">
                    <h2 className="text-4xl font-bold text-purple-500 mb-2">
                      Personal Details
                    </h2>
                    <p className="text-lg text-gray-600">
                      "Fill in your request- cash is on the way"
                    </p>
                  </div>

                  <div className="w-10"></div>
                </div>

                <div className="space-y-8">
                  <div>
                    <label className="block text-lg font-medium text-gray-900 mb-2">
                      Employment Type
                    </label>
                    <input
                      type="text"
                      value={formData.employmentType}
                      readOnly
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-gray-50 text-gray-700 text-lg"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-lg font-medium text-gray-900 mb-2">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={(e) =>
                          handleInputChange("firstName", e.target.value)
                        }
                        maxLength={50}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-lg font-medium text-gray-900 mb-2">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={(e) =>
                          handleInputChange("lastName", e.target.value)
                        }
                        maxLength={50}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-lg font-medium text-gray-900 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="john.doe@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      maxLength={100}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-lg font-medium text-gray-900 mb-2">
                      Place of Work <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Federal Ministry of Finance"
                      value={formData.placeOfWork}
                      onChange={(e) =>
                        handleInputChange("placeOfWork", e.target.value)
                      }
                      maxLength={100}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-lg font-medium text-gray-900 mb-2">
                        BVN <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="12345678901"
                        value={formData.bvn}
                        onChange={(e) => {
                          // Allow only numbers
                          const value = e.target.value.replace(/\D/g, '');
                          if (value.length <= 11) {
                            handleInputChange("bvn", value);
                          }
                        }}
                        maxLength={11}
                        pattern="[0-9]{11}"
                        inputMode="numeric"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
                        required
                      />
                      <p className="text-sm text-gray-500 mt-1">11 digits required</p>
                    </div>
                    <div>
                      <label className="block text-lg font-medium text-gray-900 mb-2">
                        NIN <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="12345678901"
                        value={formData.nin}
                        onChange={(e) => {
                          // Allow only numbers
                          const value = e.target.value.replace(/\D/g, '');
                          if (value.length <= 11) {
                            handleInputChange("nin", value);
                          }
                        }}
                        maxLength={11}
                        pattern="[0-9]{11}"
                        inputMode="numeric"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
                        required
                      />
                      <p className="text-sm text-gray-500 mt-1">11 digits required</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-lg font-medium text-gray-900 mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <img
                            src={DUMMY_PHONE_ICON}
                            alt="Phone"
                            className="w-9 h-9 -ml-1 text-gray-400"
                            onError={(e) => {
                              e.currentTarget.onerror = null;
                              e.currentTarget.src =
                                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'%3E%3C/path%3E%3C/svg%3E";
                            }}
                          />
                        </div>
                        <div className="absolute inset-y-0 left-10 w-px bg-gray-300"></div>
                        <input
                          type="tel"
                          placeholder="08012345678"
                          value={formData.phoneNumber}
                          onChange={(e) => {
                            // Allow only numbers
                            const value = e.target.value.replace(/\D/g, '');
                            if (value.length <= 11) {
                              handleInputChange("phoneNumber", value);
                            }
                          }}
                          maxLength={11}
                          pattern="[0-9]{11}"
                          inputMode="numeric"
                          className="w-full border border-gray-300 rounded-lg pl-14 pr-4 py-3 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
                          required
                        />
                      </div>
                      <p className="text-sm text-gray-500 mt-1">11 digits required</p>
                    </div>
                    <div>
                      <label className="block text-lg font-medium text-gray-900 mb-2">
                        IPPIS <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="IPPIS number"
                        value={formData.ippis}
                        onChange={(e) =>
                          handleInputChange("ippis", e.target.value)
                        }
                        maxLength={20}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-lg font-medium text-gray-900 mb-2">
                        Gender
                      </label>
                      <div className="relative">
                        <select
                          value={formData.gender}
                          onChange={(e) =>
                            handleInputChange("gender", e.target.value)
                          }
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none text-lg"
                        >
                          <option value="">Select gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                          <svg
                            className="w-5 h-5 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-lg font-medium text-gray-900 mb-2">
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={(e) =>
                          handleInputChange("dateOfBirth", e.target.value)
                        }
                        max={new Date().toISOString().split('T')[0]}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end mt-8">
                  <button
                    onClick={handleContinue}
                    disabled={!isStep1Complete()}
                    className={`px-8 py-4 rounded-lg font-semibold text-lg ${
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
                    className="p-3"
                  >
                    <img
                      src={DUMMY_BACK_ICON}
                      alt="Back"
                      className="w-20 h-20" // Changed from w-10 h-10 to w-20 h-20
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src =
                          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M15 19l-7-7 7-7'%3E%3C/path%3E%3C/svg%3E";
                      }}
                    />
                  </button>

                  <div className="text-center flex-1">
                    <h2 className="text-4xl font-bold text-purple-600 mb-2">
                      KYC Document
                    </h2>
                    <p className="text-lg text-gray-600">
                      You are already halfway completed
                    </p>
                  </div>

                  <div className="w-10"></div>
                </div>

                <div className="space-y-10">
                  {/* Selfie Photo - Allow webcam WITH preview */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-medium text-gray-900 mb-2">
                        Upload a face image
                      </h3>
                    </div>
                    <FileUploadArea
                      title="Selfie Photo"
                      value={formData.selfieImage}
                      onChange={(file) => handleFileUpload("selfieImage", file)}
                      accept="image/*"
                      allowWebcam={true}
                      showPreview={true} // Show preview for selfie
                    />
                  </div>

                  {/* ID Card - Disable webcam WITHOUT preview */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-medium text-gray-900 mb-2">
                        Upload your staff ID or Employment Letter
                      </h3>
                    </div>
                    <FileUploadArea
                      title="ID Card"
                      value={formData.idCardImage}
                      onChange={(file) => handleFileUpload("idCardImage", file)}
                      accept="image/*,.pdf,.doc,.docx,.xls,.xlsx"
                      allowWebcam={false}
                      showPreview={false} // NO preview for ID card
                    />
                  </div>
                </div>

                <div className="flex justify-end mt-8">
                  <button
                    onClick={handleContinue}
                    disabled={!isStep2Complete()}
                    className={`px-8 py-4 rounded-lg font-semibold text-lg ${
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
                    className="p-3"
                  >
                    <img
                      src={DUMMY_BACK_ICON}
                      alt="Back"
                      className="w-20 h-20" // Changed from w-10 h-10 to w-20 h-20
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src =
                          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M15 19l-7-7 7-7'%3E%3C/path%3E%3C/svg%3E";
                      }}
                    />
                  </button>

                  <div className="text-center flex-1">
                    <h2 className="text-4xl font-bold text-purple-600 mb-3">
                      Bank Details
                    </h2>
                    <p className="text-lg text-gray-600">
                      Help us process faster- add your salary account details.
                    </p>
                  </div>

                  <div className="w-10"></div>
                </div>

                <div className="space-y-8">
                  <div>
                    <label className="block text-lg font-medium text-gray-900 mb-2">
                      Select Bank Name <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.bankName}
                      onChange={(e) =>
                        handleInputChange("bankName", e.target.value)
                      }
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
                      required
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
                      <label className="block text-lg font-medium text-gray-900 mb-2">
                        Salary Account Number{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="0123456789"
                        value={formData.accountNumber}
                        onChange={(e) => {
                          // Allow only numbers
                          const value = e.target.value.replace(/\D/g, '');
                          if (value.length <= 10) {
                            handleInputChange("accountNumber", value);
                          }
                        }}
                        maxLength={10}
                        pattern="[0-9]{10}"
                        inputMode="numeric"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
                        required
                      />
                      <p className="text-sm text-gray-500 mt-1">10 digits required</p>
                    </div>
                    <div>
                      <label className="block text-lg font-medium text-gray-900 mb-2">
                        Referral Code
                      </label>
                      <input
                        type="text"
                        placeholder="Optional"
                        value={formData.referralCode}
                        onChange={(e) =>
                          handleInputChange("referralCode", e.target.value)
                        }
                        maxLength={20}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-lg font-medium text-gray-900 mb-2">
                      How did you hear about us?{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.hearAboutUs}
                      onChange={(e) =>
                        handleInputChange("hearAboutUs", e.target.value)
                      }
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
                      required
                    >
                      <option value="">Select an option</option>
                      <option value="google">Google</option>
                      <option value="imstagram">Instagram</option>
                      <option value="facebook">Facebook</option>
                      <option value="twitter">Twitter</option>
                      <option value="email_letter">Email letter</option>
                      <option value="referrak">Referral</option>
                      <option value="others">Others</option>
                    </select>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 mt-6">
                    <p className="text-base text-gray-600 leading-relaxed">
                      By clicking "SUBMIT", I consent to myStash obtaining information from
                      relevant third parties as may be neccessary, on my employment details,
                      salary payment, loans, and other related data, to decide on my loan
                      application. Additionally, you confirm your acknowledgement and acceptance
                      of our <a href="/company/privacy" className="underline decoration-black text-black hover:opacity-80">Privacy Policy</a>
                      {' '}and{' '}
                      <a href="/company/loan-terms" className="underline decoration-black text-black hover:opacity-80">Loan Terms and Conditions</a>.
                      You also consent to the repayment amount being deducted from your salary at source,
                      before credit to your account and any outstanding payments being recovered automatically
                      from any other account linked to you in case of default.
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
                      className="mt-1 w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                      required
                    />
                    <label
                      htmlFor="agreeToTerms"
                      className="text-base text-gray-700"
                    >
                      I agree to receive updates, offers and markerting communication frm myStash{" "}
                      <span className="text-red-500">*</span>
                    </label>
                  </div>
                </div>

                <div className="flex justify-end mt-8">
                  <button
                    onClick={handleContinue}
                    disabled={!isStep3Complete()}
                    className={`px-8 py-4 rounded-lg font-semibold text-lg ${
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