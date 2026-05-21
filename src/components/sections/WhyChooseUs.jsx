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

      min-h-[95vh]

      flex
      items-center

      px-10
      sm:px-20
      lg:px-32
      xl:px-48
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

        max-w-[1600px]

        mx-auto

        py-16
        lg:py-20

        w-full
        "
      >

        <div
          className="
          grid

        lg:grid-cols-[1.1fr_1fr_1fr]
        gap-12
        lg:gap-20

          items-center
          "
        >

          {/* LEFT */}

          <div className="w-full min-w-0 text-center lg:text-left">

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

              leading-[1.1]

              text-[34px]
              sm:text-[48px]
              lg:text-[54px]
              xl:text-[64px]
              "
            >
              Your Challenges,
              <br />
              Our Digital Solutions
            </h2>

            <p
              className="
              mt-8

              text-white/80

              text-lg
              sm:text-[20px]
              lg:text-[22px]

              leading-relaxed
              "
            >
              We combine years of expertise with advanced software
              development and AI automation to deliver innovative, secure,
              and scalable technology. From custom apps to the Mitra Suite,
              we help businesses worldwide achieve efficiency, growth, and
              measurable success.
            </p>

            <div
              className="
              mt-8
              lg:mt-16

              flex
              items-center
              justify-center
              lg:justify-start
              "
            >

              <button
                className="
                h-[58px]
                sm:h-[70px]
                lg:h-[80px]

                px-8
                sm:px-10
                lg:px-12

                rounded-full

                border

                border-purple-500

                text-white

                text-lg
                sm:text-2xl
                lg:text-[24px]
                "
              >
                Get Quote
              </button>

              <button
                className="
                -ml-5

                w-[58px]
                h-[58px]
                sm:w-[70px]
                sm:h-[70px]
                lg:w-[80px]
                lg:h-[80px]

                rounded-full

                bg-[#bf6dff]

                text-white

                text-[26px]
                lg:text-[32px]
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
min-w-0

flex

justify-center

items-end

pt-10
lg:pt-20

h-[380px]
lg:h-[520px]
xl:h-[650px]
"
          >

            <img
              src={woman}
              alt=""

              className="
relative

z-20

w-full
max-w-[380px]
lg:max-w-[450px]
xl:max-w-[600px]

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
            lg:pl-5

            space-y-8
            lg:space-y-12
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

                <div className="flex-1 min-w-0">

                  <h3
                    className="
text-white

font-bold

text-[20px]
lg:text-[24px]

leading-[1.2]
"
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
mt-3

text-white/85

text-base
lg:text-[17px]

leading-[1.8]
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
