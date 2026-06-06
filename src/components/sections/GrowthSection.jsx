import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const WEBSITE_URL = "https://www.biosoftech.com";
const TRUSTPILOT_URL = "https://www.trustpilot.com/review/biosoftech.com";

export default function GrowthSection() {
    return (
        <section className="bg-[#f5f5f5] overflow-hidden">

            <div className="max-w-full h-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-6">

                {/* Heading */}

                <h2
                    className="
          text-center
          text-[22px]
          sm:text-[26px]
          lg:text-[30px]
          xl:text-[34px]
          leading-[1.2]
          font-light
          text-black
          mb-6
        "
                >
                    AI-Driven Software Development Company
                    <br />
                    for Digital Growth
                </h2>

                {/* GRID */}

                <div className="grid grid-cols-12 gap-4 lg:gap-5 ">

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

            p-5
            lg:p-6

            relative

            h-auto
            lg:h-full
            "
                    >

                        <h3
                            className="
              text-[26px]
              sm:text-[30px]
              lg:text-[34px]
              xl:text-[38px]
              font-medium
              leading-[1.05]
              mb-4
            "
                        >
                            AI-Driven Software
                            <br />
                            Development Company
                        </h3>

                        <div
                            className="
              space-y-3
              sm:space-y-3
              text-sm
              lg:text-[15px]
              leading-[1.6]
              sm:leading-[1.6]
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
                                With 15+ successful projects, 25+
                                satisfied clients, and a proven track record of
                                innovation, Biosoftech Solutions has established
                                itself as a trusted digital transformation
                                partner for organizations worldwide.
                            </p>

                            <p>
                                Trusted worldwide.
                            </p>
                        </div>

                        <Link
                            to="/contact"
                            className="
              group

              mt-6
              sm:mt-5

              inline-flex
              items-center
              gap-2

              px-6
              sm:px-5
              py-3
              sm:py-2

              border-2
              border-black

              rounded-full

              text-sm
              lg:text-base
              font-semibold

              hover:bg-black
              hover:text-white
              transition-all
              duration-300
            "
                        >
                            Discover More
                            <ArrowUpRight
                                size={18}
                                className="
                  transition-transform
                  duration-300
                  group-hover:rotate-45
                "
                            />
                        </Link>

                        {/* ARROW */}

                        <Link
                            to="/contact"
                            aria-label="Discover more about Biosoftech"
                            className="
              group

              absolute
              bottom-0
              right-0

              -bottom-0
              -right-0

              w-[44px]
              sm:w-[56px]
              lg:w-[72px]
              h-[44px]
              sm:h-[56px]
              lg:h-[72px]

              rounded-[14px]
              sm:rounded-[20px]

              bg-black

              flex
              items-center
              justify-center

              cursor-pointer
              "
                        >
                            <ArrowUpRight
                                size={20}
                                color="white"
                                className="sm:w-[30px] sm:h-[30px] transition-all duration-500 ease-out group-hover:rotate-45"
                            />
                        </Link>

                    </div>

                    {/* CENTER */}

                    <div
                        className="
            col-span-12
            lg:col-span-4

            flex
            flex-col
            gap-4

            h-auto
            lg:h-full
            "
                    >

                        <div
                            className="
            rounded-[20px]
              lg:rounded-[28px]

              bg-gradient-to-br
              from-[#c7f0ff]
              via-[#ececec]
              to-[#ffd5c8]

              p-4
              lg:p-5

              flex-1
            ">

                            <h3 className="text-[28px] sm:text-[34px] lg:text-[40px] xl:text-[46px] leading-none">
                                15+
                            </h3>

                            <p className="mt-2 text-sm lg:text-[15px] leading-[1.5]">
                                Over 15 successful implementations across
                                custom software, AI automation, and enterprise
                                solutions.
                            </p>

                        </div>

                        <div
                            className="
            rounded-[20px]
              lg:rounded-[28px]

              p-4
              lg:p-5

              text-white

              flex-1

              bg-gradient-to-br
              from-[#ff4b8b]
              via-[#ff7c9b]
              to-[#ffc95d]
            ">

                            <h3 className="text-[28px] sm:text-[34px] lg:text-[40px] xl:text-[46px] leading-none">
                                25+
                            </h3>

                            <p className="mt-2 text-sm lg:text-[15px] leading-[1.5]">
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

            rounded-[20px]
            lg:rounded-[28px]

            bg-[#dfdfdf]

            p-4
            lg:p-5

            relative

            lg:h-full
          "
                    >

                        <div className="flex mb-3 flex-wrap">

                            {[
                                "🇺🇸",
                                "🇬🇧",
                                "🇫🇷",
                                "🇦🇺",
                                "🇦🇪",
                            ].map((flag, idx) => (
                                <div
                                    key={flag}
                                    className={`
                  w-8 sm:w-10
                  h-8 sm:h-10

                  rounded-full

                  bg-white

                  flex
                  items-center
                  justify-center

                  text-[14px] sm:text-[18px]

                  ${idx > 0 ? '-ml-2 sm:-ml-2' : ''}
                `}
                                >
                                    {flag}
                                </div>
                            ))}

                        </div>

                        <h3
                            className="
              text-[22px]
              sm:text-[26px]
              lg:text-[30px]
              xl:text-[34px]
              leading-[1.1]
              mb-3
            "
                        >
                            Trusted
                            <br />
                            Worldwide
                        </h3>

                        <p
                            className="
              text-sm
              lg:text-[15px]
              leading-[1.6]
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
              relative
              sm:absolute
              bottom-0
              sm:bottom-4
              mt-4
              sm:mt-0

              border-2
              border-black

              rounded-full

              px-5
              py-2
              inline-block
              text-sm
            "
                        >
                            Our Reviews
                        </a>

                        {/* ARROW */}

                        <a
                            href={TRUSTPILOT_URL}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Read our reviews on Trustpilot"
                            className="
              group

              absolute
              top-0
              right-0

              -top-0
              -right-0

              w-[40px]
              sm:w-[50px]
              lg:w-[66px]
              h-[40px]
              sm:h-[50px]
              lg:h-[66px]

              rounded-[14px]
              sm:rounded-[20px]

              bg-black

              flex
              items-center
              justify-center

              cursor-pointer
              "
                        >
                            <ArrowUpRight
                                size={18}
                                className="sm:w-[28px] sm:h-[28px] transition-all duration-500 ease-out group-hover:rotate-45"
                                color="white"
                            />
                        </a>

                    </div>

                </div>

            </div>

        </section>
    );
}
