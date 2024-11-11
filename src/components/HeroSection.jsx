import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "../assets/images/heroImage.png";

export default function HeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,
    });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5, // Decreased stagger for smoother flow
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6, 
        ease: [0.42, 0, 0.58, 1], // Easing for a smoother animation curve
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col md:flex-row md:mt-16 items-center justify-between"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Part 1 */}
      <div className="mt-16 text-center space-y-6 md:w-full md:space-y-8 md:text-left">
        <motion.h1
          className="text-[35px] tracking-tight leading-[35.16px] md:text-4xl lg:text-6xl font-custom font-semibold text-gray-900"
          variants={itemVariants}
        >
          Beauty, self care <br className="hidden md:block" />
          and wellness <br className="hidden md:block" />
          that <span className="text-[#FBA013]">delivers</span>
        </motion.h1>

        <p
          className="text-[#6C6C6C] text-[14px] w-4/5 mx-auto font-custom2 text-sm md:text-base md:w-full"
          data-aos="fade-up"
          data-aos-delay="500" // Appears after h1 animation
        >
          A customizable box of premium beauty, self-care &{" "}
          <br className="hidden md:block" />
          wellness products delivered monthly, just for you{" "}
          <br className="hidden md:block" />
          whenever and however you need it.
        </p>

        <div className="py-6 md:py-0" data-aos="fade-up" data-aos-delay="700">
          <button
            className="bg-[#FBA013] w-[214px] p-3 px-5 rounded-[14px] flex items-center justify-center gap-2 mx-auto md:w-[235.53px] md:mx-0 hover:bg-[#e89412] transition-colors"
          >
            <a href="#cta">
              <p className="font-custom text-white text-sm">Join the waitlist</p>
            </a>
            <svg
              className="mb-1 relative right-1"
              width="15"
              height="12"
              viewBox="0 0 18 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.2596 4.72462L1.86042 11.3955M16.2596 4.72462L12.9475 13.7546M16.2596 4.72462L7.22961 1.41246"
                stroke="#F2EFE9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Part 2 */}
      <div className="flex justify-center mt-24 md:w-1/2 md:mt-12 relative">
        <img
          src={Hero}
          alt="hero image"
          className="w-[323px] h-[409px] md:w-[340px] md:h-[449px] rounded-3xl"
        />

        <div className="absolute top-3 left-4">
          <div className="relative">
            <div className="absolute w-full h-full -right-4 -bottom-2" />
            {/* Text Content */}
            <div className="relative font-custom p-4">
              <h1 className="text-4xl font-bold text-white leading-tight">
                Maya<br />Daniels
              </h1>
              <p className="text-white text-lg mt-1">beauty vlogger</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
