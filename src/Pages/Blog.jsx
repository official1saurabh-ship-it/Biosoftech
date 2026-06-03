import SEO from "../components/seo/SEO";
import React from 'react'
import { useNavigate } from "react-router-dom";
import blogAi from "../assets/ai-business-software-automation.webp"
import blogUpgrade from "../assets/software-upgrade-signs-indicators.webp"
import blogCloud from "../assets/cloud-solutions-sme-beginners-guide.webp"
import blogImage from "../assets/blog-image.png"
import blogHeroBg from "../assets/blog-hero-bg.png"

const Blog = () => {
    const navigate = useNavigate();
    const blogs = [
        {
            id: 1,
            image: blogAi,
            tags: ["Blog"],
            title:
                "Future of AI in Business Software",
            desc:
                "Discover how AI-driven automation is reshaping industries with smarter workflows, predictive analytics, and intelligent decision-making.",
            date: "May 13, 2026",
        },

        {
            id: 2,
            image: blogUpgrade,
            tags: ["Blog"],
            title:
                "Signs Your Software Needs an Upgrade",
            desc:
                "Outdated systems slow growth. Learn the key indicators that it's time to modernize your web, mobile, or desktop solutions.",
            date: "May 11, 2026",
        },

        {
            id: 3,
            image: blogCloud,
            tags: ["Blog"],
            title:
                "Cloud Solutions for SMEs: A Beginner's Guide",
            desc:
                "Understand how cloud platforms help small and medium businesses scale securely, reduce costs, and stay competitive.",
            date: "May 7, 2026",
        },
    ];
    return (
        <>
            <SEO
                title="Blog – Software Development Insights | Biosoftech Solutions"
                description="Read the latest articles on AI automation, software development, cloud computing, and digital transformation from Biosoftech Solutions."
                keywords="software development blog, AI automation, cloud computing, web development, technology insights"
                ogUrl="https://www.biosoftech.com/blog"
            />
            <section className="relative overflow-hidden bg-[#f7f7fb]">

                {/* background image */}
                <img
                    src={blogHeroBg}
                    alt=""
                    className="
          absolute top-0 left-1/2 -translate-x-1/2
          w-full max-w-5xl h-full
          object-contain
        "
                />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pb-8 sm:pb-12 md:pb-0">

                    <div className="grid lg:grid-cols-2 items-center min-h-0 lg:min-h-[500px] md:min-h-[700px] gap-8 sm:gap-12 lg:gap-0 pt-24 sm:pt-28 md:pt-32">

                        {/* LEFT */}

                        <div className="z-10 text-center lg:text-left">

                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[90px] leading-none font-light">
                                Blogs
                            </h1>

                            <h2 className="mt-4 sm:mt-6 md:mt-8 lg:mt-28 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[62px] lg:leading-[72px] font-black">
                                Discover,
                                <br />
                                Learn, Grow
                            </h2>

                            <button
                                onClick={() => navigate("/contact")}
                                className="
                mt-6 sm:mt-8 md:mt-10
                bg-[#F7D64A]
                px-6 sm:px-8 md:px-10
                py-2 sm:py-3 md:py-4
                text-base sm:text-lg md:text-[24px]
                font-medium
                rounded-full lg:rounded-none
                min-h-[44px]
              "
                            >
                                The Biosoftech Blog Hub Awaits!
                            </button>

                        </div>

                        {/* RIGHT */}

                        <div className="relative flex justify-center items-center">

                            <img
                                src={blogImage}
                                width="500"
                                height="500"
                                className="
                w-full
                max-w-[500px]
                h-auto
                object-contain
                z-10
              "
                            />

                        </div>

                    </div>

                </div>
            </section>




            <section className="bg-[#fafafa] py-10 sm:py-14">

                <div className="max-w-7xl mx-auto px-4 sm:px-5">

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#333] mb-8 sm:mb-10 text-center">
                        Read Latest Articles &amp; Post
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 sm:gap-x-8 lg:gap-x-12 gap-y-6 sm:gap-y-6">

                        {blogs.map((blog) => (
                            <article
                                key={blog.id}
                                className="
                bg-white
                border
                border-[#ececec]
                hover:shadow-[0_0_25px_rgba(255,170,180,.35)]
                duration-300
                flex flex-col h-full
              "
                            >
                                {/* IMAGE */}

                                <div className="relative overflow-hidden p-[10px]">

                                    <img
                                        src={blog.image}
                                        width="400"
                                        height="210"
                                        className="
                    w-full
                    h-[210px]
                    object-cover
                    rounded-[18px]
                    duration-500
                    hover:scale-105
                  "
                                    />

                                    <div className="absolute left-6 bottom-5 flex gap-1 flex-wrap">

                                        {blog.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="
                        bg-[#ff1d5d]
                        text-white
                        text-[11px]
                        px-3
                        py-[3px]
                      "
                                            >
                                                {tag}
                                            </span>
                                        ))}

                                    </div>

                                </div>

                                {/* CONTENT */}

                                <div className="px-5 pb-6 flex flex-col flex-1">

                                    <h3
                                        className="
                    text-[20px]
                    leading-[32px]
                    font-bold
                    text-[#333]
                    hover:text-[#ff215f]
                    duration-300
                    cursor-pointer
                  "
                                    >
                                        {blog.title}
                                    </h3>

                                    <p
                                        className="
                    mt-4
                    text-[#555]
                    leading-[24px] sm:leading-[28px] md:leading-[28px] lg:leading-[28px]
                    text-[15px]
                    flex-1
                  "
                                    >
                                        {blog.desc}
                                    </p>

                                    {/* FOOTER */}

                                    <div className="flex items-center gap-3 mt-8">

                                        <img
                                            src="/logo-small.png"
                                            width="36"
                                            height="36"
                                            className="
                      w-[36px]
                      h-[36px]
                      rounded-full
                    "
                                        />

                                        <span className="text-[#444]">
                                            Biosoftech
                                        </span>

                                        <span className="text-[#666]">
                                            {blog.date}
                                        </span>

                                    </div>

                                </div>
                            </article>
                        ))}
                    </div>

                </div>

            </section>


        </>

    )
}

export default Blog