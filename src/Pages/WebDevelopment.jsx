import wordpressDevelopment from "../assets/WordPress-Services2.png";
import laptopMockup from "../assets/laptop-screen-website-mockup.webp";
import manImage from "../assets/Website-Design-development.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useState } from "react";

import "swiper/css";
import "swiper/css/navigation";
import solar from "../assets/solar.webp";
import max from "../assets/max.webp";
import intime from "../assets/intime.webp";
import sigma from "../assets/sigma.webp";
import mothers from "../assets/Mothers-care.webp";
import happyIndia from "../assets/happy-India.webp";
import hospitality from "../assets/Designer-Hospitality.webp";
import {
    Users,
    PackageSearch,
    Bot,
    ArrowUpRight,
} from "lucide-react";

import {
    MonitorSmartphone,
    Smartphone,
    BarChart3,
    Boxes,
    FileBarChart,

} from "lucide-react";
const portfolioImages = [
    solar,
    max,
    intime,
    sigma,
    mothers,
    happyIndia,
    hospitality,
];

import {
    ShoppingCart,
    Plane,
    HeartHandshake,
    Building2,
    GraduationCap,
    Truck,
    BadgeDollarSign,
    Umbrella,
    Images,
    Factory,
} from "lucide-react";

import analysisImg from "../assets/icon1.png";
import strategyImg from "../assets/icon2.png";
import clientImg from "../assets/icon3.png";
import executionImg from "../assets/icon4.png";



import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";


import customAppImage from "../assets/custom-app.png";

import dreamWebsite from "../assets/best-web-development-in-lucknow.webp";



