import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import slider from "../../assets/slider.png";
import slider1 from "../../assets/slider1-1.png";
import bgImage from "../../assets/h4-bg-img-1.png";
const slides = [
  {
    image: slider,
    top: "Let's",
    big: "Log",
    outline: "ELITE",
    bottom: "MARKETING",
    desc:
      "Take your business to new heights with our super productive services.",
  },

  {
    image: slider1,
    top: "Where",
    big: "Ideas",
    outline: "Into",
    bottom: "IMPACT",
    desc:
      "We understand business goals and convert ideas into measurable growth.",
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
      }, 2300);
    }, 6500);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[index];

  return (
    <section className="relative h-screen overflow-hidden bg-[#050010]">

      {/* BG */}

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      />

      <div className="absolute inset-0 bg-[#050010]/55 z-[1]" />

      {/* ORANGE BLOB */}

      <motion.div
        animate={{
          y: cover ? "115%" : "0%",
          scale: cover ? 1.25 : 1,
        }}
        transition={{
          duration: 1.8,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="
          absolute
          right-[18%]
          top-[-20%]
          w-[720px]
          h-[130vh]
          bg-orange-500
          rounded-[50%]
          rotate-[22deg]
          z-10
        "
      />

      {/* CONTENT */}

      <div className="relative z-30 h-full">

        <div
          className="
          max-w-[1700px]
          mx-auto
          h-full
          grid
          lg:grid-cols-2
          items-center
          px-12
        "
        >

          {/* IMAGE */}

          <motion.div
            key={`img-${index}`}
            animate={{
              opacity: cover ? 0 : 1,
              x: cover ? -120 : 0,
              scale: cover ? 0.95 : 1,
            }}
            transition={{
              duration: 1.8,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="relative"
          >
            <img
              src={slide.image}
              className="
                w-[90%]
                relative
                z-30
              "
            />
          </motion.div>

          {/* TEXT */}

          <motion.div
            key={`txt-${index}`}
            animate={{
              opacity: cover ? 0 : 1,
              x: cover ? 120 : 0,
              scale: cover ? 0.98 : 1,
            }}
            transition={{
              duration: 1.8,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="relative z-30 text-white"
          >

            <h4 className="text-6xl font-bold">
              {slide.top}
            </h4>

            <h1
              className="
                text-[150px]
                font-black
                leading-none
              "
            >
              {slide.big}
            </h1>

            <h2
              className="
                text-[120px]
                font-black
                text-transparent
                [-webkit-text-stroke:2px_white]
                -mt-8
              "
            >
              {slide.outline}
            </h2>

            <h3
              className="
                text-[72px]
                font-black
                -mt-4
              "
            >
              {slide.bottom}
            </h3>

            <p className="mt-8 max-w-xl text-lg">
              {slide.desc}
            </p>

            <button
              className="
                mt-10
                px-10
                py-5
                rounded-full
                border
                border-purple-500
                hover:bg-purple-600
                duration-300
              "
            >
              Get Started →
            </button>

          </motion.div>

        </div>

      </div>

      {/* CONTROLS */}

      <div
        className="
          absolute
          right-10
          top-1/2
          -translate-y-1/2
          flex
          flex-col
          gap-8
          z-50
        "
      >

        <button
          onClick={() =>
            setIndex(
              (index - 1 + slides.length) %
              slides.length
            )
          }
          className="
            w-20
            h-20
            rounded-full
            border
            border-white/30
            text-white
          "
        >
          ←
        </button>

        <button
          onClick={() =>
            setIndex(
              (index + 1) %
              slides.length
            )
          }
          className="
            w-20
            h-20
            rounded-full
            border
            border-white/30
            text-white
          "
        >
          →
        </button>

      </div>

    </section>
  );
}