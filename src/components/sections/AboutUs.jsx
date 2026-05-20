import {
  Phone,
  CircleCheckBig,
} from "lucide-react";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import { useRef } from "react";

import teamwork from "../../assets/TeamWork.png";
import R2 from "../../assets/R2.png";
import Innovtion from "../../assets/Innovation.png";

export default function AboutUs() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, .3, .7, 1],
    [800, 250, -250, -800]
  );

  const rightY = useTransform(
    scrollYProgress,
    [0, .3, .7, 1],
    [600, 180, -180, -600]
  );

  const titleY = useTransform(
    scrollYProgress,
    [0, .3, .7, 1],
    [400, 120, -120, -400]
  );

  const contentY = useTransform(
    scrollYProgress,
    [0, .3, .7, 1],
    [300, 90, -90, -300]
  );

  const phoneY = useTransform(
    scrollYProgress,
    [0, .3, .7, 1],
    [220, 60, -60, -220]
  );

  return (
    <section
      ref={sectionRef}
      className="bg-[#f8f4fc] overflow-hidden py-[15px]"
    >

      <div className="max-w-[1650px] mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <motion.div
            style={{
              y: imageY,
              willChange: "transform",
            }}
            className="relative pr-[120px]"
          >

            {/* FIXED */}

            <div className="grid grid-cols-[1fr_320px] gap-10">

              <div className="space-y-6">

                <motion.div
                  style={{
                    y: rightY,
                  }}
                  className="
    relative
    rounded-[26px]
    overflow-hidden
    bg-white
    h-[300px]
  "
                >

                  <img
                    src={teamwork}
                    alt=""
                    className="
      absolute
      inset-0
      w-full
      h-full
      object-cover
    "
                  />

                </motion.div>
                <motion.div
                  style={{
                    y: contentY,
                  }}
                  className="relative h-[360px]"
                >

                  <img
                    src={R2}
                    alt=""
                    className="w-full h-full object-contain"
                  />

                </motion.div>

              </div>

              {/* BULB */}

              <motion.div
                style={{
                  y: titleY,
                }}
                className="relative"
              >

                {/* FIX */}

                <div
                  className="
                  rounded-[30px]
                  overflow-hidden
                  h-[700px]
                  w-[320px]
                  relative
                "
                >

                  <img
                    src={Innovtion}
                    alt=""
                    className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-contain
                  "
                  />

                </div>

                {/* BADGE */}

                <div
                  className="
                  absolute
                  right-[-90px]
                  top-1/2
                  -translate-y-1/2
                "
                >

                  <div
                    className="
                    bg-purple-500
                    rounded-full
                    h-[460px]
                    w-[90px]
                    text-white
                    flex
                    items-center
                    justify-center
                  "
                  >

                    <div
                      className="
                      rotate-90
                      whitespace-nowrap
                      font-bold
                      text-2xl
                    "
                    >
                      10+ Years Of Excellence
                    </div>

                  </div>

                </div>

              </motion.div>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            style={{
              y: rightY,
            }}
          >

            <div className="inline-flex bg-[#efe3ff] rounded-full px-5 py-2 text-purple-600 text-sm font-semibold">
              ABOUT US
            </div>

            <motion.h1
              style={{
                y: titleY,
              }}
              className="mt-5 text-[75px] leading-[1.05] font-black text-[#06031b]"
            >
              Full-Service Digital
              <br />
              Marketing Agency
              <br />
              For Online Success
            </motion.h1>

            <motion.p
              style={{
                y: contentY,
              }}
              className="mt-6 text-[#5b5b69] text-[30px]"
            >
              We are a leading digital marketing agency known for innovation
              and productivity for more than ten years.
            </motion.p>

            <motion.div
              style={{
                y: phoneY,
              }}
              className="mt-10 flex gap-5 items-center"
            >

              <div className="w-24 h-24 rounded-full border-2 border-orange-400 flex items-center justify-center">

                <Phone className="text-orange-500" />

              </div>

              <div>

                <div className="text-6xl font-black">
                  962-175-8356
                </div>

                <div className="text-purple-500 text-xl">
                  Have Any Query?
                </div>

              </div>

            </motion.div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}