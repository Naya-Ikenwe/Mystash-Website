// components/ContactFormSection.tsx
"use client";

import React from "react";

const ContactFormSection = () => {
  // Dummy icon paths
  const DUMMY_MESSAGE_ICON = "/icons/arrowdown.svg";
  const DUMMY_PHONE_ICON = "/icons/naija.svg";
  const DUMMY_SUBMIT_ICON = "/icons/Frame6.svg";
  // Decorative images (top-left and bottom-right) for Section 6
  const DUMMY_SECTION6_TOP_LEFT = "/images/Vector.svg";
  const DUMMY_SECTION6_BOTTOM_RIGHT = "/images/Vector2.svg";

  return (
    <section className="w-full bg-white  py-12 md:py-15 relative overflow-hidden">
      {/* Decorative images (behind content) */}
      <img
        src={DUMMY_SECTION6_TOP_LEFT}
        alt="decorative top left"
        className="hidden sm:block absolute -top-8 -left-2 w-80 h-auto opacity-70 pointer-events-none z-0"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = "https://placehold.co/160x160/EEE/7C3AED?text=+";
        }}
      />
      <img
        src={DUMMY_SECTION6_BOTTOM_RIGHT}
        alt="decorative bottom right"
        className="hidden sm:block absolute -bottom-8 -right-8 w-40 h-140 opacity-70 pointer-events-none z-0"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = "https://placehold.co/160x160/EEE/7C3AED?text=+";
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            {/* Pill Header */}
            <div className="inline-flex items-center justify-center mb-6">
              <span className="text-sm font-medium text-black border border-gray-200 px-5 py-2 rounded-full">
                • Get In Touch •
              </span>
            </div>
            {/* Two-line Header */}
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight ">
              Have an enquiry or want to learn more
            </h2>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight mb-6">
              about our services?
            </h2>
            {/* Description */}
            <p className="text-sm text-gray-600">
              Let's chat; kindly fill out the form and we will respond in
              <span className="font-bold"> less than 72 hours.</span>
            </p>
          </div>

          {/* Form - Increased width */}
          <div className="max-w-4xl mx-auto">
            <form className="space-y-6">
              {/* First Row: First Name & Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First Name */}
                <div>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full bg-purple-100 border border-purple-100 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full bg-purple-100 border border-purple-100 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  />
                </div>
              </div>

              {/* Second Row: Email & Phone Number */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email */}
                <div>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full bg-purple-100 border border-purple-100 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  />
                </div>

                {/* Phone Number */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <img
                      src={DUMMY_PHONE_ICON}
                      alt="Phone"
                      className="w-5 h-5 text-gray-400"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src =
                          "https://placehold.co/20x20/9CA3AF/FFFFFF?text=📱";
                      }}
                    />
                  </div>
                  <input
                    type="tel"
                    placeholder="+234"
                    className="w-full bg-purple-100 border border-purple-100 rounded-lg pl-10 pr-4 py-3 text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  />
                </div>
              </div>

              {/* Third Row: Message & Budget */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Message with icon (icon moved to the right end of the field) */}
                <div className="relative">
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <img
                      src={DUMMY_MESSAGE_ICON}
                      alt="Message"
                      className="w-5 h-5 text-gray-400"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src =
                          "https://placehold.co/20x20/9CA3AF/FFFFFF?text=💬";
                      }}
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="I am interested in your Product"
                    className="w-full bg-purple-100 border border-purple-100 rounded-lg pl-4 pr-10 py-3 text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  />
                </div>

                {/* Budget without icon */}
                <div>
                  <input
                    type="text"
                    placeholder="Write briefly about your enquiry here"
                    className="w-full bg-purple-100 border border-purple-100 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  />
                </div>
              </div>

              {/* Terms and Conditions Checkbox - Centered */}
              <div className="flex justify-center pt-4">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-purple-600 bg-purple-50 border-purple-300 rounded focus:ring-purple-500 focus:ring-2"
                  />
                  <span className="text-gray-600 font-semibold text-sm">
                    I agree to the{" "}
                    <a
                      href="#"
                      className="text-purple-600 hover:text-purple-700 underline"
                    >
                      Terms and Conditions
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      className="text-purple-600 hover:text-purple-700 underline"
                    >
                      Privacy Policy
                    </a>
                  </span>
                </label>
              </div>

              {/* Submit Button with Icon */}
              <div className="text-center pt-6">
                <button
                  type="submit"
                  className="inline-flex items-center pr-15 justify-center bg-purple-100 font-semibold text-purple-500 px-8 py-3 rounded-full hover:bg-purple-400 hover:text-white transition-colors font-medium text-base"
                >
                  <img
                    src={DUMMY_SUBMIT_ICON}
                    alt="Send"
                    className="w-6 h-6 mr-15 object-contain"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src =
                        "https://placehold.co/20x20/FFFFFF/7C3AED?text=➡";
                    }}
                  />
                 <p className="mr-10">Submit enquiry</p> 
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;