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
        title: "Custom Software Development",
        description: "We design and build mobile apps, websites, and office software tailored to your business. Our solutions are user-friendly, scalable, and crafted to meet your exact needs.",
        image: img1,
    },

    {
        title: "AI-Powered Automation",
        description: "We integrate Artificial Intelligence into your workflow to reduce repetitive tasks, improve accuracy, and help your team focus on growth.",
        image: img2,
    },

    {
        title: "Mitra Suite Products",
        description: "Ready-to-use solutions for everyday business: Billing Mitra for GST invoicing, Restro Mitra for restaurants, Hotel Mitra for hotels, Skola Mitra for schools, and Tentent Mitra for PG/hostels.",
        image: img3,
    },

    {
        title: "Healthcare Solutions",
        description: "Smart healthcare software that simplifies patient records, appointment scheduling, and billing, helping hospitals and clinics run smoothly.",
        image: img4,
    },

    {
        title: "Real Estate Tools",
        description: "Digital solutions that help real estate businesses manage property listings, client interactions, and sales processes with efficiency and accuracy.",
        image: img5,
    },

    {
        title: "Hospitality Management",
        description: "Software designed for hotels and restaurants to manage rooms, staff, menus, and customer service effortlessly and reliably.",
        image: img2,
    },


];

export default function ServicesSlider() {
    return (
        <section className="bg-[#faf7fd] py-16 lg:py-28 overflow-hidden">

            <div className="max-w-[1650px] mx-auto px-5 sm:px-8 lg:px-10">

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
            text-[34px]
            sm:text-[48px]
            lg:text-[72px]
            font-black
          "
                    >
                        Our Range Of Digital Solutions
                    </h2>

                </div>

                {/* Slider */}

                <div className="mt-12 lg:mt-24">

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

                    rounded-[24px]
                    lg:rounded-[34px]
                    p-5
                    sm:p-8
                    lg:p-10
                    min-h-[480px]
                    sm:min-h-[520px]
                    lg:h-[620px]
                    flex
                    flex-col
                    justify-between
                    transition
                    duration-500
                    hover:-translate-y-4
                  `}
                                >

                                    <div>

                                        <h3 className="text-[26px] sm:text-[30px] lg:text-[34px] font-black">

                                            {item.title}

                                        </h3>

                                        <p
                                            className="
                      mt-8
                      text-base
                      sm:text-[18px]
                      lg:text-[19px]
                      leading-[1.8]
                      lg:leading-[2]
                    "
                                        >
                                            {item.description}
                                        </p>

                                    </div>

                                    <img
                                        src={item.image}
                                        alt=""
                                        className="w-full h-[210px] lg:h-[260px] object-contain"
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
