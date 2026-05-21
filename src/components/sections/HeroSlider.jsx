import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
    outline: "Become",
    bottom: "SOLUTIONS",
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
      }, 2300);
    }, 6500);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[index];

  return (
    <section className="relative min-h-[720px] lg:h-screen overflow-hidden bg-[#050010] pt-40 pb-12 lg:pt-20 lg:pb-0">

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
        initial={{
          y: 260,
          opacity: 0,
        }}

        animate={{

          y:
            cover
              ? 260
              : 0,

          scale:
            cover
              ? 1.08
              : 1,

          opacity:
            cover
              ? 0
              : 1,
        }}

        transition={{
          duration: 1.15,

          delay:
            cover
              ? 0
              : 0,

          ease: [
            0.65,
            0,
            0.35,
            1,
          ],
        }}




        className="
      absolute
      right-[-120px]
      sm:right-[-90px]
      md:right-[-20px]
      lg:right-[12%]
      xl:right-[15%]
      top-[360px]
      sm:top-[380px]
      md:top-[-20px]
      lg:top-[-15%]
      w-[300px]
      sm:w-[390px]
      md:w-[510px]
      lg:w-[620px]
      xl:w-[720px]
      h-[360px]
      sm:h-[430px]
      md:h-[830px]
      lg:h-[125vh]
      bg-orange-500/70
      md:bg-orange-500
      rounded-[50%]
      rotate-[16deg]
      md:rotate-[20deg]
      lg:rotate-[24deg]
      blur-[1px]
      md:blur-none
      z-10
      "
      />

      {/* CONTENT */}

      <div className="relative z-30 h-full">

        <div
          className="
          max-w-[1700px]
          mx-auto
          min-h-[560px]
          lg:h-full
          grid
          lg:grid-cols-2
          items-center
          gap-6
          lg:gap-0
          px-5
          sm:px-8
          lg:px-12
        "
        >

          {/* IMAGE */}

          <motion.div
            key={`img-${index}`}
            animate={{

              y:
                cover
                  ? 260
                  : 0,

              opacity:
                cover
                  ? 0
                  : 1,

              scale:
                cover
                  ? .98
                  : 1,
            }}
            transition={{

              duration: 
                cover 
                  ? 1.5 // Slower fade out
                  : 2.2, // Smooth fade in

              delay:
                cover
                  ? 0.4 // Start fading out slightly after cover starts
                  : 0.65,

              ease: "easeInOut",


            }}
            className="relative order-2 flex justify-center lg:block lg:order-1"
          >

            <img
              src={slide.image}
              className="
                w-[70%]
                sm:w-[54%]
                md:w-[54%]
                lg:w-[96%]
                xl:w-[90%]
                relative
                z-30
              "
            />
          </motion.div>

          {/* TEXT */}

          <motion.div
            key={`txt-${index}`}
            initial={{ opacity: 0 }}
            animate={{
              opacity: cover ? 0 : 1,
            }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative z-30 order-1 text-white lg:order-2 lg:pl-8 xl:pl-12 font-epilogue min-w-0 overflow-hidden"
          >

            <h4 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold opacity-90 mb-4 lg:mb-6">
              {slide.top}
            </h4>

            <h1
              className="
                text-[50px]
                sm:text-[76px]
                md:text-[100px]
                lg:text-[110px]
                xl:text-[130px]
                font-extrabold
                leading-none
                tracking-tighter
                uppercase
                break-words
              "
            >
              {slide.big}
            </h1>

            <h2
              className="
                text-[42px]
                sm:text-[66px]
                md:text-[86px]
                lg:text-[90px]
                xl:text-[105px]
                font-extrabold
                text-transparent
                [-webkit-text-stroke:1.5px_white]
                -mt-2
                lg:-mt-6
                tracking-tighter
                uppercase
                break-words
              "
            >
              {slide.outline}
            </h2>

            <h3
              className="
                text-[30px]
                sm:text-[42px]
                md:text-[54px]
                lg:text-[60px]
                font-extrabold
                -mt-1
                lg:-mt-3
                tracking-tight
                uppercase
              "
            >
              {slide.bottom}
            </h3>

            <p className="mt-5 lg:mt-8 max-w-xl text-base sm:text-lg font-jakarta font-medium opacity-80 leading-relaxed">
              {slide.desc}
            </p>

            <button
              className="
                mt-8
                lg:mt-10
                px-8
                sm:px-12
                py-4
                sm:py-5
                rounded-full
                bg-white
                text-black
                font-jakarta
                font-bold
                uppercase
                tracking-widest
                text-[13px]
                hover:bg-purple-600
                hover:text-white
                hover:border-purple-600
                border border-transparent
                transition-all
                duration-500
                shadow-lg
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
          right-4
          lg:right-10
          top-1/2
          -translate-y-1/2
          hidden
          sm:flex
          flex-col
          gap-4
          lg:gap-8
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
            w-14
            h-14
            lg:w-20
            lg:h-20
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
            w-14
            h-14
            lg:w-20
            lg:h-20
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
