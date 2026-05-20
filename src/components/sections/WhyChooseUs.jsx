import woman from "../../assets/bg-img1-2.png"; // center image
import bg from "../../assets/GR_21-BG.png"; // purple line background

const features = [
  {
    title: "Pocket-Friendly",
    desc: "We help our clients target with precision and invest only in what they need.",
  },
  {
    title: "Team Of Experts",
    desc: "Connect with professionals having years of experience in the sector.",
  },
  {
    title: "24x7 Client Support",
    desc: "We are always here to resolve queries and welcome your feedback.",
  },
  {
    title: "Customized Strategies",
    desc: "We offer tailored marketing plans designed to align with goals.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="
      relative
      overflow-hidden
      bg-[#12003f]
      min-h-screen
      flex
      items-center
      "
    >
      {/* Background */}
      <img
        src={bg}
        alt=""
        className="
        absolute
        inset-0
        w-full
        h-full
        object-cover
        opacity-80
        "
      />

      {/* Overlay */}
      <div
        className="
        absolute
        inset-0
        bg-gradient-to-r
        from-[#150047]/90
        via-[#1a0054]/60
        to-[#12003f]/90
        "
      />

      <div
        className="
        relative
        z-20
        max-w-[1600px]
        mx-auto
        px-16
        py-24
        w-full
        "
      >
        <div className="grid lg:grid-cols-[1fr_700px_1fr] items-center">

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
              text-sm
              tracking-wide
              "
            >
              WHY CHOOSE US
            </span>

            <h2
              className="
              mt-8
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
              We blend our expertise with cutting-edge business
              marketing technologies to offer innovative advertising,
              integrated design, and web development solutions for
              clients worldwide.
            </p>

            {/* Button */}
            <div className="mt-16 flex items-center">

              <button
                className="
                h-[84px]
                px-14
                rounded-full
                border
                border-purple-500
                text-white
                text-[28px]
                font-medium
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
          <div
            className="
            relative
            flex
            justify-center
            "
          >
            <img
              src={woman}
              alt=""
              className="
              relative
              z-20
              w-[700px]
              object-contain
              "
            />

            {/* glow */}
            <div
              className="
              absolute
              bottom-20
              w-[520px]
              h-[220px]
              bg-purple-700/40
              blur-[120px]
              rounded-full
              "
            />
          </div>

          {/* RIGHT */}
          <div className="space-y-16">

            {features.map((item) => (
              <div key={item.title}>

                <div className="flex gap-4">

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

                  <div>

                    <h3
                      className="
                      text-white
                      font-bold
                      text-[40px]
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                      text-white/75
                      mt-4
                      text-[24px]
                      leading-relaxed
                      max-w-[450px]
                      "
                    >
                      {item.desc}
                    </p>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}