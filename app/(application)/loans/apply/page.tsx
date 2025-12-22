// app/(application)/loans/apply/page.tsx
"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";

export default function LoanApplyPage() {
  const [employmentType, setEmploymentType] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanTenure, setLoanTenure] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [amountError, setAmountError] = useState<string | null>(null);
  const [isEmploymentOpen, setIsEmploymentOpen] = useState(false);
  const [isTenureOpen, setIsTenureOpen] = useState(false);
  const employmentRef = useRef<HTMLDivElement>(null);
  const tenureRef = useRef<HTMLDivElement>(null);

  const router = useRouter();

  // Dummy back icon path
  const DUMMY_BACK_ICON = "/icons/loanapplymodal.svg";

  // Loan amount limits
  const MIN_LOAN_AMOUNT = 30000;
  const MAX_LOAN_AMOUNT = 5000000;

  const isFormValid =
    employmentType && loanAmount && loanTenure && !amountError;

  // Format amount with commas and validate numbers only
  const formatAmount = (value: string) => {
    const digits = value.replace(/\D/g, "");
    return digits.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // Parse amount from formatted string
  const parseAmount = (formattedValue: string) => {
    return parseInt(formattedValue.replace(/,/g, "")) || 0;
  };

  // Validate loan amount
  const validateLoanAmount = (value: string) => {
    const amount = parseAmount(value);

    if (amount === 0) {
      setAmountError("Please enter a loan amount");
      return false;
    }

    if (amount < MIN_LOAN_AMOUNT) {
      setAmountError(
        `Minimum loan amount is ${MIN_LOAN_AMOUNT.toLocaleString()}`
      );
      return false;
    }

    if (amount > MAX_LOAN_AMOUNT) {
      setAmountError(
        `Maximum loan amount is ${MAX_LOAN_AMOUNT.toLocaleString()}`
      );
      return false;
    }

    setAmountError(null);
    return true;
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatAmount(e.target.value);
    setLoanAmount(formattedValue);

    // Validate as user types
    if (formattedValue) {
      validateLoanAmount(formattedValue);
    } else {
      setAmountError(null);
    }
  };

  // Calculate repayable amount (6% monthly interest)
  const calculateRepayableAmount = () => {
    const amount = parseInt(loanAmount.replace(/,/g, "")) || 0;
    const tenure = parseInt(loanTenure) || 0;
    const monthlyInterestRate = 0.06;
    const totalInterest = amount * monthlyInterestRate * tenure;
    return (amount + totalInterest).toLocaleString();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    // Final validation before showing modal
    if (!validateLoanAmount(loanAmount)) {
      return;
    }

    setShowModal(true);
  };

  const handleBack = () => {
    window.history.back();
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        employmentRef.current &&
        !employmentRef.current.contains(event.target as Node)
      ) {
        setIsEmploymentOpen(false);
      }
      if (
        tenureRef.current &&
        !tenureRef.current.contains(event.target as Node)
      ) {
        setIsTenureOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Employment options
  const employmentOptions = [
    { value: "federal", label: "Federal" },
    { value: "state", label: "State" },
    { value: "local", label: "Local" },
  ];

  // Tenure options
  const tenureOptions = [
    { value: "3", label: "3 months" },
    { value: "6", label: "6 months" },
    { value: "12", label: "12 months" },
  ];

  const handleSelectEmployment = (value: string) => {
    setEmploymentType(value);
    setIsEmploymentOpen(false);
  };

  const handleSelectTenure = (value: string) => {
    setLoanTenure(value);
    setIsTenureOpen(false);
  };

  return (
    <>
      <div className="min-h-screen bg-white relative">
        {/* Main content grid - Swapped positions */}
        <div className="flex min-h-screen">
          {/* Left: Image Section - Now on left, full height */}
          <div className="hidden lg:block lg:w-1/2">
            <div className="h-full">
              <img
                src="/images/loandetailsimage.svg"
                alt="Loan Application"
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src =
                    "https://placehold.co/800x1200/7C3AED/FFFFFF?text=Professional+Woman";
                }}
              />
            </div>
          </div>

          {/* Right: Form Section - Now on right with increased text sizes */}
          <div className="flex-1 flex items-center px-6 lg:px-10 xl:px-10 -ml-10 py-6">
            <div className="w-full max-w-lg mx-auto">
              {/* MyStash Logo */}
              <div className="flex justify-center mb-6">
                <Link href="/">
                  <img
                    src="/logo/mystashlogo.svg"
                    alt="MyStash Home"
                    className="h-11 w-auto"
                  />
                </Link>
              </div>

              {/* Back button without text */}
             

              {/* Heading - Increased text size */}
              <div className="mb-8">
                <h1 className="text-3xl whitespace-nowrap lg:text-[40px] font-bold text-gray-900 mb-2 leading-tight">
                  We've Got a Payday Loan for{" "}
                  <span className="text-purple-600">You!</span>
                </h1>
                <p className="text-2xl text-center text-gray-600">
                  Apply now—loan approved in 5 minutes
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-7">
                {/* Employment Type - Custom Dropdown */}
                <div ref={employmentRef}>
                  <label className="block text-xl font-medium text-gray-900 mb-3">
                    Employment Type
                  </label>
                  <div className="relative">
                    {/* Dropdown Trigger */}
                    <div
                      className="w-full bg-white border border-gray-300 rounded-lg px-5 py-4 text-gray-700 text-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent cursor-pointer flex justify-between items-center hover:border-purple-300 transition-colors"
                      onClick={() => setIsEmploymentOpen(!isEmploymentOpen)}
                    >
                      <span
                        className={
                          employmentType ? "text-gray-700" : "text-gray-400"
                        }
                      >
                        {employmentType
                          ? employmentOptions.find(
                              (opt) => opt.value === employmentType
                            )?.label
                          : "Select employment type"}
                      </span>

                      {/* Custom dropdown icon with animation */}
                      <img
                        src="/icons/loancalculatorarrow.svg"
                        alt="Dropdown arrow"
                        className={`w-6 h-6 text-gray-400 transition-transform duration-200 ${
                          isEmploymentOpen ? "transform rotate-180" : ""
                        }`}
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src =
                            "https://placehold.co/24x24/7C3AED/FFFFFF?text=▼";
                        }}
                      />
                    </div>

                    {/* Dropdown Options */}
                    {isEmploymentOpen && (
                      <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg">
                        {employmentOptions.map((option, index) => (
                          <React.Fragment key={option.value}>
                            <div
                              className={`px-5 py-4 cursor-pointer transition-colors duration-150 ${
                                employmentType === option.value
                                  ? "bg-purple-100 text-purple-700"
                                  : "text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                              }`}
                              onClick={() =>
                                handleSelectEmployment(option.value)
                              }
                            >
                              <span className="font-medium text-lg">
                                {option.label}
                              </span>
                            </div>
                            {/* Horizontal Line Separator */}
                            {index < employmentOptions.length - 1 && (
                              <div className="border-t border-gray-200"></div>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Loan Amount */}
                <div>
                  <label className="block text-xl font-medium text-gray-900 mb-3">
                    Loan Amount
                    <span className="text-lg text-gray-500 font-normal ml-2">
                      ({MIN_LOAN_AMOUNT.toLocaleString()} -{" "}
                      {MAX_LOAN_AMOUNT.toLocaleString()})
                    </span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={loanAmount}
                      onChange={handleAmountChange}
                      placeholder="Input loan amount"
                      maxLength={15}
                      pattern="[0-9,]*"
                      inputMode="numeric"
                      onKeyPress={(e) => {
                        if (
                          !/[0-9]/.test(e.key) &&
                          e.key !== "Backspace" &&
                          e.key !== "Delete" &&
                          e.key !== "Tab"
                        ) {
                          e.preventDefault();
                        }
                      }}
                      className={`w-full bg-white border rounded-lg px-5 py-4 text-gray-700 text-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                        amountError ? "border-red-300" : "border-gray-300"
                      }`}
                      required
                    />
                  </div>
                  {/* Error Message - Increased text size */}
                  {amountError && (
                    <div className="mt-3 text-lg text-red-600 flex items-center">
                      <svg
                        className="w-6 h-6 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {amountError}
                    </div>
                  )}
                </div>

                {/* Loan Tenure - Custom Dropdown */}
                <div ref={tenureRef}>
                  <label className="block text-xl font-medium text-gray-900 mb-3">
                    Loan Tenure
                  </label>
                  <div className="relative">
                    {/* Dropdown Trigger */}
                    <div
                      className="w-full bg-white border border-gray-300 rounded-lg px-5 py-4 text-gray-700 text-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent cursor-pointer flex justify-between items-center hover:border-purple-300 transition-colors"
                      onClick={() => setIsTenureOpen(!isTenureOpen)}
                    >
                      <span
                        className={
                          loanTenure ? "text-gray-700" : "text-gray-400"
                        }
                      >
                        {loanTenure
                          ? tenureOptions.find(
                              (opt) => opt.value === loanTenure
                            )?.label
                          : "Select loan tenure"}
                      </span>

                      {/* Custom dropdown icon with animation */}
                      <img
                        src="/icons/loancalculatorarrow.svg"
                        alt="Dropdown arrow"
                        className={`w-6 h-6 text-gray-400 transition-transform duration-200 ${
                          isTenureOpen ? "transform rotate-180" : ""
                        }`}
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src =
                            "https://placehold.co/24x24/7C3AED/FFFFFF?text=▼";
                        }}
                      />
                    </div>

                    {/* Dropdown Options */}
                    {isTenureOpen && (
                      <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg">
                        {tenureOptions.map((option, index) => (
                          <React.Fragment key={option.value}>
                            <div
                              className={`px-5 py-4 cursor-pointer transition-colors duration-150 ${
                                loanTenure === option.value
                                  ? "bg-purple-100 text-purple-700"
                                  : "text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                              }`}
                              onClick={() => handleSelectTenure(option.value)}
                            >
                              <span className="font-medium text-lg">
                                {option.label}
                              </span>
                            </div>
                            {/* Horizontal Line Separator */}
                            {index < tenureOptions.length - 1 && (
                              <div className="border-t border-gray-200"></div>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Disclaimer - Removed background color */}
                <div className="rounded-lg p-5 mt-6 border border-gray-200">
                  <p className="text-base text-gray-600 leading-relaxed">
                    By clicking "APPLY NOW", I consent to myStash obtaining
                    information from relevant third parties as may be necessary,
                    on my loan request, and hereby authorise myStash to share
                    related data, to decide on my loan application.
                    Additionally, you confirm your acknowledgement and
                    acceptance of myStash's{" "}
                    <span className="text-purple-600 underline cursor-pointer">
                      privacy policy
                    </span>{" "}
                    and{" "}
                    <span className="text-purple-600 underline cursor-pointer">
                      terms of use
                    </span>
                    , consent to the repayment amount being deducted from your
                    salary at source, before credit to your account and any
                    outstanding payments being recovered automatically from any
                    other accounts linked to you in the case of default.
                  </p>
                </div>

                {/* Submit Button - Increased text size */}
                <button
                  type="submit"
                  disabled={!isFormValid}
                  className={`w-full font-semibold text-xl py-5 px-6 rounded-lg transition-colors duration-200 mt-7 ${
                    isFormValid
                      ? "bg-purple-600 text-white hover:bg-purple-700 cursor-pointer"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  Apply Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Modal rendered in a portal */}
      {showModal && (
        <Modal>
          {/* Larger modal box with increased content size */}
          <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full mx-auto">
            {/* Header with back button */}
            <div className="relative pt-12 px-10">
              <button
                onClick={() => setShowModal(false)}
                className="w-15 h-15 rounded-full flex items-center justify-center cursor-pointer hover:bg-purple-200 bg-purple-100 transition-colors absolute left-10 top-12"
              >
                <img
                  src={DUMMY_BACK_ICON}
                  alt="Back"
                  className="w-25 h-25 px-2 py-2 text-purple-600"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src =
                      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M15 19l-7-7 7-7'%3E%3C/path%3E%3C/svg%3E";
                  }}
                />
              </button>

              <div className="text-center pt-14 pb-10">
                <h2 className="text-3xl font-bold text-purple-600 ">
                  Loan Breakdown
                </h2>
                <p className="text-base text-gray-600">
                  View your loan breakdown
                </p>
              </div>
            </div>

            <div className="px-12 pb-12">
              {/* 2x2 Grid - Centered in box but text aligned left */}
              <div className="grid grid-cols-2 gap-8 ml-10 mb-20">
                {/* Grid items with left-aligned text and slightly reduced font size */}
                <div className="text-left mb-10">
                  <h3 className="text-lg font-medium ml-5  text-gray-500 mb-2">
                    Loan Amount
                  </h3>
                  <p className="text-xl font-medium ml-5 text-gray-900">
                    {loanAmount}
                  </p>
                </div>

                <div className="text-left ml-20">
                  <h3 className="text-lg font-medium text-gray-500 mb-2 ">
                    Loan Tenor
                  </h3>
                  <p className="text-xl font-medium text-gray-900">
                    {loanTenure} Months
                  </p>
                </div>

                <div className="text-left">
                  <h3 className="text-lg font-medium ml-5 text-gray-500 mb-2">
                    Repayment Amount
                  </h3>
                  <p className="text-xl font-medium ml-5 text-gray-900">
                    {calculateRepayableAmount()}
                  </p>
                </div>

                <div className="text-left ml-20">
                  <h3 className="text-lg font-medium text-gray-500 mb-2">
                    Interest Rate
                  </h3>
                  <p className="text-xl font-medium text-gray-900">
                    6% per month
                  </p>
                </div>
              </div>

              {/* Proceed button */}
              <button
                onClick={() => {
                  setShowModal(false);
                  router.push(
                    `/loans/apply/details?employmentType=${employmentType}`
                  );
                }}
                className="w-[70%] bg-purple-600 text-white font-medium text-lg py-3 px-6 rounded-sm hover:bg-purple-700 transition-colors duration-200 block mx-auto"
              >
                Proceed
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}

// Simple portal Modal to ensure overlay sits above all stacking contexts
function Modal({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div className="fixed inset-0 bg-black/40 z-99999 flex items-center justify-center p-4">
      {children}
    </div>,
    document.body
  );
}