// components/LoanCalculatorSection.tsx
"use client";

import Link from "next/link";
import React, { useState } from "react";

interface LoanCalculatorSectionProps {
  // Header Section
  pillHeader?: string;
  titleLine1?: string;
  titleLine2?: string;
  description?: string;
  buttonText?: string;
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
  onCalculate?: (amount: number, tenure: number) => void;
  onGetStarted?: () => void;
}

const LoanCalculatorSection = ({
  // Header Section Defaults
  pillHeader = "Calculate Your Loan",
  titleLine1 = "Find the Perfect Loan",
  titleLine2 = "for Your Needs",
  description = "Calculate your monthly payments and find the right loan option for your financial situation.",
  buttonText = "Get Started Now",
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
  onGetStarted
}: LoanCalculatorSectionProps) => {
  const [loanAmount, setLoanAmount] = useState("");
  const [loanTenure, setLoanTenure] = useState("");

  const handleCalculate = () => {
    const amount = parseFloat(loanAmount) || 0;
    const tenure = parseInt(loanTenure) || 0;
    
    if (onCalculate) {
      onCalculate(amount, tenure);
    }
    // You can add your calculation logic here
    console.log('Calculating loan:', { amount, tenure });
  };

  const handleGetStarted = () => {
    if (onGetStarted) {
      onGetStarted();
    }
    // Default behavior if no callback provided
    console.log('Get started clicked');
  };

  return (
    <section className="w-full bg-white border-t border-gray-200 py-20 md:py-32">
      {/* Full width section but contained content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left: Content - Vertically Centered */}
          <div className="w-full lg:w-1/2 flex items-center">
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
                href="#"
                className="inline-flex items-center bg-purple-700 text-white px-8 py-3 rounded-full hover:bg-purple-800 transition-colors duration-200 font-medium text-base"
                onClick={handleGetStarted}
              >
                <img
                  src={buttonIcon}
                  alt="Calculator icon"
                  className="w-4 h-4 mr-2 object-contain"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "https://placehold.co/16x16/FFFFFF/7C3AED?text=→";
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
              <div className="mb-6">
                <input
                  type="text"
                  placeholder={amountPlaceholder}
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  className="w-full bg-purple-50 border border-purple-100 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                />
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
                    e.currentTarget.src = "https://placehold.co/16x16/7C3AED/FFFFFF?text==";
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
                  <span className="text-4xl font-bold text-white">0</span>
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