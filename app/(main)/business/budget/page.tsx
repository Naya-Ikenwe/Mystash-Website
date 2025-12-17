"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import FeaturesSection from "@/app/components/FeaturesSection";
import ContactFormSection from "@/app/components/ContactFormSection";

// DUMMY IMAGE PATHS
const DUMMY_BUTTON_ICON = "/icons/download-icon.svg";
const DUMMY_SECTION1_IMAGE = "/images/businessbudgethero.svg";
const DUMMY_HERO_BACKGROUND = "/images/businessherobg.svg";
const DUMMY_FRAME6_ICON = "/icons/Frame6.svg";

// Download Button Component (use same style as business payments hero)
const DownloadButton = () => {
  return (
    <Link
      href="/download"
      className="bg-purple-500 hover:bg-purple-900 text-white font-semibold py-3 px-8 rounded-4xl flex items-center justify-center transition-colors duration-200"
    >
      <img
        src="/icons/Frame5.svg"
        alt="Download app icon"
        className="w-6 h-6 mr-12"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src =
            "https://placehold.co/20x20/FFFFFF/7C3AED?text=→";
        }}
      />
      <span className="mr-12">Download app</span>
    </Link>
  );
};

// ============ SECTION 1: HERO ============
const SectionOne = () => {
  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden py-12 sm:py-16 lg:py-20">
      {/* Background Image - Full width and height (from business payments hero) */}
      <div
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: `url(${DUMMY_HERO_BACKGROUND})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-white/30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content - Centered */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] sm:min-h-[70vh]">
          {/* Pill Header (dot before and after the text) */}
          <div className="text-center mb-6 sm:mb-8">
            <p className="text-sm font-semibold text-purple-400 mb-2 border border-gray-50 rounded-full px-4 py-1 inline-block bg-purple-100">
              • Budget •
            </p>
          </div>

          {/* Two Line Header Text */}
          <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-gray-900 leading-tight">
              Smarter way for your
            </h1>
            <div className="relative inline-block mt-1 sm:mt-2">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-gray-900 leading-tight">
                <span>Business to </span>
                <span className="relative inline-block text-purple-600">
                  spend
                  <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1 bg-purple-400 rounded-full"></span>
                </span>
                <span> starts here</span>
              </h1>
            </div>
          </div>

          {/* Two Line Sub Text */}
          <div className="text-center max-w-2xl mx-auto mb-4 sm:mb-6">
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-1 sm:mb-1 whitespace-nowrap">
              Saving money isn't always easy, we get it. But with myStash, it's simpler,
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 whitespace-nowrap">
              smarter, and built just for you. All it takes is a quick download to get started.
            </p>
          </div>

          {/* Download Button */}
          <div className="mb-12 sm:mb-16">
            <DownloadButton />
          </div>

          {/* Image under the button */}
          <div className="w-full max-w-3xl sm:max-w-4xl lg:max-w-5xl mx-auto mt-6 sm:mt-8">
            <img
              src={DUMMY_SECTION1_IMAGE}
              alt="Business Budget Dashboard"
              className="w-full h-auto object-contain rounded-lg sm:rounded-xl lg:rounded-2xl shadow-md sm:shadow-lg"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src =
                  "https://placehold.co/1200x600/7C3AED/FFFFFF?text=Business+Budget+Dashboard";
              }}
            />
          </div>
        </div>
      </div>

      {/* Optional decorative elements */}
      <div className="absolute top-5 sm:top-10 left-5 sm:left-10 w-20 h-20 sm:w-32 sm:h-32 bg-purple-100 rounded-full opacity-20 sm:opacity-30 blur-md sm:blur-xl"></div>
      <div className="absolute bottom-5 sm:bottom-10 right-5 sm:right-10 w-24 h-24 sm:w-40 sm:h-40 bg-purple-50 rounded-full opacity-15 sm:opacity-20 blur-md sm:blur-xl"></div>
    </section>
  );
};

// ============ SECTION 2: BUDGET PROCESS ============
const SectionTwo = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header and Subtext */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-1">
            Using Budget is effortless
          </h2>
          <p className="text-lg text-gray-600">
            Enjoy an easier, smarter Budgeting experience
          </p>
        </div>
        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300"></div>
          {/* Timeline Items */}
          <div className="space-y-20">
            {/* Number 1 - Image Left, Text Right */}
            <div className="flex items-start">
              <div className="w-1/2 flex justify-end">
                <div className="pr-8">
                  <img
                    src="/images/budgetcard.svg"
                    alt="Step 1"
                    className="w-72 h-auto rounded-lg -mt-12 mr-7"
                  />
                </div>
              </div>
              {/* Center - Number */}
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2">
                <div className="w-10 h-10 bg-white border-2 border-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-bold">1</span>
                </div>
              </div>
              {/* Right - Text: More space from center line */}
              <div className="w-1/2 pl-12 ml-17">
                <h3 className="text-xl font-semibold text-purple-500 mb-4 mt-2 ">
                  Create Your Virtual Account
                </h3>
                <p className="text-gray-800 leading-relaxed text-sm">
                  Create a myStash virtual account to receive your funds into.
                </p>
                <p className="text-gray-800 leading-relaxed text-sm">
                  Your virtual account is personalized for you and your
                  business
                </p>
              </div>
            </div>
            {/* Number 2 - Image Right, Text Left */}
            <div className="flex items-start">
              {/* Left - Text: Move the entire container RIGHT */}
              <div className="w-1/2 flex justify-end">
                <div className="pr-12 text-left">
                  <h3 className="text-xl font-semibold text-purple-500 mb-4 mt-2">
                    Create Pockets
                  </h3>
                  <p className="text-gray-800 leading-relaxed text-sm">
                    Create pockets for your spendings and assign a
                  </p>
                  <p className="text-gray-800 leading-relaxed text-sm">
                    percentage to them. This is the percentage of the total
                  </p>
                  <p className="text-gray-800 leading-relaxed text-sm">
                    money entering a particular myStash Virtual Account
                  </p>
                </div>
              </div>
              {/* Center - Number */}
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2">
                <div className="w-10 h-10 bg-white border-2 border-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-bold">2</span>
                </div>
              </div>
              {/* Right - Image: Keep spacing */}
              <div className="w-1/2 pl-4">
                <img
                  src="/images/budgetimg2.svg"
                  alt="Step 2"
                  className="w-72 h-auto rounded-lg -mt-8 ml-10 "
                />
              </div>
            </div>
            {/* Number 3 - Image Left, Text Right */}
            <div className="flex items-start">
              <div className="w-1/2 flex justify-end">
                <div className="pr-12">
                  <img
                    src="/images/budgetimg3.svg"
                    alt="Step 3"
                    className="w-72 h-auto rounded-lg mr-12"
                  />
                </div>
              </div>
              {/* Center - Number */}
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2">
                <div className="w-10 h-10 bg-white border-2 border-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-bold">3</span>
                </div>
              </div>
              {/* Right - Text */}
              <div className="w-1/2 pl-12 ml-17">
                <h3 className="text-xl font-semibold text-purple-500 mb-4 mt-2">
                  Add Settlement Account
                </h3>
                <p className="text-gray-800 leading-relaxed text-sm">
                  Funds that are not budgeted are conveniently settled <br />
                </p>
                <p className="text-gray-800 leading-relaxed text-sm">
                  into your settlement account or myStash wallet <br />
                </p>
                <p className="text-gray-800 leading-relaxed text-sm">
                  ready for future use.
                </p>
              </div>
            </div>
            {/* Number 4 - Image Right, Text Left */}
            <div className="flex items-start">
              <div className="w-1/2 flex justify-end">
                <div className="pr-7 text-left">
                  {/* CHANGED: Container with padding, text-left for alignment */}
                  <h3 className="text-xl font-semibold text-purple-500 mb-4 mt-2 ">
                    Deposit Fund
                  </h3>
                  <p className="text-gray-800 leading-relaxed text-sm">
                    Allocate your budget to Pockets. Once you've set your{" "}
                    <br />
                  </p>
                  <p className="text-gray-800 leading-relaxed text-sm">
                    budget percentages, move funds into your myStash <br />
                  </p>
                  <p className="text-gray-800 leading-relaxed text-sm">
                    Virtual accounts, to have them divided into the <br />
                  </p>
                  <p className="text-gray-800 leading-relaxed text-sm">
                    appropriate pockets
                  </p>
                </div>
              </div>
              {/* Center - Number */}
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2">
                <div className="w-10 h-10 bg-white border-2 border-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-bold">4</span>
                </div>
              </div>
              {/* Right - Image: Keep spacing */}
              <div className="w-1/2 pl-4 ml-14">
                <img
                  src="/images/budgetimg4.svg"
                  alt="Step 4"
                  className="w-72 h-auto rounded-lg"
                />
              </div>
            </div>
            {/* Number 5 - Image Left, Text Right */}
            <div className="flex items-start">
              {/* Left - Image: Move the entire container RIGHT */}
              <div className="w-1/2 flex justify-end">
                <div className="pr-12">
                  <img
                    src="/images/budgetimg5.svg"
                    alt="Step 5"
                    className="w-72 h-auto rounded-lg mr-18"
                  />
                </div>
              </div>
              {/* Center - Number */}
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2">
                <div className="w-10 h-10 bg-white border-2 border-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-bold">5</span>
                </div>
              </div>

              {/* Right - Text: More space from center line */}
              <div className="w-1/2 pl-20">
                <h3 className="text-xl font-semibold text-purple-500 mb-4 mt-2">
                  Spend from Pocket
                </h3>
                <p className="text-gray-800 leading-relaxed text-sm">
                  Spend from your designated pocket. For example, <br />
                </p>
                <p className="text-gray-800 leading-relaxed text-sm">
                  pay for your transport from your "Transportation" <br />
                </p>
                <p className="text-gray-800 leading-relaxed text-sm">
                  pocket.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============ SECTION 3: BUSINESS BUDGET FEATURES ============
const SectionThree = () => {
  return (
    <FeaturesSection
      title="With myStash you get"
      description="Our core values as an organization reflects in our business ethics."
      features={[
        {
          iconPath: "/icons/padlock.svg",
          title: "Secure Fund",
          description:
            "Your Business fund is protected with advanced encryption and trusted systems, giving you total peace of mind.",
        },
        {
          iconPath: "/icons/rocket.svg",
          title: "Data Security",
          description:
            "Banj-grade encryptions and industry- leading security protocols keep your data secure in transit and at rest.",
        },
        {
          iconPath: "/icons/planet.svg",
          title: "Diverse Options",
          description:
            "From Budgets, to savings and payment, we provide solution that fit every business financial journey.",
        },
      ]}
    />
  );
};

// ============ SECTION 4: BUSINESS BUDGET FAQ (5 Questions) ============
const SectionFour = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 xl:py-12 bg-white">
      <div className="mb-8 sm:mb-12 lg:mb-16">
        {/* Mini Header - Responsive left alignment */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 text-left sm:ml-5">
          Frequently Asked Questions
        </h2>
      </div>

      {/* FAQ Items - 5 Questions with responsive padding */}
      <div className="space-y-0">
        {[
          "What is Pocket?",
          "What is a settlement account?",
          "Can a Naira account be added as settlement for a Dollar VBA?",
          "Can Naira be added into Dollar Pocket?",
          "Can one Pocket be connected to two VBAs"
        ].map((question, index) => (
          <div key={index} className="border-b border-gray-100 py-4 sm:py-6">
            <button className="flex items-center justify-between w-full text-left group rounded-lg px-3 sm:px-4 py-2 sm:py-3 transition-all duration-200">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center shrink-0">
                  <span className="text-black font-bold text-base sm:text-lg group-hover:text-purple-700 transition-colors">+</span>
                </div>
                <span className="text-sm sm:text-base lg:text-lg font-medium text-gray-900 group-hover:text-purple-700 transition-colors">
                  {question}
                </span>
              </div>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

// ============ SECTION 5: BUDGET BENEFITS (Reference Section 4) ============
const SectionFive = () => {
  return (
    <section className="bg-purple-100  ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Div - Image */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <img
              src="/images/businessstack3.svg"
              alt="Business Budget Benefits"
              className="w-full h-auto rounded-lg"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src =
                  "https://placehold.co/600x400/7C3AED/FFFFFF?text=Business+Budget+Benefits";
              }}
            />
          </div>

          {/* Right Div - Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left order-1 lg:order-2 mb-8 lg:mb-0 lg:ml-4">
           <div className="inline-flex items-center justify-center mb-2 md:justify-start">
              <span className="text-sm font-semibold text-purple-500 bg-purple-200 border border-gray-200 px-4 py-2 mt-10 rounded-full">
                •  Budgeting made crystal clear
              </span>
            </div>
            {/* Three-line Header */}
            <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Create better business budgets
              <br />
              everyday so you can plan smarter
              <br />
              and satisfy your customers
            </h2>

            {/* Budget button styled like 'Start Savings' CTA */}
            <Link
              href="/business/budget"
              className="bg-purple-500 hover:bg-purple-900 text-white font-semibold py-2.5 sm:py-3 px-6 sm:px-8 rounded-full sm:rounded-4xl flex items-center justify-center transition-colors duration-200"
            >
              <img
                src={DUMMY_FRAME6_ICON}
                alt="arrow"
                className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src =
                    "https://placehold.co/20x20/FFFFFF/7C3AED?text=→";
                }}
              />
              <span className="text-sm sm:text-base">Budget</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============ MAIN BUSINESS BUDGET PAGE ============
export default function BusinessBudgetPage() {
  return (
    <div className="min-h-screen bg-white">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      {/* Section 6 would be ContactFormSection if needed */}
       <ContactFormSection /> 
    </div>
  );
}