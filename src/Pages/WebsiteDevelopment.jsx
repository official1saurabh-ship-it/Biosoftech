import React from 'react'

const WebsiteDevelopment = () => {
    const reasons = [
        {
            id: "01",
            title: "Tailored Solutions",
            desc: `We design business-specific websites that will not only
    meet your business objectives but also help you stand out online.`,
        },
        {
            id: "02",
            title: "Expert Team of Developers",
            desc: `Being a reputed full stack development company,
    we have excellent developers who apply the right technology
    to create quality, flexible, and strong websites.`,
        },
        {
            id: "03",
            title: "Commitment to Timely Delivery",
            desc: `We respect time, to ensure your site is developed
    within the shortest time possible but with the highest quality.`,
        },
        {
            id: "04",
            title: "SEO-Friendly Development",
            desc: `We develop sites with SEO considerations in mind,
    so our designs have the site architecture and elements
    necessary for immediate indexing on search engines.`,
        },
    ];
    return (
        <>
            <section className="bg-[#f8f8f8] py-24">
                <div className="max-w-[1300px] mx-auto px-6">

                    {/* Heading */}
                    <div className="text-center max-w-[1000px] mx-auto">
                        <h2 className="text-[34px] md:text-[52px] leading-[1.2] font-semibold text-[#1d2430]">
                            Why You Should Choose OrangeMantra As Your Preferred
                            <br />
                            Website Development Company?
                        </h2>

                        <p className="mt-8 text-[#687387] text-lg leading-9 max-w-[900px] mx-auto">
                            Experience plays an important role in the web design
                            process which makes us a seasoned web development company.
                        </p>
                    </div>

                    {/* Content */}
                    <div className="mt-24 grid lg:grid-cols-2 gap-x-28 gap-y-20">

                        {reasons.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-start gap-8"
                            >
                                {/* Number Circle */}
                                <div
                                    className="
                  min-w-[72px]
                  h-[72px]
                  rounded-full
                  bg-[#ff5a1f]
                  text-white
                  flex
                  items-center
                  justify-center
                  text-[34px]
                  font-semibold
                "
                                >
                                    {item.id}
                                </div>

                                {/* Text */}
                                <div>
                                    <h3 className="text-[36px] lg:text-[20px] font-semibold text-[#1d2430]">
                                        {item.title}
                                    </h3>

                                    <p className="mt-5 text-[#687387] text-lg leading-[2] max-w-[500px]">
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