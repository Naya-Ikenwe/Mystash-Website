// app/savings/page.tsx - FIXED FOR 1024px SCREEN
"use client";

import Link from "next/link";
import React from "react";
import NavButtons from "../../components/NavButtons";
import FeaturesSection from "../../components/FeaturesSection";
import ContactFormSection from "../../components/ContactFormSection";

// Dummy Image Path for Savings Page
const DUMMY_SAVINGS_HERO_IMAGE = "/images/savingsorgheroimg.svg";

export default function SavingsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Section 1: Hero Section - FIXED FOR 1024px */}
      <section className="relative w-full pt-20 ">
        {/* For screens UP TO AND INCLUDING 1024px: stack layout */}
        <div className="block xl:hidden pt-8"> {/* Changed from lg:hidden xl:hidden to just xl:hidden */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {/* Content - Top */}
            <div className="text-center">
              {/* Simple Pill Header */}
              <div className="inline-flex items-center justify-center mb-6">
                <span className="text-sm font-medium text-purple-400 bg-purple-100 border border-gray-200 px-2 py-1 rounded-full">
                  •  Savings  •
                </span>
              </div>

              {/* Header Text - Adjusted for 1024px */}
              <h1 className="text-3xl sm:text-4xl md:text-[40px] font-semibold text-gray-900 mb-4">
                <span className="block mb-1">A Smarter way to Grow</span>
                <span className="block font-semibold">Your Savings</span>
              </h1>

              {/* Paragraph - Adjusted for 1024px */}
              <p className="mt-4 text-lg sm:text-xl md:text-xl text-gray-600 max-w-xl mx-auto">
                Saving money isn't always easy, we get it. But with myStash, it's simpler, smarter, and built just for you. All it takes is a quick download to get started.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex justify-center space-x-4">
                <NavButtons />
              </div>
            </div>

            {/* Image - Below text */}
            <div className="mt-8 flex justify-center">
              <img
                src={DUMMY_SAVINGS_HERO_IMAGE}
                alt="Savings Hero Visual"
                className="w-full max-w-lg h-auto object-contain" /* Increased max-w-md to max-w-lg for 1024px */
              />
            </div>
          </div>
        </div>

        {/* For desktop ABOVE 1024px: Original layout (unchanged) */}
        <div className="hidden xl:block ">
          <div className="max-w-7xl mx-auto px-8 py-40">
            <div className="flex flex-row items-center">
              <div className="w-1/2 -ml-15 mt-10 text-left z-10">
                {/* Simple Pill Header */}
                <div className="inline-flex items-center justify-start mb-8">
                  <span className="text-sm font-medium text-purple-400 bg-purple-100 border border-gray-200 px-2 py-1 rounded-full">
                    •  Savings  •
                  </span>
                </div>

                {/* Original Header Text */}
                <h1 className="text-[56px] font-semibold text-gray-900 mb-4">
                  <span className="block whitespace-nowrap ">A Smarter way to Grow</span>
                  <span className="block font-semibold -mt-3">Your Savings</span>
                </h1>

                <p className="mt-4 text-[22px] text-gray-600 max-w-xl">
                  Saving money isn't always easy, we get it. But with <br />
                  myStash, it's simpler, smarter, and built just for you <br />
                  All it takes is a quick download to get started.
                </p>

                <div className="mt-8 flex justify-start space-x-4">
                  <NavButtons />
                </div>
              </div>
            </div>
          </div>

          {/* Original Hero Image Section for desktop */}
          <div className="absolute top-0 right-0 w-3/5 h-full mt-4 flex items-center justify-start pl-20">
            <div className="w-full h-full max-w-none rounded-l-xl flex mr-5 items-center justify-center overflow-hidden">
              <img
                src={DUMMY_SAVINGS_HERO_IMAGE}
                alt="Savings Hero Visual"
                className="w-full h-full object-contain scale-88 mb-10 -ml-15"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the code remains exactly the same... */}
      <section className="py-4 lg:py-4 bg-white ">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-2">
            <h2 className="text-2xl sm:text-3xl lg:text-3xl font-semibold text-gray-900 leading-tight">
              Stash your money, grow your goals. Watch your savings
            </h2>
            <h2 className="text-2xl sm:text-3xl lg:text-3xl font-semibold text-gray-900 leading-tight">
              multiply effortlessly with myStash.
            </h2>
          </div>

          <div className="text-center mb-6 lg:mb-12">
            <p className="text-base sm:text-lg lg:text-lg text-gray-600 leading-relaxed">
              Experience seamless automated savings, quick manual top-ups, and
            </p>
            <p className="text-base sm:text-lg lg:text-lg text-gray-600 leading-relaxed -mt-1">
              attractive interest rates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 max-w-md md:max-w-lg lg:max-w-none mx-auto lg:mx-0">
            <div className="bg-white border border-gray-200 rounded-tl-2xl rounded-tr-2xl rounded-bl-none rounded-br-none transition-shadow">
              <div className="pt-4 text-center">
                <h3 className="text-xl lg:text-2xl font-semibold text-purple-500 mb-2 mt-6 lg:mt-11">
                  Lifestyle savings 
                </h3>

                <p className="text-sm lg:text-sm text-gray-600 mt-2 leading-relaxed">
                  From small daily goals to big dreams, save smarter
                </p>
                <p className="text-sm lg:text-sm text-gray-600 leading-relaxed -mt-1">
                  and reach them faster.
                </p>

                <div className="mt-3 lg:mt-5 flex justify-center">
                  <img
                    src="/images/savingscard1.svg"
                    alt="Daily Savings"
                    className="h-44 lg:h-60 w-auto object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-tl-2xl rounded-tr-2xl rounded-bl-none rounded-br-none transition-shadow">
              <div className="pt-4 text-center">
                <h3 className="text-xl lg:text-2xl font-semibold text-purple-500 mb-2 mt-6 lg:mt-11">
                  Regular Savings
                </h3>

                <p className="text-sm lg:text-sm text-gray-600 mt-2 leading-relaxed">
                  Seamless automated savings, quick manual top-
                </p>
                <p className="text-sm lg:text-sm text-gray-600 leading-relaxed -mt-1">
                  ups, and rewarding interest rates.
                </p>

                <div className="mt-3 lg:mt-5 flex justify-center">
                  <img
                    src="/images/savingscard2.svg"
                    alt="Goal Savings"
                    className="h-44 lg:h-60 w-auto object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-tl-2xl rounded-tr-2xl rounded-bl-none rounded-br-none transition-shadow">
              <div className="pt-4 text-center">
                <h3 className="text-xl lg:text-2xl font-semibold text-purple-500 mb-2 mt-6 lg:mt-11">
                  Save-check Plan
                </h3>

                <p className="text-sm lg:text-sm text-gray-600 mt-2 leading-relaxed">
                  Save directly from your paycheck. You don't have
                </p>
                <p className="text-sm lg:text-sm text-gray-600 leading-relaxed -mt-1">
                  to wait until your salary hits your bank account
                </p>
                <div className="mt-3 lg:mt-5 flex justify-center">
                  <img
                    src="/images/savingscard3.svg"
                    alt="Fixed Savings"
                    className="h-44 lg:h-60 w-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      <section className="bg-purple-100">
        <div className="max-w-7xl mx-auto px-4 ">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 flex items-center h-full">
              <img
                src="/images/savingslast.svg"
                alt="Savings Growth"
                className="w-full h-[400px] object-cover"
              />
            </div>

            <div className="lg:w-1/2 flex flex-col justify-center ml-4 items-start">
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-purple-600 tracking-wide bg-purple-200 border border-purple-200 rounded-full px-4 py-2">
                  • Why you should save with us
                </span>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
                You sit back, relax and watch
                <br />
                your savings grow with myStash
                <br />
                effortlessly
              </h2>

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

      <ContactFormSection />
    </div>
  );
}