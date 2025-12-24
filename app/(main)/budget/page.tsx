// app/budget/page.tsx
"use client";

import Link from "next/link";
import React, { useState } from "react";
import NavButtons from "../../components/NavButtons";
import FeaturesSection from "../../components/FeaturesSection";
import ContactFormSection from "../../components/ContactFormSection";

// Dummy Image Path for Budget Page
const DUMMY_BUDGET_HERO_IMAGE = "/images/budgethero.svg";

// --- Section 1: Hero Section ---
export default function BudgetPage() {
  // FAQ states
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Section 1: Hero Section */}
      <section className="relative w-full min-h-screen">
        <div className="max-w-7xl ml-25 px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 order-2 md:order-1 text-center md:text-left z-10  ">
              {/* Simple Pill Header */}
              <div className="inline-flex items-center justify-center mb-3 md:justify-start">
                <span className="text-sm font-medium text-purple-500 bg-purple-100 border border-gray-200 px-6 py-1 mt-10 rounded-full">
                  • Budget •
                </span>
              </div>
              {/* Simple Header Text */}
              <h1 className="text-4xl sm:text-4xl lg:text-[56px] font-semibold text-gray-900 mb-4 mt-5 tracking-wide">
                <span className="block mb-2">Smarter spending</span>
                <span className="block font-semibold">starts with you</span>
              </h1>
              <p className="mt-4 text-[22px] text-gray-600 max-w-xl mx-auto md:mx-0">
                Transform the way you spend with intelligent <br />
                features that simplify budgeting, enhance <br />
                clarity, and give total control. <br />
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
              src={DUMMY_BUDGET_HERO_IMAGE}
              alt="Budget Hero Visual"
              className="w-full h-full object-contain scale-96 mr-30"
            />
          </div>
        </div>
      </section>
      {/* Section 2: Budget Process */}
      <section className="py-8 mb-5 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header and Subtext */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-1">
              Using Budget is effortless
            </h2>
            <p className="text-base text-gray-600">
              Enjoy an easier, smarter Budgeting experience
            </p>
          </div>
          {/* Timeline Container */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300"></div>
            {/* Timeline Items */}
            <div className="space-y-20">
              {/* Number 1 - Image Left, Text Right */}
              <div className="flex items-start">
                <div className="w-1/2 flex justify-end">
                  <div className="pr-8">
                    {/* CHANGED: Container with padding to control distance */}
                    <img
                      src="/images/budgetcard.svg"
                      alt="Step 1"
                      className="w-72 h-auto rounded-lg -mt-12 mr-7"
                    />
                  </div>
                </div>
                {/* Center - Number */}
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2">
                  <div className="w-10 h-10 bg-white border-2 border-purple-600 rounded-full -mt-2 flex items-center justify-center">
                    <span className="text-gray-600 font-bold">1</span>
                  </div>
                </div>
                {/* Right - Text: More space from center line */}
                <div className="w-1/2 pl-12 ml-17">
                  <h3 className="text-[22px] font-semibold text-purple-500 mb-4 mt-2 ">
                    Create Your Virtual Account
                  </h3>
                  <p className="text-gray-800 leading-relaxed text-sm">
                    Create a myStash virtual account to receive your funds into.
                  </p>
                  <p className="text-gray-800 leading-relaxed text-sm">
                    Your virtual account is personalized for you and your
                    business
                  </p>
                </div>
              </div>
              {/* Number 2 - Image Right, Text Left */}
              <div className="flex items-start">
                {/* Left - Text: Move the entire container RIGHT */}
                <div className="w-1/2 flex justify-end">
                  <div className="pr-12 text-left">
                    {/* CHANGED: Container with padding, text-left for alignment */}
                    <h3 className="text-[22px] font-semibold text-purple-500 mb-4 mt-2">
                      Create Pockets
                    </h3>
                    <p className="text-gray-800 leading-relaxed text-sm">
                      Create pockets for your spendings and assign a
                    </p>
                    <p className="text-gray-800 leading-relaxed text-sm">
                      percentage to them. This is the percentage of the total
                    </p>
                    <p className="text-gray-800 leading-relaxed text-sm">
                      money entering a particular myStash Virtual Account
                    </p>
                  </div>
                </div>
                {/* Center - Number */}
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2">
                  <div className="w-10 h-10 bg-white border-2 border-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 font-bold">2</span>
                  </div>
                </div>
                {/* Right - Image: Keep spacing */}
                <div className="w-1/2 pl-4">
                  <img
                    src="/images/budgetimg2.svg"
                    alt="Step 2"
                    className="w-72 h-auto rounded-lg -mt-8 ml-10 "
                  />
                </div>
              </div>
              {/* Number 3 - Image Left, Text Right */}
              <div className="flex items-start">
                <div className="w-1/2 flex justify-end">
                  <div className="pr-12">
                    <img
                      src="/images/budgetimg3.svg"
                      alt="Step 3"
                      className="w-72 h-auto rounded-lg mr-12"
                    />
                  </div>
                </div>
                {/* Center - Number */}
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2">
                  <div className="w-10 h-10 bg-white border-2 border-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 font-bold">3</span>
                  </div>
                </div>
                {/* Right - Text */}
                <div className="w-1/2 pl-12 ml-17">
                  <h3 className="text-[22px] font-semibold text-purple-500 mb-4 mt-2">
                    Add Settlement Account
                  </h3>
                  <p className="text-gray-800 leading-relaxed text-sm">
                    Funds that are not budgeted are conveniently settled <br />
                  </p>
                  <p className="text-gray-800 leading-relaxed text-sm">
                    into your settlement account or myStash wallet <br />
                  </p>
                  <p className="text-gray-800 leading-relaxed text-sm">
                    ready for future use.
                  </p>
                </div>
              </div>
              {/* Number 4 - Image Right, Text Left */}
              <div className="flex items-start">
                <div className="w-1/2 flex justify-end">
                  <div className="pr-7 text-left">
                    {/* CHANGED: Container with padding, text-left for alignment */}
                    <h3 className="text-[22px] font-semibold text-purple-500 mb-4 mt-2 ">
                      Deposit Fund
                    </h3>
                    <p className="text-gray-800 leading-relaxed text-sm">
                      Allocate your budget to Pockets. Once you've set your{" "}
                      <br />
                    </p>
                    <p className="text-gray-800 leading-relaxed text-sm">
                      budget percentages, move funds into your myStash <br />
                    </p>
                    <p className="text-gray-800 leading-relaxed text-sm">
                      Virtual accounts, to have them divided into the <br />
                    </p>
                    <p className="text-gray-800 leading-relaxed text-sm">
                      appropriate pockets
                    </p>
                  </div>
                </div>
                {/* Center - Number */}
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2">
                  <div className="w-10 h-10 bg-white border-2 border-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 font-bold">4</span>
                  </div>
                </div>
                {/* Right - Image: Keep spacing */}
                <div className="w-1/2 pl-4 ml-14">
                  <img
                    src="/images/budgetimg4.svg"
                    alt="Step 4"
                    className="w-72 h-auto rounded-lg"
                  />
                </div>
              </div>
              {/* Number 5 - Image Left, Text Right */}
              <div className="flex items-start">
                {/* Left - Image: Move the entire container RIGHT */}
                <div className="w-1/2 flex justify-end">
                  <div className="pr-12">
                    <img
                      src="/images/budgetimg5.svg"
                      alt="Step 5"
                      className="w-72 h-auto rounded-lg mr-18"
                    />
                  </div>
                </div>
                {/* Center - Number */}
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2">
                  <div className="w-10 h-10 bg-white border-2 border-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 font-bold">5</span>
                  </div>
                </div>

                {/* Right - Text: More space from center line */}
                <div className="w-1/2 pl-20">
                  <h3 className="text-[22px] font-semibold text-purple-500 mb-4 mt-2">
                    Spend from Pocket
                  </h3>
                  <p className="text-gray-800 leading-relaxed text-sm">
                    Spend from your designated pocket. For example, <br />
                  </p>
                  <p className="text-gray-800 leading-relaxed text-sm">
                    pay for your transport from your "Transportation" <br />
                  </p>
                  <p className="text-gray-800 leading-relaxed text-sm">
                    pocket.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section 3: Budget Features */}
      <FeaturesSection
        title="Budget Feature you will love"
        description="Build better budgets daily and spend smarter everytime, with insights that keep you in
        control of your money."
        features={[
          {
            iconPath: "/icons/planet.svg",
            title: "Active Budgeting",
            description:
              "Automatically manage your monthly budgets without worrying or overspending. Tailor every budget plan to your unique needs.",
          },
          {
            iconPath: "/icons/house.svg",
            title: "Virtual Bank Accounts",
            description:
              "With myStash, you can manage your virtual accounts, make payments, and track your finances seamlessly from anywhere- all with secure, real time access too your money.",
          },
          {
            iconPath: "/icons/padlock.svg",
            title: "Secure & Confidential",
            description:
              "Your account information is protected with advanced encryption and trusted systems- giving you total peace of mind.",
          },
        ]}
      />
      {/* Section 4: Budget Benefits */}
      <section className=" bg-purple-100 ">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Div - Image */}
            <div className="lg:w-1/2">
              <img
                src="/images/budgetlast.svg"
                alt="Budget Benefits"
                className="w-full h-auto "
              />
            </div>
            {/* Right Div - Content */}
            <div className="lg:w-1/2 flex flex-col justify-center ml-4 items-start">
              {/* Three-line Header (no pill header) */}
              <span className=" mb-5 text-sm font-[580] text-purple-500 bg-purple-200 border border-gray-200 px-6 py-2 mt-10 rounded-full">
                •  Budgeting made crystal clear
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
                Create better budgets everyday,
                <br />
                so you can plan smarter and
                <br />
                spend wisely
              </h2>
              {/* Button with same icon as Section 1 */}
              <Link
                href="/download"
                className="bg-purple-500 hover:bg-purple-900 text-white font-semibold py-2 px-2 rounded-4xl flex items-center justify-center transition-colors duration-200"
              >
                <img
                  src="/icons/Frame5.svg"
                  alt="download"
                  className="w-7 h-7 mr-2"
                />
                Download App
              </Link>
            </div>
          </div>
        </div>
      </section>

     {/* Section 5: Budget FAQ */}
