import React from 'react'

const Blog = () => {
    const blogs = [
        {
            id: 1,
            image: "/blog1.jpg",
            tags: ["Blog"],
            title:
                "How Will AI Change Web Development in the Future?",
            desc:
                "Artificial Intelligence (AI) is no longer a futuristic concept — it’s already transforming industries across the globe. From healthcare to...",
            date: "September 18, 2025",
        },

        {
            id: 2,
            image: "/blog2.jpg",
            tags: ["Blog", "Web Designing"],
            title:
                "The Hidden Costs of ‘Cheap’ Web Design in Dubai: What You Need to Know Before You Build",
            desc:
                "Dubai’s business landscape moves at lightning speed and in this digital-first economy...",
            date: "September 11, 2025",
        },

        {
            id: 3,
            image: "/blog3.jpg",
            tags: [
                "Blog",
                "Web Designing",
                "Website Designing and Development Company",
            ],
            title:
                "The Hidden Costs of ‘Cheap’ Web Design in Dubai",
            desc:
                "In Dubai’s digital economy, a cheap website isn’t a bargain...",
            date: "September 10, 2025",
        },

        {
            id: 4,
            image: "/blog4.jpg",
            tags: ["Blog"],
            title:
                "Are Web Designing Companies Still Relevant in the Age of AI",
            desc:
                "The short answer: Yes — absolutely. But the role of web design companies...",
            date: "September 9, 2025",
        },

        {
            id: 5,
            image: "/blog5.jpg",
            tags: ["Blog"],
            title:
                "Top 5 Website Designing Companies in Delhi to Watch",
            desc:
                "In today’s digital-first world, your website is more than an online address...",
            date: "August 22, 2025",
        },

        {
            id: 6,
            image: "/blog6.jpg",
            tags: [
                "Website Designing and Development Company",
            ],
            title:
                "Why Businesses Still Need Web Designing Companies",
            desc:
                "Artificial Intelligence (AI) has become a game changer across industries...",
            date: "August 20, 2025",
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
          bg-[length:32px_32px]
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
        "
                />

                <div className="relative max-w-[1400px] mx-auto px-6 pb-12 md:pb-0">
 
                    <div className="grid lg:grid-cols-2 items-center min-h-[500px] md:min-h-[700px] gap-12 lg:gap-0 pt-28 md:pt-32">
 
                        {/* LEFT */}
 
                        <div className="z-10 text-center lg:text-left">

                            <h1 className="text-6xl md:text-7xl lg:text-[90px] leading-none font-light">
                                Blogs
                            </h1>

                            <h2 className="mt-8 md:mt-28 text-4xl md:text-5xl lg:text-[62px] lg:leading-[72px] font-black">
                                Discover,
                                <br />
                                Learn, Grow
                            </h2>

                            <button
                                className="
                mt-8 md:mt-10
                bg-[#F7D64A]
                px-8 md:px-10
                py-3 md:py-4
                text-lg md:text-[24px]
                font-medium
                rounded-full lg:rounded-none
              "
                            >
                                The CssFounder Blog Hub Awaits!
                            </button>

                        </div>

                        {/* RIGHT */}

                        <div className="relative flex justify-center scale-75 md:scale-90 lg:scale-100">

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




            <section className="bg-[#fafafa] py-14">

                <div className="max-w-[1220px] mx-auto px-5">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6">

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
                    leading-[42px]
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
                                            cssfounder
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