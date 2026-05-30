import React from 'react'

const Blog = () => {
    const blogs = [
        {
            id: 1,
            image: "/blog1.jpg",
            tags: ["Blog"],
            title:
                "Future of AI in Business Software",
            desc:
                "Discover how AI-driven automation is reshaping industries with smarter workflows, predictive analytics, and intelligent decision-making.",
            date: "May 13, 2026",
        },

        {
            id: 2,
            image: "/blog2.jpg",
            tags: ["Blog"],
            title:
                "Signs Your Software Needs an Upgrade",
            desc:
                "Outdated systems slow growth. Learn the key indicators that it's time to modernize your web, mobile, or desktop solutions.",
            date: "May 11, 2026",
        },

        {
            id: 3,
            image: "/blog3.jpg",
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

            <section className="relative overflow-hidden bg-[#f7f7fb]">
  
                {/* dotted background */}
                <div
                    className="
          absolute inset-0
          opacity-40
          bg-[radial-gradient(circle,#d7d7d7_2px,transparent_2px)]
          bg-[length:24px_24px]
          sm:bg-[length:32px_32px]
        "
                />

                {/* big circle */}
                <div
                    className="
          absolute
          left-[15%]
          top-[-10%]
                h-[900px]
                w-[900px]
                rounded-full
                border
                border-[#e8e8e8]
                hidden lg:block
              "
                />
              
                <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 pb-8 sm:pb-12 md:pb-0">
  
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

                        <div className="relative flex justify-center scale-[0.55] sm:scale-[0.65] md:scale-75 lg:scale-90 xl:scale-100 origin-center">

                            {/* purple background */}
                            <div
                                className="
                absolute
                right-[10%]
                top-[70px]
                h-[520px]
                w-[360px]
                rounded-b-[180px]
                bg-gradient-to-b
                from-[#dde9ff]
                to-[#7436ff]
              "
                            />

                            {/* floating top card */}

                            <img
                                src="/news-card.png"
                                className="
                absolute
                left-[10%]
                top-[120px]
                w-[170px]
                z-20
              "
                            />

                            {/* floating browser */}

                            <img
                                src="/browser-card.png"
                                className="
                absolute
                left-[5%]
                bottom-[200px]
                w-[190px]
                z-20
              "
                            />

                            {/* megaphone */}

                            <img
                                src="/megaphone.png"
                                className="
                absolute
                right-[5%]
                top-[110px]
                w-[180px]
                z-20
              "
                            />

                            {/* search */}

                            <img
                                src="/search.png"
                                className="
                absolute
                right-[0]
                bottom-[120px]
                w-[170px]
                z-20
              "
                            />

                            {/* woman */}

                            <img
                                src="/girl.png"
                                className="
                relative
                z-30
                w-[650px]
              "
                            />

                        </div>

                    </div>

                </div>
            </section>




            <section className="bg-[#fafafa] py-10 sm:py-14">

                <div className="max-w-[1220px] mx-auto px-4 sm:px-5">

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
              "
                            >
                                {/* IMAGE */}

                                <div className="relative overflow-hidden p-[10px]">

                                    <img
                                        src={blog.image}
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

                                <div className="px-5 pb-6">

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
                    text-[#777]
                    leading-[42px] md:leading-[28px] lg:leading-[42px]
                    text-[15px]
                  "
                                    >
                                        {blog.desc}
                                    </p>

                                    {/* FOOTER */}

                                    <div className="flex items-center gap-3 mt-8">

                                        <img
                                            src="/logo-small.png"
                                            className="
                      w-[36px]
                      h-[36px]
                      rounded-full
                    "
                                        />

                                        <span className="text-[#666]">
                                            Biosoftech
                                        </span>

                                        <span className="text-[#999]">
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