import SEO from "../components/seo/SEO";
import wordpressDevelopment from "../assets/webdev-multilingual-services.webp";
import laptopMockup from "../assets/shared-laptop-mockup.webp";
import manImage from "../assets/webdev-consultant.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowUpRight, FiArrowRightCircle } from "react-icons/fi";

import "swiper/css";
import "swiper/css/navigation";
import solar from "../assets/webdev-portfolio-solar.webp";
import max from "../assets/webdev-portfolio-max.webp";
import intime from "../assets/webdev-portfolio-intime.webp";
import sigma from "../assets/webdev-portfolio-sigma.webp";
import mothers from "../assets/webdev-portfolio-mothers-care.webp";
import happyIndia from "../assets/webdev-portfolio-happy-india.webp";
import hospitality from "../assets/webdev-portfolio-designer-hospitality.webp";
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

import analysisImg from "../assets/webdev-process-analysis.png";
import strategyImg from "../assets/webdev-process-strategy.png";
import clientImg from "../assets/webdev-process-client-input.png";
import executionImg from "../assets/webdev-process-execution.png";



import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";


import customAppImage from "../assets/webdev-custom-app-benefits.webp";

import dreamWebsite from "../assets/webdev-dream-website.webp";



const WebDevelopment = () => {
    const navigate = useNavigate();
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
                "We deliver visually stunning, scalable websites and portals with seamless accessibility and smooth customer engagement.",
        },
        {
            icon: Smartphone,
            title: "Mobile Application Development",
            description:
                "Unlock the potential of mobile technology with user-friendly apps packed with features, ensuring your audience stays engaged and delighted.",
            active: true,
        },
        {
            icon: BarChart3,
            title: "Business Analytics Services",
            description:
                "Gain valuable insights from your data with advanced analytics, visualizations, and reports that drive informed decision-making.",
        },
        {
            icon: Boxes,
            title: "Product Engineering Services",
            description:
                "From concept to deployment, we design innovative, scalable, and market-ready products that meet the highest standards of usability.",
        },
        {
            icon: FileBarChart,
            title: "Corporate Application Development",
            description:
                "Enhance operations with tailored corporate applications that align with your business goals and deliver scalable growth.",
        },
        {
            icon: Users,
            title: "Dedicated Development Team",
            description:
                "Work with a dedicated team of professionals focused exclusively on your projects, ensuring flexibility, scalability, and timely delivery.",
        },
    ];
    const benefits = [
        {
            title: "Tailored Solutions",
            desc: "Applications designed specifically to meet your industry-specific goals and business targets.",
        },
        {
            title: "Improved UX",
            desc: "Intuitive interfaces and smooth navigation that enhance customer satisfaction and engagement.",
        },
        {
            title: "Seamless Integration",
            desc: "Custom apps that integrate effortlessly with your existing systems and third-party platforms for smooth data flow.",
        },
        {
            title: "High-Performance Delivery",
            desc: "Responsive, feature-rich applications with custom themes and plug-ins to maximize efficiency.",
        },
        {
            title: "Robust Security",
            desc: "Strong security measures to protect sensitive data and ensure compliance with industry standards.",
        },
        {
            title: "Scalability and Flexibility",
            desc: "Applications built to grow with your business, offering adaptability for evolving needs.",
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
                "We design business-specific websites and applications that meet your objectives while helping you stand out online.",
        },
        {
            number: "02",
            title: "Expert Team of Developers",
            description:
                "Our skilled developers apply the right technology to create flexible, scalable, and high-quality solutions.",
        },
        {
            number: "03",
            title: "Commitment to Timely Delivery",
            description:
                "We respect your time and ensure projects are completed quickly without compromising quality.",
        },
        {
            number: "04",
            title: "Future-Ready Development",
            description:
                "Our websites are built with advanced architecture, multilingual support, and adaptability to keep your business ahead.",
        },
    ];



    return (
        <>
            <SEO
                title="Web Development Company – Custom Website Development | Biosoftech"
                description="Biosoftech Solutions builds modern, responsive websites and web applications. Corporate sites, e-commerce stores, and custom portals with 500+ projects delivered."
                keywords="web development company, website development, custom web applications, e-commerce development, responsive websites, India"
                ogUrl="https://www.biosoftech.com/web-development"
            />
            <section aria-label="Web development hero banner" className="w-full bg-[#F7F5EF] pb-12 lg:pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center min-h-0 lg:min-h-[calc(100vh-80px)] pt-24 sm:pt-28 md:pt-32">
                        <div className="flex flex-col text-center lg:text-left">
                            <h1 className="text-fluid-6xl font-bold text-black leading-tight">
                                Build Websites That
                                <br />
                                Drive Growth
                            </h1>
                            <div className="mt-6 sm:mt-8 lg:mt-10 text-base sm:text-lg lg:text-[22px] leading-relaxed lg:leading-[2] text-[#111] max-w-[900px]">
                                <p>
                                    At Biosoftech Solutions, we don&apos;t just create websites &mdash; we build powerful digital platforms that help businesses scale, engage customers, and achieve measurable success.
                                </p>
                                <p className="mt-4 sm:mt-6 lg:mt-10">
                                    With years of expertise and <span className="font-bold">500+ projects delivered</span>, our team specializes in designing websites that are modern, responsive, and performance-driven. Whether you need a corporate site, an e-commerce store, or a custom industry portal, we ensure your website becomes a true growth engine.
                                </p>
                            </div>
                            <div className="mt-6 sm:mt-10 flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 lg:gap-12">
                                <div className="text-center lg:text-left">
                                    <h3 className="text-2xl sm:text-3xl md:text-[52px] font-bold">Google</h3>
                                    <div className="text-[#f4a300] text-lg sm:text-xl md:text-[34px]">★★★★★</div>
                                    <p className="font-semibold text-fluid-base">Rated 4.9/5 Stars</p>
                                </div>
                                <div className="text-center lg:text-left">
                                    <h3 className="text-2xl sm:text-3xl md:text-[52px] font-bold">Justdial</h3>
                                    <p className="border-t border-black text-xs sm:text-sm md:text-[20px] font-semibold mt-2 pt-2">Trusted</p>
                                </div>
                                <div className="text-center lg:text-left">
                                    <h3 className="text-2xl sm:text-3xl md:text-[52px] font-bold">Trustpilot</h3>
                                    <div className="text-[#f4a300] text-lg sm:text-xl md:text-[34px]">★★★★★</div>
                                    <p className="font-semibold text-fluid-base">Rated 4.8/5 Stars</p>
                                </div>
                            </div>
                            <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-0 justify-center lg:justify-start">
                                <button onClick={() => navigate("/contact")} className="group bg-[#F7B700] px-5 sm:px-6 lg:px-10 h-[54px] sm:h-[60px] lg:h-[74px] text-base sm:text-lg lg:text-[22px] font-medium flex items-center justify-center gap-3 sm:gap-4 hover:bg-[#e4aa00] transition cursor-pointer min-h-[44px]">
                                    REQUEST PROPOSAL <FiArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </button>
                                <button onClick={() => navigate("/contact")} className="group bg-black text-white px-5 sm:px-6 lg:px-10 h-[54px] sm:h-[60px] lg:h-[74px] text-base sm:text-lg lg:text-[22px] font-medium flex items-center justify-center gap-3 sm:gap-4 hover:bg-[#151515] transition cursor-pointer min-h-[44px]">
                                    OUR SERVICES <FiArrowRightCircle className="transition group-hover:translate-x-1" />
                                </button>
                            </div>
                        </div>
                        <div className="relative mt-8 sm:mt-12 lg:mt-0">
                            <img src={laptopMockup} alt="Web development laptop mockup showcasing website platform" fetchPriority="high" width="800" height="500" className="relative z-10 w-full" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-[#f8f8f8] py-10 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">

                    {/* TOP LABEL */}
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <span className="w-14 h-[2px] bg-[#a855f7]" />

                        <p className="text-[#8b5cf6] uppercase font-semibold text-sm tracking-wide">
                            Multilingual Website Development
                        </p>

                        <span className="w-14 h-[2px] bg-[#a855f7]" />
                    </div>

                    {/* HEADING */}
                    <h2 className="text-center text-[#101126] font-bold leading-tight text-4xl md:text-5xl lg:text-[54px] xl:text-[64px]">
                        Websites That Speak
                        <br />
                        Your Customer&apos;s Language
                    </h2>

                    {/* CONTENT */}
                    <div className="grid lg:grid-cols-[400px_1fr_300px] gap-10 items-center mt-10">

                        {/* LEFT IMAGE */}
                        <div>
                            <img
                                src={wordpressDevelopment}
                                alt="Multilingual Development"
                                loading="lazy"
                                width="400"
                                height="500"
                                className="w-full object-contain"
                            />
                        </div>

                        {/* CENTER CONTENT */}
                        <div>

                            <p className="text-[#5d6070] text-[18px] leading-8">
                                At Biosoftech Solutions, we specialize in building websites
                                that go beyond borders. Our team designs and develops platforms
                                in multiple languages, ensuring your business connects with
                                audiences across India and around the world.
                            </p>

                            {/* FEATURE 1 */}
                            <div className="flex gap-5 mt-8 pb-6 border-b border-[#e7e7e7]">

                                <Users
                                    size={46}
                                    className="text-[#8b5cf6] shrink-0"
                                />

                                <div>
                                    <h3 className="font-bold text-[#111827] text-[24px]">
                                        Easy
                                    </h3>

                                    <p className="text-[#5f6270] text-[18px] mt-1">
                                        Seamless integration of multiple languages.
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
                                        Affordable
                                    </h3>

                                    <p className="text-[#5f6270] text-[18px] mt-1">
                                        Pay only for the languages you need.
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
                                        Advanced
                                    </h3>

                                    <p className="text-[#5f6270] text-[18px] mt-1">
                                        Future-ready technology with translation support and localization features.
                                    </p>
                                </div>
                            </div>

                            {/* BUTTON */}
                            <button
                                onClick={() => navigate("/contact")}
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
                                loading="lazy"
                                width="330"
                                height="400"
                                className="w-full max-w-[330px] object-contain"
                            />
                        </div>

                    </div>
                </div>
            </section>








            <section className="bg-[#f7f7f7] py-20 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Heading */}

                    <div className="text-center mb-16">
                        <h2 className="text-black font-bold text-fluid-5xl leading-tight">
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
                                            loading="lazy"
                                            width="1200"
                                            height="800"
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

                    <h2 className="text-center text-[#080B1D] font-black text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-9xl mt-8">
                        How We Execute Success
                    </h2>

                    {/* Top Row */}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mt-20">

                        {/* Step 2 */}

                        <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10">

                            <img
                                src={steps[1].image}
                                alt={steps[1].title}
                                loading="lazy"
                                width="224"
                                height="224"
                                className={`
                w-36 h-36 sm:w-56 sm:h-56 object-contain
                transition-all duration-500
                ${active === 2 ? "scale-110" : "scale-100"}
              `}
                            />

                            <div className="text-center">
                                <h3 className="text-fluid-3xl font-bold text-[#0D1023] mb-3 md:mb-5">
                                    {steps[1].title}
                                </h3>

                                <p className="text-[#555B66] text-fluid-lg leading-6 sm:leading-7 md:leading-10 max-w-md">
                                    {steps[1].desc}
                                </p>

                                <button
                                    onMouseEnter={() => setActive(2)}
                                    className={`
                  mt-6 md:mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-black transition-all duration-300
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

                        <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10">

                            <img
                                src={steps[3].image}
                                alt={steps[3].title}
                                loading="lazy"
                                width="224"
                                height="224"
                                className={`
                w-36 h-36 sm:w-56 sm:h-56 object-contain
                transition-all duration-500
                ${active === 4 ? "scale-110" : "scale-100"}
              `}
                            />

                            <div className="text-center">
                                <h3 className="text-fluid-3xl font-bold text-[#0D1023] mb-3 md:mb-5">
                                    {steps[3].title}
                                </h3>

                                <p className="text-[#555B66] text-fluid-lg leading-6 sm:leading-7 md:leading-10 max-w-md">
                                    {steps[3].desc}
                                </p>

                                <button
                                    onMouseEnter={() => setActive(4)}
                                    className={`
                  mt-6 md:mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-black transition-all duration-300
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mt-12">

                        {/* Step 1 */}

                        <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10">

                            <div className="text-center">

                                <button
                                    onMouseEnter={() => setActive(1)}
                                    className={`
                  text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-black transition-all duration-300
                  ${active === 1
                                            ? "text-[#A051FF]"
                                            : "text-[#F0D8CE]"
                                        }
                `}
                                >
                                    01
                                </button>

                                <h3 className="text-fluid-3xl font-bold text-[#0D1023] mt-3 md:mt-5 mb-3 md:mb-5">
                                    {steps[0].title}
                                </h3>

                                <p className="text-[#555B66] text-fluid-lg leading-6 sm:leading-7 md:leading-10 max-w-md">
                                    {steps[0].desc}
                                </p>
                            </div>

                            <img
                                src={steps[0].image}
                                alt={steps[0].title}
                                loading="lazy"
                                width="224"
                                height="224"
                                className={`
                w-36 h-36 sm:w-56 sm:h-56 object-contain
                transition-all duration-500
                ${active === 1 ? "scale-110" : "scale-100"}
              `}
                            />
                        </div>

                        {/* Step 3 */}

                        <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10">

                            <div className="text-center">

                                <button
                                    onMouseEnter={() => setActive(3)}
                                    className={`
                  text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-black transition-all duration-300
                  ${active === 3
                                            ? "text-[#A051FF]"
                                            : "text-[#F0D8CE]"
                                        }
                `}
                                >
                                    03
                                </button>

                                <h3 className="text-fluid-3xl font-bold text-[#0D1023] mt-3 md:mt-5 mb-3 md:mb-5">
                                    {steps[2].title}
                                </h3>

                                <p className="text-[#555B66] text-fluid-lg leading-6 sm:leading-7 md:leading-10 max-w-md">
                                    {steps[2].desc}
                                </p>
                            </div>

                            <img
                                src={steps[2].image}
                                alt={steps[2].title}
                                loading="lazy"
                                width="224"
                                height="224"
                                className={`
                w-36 h-36 sm:w-56 sm:h-56 object-contain
                transition-all duration-500
                ${active === 3 ? "scale-110" : "scale-100"}
              `}
                            />
                        </div>
                    </div>
                </div>
            </section>



            <section className="bg-[#f5f5f5] py-8 lg:py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">

                        {/* Left Image */}
                        <div className="flex justify-center">
                            <img
                                src={dreamWebsite}
                                alt="Dream Website"
                                loading="lazy"
                                width="900"
                                height="600"
                                className="w-full max-w-[900px] object-contain"
                            />
                        </div>

                        {/* Right Content */}
                        <div className="w-full">

                            <h2 className="text-[#10002b] text-3xl md:text-4xl lg:text-[52px] xl:text-[64px] font-bold leading-tight mb-8">
                                Get Started With Building Your Dream Website
                            </h2>

                            <p className="text-[#222] text-fluid-lg leading-relaxed mb-6">
                                Are you in search of a top-notch software and website development company in
                                Lucknow? Look no further! At Biosoftech Solutions, we're
                                dedicated to transforming your ideas into reality with powerful,
                                future-ready technology.
                            </p>

                            <p className="text-[#222] text-fluid-lg leading-relaxed mb-10">
                                From websites and mobile apps to desktop software, cloud platforms, AI automation, and industry-specific systems (schools, hotels, restaurants, billing, pathology labs, staff management), we deliver solutions that help businesses scale and succeed.
                            </p>

                            <button onClick={() => navigate("/contact")} className="px-8 py-4 bg-[#ffba00] text-black font-semibold uppercase hover:brightness-95 transition text-fluid-base">
                                Book a Free Consultation Today!
                            </button>

                        </div>

                    </div>
                </div>
            </section>




            <section className="relative bg-[#f8f8f8] py-20 overflow-hidden">
                {/* Vertical Text */}
                <div className="hidden xl:block absolute left-8 top-32 h-full">
                    <h3
                        className="text-[78px] font-light tracking-[8px] text-transparent uppercase"
                        style={{
                            WebkitTextStroke: "1px #d9d9d9",
                            writingMode: "vertical-rl",
                            transform: "rotate(180deg)",
                        }}
                    >
                        CUSTOM APPLICATION
                    </h3>
                </div>

                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    {/* Heading */}
                    <div className="mb-12">
                        <span className="text-[#f29b26] uppercase text-sm tracking-wide">
                            Custom Application Development Services
                        </span>

                        <h2 className="mt-4 text-3xl md:text-4xl lg:text-[48px] xl:text-[56px] font-semibold leading-tight text-black">
                            Tailored Solutions for Your Unique Business Needs
                        </h2>

                        <p className="mt-5 text-[18px] leading-9 text-[#666] max-w-[1300px]">
                            At Biosoftech Solutions, we specialize in building custom
                            applications that empower businesses to scale, innovate, and
                            succeed. Our solutions are designed to be flexible, future-ready,
                            and aligned with your goals.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
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
                            loading="lazy"
                            width="1920"
                            height="1080"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    {/* RIGHT CONTENT */}
                    <div className="px-8 lg:px-12 py-8">
                        <h2 className="text-3xl md:text-4xl lg:text-[44px] xl:text-[54px] font-serif font-semibold text-black mb-4">
                            Benefits of Custom Application Development
                        </h2>

                        <p className="text-gray-600 text-lg leading-8 mb-10">
                            At Biosoftech Solutions, we design tailor-made applications that
                            adapt to the specific needs and challenges of your business. Our
                            solutions automate operations, enhance customer experience, maintain
                            compliance, and give you a competitive edge. No matter the size of
                            your organization, we focus on delivering services that match your
                            immediate requirements while preparing you for future growth.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
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


            <section className="bg-[#1d2b42] py-16 md:py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-white font-bold text-4xl md:text-5xl lg:text-[58px] leading-tight">
                        Ready to Transform Your Business?
                    </h2>
                    <p className="mt-6 text-white/80 text-fluid-lg leading-relaxed">
                        Let&apos;s discuss your project and explore how Biosoftech Solutions can help you achieve your goals with powerful web, mobile, desktop, cloud, AI automation, and industry-specific software solutions.
                    </p>
                    <div className="mt-8">
                        <button onClick={() => navigate("/contact")} className="inline-flex items-center gap-3 bg-[#ffba00] hover:brightness-95 text-black text-xl font-semibold px-10 py-5 rounded-full transition-all duration-300 hover:scale-105">
                            Start Your Project Today
                            <ArrowRight size={24} />
                        </button>
                    </div>
                </div>
            </section>

            <section className="bg-white py-8 md:py-10">
                <div className="max-w-7xl mx-auto px-7">

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
                  bg-[#0821ff]
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
                  transition-all
                  duration-300
                  hover:bg-[#122e9b]
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
                        Let&apos;s Build Your Digital Future
                    </h2>

                    {/* Description */}
                    <p className="mt-6 text-white/90 text-fluid-lg font-normal">
                        Your website is more than just code — it&apos;s your business engine, brand identity, and customer gateway. At Biosoftech Solutions, we are the strategic partner you need to build it right with web, mobile, desktop, cloud, AI automation, and industry-specific software solutions.
                    </p>

                    {/* Button */}
                    <div className="mt-8">
                        <button
                            onClick={() => navigate("/contact")}
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
                            Contact Us
                            <ArrowRight size={24} />
                        </button>
                    </div>
                </div>
            </section>

            <section className="bg-[#f7f7f7] py-20 lg:py-24">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Heading */}
                    <div className="text-center max-w-5xl mx-auto">
                        <h2 className="text-[#1d2b42] text-fluid-4xl font-bold leading-tight">
                            Why Choose Biosoftech Solutions As Your Preferred
                            <br />
                            Website Development Company?
                        </h2>

                        <p className="mt-8 text-[#5f6c80] text-xl leading-relaxed">
                            Experience plays a vital role in the web design and development process — and at Biosoftech Solutions, we bring proven expertise with 500+ projects delivered across 35+ industries.
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
                                    <h3 className="text-[#1d2b42] text-2xl sm:text-3xl md:text-[32px] lg:text-[42px] font-bold leading-tight">
                                        {item.title}
                                    </h3>

                                    <p className="mt-6 text-[#5f6c80] text-[18px] lg:text-[22px] leading-[1.8] max-w-xl">
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
