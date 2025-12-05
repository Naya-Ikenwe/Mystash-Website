// app/(main)/about/page.tsx
"use client";

import ContactFormSection from "@/app/components/ContactFormSection";
import React from "react";

// Dummy paths for images and icons
const DUMMY_BACKGROUND_IMAGE = "/images/abouthero.svg";
const DUMMY_SECTION2_IMAGE = "/images/mystashcoin.svg";
const DUMMY_ICON_1 = "/icons/icon1.svg";
const DUMMY_ICON_2 = "/icons/icon2.svg";
const DUMMY_ICON_3 = "/icons/icon3.svg";
const DUMMY_ICON_4 = "/icons/icon4.svg";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Section 1: Hero with Background Image */}
      <section
        className="relative w-full min-h-[65vh] flex items-center justify-center"
        style={{
          backgroundImage: `url('${DUMMY_BACKGROUND_IMAGE}')`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-purple-100/60"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          {/* Purple Centered Header */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-purple-600 mb-8">
            Our Story
          </h1>

          {/* 6-line explanation text */}
          <div className="space-y-2 text-lg md:text-lg text-black">
            <p>
              We began with a simple vision: to make personal finance accessible
              to everyone.
            </p>
            <p>
              In a world where financial tools were either too complex or too
              simplistic,
            </p>
            <p>
              we saw an opportunity to create something better. Our journey
              started in 2020
            </p>
            <p>
              with a small team of financial experts and technologists who
              believed that
            </p>
            <p>
              everyone deserves tools that empower rather than confuse. Today,
              we serve
            </p>
            <p>
              millions of users worldwide, helping them achieve their financial
              goals.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Two-column Layout */}
      <section className="py-16 bg-white">
        <div className="w-full">
          <div className="flex flex-col lg:flex-row items-stretch">
            {/* Left Column - 45% width - Image at bottom-left, cut off */}
            <div className="lg:w-[45%] relative min-h-[500px] lg:min-h-[700px]">
              <div className="absolute inset-0 bg-purple-100"></div>
              <div className="absolute bottom-0 left-0 w-[110%] h-[90%] -ml-8">
                <img
                  src={DUMMY_SECTION2_IMAGE}
                  alt="Our Mission"
                  className="w-full h-full mt-9 -ml-20 object-contain object-left-bottom"
                />
              </div>
            </div>
            {/* Right Column - 55% width with centered content */}
            <div className="lg:w-[55%] flex py-16 lg:py-20">
              <div className="w-full ">
                {/* Pill Header with dots - CENTERED */}
                <div className="flex justify-center mb-6">
                  <span className="text-sm font-semibold text-black bg-white border border-gray-200 px-6 py-2 rounded-full">
                    • Our Mission •
                  </span>
                </div>

                {/* Main Header - CENTERED */}
                <h2 className="text-3xl md:text-2xl font-bold text-gray-900 mb-4 text-center">
                  Our Core values
                </h2>

                {/* Sub Text - CENTERED */}
                <p className="text-sm text-gray-600 mb-8 text-center">
                  The system that powets every move in myStash
                
                </p>

                {/* 2x2 Grid - LEFT-ALIGNED with margin-left, occupies most width */}
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 ml-4 md:ml-0">
                  {/* Grid Item 1 - LEFT-ALIGNED */}
                  <div className="text-left ml-15">
                    <div className="flex flex-col items-start">
                      <div className="mb-2">
                        <img
                          src={DUMMY_ICON_1}
                          alt="Innovation Icon"
                          className="w-10 h-10"
                        />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-gray-900 mb-1">
                          Innovation
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Constantly developing new
                        </p>
                        <p className="text-gray-600 text-sm">
                          features to meet evolving
                        </p>
                        <p className="text-gray-600 text-sm">financial needs</p>
                      </div>
                    </div>
                  </div>

                  {/* Grid Item 2 - LEFT-ALIGNED */}
                  <div className="text-left">
                    <div className="flex flex-col items-start">
                      <div className="mb-2">
                        <img
                          src={DUMMY_ICON_2}
                          alt="Security Icon"
                          className="w-10 h-10"
                        />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-gray-900 mb-1">
                          Security
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Bank-level encryption and
                        </p>
                        <p className="text-gray-600 text-sm">
                          privacy protection for
                        </p>
                        <p className="text-gray-600 text-sm">all your data</p>
                      </div>
                    </div>
                  </div>

                  {/* Grid Item 3 - LEFT-ALIGNED */}
                  <div className="text-left ml-15">
                    <div className="flex flex-col items-start">
                      <div className="mb-2">
                        <img
                          src={DUMMY_ICON_3}
                          alt="Accessibility Icon"
                          className="w-10 h-10"
                        />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-gray-900 mb-1">
                          Accessibility
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Tools designed for everyone
                        </p>
                        <p className="text-gray-600 text-sm">
                          regardless of financial
                        </p>
                        <p className="text-gray-600 text-sm">knowledge</p>
                      </div>
                    </div>
                  </div>

                  {/* Grid Item 4 - LEFT-ALIGNED */}
                  <div className="text-left">
                    <div className="flex flex-col items-start">
                      <div className="mb-2">
                        <img
                          src={DUMMY_ICON_4}
                          alt="Support Icon"
                          className="w-10 h-10"
                        />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-gray-900 mb-1">
                          Support
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Dedicated customer service
                        </p>
                        <p className="text-gray-600 text-sm">
                          and educational resources
                        </p>
                        <p className="text-gray-600 text-sm">
                          to help you succeed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Detailed Card Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header and Subtexts */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Design Philosophy
            </h2>
            <p className="text-lg text-gray-700 mb-2">
              Every element is thoughtfully crafted for optimal user experience
            </p>
            <p className="text-gray-500">
              Combining aesthetics with functionality for seamless interactions
            </p>
          </div>

          {/* Images Only - No containers */}
          <div className="relative">
            {/* First Image - Positioned more to the right */}
            <img
              src="/images/aboutcard1.svg"
              alt="Design Philosophy Main Visual"
              className="relative  mr-30 ml-auto max-w-2/3 md:max-w-3/4 "
            />

            {/* Second Image - Below and positioned more to the LEFT */}
            <img
              src="/images/aboutcard2.svg"
              alt="Design Details Visual"
              className="relative -mt-4 md:mt-15 left-8 md:left-40 w-3/5"
            />
          </div>
        </div>
      </section>

      {/* Section 4: Divided Sections with Purple Line */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row">
            {/* Left Section */}
            <div className="lg:w-1/2 lg:pr-12">
              <div className="flex flex-col ml-10 items-start">
                <div className="mb-4">
                  <img
                    src="/icons/section4-left-icon.svg"
                    alt="Left Section Icon"
                    className="w-12 h-12"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Vision for the Future
                </h3>
                <div className="space-y-2 text-gray-600 text-sm">
                  <p>
                    To revolutionize the finiancial lanscape by Empowering yound
                    adults
                  </p>
                  <p>
                    to effortlessly achieve financial propsperity and
                    independence through
                  </p>
                  <p>our innovative wealth management platform</p>
                </div>
              </div>
            </div>

            {/* Vertical Purple Line Divider */}
            <div className="hidden lg:block relative">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-purple-600"></div>
            </div>

            {/* Right Section */}
            <div className="lg:w-1/2 lg:pl-12 mt-12 lg:mt-0">
              <div className="flex flex-col  ml-12 items-start">
                <div className="mb-4">
                  <img
                    src="/icons/section4-right-icon.svg"
                    alt="Right Section Icon"
                    className="w-12 h-12"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Commitment to Users
                </h3>
                <div className="space-y-2 text-gray-600 text-sm">
                  <p>Providing continuous innovation with</p>
                  <p>user feedback at the core of every</p>
                  <p>feature development and improvement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Centered CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          {/* Header Text */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Join Our Growing Community
          </h2>

          {/* Two Lines of Subtext */}
          <div className="mb-8">
            <p className="text-lg text-gray-700 mb-2">
              Be part of the financial revolution that's helping people
            </p>
            <p className="text-lg text-gray-700">
              take control of their money and build better futures
            </p>
          </div>

          {/* Purple Button with White Text */}
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-200">
            Get Started Today
          </button>
        </div>
      </section>

      <ContactFormSection />
    </div>
  );
}
