// app/(application)/loans/apply/details/page.tsx
"use client";

import React, { useState } from "react";

export default function LoanDetailsPage() {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { number: 1, title: "Personal Information", description: "Basic details about yourself" },
    { number: 2, title: "Employment Details", description: "Your work and income information" },
    { number: 3, title: "Loan Details", description: "Finalize your loan application" }
  ];

  const handleContinue = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      // Submit the final form
      console.log("Submitting loan application...");
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Logo */}
      <div className="border-b border-gray-200 py-4 px-8">
        <img 
          src="/logo/mystashlogo.svg" 
          alt="MyStash" 
          className="h-8 w-auto"
        />
      </div>

      {/* Main Content */}
      <div className="flex min-h-[calc(100vh-80px)]">
        
        {/* Left Sidebar - Step Indicators */}
        <div className="w-1/3 bg-gray-50 p-8">
          <div className="max-w-md">
            {/* Header */}
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Your Application
            </h1>
            <p className="text-lg text-gray-600 mb-12">
              Follow these simple steps to finalize your loan request
            </p>

            {/* Step Indicators */}
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-start space-x-4">
                  {/* Step Number with connecting line */}
                  <div className="flex flex-col items-center">
                    <div 
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold ${
                        currentStep === step.number 
                          ? "bg-gray-300 text-gray-900" 
                          : "bg-white border border-gray-300 text-gray-400"
                      }`}
                    >
                      {step.number}
                    </div>
                    {/* Vertical line except for last step */}
                    {index < steps.length - 1 && (
                      <div className="w-0.5 h-16 bg-gray-300 mt-2"></div>
                    )}
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mt-1">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Content - Dynamic Forms */}
        <div className="flex-1 p-8">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8">
              
              {/* Dynamic Form Content Based on Step */}
              {currentStep === 1 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Personal Information
                  </h2>
                  {/* Step 1 Form Fields */}
                  <div className="space-y-4">
                    <input 
                      type="text" 
                      placeholder="Full Name" 
                      className="w-full border border-gray-300 rounded-lg px-4 py-3"
                    />
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      className="w-full border border-gray-300 rounded-lg px-4 py-3"
                    />
                    <input 
                      type="tel" 
                      placeholder="Phone Number" 
                      className="w-full border border-gray-300 rounded-lg px-4 py-3"
                    />
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Employment Details
                  </h2>
                  {/* Step 2 Form Fields */}
                  <div className="space-y-4">
                    <input 
                      type="text" 
                      placeholder="Company Name" 
                      className="w-full border border-gray-300 rounded-lg px-4 py-3"
                    />
                    <input 
                      type="text" 
                      placeholder="Job Title" 
                      className="w-full border border-gray-300 rounded-lg px-4 py-3"
                    />
                    <input 
                      type="number" 
                      placeholder="Monthly Income" 
                      className="w-full border border-gray-300 rounded-lg px-4 py-3"
                    />
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Loan Details
                  </h2>
                  {/* Step 3 Form Fields */}
                  <div className="space-y-4">
                    <input 
                      type="text" 
                      placeholder="Loan Purpose" 
                      className="w-full border border-gray-300 rounded-lg px-4 py-3"
                    />
                    <textarea 
                      placeholder="Additional Notes" 
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 h-32"
                    />
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-12">
                <button
                  onClick={handleBack}
                  disabled={currentStep === 1}
                  className={`px-8 py-3 rounded-lg font-semibold ${
                    currentStep === 1 
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed" 
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  Back
                </button>
                
                <button
                  onClick={handleContinue}
                  className="bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-800"
                >
                  {currentStep === 3 ? "Submit Application" : "Continue"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}