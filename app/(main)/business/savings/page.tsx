"use client";

import React from "react";
import Link from "next/link";
import FeaturesSection from "@/app/components/FeaturesSection";
import ContactFormSection from "@/app/components/ContactFormSection";

// DUMMY IMAGE PATHS
const DUMMY_BUTTON_ICON = "/icons/download-icon.svg";
const DUMMY_SECTION1_IMAGE = "/images/businesssavingshero.svg";
const DUMMY_FRAME6_ICON = "/icons/Frame6.svg";
const DUMMY_HERO_BACKGROUND = "/images/tiles.svg"; // Added background image path

// Button paths mapping
const BUTTON_PATHS: Record<string, string> = {
  "Start Saving": "/business/savings",
  "Start Savings": "/business/savings", // Added this for the button in SectionFour
  "Explore Features": "/loans",
  "Learn About Security": "/security",
  Budget: "/business/budget",
  Payments: "/business/payments",
};

// Download Button Component with Icon
const DownloadButton = () => {
  return (
    <Link
      href="/download"
      className="bg-purple-500 hover:bg-purple-900 text-white font-semibold py-2 px-2 rounded-4xl flex items-center justify-center transition-colors duration-200"
    >
      <img
        src="/icons/Frame5.svg"
        alt="Download app icon"
        className="w-7 h-7 mr-21"
      />
      <span className="mr-25">Download app</span>
    </Link>
  );
};

