import performanceImg from "../../assets/home-performance-stats.webp";

export default function PerformanceSection() {
  return (
    <section className="relative overflow-hidden bg-[#8a42db]">

      {/* Vertical CTA */}
      <a
        href="/contact"
        className="
        absolute
        right-0
        top-1/2
        -translate-y-1/2
        rotate-180
        bg-[#7b14d4]
        py-4
        sm:py-5
        px-3
        rounded-l-xl
        text-[10px]
        sm:text-xs
        font-medium
        z-20
        hidden
        sm:block
        hover:bg-[#6b11ba]
        transition-colors
      "
        style={{
          writingMode: "vertical-rl",
        }}
      >
        Book a Free Consultation
      </a>

      <div className="max-w-full mx-auto px-4 sm:px-8 lg:px-20 py-10 sm:py-14 lg:py-20">

        <div className="grid lg:grid-cols-2 gap-10 md:gap-8 lg:gap-16 items-center">

          {/* LEFT */}

          <div className="text-white">

            <p className="text-2xl font-semibold mb-6">
              We Measure Our Performance
            </p>

            <h2
              className="
              text-[24px]
              sm:text-[30px]
              md:text-[36px]
              lg:text-[42px]
              xl:text-[48px]
              leading-[1.05]
              font-black
              max-w-[620px]
            "
            >
              Smart Software Means Real Results
            </h2>

            <p
              className="
              mt-8
              text-2xl
              leading-[1.7]
              max-w-[620px]
              opacity-90
            "
            >
              Start working with our technology experts who deliver
              measurable outcomes for your business. We focus on efficiency,
              automation, and growth through digital solutions that truly make
              an impact.
            </p>

            {/* Stats */}

            <div className="flex gap-10 sm:gap-14 lg:gap-20 mt-12 lg:mt-16 flex-wrap">

              <div>
                <span className="text-[28px] sm:text-[34px] md:text-[42px] lg:text-[50px] font-black">
                  30+
                </span>

                <p className="text-sm sm:text-base lg:text-[18px] mt-2">
                  Projects Delivered
                </p>
              </div>

              <div>
                <span className="text-[28px] sm:text-[34px] md:text-[42px] lg:text-[50px] font-black">
                  50+
                </span>

                <p className="text-sm sm:text-base lg:text-[18px] mt-2">
                  Clients Served
                </p>
              </div>

              <div>
                <span className="text-[28px] sm:text-[34px] md:text-[42px] lg:text-[50px] font-black">
                  80%
                </span>

                <p className="text-sm sm:text-base lg:text-[18px] mt-2">
                  Productivity Boost
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div
            className="
            flex
            justify-center
            items-center
            py-4
            lg:py-10
          "
          >

            <img
              src={performanceImg}
              alt="Biosoftech performance metrics and dashboard analytics visualization"
              width="650"
              height="400"
              className="
              w-[550px]
              max-w-full
              object-contain
            "
            />

          </div>

        </div>

      </div>

    </section>
  );
}
