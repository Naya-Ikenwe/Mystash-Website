// app/savings/page.tsx
"use client";

import Link from "next/link";
import React from "react";
import NavButtons from "../../components/NavButtons";
import FeaturesSection from "../../components/FeaturesSection";
import ContactFormSection from "../../components/ContactFormSection";

// Dummy Image Path for Savings Page
const DUMMY_SAVINGS_HERO_IMAGE = "/images/savingsorgheroimg.svg";

// --- Section 1: Hero Section ---
export default function SavingsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Section 1: Hero Section */}
      <section className="relative w-full min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-25 ">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 order-2 md:order-1 -ml-15 mt-10 text-center md:text-left z-10">
              {/* Simple Pill Header (no marquee) */}
              <div className="inline-flex items-center justify-center mb-8 md:justify-start">
                <span className="text-sm font-medium text-purple-400 bg-purple-100 border border-gray-200 px-2 py-1 rounded-full">
                  •  Savings  •
                </span>
              </div>

              {/* Simple Header Text (no vertical carousel) */}
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-semibold text-gray-900 mb-4">
                <span className="block whitespace-nowrap mb-1">A Smarter way to Grow</span>
                <span className="block font-semibold">Your Savings</span>
              </h1>

              <p className="mt-4 text-[22px] text-gray-600 max-w-xl mx-auto md:mx-0">
                Saving money isn't always easy, we get it. But with <br />
                myStash, it's simpler, smarter, and built just for you <br />
                All it takes is a quick download to get started.
              </p>

              <div className="mt-8 flex justify-center md:justify-start space-x-4">
                <NavButtons />
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image Section */}
        <div className="absolute top-0 right-0 w-3/5 h-full order-1 md:order-2  mt-4 flex items-center justify-start pl-20">
          <div className="w-full h-full max-w-none rounded-l-xl flex mr-5 items-center justify-center overflow-hidden">
            <img
              src={DUMMY_SAVINGS_HERO_IMAGE}
              alt="Savings Hero Visual"
              className="w-full h-full object-contain scale-88 mb-10 -ml-15"
            />
          </div>
        </div>
      </section>

      {/* We'll add Sections 2-5 here later */}
      {/* Section 2: Savings Plans */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Centered Header (2 lines) */}
          <div className="text-center mb-2">
            <h2 className="text-3xl font-semibold text-gray-900 leading-tight">
              Stash your money, grow your goals. Watch your savings
            </h2>
            <h2 className="text-3xl font-semibold text-gray-900 leading-tight">
              multiply effortlessly with myStash.
            </h2>
          </div>

          {/* Centered Subtext (2 lines) */}
          <div className="text-center mb-12">
            <p className="text-lg text-gray-600 leading-relaxed">
             Experience seamless automated savings, quick manual top-ups, and
            </p>
            <p className="text-lg text-gray-600 leading-relaxed -mt-1">
              attractive interest rates.
            </p>
          </div>

          {/* Three Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white border border-gray-200 rounded-tl-2xl rounded-tr-2xl rounded-bl-none rounded-br-none  transition-shadow">
              <div className="pt-4 text-center">
                {/* Mini Header */}
                <h3 className="text-2xl font-semibold text-purple-500 mb-2 mt-11">
                  Lifestyle savings 
                </h3>

                {/* 2-line Subtext */}
                <p className="text-gray-600 mt-2 leading-relaxed text-sm">
                 From small daily goals to big dreams, save smarter
                </p>
                <p className="text-gray-600 leading-relaxed text-sm -mt-1">
                 and reach them faster.
                </p>

                {/* Image at bottom */}
                <div className="mt-5 flex justify-center">
                  <img
                    src="/images/savingscard1.svg"
                    alt="Daily Savings"
                    className="h-60 w-100 object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-gray-200 rounded-tl-2xl rounded-tr-2xl rounded-bl-none rounded-br-none  transition-shadow">
              <div className="pt-4 text-center">
                {/* Mini Header */}
                <h3 className="text-2xl font-semibold text-purple-500 mb-2 mt-11">
                  Regular Savings
                </h3>

                {/* 2-line Subtext */}
                <p className="text-gray-600 mt-2 leading-relaxed text-sm">
                  Seamless automated savings, quick manual top-
                </p>
                <p className="text-gray-600 leading-relaxed text-sm -mt-1">
                  ups, and rewarding interest rates.
                </p>

                {/* Image at bottom */}
                <div className="mt-5 flex justify-center">
                  <img
                    src="/images/savingscard2.svg"
                    alt="Goal Savings"
                    className="h-60 w-100 object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-gray-200 rounded-tl-2xl rounded-tr-2xl rounded-bl-none rounded-br-none  transition-shadow">
              <div className="pt-4 text-center">
                {/* Mini Header */}
                <h3 className="text-2xl font-semibold text-purple-500 mb-2 mt-11">
                  Save-check Plan
                </h3>

                {/* 2-line Subtext */}
                <p className="text-gray-600 mt-2 leading-relaxed text-sm">
                  Save directly from your paycheck. You don't have
                </p>
                <p className="text-gray-600 leading-relaxed text-sm -mt-1">
                  to wait until your salary hits your bank account
                </p>
                {/* Image at bottom */}
                <div className="mt-5 flex justify-center">
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
        title="Why Save With myStash?"
        description="Built to help you save better, not harder."
        features={[
          {
            iconPath: "/icons/padlock.svg",
            title: "Secure & Confidential",
            description:
              "Your account information is protected with advanced encryption and trusted systems- giving you total peace of mind.",
          },
          {
            iconPath: "/icons/rocket.svg",
            title: "Financial Freedom",
            description:
              "Go beyond borders, maximize your savings locally and intentionally, with flexible accounts and instant access. Your savings are not limited to only your local currency",
          },
          {
            iconPath: "/icons/planet.svg",
            title: "Personalized",
            description:
              "Tailor your savings plan to your unique goals and lifestyle-set targets, and watch your balance grow effortlessly.",
          },
        ]}
      />

      {/* Section 4: Savings Guidance */}
<section className="bg-purple-100"> {/* Remove py-16 here */}
  <div className="max-w-7xl mx-auto px-4 "> {/* Add py-16 to inner container instead */}
    <div className="flex flex-col lg:flex-row items-center gap-12">
      {/* Left Div - Image - Full height */}
      <div className="lg:w-1/2 flex items-center h-full">
        <img
          src="/images/savingslast.svg"
          alt="Savings Growth"
          className="w-full h-[400px] object-cover "
        />
      </div>

      {/* Right Div - Content */}
      <div className="lg:w-1/2 flex flex-col justify-center ml-4 items-start">
        {/* Pill Header with dot inside */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-purple-600 tracking-wide bg-purple-200 border border-purple-200 rounded-full px-4 py-2">
           
          • Why you should save with us
          </span>
        </div>

        {/* Three-line Header */}
        <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
          You sit back, relax and watch
          <br />
          your savings grow with myStash
          <br />
          effortlessly
        </h2>

        {/* Button with same icon as Section 1 */}
        <button className="bg-purple-500 hover:bg-purple-900 text-white font-medium py-2 px-3 rounded-4xl flex items-center justify-center transition-colors duration-200">
          <img
            src="/icons/Frame6.svg"
            alt="arrow"
            className="w-8 h-8 mr-2"
          />
          Start Saving 
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
