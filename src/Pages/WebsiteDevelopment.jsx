import React from 'react'

const WebsiteDevelopment = () => {
    const reasons = [
        {
            id: "01",
            title: "Tailored Solutions",
            desc: `We design business-specific websites and applications
    that meet your objectives while helping you stand out online.`,
        },
        {
            id: "02",
            title: "Expert Team of Developers",
            desc: `Our skilled developers apply the right technology
    to create flexible, scalable, and high-quality solutions.`,
        },
        {
            id: "03",
            title: "Commitment to Timely Delivery",
            desc: `We respect your time and ensure projects are completed
    quickly without compromising quality.`,
        },
        {
            id: "04",
            title: "Future-Ready Development",
            desc: `Our websites are built with advanced architecture,
    multilingual support, and adaptability to keep your business ahead.`,
        },
    ];
    return (
        <>
            <section className="bg-[#f8f8f8] py-16 sm:py-20 md:py-24">
                <div className="max-w-[1300px] mx-auto px-4 sm:px-6">

                    {/* Heading */}
                    <div className="text-center max-w-[1000px] mx-auto">
                        <h2 className="text-2xl sm:text-3xl md:text-[52px] leading-tight font-semibold text-[#1d2430]">
                            Why Choose Biosoftech Solutions As Your Preferred
                            <br className="hidden md:block" />
                            Website Development Company?
                        </h2>

                        <p className="mt-4 sm:mt-6 md:mt-8 text-[#687387] text-sm sm:text-base md:text-lg leading-relaxed md:leading-9 max-w-[900px] mx-auto">
                            Experience plays a vital role in the web design process
                            — and at Biosoftech Solutions, we bring proven expertise
                            with 500+ projects delivered across 35+ industries.
                        </p>
                    </div>

                    {/* Content */}
                    <div className="mt-12 sm:mt-16 md:mt-24 grid lg:grid-cols-2 gap-x-8 sm:gap-x-12 xl:gap-x-28 gap-y-8 sm:gap-y-12 md:gap-y-20">

                        {reasons.map((item) => (
                            <div
                                key={item.id}
                                className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-6 md:gap-8"
                            >
                                {/* Number Circle */}
                                <div
                                    className="
                  min-w-[50px] sm:min-w-[60px] md:min-w-[72px]
                  h-[50px] sm:h-[60px] md:h-[72px]
                  rounded-full
                  bg-[#ff5a1f]
                  text-white
                  flex
                  items-center
                  justify-center
                  text-xl sm:text-2xl md:text-[34px]
                  font-semibold
                  shrink-0
                "
                                >
                                    {item.id}
                                </div>

                                {/* Text */}
                                <div>
                                    <h3 className="text-xl sm:text-2xl lg:text-[30px] font-semibold text-[#1d2430]">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 sm:mt-4 md:mt-5 text-[#687387] text-sm sm:text-base md:text-lg leading-relaxed md:leading-[2] max-w-[500px]">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </>
    )
}

export default WebsiteDevelopment