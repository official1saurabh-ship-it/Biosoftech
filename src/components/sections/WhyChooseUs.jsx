import woman from "../../assets/bg-img1-2.png";
import bg from "../../assets/GR_21-BG.png";
import f4 from "../../assets/f4-bg-img-1.png";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import { useRef } from "react";

const features = [
  {
    title: "Cost-Effective Technology",
    desc:
      "Invest only in the software features you need, ensuring maximum ROI and reduced overhead.",
  },

  {
    title: "Experienced Development Team",
    desc:
      "Work with professionals skilled in enterprise software, cloud integration, and industry-specific solutions.",
  },

  {
    title: "24x7 Technical Support",
    desc:
      "Our dedicated team provides round-the-clock assistance, resolving queries quickly and keeping your systems running smoothly.",
  },

  {
    title: "Tailored Digital Strategies",
    desc:
      "We design customized solutions aligned with your business goals, whether in healthcare, real estate, or hospitality.",
  },
];

export default function WhyChooseUs() {

  const sectionRef = useRef(null);

  const { scrollYProgress } =
    useScroll({
      target: sectionRef,

      offset: [
        "start end",
        "end start",
      ],
    });

  /* BACKGROUND */

  /* stable until section center */

  const bgTopScaleY =
    useTransform(
      scrollYProgress,
      [0.60, 0.90],
      [1, 0]
    );

  /* image drop later */

  const womanY =
    useTransform(
      scrollYProgress,
      [0.68, 0.84],
      [0, 700]
    );

  /* quick disappear */

  const womanOpacity =
    useTransform(
      scrollYProgress,
      [0.74, 0.84],
      [1, 0]
    );

  return (

    <section
      ref={sectionRef}
      className="
      relative
      overflow-hidden

      bg-[#12003f]

      min-h-screen
      lg:h-screen

      flex
      items-center

      px-6
      sm:px-10
      lg:px-12
      "
    >

      {/* BACKGROUND */}

      <motion.div
        className="
        absolute
        inset-0
        "
      >

        {/* TOP BG */}

        <motion.img
          src={bg}
          alt=""

          style={{
            scaleY: bgTopScaleY,
          }}

          className="
          absolute
          inset-0

          w-full
          h-full

          object-cover

          origin-top
          "
        />

        {/* SECOND BG */}

        <img
          src={f4}
          alt=""

          className="
          absolute
          inset-0

          w-full
          h-full

          object-cover

          opacity-50
          "
        />

      </motion.div>

      {/* OVERLAY */}

      <div
        className="
absolute
inset-0

bg-gradient-to-r

from-[#12003f]/40
via-transparent
to-[#12003f]/40
"
      />

      {/* CONTENT */}

      <div
        className="
        relative
        z-20

        max-w-[1500px]

        mx-auto

        py-12
        lg:py-0

        w-full
        "
      >

        <div
          className="
          grid
          grid-cols-1
          lg:grid-cols-2
          xl:grid-cols-[1.1fr_0.8fr_1fr]
          gap-6
          sm:gap-8
          md:gap-8
          lg:gap-12
          xl:gap-16

          items-center
          "
        >

          {/* LEFT */}

          <div className="w-full min-w-0 text-center lg:text-left">

            <span
              className="
              inline-block

              px-5
              py-1.5

              rounded-full

              bg-white

              text-[#8e3fff]

              font-semibold
              text-sm
              "
            >
              WHY CHOOSE US
            </span>

            <h2
              className="
             mt-4

              text-white

              font-black

              leading-[1.1]

              text-[32px]
              sm:text-[44px]
              lg:text-[48px]
              xl:text-[64px]
              "
            >
              Your Challenges,
              <br />
              Our Digital Solutions
            </h2>

            <p
              className="
              mt-6

              text-white/80

              text-base
              sm:text-[18px]
              lg:text-[20px]

              leading-relaxed
              max-w-[550px]
              mx-auto
              lg:mx-0
              "
            >
              We combine years of expertise with advanced software
              development and AI automation to deliver innovative, secure,
              and scalable technology.
            </p>

            <div
              className="
              mt-8

              flex
              items-center
              justify-center
              lg:justify-start
              "
            >

              <button
                className="
                h-[54px]
                sm:h-[64px]
                lg:h-[72px]

                px-8
                sm:px-10

                rounded-full

                border

                border-purple-500

                text-white

                text-lg
                sm:text-xl
                "
              >
                Get Quote
              </button>

              <button
                className="
                -ml-5

                w-[54px]
                h-[54px]
                sm:w-[64px]
                sm:h-[64px]
                lg:w-[72px]
                lg:h-[72px]

                rounded-full

                bg-[#bf6dff]

                text-white

                text-[22px]
                sm:text-[28px]
                "
              >
                ↗
              </button>

            </div>

          </div>

          {/* CENTER - Hidden on small laptops to save space, or kept on XL */}

          <motion.div
            style={{
              y: womanY,
              opacity: womanOpacity,
            }}

            className="
relative
min-w-0

hidden
xl:flex

justify-center

items-end

h-[500px]
xl:h-[600px]
"
          >

            <img
              src={woman}
              alt=""

              className="
relative

z-20

w-full
max-w-[450px]

mt-auto

object-contain

self-end
"
            />

          </motion.div>
          {/* RIGHT */}

          <div
            className="
            w-full
            min-w-0

            space-y-6
            lg:space-y-8
"
          >

            {features.map((item) => (

              <div
                key={item.title}

                className="
flex
gap-4

items-start
"
              >

                <div
                  className="
w-4
h-4

rounded-full

border-2
border-cyan-400

mt-2

shrink-0
"
                />

                <div className="flex-1 min-w-0">

                  <h3
                    className="
text-white

font-bold

text-[18px]
lg:text-[22px]

leading-[1.2]
"
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
mt-2

text-white/85

text-sm
lg:text-[16px]

leading-[1.6]
"
                  >
                    {item.desc}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}
