// app/budget/page.tsx
"use client";

import Link from "next/link";
import React from "react";
import NavButtons from "../../components/NavButtons";
import FeaturesSection from "../../components/FeaturesSection";
import ContactFormSection from "../../components/ContactFormSection";

// Dummy Image Path for Budget Page
const DUMMY_BUDGET_HERO_IMAGE = "/images/budgethero.svg";

// --- Section 1: Hero Section ---
export default function BudgetPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Section 1: Hero Section */}
      <section className="relative w-full min-h-[100vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 order-2 md:order-1 text-center md:text-left z-10 ">
              {" "}
              {/* Added md:-ml-8 */}
              {/* Simple Pill Header */}
              <div className="inline-flex items-center justify-center mb-8 md:justify-start">
                <span className="text-sm font-semibold text-black bg-white border border-gray-200 px-6 py-2 rounded-full">
                  • Smart Budgeting •
                </span>
              </div>
              {/* Simple Header Text */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 mb-4">
                <span className="block">Take Control of</span>
                <span className="block font-semibold">Your Finances</span>
              </h1>
              <p className="mt-4 text-xl text-gray-600 max-w-lg mx-auto md:mx-0">
                Track expenses, set budgets, and achieve your financial goals
                with our intelligent budgeting tools.
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
              className="w-full h-full object-contain scale-95 mr-10"
            />
          </div>
        </div>
      </section>

      {/* We'll add Sections 2-6 here later */}

      {/* Section 2: Budget Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header and Subtext */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How Our Budget System Works
            </h2>
            <p className="text-lg text-gray-600">
              Follow these simple steps to take control of your finances
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
                {/* Left - Image (Pushed to the right using flex justify-end) */}
                <div className="w-1/2 flex justify-end">
                  {" "}
                  {/* Added flex justify-end */}
                  <div className="pr-16">
                    {" "}
                    {/* Use pr to create space from right edge */}
                    <img
                      src="/images/budgetcard.svg"
                      alt="Step 1"
                      className="w-80 h-auto rounded-lg -mt-8"
                    />
                  </div>
                </div>

                {/* Center - Number */}
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2">
                  <div className="w-10 h-10 bg-white border-2 border-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold">1</span>
                  </div>
                </div>

                {/* Right - Text */}
                <div className="w-1/2 pl-16">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-2">
                    Track Your Spending
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Connect your accounts and automatically
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    track all your transactions in one place
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    with real-time updates
                  </p>
                </div>
              </div>

              {/* Number 2 - Image Right, Text Left */}
              <div className="flex items-start">
                {/* Left - Text (Pushed to the right using flex justify-end) */}
                <div className="w-1/2 flex justify-end">
                  {" "}
                  {/* Added flex justify-end */}
                  <div className="pr-16 text-right">
                    {" "}
                    {/* Use pr and text-right */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-2">
                      Set Your Budget
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Create custom budget categories
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      and set spending limits that work
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      for your lifestyle and goals
                    </p>
                  </div>
                </div>

                {/* Center - Number */}
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2">
                  <div className="w-10 h-10 bg-white border-2 border-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold">2</span>
                  </div>
                </div>

                {/* Right - Image */}
                <div className="w-1/2 pl-8">
                  <img
                    src="/images/budgetimg2.svg"
                    alt="Step 2"
                    className="w-80 h-auto rounded-lg -mt-8"
                  />
                </div>
              </div>

              {/* Number 3 - Image Left, Text Right */}
              <div className="flex items-start">
                {/* Left - Image (Pushed to the right using flex justify-end) */}
                <div className="w-1/2 flex justify-end">
                  {" "}
                  {/* Added flex justify-end */}
                  <div className="pr-16">
                    <img
                      src="/images/budgetimg3.svg"
                      alt="Step 3"
                      className="w-80 h-auto rounded-lg"
                    />
                  </div>
                </div>

                {/* Center - Number */}
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2">
                  <div className="w-10 h-10 bg-white border-2 border-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold">3</span>
                  </div>
                </div>

                {/* Right - Text */}
                <div className="w-1/2 pl-16">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-2">
                    Monitor & Adjust
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Get real-time alerts when you're
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    approaching your budget limits
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    and easily adjust as needed
                  </p>
                </div>
              </div>

              {/* Number 4 - Image Right, Text Left */}
              <div className="flex items-start">
                {/* Left - Text (Pushed to the right using flex justify-end) */}
                <div className="w-1/2 flex justify-end">
                  {" "}
                  {/* Added flex justify-end */}
                  <div className="pr-16 text-right">
                    {" "}
                    {/* Use pr and text-right */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-2">
                      Analyze Patterns
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      View detailed reports and insights
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      into your spending habits to identify
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      areas for improvement and savings
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      opportunities
                    </p>
                  </div>
                </div>

                {/* Center - Number */}
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2">
                  <div className="w-10 h-10 bg-white border-2 border-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold">4</span>
                  </div>
                </div>

                {/* Right - Image */}
                <div className="w-1/2 pl-8">
                  <img
                    src="/images/budgetimg4.svg"
                    alt="Step 4"
                    className="w-80 h-auto rounded-lg"
                  />
                </div>
              </div>

              {/* Number 5 - Image Left, Text Right */}
              <div className="flex items-start">
                {/* Left - Image (Pushed to the right using flex justify-end) */}
                <div className="w-1/2 flex justify-end">
                  {" "}
                  {/* Added flex justify-end */}
                  <div className="pr-16">
                    <img
                      src="/images/budgetimg5.svg"
                      alt="Step 5"
                      className="w-80 h-auto rounded-lg"
                    />
                  </div>
                </div>

                {/* Center - Number */}
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2">
                  <div className="w-10 h-10 bg-white border-2 border-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold">5</span>
                  </div>
                </div>

                {/* Right - Text */}
                <div className="w-1/2 pl-16">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-2">
                    Achieve Goals
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Reach your financial targets faster
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    with guided savings and smart
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    recommendations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Budget Features */}
      <FeaturesSection
        title="Why Choose Our Budget Tools"
        description="Take control of your finances with intelligent budgeting features designed for real results."
        features={[
          {
            iconPath: "/icons/padlock.svg",
            title: "Automatic Tracking",
            description:
              "Connect your accounts and let our system automatically categorize and track all your expenses in real-time.",
          },
          {
            iconPath: "/icons/rocket.svg",
            title: "Smart Alerts",
            description:
              "Get notified when you're approaching budget limits or when unusual spending patterns are detected.",
          },
          {
            iconPath: "/icons/planet.svg",
            title: "Goal Planning",
            description:
              "Set financial goals and get personalized recommendations to help you achieve them faster.",
          },
        ]}
      />

      {/* Section 4: Budget Benefits */}
      <section className=" bg-purple-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Div - Image */}
            <div className="lg:w-1/2">
              <img
                src="/images/budgetlast.svg"
                alt="Budget Benefits"
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Right Div - Content */}
            <div className="lg:w-1/2 flex flex-col justify-center ml-4 items-start">
              {/* Three-line Header (no pill header) */}
              <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Transform Your
                <br />
                Financial Habits
                <br />
                Starting Today
              </h2>

              {/* Button with same icon as Section 1 */}
              <button className="bg-purple-800 hover:bg-purple-900 text-white font-semibold py-3 px-8 rounded-4xl flex items-center justify-center transition-colors duration-200">
                <img
                  src="/icons/Frame6.svg"
                  alt="arrow"
                  className="w-5 h-5 mr-2"
                />
                Start Budgeting Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Budget FAQ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 bg-white border-t border-gray-200">
        <div className="mb-16">
          {/* Mini Header - Left Aligned */}
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-left ml-5">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-0">
          {/* Question 1 */}
          <div className="border-b border-gray-100 py-6">
            <button className="flex items-center justify-between w-full text-left group hover:bg-purple-50 rounded-lg px-4 py-3 transition-all duration-200">
              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                  <span className="text-black font-bold text-lg">+</span>
                </div>
                <span className="text-lg font-medium text-gray-900 group-hover:text-purple-700 transition-colors">
                  How does automatic expense tracking work?
                </span>
              </div>
            </button>
          </div>

          {/* Question 2 */}
          <div className="border-b border-gray-100 py-6">
            <button className="flex items-center justify-between w-full text-left group hover:bg-purple-50 rounded-lg px-4 py-3 transition-all duration-200">
              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                  <span className="text-black font-bold text-lg">+</span>
                </div>
                <span className="text-lg font-medium text-gray-900 group-hover:text-purple-700 transition-colors">
                  Can I create multiple budgets for different categories?
                </span>
              </div>
            </button>
          </div>

          {/* Question 3 */}
          <div className="border-b border-gray-100 py-6">
            <button className="flex items-center justify-between w-full text-left group hover:bg-purple-50 rounded-lg px-4 py-3 transition-all duration-200">
              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                  <span className="text-black font-bold text-lg">+</span>
                </div>
                <span className="text-lg font-medium text-gray-900 group-hover:text-purple-700 transition-colors">
                  How secure is my financial data?
                </span>
              </div>
            </button>
          </div>

          {/* Question 4 */}
          <div className="border-b border-gray-100 py-6">
            <button className="flex items-center justify-between w-full text-left group hover:bg-purple-50 rounded-lg px-4 py-3 transition-all duration-200">
              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                  <span className="text-black font-bold text-lg">+</span>
                </div>
                <span className="text-lg font-medium text-gray-900 group-hover:text-purple-700 transition-colors">
                  Can I set savings goals alongside my budget?
                </span>
              </div>
            </button>
          </div>

          {/* Question 5 */}
          <div className="border-b border-gray-100 py-6">
            <button className="flex items-center justify-between w-full text-left group hover:bg-purple-50 rounded-lg px-4 py-3 transition-all duration-200">
              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                  <span className="text-black font-bold text-lg">+</span>
                </div>
                <span className="text-lg font-medium text-gray-900 group-hover:text-purple-700 transition-colors">
                  What happens if I exceed my budget limits?
                </span>
              </div>
            </button>
          </div>

          {/* Question 6 */}
          <div className="border-b border-gray-100 py-6">
            <button className="flex items-center justify-between w-full text-left group hover:bg-purple-50 rounded-lg px-4 py-3 transition-all duration-200">
              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                  <span className="text-black font-bold text-lg">+</span>
                </div>
                <span className="text-lg font-medium text-gray-900 group-hover:text-purple-700 transition-colors">
                  Can I export my budget reports?
                </span>
              </div>
            </button>
          </div>

          {/* Question 7 */}
          <div className="border-b border-gray-100 py-6">
            <button className="flex items-center justify-between w-full text-left group hover:bg-purple-50 rounded-lg px-4 py-3 transition-all duration-200">
              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 flex items-center justify-center shrink-0">
                  <span className="text-black font-bold text-lg">+</span>
                </div>
                <span className="text-lg font-medium text-gray-900 group-hover:text-purple-700 transition-colors">
                  Is there a mobile app for budget tracking?
                </span>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Section 6 - Contact Form */}
      <ContactFormSection />
    </div>
  );
}
