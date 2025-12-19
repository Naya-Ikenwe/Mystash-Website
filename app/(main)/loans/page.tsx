// app/loans/page.tsx
"use client";

import Link from "next/link";
import React, { useState } from "react";
import FeaturesSection from "../../components/FeaturesSection";
import ContactFormSection from "../../components/ContactFormSection";
import LoanCalculatorSection from "../../components/LoanCalculatorSection";

// Dummy icon paths - update these with your actual icons
const DUMMY_BUTTON_ICON_1 = "/icons/Frame6.svg";
const DUMMY_BUTTON_ICON_2 = "/icons/Frame5.svg";

const PillIcon = ({ iconPath }: { iconPath: string }) => {
  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    const target = e.target as HTMLImageElement;
    target.onerror = null;
    target.src = "https://placehold.co/16x16/7C3AED/FFFFFF?text=→";
  };

  return (
    <img
      src={iconPath}
      alt="Button icon"
      className="w-7 h-7 mr-17 object-contain"
      onError={handleImageError}
    />
  );
};

const CTAButton = ({
  text,
  styleType,
  iconPath,
  href = "#"
}: {
  text: string;
  styleType: "primary" | "secondary";
  iconPath: string;
  href?: string;
}) => {
  const primaryClasses = "bg-purple-700 text-white hover:bg-purple-800";
  const secondaryClasses = "bg-purple-100 text-purple-700 hover:bg-purple-200";
  const classes = styleType === "primary" ? primaryClasses : secondaryClasses;

  return (
    <Link
      href={href}
      className={`inline-flex items-center px-2 py-2 text-base font-medium rounded-full transition-colors duration-200 ${classes}`}
    >
      <PillIcon iconPath={iconPath} />
      <p className="mr-19">{text}</p>
    </Link>
  );
};

