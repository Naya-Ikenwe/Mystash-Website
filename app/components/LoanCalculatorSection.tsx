// components/LoanCalculatorSection.tsx
"use client";

import Link from "next/link";
import React, { useState } from "react";

interface LoanCalculatorSectionProps {
  // Mode to distinguish between loan and investment
  mode?: "loan" | "investment";

  // Header Section
  pillHeader?: string;
  titleLine1?: string;
  titleLine2?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  buttonIcon?: string;

  // Calculator Section
  amountQuestion?: string;
  amountPlaceholder?: string;
  tenureQuestion?: string;
  tenurePlaceholder?: string;
  calculateButtonText?: string;
  calculateButtonIcon?: string;
  resultBoxTitle?: string;

  // Optional callback functions
  onCalculate?: (amount: number, tenure: number, result: number) => void;
  onGetStarted?: () => void;
}

const LoanCalculatorSection = ({
  // Mode with default
  mode = "loan",

  // Header Section Defaults
  pillHeader = "Calculate Your Loan",
  titleLine1 = "Find the Perfect Loan",
  titleLine2 = "for Your Needs",
  description = "Calculate your monthly payments and find the right loan option for your financial situation.",
  buttonText = "Get Started Now",
  buttonHref = "#",
  buttonIcon = "/icons/calculator-icon.svg",

  // Calculator Section Defaults
  amountQuestion = "How much do you need?",
  amountPlaceholder = "Enter loan amount",
  tenureQuestion = "For how long?",
  tenurePlaceholder = "Select loan tenure",
  calculateButtonText = "Calculate Repayment",
  calculateButtonIcon = "/icons/calculate-icon.svg",
  resultBoxTitle = "Monthly Payment",

  // Callbacks
  onCalculate,
  onGetStarted,
}: LoanCalculatorSectionProps) => {
  const [loanAmount, setLoanAmount] = useState("");
  const [loanTenure, setLoanTenure] = useState("");
  const [calculatedResult, setCalculatedResult] = useState<number | null>(null);

  // Format amount with commas
  const formatAmount = (value: string) => {
    const digits = value.replace(/\D/g, "");
    return digits.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatAmount(e.target.value);
    setLoanAmount(formattedValue);
  };

  // Calculate based on mode
  const calculateResult = () => {
    const amount = parseInt(loanAmount.replace(/,/g, "")) || 0;
    const tenure = parseInt(loanTenure) || 0;

    if (amount === 0 || tenure === 0) return null;

    if (mode === "loan") {
      // Loan calculation: 6% monthly interest
      const monthlyInterestRate = 0.06;
      const totalInterest = amount * monthlyInterestRate * tenure;
      return amount + totalInterest; // Total repayable amount
    } else {
      // Investment calculation: 2% monthly ROI
      const monthlyReturnRate = 0.02;
      const totalReturn = amount * monthlyReturnRate * tenure;
      return amount + totalReturn; // Total return amount
    }
  };

  const handleCalculate = () => {
    const amount = parseInt(loanAmount.replace(/,/g, "")) || 0;
    const tenure = parseInt(loanTenure) || 0;
    const result = calculateResult();

    setCalculatedResult(result);

    if (onCalculate && result !== null) {
      onCalculate(amount, tenure, result);
    }
  };

  const handleGetStarted = () => {
    if (onGetStarted) {
      onGetStarted();
    }
  };

  return (
    <section className="w-full bg-white border-t border-gray-200 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Content - Vertically Centered */}
          <div className="w-full lg:w-1/2 flex items-center ml-5">
            <div className="w-full">
              {/* Pill-shaped Header with Dot Thingies INSIDE */}
              <div className="inline-flex items-center justify-center mb-8">
                <span className="text-sm font-semibold text-black bg-white border border-gray-200 px-6 py-2 rounded-full flex items-center">
                  <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                  {pillHeader}
                  <span className="w-2 h-2 bg-black rounded-full ml-3"></span>
                </span>
              </div>

              {/* Two-line Sub Text */}
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                <div>{titleLine1}</div>
                <div>{titleLine2}</div>
              </div>

              {/* Description */}
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                {description}
              </p>

              {/* Button */}
              <Link
                href={buttonHref}
                className="inline-flex items-center bg-purple-700 text-white px-8 py-3 rounded-full hover:bg-purple-800 transition-colors duration-200 font-medium text-base"
                onClick={handleGetStarted}
              >
                <img
                  src={buttonIcon}
                  alt="Calculator icon"
                  className="w-4 h-4 mr-2 object-contain"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src =
                      "https://placehold.co/16x16/FFFFFF/7C3AED?text=→";
                  }}
                />
                {buttonText}
              </Link>
            </div>
          </div>

          {/* Right: Card with Bottom Right Curve Only */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white border border-gray-200 shadow-lg rounded-tr-none rounded-tl-lg rounded-bl-lg rounded-br-3xl p-8">
              {/* Mini Header Question */}
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {amountQuestion}
              </h3>

              {/* Input Field */}
              {/* Input Field */}
              <div className="mb-6">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500">₦</span>
                  </div>
                  <input
                    type="text"
                    placeholder={amountPlaceholder}
                    value={loanAmount}
                    onChange={handleAmountChange}
                    className="w-full bg-purple-50 border border-purple-100 rounded-lg pl-8 pr-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  />
                </div>
              </div>
              {/* Mini Header Question */}
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {tenureQuestion}
              </h3>

              {/* Dropdown */}
              <div className="mb-8">
                <select
                  value={loanTenure}
                  onChange={(e) => setLoanTenure(e.target.value)}
                  className="w-full bg-purple-50 border border-purple-100 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                >
                  <option value="">{tenurePlaceholder}</option>
                  <option value="3">3 months</option>
                  <option value="6">6 months</option>
                  <option value="12">12 months</option>
                  <option value="24">24 months</option>
                </select>
              </div>

              {/* Button - Lighter Purple Shade */}
              <button
                className="w-full flex items-center justify-center bg-purple-100 text-purple-700 px-6 py-3 rounded-full hover:bg-purple-200 transition-colors duration-200 font-medium text-base mb-8"
                onClick={handleCalculate}
              >
                <img
                  src={calculateButtonIcon}
                  alt="Calculate icon"
                  className="w-4 h-4 mr-2 object-contain"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src =
                      "https://placehold.co/16x16/7C3AED/FFFFFF?text==";
                  }}
                />
                {calculateButtonText}
              </button>

              {/* Purple Box with Naira Display */}
              <div className="bg-purple-600 rounded-lg p-6 text-center">
                {/* Pill-shaped Header on the Box */}
                <div className="inline-flex items-center justify-center mb-4">
                  <span className="text-sm font-semibold text-black bg-white px-4 py-1 rounded-full flex items-center">
                    <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                    {resultBoxTitle}
                    <span className="w-2 h-2 bg-black rounded-full ml-2"></span>
                  </span>
                </div>

                {/* Naira Amount Display */}
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-3xl font-bold text-white">₦</span>
                  <span className="text-4xl font-bold text-white">
                    {calculatedResult !== null
                      ? calculatedResult.toLocaleString()
                      : "0"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoanCalculatorSection;
