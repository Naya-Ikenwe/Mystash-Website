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
      <section className="relative w-full min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 order-2 md:order-1 mt-10 text-center md:text-left z-10 md:-ml-8">
              {/* Simple Pill Header */}
              <div className="inline-flex items-center justify-center mb-8 md:justify-start">
                <span className="text-sm font-medium text-purple-500 bg-purple-100 border border-gray-200 px-6 py-1 rounded-full">
                  • Payments •
                </span>
              </div>

              {/* Simple Header Text */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6">
                <span className="block">Transaction made</span>
                <span className="block font-semibold ">beyond Borders</span>
              </h1>

              <p className="mt-4 text-xl text-gray-600 max-w-lg mx-auto md:mx-0">
                No borders. No limits. Just seasmless, secure, and instant
                transactions worldwide on myStash app
              </p>

              <div className="mt-8 flex justify-center md:justify-start space-x-4">
                <NavButtons />
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image Section */}
        <div className="absolute top-0 right-0 w-3/5 h-full order-1 md:order-2 flex items-center justify-start pl-20">
          <div className="w-full h-full max-w-none rounded-l-xl flex items-center justify-center overflow-hidden">
            <img
              src={DUMMY_PAYMENTS_HERO_IMAGE}
              alt="Payments Hero Visual"
              className="w-full h-full object-contain scale-100 mr-25 mb-5"
            />
          </div>
        </div>
      </section>

      {/* We'll add Sections 2-5 here later */}
      {/* Section 2: Payment Methods */}
      <section className="mb-12 -mt-5 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Centered Header (single line) */}
          <div className="text-center mb-2">
            <h2 className="text-3xl font-bold text-gray-900 leading-tight">
              Transact without borders
            </h2>
          </div>

          {/* Centered Subtext (single line) */}
          <div className="text-center mb-12">
            <p className="text-base text-gray-600 leading-relaxed">
              Global payments made simple, swift and secure
            </p>
          </div>

          {/* Two Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 - Reduced width */}
            <div className="bg-white border-t border-l border-r border-gray-200 rounded-tl-2xl rounded-tr-2xl flex flex-col h-[570px] w-4/5 mx-auto relative overflow-visible">
              <div className="pt-4 text-center flex flex-col grow px-6">
                {/* Recentered text content */}
                <div className="grow flex flex-col justify-center">
                  {/* Mini Header */}
                  <h3 className="text-2xl font-semibold text-purple-500 mb-1 mt-4">
                    Personal Payments
                  </h3>

                  {/* 2-line Subtext */}
                  <p className="text-gray-600 mt-1 leading-relaxed text-sm">
                   Initiate and settle foreign remittances in USD and 
                   
                  </p>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    GBP, available in multiple countries.
                  </p>
                </div>

                {/* Images container - positioned at bottom */}
                <div className="mt-auto relative">
                  {/* Two Images Side by Side */}
                  <div className="flex justify-center gap-4 items-end relative z-10">
                    {/* Smaller image remains normal */}
                    <img
                      src="/images/paymentmap.svg"
                      alt="Personal Payment 1"
                      className="h-25 w-auto object-contain -mr-20"
                    />
                    {/* Larger image extends beyond card */}
                    <img
                      src="/images/paymentimg1.svg"
                      alt="Personal Payment 2"
                      className="h-100 w-auto object-contain relative -right-20 "
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - Reduced width */}
            <div className="bg-white border-t border-l border-r border-gray-200 rounded-tl-2xl rounded-tr-2xl flex flex-col h-[570px] w-4/5 mx-auto relative overflow-visible">
              <div className="pt-4 text-center flex flex-col grow px-6">
                {/* Recentered text content */}
                <div className="grow flex flex-col justify-center">
                  {/* Mini Header */}
                  <h3 className="text-2xl font-semibold text-purple-500 mb-1 mt-4">
                    USD Debit Cards
                  </h3>

                  {/* 3-line Subtext */}
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

                {/* Images container - positioned at bottom */}
                <div className="mt-auto relative">
                  {/* Two Images Side by Side */}
                  <div className="flex justify-center gap-4 items-end relative z-10">
                    {/* Smaller image remains normal */}
                    <img
                      src="/images/visa.svg"
                      alt="Business Payment 1"
                      className="h-15 -mr-17 mb-5 w-auto object-contain"
                    />
                    {/* Larger image extends beyond card */}
                    <img
                      src="/images/paymentimg2.svg"
                      alt="Business Payment 2"
                      className="h-100 w-auto object-contain relative -right-20 "
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
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Div - Image */}
            <div className="lg:w-1/2">
              <img
                src="/images/paymentlast.svg"
                alt="Payment Benefits"
                className="w-full h-auto "
              />
            </div>

            {/* Right Div - Content */}
            <div className="lg:w-1/2 flex flex-col justify-center ml-4 -mt-15 items-start">
             <div className="inline-flex items-center justify-center mb-2 md:justify-start">
                <span className="text-sm font-medium text-purple-500 bg-purple-200 border border-gray-200 px-6 py-2 mt-10 rounded-full">
                  • Payment clarity at every step 
                </span>
              </div>
              {/* Three-line Header (no pill header) */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
                Effortless global payment,
                <br />
                anytime, anywhere, that's the
                <br />
                myStash way.
              </h2>

              {/* Button with same icon as Section 1 */}
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
