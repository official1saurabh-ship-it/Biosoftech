import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import img1 from "../../assets/service-swiper-sem.webp";
import img2 from "../../assets/service-swiper-smo.webp";
import img3 from "../../assets/service-swiper-seo.webp";
import img4 from "../../assets/service-swiper-web.webp";
import img5 from "../../assets/service-swiper-smm.webp";
import img6 from "../../assets/hospitality_management.webp";



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
        image: img6,
    },


];

export default function ServicesSlider() {
    return (
        <section className="bg-[#faf7fd] py-8 lg:py-14 overflow-hidden">

            <div className="max-w-full mx-auto px-5 sm:px-8 lg:px-10">

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
            font-bold
            text-2xl
          "
                    >
                        OUR SERVICES
                    </div>

                    <h2
                        className="
            mt-5
            text-[28px]
            sm:text-[36px]
            md:text-[44px]
            lg:text-[52px]
            xl:text-[60px]
            font-black
          "
                    >
                        Our Range Of Digital Solutions
                    </h2>

                </div>

                {/* Slider */}

                <div className="mt-8 lg:mt-14">

                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={30}
                        className="min-h-[320px] sm:min-h-[400px] lg:min-h-[480px]"
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
                    p-4
                    sm:p-6
                    lg:p-8
                    min-h-[320px]
                    sm:min-h-[400px]
                    lg:h-[480px]
                    flex
                    flex-col
                    justify-between
                    transition
                    duration-500
                    hover:-translate-y-4
                  `}
                                >

                                    <div>

                                        <h3 className="text-[22px] sm:text-[26px] lg:text-[28px] font-black">

                                            {item.title}

                                        </h3>

                                        <p
                                            className="
                      mt-4
                      text-sm
                      sm:text-[15px]
                      lg:text-[16px]
                      leading-[1.6]
                      lg:leading-[1.7]
                    "
                                        >
                                            {item.description}
                                        </p>

                                    </div>

                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        width="800"
                                        height="260"
                                        className="w-full h-[150px] lg:h-[190px] object-contain"
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
