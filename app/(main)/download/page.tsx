// app/download/page.tsx
"use client";

import React from "react";
import FeaturesSection from "../../components/FeaturesSection";
import ContactFormSection from "../../components/ContactFormSection";

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How to Download Our App
            </h2>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              in very easy methods
            </h2>
            <p className="text-lg text-gray-600">
              Get started in just a few simple steps
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-gray-300"></div>

            <div className="space-y-20">
              {/* Number 1 - Image Left, Text Right */}
              <div className="flex items-start">
                {/* Left - Image: KEEP flex justify-end to push content right */}
                <div className="w-1/2 flex justify-end">
                  <div className="pr-5 -mt-16 text-left">
                    <img
                      src="/images/downloadimg1.svg"
                      alt="Step 1"
                      className="w-80 h-auto rounded-lg"
                    />
                  </div>
                </div>

                <div className="absolute left-1/2 -translate-x-1/2 mt-2">
                  <div className="w-10 h-10 bg-white border-2 border-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold">1</span>
                  </div>
                </div>

                <div className="w-1/2 pl-16">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-2">
                    Choose Your Platform
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Select your device's app store
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    - iOS users go to Apple App Store,
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Android users to Google Play Store
                  </p>
                </div>
              </div>

              {/* Number 2 - Text Left, Image Right */}
              <div className="flex items-start">
                {/* Left - Text: KEEP flex justify-end to push content right */}
                <div className="w-1/2 flex justify-end">
                  <div className="pr-18 text-left">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-2">
                      Search & Download
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Search for "myStash" in your
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      app store and tap the download
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      button to install
                    </p>
                  </div>
                </div>

                <div className="absolute left-1/2 -translate-x-1/2 mt-2">
                  <div className="w-10 h-10 bg-white border-2 border-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold">2</span>
                  </div>
                </div>

                <div className="w-1/2 pl-16">
                  <img
                    src="/images/downloadimg2.svg"
                    alt="Step 2"
                    className="w-80 h-auto rounded-lg"
                  />
                </div>
              </div>

              {/* Number 3 - Text Left, Image Right */}
              <div className="flex items-start">
                {/* Left - Text: KEEP flex justify-end to push content right */}
                <div className="w-1/2 flex justify-end">
                  <div className="pr-12 text-left">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-2">
                      Launch & Setup
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Open the app, create your account
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      and start your financial journey
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      in minutes
                    </p>
                  </div>
                </div>

                <div className="absolute left-1/2 -translate-x-1/2 mt-2">
                  <div className="w-10 h-10 bg-white border-2 border-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold">3</span>
                  </div>
                </div>

                <div className="w-1/2 pl-16">
                  <img
                    src="/images/downloadimg3.svg"
                    alt="Step 3"
                    className="w-80 h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactFormSection />
    </div>
  );
}