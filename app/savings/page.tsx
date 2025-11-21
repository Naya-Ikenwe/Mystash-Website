// app/savings/page.tsx
"use client";

import Link from "next/link";
import React from "react";
import NavButtons from "../components/NavButtons";
import FeaturesSection from "../components/FeaturesSection";
import ContactFormSection from "../components/ContactFormSection";

// Dummy Image Path for Savings Page
const DUMMY_SAVINGS_HERO_IMAGE = "/images/savingshero.svg";

// --- Section 1: Hero Section ---
export default function SavingsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Section 1: Hero Section */}
      <section className="relative w-full min-h-[100vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 order-2 md:order-1 text-center md:text-left z-10">
              {/* Simple Pill Header (no marquee) */}
              <div className="inline-flex items-center justify-center mb-8 md:justify-start">
                <span className="text-sm font-semibold text-black bg-white border border-gray-200 px-6 py-2 rounded-full">
                  • Smart Savings •
                </span>
              </div>

              {/* Simple Header Text (no vertical carousel) */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 mb-4">
                <span className="block">Build Your Savings</span>
                <span className="block font-semibold">Grow Your Future</span>
              </h1>

              <p className="mt-4 text-xl text-gray-600 max-w-lg mx-auto md:mx-0">
                Start your savings journey with smart tools that help you reach
                your financial goals faster and safer than ever before.
              </p>

              <div className="mt-8 flex justify-center md:justify-start space-x-4">
                <NavButtons />
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image Section */}
        <div className="absolute top-0 right-0 w-3/5 h-full order-1 md:order-2 flex items-center justify-start pl-20">
          <div className="w-full h-full max-w-none rounded-l-xl flex mr-5 items-center justify-center overflow-hidden">
            <img
              src={DUMMY_SAVINGS_HERO_IMAGE}
              alt="Savings Hero Visual"
              className="w-full h-full object-contain scale-100"
            />
          </div>
        </div>
      </section>

      {/* We'll add Sections 2-5 here later */}
      {/* Section 2: Savings Plans */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Centered Header (2 lines) */}
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-900 leading-tight">
              Choose Your Savings
            </h2>
            <h2 className="text-3xl font-bold text-gray-900 leading-tight">
              Journey
            </h2>
          </div>

          {/* Centered Subtext (2 lines) */}
          <div className="text-center mb-12">
            <p className="text-lg text-gray-600 leading-relaxed">
              Flexible savings plans designed to fit
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              your lifestyle and financial goals
            </p>
          </div>

          {/* Three Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white border border-gray-200 rounded-tl-2xl rounded-tr-2xl rounded-bl-none rounded-br-none shadow-sm hover:shadow-md transition-shadow">
              <div className="pt-4 text-center">
                {/* Mini Header */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-8">
                  Daily Savings
                </h3>

                {/* 2-line Subtext */}
                <p className="text-gray-600 mt-4 leading-relaxed">
                  Build consistent saving habits
                </p>
                <p className="text-gray-600 leading-relaxed">
                  with daily contributions
                </p>

                {/* Image at bottom */}
                <div className="mt-4 flex justify-center">
                  <img
                    src="/images/savingscard1.svg"
                    alt="Daily Savings"
                    className="h-60 w-100 object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-gray-200 rounded-tl-2xl rounded-tr-2xl rounded-bl-none rounded-br-none shadow-sm hover:shadow-md transition-shadow">
              <div className="pt-4 text-center">
                {/* Mini Header */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-8">
                  Goal Savings
                </h3>

                {/* 2-line Subtext */}
                <p className="text-gray-600 mt-4 leading-relaxed">
                  Save towards specific targets
                </p>
                <p className="text-gray-600 leading-relaxed">
                  and track your progress
                </p>

                {/* Image at bottom */}
                <div className="mt-4 flex justify-center">
                  <img
                    src="/images/savingscard2.svg"
                    alt="Goal Savings"
                    className="h-60 w-100 object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-gray-200 rounded-tl-2xl rounded-tr-2xl rounded-bl-none rounded-br-none shadow-sm hover:shadow-md transition-shadow">
              <div className="pt-4 text-center">
                {/* Mini Header */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-8">
                  Fixed Savings
                </h3>

                {/* 2-line Subtext */}
                <p className="text-gray-600 mt-4 leading-relaxed">
                  Lock funds and earn higher
                </p>
                <p className="text-gray-600 leading-relaxed">interest rates</p>

                {/* Image at bottom */}
                <div className="mt-4 flex justify-center">
                  <img
                    src="/images/savingscard3.svg"
                    alt="Fixed Savings"
                    className="h-60 w-100 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Savings Features */}
      <FeaturesSection
        title="Why Save With Us"
        description="Experience smarter savings with features designed to help you build wealth securely and efficiently."
        features={[
          {
            iconPath: "/icons/padlock.svg",
            title: "Competitive Interest Rates",
            description:
              "Earn higher returns on your savings with our competitive interest rates that help your money grow faster.",
          },
          {
            iconPath: "/icons/rocket.svg",
            title: "Bank-Grade Security",
            description:
              "Your funds are protected with advanced encryption and regulatory compliance, ensuring complete peace of mind.",
          },
          {
            iconPath: "/icons/planet.svg",
            title: "Complete Flexibility",
            description:
              "Save on your own terms with flexible withdrawal options and no hidden fees or penalties.",
          },
        ]}
      />

      {/* Section 4: Savings Guidance */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Div - Image */}
            <div className="lg:w-1/2">
              <img
                src="/images/savingslast.svg"
                alt="Savings Growth"
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Right Div - Content */}
            <div className="lg:w-1/2 flex flex-col justify-center ml-4 items-start">
              {/* Pill Header with dot inside */}
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-purple-600 tracking-wide bg-purple-100 border border-purple-200 rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  Smart Saving
                </span>
              </div>

              {/* Three-line Header */}
              <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Start Building Your
                <br />
                Financial Security
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
                Start Saving Now
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