export default function LoansPage() {
  // FAQ states
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);

  const scrollToCalculator = () => {
    const calculatorSection = document.getElementById('loan-calculator');
    if (calculatorSection) {
      calculatorSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ==================== */}
      {/* SECTION 1: HERO */}
      {/* ==================== */}
      <section className="relative py-20 md:py-15 overflow-hidden bg-white">
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <div className="inline-flex items-center justify-center mb-3 md:justify-start">
                <span className="text-sm font-medium text-purple-500 bg-purple-100 border border-gray-200 px-6 py-1 mt-10 rounded-full">
                  • Loan •
                </span>
              </div>
          {/* Two-line Header Text */}
          <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-gray-900 mb-2 leading-tight">
            <span className="block">Smart Loans Designed for</span>
            <span className="block">Government Employees</span>
          </h1>

          {/* Two-line Sub Text */}
          <div className="text-xl sm:text-xl text-gray-600 mb-7 leading-relaxed max-w-3xl mx-auto">
            <div>Specially designed for Federal, State and Local government</div>
            <div className="-mt-2">workers- enjoy quick disbursement and flexible repayment plans</div>
          </div>

          {/* Two Buttons - Swapped */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* First button - Light purple */}
            <button
              onClick={scrollToCalculator}
              className="inline-flex items-center px-2 py-2 text-base font-medium rounded-full transition-colors duration-200 bg-purple-100 text-purple-700 hover:bg-purple-200"
            >
              <PillIcon iconPath={DUMMY_BUTTON_ICON_1} />
             <p className="mr-19"> Loan Calculator</p>
            </button>
            
            {/* Second button - Dark purple */}
            <CTAButton
              text="Apply for Loan"
              styleType="primary"
              iconPath={DUMMY_BUTTON_ICON_1}
              href="/loans/apply"
            />
          </div>
        </div>
      </section>
      {/* ==================== */}
      {/* SECTION 2: LOAN FEATURES */}
      {/* ==================== */}
      {/* Section 2: Loan Features */}
      <section className="relative py-20 md:py-20 bg-white overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Pill-shaped Header with Dot Thingies INSIDE the pill */}
          <div className="inline-flex items-center justify-center mb-3">
            <span className="text-lg font-medium text-gray-700 border border-gray-300 px-6 py-2 rounded-full flex items-center">
              <span className="w-2 h-2 bg-gray-800 rounded-full mr-3"></span>
              Loan Criteria
              <span className="w-2 h-2 bg-gray-800 rounded-full ml-3"></span>
            </span>
          </div>

          {/* Mini Header */}
          <h2 className="text-xl sm:text-xl font-semibold text-gray-900 mb-8">
            Discover your Eligibility for Quick Loan Access
          </h2>

          {/* Vertically Arranged Pill Items - Dynamic width & centered content */}
          <div className="space-y-4 flex flex-col items-center">
            {/* Item 1 */}
            <div className="flex items-center justify-center  border border-gray-200 rounded-full px-8 py-4  transition-colors duration-200 mx-auto">
              <span className="w-2 h-2 bg-gray-800 rounded-full mr-4 shrink-0"></span>
              <span className="text-gray-800 font-medium text-xl text-center">
                Have a salary bank account
              </span>
            </div>

            {/* Item 2 */}
            <div className="flex items-center justify-center  border border-gray-200 rounded-full px-8 py-4  transition-colors duration-200 mx-auto">
              <span className="w-2 h-2 bg-gray-800 rounded-full mr-4 shrink-0"></span>
              <span className="text-gray-800 font-medium text-xl text-center">
                Are you between 22 and 58 years old
              </span>
            </div>

            {/* Item 3 */}
            <div className="flex items-center justify-center  border border-gray-200 rounded-full px-8 py-4  transition-colors duration-200 mx-auto">
              <span className="w-2 h-2 bg-gray-800 rounded-full mr-4 shrink-0"></span>
              <span className="text-gray-800 font-medium text-xl text-center">
                Work in any Government offices in Nigeria
              </span>
            </div>

            {/* Item 4 */}
            <div className="flex items-center justify-center  border border-gray-200 rounded-full px-8 py-4  transition-colors duration-200 mx-auto">
              <span className="w-2 h-2 bg-gray-800 rounded-full mr-4 shrink-0"></span>
              <span className="text-gray-800 font-medium text-xl text-center">
                Must possess a Staff ID card or Employment letter
              </span>
            </div>

            {/* Item 5 */}
            <div className="flex items-center justify-center  border border-gray-200 rounded-full px-8 py-4  transition-colors duration-200 mx-auto">
              <span className="w-2 h-2 bg-gray-800 rounded-full mr-4 shrink-0"></span>
              <span className="text-gray-800 font-medium text-xl text-center whitespace-nowrap">
                Possess a valid means of Identification (BVN & National Identification or Voters ID)
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* ADD SECTION 3 HERE */}
      <FeaturesSection
        title="Why Choose Our Loan Program"
        description="Exclusive benefits designed specifically for government employees."
        features={[
          {
            iconPath: "/icons/padlock.svg",
            title: "Secure & Confidential",
            description:
              "Your account information is protected with advanced encryption and trusted systems- giving you total peace of mind.",
          },
          {
            iconPath: "/icons/rocket.svg",
            title: "No Hidden Charges",
            description:
              "Enjoy 6% per month interest on loan, exclusively for government employees with flexible repayment terms and Transparent pricing with no processing fees or hidden costs",
          },
          {
            iconPath: "/icons/planet.svg",
            title: "Quick Approval Process",
            description:
              "Get Approved within 15 mins with minimal documentation required, quick, easy and hassle-free.",
          },
        ]}
      />
      {/* Section 4: Loan Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-15 bg-white  ">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src="/images/family.svg" // Update with your actual image path
              alt="Loan application process"
              className="w-full max-w-md lg:max-w-lg object-contain"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src =
                  "https://placehold.co/500x400/7C3AED/FFFFFF?text=Loan+Process";
              }}
            />
          </div>

          {/* Right: Content - Vertically Centered */}
          <div className="w-full lg:w-1/2 flex items-center">
            <div className="w-full">
              {/* Header */}
              <h2 className="text-3xl sm:text-3xl font-bold text-gray-900 ">
                3 Key Steps You Need to Know
              </h2>

              {/* Sub Text */}
              <p className="text-lg whitespace-nowrap text-gray-600 mb-10 max-w-lg -ml-10">
                Our Loan process is fast and seamless. Get approved under 24 hours
              </p>

              {/* Three Items */}
              <div className="space-y-8">
                {/* Item 1 */}
                <div className="flex items-start space-x-4 -ml-12">
                  <div className="shrink-0 w-14 h-14  rounded-full flex items-center justify-center">
                    <img
                      src="/icons/loanicons1.svg" // Update with your actual icon
                      alt="Application icon"
                      className="w-14 h-14 object-contain"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src =
                          "https://placehold.co/24x24/7C3AED/FFFFFF?text=1";
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Loan Application
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      Apply through the loan portal with all required documents.
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex items-start space-x-4 -ml-12">
                  <div className="shrink-0 w-14 h-14  rounded-full flex items-center justify-center">
                    <img
                      src="/icons/loanicons2.svg" // Update with your actual icon
                      alt="Approval icon"
                      className="w-13 h-13 object-contain"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src =
                          "https://placehold.co/24x24/7C3AED/FFFFFF?text=2";
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                     Document Review
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg whitespace-nowrap">
                      All submitted details and documents undergo a thorough review to
                    </p>
                    <p className="text-gray-600 leading-relaxed text-lg -mt-2">
                      ensure compliance with our eligibility standards.
                      </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex items-start space-x-4 -ml-12">
                  <div className="shrink-0 w-14 h-14  rounded-full flex items-center justify-center">
                    <img
                      src="/icons/loanicons3.svg" // Update with your actual icon
                      alt="Funds icon"
                      className="w-14 h-14 object-contain"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src =
                          "https://placehold.co/24x24/7C3AED/FFFFFF?text=3";
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Loan Disbursement
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      Your Loan is credited to your account in under 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section 5: Loan Calculator */}
      <LoanCalculatorSection
        id="loan-calculator"
        // Customize any text you want, or use defaults
        pillHeader="Loan Calculator"
        titleLine1=""
        titleLine2=""
        description="Explore the flexible repayment plan you'll enjoy when you choose a Credit Alert loan today."
        buttonText="Apply Now"
        buttonHref = "/loans/apply" 
        amountQuestion="What's your loan amount?"
        tenureQuestion="Choose repayment period"
        calculateButtonText="Calculate loan "
        resultBoxTitle="Your Monthly Payment"
      />
      {/* Section 6: Frequently Asked Questions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-15 bg-white ">
        <div className="mb-16">
          {/* Mini Header - Left Aligned */}
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-left ml-5">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-0 -mt-10">
          {/* Question 1 */}
          <div className="border-b border-gray-100 py-6">
            <button 
              className="flex items-center justify-between w-full text-left group rounded-lg px-4 py-3 transition-all duration-200"
              onClick={() => setIsOpen1(!isOpen1)}
            >
              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 flex items-center justify-center shrink-0">
                  <span className="text-black font-bold text-lg transition-colors">
                    {isOpen1 ? '−' : '+'}
                  </span>
                </div>
                <span className="text-xl font-medium text-gray-900 rounded-lg px-3 py-2 -mx-2 transition-all duration-200">
                  How do i apply for this loan ?
                </span>
              </div>
            </button>
            {/* Answer with slide animation */}
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen1 ? 'max-h-96' : 'max-h-0'}`}>
              <div className="px-4  pt-2 ml-10">
                <p className="text-xl text-gray-700">
                  You can apply fpr this loan by visiting myStashapp.com. You can also call on <br />
                  08131462292 or send us an email at support@mystashcom for further <br />
                  assistance.
                </p>
              </div>
            </div>
          </div>

          {/* Question 2 */}
          <div className="border-b border-gray-100 py-6">
            <button 
              className="flex items-center justify-between w-full text-left group rounded-lg px-4 py-3 transition-all duration-200"
              onClick={() => setIsOpen2(!isOpen2)}
            >
              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 flex items-center justify-center shrink-0">
                  <span className="text-black font-bold text-lg transition-colors">
                    {isOpen2 ? '−' : '+'}
                  </span>
                </div>
                <span className="text-xl font-medium text-gray-900 transition-colors">
                  What is the minimum loan I can get ?
                </span>
              </div>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen2 ? 'max-h-96' : 'max-h-0'}`}>
              <div className="px-4 pb-6 pt-2 ml-10">
                <p className="text-xl text-gray-700">
                  You can request a minimum of ₦30,000 and up to a maximum of ₦5,000,000 <br />
                </p>
              </div>
            </div>
          </div>

          {/* Question 3 */}
          <div className="border-b border-gray-100 py-6">
            <button 
              className="flex items-center justify-between w-full text-left group rounded-lg px-4 py-3 transition-all duration-200"
              onClick={() => setIsOpen3(!isOpen3)}
            >
              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 flex items-center justify-center shrink-0">
                  <span className="text-black font-bold text-lg transition-colors">
                    {isOpen3 ? '−' : '+'}
                  </span>
                </div>
                <span className="text-xl font-medium text-gray-900 transition-colors">
                  How long does it take to process and disburse the loan ? 
                </span>
              </div>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen3 ? 'max-h-96' : 'max-h-0'}`}>
              <div className="px-4 pb-6 pt-2 ml-10">
                <p className="text-xl text-gray-700">
                  It takes less than five minutes to complete the online loan application and disbursement will be done in <br />
                  less than five minutes after documents have been completed and reviewed.
                </p>
              </div>
            </div>
          </div>

          {/* Question 4 */}
          <div className="border-b border-gray-100 py-6">
            <button 
              className="flex items-center justify-between w-full text-left group rounded-lg px-4 py-3 transition-all duration-200"
              onClick={() => setIsOpen4(!isOpen4)}
            >
              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 flex items-center justify-center shrink-0">
                  <span className="text-black font-bold text-lg transition-colors">
                    {isOpen4 ? '−' : '+'}
                  </span>
                </div>
                <span className="text-xl font-medium text-gray-900 transition-colors">
                  Do you give loan to private workers ?
                </span>
              </div>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen4 ? 'max-h-96' : 'max-h-0'}`}>
              <div className="px-4 pb-6 pt-2 ml-10">
                <p className="text-lg text-gray-700">
                  No, we are don't.
                </p>
              </div>
            </div>
          </div>

          {/* Question 5 */}
          <div className="border-b border-gray-100 py-6">
            <button 
              className="flex items-center justify-between w-full text-left group rounded-lg px-4 py-3 transition-all duration-200"
              onClick={() => setIsOpen5(!isOpen5)}
            >
              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 flex items-center justify-center shrink-0">
                  <span className="text-black font-bold text-lg transition-colors">
                    {isOpen5 ? '−' : '+'}
                  </span>
                </div>
                <span className="text-xl font-medium text-gray-900 transition-colors">
                  how can I liquidate my loan ?
                </span>
              </div>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen5 ? 'max-h-96' : 'max-h-0'}`}>
              <div className="px-4 pb-6 pt-2 ml-10">
                <p className="text-lg text-gray-700">
                  You can liquidate your loan by contacting us on our customer care line at 08131462292 or <br />
                  via email at support@myStash.com to get your liquidation details.
                </p>
              </div>
            </div>
          </div>

          {/* Question 6 */}
          <div className="border-b border-gray-100 py-6">
            <button 
              className="flex items-center justify-between w-full text-left group rounded-lg px-4 py-3 transition-all duration-200"
              onClick={() => setIsOpen6(!isOpen6)}
            >
              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 flex items-center justify-center shrink-0">
                  <span className="text-black font-bold text-lg transition-colors">
                    {isOpen6 ? '−' : '+'}
                  </span>
                </div>
                <span className="text-xl font-medium text-gray-900 transition-colors">
                  Does myStash charge for advanced payment ?
                </span>
              </div>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen6 ? 'max-h-96' : 'max-h-0'}`}>
              <div className="px-4 pb-6 pt-2 ml-10">
                <p className="text-lg text-gray-700">
                  No.
                </p>
              </div>
            </div>
          </div>

          {/* Question 7 */}
          <div className="border-b border-gray-100 py-6">
            <button 
              className="flex items-center justify-between w-full text-left group rounded-lg px-4 py-3 transition-all duration-200"
              onClick={() => setIsOpen7(!isOpen7)}
            >
              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 flex items-center justify-center shrink-0">
                  <span className="text-black font-bold text-lg transition-colors">
                    {isOpen7 ? '−' : '+'}
                  </span>
                </div>
                <span className="text-xl font-medium text-gray-900 transition-colors">
                  What are the requirements to qualify for a loan ?
                </span>
              </div>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen7 ? 'max-h-96' : 'max-h-0'}`}>
              <div className="px-4 pb-6 pt-2 ml-10">
                <p className="text-lg text-gray-700">
                 You are eligible to get loan from us if you are :<br />
                 1. A Federal, State or Local government worker <br />
                 2. Your salary is paid via WASC/IPPIS <br />
                 3. Have a positive check rating on your Credit Bureau
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==================== */}
      {/* ADD SECTION 7 HERE */}
      {/* ==================== */}
      <ContactFormSection />
    </div>
  );
}