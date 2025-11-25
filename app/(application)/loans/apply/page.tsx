// app/(application)/loans/apply/page.tsx
"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoanApplyPage() {
  const [employmentType, setEmploymentType] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanTenure, setLoanTenure] = useState("");
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();

  const isFormValid = employmentType && loanAmount && loanTenure;

  // Format amount with commas
  const formatAmount = (value: string) => {
    // Remove non-digit characters
    const digits = value.replace(/\D/g, "");
    // Format with commas
    return digits.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatAmount(e.target.value);
    setLoanAmount(formattedValue);
  };

  // Calculate repayable amount (6% monthly interest)
  const calculateRepayableAmount = () => {
    const amount = parseInt(loanAmount.replace(/,/g, "")) || 0;
    const tenure = parseInt(loanTenure) || 0;
    const monthlyInterestRate = 0.06; // 6%
    const totalInterest = amount * monthlyInterestRate * tenure;
    return (amount + totalInterest).toLocaleString();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    setShowModal(true);
  };

  const handleBack = () => {
    window.history.back();
  };

  return (
    <>
      <div className="min-h-[130vh] bg-white relative overflow-hidden">
        {/* Back Arrow */}
        <button
          onClick={handleBack}
          className="absolute top-8 left-8 z-20 p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </button>

        {/* Left Section */}
        <div
          className="absolute inset-0 bg-white min-h-[130vh] mt-10"
          style={{
            clipPath: "polygon(0 0, 60% 0, 45% 100%, 0 100%)",
          }}
        >
          <div className="h-full">
            <div className="max-w-2xl px-8 pt-12 pb-32 ml-8">
              {/* Logo */}
              <div className="mb-15">
                <img
                  src="/logo/mystashlogo.svg"
                  alt="MyStash"
                  className="h-8 w-auto "
                />
              </div>

              {/* Mini Header */}
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Start Your Loan Application
              </h1>

              {/* Sub Text */}
              <p className="text-lg text-gray-600 mb-12">
                Tell us a bit about your needs and we'll match you with the
                perfect loan option.
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Employment Type - Updated Options */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Employment Type
                  </label>
                  <div className="relative">
                    <select
                      value={employmentType}
                      onChange={(e) => setEmploymentType(e.target.value)}
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none"
                      required
                    >
                      <option value="">Select employment type</option>
                      <option value="federal">Federal</option>
                      <option value="state">State</option>
                      <option value="local">Local</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-400"
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

                {/* Loan Amount with auto-formatting */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Loan Amount
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500">₦</span>
                    </div>
                    <input
                      type="text"
                      value={loanAmount}
                      onChange={handleAmountChange}
                      placeholder="Enter desired amount"
                      className="w-full bg-white border border-gray-300 rounded-lg pl-8 pr-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                {/* Loan Tenure - Updated Options */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Loan Tenure
                  </label>
                  <div className="relative">
                    <select
                      value={loanTenure}
                      onChange={(e) => setLoanTenure(e.target.value)}
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none"
                      required
                    >
                      <option value="">Select repayment period</option>
                      <option value="3">3 months</option>
                      <option value="6">6 months</option>
                      <option value="12">12 months</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-400"
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

                {/* Disclaimer */}
                <div className="bg-gray-50 rounded-lg p-6 mt-12">
                  <p className="text-sm text-gray-600 leading-relaxed max-w-prose">
                    By clicking "Apply Now", you understand that this initiates
                    a formal loan application process. We will perform a credit
                    check and verify the information provided. Your application
                    will be reviewed within 24 hours, and you may be contacted
                    for additional documentation. Approval is subject to our
                    lending criteria and regulatory requirements. All loan
                    agreements are governed by our terms and conditions.
                  </p>
                </div>

                {/* Button */}
                <button
                  type="submit"
                  disabled={!isFormValid}
                  className={`w-full font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg ${
                    isFormValid
                      ? "bg-purple-700 text-white hover:bg-purple-800 cursor-pointer"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  Apply Now
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div
          className="absolute inset-0 bg-purple-50 min-h-[130vh]"
          style={{
            clipPath: "polygon(65% 0, 100% 0, 100% 100%, 50% 100%)",
          }}
        >
          <div className="h-full w-full flex items-center justify-end">
            <img
              src="/images/loansapply.svg"
              alt="Loan Application"
              className="object-contain max-w-none scale-98"
            />
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full mx-auto">
            {/* Modal Header - Icon top-left, text centered */}
            <div className="relative pt-8 px-6">
              {/* Icon at top-left */}
              <div
                onClick={() => setShowModal(false)}
                className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-purple-200 transition-colors absolute left-6 top-8"
              >
                <img
                  src="/icons/summary-icon.svg"
                  alt="Summary"
                  className="w-6 h-6"
                />
              </div>

              {/* Centered header and subtext */}
              <div className="text-center pt-10">
                <h2 className="text-2xl font-bold text-gray-900">
                  Application Summary
                </h2>
                <p className="text-sm text-gray-600 mt-2">
                  Review your loan details
                </p>
              </div>
            </div>

            {/* 2x2 Grid - Centered with top padding */}
            <div className="p-6 grid grid-cols-2 gap-4 pt-8 mx-auto max-w-lg ">
              {/* Upper Left - Loan Amount */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-sm font-medium text-gray-500 mb-1">
                  Loan Amount
                </h3>
                <p className="text-lg font-semibold text-gray-900">
                  ₦{loanAmount}
                </p>
              </div>

              {/* Upper Right - Loan Tenure */}
              <div className="bg-gray-50 rounded-lg  ml-15 p-4">
                <h3 className="text-sm font-medium text-gray-500 mb-1">
                  Loan Tenure
                </h3>
                <p className="text-lg font-semibold text-gray-900">
                  {loanTenure} months
                </p>
              </div>

              {/* Lower Left - Repayable Amount */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-sm font-medium text-gray-500 mb-1">
                  Repayable Amount
                </h3>
                <p className="text-lg font-semibold text-gray-900">
                  ₦{calculateRepayableAmount()}
                </p>
              </div>

              {/* Lower Right - Interest */}
              <div className="bg-gray-50 rounded-lg ml-15 p-4">
                <h3 className="text-sm font-medium text-gray-500 mb-1">
                  Interest Rate
                </h3>
                <p className="text-lg font-semibold text-gray-900">
                  6% per month
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-gray-200 ">
              <button
                onClick={() => {
                  setShowModal(false);
                  router.push("/loans/apply/details"); // Use router navigation
                }}
                className="w-full bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg hover:bg-purple-800 transition-colors duration-200"
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
