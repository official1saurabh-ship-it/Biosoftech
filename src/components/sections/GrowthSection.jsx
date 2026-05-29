import { ArrowUpRight } from "lucide-react";

const WEBSITE_URL = "https://www.biosoftech.com";
const TRUSTPILOT_URL = "https://www.trustpilot.com/review/biosoftech.com";

export default function GrowthSection() {
    return (
        <section className="bg-[#f5f5f5] min-h-[90vh] overflow-hidden">

            <div className="max-w-[1800px] h-full mx-auto px-5 sm:px-8 py-12 lg:py-8">

                {/* Heading */}

                <h2
                    className="
          text-center
          text-[28px]
          sm:text-[34px]
          lg:text-[42px]
          leading-[1.2]
          font-light
          text-black
          mb-8
        "
                >
                    AI-Driven Software Development Company
                    <br />
                    for Digital Growth
                </h2>

                {/* GRID */}

                <div className="grid grid-cols-12 gap-5 lg:h-[calc(100%-120px)]">

                    {/* LEFT */}

                    <div
                        className="
            col-span-12
            lg:col-span-5

            rounded-[28px]
            lg:rounded-[40px]

            bg-gradient-to-br
            from-[#ffb100]
            via-[#ffc600]
            to-[#ffe600]

            p-6
            lg:p-8

            relative

            h-auto
            lg:h-full
            "
                    >

                        <h3
                            className="
              text-[34px]
              sm:text-[42px]
              lg:text-[48px]
              font-medium
              leading-[1.05]
              mb-6
            "
                        >
                            AI-Driven Software
                            <br />
                            Development Company
                        </h3>

                        <div
                            className="
              space-y-5
              text-base
              lg:text-[18px]
              leading-[1.8]
            "
                        >
                            <p>
                                We deliver AI-powered software solutions that
                                help businesses streamline operations, automate
                                workflows, and achieve measurable digital growth.
                            </p>

                            <p>
                                Our focus is on building sustainable technology
                                through ethical practices, data-driven
                                strategies, and user-friendly design.
                            </p>

                            <p>
                                With 1,000+ successful projects, 500+
                                satisfied clients, and a proven track record of
                                innovation, Biosoftech Solutions has established
                                itself as a trusted digital transformation
                                partner for organizations worldwide.
                            </p>

                            <p>
                                Trusted worldwide.
                            </p>
                        </div>

                        <a
                            href={WEBSITE_URL}
                            target="_blank"
                            rel="noreferrer"
                            className="
              mt-8

              px-6
              py-3

              border-2
              border-black

              rounded-full

              text-lg
            "
                        >
                            Discover More
                        </a>

                        {/* ARROW */}

                        <a
                            href={WEBSITE_URL}
                            target="_blank"
                            rel="noreferrer"
                            className="
              group

              absolute
              bottom-0
              right-0

              translate-x-[35%]
              md:translate-x-[25%]
              translate-y-[-10%]
              md:translate-y-[-5%]

              w-[72px]
              h-[72px]
              lg:w-[100px]
              lg:h-[100px]

              rounded-[28px]

              bg-black

              flex
              items-center
              justify-center

              cursor-pointer
              "
                        >
                            <ArrowUpRight
                                size={42}
                                color="white"
                                className="
                transition-all
                duration-500
                ease-out
                group-hover:rotate-45
                "
                            />
                        </a>

                    </div>

                    {/* CENTER */}

                    <div
                        className="
            col-span-12
            lg:col-span-4

            flex
            flex-col
            gap-5

            h-auto
            lg:h-full
            "
                    >

                        <div
                            className="
              rounded-[28px]
              lg:rounded-[40px]

              bg-gradient-to-br
              from-[#c7f0ff]
              via-[#ececec]
              to-[#ffd5c8]

              p-6
              lg:p-8

              flex-1
            "
                        >

                            <h3 className="text-[46px] lg:text-[64px] leading-none">
                                1,000+
                            </h3>

                            <p className="mt-4 text-base lg:text-[18px] leading-[1.7]">
                                Over 1,000 successful implementations across
                                custom software, AI automation, and enterprise
                                solutions.
                            </p>

                        </div>

                        <div
                            className="
              rounded-[28px]
              lg:rounded-[40px]

              p-6
              lg:p-8

              text-white

              flex-1

              bg-gradient-to-br
              from-[#ff4b8b]
              via-[#ff7c9b]
              to-[#ffc95d]
            "
                        >

                            <h3 className="text-[46px] lg:text-[64px] leading-none">
                                500+
                            </h3>

                            <p className="mt-4 text-base lg:text-[18px] leading-[1.7]">
                                Our clients trust us for consistent results,
                                transparent processes, and long-term
                                partnerships built on performance.
                            </p>

                        </div>

                    </div>

                    {/* RIGHT */}

                    <div
                        className="
            col-span-12
            lg:col-span-3

            rounded-[28px]
            lg:rounded-[40px]

            bg-[#dfdfdf]

            p-6
            lg:p-8

            relative

            min-h-[460px]
            sm:min-h-[300px]
            md:min-h-[400px]
            lg:h-full
          "
                    >

                        <div className="flex mb-6">

                            {[
                                "🇺🇸",
                                "🇬🇧",
                                "🇫🇷",
                                "🇦🇺",
                                "🇦🇪",
                            ].map((flag) => (
                                <div
                                    key={flag}
                                    className="
                  w-12
                  h-12

                  rounded-full

                  bg-white

                  flex
                  items-center
                  justify-center

                  text-[22px]

                  -ml-2
                "
                                >
                                    {flag}
                                </div>
                            ))}

                        </div>

                        <h3
                            className="
              text-[32px]
              lg:text-[42px]
              leading-[1.1]
              mb-6
            "
                        >
                            Trusted
                            <br />
                            Worldwide
                        </h3>

                        <p
                            className="
              text-base
              lg:text-[18px]
              leading-[1.8]
            "
                        >
                            Recognized globally for digital growth, with over a
                            decade of expertise in competitive industries like
                            healthcare, real estate, hospitality, and corporate
                            offices.
                        </p>

                        <a
                            href={TRUSTPILOT_URL}
                            target="_blank"
                            rel="noreferrer"
                            className="
              absolute
              bottom-8

              border-2
              border-black

              rounded-full

              px-6
              py-3
            "
                        >
                            Our Reviews
                        </a>

                        {/* ARROW */}

                        <a
                            href={TRUSTPILOT_URL}
                            target="_blank"
                            rel="noreferrer"
                            className="
              group

              absolute
              top-0
              right-0

              translate-x-[25%]
              md:translate-x-[15%]

              w-[66px]
              h-[66px]
              lg:w-[90px]
              lg:h-[90px]

              rounded-[24px]

              bg-black

              flex
              items-center
              justify-center

              cursor-pointer
              "
                        >
                            <ArrowUpRight
                                size={40}
                                color="white"
                                className="
                transition-all
                duration-500
                ease-out
                group-hover:rotate-45
                "
                            />
                        </a>

                    </div>

                </div>

            </div>

        </section>
    );
}
