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
            {/* Vertical Line - Hidden on mobile/tablet, shown on desktop */}
            <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-gray-300"></div>

            <div className="space-y-20">
              {/* Number 1 - Mobile: Vertical, Desktop: Image Left, Text Right */}
              <div className="flex flex-col lg:flex-row items-start">
                {/* Mobile/Tablet Layout */}
                <div className="lg:hidden flex flex-col items-center text-center w-full mb-12">
                  <div className="w-10 h-10 bg-white border-2 border-purple-600 rounded-full flex items-center justify-center mb-4">
                    <span className="text-gray-800 font-bold">1</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-purple-500 mb-4 text-center">
                    Download the app
                  </h3>
                  <div className="text-gray-800 leading-relaxed mb-6 max-w-md mx-auto px-4 text-center">
                    <p className="mb-2">Get the myStash app on Google PlayStore for Android or</p>
                    <p>App store for iOS</p>
                  </div>
                  <img
                    src="/images/downloadimg1.svg"
                    alt="Step 1"
                    className="w-64 md:w-80 h-auto rounded-lg mx-auto"
                  />
                </div>
                
                {/* Desktop Layout */}
                <div className="hidden lg:flex items-start w-full">
                  <div className="w-1/2 flex justify-end">
                    <div className="pr-27 -mt-28 text-left">
                      <img
                        src="/images/downloadimg1.svg"
                        alt="Step 1"
                        className="w-100 h-auto rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="absolute left-1/2 -translate-x-1/2 -mt-2">
                    <div className="w-10 h-10 bg-white border-2 border-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-gray-800 font-bold">1</span>
                    </div>
                  </div>

                  <div className="w-1/2 pl-25">
                    <h3 className="text-2xl font-semibold text-purple-500 mb-4 -mt-2">
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
              </div>

              {/* Number 2 - Mobile: Vertical, Desktop: Text Left, Image Right */}
              <div className="flex flex-col lg:flex-row items-start">
                {/* Mobile/Tablet Layout */}
                <div className="lg:hidden flex flex-col items-center text-center w-full mb-12">
                  <div className="w-10 h-10 bg-white border-2 border-purple-600 rounded-full flex items-center justify-center mb-4">
                    <span className="text-gray-800 font-bold">2</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-purple-500 mb-4 text-center">
                    Create an account
                  </h3>
                  <div className="text-gray-800 leading-relaxed mb-6 max-w-md mx-auto px-4 text-center">
                    <p className="mb-2">Create Pockets for your spending and assign a</p>
                    <p className="mb-2">percentage to them. This is the percentage of the total</p>
                    <p>money entering a particular myStash virtual Account</p>
                  </div>
                  <img
                    src="/images/downloadimg2.svg"
                    alt="Step 2"
                    className="w-64 md:w-80 h-auto rounded-lg mx-auto"
                  />
                </div>
                
                {/* Desktop Layout */}
                <div className="hidden lg:flex items-start w-full">
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
                       money entering a particular myStash virtual Account
                      </p>
                    </div>
                  </div>

                  <div className="absolute left-1/2 -translate-x-1/2 mt-2">
                    <div className="w-10 h-10 bg-white border-2 border-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-gray-800 font-bold">2</span>
                    </div>
                  </div>

                  <div className="w-1/2 pl-25 ">
                    <img
                      src="/images/downloadimg2.svg"
                      alt="Step 2"
                      className="w-80 h-auto rounded-lg -mt-12 "
                    />
                  </div>
                </div>
              </div>

              {/* Number 3 - Mobile: Vertical, Desktop: Text Left, Image Right */}
              <div className="flex flex-col lg:flex-row items-start">
                {/* Mobile/Tablet Layout */}
                <div className="lg:hidden flex flex-col items-center text-center w-full">
                  <div className="w-10 h-10 bg-white border-2 border-purple-600 rounded-full flex items-center justify-center mb-4">
                    <span className="text-gray-800 font-bold">3</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-purple-500 mb-4 text-center">
                    Start Stashing
                  </h3>
                  <div className="text-gray-800 leading-relaxed mb-6 max-w-md mx-auto px-4 text-center">
                    <p className="mb-2">You are good to go !! Carry on your bank</p>
                    <p>transactions and start stashing.</p>
                  </div>
                  <img
                    src="/images/downloadimg3.svg"
                    alt="Step 3"
                    className="w-64 md:w-80 h-auto rounded-lg mx-auto"
                  />
                </div>
                
                {/* Desktop Layout */}
                <div className="hidden lg:flex items-start w-full">
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
                      className="w-80 h-auto rounded-lg -mt-4"
                    />
                  </div>
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