// app/payments/page.tsx
"use client";

import Link from "next/link";
import React from "react";
import NavButtons from "../components/NavButtons";
import FeaturesSection from "../components/FeaturesSection";
import ContactFormSection from "../components/ContactFormSection";

// Dummy Image Path for Payments Page
const DUMMY_PAYMENTS_HERO_IMAGE = "/images/paymentcards.svg";

// --- Section 1: Hero Section ---
export default function PaymentsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Section 1: Hero Section */}
      <section className="relative w-full min-h-[100vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 order-2 md:order-1 text-center md:text-left z-10 md:-ml-8">
              {/* Simple Pill Header */}
              <div className="inline-flex items-center justify-center mb-8 md:justify-start">
                <span className="text-sm font-semibold text-black bg-white border border-gray-200 px-6 py-2 rounded-full">
                  • Fast Payments •
                </span>
              </div>

              {/* Simple Header Text */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 mb-4">
                <span className="block">Seamless Payments</span>
                <span className="block font-semibold">Instant Transfers</span>
              </h1>

              <p className="mt-4 text-xl text-gray-600 max-w-lg mx-auto md:mx-0">
                Send and receive money instantly with secure, reliable payment
                solutions that work when you need them.
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
              className="w-full h-full object-contain scale-115 ml-20"
            />
          </div>
        </div>
      </section>

      {/* We'll add Sections 2-5 here later */}
      {/* Section 2: Payment Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Centered Header (single line) */}
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-900 leading-tight">
              Payment Solutions For Everyone
            </h2>
          </div>

          {/* Centered Subtext (single line) */}
          <div className="text-center mb-12">
            <p className="text-lg text-gray-600 leading-relaxed">
              Choose the payment method that works best for you
            </p>
          </div>

          {/* Two Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-white border border-gray-200 rounded-tl-2xl rounded-tr-2xl rounded-bl-none rounded-br-none shadow-sm hover:shadow-md transition-shadow flex flex-col h-[570px]">
              {" "}
              {/* Increased height */}
              <div className="pt-4 text-center flex flex-col flex-grow">
                {/* Mini Header */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Personal Payments
                </h3>

                {/* 2-line Subtext */}
                <p className="text-gray-600 mt-8 leading-relaxed">
                  Send money to friends and family
                </p>
                <p className="text-gray-600 leading-relaxed">
                  instantly and securely
                </p>

                {/* Two Images Side by Side - Pushed to bottom */}
                <div className="mt-auto flex justify-center gap-4 items-end">
                  <img
                    src="/images/paymentmap.svg"
                    alt="Personal Payment 1"
                    className="h-20 w-auto object-contain"
                  />
                  <img
                    src="/images/paymentimg1.svg"
                    alt="Personal Payment 2"
                    className="h-100 w-auto object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-gray-200 rounded-tl-2xl rounded-tr-2xl rounded-bl-none rounded-br-none shadow-sm hover:shadow-md transition-shadow flex flex-col h-[570px]">
              {" "}
              {/* Increased height */}
              <div className="pt-4 text-center flex flex-col flex-grow">
                {/* Mini Header */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Business Payments
                </h3>

                {/* 3-line Subtext */}
                <p className="text-gray-600 mt-8 leading-relaxed">
                  Streamline your business transactions
                </p>
                <p className="text-gray-600 leading-relaxed">
                  with bulk payments and automated
                </p>
                <p className="text-gray-600 leading-relaxed">
                  processing solutions
                </p>

                {/* Two Images Side by Side - Pushed to bottom */}
                <div className="mt-auto flex justify-center gap-4 items-end">
                  <img
                    src="/images/visa.svg"
                    alt="Business Payment 1"
                    className="h-10 mb-5 w-auto object-contain"
                  />
                  <img
                    src="/images/paymentimg2.svg"
                    alt="Business Payment 2"
                    className="h-100 w-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Payment Features */}
      <FeaturesSection
        title="Why Choose Our Payment Platform"
        description="Experience faster, safer, and more reliable payments with features designed for modern financial needs."
        features={[
          {
            iconPath: "/icons/padlock.svg",
            title: "Instant Transfers",
            description:
              "Send and receive money in seconds with our lightning-fast payment processing technology.",
          },
          {
            iconPath: "/icons/rocket.svg",
            title: "Bank-Level Security",
            description:
              "Your transactions are protected with advanced encryption and multi-factor authentication.",
          },
          {
            iconPath: "/icons/planet.svg",
            title: "Global Reach",
            description:
              "Make payments across borders with competitive exchange rates and low transfer fees.",
          },
        ]}
      />

      {/* Section 4: Payment Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Div - Image */}
            <div className="lg:w-1/2">
              <img
                src="/images/paymentlast.svg"
                alt="Payment Benefits"
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Right Div - Content */}
            <div className="lg:w-1/2 flex flex-col justify-center ml-4 items-start">
              {/* Three-line Header (no pill header) */}
              <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Simplify Your
                <br />
                Financial Transactions
                <br />
                Today
              </h2>

              {/* Button with same icon as Section 1 */}
              <button className="bg-purple-800 hover:bg-purple-900 text-white font-semibold py-3 px-8 rounded-4xl flex items-center justify-center transition-colors duration-200">
                <img
                  src="/icons/Frame6.svg"
                  alt="arrow"
                  className="w-5 h-5 mr-2"
                />
                Get Started Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - Contact Form */}
      <ContactFormSection />
    </div>
  );
}
