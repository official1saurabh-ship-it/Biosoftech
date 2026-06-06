import woman from "../../assets/whychooseus-woman.webp";
import bg from "../../assets/whychooseus-bg-pattern.webp";
import f4 from "../../assets/whychooseus-floating-element.webp";

import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";

import { useRef } from "react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } =
    useScroll({
      target: sectionRef,

      offset: [
        "start end",
        "end start",
      ],
    });

  const shouldAnimate = !prefersReducedMotion;

  const bgTopScaleY =
    useTransform(
      scrollYProgress,
      [0.60, 0.90],
      [1, 0]
    );

  const womanY =
    useTransform(
      scrollYProgress,
      [0.68, 0.84],
      [0, 700]
    );

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

      min-h-[550px]
      lg:min-h-[700px]

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
          alt="Decorative background pattern for why choose us section"
          width="1920"
          height="1080"

          style={{
            scaleY: shouldAnimate ? bgTopScaleY : 1,
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
          alt="Decorative floating element overlay for why choose us background"
          width="1920"
          height="1080"

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

        max-w-full

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

          items-stretch
          "
        >

          {/* LEFT */}

          <div className="w-full min-w-0 text-center lg:text-left self-center">

            <span
              className="
              inline-block

              px-5
              py-1.5

              rounded-full

              bg-white

              text-[#8e3fff]

              font-semibold
              text-3xl
              "
            >
              WHY CHOOSE US
            </span>

            <h2
              className="
             mt-6

              text-white

              font-black

              leading-[1.1]

              text-[32px]
              sm:text-[40px]
              lg:text-[44px]
              xl:text-[52px]
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
              and scalable technology. From custom apps to the Mitra Suite,
              we help businesses worldwide achieve efficiency, growth, and
              measurable success.
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
                onClick={() => navigate("/contact")}
                className="
                h-[48px]
                sm:h-[60px]

                px-6
                sm:px-8

                rounded-full

                border

                border-purple-500

                text-white

                text-fluid-lg
                "
              >
                Get Quote
              </button>

              <button
                onClick={() => navigate("/contact")}
                aria-label="Get Quote"
                className="
                -ml-4

                w-[48px]
                h-[48px]
                sm:w-[60px]
                sm:h-[60px]

                rounded-full

                bg-[#bf6dff]

                text-white

                text-lg
                "
              >
                ↗
              </button>

            </div>

          </div>

          <motion.div
            style={{
              y: shouldAnimate ? womanY : 0,
              opacity: shouldAnimate ? womanOpacity : 1,
            }}

            className="
              relative
              min-w-0

              hidden
              xl:flex

              justify-center

              items-end
              self-stretch
            "
          >

            <img
              src={woman}
              alt="Woman in a black suit holding a silver notebook, next to a list of advantages like 'Cost-Effective Technology' and '24x7 Technical Support'"
              width="450"
              height="600"

              className="
                relative

                z-20

                w-full
                max-w-[380px]
                h-[550px]
                xl:h-[700px]

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
            self-center

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
lg:text-[20px]

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
lg:text-[15px]

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
