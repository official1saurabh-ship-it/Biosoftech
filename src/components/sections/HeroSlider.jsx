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
    desc:
      "For us, it's not just about building software. We understand your business goals, capture your vision, and deliver technology that makes everyday work simple, efficient, and impactful.",
  },
  {
    image: slider1,
    top: "Full-Service",
    big: "Software",
    outline: "Development",
    bottom: "Company",
    desc:
      "We are a leading technology partner delivering innovation and efficiency for more than a decade. Our team specializes in custom software development, mobile apps, and AI-powered solutions — offering everything under one roof.",
  },
];

const balls = [
  { size: 120, border: 2, color: "rgba(255,255,255,0.25)", anim: "floatA", duration: 8, delay: 0, x: "10%", y: "15%" },
  { size: 90, border: 1.5, color: "rgba(255,255,255,0.2)", anim: "floatB", duration: 11, delay: 1, x: "75%", y: "10%" },
  { size: 150, border: 2.5, color: "rgba(255,255,255,0.15)", anim: "floatC", duration: 9, delay: 3, x: "85%", y: "70%" },
  { size: 100, border: 1.5, color: "rgba(255,255,255,0.2)", anim: "floatD", duration: 12, delay: 2, x: "5%", y: "75%" },
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
    <section className="relative min-h-[600px] sm:min-h-[720px] lg:min-h-screen overflow-hidden bg-[#050010] flex items-center">

      {/* BG IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
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
          {/* Hollow circle */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              border: `${b.border}px solid ${b.color}`,
            }}
          />
          {/* Glittering sparkle ring */}
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

      {/* CONTENT */}
      <div className="relative z-30 h-full w-full">
        <div
          className="
            max-w-[1536px]
            mx-auto
            min-h-0
            lg:min-h-[560px] lg:h-full
            grid
            lg:grid-cols-2
            items-center
            gap-4
            lg:gap-16
            px-4
            sm:px-6
            lg:px-16
            2xl:px-24
          "
        >
          {/* IMAGE COLUMN */}
          <div className="relative order-2 flex items-end justify-center lg:order-1 h-full z-20 min-h-[250px] sm:min-h-[320px]">
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
                className="flex items-end justify-center w-full h-full"
              >
                <img
                  src={slide.image}
                  alt="Biosoftech hero slide showcasing software development solutions"
                  fetchPriority="high"
                  loading="eager"
                  width="650"
                  height="500"
                  className="w-[65%] sm:w-[60%] md:w-[50%] lg:w-full max-w-[650px] object-contain self-end"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* TEXT COLUMN */}
          <div className="relative z-30 order-1 text-white lg:order-2 font-outfit min-w-0 h-full flex flex-col justify-center">
            <motion.div
              key={`txt-${index}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="min-h-[420px] sm:min-h-[480px] lg:min-h-[60vh] flex flex-col justify-center pt-36 sm:pt-40 lg:pt-48"
            >
              <h2 className="text-fluid-3xl font-bold opacity-90 mb-2 lg:mb-5">
                {slide.top}
              </h2>

              <h1 className="text-[28px] sm:text-[56px] md:text-[64px] lg:text-[78px] xl:text-[96px] 2xl:text-[112px] font-black leading-[0.88] tracking-[-0.04em] uppercase">
                {slide.big}
              </h1>

              <h2 className="text-[20px] sm:text-[40px] md:text-[48px] lg:text-[58px] xl:text-[72px] 2xl:text-[84px] font-black text-transparent [-webkit-text-stroke:1px_white] md:[-webkit-text-stroke:2px_white] -mt-1 lg:-mt-5 tracking-[-0.04em] uppercase">
                {slide.outline}
              </h2>

              <h2 className="text-[18px] sm:text-[32px] md:text-[38px] lg:text-[46px] xl:text-[58px] font-black -mt-0.5 lg:-mt-3 tracking-[-0.04em] leading-[0.88] uppercase">
                {slide.bottom}
              </h2>

              <p className="mt-4 lg:mt-7 max-w-[550px] w-full text-fluid-base font-jakarta font-medium opacity-80 leading-relaxed">
                {slide.desc}
              </p>

              <Link to="/contact" className="inline-block mt-6 lg:mt-10 px-6 sm:px-12 py-3 sm:py-5 rounded-full bg-white text-black font-jakarta font-bold uppercase tracking-widest text-[12px] sm:text-[13px] hover:bg-purple-600 hover:text-white hover:border-purple-600 border border-transparent transition-all duration-500 shadow-lg min-h-[44px]">
                Get Started &rarr;
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes floatA {
          0% { transform: translate(0, 0) scale(1); box-shadow: 0 0 4px rgba(255,255,255,0.15); }
          25% { transform: translate(40px, -60px) scale(1.1); box-shadow: 0 0 20px rgba(255,255,255,0.5); }
          50% { transform: translate(-30px, 50px) scale(0.9); box-shadow: 0 0 6px rgba(255,255,255,0.2); }
          75% { transform: translate(50px, 30px) scale(1.05); box-shadow: 0 0 25px rgba(255,255,255,0.6); }
          100% { transform: translate(-20px, -40px) scale(1); box-shadow: 0 0 8px rgba(255,255,255,0.3); }
        }
        @keyframes floatB {
          0% { transform: translate(0, 0); box-shadow: 0 0 5px rgba(255,255,255,0.1); }
          33% { transform: translate(-50px, 40px); box-shadow: 0 0 18px rgba(255,255,255,0.5); }
          66% { transform: translate(35px, -55px); box-shadow: 0 0 8px rgba(255,255,255,0.25); }
          100% { transform: translate(-25px, 30px); box-shadow: 0 0 22px rgba(255,255,255,0.55); }
        }
        @keyframes floatC {
          0% { transform: translate(0, 0) rotate(0deg); box-shadow: 0 0 6px rgba(255,255,255,0.15); }
          25% { transform: translate(55px, 25px) rotate(90deg); box-shadow: 0 0 24px rgba(255,255,255,0.5); }
          50% { transform: translate(-40px, -45px) rotate(180deg); box-shadow: 0 0 10px rgba(255,255,255,0.2); }
          75% { transform: translate(30px, 50px) rotate(270deg); box-shadow: 0 0 28px rgba(255,255,255,0.6); }
          100% { transform: translate(-35px, -20px) rotate(360deg); box-shadow: 0 0 12px rgba(255,255,255,0.35); }
        }
        @keyframes floatD {
          0% { transform: translate(0, 0) scale(1); box-shadow: 0 0 4px rgba(255,255,255,0.1); }
          50% { transform: translate(45px, -50px) scale(0.85); box-shadow: 0 0 20px rgba(255,255,255,0.55); }
          100% { transform: translate(-40px, 40px) scale(1.15); box-shadow: 0 0 15px rgba(255,255,255,0.4); }
        }
        @keyframes sparkle {
          0% { transform: rotate(0deg); opacity: 0.3; }
          25% { opacity: 1; }
          50% { transform: rotate(180deg); opacity: 0.4; }
          75% { opacity: 0.9; }
          100% { transform: rotate(360deg); opacity: 0.3; }
        }
      `}</style>

      {/* CONTROLS */}
      <div className="absolute right-4 sm:right-6 lg:right-10 top-1/2 -translate-y-1/2 flex flex-col gap-2 sm:gap-4 lg:gap-8 z-50">
        <button
          onClick={() => setIndex((index - 1 + slides.length) % slides.length)}
          aria-label="Previous slide"
          className="w-11 h-11 sm:w-14 sm:h-14 lg:w-20 lg:h-20 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors flex items-center justify-center text-sm sm:text-base"
        >
          &larr;
        </button>

        <button
          onClick={() => setIndex((index + 1) % slides.length)}
          aria-label="Next slide"
          className="w-11 h-11 sm:w-14 sm:h-14 lg:w-20 lg:h-20 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors flex items-center justify-center text-sm sm:text-base"
        >
          &rarr;
        </button>
      </div>
    </section>
  );
}