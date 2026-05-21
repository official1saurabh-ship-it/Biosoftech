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
            "The team at Rank Digital Solution is very creative with social media. They managed campaigns and delivered excellent growth.",
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
            "Rank Digital Solution is among the best digital marketing companies.",
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
            className="
      relative
      overflow-hidden

      bg-gradient-to-br
      from-[#000457]
      via-[#020066]
      to-[#09001d]

      py-16
      lg:py-28
      "
        >

            {/* Glow */}

            <div
                className="
        absolute
        right-0
        top-1/2

        w-[700px]
        h-[700px]

        rounded-full

        bg-red-700/20

        blur-[180px]
      "
            />

            <div className="max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-12">

                {/* TOP */}

                <div className="text-center">

                    <p
                        className="
            text-white
            text-[18px]

            mb-10
          "
                    >
                        [ Testimonial ]
                    </p>

                    <h2
                        className="
            text-white

            text-[34px]
            sm:text-[44px]
            lg:text-[54px]

            font-bold

            mb-8
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

            leading-[2]
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
          mt-12
          lg:mt-24

          grid
          lg:grid-cols-[360px_1fr]

          gap-10
          lg:gap-16

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
              text-[30px]
              lg:text-[38px]
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

              text-[42px]
              lg:text-[52px]
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

            px-10
            sm:px-16
            py-8

            overflow-hidden
          "
                    >

                        {/* LEFT */}

                        <button
                            className="
              prev

              absolute
              left-0
              top-1/2

              -translate-y-1/2

              z-20

              w-12
              h-12

              rounded-full

              bg-white

              shadow-lg

              flex
              items-center
              justify-center
              "
                        >
                            <ChevronLeft />
                        </button>

                        {/* RIGHT */}

                        <button
                            className="
              next

              absolute
              right-0
              top-1/2

              -translate-y-1/2

              z-20

              w-12
              h-12

              rounded-full

              bg-white

              shadow-lg

              flex
              items-center
              justify-center
              "
                        >
                            <ChevronRight />
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

                            loop={true}

                            speed={1000}

                            spaceBetween={28}

                            slidesPerView={1}

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
                            className="!overflow-visible !items-stretch"
                        >

                            {reviews.map((review) => (

                                <SwiperSlide
                                    key={review.name}
                                    className="pb-12 flex  h-auto"
                                >

                                    <div
                                        className="
bg-white

rounded-[18px]

p-7

w-full

h-full

flex

flex-col

justify-between

shadow-xl

transition-all
duration-500

hover:-translate-y-2
"
                                    >

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

                                        <div
                                            className="
flex-1

mb-6
"
                                        >
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

                                        <a
                                            href={GOOGLE_REVIEWS_URL}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="
inline-block

text-gray-400

hover:text-black

transition
"
                                        >
                                            Read more
                                        </a>

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
