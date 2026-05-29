import performanceImg from "../../assets/performance.webp";

export default function PerformanceSection() {
  return (
    <section className="relative overflow-hidden bg-[#8a42db]">

      {/* Vertical CTA */}
      <div
        className="
        absolute
        right-0
        top-1/2
        -translate-y-1/2
        rotate-180
        bg-[#7b14d4]
        text-white
        px-3
        py-5
        rounded-l-xl
        text-xs
        font-medium
        z-20
      "
        style={{
          writingMode: "vertical-rl",
        }}
      >
        Book a Free Consultation
      </div>

      <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-20 py-16 lg:py-24">

        <div className="grid lg:grid-cols-2 gap-10 md:gap-6 lg:gap-20 items-center">

          {/* LEFT */}

          <div className="text-white">

            <p className="text-[16px] font-semibold mb-5">
              We Measure Our Performance
            </p>

            <h2
              className="
              text-[34px]
              sm:text-[42px]
              lg:text-[52px]
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
              text-base
              sm:text-[20px]
              leading-[1.8]
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

            <div className="flex gap-8 sm:gap-12 lg:gap-16 mt-10 lg:mt-16 flex-wrap">

              <div>
                <h3 className="text-[38px] sm:text-[48px] lg:text-[56px] font-black">
                  200+
                </h3>

                <p className="text-base sm:text-[22px]">
                  Projects Delivered
                </p>
              </div>

              <div>
                <h3 className="text-[38px] sm:text-[48px] lg:text-[56px] font-black">
                  500+
                </h3>

                <p className="text-base sm:text-[22px]">
                  Clients Served
                </p>
              </div>

              <div>
                <h3 className="text-[38px] sm:text-[48px] lg:text-[56px] font-black">
                  80%
                </h3>

                <p className="text-base sm:text-[22px]">
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
              alt="Performance"
              className="
              w-[650px]
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
