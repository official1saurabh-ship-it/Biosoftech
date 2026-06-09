import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";



import "swiper/css";
import "swiper/css/navigation";

const GOOGLE_REVIEWS_URL = "https://share.google/eUAIEuWfI9MPqGlXv";

const reviews = [
    {
        name: "Sara Gupta",
        time: "8 months ago",
        text:
            "The team at Biosoftech Solutions is very creative and professional. They delivered excellent results on our project.",
    },

    {
        name: "Sakir Ansari",
        time: "8 months ago",
        text:
            "Their expert team delivers excellent SEO, social media and website services.",
    },

    {
        name: "Pooja Yadav",
        time: "8 months ago",
        text:
            "Biosoftech Solutions is among the best software development companies I have worked with.",
    },

    {
        name: "Rahul Singh",
        time: "9 months ago",
        text:
            "Professional support and measurable business growth.",
    },

    {
        name: "Amit Verma",
        time: "10 months ago",
        text:
            "Strong communication and excellent campaign execution.",
    },
];

export default function TestimonialSection() {
    return (
        <section
            id="testimonials"
            className="
      relative
      overflow-hidden

      bg-gradient-to-br
      from-[#000457]
      via-[#020066]
      to-[#09001d]

      py-12
      lg:py-20
      "
        >

            {/* Glow */}

            <div
                className="
        absolute
        right-0
        top-1/2

        w-[300px]
        sm:w-[700px]
        h-[300px]
        sm:h-[700px]

        rounded-full

        bg-red-700/20

        blur-[80px]
        sm:blur-[180px]
      "
            />

            <div className="container-site">

                {/* TOP */}

                <div className="text-center">

                    <p
                        className="
            text-white
            text-5xl
            font-bold
            mb-6
          "
                    >
                        Testimonial
                    </p>

                    <h2
                        className="
            text-white

            text-[28px]
            sm:text-[34px]
            md:text-[44px]
            lg:text-[48px]
            xl:text-[54px]

            font-bold

            mb-4
          "
                    >
                        What Our Clients Say About Us
                    </h2>

                    <p
                        className="
            text-white/80

            text-base
            lg:text-[18px]

            max-w-[1200px]

            mx-auto

            leading-relaxed
          "
                    >
                        Businesses across industries trust Biosoftech
                        Solutions for delivering custom software, AI
                        automation, and Mitra Suite products that drive
                        measurable success. Our clients consistently highlight
                        our ability to simplify operations, boost productivity,
                        and provide long-term digital growth.
                        <br />
                        We are recognized as one of the most reliable
                        technology partners, known for transparent processes,
                        scalable solutions, and 24x7 support.
                    </p>

                </div>

                {/* CONTENT */}

                <div
                    className="
          mt-8
          lg:mt-16

          grid
          lg:grid-cols-[360px_1fr]

          gap-6
          lg:gap-10

          items-center
        "
                >

                    {/* LEFT */}

                    <div
                        className="
            text-center
            text-white
            px-2
            sm:px-8
          "
                    >

                        <h3
                            className="
              text-[26px]
              lg:text-[32px]
              xl:text-[38px]
              font-bold
            "
                        >
                            EXCELLENT
                        </h3>

                        <div
                            className="
              flex
              justify-center

              gap-2

              mt-5
            "
                        >
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    size={36}
                                    fill="#FFD700"
                                    color="#FFD700"
                                />
                            ))}
                        </div>

                        <p
                            className="
              mt-5
              text-[18px]
            "
                        >
                            Based on 26 reviews
                        </p>

                        <a
                            href={GOOGLE_REVIEWS_URL}
                            target="_blank"
                            rel="noreferrer"
                            className="
              block
              mt-6

              text-fluid-h2
              font-medium
            "
                        >
                            Google
                        </a>

                    </div>

                    {/* RIGHT */}

                    <div
                        className="
            relative

            px-5
            sm:px-8
            md:px-10
            lg:px-12
            xl:px-16
            py-8

            overflow-hidden
          "
                    >

                        {/* LEFT */}

                        <button
                            aria-label="Previous testimonial"
                            className="
              prev

              absolute
              left-0
              top-1/2

              -translate-y-1/2

              z-20

              w-11
              h-11
              sm:w-12
              sm:h-12
              min-w-[44px]
              min-h-[44px]

              rounded-full

              bg-white

              shadow-lg

              flex
              items-center
              justify-center
              "
                        >
                            <ChevronLeft size={20} />
                        </button>

                        {/* RIGHT */}

                        <button
                            aria-label="Next testimonial"
                            className="
              next

              absolute
              right-0
              top-1/2

              -translate-y-1/2

              z-20

              w-11
              h-11
              sm:w-12
              sm:h-12
              min-w-[44px]
              min-h-[44px]

              rounded-full

              bg-white

              shadow-lg

              flex
              items-center
              justify-center
              "
                        >
                            <ChevronRight size={20} />
                        </button>

                        <Swiper
                            modules={[Navigation, Autoplay]}

                            navigation={{
                                prevEl: ".prev",
                                nextEl: ".next",
                            }}

                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                            }}

                            loop

                            speed={1000}

                            spaceBetween={28}

                            slidesPerView={1}

                            autoHeight={false}

                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                },

                                768: {
                                    slidesPerView: 2,
                                },

                                1024: {
                                    slidesPerView: 3,
                                },

                                1400: {
                                    slidesPerView: 3,
                                },
                            }}

                            className="