const WebDevelopment = () => {
    const [active, setActive] = useState(1);

    const steps = [
        {
            id: 1,
            number: "01",
            title: "Project Analysis",
            desc: "Understanding the website's purpose, functionality needs, and client expectations!",
            image: analysisImg,
        },
        {
            id: 2,
            number: "02",
            title: "Strategy Development",
            desc: "Building a customized WordPress framework tailored to business goals and trends!",
            image: strategyImg,
        },
        {
            id: 3,
            number: "03",
            title: "Client’s Input",
            desc: "Refining the design and features based on the client’s feedback and preferences!",
            image: executionImg,
        },
        {
            id: 4,
            number: "04",
            title: "Strategy Execution",
            desc: "Developing, optimizing, and launching a seamless and high-performing website!",
            image: clientImg,
        },
    ];

    const services = [
        {
            icon: MonitorSmartphone,
            title: "Web Development Solutions",
            description:
                "As a custom web application development company, we deliver tailored solutions that include visually stunning websites, seamless accessibility, and smooth customer engagement.",
        },
        {
            icon: Smartphone,
            title: "Mobile Application Development",
            description:
                "Discover the true potential of mobile technology with our custom mobile application development solutions. We create user-friendly apps packed with features, ensuring your audience stays captivated and delighted.",
            active: true,
        },
        {
            icon: BarChart3,
            title: "Business Analytics Services",
            description:
                "Get valuable insights from your data with our business analytics services. We go beyond just numbers, offering you advanced data analysis, visualizations, and comprehensive reports to drive informed decision-making in business.",
        },
        {
            icon: Boxes,
            title: "Product Engineering Services",
            description:
                "Our tailored product engineering services encompass the entire product development lifecycle, from conceptualization to testing & deployment. We focus on innovation, scalability, & usability to create high-quality, market-ready products.",
        },
        {
            icon: FileBarChart,
            title: "Corporate Application Development",
            description:
                "Enhance your business operations with our custom web app development services, meticulously crafted to align with your business goals, providing scalable solutions to drive your business forward.",
        },
        {
            icon: Users,
            title: "Dedicated Development Team",
            description:
                "We provide a dedicated group of talented professionals who exclusively focus on your projects, offering the flexibility and scalability you need in your business. Collaborate with us to achieve optimal results and timely delivery.",
        },
    ];
    const benefits = [
        {
            title: "Tailored Solutions",
            desc: "As a trusted custom web application development company, we design and develop solutions that are specifically designed to meet your industry-specific business targets.",
        },
        {
            title: "High-Performance Delivery",
            desc: "High-performance and responsive applications that are incorporated with functions, custom themes, and feature-rich plug-ins.",
        },
        {
            title: "Improved UX",
            desc: "Upgrading user experience by providing intuitive interfaces and smooth navigation to enhance customer satisfaction.",
        },
        {
            title: "Robust Security",
            desc: "Prioritizing the security of web applications by taking robust measures to protect data and sensitive information from potential threats.",
        },
        {
            title: "Seamless Integration",
            desc: "Our custom app development services allow applications to seamlessly integrate with your existing systems and third-party platforms.",
        },
        {
            title: "Scalability and Flexibility",
            desc: "We build scalable and adaptive applications that fit your growing business needs.",
        },
    ];

    const industries = [
        {
            title: "Ecommerce",
            icon: ShoppingCart,
        },
        {
            title: "Travel & Hospitality",
            icon: Plane,
        },
        {
            title: "Healthcare",
            icon: HeartHandshake,
        },
        {
            title: "Real Estate & Construction",
            icon: Building2,
        },
        {
            title: "Education",
            icon: GraduationCap,
        },
        {
            title: "Transportation & Logistics",
            icon: Truck,
        },
        {
            title: "Utilities & On Demand",
            icon: BadgeDollarSign,
        },
        {
            title: "Finance & Insurance",
            icon: Umbrella,
        },
        {
            title: "Media & Entertainment",
            icon: Images,
        },
        {
            title: "Manufacturing",
            icon: Factory,
        },
    ];
    const features = [
        {
            number: "01",
            title: "Tailored Solutions",
            description:
                "We design business-specific websites that will not only meet your business objectives but also help you stand out online.",
        },
        {
            number: "02",
            title: "Expert Team of Developers",
            description:
                "Being a reputed full stack development company, we have excellent developers who apply the right technology to create quality, flexible, and strong websites.",
        },
        {
            number: "03",
            title: "Commitment to Timely Delivery",
            description:
                "We respect time, to ensure your site is developed within the shortest time possible but with the highest quality.",
        },
        {
            number: "04",
            title: "SEO-Friendly Development",
            description:
                "We develop sites with SEO considerations in mind, so our designs have the site architecture and elements necessary for immediate indexing on search engines.",
        },
    ];



    return (
        <>
            <section className="bg-[#f7f6f1] overflow-hidden pb-12 md:pb-20">
                <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-16">
                    <div className="grid lg:grid-cols-2 items-center gap-8 sm:gap-12 lg:gap-20 min-h-0 lg:min-h-screen pt-24 sm:pt-28 md:pt-32">
                        <div className="text-center lg:text-left">
                            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-[68px] leading-tight md:leading-[1.1] font-medium text-black max-w-[720px] mx-auto lg:mx-0">
                                Best Website Development<br className="hidden md:block" />Company In India
                            </h1>
                            <div className="mt-6 sm:mt-8 md:mt-10 text-[#1d1d1d] text-sm sm:text-base md:text-lg leading-relaxed md:leading-[2.1] max-w-[760px]">
                                <p>
                                    Are you looking for website development services in India?
                                    RankON Technologies is a leading web development company in
                                    India, offering <span className="font-semibold">strategic website development services</span> designed to convert traffic into leads, support long-term SEO, and scale with your business.
                                </p>
                                <p className="mt-4 sm:mt-6 md:mt-10">
                                    With <span className="font-semibold">14+ years of experience</span> and <span className="font-semibold">1,000+ digital projects delivered globally</span>, RankON creates websites that don&apos;t just look professional, they perform.
                                </p>
                            </div>
                            <div className="mt-6 sm:mt-10 md:mt-14 flex flex-wrap justify-center lg:justify-start items-center gap-4 sm:gap-6 md:gap-12">
                                <img src="/logos/clutch.png" alt="" className="h-10 sm:h-12 md:h-20 object-contain" />
                                <img src="/logos/upwork.png" alt="" className="h-10 sm:h-12 md:h-20 object-contain" />
                                <img src="/logos/google-review.png" alt="" className="h-10 sm:h-12 md:h-20 object-contain" />
                                <img src="/logos/google-partner.png" alt="" className="h-10 sm:h-12 md:h-20 object-contain" />
                            </div>
                            <div className="mt-6 sm:mt-10 md:mt-14 flex flex-col sm:flex-row justify-center lg:justify-start gap-2 sm:gap-0">
                                <button className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-[#ffba00] text-black font-medium uppercase hover:brightness-95 transition text-sm sm:text-base min-h-[44px]">REQUEST PROPOSAL →</button>
                                <button className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-black text-white uppercase hover:bg-neutral-900 transition text-sm sm:text-base min-h-[44px]">WEBSITE PACKAGES ⊕</button>
                            </div>
                        </div>
                        <div className="flex justify-center mt-8 sm:mt-12 lg:mt-0">
                            <img src={laptopMockup} alt="Website mockup on laptop" className="w-full max-w-[600px] sm:max-w-[800px] object-contain" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-[#f8f8f8] py-10 overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-6">

                    {/* TOP LABEL */}
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <span className="w-14 h-[2px] bg-[#a855f7]" />

                        <p className="text-[#8b5cf6] uppercase font-semibold text-sm tracking-wide">
                            Wordpress Services
                        </p>

                        <span className="w-14 h-[2px] bg-[#a855f7]" />
                    </div>

                    {/* HEADING */}
                    <h2 className="text-center text-[#101126] font-bold leading-tight text-5xl lg:text-[64px]">
                        Best Website
                        <br />
                        Design and Development Company
                    </h2>

                    {/* CONTENT */}
                    <div className="grid lg:grid-cols-[400px_1fr_300px] gap-10 items-center mt-10">

                        {/* LEFT IMAGE */}
                        <div>
                            <img
                                src={wordpressDevelopment}
                                alt="Wordpress Development"
                                className="w-full object-contain"
                            />
                        </div>

                        {/* CENTER CONTENT */}
                        <div>

                            <p className="text-[#5d6070] text-[18px] leading-8">
                                Want to take your business online with an eye-catching
                                WordPress website or revamp your existing site? Let
                                Logelite help you achieve all your website design and
                                development goals effortlessly!
                            </p>

                            {/* FEATURE 1 */}
                            <div className="flex gap-5 mt-8 pb-6 border-b border-[#e7e7e7]">

                                <Users
                                    size={46}
                                    className="text-[#8b5cf6] shrink-0"
                                />

                                <div>
                                    <h3 className="font-bold text-[#111827] text-[24px]">
                                        Dedicated Manager
                                    </h3>

                                    <p className="text-[#5f6270] text-[18px] mt-1">
                                        Helps You Find the Best Solutions!
                                    </p>
                                </div>
                            </div>

                            {/* FEATURE 2 */}
                            <div className="flex gap-5 py-6 border-b border-[#e7e7e7]">

                                <PackageSearch
                                    size={46}
                                    className="text-[#8b5cf6] shrink-0"
                                />

                                <div>
                                    <h3 className="font-bold text-[#111827] text-[24px]">
                                        Custom Packages
                                    </h3>

                                    <p className="text-[#5f6270] text-[18px] mt-1">
                                        Pay Only for What You Look For!
                                    </p>
                                </div>
                            </div>

                            {/* FEATURE 3 */}
                            <div className="flex gap-5 py-6">

                                <Bot
                                    size={46}
                                    className="text-[#8b5cf6] shrink-0"
                                />

                                <div>
                                    <h3 className="font-bold text-[#111827] text-[24px]">
                                        AI-Driven Solutions
                                    </h3>

                                    <p className="text-[#5f6270] text-[18px] mt-1">
                                        Embrace New-Age Technologies!
                                    </p>
                                </div>
                            </div>

                            {/* BUTTON */}
                            <button
                                className="
                mt-8
                flex
                items-center
                gap-3
                bg-[#8b5cf6]
                hover:bg-[#7c3aed]
                text-white
                px-8
                py-4
                rounded-2xl
                font-semibold
                text-lg
                transition-all
                duration-300
              "
                            >
                                Get Quote
                                <ArrowUpRight size={22} />
                            </button>

                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="flex justify-center lg:justify-end">
                            <img
                                src={manImage}
                                alt="Consultant"
                                className="w-[330px] object-contain"
                            />
                        </div>

                    </div>
                </div>
            </section>








            <section className="bg-[#f7f7f7] py-20 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Heading */}

                    <div className="text-center mb-16">
                        <h2 className="text-black font-bold text-4xl lg:text-6xl leading-tight">
                            Our Inspiring Web
                            <br />
                            Development Portfolio
                        </h2>

                        <p className="text-[#666] max-w-3xl mx-auto mt-8 text-lg leading-9">
                            Welcome to our web development showcase.
                            We have crafted 500+ digital dreams into reality.
                            Explore our successful project here.
                        </p>
                    </div>

                    {/* Slider */}

                    <div className="relative">

                        <Swiper
                            modules={[Autoplay, Navigation]}
                            slidesPerView={1}
                            loop={true}
                            speed={1200}
                            autoplay={{
                                delay: 3500,
                                disableOnInteraction: false,
                            }}
                            navigation
                            className="portfolioSwiper"
                        >
                            {portfolioImages.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <div className="flex justify-center">

                                        <img
                                            src={image}
                                            alt={`portfolio-${index}`}
                                            className="
                      w-full
                      max-w-[1200px]
                      object-contain
                      drop-shadow-[0_20px_40px_rgba(0,0,0,0.18)]
                    "
                                        />

                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>





            <section className="bg-[#F7F3F3] py-24 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Badge */}

                    <div className="flex justify-center">
                        <div className="px-6 py-2 rounded-full bg-[#F1E6FF]">
                            <span className="text-[#7A36FF] text-sm font-bold uppercase tracking-wider">
                                PLAN OF ACTION
                            </span>
                        </div>
                    </div>

                    {/* Heading */}

                    <h2 className="text-center text-[#080B1D] font-black text-5xl md:text-9xl mt-8">
                        How We Execute Success
                    </h2>

                    {/* Top Row */}

                    <div className="grid md:grid-cols-2 gap-16 mt-20">

                        {/* Step 2 */}

                        <div className="flex items-center justify-center gap-10">

                            <img
                                src={steps[1].image}
                                alt=""
                                className={`
                w-56 h-56 object-contain
                transition-all duration-500
                ${active === 2 ? "scale-110" : "scale-100"}
              `}
                            />

                            <div className="text-center">
                                <h3 className="text-4xl font-bold text-[#0D1023] mb-5">
                                    {steps[1].title}
                                </h3>

                                <p className="text-[#555B66] text-xl leading-10 max-w-md">
                                    {steps[1].desc}
                                </p>

                                <button
                                    onMouseEnter={() => setActive(2)}
                                    className={`
                  mt-8 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black transition-all duration-300
                  ${active === 2
                                            ? "text-[#A051FF]"
                                            : "text-[#F0D8CE]"
                                        }
                `}
                                >
                                    02
                                </button>
                            </div>
                        </div>

                        {/* Step 4 */}

                        <div className="flex items-center justify-center gap-10">

                            <img
                                src={steps[3].image}
                                alt=""
                                className={`
                w-56 h-56 object-contain
                transition-all duration-500
                ${active === 4 ? "scale-110" : "scale-100"}
              `}
                            />

                            <div className="text-center">
                                <h3 className="text-4xl font-bold text-[#0D1023] mb-5">
                                    {steps[3].title}
                                </h3>

                                <p className="text-[#555B66] text-xl leading-10 max-w-md">
                                    {steps[3].desc}
                                </p>

                                <button
                                    onMouseEnter={() => setActive(4)}
                                    className={`
                  mt-8 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black transition-all duration-300
                  ${active === 4
                                            ? "text-[#A051FF]"
                                            : "text-[#F0D8CE]"
                                        }
                `}
                                >
                                    04
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}

                    <div className="mt-10 border-t border-[#CFCFCF]" />

                    {/* Bottom Row */}

                    <div className="grid md:grid-cols-2 gap-16 mt-12">

                        {/* Step 1 */}

                        <div className="flex items-center justify-center gap-10">

                            <div className="text-center">

                                <button
                                    onMouseEnter={() => setActive(1)}
                                    className={`
                  text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black transition-all duration-300
                  ${active === 1
                                            ? "text-[#A051FF]"
                                            : "text-[#F0D8CE]"
                                        }
                `}
                                >
                                    01
                                </button>

                                <h3 className="text-4xl font-bold text-[#0D1023] mt-5 mb-5">
                                    {steps[0].title}
                                </h3>

                                <p className="text-[#555B66] text-xl leading-10 max-w-md">
                                    {steps[0].desc}
                                </p>
                            </div>

                            <img
                                src={steps[0].image}
                                alt=""
                                className={`
                w-56 h-56 object-contain
                transition-all duration-500
                ${active === 1 ? "scale-110" : "scale-100"}
              `}
                            />
                        </div>

                        {/* Step 3 */}

                        <div className="flex items-center justify-center gap-10">

                            <div className="text-center">

                                <button
                                    onMouseEnter={() => setActive(3)}
                                    className={`
                  text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black transition-all duration-300
                  ${active === 3
                                            ? "text-[#A051FF]"
                                            : "text-[#F0D8CE]"
                                        }
                `}
                                >
                                    03
                                </button>

                                <h3 className="text-4xl font-bold text-[#0D1023] mt-5 mb-5">
                                    {steps[2].title}
                                </h3>

                                <p className="text-[#555B66] text-xl leading-10 max-w-md">
                                    {steps[2].desc}
                                </p>
                            </div>

                            <img
                                src={steps[2].image}
                                alt=""
                                className={`
                w-56 h-56 object-contain
                transition-all duration-500
                ${active === 3 ? "scale-110" : "scale-100"}
              `}
                            />
                        </div>
                    </div>
                </div>
            </section>



            <section className="bg-[#f5f5f5] py-8 lg:py-12">
                <div className="max-w-[1800px] mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">

                        {/* Left Image */}
                        <div className="flex justify-center">
                            <img
                                src={dreamWebsite}
                                alt="Dream Website"
                                className="w-full max-w-[900px] object-contain"
                            />
                        </div>

                        {/* Right Content */}
                        <div className="w-full">

                            <h2 className="text-[#10002b] text-4xl md:text-5xl lg:text-[64px] font-bold leading-tight mb-8">
                                Get Started With Building Your Dream Website
                            </h2>

                            <p className="text-[#222] text-lg md:text-xl leading-relaxed mb-10">
                                Are you in search of a top-notch web development company in
                                Lucknow? Look no further! At Digital Marketing Robo, we're
                                dedicated to transforming your digital dreams into reality.
                            </p>



                        </div>

                    </div>
                </div>
            </section>




            <section className="relative bg-[#f8f8f8] py-20 overflow-hidden">
                {/* Vertical Text */}
                <div className="hidden xl:block absolute left-8 top-32 h-full">
                    <h2
                        className="text-[78px] font-light tracking-[8px] text-transparent uppercase"
                        style={{
                            WebkitTextStroke: "1px #d9d9d9",
                            writingMode: "vertical-rl",
                            transform: "rotate(180deg)",
                        }}
                    >
                        CUSTOM APPLICATION
                    </h2>
                </div>

                <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
                    {/* Heading */}
                    <div className="mb-12">
                        <span className="text-[#f29b26] uppercase text-sm tracking-wide">
                            Custom Application Development Services
                        </span>

                        <h2 className="mt-4 text-4xl lg:text-[56px] font-semibold leading-tight text-black">
                            Tailored Solutions for Your Unique Custom Application Needs
                        </h2>

                        <p className="mt-5 text-[18px] leading-9 text-[#666] max-w-[1300px]">
                            As a reliable custom application development company, we design,
                            create, and deploy tailor-made software applications made from
                            top-tier technologies. Many ready-made applications miss out on the
                            specific functionalities that businesses need to meet their
                            targets. However, we offer custom application development services
                            that can be used for multiple purposes like customer relationship
                            management, data analysis, business workflows, etc. The following
                            are the tailored custom app development services offered by our
                            experts:
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {services.map((service, index) => {
                            const Icon = service.icon;

                            return (
                                <div
                                    key={index}
                                    className={`
                  rounded-lg border
                  p-8 min-h-[220px]
                  transition-all duration-300
                  shadow-sm
                  hover:shadow-lg
                  hover:-translate-y-1
                  ${service.active
                                            ? "bg-[#edf7fc] border-[#d8edf8]"
                                            : "bg-white border-[#e9eef2]"
                                        }
                `}
                                >
                                    <Icon
                                        size={42}
                                        className="text-[#58a7d9] mb-5 stroke-[1.5]"
                                    />

                                    <h3 className="text-[22px] font-semibold text-black mb-4">
                                        {service.title}
                                    </h3>

                                    <p className="text-[#666] text-[17px] leading-8">
                                        {service.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>





            <section className="bg-[#eaf5fb] overflow-hidden">
                <div className="grid lg:grid-cols-[450px_1fr]">

                    {/* LEFT IMAGE */}
                    <motion.div
                        initial={{ x: -250, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        className="hidden lg:flex items-start justify-start"
                    >
                        <img
                            src={customAppImage}
                            alt="Custom Application"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    {/* RIGHT CONTENT */}
                    <div className="px-8 lg:px-12 py-8">
                        <h2 className="text-4xl lg:text-[54px] font-serif font-semibold text-black mb-4">
                            Benefits of Custom Application Development
                        </h2>

                        <p className="text-gray-600 text-lg leading-8 mb-10">
                            Custom application development services can very well adapt to the
                            specific needs and challenges of any business. These tailor-made
                            applications offer unique features that automate business
                            operations, enhance customer experience, maintain compliance with
                            regulatory standards & add to the competitive advantage of the
                            business.
                        </p>

                        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
                            {benefits.map((item, index) => (
                                <div key={index}>
                                    <div className="flex items-center gap-3 mb-3">
                                        <ArrowRight
                                            size={18}
                                            className="text-[#1f84d5] flex-shrink-0"
                                        />

                                        <h3 className="text-[20px] font-semibold text-black">
                                            {item.title}
                                        </h3>
                                    </div>

                                    <p className="text-gray-600 text-lg leading-8 pl-8">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>


            <section className="bg-white py-8 md:py-10">
                <div className="max-w-[1880px] mx-auto px-7">

                    {/* Heading */}
                    <h2
                        className="
            text-center
            text-[34px]
            md:text-[46px]
            font-semibold
            text-black
            mb-8
            leading-none
          "
                        style={{
                            fontFamily: "Georgia, serif",
                        }}
                    >
                        Related Industries
                    </h2>

                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        {industries.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={index}
                                    className="
                  h-[155px]
                  rounded-[22px]
                  bg-[#2f2f2f]
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
                  transition-all
                  duration-300
                  hover:bg-[#353535]
                "
                                >
                                    <Icon
                                        size={52}
                                        strokeWidth={1.5}
                                        className="text-white mb-5"
                                    />

                                    <h3
                                        className="
                    text-white
                    text-[16px]
                    font-semibold
                    leading-tight
                    px-4
                  "
                                    >
                                        {item.title}
                                    </h3>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </section>




            <section className="w-full bg-[#f6521e] py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    {/* Heading */}
                    <h2 className="text-white font-bold text-4xl md:text-5xl lg:text-[58px] leading-tight">
                        Ready to Transform Your Digital Presence?
                    </h2>

                    {/* Description */}
                    <p className="mt-6 text-white/90 text-lg md:text-xl font-normal">
                        Let's discuss your project and explore how we can help you achieve your goals.
                    </p>

                    {/* Button */}
                    <div className="mt-8">
                        <button
                            className="
              inline-flex
              items-center
              gap-3
              bg-[#ff6129]
              hover:bg-[#ff6d39]
              text-white
              text-xl
              font-medium
              px-10
              py-5
              rounded-full
              transition-all
              duration-300
              hover:scale-105
            "
                        >
                            Start Your Project Today
                            <ArrowRight size={24} />
                        </button>
                    </div>
                </div>
            </section>

            <section className="bg-[#f7f7f7] py-20 lg:py-24">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Heading */}
                    <div className="text-center max-w-5xl mx-auto">
                        <h2 className="text-[#1d2b42] text-4xl md:text-5xl font-bold leading-tight">
                            Why You Should Choose OrangeMantra As Your Preferred
                            <br />
                            Website Development Company?
                        </h2>

                        <p className="mt-8 text-[#5f6c80] text-xl leading-relaxed">
                            Experience plays an important role in the web design process which
                            makes us a seasoned web development company.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-20">
                        {features.map((item) => (
                            <div key={item.number} className="flex items-start gap-6">
                                {/* Number Circle */}
                                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#ff5a1f] flex items-center justify-center">
                                    <span className="text-white font-bold text-3xl">
                                        {item.number}
                                    </span>
                                </div>

                                {/* Content */}
                                <div>
                                    <h3 className="text-[#1d2b42] text-[42px] font-bold leading-tight">
                                        {item.title}
                                    </h3>

                                    <p className="mt-6 text-[#5f6c80] text-[22px] leading-[1.8] max-w-xl">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


        </>

    );
};

export default WebDevelopment;
