// app/(application)/loans/apply/page.tsx
"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";

export default function LoanApplyPage() {
  const [employmentType, setEmploymentType] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanTenure, setLoanTenure] = useState("");
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();

  const isFormValid = employmentType && loanAmount && loanTenure;

  // Format amount with commas and validate numbers only
  const formatAmount = (value: string) => {
    const digits = value.replace(/\D/g, "");
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
    const monthlyInterestRate = 0.06;
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
      <div className="min-h-screen bg-white relative">
        {/* Main content grid */}
        <div className="flex min-h-screen">
          {/* Left: Form Section */}
          <div className="flex-1 flex items-center justify-center px-8 lg:px-16 xl:px-24 py-12">
            <div className="w-full max-w-md">
              {/* Breadcrumb Navigation */}
              <div className="mb-6">
                <button
                  onClick={handleBack}
                  className="inline-flex items-center text-sm text-gray-600 hover:text-purple-600 transition-colors group"
                >
                  <svg
                    className="w-4 h-4 mr-1.5 group-hover:translate-x-[-2px] transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  <span className="font-medium">Back to Loans</span>
                </button>
              </div>

              {/* Heading */}
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-3 leading-tight whitespace-nowrap">
                  We've Got a Payday Loan for <span className="text-purple-600 whitespace-nowrap">You!</span>
                </h1>
                <p className="text-gray-600 text-base">
                  Apply now—loan approved in 5 minutes
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Employment Type */}
                <div>
                  <label className="block text-base font-medium text-gray-700 mb-2">
                    Employment Type
                  </label>
                  <div className="relative">
                    <select
                      value={employmentType}
                      onChange={(e) => setEmploymentType(e.target.value)}
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-700 text-base focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none"
                      required
                    >
                      <option value="">Select employment type</option>
                      <option value="federal">Federal</option>
                      <option value="state">State</option>
                      <option value="local">Local</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
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

                {/* Loan Amount */}
                <div>
                  <label className="block text-base font-medium text-gray-700 mb-2">
                    Loan Amount
                  </label>
                  <input
                    type="text"
                    value={loanAmount}
                    onChange={handleAmountChange}
                    placeholder="Input loan amount"
                    maxLength={15}
                    pattern="[0-9,]*"
                    inputMode="numeric"
                    onKeyPress={(e) => {
                      if (!/[0-9]/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Delete' && e.key !== 'Tab') {
                        e.preventDefault();
                      }
                    }}
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-700 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>

                {/* Loan Tenure */}
                <div>
                  <label className="block text-base font-medium text-gray-700 mb-2">
                    Loan Tenure
                  </label>
                  <div className="relative">
                    <select
                      value={loanTenure}
                      onChange={(e) => setLoanTenure(e.target.value)}
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-700 text-base focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none"
                      required
                    >
                      <option value="">Select loan tenure</option>
                      <option value="3">3 months</option>
                      <option value="6">6 months</option>
                      <option value="12">12 months</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
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
                <div className="bg-gray-50 rounded-lg p-3 mt-4">
                  <p className="text-[10px] text-gray-600 leading-relaxed">
                    By clicking "APPLY NOW", I consent to myStash obtaining information from relevant third parties as may be necessary, on my loan request, and hereby authorise myStash to share related data, to decide on my loan application. Additionally, you confirm your acknowledgement and acceptance of myStash's{" "}
                    <span className="text-purple-600 underline cursor-pointer">privacy policy</span> and{" "}
                    <span className="text-purple-600 underline cursor-pointer">terms of use</span>, consent to the repayment amount being deducted from your salary at source, before credit to your account and any outstanding payments being recovered automatically from any other accounts linked to you in the case of default.
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!isFormValid}
                  className={`w-full font-semibold py-3 px-6 rounded-lg transition-colors duration-200 mt-6 ${
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

          {/* Right: Image Section */}
          <div className="hidden lg:block lg:w-1/2 xl:w-[45%]">
            <div className="sticky top-0 h-screen">
              <img
                src="/images/loansapply.svg"
                alt="Loan Application"
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "https://placehold.co/800x1200/7C3AED/FFFFFF?text=Professional+Woman";
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Modal rendered in a portal to avoid ancestor stacking contexts */}
      {showModal && <Modal>
        <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full mx-auto">
          <div className="relative pt-10 px-12">
            <button
              onClick={() => setShowModal(false)}
              className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-purple-200 transition-colors absolute left-12 top-10"
            >
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="text-center pt-16 pb-8">
              <h2 className="text-4xl font-bold text-purple-600 mb-3">Loan Breakdown</h2>
              <p className="text-base text-gray-600">View your loan breakdown</p>
            </div>
          </div>

          <div className="px-12 pb-10">
            <div className="grid grid-cols-2 gap-10">
              <div className="text-center">
                <h3 className="text-lg font-medium text-gray-600 mb-3">Loan Amount</h3>
                <p className="text-3xl font-bold text-gray-900">₦{loanAmount}</p>
              </div>

              <div className="text-center">
                <h3 className="text-lg font-medium text-gray-600 mb-3">Loan Tenor</h3>
                <p className="text-3xl font-bold text-gray-900">{loanTenure} Months</p>
              </div>

              <div className="text-center">
                <h3 className="text-lg font-medium text-gray-600 mb-3">Repayment Amount</h3>
                <p className="text-3xl font-bold text-gray-900">₦{calculateRepayableAmount()}</p>
              </div>

              <div className="text-center">
                <h3 className="text-lg font-medium text-gray-600 mb-3">Interest</h3>
                <p className="text-3xl font-bold text-gray-900">6% per-month</p>
              </div>
            </div>

            <button
              onClick={() => {
                setShowModal(false);
                router.push(`/loans/apply/details?employmentType=${employmentType}`);
              }}
              className="w-full bg-purple-600 text-white font-semibold text-lg py-4 px-6 rounded-xl hover:bg-purple-700 transition-colors duration-200 mt-10"
            >
              Proceed
            </button>
          </div>
        </div>
      </Modal>}
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
    <div className="fixed inset-0 bg-black/40 z-[99999] flex items-center justify-center p-4 ">
      {children}
    </div>,
    document.body
  );
}