<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-12 mt-15 bg-white ">
  <div className="mb-8">
    {/* Mini Header - Left Aligned */}
    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-left ml-5">
      Frequently Asked Questions
    </h2>
  </div>

  {/* FAQ Items */}
  <div className="space-y-0">
    {/* Question 1 */}
    <div className="border-b border-gray-200 py-6">
      <button 
        className="flex items-center justify-between w-full text-left group rounded-lg px-4 py-3 transition-all duration-200"
        onClick={() => setIsOpen1(!isOpen1)}
      >
        <div className="flex items-center space-x-4">
          <div className="w-6 h-6 flex items-center justify-center shrink-0">
            <span className="text-black font-bold text-lg  transition-colors">
              {isOpen1 ? '−' : '+'}
            </span>
          </div>
          <span className="text-xl font-medium text-gray-900   rounded-lg px-3 py-2 -mx-2 transition-all duration-200">
            What is Pocket?
          </span>
        </div>
      </button>
      {/* Answer with slide animation */}
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen1 ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-4 pb-6 pt-2 ml-10">
          <p className="text-lg text-gray-700">
            A Pocket is a dedicated section within your myStash account where you can allocate specific amounts of money for different spending categories like transportation, groceries, entertainment, etc.
          </p>
        </div>
      </div>
    </div>
    
    {/* Question 2 */}
    <div className="border-b border-gray-200 py-6">
      <button 
        className="flex items-center justify-between w-full text-left group rounded-lg px-4 py-3 transition-all duration-200"
        onClick={() => setIsOpen2(!isOpen2)}
      >
        <div className="flex items-center space-x-4">
          <div className="w-6 h-6 flex items-center justify-center shrink-0">
            <span className="text-black font-bold text-lg  transition-colors">
              {isOpen2 ? '−' : '+'}
            </span>
          </div>
          <span className="text-xl font-medium text-gray-900  transition-colors   ">
            What is a Settlement Account?
          </span>
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen2 ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-4 pb-6 pt-2 ml-10">
          <p className="text-lg text-gray-700">
            A Settlement Account is where unallocated funds from your Virtual Bank Account (VBA) are automatically transferred. It's like a default holding account for money that hasn't been assigned to specific pockets.
          </p>
        </div>
      </div>
    </div>
    
    {/* Question 3 */}
    <div className="border-b border-gray-200 py-6">
      <button 
        className="flex items-center justify-between w-full text-left group  rounded-lg px-4 py-3 transition-all duration-200"
        onClick={() => setIsOpen3(!isOpen3)}
      >
        <div className="flex items-center space-x-4">
          <div className="w-6 h-6 flex items-center justify-center shrink-0">
            <span className="text-black font-bold text-lg  transition-colors">
              {isOpen3 ? '−' : '+'}
            </span>
          </div>
          <span className="text-xl font-medium text-gray-900  transition-colors ">
            Can a Naira account be added as settlement for a Dollar VBA?
          </span>
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen3 ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-4 pb-6 pt-2 ml-10">
          <p className="text-lg text-gray-700">
            No, a Naira account cannot be used as a settlement account for a Dollar Virtual Bank Account (VBA). Settlement accounts must be in the same currency as the VBA to ensure proper currency conversion and transaction processing.
          </p>
        </div>
      </div>
    </div>
    
    {/* Question 4 */}
    <div className="border-b border-gray-200 py-6">
      <button 
        className="flex items-center justify-between w-full text-left group  rounded-lg px-4 py-3 transition-all duration-200"
        onClick={() => setIsOpen4(!isOpen4)}
      >
        <div className="flex items-center space-x-4">
          <div className="w-6 h-6 flex items-center justify-center shrink-0">
            <span className="text-black font-bold text-lg  transition-colors">
              {isOpen4 ? '−' : '+'}
            </span>
          </div>
          <span className="text-xl font-medium text-gray-900   transition-colors">
            Can Naira be added into a Dollar Pocket?
          </span>
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen4 ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-4 pb-6 pt-2 ml-10">
          <p className="text-lg text-gray-700">
            No, Naira cannot be directly added to a Dollar Pocket. Each pocket is currency-specific. You would need to convert Naira to Dollars first, then add the Dollars to your Dollar Pocket.
          </p>
        </div>
      </div>
    </div>
    
    {/* Question 5 */}
    <div className="border-b border-gray-200 py-6">
      <button 
        className="flex items-center justify-between w-full text-left group  rounded-lg px-4 py-3 transition-all duration-200"
        onClick={() => setIsOpen5(!isOpen5)}
      >
        <div className="flex items-center space-x-4">
          <div className="w-6 h-6 flex items-center justify-center shrink-0">
            <span className="text-black font-bold text-lg  transition-colors">
              {isOpen5 ? '−' : '+'}
            </span>
          </div>
          <span className="text-xl font-medium text-gray-900  transition-colors ">
            Can one Pocket be connected to two VBAs?
          </span>
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen5 ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-4 pb-6 pt-2 ml-10">
          <p className="text-lg text-gray-700">
            No, each Pocket can only be connected to one Virtual Bank Account (VBA). This ensures clear fund tracking and prevents confusion in budget allocation across multiple accounts.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* Section 6 - Contact Form */}
      <ContactFormSection />
    </div>
  );
}