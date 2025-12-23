// app/(main)/about/page.tsx
"use client";

import ContactFormSection from "@/app/components/ContactFormSection";
import React from "react";

// Dummy paths for images and icons
const DUMMY_BACKGROUND_IMAGE = "/images/abouthero.svg";
const DUMMY_SECTION2_IMAGE = "/images/mystashcoin.svg";
const DUMMY_ICON_1 = "/icons/person.svg";
const DUMMY_ICON_2 = "/icons/hands.svg";
const DUMMY_ICON_3 = "/icons/medal.svg";
const DUMMY_ICON_4 = "/icons/connection.svg";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
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

        <div className="relative z-10 mx-auto px-4 text-center mb-20 w-full max-w-6xl">
          {/* Purple Centered Header */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-purple-600 mb-7 mt-5">
            Our Story
          </h1>

          {/* 6-line explanation text */}
          <div className="mt-4 text-black">
            {/* Desktop version (hidden on mobile) */}
            <div className="hidden md:block space-y-4 text-lg md:text-xl text-center">
              <p className="whitespace-nowrap">
                In 2021, four postgraduate students began myStash with a vision to
                help young adults build their emergency
              </p>
              <p className="whitespace-nowrap">
                funds by making savings a painless and unconscious habit. Within a
                span of 5 months, 10 customers and 4
              </p>
              <p className="whitespace-nowrap">
                founders grew to over 13 staff members abd over 5,000 users who
                have saved over 12,000 times as they spent
              </p>
              <p className="whitespace-nowrap">
                or earned in that short term frame. Rooted in a culture of
                collaboration, communication and customer-
              </p>
              <p className="whitespace-nowrap">
                obsession, we strive to be the ultimate wealth management platform
                that helps young adults to monitor,
              </p>
              <p className="whitespace-nowrap">
                manage, and generate weakth in an autonomous and painless way.
              </p>
            </div>
            
            {/* Mobile version (shown only on mobile) */}
            <div className="md:hidden px-2 space-y-3 text-sm leading-relaxed">
              <p>
                In 2021, four postgraduate students began myStash with a vision to
                help young adults build their emergency funds by making savings a
                painless and unconscious habit.
              </p>
              <p>
                Within a span of 5 months, 10 customers and 4 founders grew to over
                13 staff members and over 5,000 users who have saved over 12,000
                times as they spent or earned in that short term frame.
              </p>
              <p>
                Rooted in a culture of collaboration, communication and
                customer-obsession, we strive to be the ultimate wealth management
                platform that helps young adults to monitor, manage, and generate
                wealth in an autonomous and painless way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Two-column Layout */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="w-full">
          <div className="flex flex-col lg:flex-row items-stretch">
            {/* Left Column - 45% width - Image at bottom-left, cut off */}
            <div className="lg:w-[45%] relative min-h-[300px] md:min-h-[500px] lg:min-h-[700px]">
              <div className="absolute inset-0 bg-purple-100"></div>
              <div className="absolute bottom-0 left-0 w-[110%] h-[90%] -ml-8 hidden lg:block">
                <img
                  src={DUMMY_SECTION2_IMAGE}
                  alt="Our Mission"
                  className="w-full h-full mt-9 -ml-20 object-contain object-bottom-left"
                />
              </div>
              {/* Mobile version of image */}
              <div className="lg:hidden absolute bottom-0 left-0 w-full h-[70%] flex items-center justify-center">
                <img
                  src={DUMMY_SECTION2_IMAGE}
                  alt="Our Mission"
                  className="w-4/5 h-auto object-contain"
                />
              </div>
            </div>
            {/* Right Column - 55% width with centered content */}
            <div className="lg:w-[55%] flex py-8 md:py-16 lg:py-20">
              <div className="w-full px-4 lg:px-0">
                {/* Pill Header with dots - CENTERED */}
                <div className="flex justify-center mb-6">
                  <span className="text-sm font-medium text-black bg-white border border-gray-200 px-6 py-2 rounded-full">
                    • About us •
                  </span>
                </div>

                {/* Main Header - CENTERED */}
                <h2 className="text-2xl md:text-3xl lg:text-2xl font-bold text-gray-900 mb-2 text-center">
                  Our Core values
                </h2>

                {/* Sub Text - CENTERED */}
                <p className="text-sm md:text-base text-gray-800 mb-8 text-center">
                  The system that powers every move in myStash
                </p>

                {/* 2x2 Grid - LEFT-ALIGNED with margin-left, occupies most width */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-5 px-4 lg:ml-4 md:ml-0">
                  {/* Grid Item 1 - LEFT-ALIGNED */}
                  <div className="text-left lg:ml-15">
                    <div className="flex flex-col items-start">
                      <div className="mb-2">
                        <img
                          src={DUMMY_ICON_1}
                          alt="Innovation Icon"
                          className="w-10 h-10"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-purple-500 mb-1">
                          Professionalism
                        </h3>
                        <div className="space-y-1">
                          <p className="text-gray-800 text-sm md:text-base">
                            Our conduct and operation reflects true
                          </p>
                          <p className="text-gray-800 text-sm md:text-base">
                           Professionalism, ensuring we get it right
                          </p>
                          <p className="text-gray-800 text-sm md:text-base">
                           from the start and consistently thereafter.
                          </p>
                        </div>
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
                      <div className="mb-4">
                        <h3 className="text-xl font-semibold text-purple-500 mb-1">
                         Trust
                        </h3>
                        <div className="space-y-1">
                          <p className="text-gray-800 text-sm md:text-base">
                            myStash users trust us to deliver
                          </p>
                          <p className="text-gray-800 text-sm md:text-base">
                            solution that grow with their needs and
                          </p>
                          <p className="text-gray-800 text-sm md:text-base">
                            we protect that trust everyday
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Grid Item 3 - LEFT-ALIGNED */}
                  <div className="text-left lg:ml-15">
                    <div className="flex flex-col items-start">
                      <div className="mb-2">
                        <img
                          src={DUMMY_ICON_3}
                          alt="Accessibility Icon"
                          className="w-10 h-10"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-purple-500 mb-1">
                          Customer-Obsession
                        </h3>
                        <div className="space-y-1">
                          <p className="text-gray-800 text-sm md:text-base">
                            The customer-satisfaction is our
                          </p>
                          <p className="text-gray-800 text-sm md:text-base">
                            obsession, driving innovation and
                          </p>
                          <p className="text-gray-800 text-sm md:text-base">
                            exceeding expectations.
                          </p>
                        </div>
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
                          className="w-11 h-11"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-purple-500 mb-1">
                          Communication
                        </h3>
                        <div className="space-y-1">
                          <p className="text-gray-800 text-sm md:text-base">
                            Honesty and transparency guide our every 
                          </p>
                          <p className="text-gray-800 text-sm md:text-base">
                            interaction. We listen, we learn, we build trust,
                          </p>
                          <p className="text-gray-800 text-sm md:text-base">
                            we grow together
                          </p>
                        </div>
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
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header and Subtexts */}
          <div className="text-center mb-12 -mt-5">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Team
            </h2>
            <p className="text-base text-black hidden md:block">
              We are here to empower the next generation to build and secure their wealth.
            </p>
            <p className="text-gray-400 hidden md:block">
              Grow you Stash with myStash
            </p>
            {/* Mobile version */}
            <div className="md:hidden">
              <p className="text-sm text-black">
                We are here to empower the next generation to build and secure their wealth.
              </p>
              <p className="text-gray-400 text-sm mt-1">
                Grow you Stash with myStash
              </p>
            </div>
          </div>

          {/* Images Only - No containers */}
          <div className="relative">
            {/* First Image - Positioned more to the right */}
            <img
              src="/images/aboutcard1.svg"
              alt="Design Philosophy Main Visual"
              className="relative mr-30 ml-auto max-w-2/3 md:max-w-3/4 hidden md:block"
            />
            {/* Mobile version */}
            <img
              src="/images/aboutcard1.svg"
              alt="Design Philosophy Main Visual"
              className="relative mx-auto w-full max-w-md block md:hidden"
            />

            {/* Second Image - Below and positioned more to the LEFT */}
            <img
              src="/images/aboutcard2.svg"
              alt="Design Details Visual"
              className="relative -mt-4 md:mt-15 left-8 md:left-40 w-3/5 hidden md:block"
            />
            {/* Mobile version */}
            <img
              src="/images/aboutcard2.svg"
              alt="Design Details Visual"
              className="relative mt-8 mx-auto w-full max-w-sm block md:hidden"
            />
          </div>
        </div>
      </section>

      {/* Section 4: Divided Sections with Purple Line */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row">
            {/* Left Section */}
            <div className="lg:w-1/2 lg:pr-12 px-4 lg:px-0">
              <div className="flex flex-col lg:ml-10 items-start">
                <div className="mb-4">
                  <img
                    src="/icons/eyes.svg"
                    alt="Left Section Icon"
                    className="w-12 md:w-15 h-12 md:h-15"
                  />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Our Vision 
                </h3>
                <div className="space-y-2 text-gray-800 text-sm md:text-base">
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
            
            {/* Horizontal Purple Line Divider for mobile */}
            <div className="lg:hidden w-full h-0.5 bg-purple-600 my-8 "></div>

            {/* Right Section */}
            <div className="lg:w-1/2 lg:pl-12 mt-12 lg:mt-0 px-4 lg:px-0 -mr-8">
              <div className="flex flex-col lg:ml-12 items-start">
                <div className="mb-4">
                  <img
                    src="/icons/flag.svg"
                    alt="Right Section Icon"
                    className="w-12 md:w-15 h-12 md:h-15"
                  />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Our Mission
                </h3>
                <div className="space-y-2 text-gray-800 text-sm md:text-base">
                  <p>To be the ultimate wealth management platform that helps young</p>
                  <p>adult to monitor, manage and generate wealth in an autonomous</p>
                  <p>and painless way</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Centered CTA Section */}
      <section className="py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center">
          {/* Header Text */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Join our team
          </h2>

          {/* Two Lines of Subtext */}
          <div className="mb-8 hidden md:block">
            <p className="text-base text-gray-700 mb-2">
              Join us as we build the ultimate wealth-management platform, empowering young adult to monitor,
            </p>
            <p className="text-base text-gray-700">
              manage and grow their wealth effortlessly
            </p>
          </div>
          
          {/* Mobile version */}
          <div className="mb-8 md:hidden">
            <p className="text-sm text-gray-700 px-2">
              Join us as we build the ultimate wealth-management platform, empowering young adult to monitor, manage and grow their wealth effortlessly
            </p>
          </div>

          {/* Purple Button with White Text */}
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 md:px-3 rounded-full transition-colors duration-200 text-sm md:text-base">
           Explore Job Openings
          </button>
        </div>
      </section>

      <ContactFormSection />
    </div>
  );
}