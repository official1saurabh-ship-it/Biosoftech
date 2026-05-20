import performanceImg from "../../assets/preformance.webp";

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

      <div className="max-w-[1500px] mx-auto px-20 py-24">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <div className="text-white">

            <p className="text-[16px] font-semibold mb-5">
              We Measure Our Performance
            </p>

            <h2
              className="
              text-[52px]
              leading-[1.05]
              font-black
              max-w-[620px]
            "
            >
              Digital Marketing means Digital Results
            </h2>

            <p
              className="
              mt-8
              text-[20px]
              leading-[1.8]
              max-w-[620px]
              opacity-90
            "
            >
              Start working with our digital marketing experts
              that can provide measurable outcomes and
              business growth.
            </p>

            {/* Stats */}

            <div className="flex gap-16 mt-16 flex-wrap">

              <div>
                <h3 className="text-[56px] font-black">
                  200+
                </h3>

                <p className="text-[22px]">
                  Leads
                </p>
              </div>

              <div>
                <h3 className="text-[56px] font-black">
                  674+
                </h3>

                <p className="text-[22px]">
                  Likes
                </p>
              </div>

              <div>
                <h3 className="text-[56px] font-black">
                  76%
                </h3>

                <p className="text-[22px]">
                  Social Reach
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
            py-10
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