"use client";

import React from "react";
import Link from "next/link";
import FeaturesSection from "@/app/components/FeaturesSection";
import ContactFormSection from "@/app/components/ContactFormSection";

// DUMMY IMAGE PATHS
const DUMMY_BUTTON_ICON = "/icons/download-icon.svg";
const DUMMY_SECTION1_IMAGE = "/images/businesspaymenthero.svg";
const DUMMY_FRAME6_ICON = "/icons/Frame6.svg";
const DUMMY_HERO_BACKGROUND = "/images/tiles.svg";

// Download Button Component (use same style as business savings hero)
const DownloadButton = () => {
  return (
    <Link
      href="/download"
      className="bg-purple-500 hover:bg-purple-900 text-white font-medium py-2 px-2 rounded-4xl flex items-center justify-center -mt-3 transition-colors duration-200"
    >
      <img
        src="/icons/Frame5.svg"
        alt="Download app icon"
        className="w-7 h-7 mr-21"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src =
            "https://placehold.co/20x20/FFFFFF/7C3AED?text=→";
        }}
      />
      <span className="mr-25">Download app</span>
    </Link>
  );
};

// ============ SECTION 1: HERO ============
const SectionOne = () => {
  return (
    <section className="relative w-full  bg-white overflow-hidden py-12 sm:py-16 lg:py-20">
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
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content - Centered */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] sm:min-h-[70vh]">
          {/* Pill Header (dot before and after the text) */}
          <div className="text-center mb-6 sm:mb-4">
            <p className="text-sm font-semibold text-purple-400 mb-2 border border-gray-50 rounded-full px-4 py-1 inline-block bg-purple-100">
              • Payment •
            </p>
          </div>

          {/* Two Line Header Text */}
          <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[54px] font-semibold text-gray-900 leading-tight">
              Business transactions made
            </h1>
            <div className="relative inline-block -mt-2">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[54px] font-semibold text-gray-900 leading-tight">
                <span>beyond borders with </span>
                <span className="relative inline-block text-purple-600">
                  ease
                  <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1.5 bg-purple-600 rounded-full"></span>
                </span>
              </h1>
            </div>
          </div>

          {/* Two Line Sub Text */}
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 -mt-2">
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 ">
              No borders. No limits. Just seamless, secure and instant
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600">
              transactions worldwide on myStash app.
            </p>
          </div>

          {/* Download Button */}
          <div className="mb-5 sm:mb-4">
            <DownloadButton />
          </div>

          {/* Image under the button */}
          <div className="w-full max-w-3xl sm:max-w-4xl lg:max-w-5xl mx-auto mt-6 sm:mt-6">
            <img
              src={DUMMY_SECTION1_IMAGE}
              alt="Business Payment Dashboard"
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
      <div className="absolute top-5 sm:top-10 left-5 sm:left-10 w-20 h-20 sm:w-32 sm:h-32 bg-purple-100 rounded-full opacity-20 sm:opacity-30 blur-md sm:blur-xl"></div>
      <div className="absolute bottom-5 sm:bottom-10 right-5 sm:right-10 w-24 h-24 sm:w-40 sm:h-40 bg-purple-50 rounded-full opacity-15 sm:opacity-20 blur-md sm:blur-xl"></div>
    </section>
  );
};