// ============ SECTION 1: HERO ============
const SectionOne = () => {
  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden">
      {/* Background Image - Full width and height */}
      <div
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: `url(${DUMMY_HERO_BACKGROUND})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Optional overlay for better text readability */}
        <div className=""></div>
      </div>

      <div className="relative z-10 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Content - Centered */}
          <div className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] sm:min-h-[70vh]">
            {/* Pill Header (dot before and after the text) */}
            <div className="text-center mb-6 sm:mb-4">
              <p className="text-sm font-medium text-purple-400 mb-2 border border-gray-50 rounded-full px-4 py-1 inline-block bg-purple-100">
                • Savings •
              </p>
            </div>

            {/* Two Line Header Text */}
            <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-6">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[54px] font-bold text-gray-900 leading-tight">
                A Smarter way to Grow Your
              </h1>
              <div className=" -mt-1">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[54px] font-bold leading-tight">
                  <span className="text-gray-900">Business </span>
                  <span className="relative inline-block text-purple-600">
                    Savings
                    {/* Underline only under "Savings" */}
                    <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1.5 bg-purple-600 rounded-full"></div>
                  </span>
                </h1>
              </div>
            </div>

            {/* Two Line Sub Text */}
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-5">
              <p className="text-base sm:text-lg lg:text-xl text-gray-600  ">
               Saving money isn't always easy, we get it. But with myStash, it's simpler,
              </p>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 whitespace-nowrap">
                smarter, and built just for you. All it takes is a quick download to get started.
              </p>
            </div>

            {/* Download Button */}
            <div className="mb-5 sm:mb-4">
              <DownloadButton />
            </div>

            {/* Image under the button */}
            <div className="w-full max-w-3xl sm:max-w-4xl lg:max-w-5xl mx-auto mt-6 sm:mt-8">
             <img
              src={DUMMY_SECTION1_IMAGE}
              alt="Business Savings Dashboard"
              className="w-full h-full object-cover rounded-lg sm:rounded-xl lg:rounded-5xl "
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src =
                  "https://placehold.co/1200x600/7C3AED/FFFFFF?text=Business+Payment+Dashboard";
              }}
            />
            </div>
          </div>
        </div>

        {/* Optional decorative elements */}
        <div className="absolute top-5 sm:top-10 left-5 sm:left-10 w-20 h-20 sm:w-32 sm:h-32 bg-purple-100 rounded-full opacity-20 sm:opacity-30 blur-md sm:blur-xl z-0"></div>
        <div className="absolute bottom-5 sm:bottom-10 right-5 sm:right-10 w-24 h-24 sm:w-40 sm:h-40 bg-purple-50 rounded-full opacity-15 sm:opacity-20 blur-md sm:blur-xl z-0"></div>
      </div>
    </section>
  );
};

// ============ SECTION 2: SAVINGS PLANS (2 Cards) ============
const SectionTwo = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-5 bg-white mb-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Header (2 lines) */}
        <div className="text-center mb-6 sm:mb-12 lg:mb-1">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-[27px] font-semibold text-gray-900 leading-tight">
            Why save with myStash?
          </h2>
          
        </div>

        {/* Centered Subtext (2 lines) */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-10">
          <p className="text-sm sm:text-base lg:text-lg xl:text-base text-gray-600 leading-relaxed">
            Built to help you save better, not harder
          </p>
         
        </div>

        {/* Two Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-white border-t border-l border-r border-gray-200 rounded-tl-4xl rounded-tr-4xl flex flex-col h-[573px] w-8/9 mx-auto relative overflow-visible">
            <div className="pt-4 text-center flex flex-col grow px-6">
              {/* Recentered text content */}
              <div className="grow flex flex-col justify-center">
                {/* Mini Header */}
                <h3 className="text-2xl font-semibold text-purple-500 mb-1 mt-10">
                  Business Regular Savings
                </h3>

                {/* 2-line Subtext */}
                <p className="text-gray-600 mt-2 leading-relaxed text-sm">
                  seasmless automated savings, quick manual top-
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                  ups, and rewarding interest
                </p>
              </div>

              {/* Images container - positioned at bottom */}
              <div className="mt-auto relative">
                {/* Single Large Image - Matching payments page size */}
                <div className="flex justify-center items-end relative z-10">
                  {/* Large image - h-100 = 400px height */}
                  <img
                    src="/images/businesssavingscard1.svg"
                    alt="Emergency Fund Savings"
                    className="h-100 w-auto object-contain"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src =
                        "https://placehold.co/300x400/7C3AED/FFFFFF?text=Emergency+Fund";
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border-t border-l border-r border-gray-200 rounded-tl-4xl rounded-tr-4xl flex flex-col h-[573px] w-8/9 mx-auto relative overflow-visible">
            <div className="pt-4 text-center flex flex-col grow px-6">
              {/* Recentered text content */}
              <div className="grow flex flex-col justify-center">
                {/* Mini Header */}
                <h3 className="text-2xl font-semibold text-purple-500 mb-1 mt-10">
                  Business Lifestyle Savings
                </h3>

                {/* 2-line Subtext */}
                <p className="text-gray-600 mt-2 leading-relaxed text-sm">
                  From small daily goals to big dreams, save smarter
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                 and reach them faster.
                </p>
              </div>

              {/* Images container - positioned at bottom */}
              <div className="mt-auto relative">
                {/* Single Large Image - Matching payments page size */}
                <div className="flex justify-center items-end relative z-10">
                  {/* Large image - h-100 = 400px height */}
                  <img
                    src="/images/businesssavingscard2.svg"
                    alt="Growth Capital Savings"
                    className="h-100 w-auto object-contain"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src =
                        "https://placehold.co/300x400/10B981/FFFFFF?text=Growth+Capital";
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============ SECTION 3: BUSINESS SAVINGS FEATURES ============
const SectionThree = () => {
  return (
    <FeaturesSection
      title="With myStash you get"
      description="Our core values as an organization reflect in our business ethics."
      features={[
        {
          iconPath: "/icons/padlock.svg",
          title: "Secure Funds",
          description:
            "Your Business fund is protected with advanced encryption and trusted systems, giving you total peace of mind .",
        },
        {
          iconPath: "/icons/rocket.svg",
          title: "Data Security",
          description:
            "Bank-grade encryption and industry-leading security protocols keep your data secure in transit and at rest.",
        },
        {
          iconPath: "/icons/planet.svg",
          title: "Diverse Options",
          description:
            "From budgets, to savings, to payments, we provide solutions that fit evrry business financial journey.",
        },
      ]}
    />
  );
};

// ============ SECTION 4: SAVINGS BENEFITS ============
const SectionFour = () => {
  // Get the path for "Start Savings" from BUTTON_PATHS mapping
  const buttonPath = BUTTON_PATHS["Start Savings"] || "/business/savings";

  return (
    <section className="bg-purple-100 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Div - Image */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <img
              src="/images/businessstack1.svg"
              alt="Business Savings Benefits"
              className="w-full h-auto rounded-lg"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src =
                  "https://placehold.co/600x400/7C3AED/FFFFFF?text=Business+Savings+Benefits";
              }}
            />
          </div>

          {/* Right Div - Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left order-1 lg:order-2 mb-8 lg:mb-0">
            {/* Pill Header with dot inside */}
            <div className="mb-4 sm:mb-6">
              <span className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-medium text-purple-600 tracking-wide bg-purple-200 border border-purple-200 rounded-full px-3 sm:px-4 py-1.5 sm:py-2">
               • Why you should save with us
              </span>
            </div>

            {/* Three-line Header */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              You sit back, relax and watch
              <br />
              your Business savings Grow with
              <br />
              myStash effortlessly.
            </h2>

            {/* Updated Button with Link and icon */}
            <Link
              href={buttonPath}
              className="bg-purple-500 hover:bg-purple-900 text-white font-medium py-2.5 sm:py-2 px-6 sm:px-2 rounded-full sm:rounded-4xl flex items-center justify-center transition-colors duration-200"
            >
              <img
                src={DUMMY_FRAME6_ICON}
                alt="arrow"
                className="w-6 h-6 sm:w-7 sm:h-7 mr-2"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src =
                    "https://placehold.co/20x20/FFFFFF/7C3AED?text=→";
                }}
              />
              <span className="text-sm sm:text-base">Start Savings</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============ MAIN BUSINESS SAVINGS PAGE ============
export default function BusinessSavingsPage() {
  return (
    <div className="min-h-screen bg-white">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <ContactFormSection />
    </div>
  );
}
