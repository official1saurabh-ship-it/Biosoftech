import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

import blobImage from "../../assets/hero1.png";
import slider from "../../assets/slider.png";
import slider1 from "../../assets/slider1-1.png";
import bgImage from "../../assets/h4-bg-img-1.png";

const slides = [
  {
    image: slider,
    top: "Full-Service",
    big: "Software",
    outline: "Development",
    bottom: "Company",
    desc:
      "We are a leading technology partner delivering innovation and efficiency for more than a decade. Our team specializes in custom software development, mobile apps, and AI-powered solutions — offering everything under one roof.",
  },
  {
    image: slider1,
    top: "Where",
    big: "Ideas",
    outline: "Turn Into",
    bottom: "Impact",
    desc:
      "For us, it's not just about building software. We understand your business and create smart digital solutions.",
  },
];

export default function HeroRevealSlider() {
  const [index, setIndex] = useState(0);
  const [cover, setCover] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCover(true);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % slides.length);
      }, 1800);

      setTimeout(() => {
        setCover(false);
      }, 2200);
    }, 6500);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[index];

  return (
    <section className="relative min-h-[720px] lg:h-screen overflow-hidden bg-[#050010] flex items-center">

      {/* BG IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      />

      {/* BLOB IMAGE - Now Starting from Center */}
      <motion.img
        src={blobImage}
        initial={{
          x: "0%",           // Changed to center
          y: "28%",
          rotate: 45,
          opacity: 0.85,
          scale: 0.85,
        }}
        animate={{
          // Centered horizontal movement
          x: ["-12%", "12%", "-12%"],

          y: ["28%", "-55%", "28%"],

          rotate: [45, 48, 45],

          scale: [0.85, 1.05, 0.85],
          opacity: [0.85, 1, 0.85],
        }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          times: [0, 0.6, 1],
          repeat: Infinity,
          repeatType: "loop",
        }}
        style={{
          mixBlendMode: "screen",
        }}
        className="
          absolute
          top-[105%]
          left-[38%]
          w-[460%]
          h-[155%]
          object-contain
          max-w-none
          z-10
          pointer-events-none
          -translate-x-1/2
          -translate-y-1/2
        "
      />

      {/* CONTENT - Unchanged */}
      <div className="relative z-30 h-full">
        <div
          className="
            max-w-[1536px]
            mx-auto
            min-h-[560px]
            lg:h-full
            grid
            lg:grid-cols-2
            items-center
            gap-10
            lg:gap-16
            px-6
            lg:px-16
            2xl:px-24
          "
        >
          {/* IMAGE COLUMN */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`img-${index}`}
              initial={{ opacity: 0, y: 140 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -60 }}
              transition={{
                duration: 1.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative order-2 flex items-end justify-center lg:order-1 h-full z-20"
            >
              <img
                src={slide.image}
                className="w-[75%] sm:w-[60%] md:w-[50%] lg:w-full max-w-[650px] object-contain self-end relative z-30"
              />
            </motion.div>
          </AnimatePresence>

          {/* TEXT COLUMN */}
          <motion.div
            key={`txt-${index}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: cover ? 0 : 1 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="relative z-30 order-1 text-white lg:order-2 font-outfit min-w-0 h-full flex flex-col justify-center"
          >
            <div className="relative z-40 h-[60vh] flex flex-col justify-center">
              <h4 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold opacity-90 mb-3 lg:mb-5">
                {slide.top}
              </h4>

              <h1 className="text-[48px] sm:text-[72px] md:text-[88px] lg:text-[96px] xl:text-[112px] 2xl:text-[124px] font-black leading-[0.88] tracking-[-0.04em] uppercase">
                {slide.big}
              </h1>

              <h2 className="text-[40px] sm:text-[60px] md:text-[76px] lg:text-[82px] xl:text-[96px] 2xl:text-[108px] font-black text-transparent [-webkit-text-stroke:2px_white] -mt-2 lg:-mt-5 tracking-[-0.04em] uppercase">
                {slide.outline}
              </h2>

              <h3 className="text-[28px] sm:text-[40px] md:text-[48px] lg:text-[54px] xl:text-[64px] font-black -mt-1 lg:-mt-3 tracking-[-0.04em] leading-[0.88] uppercase">
                {slide.bottom}
              </h3>

              <p className="mt-5 lg:mt-7 max-w-[550px] text-base sm:text-lg font-jakarta font-medium opacity-80 leading-relaxed">
                {slide.desc}
              </p>

              <button className="mt-8 lg:mt-10 px-8 sm:px-12 py-4 sm:py-5 rounded-full bg-white text-black font-jakarta font-bold uppercase tracking-widest text-[13px] hover:bg-purple-600 hover:text-white hover:border-purple-600 border border-transparent transition-all duration-500 shadow-lg">
                Get Started &rarr;
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CONTROLS */}
      <div className="absolute right-4 lg:right-10 top-1/2 -translate-y-1/2 hidden sm:flex flex-col gap-4 lg:gap-8 z-50">
        <button
          onClick={() => setIndex((index - 1 + slides.length) % slides.length)}
          className="w-14 h-14 lg:w-20 lg:h-20 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors"
        >
          &larr;
        </button>

        <button
          onClick={() => setIndex((index + 1) % slides.length)}
          className="w-14 h-14 lg:w-20 lg:h-20 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors"
        >
          &rarr;
        </button>
      </div>
    </section>
  );
}