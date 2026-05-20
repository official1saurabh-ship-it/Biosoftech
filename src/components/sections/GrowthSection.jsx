import { ArrowUpRight } from "lucide-react";

export default function GrowthSection() {
    return (
        <section className="bg-[#f5f5f5] h-[90vh]  overflow-hidden">

            <div className="max-w-[1800px] h-full mx-auto px-8 py-8">

                {/* Heading */}

                <h2
                    className="
          text-center
          text-[42px]
          leading-[1.2]
          font-light
          text-black
          mb-8
        "
                >
                    RankON Technologies: The Digital Growth Engine
                    <br />
                    for Ambitious Brands
                </h2>

                {/* GRID */}

                <div className="grid grid-cols-12 gap-5 h-[calc(100%-120px)]">

                    {/* LEFT */}

                    <div
                        className="
            col-span-12
            lg:col-span-5

            rounded-[40px]

            bg-gradient-to-br
            from-[#ffb100]
            via-[#ffc600]
            to-[#ffe600]

            p-8

            relative

            h-full
            "
                    >

                        <h3
                            className="
              text-[48px]
              font-medium
              leading-[1.05]
              mb-6
            "
                        >
                            AI-Driven Digital
                            <br />
                            Marketing Company
                        </h3>

                        <div
                            className="
              space-y-5
              text-[18px]
              leading-[1.8]
            "
                        >
                            <p>
                                We offer AI-powered digital marketing services
                                to help businesses appear in Google AI,
                                ChatGPT and recommendations.
                            </p>

                            <p>
                                We help brands grow sustainably
                                through ethical and data-backed
                                marketing strategies.
                            </p>

                            <p>
                                With 1,000+ successful projects,
                                500+ verified reviews.
                            </p>

                            <p>
                                Trusted worldwide.
                            </p>
                        </div>

                        <button
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
                        </button>

                        {/* ARROW */}

                        <div
                            className="
              group

              absolute
              bottom-0
              right-0

              translate-x-[35%]
              translate-y-[-10%]

              w-[100px]
              h-[100px]

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
                        </div>

                    </div>

                    {/* CENTER */}

                    <div
                        className="
            col-span-12
            lg:col-span-4

            flex
            flex-col
            gap-5

            h-full
            "
                    >

                        <div
                            className="
              rounded-[40px]

              bg-gradient-to-br
              from-[#c7f0ff]
              via-[#ececec]
              to-[#ffd5c8]

              p-8

              flex-1
            "
                        >

                            <h3 className="text-[64px] leading-none">
                                1,000+
                            </h3>

                            <p className="mt-4 text-[18px] leading-[1.7]">
                                Over 1,000 successful projects
                                delivered across SEO,
                                digital marketing,
                                paid ads and web.
                            </p>

                        </div>

                        <div
                            className="
              rounded-[40px]

              p-8

              text-white

              flex-1

              bg-gradient-to-br
              from-[#ff4b8b]
              via-[#ff7c9b]
              to-[#ffc95d]
            "
                        >

                            <h3 className="text-[64px] leading-none">
                                500+
                            </h3>

                            <p className="mt-4 text-[18px] leading-[1.7]">
                                Our reviews reflect
                                consistent results
                                and partnerships.
                            </p>

                        </div>

                    </div>

                    {/* RIGHT */}

                    <div
                        className="
            col-span-12
            lg:col-span-3

            rounded-[40px]

            bg-[#dfdfdf]

            p-8

            relative

            h-full
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
              text-[42px]
              leading-[1.1]
              mb-6
            "
                        >
                            Trusted by
                            <br />
                            Worldwide Clients
                        </h3>

                        <p
                            className="
              text-[18px]
              leading-[1.8]
            "
                        >
                            Trusted globally for
                            sustainable digital growth.
                        </p>

                        <button
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
                        </button>

                        {/* ARROW */}

                        <div
                            className="
              group

              absolute
              top-0
              right-0

              translate-x-[25%]

              w-[90px]
              h-[90px]

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
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}