!overflow-visible
min-h-[280px] sm:min-h-[360px]

[&_.swiper-wrapper]:items-stretch
"
                        >

                            {reviews.map((review) => (

                                <SwiperSlide
                                    key={review.name}

                                    className="
flex

!h-auto
"
                                >

                                    <div
                                        className="
bg-white

rounded-[18px]

p-7

w-full

min-h-[280px] sm:min-h-[360px]

h-full

flex

flex-col

shadow-xl

transition-all

duration-500

hover:-translate-y-2
"
                                    >

                                        {/* TOP */}

                                        <div>

                                            <div
                                                className="
flex
justify-between
items-start

mb-6
"
                                            >

                                                <div className="flex gap-3">

                                                    <div
                                                        className="
w-14
h-14

rounded-full

bg-orange-700

text-white

flex
items-center
justify-center

shrink-0
"
                                                    >
                                                        {review.name[0]}
                                                    </div>

                                                    <div>

                                                        <h4 className="text-lg font-bold">
                                                            {review.name}
                                                        </h4>

                                                        <p className="text-gray-500 text-sm">
                                                            {review.time}
                                                        </p>

                                                    </div>

                                                </div>

                                                <span className="text-2xl">
                                                    G
                                                </span>

                                            </div>

                                            <div className="flex gap-1 mb-5">

                                                {[...Array(5)].map((_, i) => (

                                                    <Star
                                                        key={i}
                                                        size={18}
                                                        fill="#FFC107"
                                                        color="#FFC107"
                                                    />

                                                ))}

                                            </div>

                                        </div>

                                        {/* BODY */}

                                        <div className="flex-1">

                                            <p
                                                className="
text-[15px]

leading-8

text-gray-700
"
                                            >
                                                {review.text}
                                            </p>

                                        </div>

                                        {/* FOOTER */}

                                        <div className="pt-8">

                        <a
                            href={GOOGLE_REVIEWS_URL}

                            target="_blank"

                            rel="noreferrer"

                            aria-label="Read more Google reviews about Biosoftech Solutions"

                            className="
              inline-block

              text-gray-600

              hover:text-black

              transition
            "
                        >
                            Read more reviews
                        </a>

                                        </div>

                                    </div>

                                </SwiperSlide>

                            ))}

                        </Swiper>
                    </div>

                </div>

            </div>

        </section>
    );
}