// ============ SECTION 2: PAYMENT METHODS ============
const SectionTwo = () => {
  return (
    <section className="mb-12 mt-8 xl:mt-5 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Header (single line) */}
        <div className="text-center mb-2">
          <h2 className="text-2xl lg:text-3xl xl:text-3xl font-bold text-gray-900 leading-tight">
            Transact without borders
          </h2>
        </div>

        {/* Centered Subtext (single line) */}
        <div className="text-center mb-8 lg:mb-12">
          <p className="text-base lg:text-base xl:text-base text-gray-600 leading-relaxed">
            Global Business payments made simple, swift and secure
          </p>
        </div>

        {/* Cards - One column for <1280px, two columns for xl+ (1280px+) */}
        <div className="flex flex-col xl:grid xl:grid-cols-2 gap-4 xl:gap-8">
          {/* Card 1 */}
          <div className="bg-white border-t border-l border-r border-gray-200 rounded-tl-4xl rounded-tr-4xl flex flex-col h-auto sm:h-[400px] xl:h-[570px] w-full xl:w-4/5 mx-auto relative overflow-visible">
            <div className="pt-4 sm:pt-6 lg:pt-4 text-center flex flex-col grow px-4 sm:px-6 lg:px-6">
              <div className="grow flex flex-col justify-center">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-purple-500 mb-1 sm:mb-2 mt-2 sm:mt-4 lg:mt-4">
                  International Transfers
                </h3>

                <div className="hidden lg:block">
                  <p className="text-sm lg:text-sm text-gray-600 mt-1 leading-relaxed">
                    Initiate and settle foreign remittances in USD and
                  </p>
                  <p className="text-sm lg:text-sm text-gray-600 leading-relaxed">
                    GBP, available in multiple countries,
                  </p>
                </div>
                <p className="lg:hidden text-sm text-gray-600 mt-1 leading-relaxed px-4">
                  Initiate and settle foreign remittances in USD and GBP, available in multiple countries.
                </p>
              </div>

              <div className="mt-auto relative flex flex-col items-center">
                <div className="flex flex-col sm:flex-row lg:flex-row justify-center gap-4 lg:gap-0 items-center relative z-10">
                  <img
                    src="/images/paymentmap.svg"
                    alt="Personal Payment 1"
                    className="h-16 sm:h-20 lg:h-25 w-auto object-contain lg:-mr-20 lg:-mb-55 order-2 lg:order-1 hidden sm:block"
                  />
                  <img
                    src="/images/paymentimg1.svg"
                    alt="Personal Payment 2"
                    className="h-40 sm:h-64 lg:h-100 w-auto object-contain relative order-1 lg:order-2 lg:-right-20"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 - Added lg:mt-[15px] xl:mt-0 */}
          <div className="bg-white border-t border-l border-r border-gray-200 rounded-tl-4xl rounded-tr-4xl flex flex-col h-auto sm:h-[400px] lg:h-[570px] w-full lg:w-4/5 mx-auto relative overflow-visible lg:mt-[65px] xl:mt-0">
            <div className="pt-4 sm:pt-6 lg:pt-4 text-center flex flex-col grow px-4 sm:px-6 lg:px-6">
              <div className="grow flex flex-col justify-center">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-purple-500 mb-1 sm:mb-2 mt-2 sm:mt-4 lg:mt-4">
                  USD Debit Cards
                </h3>

                <div className="hidden lg:block">
                  <p className="text-sm lg:text-sm text-gray-600 mt-1 leading-relaxed">
                    Get a virtual USD debit card for subscriptions,
                  </p>
                  <p className="text-sm lg:text-sm text-gray-600 leading-relaxed">
                    shopping, school fees, and business transactions
                  </p>
                  <p className="text-sm lg:text-sm text-gray-600 leading-relaxed">
                    worldwide
                  </p>
                </div>
                <p className="lg:hidden text-sm text-gray-600 mt-1 leading-relaxed px-4">
                  Get a virtual USD debit card for subscriptions, shopping, school fees, and business transactions worldwide.
                </p>
              </div>

              <div className="mt-auto relative flex flex-col items-center">
                <div className="flex flex-col sm:flex-row lg:flex-row justify-center gap-4 lg:gap-0 items-center relative z-10">
                  <img
                    src="/images/visa.svg"
                    alt="Business Payment 1"
                    className="h-12 sm:h-14 lg:h-15 w-auto object-contain lg:-mr-17 lg:-mb-55 order-2 lg:order-1 hidden sm:block"
                  />
                  <img
                    src="/images/paymentimg2.svg"
                    alt="Business Payment 2"
                    className="h-40 sm:h-64 lg:h-100 w-auto object-contain relative order-1 lg:order-2 lg:-right-20"
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

// ============ SECTION 3: BUSINESS PAYMENT FEATURES ============
const SectionThree = () => {
  return (
    <FeaturesSection
      title="With myStash you get"
      description="Our core values as an organization reflect in our business ethics. "
      features={[
        {
          iconPath: "/icons/padlock.svg",
          title: "Secure Funds",
          description:
            "Your Business fund is protected with advanved encryption and trusted systems, giving you total peace of mind.",
        },
        {
          iconPath: "/icons/rocket.svg",
          title: "Data Security",
          description:
            "Bank-grade encryptions and industry- leading security protocols keep your data secure in transit and at rest.",
        },
        {
          iconPath: "/icons/planet.svg",
          title: "Diverse Options",
          description:
            "From Budgets, to savings and payment, we provide solutions that fit every individual's financial journey.",
        },
      ]}
    />
  );
};

// ============ SECTION 4: PAYMENT BENEFITS ============
const SectionFour = () => {
  return (
    <section className="bg-purple-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Div - Image */}
          <div className="lg:w-1/2">
            <img
              src="/images/businessstack2.svg"
              alt="Business Payment Benefits"
              className="w-full h-auto "
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src =
                  "https://placehold.co/600x400/7C3AED/FFFFFF?text=Business+Payment+Benefits";
              }}
            />
          </div>

          {/* Right Div - Content */}
          <div className="lg:w-1/2 flex flex-col justify-center ml-4 -mt-8 items-start">
            <div className="inline-flex items-center justify-center mb-4  md:justify-start">
              <span className="text-sm font-[580] text-purple-500 bg-purple-200 border border-gray-200 px-6 py-2 mt-10 rounded-full">
                • Payment clarity at every step
              </span>
            </div>
            {/* Three-line Header (no pill header) */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
             Effortless global business
              <br />
              payments, anytime, anywhere
              <br />
              that's the myStash way.
            </h2>

            {/* Download app button (routes to /download) */}
            <Link
              href="/business/payments"
              className="bg-purple-500 hover:bg-purple-900 text-white font-medium py-2 px-2 rounded-4xl flex items-center justify-center transition-colors duration-200"
            >
              <img
                src="/icons/Frame6.svg"
                alt="Download app icon"
                className="w-7 h-7 mr-4"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "https://placehold.co/20x20/FFFFFF/7C3AED?text=→";
                }}
              />
              <span className="mr-3">Payment</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============ MAIN BUSINESS PAYMENT PAGE ============
export default function BusinessPaymentPage() {
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