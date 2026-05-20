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
    title: "Pocket-Friendly",
    desc:
      "We help our clients target with precision and invest only in what they need.",
  },

  {
    title: "Team Of Experts",
    desc:
      "Connect with professionals having years of experience in the sector.",
  },

  {
    title: "24x7 Client Support",
    desc:
      "We are always here to resolve queries and welcome your feedback.",
  },

  {
    title: "Customized Strategies",
    desc:
      "We offer tailored marketing plans designed to align with goals.",
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

      min-h-[90vh]

      flex
      items-center
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

        max-w-[1650px]

        mx-auto

        px-16
py-8

        w-full
        "
      >

        <div
          className="
          grid

        lg:grid-cols-[0.9fr_780px_1.15fr]

          items-center
          "
        >

          {/* LEFT */}

          <div>

            <span
              className="
              inline-block

              px-6
              py-2

              rounded-full

              bg-white

              text-[#8e3fff]

              font-semibold
              "
            >
              WHY CHOOSE US
            </span>

            <h2
              className="
             mt-5

              text-white

              font-black

              leading-[1]

              text-[72px]
              "
            >
              Your Challenges
              <br />
              Our Resolutions
            </h2>

            <p
              className="
              mt-8

              text-white/80

              text-[26px]

              leading-relaxed

              max-w-[620px]
              "
            >
              We blend our expertise
              with cutting-edge
              business marketing
              technologies.
            </p>

            <div
              className="
              mt-16

              flex
              items-center
              "
            >

              <button
                className="
                h-[84px]

                px-14

                rounded-full

                border

                border-purple-500

                text-white

                text-[28px]
                "
              >
                Get Quote
              </button>

              <button
                className="
                -ml-5

                w-[84px]
                h-[84px]

                rounded-full

                bg-[#bf6dff]

                text-white

                text-[36px]
                "
              >
                ↗
              </button>

            </div>

          </div>

          {/* CENTER */}

          <motion.div
            style={{
              y: womanY,
              opacity: womanOpacity,
            }}

            className="
relative

flex

justify-center

items-end

pt-20

h-[700px]
"
          >

            <img
              src={woman}
              alt=""

              className="
relative

z-20

w-[760px]

mt-auto

object-contain

self-end
"
            />

          </motion.div>
          {/* RIGHT */}

          <div
            className="
pl-10

min-w-[420px]

max-w-[520px]

space-y-12
"
          >

            {features.map((item) => (

              <div
                key={item.title}

                className="
flex
gap-5

items-start
"
              >

                <div
                  className="
w-5
h-5

rounded-full

border-2
border-cyan-400

mt-3

shrink-0
"
                />

                <div className="flex-1">

                  <h3
                    className="
text-white

font-bold

text-[26px]

leading-[1.2]

whitespace-nowrap
"
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
mt-3

text-white/85

text-[18px]

leading-[1.8]

max-w-[450px]
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