"use client";

// app/investments/page.tsx
import FeaturesSection from "../../components/FeaturesSection";
import ContactFormSection from "../../components/ContactFormSection";
import dynamic from "next/dynamic";
import Link from "next/link";

const LoanCalculatorSection = dynamic(
  () => import("../../components/LoanCalculatorSection"),
  { ssr: false }
);

const INVESTMENT_START_URL = "https://investment.mystashapp.com";

export default function InvestmentsPage() {
  const investmentFeatures = [
    {
      iconPath: "/icons/padlock.svg",
      title: "Secure Funds",
      description:
        "Your fund is protected with advanced encryption and trusted systems- giving you total peace of mind",
    },
    {
      iconPath: "/icons/rocket.svg",
      title: "Smart Investing",
      description:
        "Invest Smartly with minimum of ₦500,000. It's simple, accessible, rewarding and designed to grow your wealth effortlessly.",
    },
    {
      iconPath: "/icons/planet.svg",
      title: "Quick, Seasmless Payouts",
      description:
        "We are committed to keeping your finances simple and swift-from instant payouts to smart porfolio tracking and timely returns",
    },
  ];

  return (
    <div className="min-h-screen ">
      {/* Section 1 - Hero Section */}
      <section
        className="h-[60vh] md:h-[75vh] lg:h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/investmentbackground.svg')",
        }}
      >
        <div className="text-center max-w-4xl mx-auto px-4 lg:px-8 -mt-10 md:-mt-20 lg:-mt-40 pr-4 lg:pr-20">
          <div className="inline-flex items-center justify-center mb-3 lg:mb-4">
            <span className="text-xs sm:text-sm lg:text-sm font-medium text-purple-500 bg-purple-100 border border-gray-200 px-3 sm:px-4 lg:px-6 py-1 sm:py-1.5 lg:py-2 mt-1 md:mt-2 lg:mt-10 rounded-full">
              • Investment •
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-black mb-3 lg:mb-5 leading-tight lg:leading-none">
            Grow your Wealth with
            <br />
            ease and purpose
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black mb-4 lg:mb-8 leading-relaxed lg:leading-[1.5">
            {/* Mobile (< 768px): Single line */}
            <span className="block md:hidden">
              Effortlessly grow and diversify your portfolio, no idle funds, just progress with smarter and automated investing
            </span>
            
            {/* Tablet (768px only): 3 lines */}
            <span className="hidden md:block lg:hidden">
              Effortlessly grow and diversify your portfolio,
              <br />
              no idle funds, just progress with smarter
              <br />
              and automated investing
            </span>
            
            {/* Desktop (> 1024px): Original 2 lines */}
            <span className="hidden lg:block">
              Effortlessly grow and diversify your portfolio, no idle funds, just
              <br />
              progress with smarter and automated investing
            </span>
          </p>
          <Link
            href={INVESTMENT_START_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-500 hover:bg-purple-900 text-white font-medium py-2 px-6 lg:px-0 lg:py-2 rounded-full inline-flex w-fit items-center justify-center mx-auto transition-colors duration-200 text-sm lg:text-base"
          >
            <img
              src="/icons/Frame6.svg"
              alt="arrow"
              className="w-6 h-6 lg:w-8 lg:h-8 mr-3 lg:mr-20 ml-2 lg:ml-2"
            />
            <p className="mr-3 lg:mr-24">Start Investing</p>
          </Link>
        </div>
      </section>

      {/* Section 2 - Features Section */}
      <div className="bg-white pb-3 pt-7">
        <FeaturesSection
          title="Here's Why Investing With us Just Feels Right"
          description="We've made it easier for anyone to get started."
          features={investmentFeatures}
        />
      </div>

      {/* Section 3 - Investment Guidance */}
      <section className=" bg-purple-100  ">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Div - Image */}
            <div className="lg:w-1/2">
              <img
                src="/images/leftinv.svg"
                alt="Investment Growth"
                className="w-full h-auto "
              />
            </div>

            {/* Right Div - Content */}
            <div className="lg:w-1/2 flex flex-col justify-center ml-4 items-start">
              {/* Pill Header with dot inside */}
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-purple-600 tracking-wide bg-purple-200 border border-purple-200 rounded-full px-4 py-2">
                 
                  • Why you should invest with us
                </span>
              </div>

              {/* Three-line Header */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
                Get up to 20% ROI in just 12
                <br />
                months, with flexible interest
                <br />
                payments on your own terms
              </h2>

              {/* Button with same icon as Section 1 */}
              <Link
                href={INVESTMENT_START_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-500 hover:bg-purple-900 text-white font-medium py-2 rounded-4xl inline-flex w-fit items-center justify-center transition-colors duration-200"
              >
                <img
                  src="/icons/Frame6.svg"
                  alt="arrow"
                  className="w-8 h-8 mr-4 ml-2"
                />
               <p className="mr-4">Start Investing</p> 
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Investment Calculator */}
      <LoanCalculatorSection
        mode="investment"
        // Header Section - Investment themed
        pillHeader="Investment Calculator"
        titleLine1="ROI Calculator"
        titleLine2=""
        description="Sit back and watch the numbers add up-Partner Funds does the magic. because smart wealthgrowth should be effortless."
        buttonText="Start Investing"
        buttonHref={INVESTMENT_START_URL}
        buttonIcon="/icons/Frame6.svg"
        // Calculator Section - Investment themed
        amountQuestion="Investment amount"
        amountPlaceholder="Minimum 500,000.00 naira"
        tenureQuestion="Investment duration?"
        tenurePlaceholder="Select duration"
        calculateButtonText="Calculate ROI"
        calculateButtonIcon="/icons/Frame6.svg"
        resultBoxTitle="Interest"
        // Optional callbacks
        onCalculate={(amount, tenure, result) => {
          console.log("Calculating investment:", { amount, tenure, result });
        }}
        onGetStarted={() => {
          console.log("Navigating to investment portal");
        }}
      />

      {/* Section 5 - Contact Form */}
      <ContactFormSection />
    </div>
  );
}