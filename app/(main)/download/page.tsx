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
            <h2 className="text-3xl font-bold text-gray-900 mb-2 mt-5">
              Get started
            </h2>
            <h2 className="text-3xl font-bold text-gray-900 ">
              with myStash app
            </h2>
            <p className="text-sm text-black ">
              Enjoy an easier, and smarter experience
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-gray-300"></div>

            <div className="space-y-20">
              {/* Number 1 - Image Left, Text Right */}
              <div className="flex items-start">
                {/* Left - Image: KEEP flex justify-end to push content right */}
                <div className="w-1/2 flex justify-end">
                  <div className="pr-22 -mt-28 text-left">
                    <img
                      src="/images/downloadimg1.svg"
                      alt="Step 1"
                      className="w-100 h-auto rounded-lg"
                    />
                  </div>
                </div>

                <div className="absolute left-1/2 -translate-x-1/2 mt-2">
                  <div className="w-10 h-10 bg-white border-2 border-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-gray-800 font-bold">1</span>
                  </div>
                </div>

                <div className="w-1/2 pl-25">
                  <h3 className="text-2xl font-semibold text-purple-500 mb-4 mt-2">
                    Download the app
                  </h3>
                  <p className="text-gray-800 leading-relaxed">
                    Get the myStash app on Google PlayStore for Android or
                  </p>
                  <p className="text-gray-800 leading-relaxed">
                    App store for iOS
                  </p>
                  
                </div>
              </div>

              {/* Number 2 - Text Left, Image Right */}
              <div className="flex items-start">
                {/* Left - Text: KEEP flex justify-end to push content right */}
                <div className="w-1/2 flex justify-end">
                  <div className="pr-18 text-left">
                    <h3 className="text-2xl font-semibold text-purple-500 mb-4 mt-2">
                      Create an account
                    </h3>
                    <p className="text-gray-800 leading-relaxed">
                      Create Pockets for your spending and assign a
                    </p>
                    <p className="text-gray-800 leading-relaxed">
                     percentage to them. This is the percentage of the total
                    </p>
                    <p className="text-gray-800 leading-relaxed">
                     money entering a particular myStasj virtual Account
                    </p>
                  </div>
                </div>

                <div className="absolute left-1/2 -translate-x-1/2 mt-2">
                  <div className="w-10 h-10 bg-white border-2 border-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-gray-800 font-bold">2</span>
                  </div>
                </div>

                <div className="w-1/2 pl-25">
                  <img
                    src="/images/downloadimg2.svg"
                    alt="Step 2"
                    className="w-80 h-auto rounded-lg "
                  />
                </div>
              </div>

              {/* Number 3 - Text Left, Image Right */}
              <div className="flex items-start">
                {/* Left - Text: KEEP flex justify-end to push content right */}
                <div className="w-1/2 flex justify-end">
                  <div className="pr-43 text-left">
                    <h3 className="text-2xl font-semibold text-purple-500 mb-4 mt-2">
                      Start Stashing
                    </h3>
                    <p className="text-gray-800 leading-relaxed">
                      You are good to go !! Carry on your bank
                    </p>
                    <p className="text-gray-800 leading-relaxed">
                      transactions and start stashing.
                    </p>
                    
                  </div>
                </div>

                <div className="absolute left-1/2 -translate-x-1/2 mt-2">
                  <div className="w-10 h-10 bg-white border-2 border-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-gray-800 font-bold">3</span>
                  </div>
                </div>

                <div className="w-1/2 pl-25">
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