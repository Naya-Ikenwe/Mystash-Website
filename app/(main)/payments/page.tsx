// app/payments/page.tsx
"use client";

import Link from "next/link";
import React from "react";
import NavButtons from "../../components/NavButtons";
import FeaturesSection from "../../components/FeaturesSection";
import ContactFormSection from "../../components/ContactFormSection";

// Dummy Image Path for Payments Page
const DUMMY_PAYMENTS_HERO_IMAGE = "/images/realpaymentcards.svg";

const DownloadButton = () => (
  <Link
    href="/download"
    className="bg-purple-500 hover:bg-purple-900 text-white font-semibold py-2 px-2 rounded-4xl flex items-center justify-center transition-colors duration-200"
  >
    <img
      src="/icons/Frame5.svg"
      alt="Download app icon"
      className="w-7 h-7 mr-4"
    />
    <span className="mr-2">Download app</span>
  </Link>
);

// --- Section 1: Hero Section ---
export default function PaymentsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Section 1: Hero Section */}
      <section className="relative w-full pt-16 xl:pt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 xl:py-40">
          <div className="flex flex-col xl:flex-row items-center">
            {/* Left Column - Text Content */}
            <div className="w-full xl:w-1/2 xl:mt-18 text-center xl:text-left z-10 xl:-ml-13 pl-0 lg:pl-4 xl:pl-0">
              {/* Simple Pill Header */}
              <div className="inline-flex items-center justify-center mb-6 xl:mb-8 xl:justify-start">
                <span className="text-sm font-medium text-purple-500 bg-purple-100 border border-gray-200 px-4 xl:px-6 py-1 xl:py-2 rounded-full">
                  • Payments •
                </span>
              </div>

              {/* Simple Header Text */}
              <h1 className="text-3xl xl:text-[56px] font-semibold text-gray-900 mb-4 xl:mb-6 tracking-wide px-2 lg:px-0 xl:px-0">
                <span className="block">Transaction made</span>
                <span className="block font-semibold">beyond Borders</span>
              </h1>

              <p className="mt-3 xl:mt-4 text-base xl:text-[22px] text-gray-600 max-w-xl mx-auto xl:mx-0 px-2 lg:px-0 xl:px-0">
                No borders. No limits. Just seasmless, secure, and instant
                transactions worldwide on myStash app
              </p>

              <div className="mt-6 xl:mt-8 flex justify-center xl:justify-start space-x-4">
                <NavButtons />
              </div>
            </div>

            {/* Image - Shows UNDER text on screens ≤1024px, RIGHT side on desktop (>1024px) */}
            <div className="w-full xl:w-1/2 mt-8 xl:mt-0 xl:hidden">
              <div className="flex items-center justify-center">
                <img
                  src={DUMMY_PAYMENTS_HERO_IMAGE}
                  alt="Payments Hero Visual"
                  className="w-3/4 max-w-md object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image Section - Desktop only (>1024px) */}
        <div className="hidden xl:block absolute top-0 right-0 w-3/5 h-full flex items-center justify-start pl-20">
          <div className="w-full h-full max-w-none rounded-l-xl flex items-center justify-center overflow-hidden">
            <img
              src={DUMMY_PAYMENTS_HERO_IMAGE}
              alt="Payments Hero Visual"
              className="w-full h-full object-contain scale-100 -ml-30 -mb-25"
            />
          </div>
        </div>
      </section>

      {/* Section 2: Payment Methods */}
      <section className="mb-12 mt-8 xl:mt-5 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Centered Header (single line) */}
          <div className="text-center mb-2">
            <h2 className="text-2xl xl:text-3xl font-bold text-gray-900 leading-tight">
              Transact without borders
            </h2>
          </div>

          {/* Centered Subtext (single line) */}
          <div className="text-center mb-8 xl:mb-12">
            <p className="text-base xl:text-base text-gray-600 leading-relaxed">
              Global payments made simple, swift and secure
            </p>
          </div>

          {/* Cards - One column for ≤1024px, two columns for desktop (>1024px) */}
          <div className="flex flex-col xl:grid xl:grid-cols-2 gap-16 md:gap-11 xl:gap-13">
            {/* Card 1 */}
            <div className="bg-white border-t border-l border-r border-gray-200 rounded-tl-4xl rounded-tr-4xl flex flex-col h-[400px] xl:h-[570px] w-full xl:w-4/5 mx-auto relative overflow-visible">
              <div className="pt-4 text-center flex flex-col grow px-4 xl:px-6">
                <div className="grow flex flex-col justify-center">
                  <h3 className="text-xl xl:text-2xl font-semibold text-purple-500 mb-1 mt-2 xl:mt-4">
                    Personal Payments
                  </h3>

                  <div className="hidden xl:block">
                    <p className="text-gray-600 mt-1 leading-relaxed text-sm">
                      Initiate and settle foreign remittances in USD and
                    </p>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      GBP, available in multiple countries.
                    </p>
                  </div>
                  <p className="xl:hidden text-gray-600 mt-1 leading-relaxed text-sm px-4">
                    Initiate and settle foreign remittances in USD and GBP, available in multiple countries.
                  </p>
                </div>

                <div className="mt-auto relative flex flex-col items-center">
                  <div className="flex flex-col xl:flex-row justify-center gap-4 xl:gap-0 items-center relative z-10">
                    <img
                      src="/images/paymentmap.svg"
                      alt="Personal Payment 1"
                      className="h-20 xl:h-25 w-auto object-contain xl:-mr-20 order-2 xl:order-1 xl:mt-50"
                    />
                    <img
                      src="/images/paymentimg1.svg"
                      alt="Personal Payment 2"
                      className="h-64 xl:h-100 w-auto object-contain relative order-1 xl:order-2 xl:-right-20"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border-t border-l border-r border-gray-200 rounded-tl-4xl rounded-tr-4xl flex flex-col h-[400px] xl:h-[570px] w-full xl:w-4/5 mx-auto relative overflow-visible">
              <div className="pt-4 text-center flex flex-col grow px-4 xl:px-6">
                <div className="grow flex flex-col justify-center">
                  <h3 className="text-xl xl:text-2xl font-semibold text-purple-500 mb-1 mt-2 xl:mt-4">
                    USD Debit Cards
                  </h3>

                  <div className="hidden xl:block">
                    <p className="text-gray-600 mt-1 leading-relaxed text-sm">
                      Get a virtual USD debit card for subscriptions,
                    </p>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      shopping, school fees, and business transactions
                    </p>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      worldwide.
                    </p>
                  </div>
                  <p className="xl:hidden text-gray-600 mt-1 leading-relaxed text-sm px-4">
                    Get a virtual USD debit card for subscriptions, shopping, school fees, and business transactions worldwide.
                  </p>
                </div>

                <div className="mt-auto relative flex flex-col items-center">
                  <div className="flex flex-col xl:flex-row justify-center gap-4 xl:gap-0 items-center relative z-10">
                    <img
                      src="/images/visa.svg"
                      alt="Business Payment 1"
                      className="h-14 xl:h-15 w-auto object-contain xl:-mr-17 xl:mb-5 order-2 xl:order-1 xl:mt-55"
                    />
                    <img
                      src="/images/paymentimg2.svg"
                      alt="Business Payment 2"
                      className="h-64 xl:h-100 w-auto object-contain relative order-1 xl:order-2 xl:-right-20"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Payment Features */}
      <FeaturesSection
        title="Why Trust myStash For Your Payments?"
        description="Every transaction deserves simplicity and trust."
        features={[
          {
            iconPath: "/icons/planet.svg",
            title: "Quick & Easy Setup",
            description:
              "Let myStash handle all your payment transactions, anywhere, anytime, fast, secure and effortless payments at your fingertips.",
          },
          {
            iconPath: "/icons/rocket.svg",
            title: "Global Reach",
            description:
              "Make payments to 45+ countries with your myStash debit card or international transfers at a good rate seamlessly.",
          },
          {
            iconPath: "/icons/padlock.svg",
            title: "Secure & Confidential",
            description:
              "Your account information is protected with advanced encryption and trusted systems- giving you total peace of mind.",
          },
        ]}
      />

      {/* Section 4: Payment Benefits */}
      <section className=" bg-purple-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col xl:flex-row items-center gap-12">
            <div className="xl:w-1/2">
              <img
                src="/images/paymentlast.svg"
                alt="Payment Benefits"
                className="w-full h-auto "
              />
            </div>

            <div className="xl:w-1/2 flex flex-col justify-center ml-4 -mt-15 items-start">
              <div className="inline-flex items-center justify-center mb-2 xl:justify-start">
                <span className="text-sm font-semibold text-purple-500 bg-purple-200 border border-gray-200 px-6 py-2 mt-10 rounded-full">
                  • Payment clarity at every step
                </span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
                Effortless global payment,
                <br />
                anytime, anywhere, that's the
                <br />
                myStash way.
              </h2>

              <DownloadButton />
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - Contact Form */}
      <ContactFormSection />
    </div>
  );
}