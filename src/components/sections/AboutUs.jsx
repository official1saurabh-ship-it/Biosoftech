import {
  Phone,
  CircleCheckBig,
} from "lucide-react";

import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";

import { useEffect, useRef, useState } from "react";

import teamwork from "../../assets/aboutus-teamwork.webp";
import R2 from "../../assets/aboutus-stat-illustration.webp";
import Innovation from "../../assets/aboutus-innovation.webp";

export default function AboutUs() {
  const sectionRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const handleChange = () => setIsDesktop(mediaQuery.matches);

    handleChange();
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const shouldAnimate = isDesktop && !prefersReducedMotion;

  const scrollFactor = useTransform(
    scrollYProgress,
    [0, .3, .7, 1],
    [1, 0.3, -0.3, -1]
  );

  const rotateFactor = useTransform(scrollYProgress, [0, 1], [-1, 1]);

  const imageY = useTransform(scrollFactor, v => v * 800);
  const rightY = useTransform(scrollFactor, v => v * 600);
  const titleY = useTransform(scrollFactor, v => v * 400);
  const contentY = useTransform(scrollFactor, v => v * 300);
  const phoneY = useTransform(scrollFactor, v => v * 220);
  const teamworkRotate = useTransform(rotateFactor, v => v * 4);
  const r2Rotate = useTransform(rotateFactor, v => v * 3);
  const innovationRotate = useTransform(rotateFactor, v => v * 6);

  return (
    <section
      ref={sectionRef}
      className="bg-[#f8f4fc] overflow-hidden min-h-0 lg:min-h-[80vh] py-12 sm:py-16 lg:py-0"
    >

      <div className="max-w-[1650px] mx-auto px-4 sm:px-6 lg:px-6">

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-6 lg:gap-20 items-center">

          {/* LEFT - hidden on small screens */}
          <motion.div
            style={{
              y: shouldAnimate ? imageY : 0,
              willChange: shouldAnimate ? "transform" : "auto",
            }}
            className="relative pr-0 lg:pr-[120px] hidden lg:block"
          >
            <div className="grid grid-cols-[1fr_220px] xl:grid-cols-[1fr_320px] gap-6 xl:gap-10">
              <div className="space-y-6">
                <motion.div
                  style={{
                    y: shouldAnimate ? rightY : 0,
                    rotate: shouldAnimate ? teamworkRotate : 0,
                  }}
                  className="relative rounded-[26px] overflow-hidden bg-white h-[220px] xl:h-[300px]"
                >
                  <img src={teamwork} alt="Biosoftech team collaborating on a software development project" width="1920" height="1080" className="absolute inset-0 w-full h-full object-cover" />
                </motion.div>
                <motion.div
                  style={{
                    y: shouldAnimate ? contentY : 0,
                    rotate: shouldAnimate ? r2Rotate : 0,
                  }}
                  className="relative h-[260px] xl:h-[360px]"
                >
                  <img src={R2} alt="Biosoftech company statistics and growth metrics illustration" width="400" height="300" className="w-full h-full object-contain" />
                </motion.div>
              </div>
              <motion.div
                style={{
                  y: shouldAnimate ? titleY : 0,
                  rotate: shouldAnimate ? innovationRotate : 0,
                }}
                className="relative"
              >
                <div className="rounded-[30px] overflow-hidden h-[520px] xl:h-[700px] w-[220px] xl:w-[320px] relative">
                  <img src={Innovation} alt="Biosoftech innovation and technology concept illustration" width="320" height="700" className="absolute inset-0 w-full h-full object-contain" />
                </div>
                <div className="absolute right-[-55px] xl:right-[-90px] top-1/2 -translate-y-1/2">
                  <div className="bg-purple-500 rounded-full h-[340px] xl:h-[460px] w-[70px] xl:w-[90px] text-white flex items-center justify-center">
                    <div className="rotate-90 whitespace-nowrap font-bold text-lg xl:text-2xl">
                      2+ Years Of Excellence
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            style={{
              y: shouldAnimate ? rightY : 0,
            }}
          >

            <div className="inline-flex bg-[#efe3ff] rounded-full px-5 py-2 text-purple-600 text-sm font-semibold">
              ABOUT US
            </div>

            <motion.h2
              style={{
                y: shouldAnimate ? titleY : 0,
              }}
              className="mt-4 sm:mt-5 text-[28px] sm:text-[48px] lg:text-[54px] xl:text-[64px] 2xl:text-[75px] leading-[1.05] font-black text-[#06031b]"
            >
              Full-Service Software
              <br />
              Development Company
              <br />
              For Digital Growth
            </motion.h2>

            <motion.p
              style={{
                y: shouldAnimate ? contentY : 0,
              }}
              className="mt-4 sm:mt-6 text-[#5b5b69] text-base sm:text-xl lg:text-[22px] xl:text-[30px] leading-relaxed"
            >
              We are a leading technology partner delivering innovation and
              efficiency for more than a decade. Our team specializes in
              custom software development, mobile apps, and AI-powered
              solutions — offering everything under one roof.
            </motion.p>

            <motion.div
              style={{
                y: shouldAnimate ? phoneY : 0,
              }}
              className="mt-4 sm:mt-6 space-y-2"
            >
              <div className="flex items-center gap-3 text-fluid-xl font-bold text-purple-600">
                <CircleCheckBig size={24} className="text-green-500" />
                Fast Results, Smart Solutions!
              </div>
              <div className="flex items-center gap-3 text-fluid-xl font-bold text-purple-600">
                <CircleCheckBig size={24} className="text-green-500" />
                Achieve Your Business Goals!
              </div>
            </motion.div>

            <motion.div
              style={{
                y: shouldAnimate ? phoneY : 0,
              }}
              className="mt-6 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-5 items-start sm:items-center"
            >

              <div className="w-12 h-12 sm:w-16 sm:h-16 xl:w-24 xl:h-24 rounded-full border-2 border-orange-400 flex items-center justify-center shrink-0">

                <Phone className="text-orange-500 w-5 h-5 sm:w-6 sm:h-6" />

              </div>

              <div>

                <div className="text-fluid-2xl font-black leading-tight">
                  +91-9044425858
                </div>
                <div className="text-fluid-2xl font-black leading-tight">
                  +91-6209688930
                </div>

                <div className="text-purple-500 text-fluid-lg">
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
