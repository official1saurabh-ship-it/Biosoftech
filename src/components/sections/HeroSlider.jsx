import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import slider from "../../assets/hero-slider-slide-1.webp";
import slider1 from "../../assets/hero-slider-slide-2.webp";
import bgImage from "../../assets/hero-slider-bg-pattern.webp";

const slides = [
  {
    image: slider,
    top: "Where",
    big: "Ideas",
    outline: "Become",
    bottom: "Smart Solutions",
    desc: "For us, it's not just about building software. We understand your business goals, capture your vision, and deliver technology that makes everyday work simple, efficient, and impactful.",
  },
  {
    image: slider1,
    top: "Full-Service",
    big: "Software",
    outline: "Development",
    bottom: "Company",
    desc: "We are a leading technology partner delivering innovation and efficiency for more than a decade. Our team specializes in custom software development, mobile apps, and AI-powered solutions — offering everything under one roof.",
  },
];

const balls = [
  { size: 80, border: 2, color: "rgba(255,255,255,0.25)", anim: "floatA", duration: 8, delay: 0, x: "10%", y: "15%" },
  { size: 60, border: 1.5, color: "rgba(255,255,255,0.2)", anim: "floatB", duration: 11, delay: 1, x: "75%", y: "10%" },
  { size: 100, border: 2.5, color: "rgba(255,255,255,0.15)", anim: "floatC", duration: 9, delay: 3, x: "85%", y: "70%" },
  { size: 70, border: 1.5, color: "rgba(255,255,255,0.2)", anim: "floatD", duration: 12, delay: 2, x: "5%", y: "75%" },
];

export default function HeroRevealSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[index];

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050010] flex items-center">
      {/* BG IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* FLOATING BALLS */}
      {balls.map((b, i) => (
        <div
          key={i}
          className="absolute pointer-events-none z-10 rounded-full overflow-hidden"
          style={{
            width: b.size,
            height: b.size,
            left: b.x,
            top: b.y,
            animation: `${b.anim} ${b.duration}s ${b.delay}s ease-in-out infinite alternate`,
          }}
        >
          <div
            className="absolute inset-0 rounded-full"
            style={{ border: `${b.border}px solid ${b.color}` }}
          />
          <div
            className="absolute inset-0 rounded-full"
            style={{
              border: `${b.border}px solid transparent`,
              background: `linear-gradient(#050010,#050010) padding-box, conic-gradient(from 0deg, ${b.color}, rgba(255,255,255,0.8), ${b.color}) border-box`,
              animation: `sparkle 2.5s ${b.delay}s linear infinite`,
            }}
          />
        </div>
      ))}

      {/* MAIN CONTENT */}
      <div className="relative z-30 w-full h-full">
        <div
          className="
            max-w-full mx-auto min-h-screen
            grid lg:grid-cols-2
            items-center
            gap-6 lg:gap-12 xl:gap-16
            px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24
          "
        >
          {/* IMAGE COLUMN */}
          <div className="relative order-2 lg:order-1 z-20 flex items-center justify-center h-full py-6 lg:pt-4 lg:translate-y-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={`img-${index}`}
                initial={{ opacity: 0, y: 140 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -60 }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex items-center justify-center w-full mt-8 lg:mt-4"
              >
                <img
                  src={slide.image}
                  alt="Hero"
                  className="w-auto h-[450px] sm:h-[520px] lg:h-[580px] xl:h-[680px] 2xl:h-[740px] object-contain"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* TEXT COLUMN */}
          <div className="relative z-30 order-1 lg:order-2 text-white font-outfit h-full flex flex-col justify-center">
            <motion.div
              key={`txt-${index}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="h-full flex flex-col justify-center pt-20 lg:pt-0"
            >
              <h2 className="text-fluid-3xl font-bold opacity-90 mb-2 lg:mb-5">
                {slide.top}
              </h2>
              <h1 className="text-[28px] sm:text-[56px] md:text-[64px] lg:text-[42px] xl:text-[96px] 2xl:text-[112px] font-black leading-[0.88] tracking-[-0.04em] uppercase">
                {slide.big}
              </h1>
              <h2 className="text-[20px] sm:text-[40px] md:text-[48px] lg:text-[32px] xl:text-[72px] 2xl:text-[84px] font-black text-transparent [-webkit-text-stroke:1px_white] md:[-webkit-text-stroke:2px_white] -mt-1 lg:-mt-2 xl:-mt-5 tracking-[-0.04em] uppercase">
                {slide.outline}
              </h2>
              <h2 className="text-[18px] sm:text-[32px] md:text-[38px] lg:text-[26px] xl:text-[58px] font-black -mt-0.5 lg:-mt-1 xl:-mt-3 tracking-[-0.04em] leading-[0.88] uppercase">
                {slide.bottom}
              </h2>
              <p className="mt-4 lg:mt-6 max-w-[550px] w-full text-fluid-base font-jakarta font-medium opacity-80 leading-relaxed">
                {slide.desc}
              </p>
              <Link
                to="/contact"
                className="inline-flex w-fit self-start mt-6 lg:mt-8 px-3 py-3 rounded-full bg-[#9810dc] text-white font-jakarta font-bold uppercase tracking-widest text-[12px] sm:text-[13px] hover:bg-purple-600 transition-all duration-500 shadow-lg"
              >
                Get Started →
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* SLIDER CONTROLS */}
      <div className="absolute right-4 sm:right-6 lg:right-10 top-1/2 -translate-y-1/2 flex flex-col gap-3 lg:gap-6 z-50">
        <button
          onClick={() => setIndex((index - 1 + slides.length) % slides.length)}
          aria-label="Previous slide"
          className="w-10 h-10 sm:w-14 sm:h-14 lg:w-20 lg:h-20 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors flex items-center justify-center text-xl"
        >
          ←
        </button>
        <button
          onClick={() => setIndex((index + 1) % slides.length)}
          aria-label="Next slide"
          className="w-10 h-10 sm:w-14 sm:h-14 lg:w-20 lg:h-20 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors flex items-center justify-center text-xl"
        >
          →
        </button>
      </div>

      <style>{`
        @keyframes floatA {
          0% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(40px, -60px) scale(1.1); }
          50% { transform: translate(-30px, 50px) scale(0.9); }
          75% { transform: translate(50px, 30px) scale(1.05); }
          100% { transform: translate(-20px, -40px) scale(1); }
        }
        @keyframes floatB {
          0% { transform: translate(0, 0); }
          33% { transform: translate(-50px, 40px); }
          66% { transform: translate(35px, -55px); }
          100% { transform: translate(-25px, 30px); }
        }
        @keyframes floatC {
          0% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(55px, 25px) rotate(90deg); }
          50% { transform: translate(-40px, -45px) rotate(180deg); }
          75% { transform: translate(30px, 50px) rotate(270deg); }
          100% { transform: translate(-35px, -20px) rotate(360deg); }
        }
        @keyframes floatD {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(45px, -50px) scale(0.85); }
          100% { transform: translate(-40px, 40px) scale(1.15); }
        }
        @keyframes sparkle {
          0% { transform: rotate(0deg); opacity: 0.3; }
          25% { opacity: 1; }
          50% { transform: rotate(180deg); opacity: 0.4; }
          75% { opacity: 0.9; }
          100% { transform: rotate(360deg); opacity: 0.3; }
        }
      `}</style>
    </section>
  );
}