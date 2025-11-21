"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
// Update the import at the top of your main file
import { testimonials } from "./components/testimonials";
import FeaturesSection from "./components/FeaturesSection";
import ContactFormSection from "./components/ContactFormSection";
import NavButtons from "./components/NavButtons";

// Dummy Image Path Constants
const DUMMY_HERO_IMAGE = "/images/heroimage.svg";
const DUMMY_CARD_1_IMAGE = "/images/card1.svg";
const DUMMY_CARD_2_IMAGE = "/images/card2.svg";
const DUMMY_CARD_3_IMAGE = "/images/card3.svg";
const DUMMY_BUTTON_ICON = "/icons/Frame6.svg";
const DUMMY_SECTION_3_IMAGE_1 = "/images/female.svg";
const DUMMY_SECTION_3_IMAGE_2 = "/images/couple.svg";
const DUMMY_SECTION_4_ICON_1 = "/icons/padlock.svg";
const DUMMY_SECTION_4_ICON_2 = "/icons/rocket.svg";
const DUMMY_SECTION_4_ICON_3 = "/icons/planet.svg";

const TEXT_COLOR = "text-gray-700";
const PURPLE_COLOR = "text-purple-400";

// --- Dynamic Components (Section 1) ---

const HorizontalMarquee = () => {
  const TEXTS = [
    "• Our Products •",
    "• Payment",
    "• Savings",
    "• Budget",
    "• Loans",
    "• Partnership",
  ];
  const SCROLL_ITEMS = [...TEXTS, ...TEXTS];

  const marqueeAnimation = {
    initial: { x: 0 },
    scrollLeft: { x: "-100%" },
    scrollRight: { x: 0 },
  };

  return (
    <div
      className={`text-sm font-medium ${TEXT_COLOR} h-6 mb-4 relative w-44 md:w-56 mx-auto md:mx-0`}
    >
      <div className="overflow-hidden whitespace-nowrap w-full">
        <motion.div
          className="inline-flex"
          variants={marqueeAnimation}
          initial="scrollLeft"
          animate="scrollRight"
          transition={{
            x: {
              duration: 16,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse" as const,
            },
          }}
        >
          {SCROLL_ITEMS.map((text, i) => (
            <span key={i} className="shrink-0 mx-2">
              <span className="inline-block px-3 py-1 bg-gray-100 rounded-full whitespace-nowrap">
                {text}
              </span>
            </span>
          ))}
        </motion.div>
      </div>

      <div className="absolute inset-y-0 w-4 left-0 bg-linear-to-r from-white to-transparent opacity-100 z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 w-4 right-0 bg-linear-to-l from-white to-transparent opacity-100 z-10 pointer-events-none"></div>
    </div>
  );
};

