import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import img1 from "../../assets/SEM1.png";
import img2 from "../../assets/SMO.png";
import img3 from "../../assets/SEO1.png";
import img4 from "../../assets/WEB1.png";
import img5 from "../../assets/SMM1.png";



const services = [
    {
        title: "Social Media Marketing",
        description: "We help clients run ad campaigns across various so…, and more, under our comprehensive SMM services.",
        image: img1,
    },

    {
        title: "Social Media Optimization",
        description: "Our professionals optimize clients’ social media c…d connect effectively with their target audience.",
        image: img2,
    },

    {
        title: "Search Engine Optimization",
        description: "Engage with our top-notch SEO services to improve …rganic traffic, and grow your business long-term.",
        image: img3,
    },

    {
        title: "Web Design and Development",
        description: "Logelite creates attractive and easy-to-use WordPress websites that keep clients’ needs at heart and ensure smooth performance for a great user experience.",
        image: img4,
    },

    {
        title: "Search Engine Marketing",
        description: "Logelite specializes in paid search engine marketing through highly convertible ads. We help clients run super-engaging ads on Google, Bing, and YouTube.",
        image: img5,
    },


];

export default function ServicesSlider() {
    return (
        <section className="bg-[#faf7fd] py-28 overflow-hidden">

            <div className="max-w-[1650px] mx-auto px-10">

                {/* Heading */}

                <div className="text-center">

                    <div
                        className="
            inline-flex
            px-7
            py-3
            rounded-full
            bg-[#efe3ff]
            text-[#7d3cff]
          "
                    >
                        OUR SERVICES
                    </div>

                    <h2
                        className="
            mt-8
            text-[72px]
            font-black
          "
                    >
                        Our Range Of Web & Ad Solutions
                    </h2>

                </div>

                {/* Slider */}

                <div className="mt-24">

                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={30}
                        slidesPerView={3}
                        loop
                        speed={1200}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },

                            768: {
                                slidesPerView: 2,
                            },

                            1200: {
                                slidesPerView: 3,
                            },
                        }}
                    >

                        {services.map((item, index) => (

                            <SwiperSlide key={index}>

                                <div
                                    className={`
                    ${item.active
                                            ? "bg-gradient-to-br from-[#914fe5] to-[#c965ff] text-white"
                                            : "bg-[#f4eef8]"
                                        }

                    rounded-[34px]
                    p-10
                    h-[620px]
                    flex
                    flex-col
                    justify-between
                    transition
                    duration-500
                    hover:-translate-y-4
                  `}
                                >

                                    <div>

                                        <h3 className="text-[34px] font-black">

                                            {item.title}

                                        </h3>

                                        <p
                                            className="
                      mt-8
                      text-[19px]
                      leading-[2]
                    "
                                        >
                                            {item.description}
                                        </p>

                                    </div>

                                    <img
                                        src={item.image}
                                        alt=""
                                        className="w-full h-[260px] object-contain"
                                    />

                                </div>

                            </SwiperSlide>

                        ))}

                    </Swiper>

                </div>

            </div>

        </section>
    );
}