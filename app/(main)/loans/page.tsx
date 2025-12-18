// app/loans/page.tsx
"use client";

import Link from "next/link";
import React from "react";
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
      className="w-4 h-4 mr-2 object-contain"
      onError={handleImageError}
    />
  );
};

const CTAButton = ({
  text,
  styleType,
  iconPath,
  href = "#" // ADD DEFAULT HREF
}: {
  text: string;
  styleType: "primary" | "secondary";
  iconPath: string;
  href?: string; // ADD THIS
}) => {
  const primaryClasses = "bg-purple-700 text-white hover:bg-purple-800";
  const secondaryClasses = "bg-purple-100 text-purple-700 hover:bg-purple-200";
  const classes = styleType === "primary" ? primaryClasses : secondaryClasses;

  return (
    <Link
      href={href} // USE THE HREF PROP
      className={`inline-flex items-center px-8 py-3 text-base font-medium rounded-full transition-colors duration-200 ${classes}`}
    >
      <PillIcon iconPath={iconPath} />
      {text}
    </Link>
  );
};

export default function LoansPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ==================== */}
      {/* SECTION 1: HERO */}
      {/* ==================== */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Horizontal Gradient Blush Background - More visible purple */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(196, 181, 253, 0.6) 0%, rgba(196, 181, 253, 0.3) 25%, rgba(196, 181, 253, 0) 50%, rgba(196, 181, 253, 0.3) 75%, rgba(196, 181, 253, 0.6) 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Two-line Header Text */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="block">Smart Loans for</span>
            <span className="block">Your Financial Growth</span>
          </h1>

          {/* Two-line Sub Text */}
          <div className="text-xl sm:text-2xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
            <div>Get access to flexible loan options tailored to</div>
            <div>your needs with competitive rates and terms</div>
          </div>

          {/* Two Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CTAButton
              text="Apply for Loan"
              styleType="primary"
              iconPath={DUMMY_BUTTON_ICON_1}
              href="/loans/apply"
            />
            <CTAButton
              text="Learn More"
              styleType="secondary"
              iconPath={DUMMY_BUTTON_ICON_2}
            />
          </div>
        </div>
      </section>
      {/* ==================== */}
      {/* SECTION 2: LOAN FEATURES */}
      {/* ==================== */}
      {/* Section 2: Loan Features */}
      <section className="relative py-20 md:py-32 bg-white overflow-hidden">
        {/* Top Left Arc Blush */}
        <div
          className="absolute top-0 left-0 w-1/2 h-64 z-0"
          style={{
            background:
              "radial-gradient(ellipse 100% 100% at 0% 0%, rgba(147, 51, 234, 0.3) 0%, rgba(147, 51, 234, 0.15) 30%, rgba(147, 51, 234, 0) 70%)",
          }}
        />

        {/* Top Right Arc Blush */}
        <div
          className="absolute top-0 right-0 w-1/2 h-64 z-0"
          style={{
            background:
              "radial-gradient(ellipse 100% 100% at 100% 0%, rgba(147, 51, 234, 0.3) 0%, rgba(147, 51, 234, 0.15) 30%, rgba(147, 51, 234, 0) 70%)",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Pill-shaped Header with Dot Thingies INSIDE the pill */}
          <div className="inline-flex items-center justify-center mb-8">
            <span className="text-sm font-semibold text-purple-700 bg-purple-100 px-6 py-2 rounded-full flex items-center">
              <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
              Why Choose Our Loans
              <span className="w-2 h-2 bg-purple-600 rounded-full ml-3"></span>
            </span>
          </div>

          {/* Mini Header */}
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-12">
            Features That Make Us Different
          </h2>

          {/* Vertically Arranged Pill Items - Dynamic width & centered content */}
          <div className="space-y-4 flex flex-col items-center">
            {/* Item 1 */}
            <div className="flex items-center justify-center bg-purple-50 border border-purple-200 rounded-full px-8 py-4 hover:bg-purple-100 transition-colors duration-200 mx-auto">
              <span className="w-3 h-3 bg-purple-600 rounded-full mr-4 shrink-0"></span>
              <span className="text-gray-800 font-medium text-lg text-center">
                Quick approval within 24 hours
              </span>
            </div>

            {/* Item 2 */}
            <div className="flex items-center justify-center bg-purple-50 border border-purple-200 rounded-full px-8 py-4 hover:bg-purple-100 transition-colors duration-200 mx-auto">
              <span className="w-3 h-3 bg-purple-600 rounded-full mr-4 shrink-0"></span>
              <span className="text-gray-800 font-medium text-lg text-center">
                Competitive interest rates starting from 5.9% APR
              </span>
            </div>

            {/* Item 3 */}
            <div className="flex items-center justify-center bg-purple-50 border border-purple-200 rounded-full px-8 py-4 hover:bg-purple-100 transition-colors duration-200 mx-auto">
              <span className="w-3 h-3 bg-purple-600 rounded-full mr-4 shrink-0"></span>
              <span className="text-gray-800 font-medium text-lg text-center">
                Flexible repayment terms
              </span>
            </div>

            {/* Item 4 */}
            <div className="flex items-center justify-center bg-purple-50 border border-purple-200 rounded-full px-8 py-4 hover:bg-purple-100 transition-colors duration-200 mx-auto">
              <span className="w-3 h-3 bg-purple-600 rounded-full mr-4 shrink-0"></span>
              <span className="text-gray-800 font-medium text-lg text-center">
                No hidden fees
              </span>
            </div>

            {/* Item 5 */}
            <div className="flex items-center justify-center bg-purple-50 border border-purple-200 rounded-full px-8 py-4 hover:bg-purple-100 transition-colors duration-200 mx-auto">
              <span className="w-3 h-3 bg-purple-600 rounded-full mr-4 shrink-0"></span>
              <span className="text-gray-800 font-medium text-lg text-center">
                Digital application process with instant decision
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* ADD SECTION 3 HERE */}
      <FeaturesSection
        title="With our loans you get"
        description="Our loan services are designed to provide maximum value and convenience"
        features={[
          {
            iconPath: "/icons/padlock.svg",
            title: "Secure Process",
            description:
              "Your personal and financial information is protected with bank-level encryption throughout the application process.",
          },
          {
            iconPath: "/icons/rocket.svg",
            title: "Fast Disbursement",
            description:
              "Get funds transferred to your account within hours of approval, not days. Quick access when you need it most.",
          },
          {
            iconPath: "/icons/planet.svg",
            title: "Flexible Options",
            description:
              "Choose from various loan amounts and repayment schedules that fit your unique financial situation.",
          },
        ]}
      />
      {/* Section 4: Loan Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 bg-white border-t border-gray-200 ">
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
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Simple Loan Application Process
              </h2>

              {/* Sub Text */}
              <p className="text-lg text-gray-600 mb-10 max-w-lg">
                Get the funds you need in just a few easy steps. Our streamlined
                process makes borrowing simple and stress-free.
              </p>

              {/* Three Items */}
              <div className="space-y-8">
                {/* Item 1 */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <img
                      src="/icons/application-icon.svg" // Update with your actual icon
                      alt="Application icon"
                      className="w-6 h-6 object-contain"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src =
                          "https://placehold.co/24x24/7C3AED/FFFFFF?text=1";
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Easy Application
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Fill out our simple online form in minutes. No complicated
                      paperwork or lengthy processes.
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <img
                      src="/icons/approval-icon.svg" // Update with your actual icon
                      alt="Approval icon"
                      className="w-6 h-6 object-contain"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src =
                          "https://placehold.co/24x24/7C3AED/FFFFFF?text=2";
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Quick Approval
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Get a decision within hours. Our automated system
                      processes applications quickly and efficiently.
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <img
                      src="/icons/funds-icon.svg" // Update with your actual icon
                      alt="Funds icon"
                      className="w-6 h-6 object-contain"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src =
                          "https://placehold.co/24x24/7C3AED/FFFFFF?text=3";
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Fast Disbursement
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Receive your funds directly in your account once approved.
                      No waiting for checks or bank transfers.
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
        // Customize any text you want, or use defaults
        pillHeader="Loan Calculator"
        titleLine1="Find Your Perfect"
        titleLine2="Loan Solution"
        description="Use our calculator to estimate your monthly payments and find the ideal loan terms for your needs."
        buttonText="Apply Now"
        buttonHref = "/loans/apply" 
        amountQuestion="What's your loan amount?"
        tenureQuestion="Choose repayment period"
        calculateButtonText="Calculate Monthly Payment"
        resultBoxTitle="Your Monthly Payment"
      />
      {/* Section 6: Frequently Asked Questions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 bg-white ">
        <div className="mb-16">
          {/* Mini Header - Left Aligned */}
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-left ml-5">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-0">
          {/* Question 1 */}
          <div className="border-b border-gray-100 py-6">
            <button className="flex items-center justify-between w-full text-left group hover:bg-purple-50 rounded-lg px-4 py-3 transition-all duration-200">
              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                  <span className="text-black font-bold text-lg">+</span>
                </div>
                <span className="text-lg font-medium text-gray-900 group-hover:text-purple-700 transition-colors">
                  What are the eligibility requirements for a loan?
                </span>
              </div>
            </button>
          </div>

          {/* Question 2 */}
          <div className="border-b border-gray-100 py-6">
            <button className="flex items-center justify-between w-full text-left group hover:bg-purple-50 rounded-lg px-4 py-3 transition-all duration-200">
              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                  <span className="text-black font-bold text-lg">+</span>
                </div>
                <span className="text-lg font-medium text-gray-900 group-hover:text-purple-700 transition-colors">
                  How long does the loan approval process take?
                </span>
              </div>
            </button>
          </div>

          {/* Question 3 */}
          <div className="border-b border-gray-100 py-6">
            <button className="flex items-center justify-between w-full text-left group hover:bg-purple-50 rounded-lg px-4 py-3 transition-all duration-200">
              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                  <span className="text-black font-bold text-lg">+</span>
                </div>
                <span className="text-lg font-medium text-gray-900 group-hover:text-purple-700 transition-colors">
                  What is the maximum loan amount I can apply for?
                </span>
              </div>
            </button>
          </div>

          {/* Question 4 */}
          <div className="border-b border-gray-100 py-6">
            <button className="flex items-center justify-between w-full text-left group hover:bg-purple-50 rounded-lg px-4 py-3 transition-all duration-200">
              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                  <span className="text-black font-bold text-lg">+</span>
                </div>
                <span className="text-lg font-medium text-gray-900 group-hover:text-purple-700 transition-colors">
                  Are there any hidden fees or charges?
                </span>
              </div>
            </button>
          </div>

          {/* Question 5 */}
          <div className="border-b border-gray-100 py-6">
            <button className="flex items-center justify-between w-full text-left group hover:bg-purple-50 rounded-lg px-4 py-3 transition-all duration-200">
              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                  <span className="text-black font-bold text-lg">+</span>
                </div>
                <span className="text-lg font-medium text-gray-900 group-hover:text-purple-700 transition-colors">
                  Can I repay my loan early without penalties?
                </span>
              </div>
            </button>
          </div>

          {/* Question 6 */}
          <div className="border-b border-gray-100 py-6">
            <button className="flex items-center justify-between w-full text-left group hover:bg-purple-50 rounded-lg px-4 py-3 transition-all duration-200">
              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                  <span className="text-black font-bold text-lg">+</span>
                </div>
                <span className="text-lg font-medium text-gray-900 group-hover:text-purple-700 transition-colors">
                  What documents do I need to apply for a loan?
                </span>
              </div>
            </button>
          </div>

          {/* Question 7 */}
          <div className="border-b border-gray-100 py-6">
            <button className="flex items-center justify-between w-full text-left group hover:bg-purple-50 rounded-lg px-4 py-3 transition-all duration-200">
              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                  <span className="text-black font-bold text-lg">+</span>
                </div>
                <span className="text-lg font-medium text-gray-900 group-hover:text-purple-700 transition-colors">
                  How is the interest rate calculated on my loan?
                </span>
              </div>
            </button>
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