const VerticalTextCarousel = () => {
  const TEXTS = ["Future", "You and", "Everyone"];
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const itemRef = React.useRef<HTMLDivElement | null>(null);
  const [measuredHeight, setMeasuredHeight] = useState<number | null>(null);

  // detect mobile (Tailwind md breakpoint ~768px)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 767px)");
    const handler = () => setIsMobile(mq.matches);
    handler();
    if (mq.addEventListener) mq.addEventListener("change", handler);
    else mq.addListener(handler);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", handler);
      else mq.removeListener(handler);
    };
  }, []);

  // measure first item on mobile so the wrapper exactly fits one item
  useEffect(() => {
    if (!isMobile) {
      setMeasuredHeight(null);
      return;
    }
    const measure = () => {
      if (itemRef.current) {
        const h = Math.ceil(itemRef.current.getBoundingClientRect().height);
        setMeasuredHeight(h || 72);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [isMobile]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % TEXTS.length);
    }, 2500);
    return () => clearInterval(intervalId);
  }, []);

  // Mobile variant: flow layout (block items) measured height used to show a single item
  if (isMobile) {
    const h = measuredHeight ?? 72;
    return (
      <div
        className="inline-block overflow-hidden align-bottom ml-3 relative"
        style={{ height: `${h}px`, width: "auto", paddingTop: "4px" }}
      >
        <motion.div
          animate={{ y: -index * h }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="relative"
        >
          {TEXTS.map((text, i) => (
            <div
              key={i}
              ref={i === 0 ? itemRef : null}
              className="block font-semibold text-2xl leading-tight  items-center"
              style={{ padding: "6px 0" }}
            >
              <span
                className={text === "Everyone" ? PURPLE_COLOR : "text-gray-900"}
              >
                {text}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    );
  }

  // Desktop: keep original stacked absolute layout (unchanged UX), slight nudge for alignment
  const desktopHeight = 85;
  return (
    <div
      className="inline-block overflow-hidden align-bottom  relative"
      style={{
        height: `${desktopHeight}px`,
        width: "300px",
        paddingTop: "8px",
      }}
    >
      <motion.div
        animate={{ y: -index * desktopHeight }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="relative h-full"
      >
        {TEXTS.map((text, i) => (
          <div
            key={i}
            className="absolute inset-x-0 font-semibold px-3 text-4xl sm:text-5xl lg:text-6xl leading-none flex items-center"
            style={{
              top: `${i * desktopHeight}px`,
              height: `${desktopHeight}px`,
            }}
          >
            <span
              className={text === "Everyone" ? PURPLE_COLOR : "text-gray-900"}
            >
              {text}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

// --- CTA Buttons ---
interface ButtonProps {
  text: string;
  styleType: "primary" | "secondary";
}

const CTAButton = ({ text, styleType }: ButtonProps) => {
  const primaryClasses = "bg-purple-700 text-white hover:bg-purple-800";
  const secondaryClasses = "bg-purple-100 text-purple-700 hover:bg-purple-200";
  const classes = styleType === "primary" ? primaryClasses : secondaryClasses;

  return (
    <Link
      href="#"
      className={`px-8 py-3 text-base font-medium rounded-full transition-colors duration-200 ${classes}`}
    >
      {text}
    </Link>
  );
};

const PillIcon = () => (
  <img
    src={DUMMY_BUTTON_ICON}
    alt="CTA Arrow"
    className="w-4 h-4 mr-2 object-contain"
    onError={(e) => {
      e.currentTarget.onerror = null;
      e.currentTarget.src = "https://placehold.co/16x16/7C3AED/FFFFFF?text=>>";
    }}
  />
);

const PillButtonWithIcon = ({ text }: { text: string }) => (
  <Link
    href="#"
    className="inline-flex items-center text-purple-700 text-xs border border-purple-100 bg-purple-100 px-5 py-2 rounded-full hover:bg-purple-200 transition-colors"
  >
    <PillIcon />
    {text}
  </Link>
);

// --- Section 2: Feature Cards ---
interface FeatureCardProps {
  imagePath: string;
  title: string;
  description: string;
  ctaContent: React.ReactNode;
}

const FeatureCard = ({
  imagePath,
  title,
  description,
  ctaContent,
}: FeatureCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex flex-col p-3 sm:p-5 pr-0 sm:pr-0 bg-white transition-shadow duration-300 rounded-xl h-full min-h-[360px] border border-gray-200 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="absolute bottom-2 right-4 z-10"
        initial={{ x: "120%", opacity: 0 }}
        animate={{ x: isHovered ? "0%" : "120%", opacity: isHovered ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        style={{ willChange: "transform, opacity" }}
      >
        <img
          src={imagePath}
          alt={title + " visual"}
          className="w-[211px] h-[206px] object-contain"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src =
              "https://placehold.co/211x206/CCCCCC/FFFFFF?text=SLIDE+IN";
          }}
        />
      </motion.div>

      <div className="flex flex-col grow text-left relative z-20">
        <h3 className="text-xl font-semibold text-gray-900 mb-0 mt-0">
          {title}
        </h3>
        <p className="text-sm text-gray-600 mb-0 max-w-[85%] mt-3 leading-snug">
          {description}
        </p>
        <div className="mt-auto mr-10">{ctaContent}</div>
      </div>
    </div>
  );
};

const PaymentFeatureCard = () => {
  return (
    <div className="relative flex flex-col p-3 sm:p-5 pr-0 sm:pr-0 bg-white transition-shadow duration-300 rounded-xl h-full min-h-[360px] border border-gray-200">
      <div className="absolute bottom-2 right-4 z-0 opacity-70">
        <img
          src={DUMMY_CARD_2_IMAGE}
          alt="Payment icon"
          className="w-[211px] h-[206px] object-contain"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src =
              "https://placehold.co/211x206/CCCCCC/FFFFFF?text=CARD+2+VISUAL";
          }}
        />
      </div>

      <div className="flex flex-col grow text-left relative z-20">
        <h3 className="text-xl font-semibold text-gray-900 mb-0 mt-0">
          Fast Payment anytime, anywhere
        </h3>
        <p className="text-sm text-gray-600 mb-0 max-w-[85%] mt-3 leading-snug">
          Simplify how you pay-fast, secure and effortless transactions
        </p>
        <div className="mt-auto">
          <PillButtonWithIcon text="Payment" />
        </div>
      </div>
    </div>
  );
};

// --- Section 3 Components ---
const SectionThreePartOne = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
      {/* 1a: Left Content */}
      <div className="w-full md:w-1/2">
        <div className="flex justify-between items-start mb-4">
          <p className="text-sm mb-5 font-semibold text-black">
            • Newly Added Product •
          </p>
        </div>

        <div className="flex justify-end mb-4">
          <span className="text-xs text-purple-700 bg-purple-100 px-3 py-1 items-end rounded-full">
            For Salary Earners
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Get Quick Loan
        </h2>

        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          We offer loans from ₦30,000 to ₦5,000,000, specially tailored to
          Federal and State and Local Government employees whose salaries are
          processed through the remita
        </p>

        <Link
          href="/loans"
          className="inline-flex items-center text-purple-700 text-xs border border-purple-100 bg-purple-100 px-5 py-2 rounded-full hover:bg-purple-200 transition-colors"
        >
          <PillIcon />
          Explore Features
        </Link>
      </div>

      {/* 1b: Right Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={DUMMY_SECTION_3_IMAGE_1}
          alt="Smart banking features"
          className="w-full max-w-md object-contain"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src =
              "https://placehold.co/500x400/7C3AED/FFFFFF?text=Smart+Banking";
          }}
        />
      </div>
    </div>
  );
};

const SectionThreePartTwo = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8">
      {/* 2a: Left Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={DUMMY_SECTION_3_IMAGE_2}
          alt="Secure transactions"
          className="w-full max-w-md object-contain"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src =
              "https://placehold.co/500x400/10B981/FFFFFF?text=Secure+Transactions";
          }}
        />
      </div>

      {/* 2b: Right Content */}
      <div className="w-full md:w-1/2">
        <p className="text-sm font-semibold text-purple-600 mb-2">
          • Security First •
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Bank-level security for all your transactions
        </h2>

        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          Your financial data is protected with enterprise-grade encryption and
          multi-factor authentication. Rest easy knowing your money and personal
          information are safe with our advanced security measures.
        </p>

        <PillButtonWithIcon text="Learn About Security" />
      </div>
    </div>
  );
};

// --- Section 4: Features with Icons ---
interface FeatureIconCardProps {
  iconPath: string;
  title: string;
  description: string;
}

const FeatureIconCard = ({
  iconPath,
  title,
  description,
}: FeatureIconCardProps) => {
  return (
    <div className="bg-purple-100 rounded-xl p-6 sm:p-8 border border-purple-100 transition-all duration-300 hover:shadow-lg">
      <div className="flex flex-col items-start text-left">
        <img
          src={iconPath}
          alt={title + " icon"}
          className="w-16 h-16 mb-10 object-contain"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src =
              "https://placehold.co/64x64/7C3AED/FFFFFF?text=ICON";
          }}
        />
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

// --- Section 5: Testimonials Carousel ---
interface TestimonialCardProps {
  testimonial: {
    id: number;
    message: string;
    name: string;
    location: string;
  };
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  const firstLetter = testimonial.name.charAt(0).toUpperCase();

  return (
    <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow min-h-[280px] flex flex-col">
      {/* Message */}
      <p className="text-gray-700 leading-relaxed mb-6 grow">
        "{testimonial.message}"
      </p>

      {/* User Info */}
      <div className="flex items-center space-x-4 mt-auto">
        <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
          <span className="text-white font-semibold text-lg">
            {firstLetter}
          </span>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
          <p className="text-gray-500 text-sm">{testimonial.location}</p>
        </div>
      </div>
    </div>
  );
};

const SectionFive = () => {
  const [key, setKey] = useState(0);
  const [isReversing, setIsReversing] = useState(false);

  // Calculate total width needed for all testimonials (card width + gap)
  const cardWidth = 384; // w-96 = 384px
  const gap = 24; // gap-6 = 24px
  const totalWidth = (cardWidth + gap) * testimonials.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setIsReversing((prev) => !prev);
      setKey((prev) => prev + 1); // Force re-render
    }, 15000); // Reverse direction every 15 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    // Section is full-bleed; header constrained inside
    <section className="w-full bg-white border-t border-gray-200 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - constrained */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 leading-tight">
            Hear from the people who trust and
          </h2>
          <p className="text-2xl sm:text-3xl font-semibold text-gray-900 leading-tight mt-0">
            grow with myStash
          </p>
        </div>
      </div>

      {/* Full-bleed Testimonials Carousel */}
      <div className="w-full overflow-hidden">
        <div className="relative">
          <motion.div
            key={key}
            className="flex space-x-6 px-4 sm:px-6 lg:px-8"
            animate={{
              x: isReversing ? [0, -totalWidth] : [-totalWidth, 0],
            }}
            transition={{
              x: {
                duration: 15,
                ease: "linear",
              },
            }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="shrink-0 w-80 sm:w-96"
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </motion.div>

          {/* Gradient overlays for smooth edges */}
          <div className="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-linear-to-l from-white to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

// --- Main Page Component ---
export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Section 1: Hero Section */}
      <section className="relative w-full min-h-[100vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 order-2 md:order-1 text-center md:text-left z-10">
              <HorizontalMarquee />
              {/* Mobile stacked heading: visible only on small screens */}
              <div className="md:hidden text-center mb-4">
                <h1 className="text-3xl font-extrabold text-gray-900 leading-tight">
                  <div>Smarter finance</div>
                  <div>for smarter</div>
                </h1>
                <div className="mt-2 flex justify-center">
                  <VerticalTextCarousel />
                </div>
              </div>

              {/* Desktop heading (unchanged) */}
              <div className="hidden md:block">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 mb-4">
                  <span className="block whitespace-nowrap">
                    Smarter finance for a
                  </span>
                  <span className="block font-semibold whitespace-nowrap">
                    smarter <VerticalTextCarousel />
                  </span>
                </h1>
              </div>
              <p className="mt-4 text-xl text-gray-600 max-w-lg mx-auto md:mx-0">
                A financial tool that makes your money work for you. Save
                effortlessly, grow your wealth intelligently, and make you spend
                with confidence.
              </p>
              <div className="mt-8 flex justify-center md:justify-start space-x-4">
                <NavButtons />
              </div>
            </div>
          </div>
        </div>

        {/* Updated Image Section - Wider and Closer to Left */}
        <div className="absolute top-0 right-0 w-3/5 h-full order-1 md:order-2 flex items-center justify-start pl-20">
          {" "}
          {/* Changed from w-1/2 to w-3/5 and pl-8 to pl-4 */}
          <div className="w-full h-full max-w-none rounded-l-xl flex items-center justify-center overflow-hidden">
            <img
              src={DUMMY_HERO_IMAGE}
              alt="Hero Visual"
              className="w-full h-full object-contain  scale-100" // scale-110 makes it larger
            />
          </div>
        </div>
      </section>

      {/* Section 2: Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-16 pb-20 md:pb-32 bg-white border-t border-gray-200">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-purple-600 mb-2">
            • Our Products •
          </p>
          <h2 className="text-xl sm:text-3xl font-bold text-gray-900 mb-4">
            Designed to help you{" "}
            <span className="text-gray-300">save smarter, </span> spend
            efficiently,{" "}
            <span className="text-gray-300">plan strategically,</span> and give
            loans— all through secure, innovative tools.
          </h2>
          <p className="text-lg text-gray-600">
            Select the product that fits your needs and apply today.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            imagePath={DUMMY_CARD_1_IMAGE}
            title="Activate your Smart Savings"
            description="Auto save monthly income. Drive more sales and start earning your planned monthly."
            ctaContent={<PillButtonWithIcon text="Start Saving" />}
          />
          <PaymentFeatureCard />
          <FeatureCard
            imagePath={DUMMY_CARD_3_IMAGE}
            title="Budget Smarter, Spend Better"
            description="View monthly expenses. Get detailed insights and reach your money goals faster."
            ctaContent={<PillButtonWithIcon text="Budget" />}
          />
        </div>
      </section>

      {/* Section 3: Additional Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 bg-white border-t border-gray-200">
        <SectionThreePartOne />
        <SectionThreePartTwo />
      </section>

      {/* Section 4: Icon Features */}
      <FeaturesSection
        title="With myStash you get"
        description="Our core values as an organization reflects in our business ethics"
        features={[
          {
            iconPath: DUMMY_SECTION_4_ICON_1,
            title: "Secure Funds",
            description:
              "Your fund is protected with advanced encryption and trusted systems-giving you total peace of mind.",
          },
          {
            iconPath: DUMMY_SECTION_4_ICON_2,
            title: "Quick, Seamless Payout",
            description:
              "We are committed to keeping your finances simple and swift-from instant payments to smart budgeting and timely savings within a tick.",
          },
          {
            iconPath: DUMMY_SECTION_4_ICON_3,
            title: "Diverse Options",
            description:
              "From flexible loans to investing, we provide solutions that fit every individual's financial journey.",
          },
        ]}
      />

      {/* Section 5: Testimonials Carousel */}
      <SectionFive />

      {/* Section 6: Contact Form */}
      <ContactFormSection />

      {/* Sections 7 & 8 are now in the layout */}
    </div>
  );
}
