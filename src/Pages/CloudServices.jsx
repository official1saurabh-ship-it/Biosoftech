import SEO from "../components/seo/SEO";
import StructuredData from "../components/seo/StructuredData";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowUpRight, FiArrowRightCircle } from "react-icons/fi";
import { ArrowRight } from "lucide-react";
import { RefreshCw } from "lucide-react";
import {
    Bot,
    ShieldCheck,
    CloudCog,
    ArrowLeftRight,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";
import {
    HeartPulse,
    TrendingUp,
    ShoppingCart,
    BookOpen,
    Cpu,
    Truck,
    Monitor,
    Home,
    MapPin,
    Globe,
    Phone,
    Sun,
} from "lucide-react";

import {
    FaHeartbeat,
    FaChartLine,
    FaShoppingCart,
    FaBookOpen,
    FaMicrochip,
    FaTruck,
    FaDesktop,
    FaHome,
    FaMapMarkerAlt,
    FaGlobe,
    FaPhoneAlt,
    FaBolt,
    FaShieldAlt,
    FaFileAlt,
} from "react-icons/fa";
const industries = [
    {
        icon: FaHeartbeat,
        title: "Healthcare & Life Sciences",
        description:
            "Build HIPAA-compliant Azure solutions for hospitals, clinics, patient portals, EHR systems, and AI-powered healthcare platforms.",
    },
    {
        icon: FaChartLine,
        title: "Banking & Financial Services",
        description:
            "Deploy secure financial systems with Azure cloud, analytics, fraud prevention, compliance, and transaction processing.",
    },
    {
        icon: FaShoppingCart,
        title: "E-commerce & Retail",
        description:
            "Scalable retail architectures with Azure Kubernetes Service, recommendation engines, and cloud-native commerce solutions.",
    },
    {
        icon: FaBookOpen,
        title: "Education & EdTech",
        description:
            "Virtual classrooms, LMS platforms, AI learning systems, student analytics, and secure online assessments.",
    },
    {
        icon: FaMicrochip,
        title: "Manufacturing & Industrial IoT",
        description:
            "Industrial automation, predictive maintenance, digital twins, telemetry systems, and smart factory solutions.",
    },
    {
        icon: FaTruck,
        title: "Automotive & Mobility",
        description:
            "Connected vehicles, route optimization, fleet management systems, IoT integrations, and mobility platforms.",
    },
    {
        icon: FaDesktop,
        title: "Gaming & Entertainment",
        description:
            "Cloud gaming infrastructure, multiplayer backends, real-time asset delivery, and scalable gaming ecosystems.",
    },
    {
        icon: FaHome,
        title: "Real Estate & PropTech",
        description:
            "Property portals, CRM systems, virtual tours, real estate analytics, and cloud-based management platforms.",
    },
    {
        icon: FaMapMarkerAlt,
        title: "Logistics & Supply Chain",
        description:
            "Shipment tracking, warehouse automation, route intelligence, inventory management, and cloud logistics.",
    },
    {
        icon: FaGlobe,
        title: "Travel & Hospitality",
        description:
            "Booking engines, reservation systems, pricing automation, traveler analytics, and hospitality platforms.",
    },
    {
        icon: FaPhoneAlt,
        title: "Telecom & SaaS",
        description:
            "Multi-tenant SaaS applications, API management, enterprise SSO, DevOps automation, and telecom platforms.",
    },
    {
        icon: FaBolt,
        title: "Energy & Utilities",
        description:
            "Smart grid monitoring, energy analytics, compliance management, and cloud infrastructure solutions.",
    },
    {
        icon: FaShieldAlt,
        title: "Government & Public Sector",
        description:
            "Citizen portals, identity verification systems, document repositories, and secure government services.",
    },
    {
        icon: FaFileAlt,
        title: "Media & Digital Publishing",
        description:
            "Content management systems, video streaming infrastructure, CDN integration, and media delivery platforms.",
    },
];

import robotImage from "../assets/cloud-why-biosoftech-robot.avif";
import consultationImage from "../assets/consultation-form.webp";
import laptopMockup from "../assets/shared-laptop-mockup.webp";
import processImg1 from "../assets/digital_ocean_proccess_1.webp";
import processImg2 from "../assets/digital_ocean_proccess_2.webp";
import processImg3 from "../assets/digital_ocean_proccess_3.webp";
import processImg4 from "../assets/digital_ocean_proccess_4.webp";
import processImg5 from "../assets/digital_ocean_proccess_5.webp";
import processImg6 from "../assets/digital_ocean_proccess_6.webp";
import useEmblaCarousel from "embla-carousel-react";

import caseStudy1 from "../assets/cloud-case-study-sap.jpg";
import caseStudy2 from "../assets/cloud-case-study-banking.jpg";


const CloudServices = () => {
    const navigate = useNavigate();
    const features = [
        {
            icon: "/icons/traffic.png",
            title: "Traffic Management",
            description:
                "Biosoftech's API & Application Gateway efficiently handles incoming traffic, distributing it across multiple backend services to ensure optimal performance, prevent bottlenecks, and maintain high availability for applications.",
        },
        {
            icon: "/icons/security.png",
            title: "Security Measures",
            description:
                "These gateways implement robust security protocols, including authentication, authorization, and encryption, safeguarding APIs and applications against unauthorized access, data breaches, and other potential security threats.",
        },
        {
            icon: "/icons/scalability.png",
            title: "Scalability",
            description:
                "With scalable architecture, the gateways seamlessly adapt to varying workloads, accommodating increased traffic and demand. This ensures consistent performance and responsiveness as applications and API usage grow over time.",
        },
        {
            icon: "/icons/load-balancing.png",
            title: "Load Balancing",
            description:
                "The gateways offer intelligent load balancing, evenly distributing incoming requests among multiple servers. This enhances resource utilization, prevents server overload, and improves overall system reliability and responsiveness.",
        },
        {
            icon: "/icons/protocol.png",
            title: "Protocol Support:",
            description:
                "Supporting various communication protocols and data formats, our gateways facilitate interoperability between different services and systems. This flexibility ensures compatibility with a diverse range of applications and simplifies integration processes.",
        },
        {
            icon: "/icons/analytics.png",
            title: "Analytics and Monitoring",
            description:
                "Comprehensive analytics and monitoring tools provide valuable insights into API and application performance. Real-time metrics, logs, and reports enable proactive management, troubleshooting, and optimization, ensuring a smooth and efficient operation of digital services.",
        },
    ];

    const leftFeatures = [
        {
            icon: Bot,
            title: "Certified AWS Specialists",
            description:
                "Our engineers are certified in Solutions Architecture, DevOps, Security, and Networking, bringing deep expertise to every AWS project.",
        },
        {
            icon: ShieldCheck,
            title: "Business-Focused Cloud Strategy",
            description:
                "Every solution we design is tied to measurable outcomes — lower costs, faster deployments, improved uptime, and compliance assurance.",
        },
        {
            icon: Bot,
            title: "Security-First Framework",
            description:
                "We embed security at every stage: IAM policies, VPC segmentation, GuardDuty monitoring, encrypted pipelines, and continuous compliance.",
        },
    ];

    const rightFeatures = [
        {
            icon: CloudCog,
            title: "End-to-End Cloud Journey",
            description:
                "From consulting and architecture design to migration, app development, and managed services, we deliver the complete AWS lifecycle.",
        },
        {
            icon: ArrowLeftRight,
            title: "Smart Cost Optimization",
            description:
                "Our FinOps practice reduces AWS spend by 25–40% through rightsizing, Reserved Instances, autoscaling, and Savings Plans.",
        },
        {
            icon: CloudCog,
            title: "Global Service Reach",
            description:
                "With delivery expertise across India and international markets, we provide round-the-clock support and regional compliance knowledge.",
        },
    ];

    const stages = [
        {
            id: 1,
            stage: "STAGE 01",
            title: "Requirement Analysis",
            desc: "We begin by understanding your business objectives, technical needs, and application requirements. Our team analyzes current systems to identify gaps, challenges, and optimization opportunities, ensuring a clear roadmap before design and development.",
            icon: "🔍",
        },
        {
            id: 2,
            stage: "STAGE 02",
            title: "Cloud Architecture Design",
            desc: "We design a secure and scalable cloud architecture tailored to your business. This includes defining compute resources, networking setup, storage structure, and deployment strategy — building a future-ready system that supports growth, performance, and cost efficiency.",
            icon: "☁️",
        },
        {
            id: 3,
            stage: "STAGE 03",
            title: "Deployment & Development",
            desc: "We set up your cloud environment and deploy infrastructure using industry best practices. Alongside deployment, we develop cloud applications, APIs, or backend systems with automation, version control, and optimized configuration for smooth operations.",
            icon: "🚀",
        },
        {
            id: 4,
            stage: "STAGE 04",
            title: "Testing & Optimization",
            desc: "We thoroughly test your system for performance, security, and scalability. Real-world simulations identify bottlenecks, and optimization ensures your application runs efficiently under different traffic conditions.",
            icon: "✅",
        },
        {
            id: 5,
            stage: "STAGE 05",
            title: "Test & Quality Assurance",
            desc: "We conduct rigorous testing including security validation, performance benchmarking, resilience testing, and cost efficiency analysis to guarantee a stable and reliable cloud environment.",
            icon: "🛡️",
        },
        {
            id: 6,
            stage: "STAGE 06",
            title: "Monitoring & Managed Services",
            desc: "After deployment, we provide continuous monitoring to ensure system stability and uptime. Our team handles updates, backups, security patches, and performance tuning to keep your environment secure, optimized, and fully operational.",
            icon: "📊",
        }
    ];

    const processImages = [processImg1, processImg2, processImg3, processImg4, processImg5, processImg6];

    const roadmap = [
        "Legacy system to AWS migration",
        "Lift-and-shift vs re-architecture assessment",
        "Multi-cloud to AWS consolidation",
        "AWS cost optimisation audits",
        "Disaster recovery setup on AWS",
        "Minimal-downtime migration planning",
    ];

    const caseStudies = [
        {
            image: caseStudy1,
            title:
                "Strong SAP implementation for efficient ERP, plus Disaster Recovery for a major power utility provider",
        },
        {
            image: caseStudy2,
            title:
                "Robust banking IT systems with 99.95% uptime, backed by an impeccable Tier-III data center",
        },
    ];

    const industries = [
        {
            icon: HeartPulse,
            title: "Healthcare & Life Sciences",
            description:
                "We build HIPAA-compliant Azure solutions for hospitals, clinics, and health tech companies.",
        },
        {
            icon: TrendingUp,
            title: "Banking & Financial Services",
            description:
                "Deploy secure financial systems on Azure with PCI-DSS compliance and fraud prevention.",
        },
        {
            icon: ShoppingCart,
            title: "E-commerce & Retail",
            description:
                "Build scalable retail architectures using Azure Cosmos DB and Azure Kubernetes Service.",
        },
        {
            icon: BookOpen,
            title: "Education & EdTech",
            description:
                "Power virtual classrooms and smart learning management systems with Azure services.",
        },
        {
            icon: Cpu,
            title: "Manufacturing & Industrial IoT",
            description:
                "Connect and monitor factory machinery globally using Azure IoT Hub and Digital Twins.",
        },
        {
            icon: Truck,
            title: "Automotive & Mobility",
            description:
                "Build intelligent fleet management and connected vehicle platforms on Azure.",
        },
        {
            icon: Monitor,
            title: "Gaming & Entertainment",
            description:
                "Host multiplayer backends and manage high-speed asset delivery using Azure PlayFab.",
        },
        {
            icon: Home,
            title: "Real Estate & PropTech",
            description:
                "Develop property management portals and advanced data analytics suites.",
        },
        {
            icon: MapPin,
            title: "Logistics & Supply Chain",
            description:
                "Optimize warehousing, automation, and shipment tracking systems using Azure.",
        },
        {
            icon: Globe,
            title: "Travel & Hospitality",
            description:
                "Power reservation systems, booking engines, and dynamic pricing algorithms.",
        },
        {
            icon: Phone,
            title: "Telecom & SaaS",
            description:
                "Accelerate software delivery pipelines and scalable SaaS architectures.",
        },
        {
            icon: Sun,
            title: "Agriculture & AgriTech",
            description:
                "Leverage satellite data and field sensor analytics to improve crop health.",
        },
    ];


    const sectionRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [active, setActive] = useState(0);

    // Development Process Scroll Logic
    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const section = sectionRef.current;

            const rect = section.getBoundingClientRect();

            // Full progress inside sticky section
            const totalScroll = section.offsetHeight - window.innerHeight;

            const currentScroll = Math.min(
                Math.max(-rect.top, 0),
                totalScroll
            );

            const progress = currentScroll / totalScroll;

            const newIndex = Math.min(
                stages.length - 1,
                Math.floor(progress * stages.length)
            );

            if (newIndex !== activeIndex) {
                setActiveIndex(newIndex);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [activeIndex, stages.length]);


    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
    });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <main className="min-h-screen bg-white">
            <SEO
                title="Cloud Services Company – AWS, Cloud Migration & Managed Services | Biosoftech"
                description="Biosoftech Solutions provides strategic cloud services including AWS migration, cloud architecture, Kubernetes, and managed cloud infrastructure. 10+ years, 500+ projects."
                keywords="cloud services company, AWS migration, cloud architecture, managed cloud services, Kubernetes, cloud consulting, India"
                ogUrl="https://www.biosoftech.com/cloud-services"
            />
            <StructuredData type="LocalBusiness" />
            {/* HERO SECTION */}
            <section aria-label="Cloud services hero banner" className="w-full bg-[#F7F5EF] pb-12 lg:pb-24">
                <div className="max-w-[1750px] mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center min-h-0 lg:min-h-screen pt-24 sm:pt-28 md:pt-32">
                        <div className="flex flex-col text-center lg:text-left">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-tight">
                                Best Cloud Services
                                <br />
                                Company in India
                            </h1>
                            <div className="mt-6 sm:mt-8 lg:mt-10 text-base sm:text-lg lg:text-[22px] leading-relaxed lg:leading-[2] text-[#111] max-w-[900px]">
                                <p>
                                    At Biosoftech Solutions, we provide strategic cloud services designed to scale with your business, reduce costs, and ensure long-term security. Our expertise helps transform your operations into efficient, future-ready systems that support growth and innovation.
                                </p>
                                <p className="mt-4 sm:mt-6 lg:mt-10">
                                    With <span className="font-bold">10+ years of experience</span> and <span className="font-bold">500+ projects delivered globally</span>, we are trusted by businesses across <span className="font-bold">35+ industries</span>. Our cloud solutions are built to convert challenges into opportunities, support compliance, and deliver measurable results.
                                </p>
                            </div>

                            <div className="mt-6 sm:mt-10 flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 lg:gap-12">
                                <div className="text-center lg:text-left">
                                    <h3 className="text-2xl sm:text-3xl md:text-[52px] font-bold">Google</h3>
                                    <div className="text-[#f4a300] text-lg sm:text-xl md:text-[34px]">★★★★★</div>
                                    <p className="font-semibold text-xs sm:text-sm md:text-base">Rated 4.9/5 Stars</p>
                                </div>
                                <div className="text-center lg:text-left">
                                    <h3 className="text-2xl sm:text-3xl md:text-[52px] font-bold">Justdial</h3>
                                    <p className="border-t border-black text-xs sm:text-sm md:text-[20px] font-semibold mt-2 pt-2">Trusted</p>
                                </div>
                                <div className="text-center lg:text-left">
                                    <h3 className="text-2xl sm:text-3xl md:text-[52px] font-bold">Trustpilot</h3>
                                    <div className="text-[#f4a300] text-lg sm:text-xl md:text-[34px]">★★★★★</div>
                                    <p className="font-semibold text-xs sm:text-sm md:text-base">Rated 4.8/5 Stars</p>
                                </div>
                            </div>

                            <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-0 justify-center lg:justify-start">
                                <button onClick={() => navigate("/contact")} className="group bg-[#F7B700] px-5 sm:px-6 lg:px-10 h-[54px] sm:h-[60px] lg:h-[74px] text-base sm:text-lg lg:text-[22px] font-medium flex items-center justify-center gap-3 sm:gap-4 hover:bg-[#e4aa00] transition cursor-pointer min-h-[44px]">
                                    REQUEST PROPOSAL <FiArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </button>
                                <button onClick={() => navigate("/contact")} className="group bg-black text-white px-5 sm:px-6 lg:px-10 h-[54px] sm:h-[60px] lg:h-[74px] text-base sm:text-lg lg:text-[22px] font-medium flex items-center justify-center gap-3 sm:gap-4 hover:bg-[#151515] transition cursor-pointer min-h-[44px]">
                                    CLOUD SOLUTIONS <FiArrowRightCircle className="transition group-hover:translate-x-1" />
                                </button>
                            </div>
                        </div>

                        <div className="relative mt-8 sm:mt-12 lg:mt-0">
                            <img src={laptopMockup} alt="Laptop mockup showcasing cloud services platform interface" fetchPriority="high" width="800" height="500" className="relative z-10 w-full" />
                        </div>
                    </div>
                </div>
            </section>

            {/* STARTUP CLOUD SECTION */}
            <section className="hidden lg:block relative overflow-hidden bg-[#f8fbff] px-4 py-10 md:py-16">
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent" aria-hidden="true"></div>
                <div className="relative mx-auto max-w-[1750px] px-6 lg:px-20">
                    <div className="text-center mb-12">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">Cloud infrastructure for growing businesses</p>
                        <h2 className="max-w-4xl mx-auto text-2xl font-semibold leading-tight text-slate-950 md:text-3xl lg:text-4xl">
                            Why Choose Biosoftech Cloud Services for <span className="bg-gradient-to-r from-[#01abfb] to-[#0176f2] bg-clip-text text-transparent">Startups and Enterprises</span>
                        </h2>
                        <p className="mt-6 text-base leading-7 font-normal text-slate-600 md:text-lg max-w-3xl mx-auto">
                            At Biosoftech Solutions, we are the preferred cloud partner for startups, SaaS companies, and growing enterprises seeking simple, scalable, and cost-effective infrastructure. Our cloud services ensure predictable pricing, easy deployment, and future-ready solutions that help you scale without complexity.
                        </p>
                    </div>

                    <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] items-start">
                        <div>
                            <h3 className="text-2xl font-semibold text-slate-950 mb-6">Key Benefits of Biosoftech Cloud Services</h3>
                            <div className="grid gap-6 sm:grid-cols-2">
                                <article className="group relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-cyan-50 p-6 shadow-[0_10px_34px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(15,23,42,0.14)]">
                                    <div className="relative mb-6 flex items-center justify-between">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg shadow-emerald-500/30 transition-transform group-hover:rotate-6 group-hover:scale-110 z-10">
                                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" className="h-7 w-7"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                        </div>
                                        <span className="text-4xl font-black text-emerald-600/10">01</span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-slate-950">60-80% Lower Infrastructure Cost</h3>
                                    <p className="mt-3 text-slate-600">Reduce spend compared to traditional hosting while maintaining reliable compute, storage, and database options.</p>
                                </article>
                                <article className="group relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 via-white to-sky-50 p-6 shadow-[0_10px_34px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(15,23,42,0.14)]">
                                    <div className="relative mb-6 flex items-center justify-between">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-500/30 transition-transform group-hover:rotate-6 group-hover:scale-110 z-10">
                                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" className="h-7 w-7"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M8 10h8M8 14h4" /></svg>
                                        </div>
                                        <span className="text-4xl font-black text-blue-600/10">02</span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-slate-950">Flexible Hosting and Storage</h3>
                                    <p className="mt-3 text-slate-600">Host applications, APIs, files, and workloads with seamless control and scalability.</p>
                                </article>
                                <article className="group relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-purple-50 via-white to-pink-50 p-6 shadow-[0_10px_34px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(15,23,42,0.14)]">
                                    <div className="relative mb-6 flex items-center justify-between">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-600 text-white shadow-lg shadow-purple-500/30 transition-transform group-hover:rotate-6 group-hover:scale-110 z-10">
                                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" className="h-7 w-7"><circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" /></svg>
                                        </div>
                                        <span className="text-4xl font-black text-purple-600/10">03</span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-slate-950">Simpler Kubernetes Management</h3>
                                    <p className="mt-3 text-slate-600">Managed container orchestration without the complexity of traditional platforms.</p>
                                </article>
                                <article className="group relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-6 shadow-[0_10px_34px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(15,23,42,0.14)]">
                                    <div className="relative mb-6 flex items-center justify-between">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-600 text-white shadow-lg shadow-orange-500/30 transition-transform group-hover:rotate-6 group-hover:scale-110 z-10">
                                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" className="h-7 w-7"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
                                        </div>
                                        <span className="text-4xl font-black text-orange-600/10">04</span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-slate-950">Streamlined App Deployments</h3>
                                    <p className="mt-3 text-slate-600">Faster containerized deployments for web apps, APIs, and services with reduced DevOps overhead.</p>
                                </article>
                                <article className="group relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-rose-50 via-white to-red-50 p-6 shadow-[0_10px_34px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(15,23,42,0.14)]">
                                    <div className="relative mb-6 flex items-center justify-between">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-600 text-white shadow-lg shadow-rose-500/30 transition-transform group-hover:rotate-6 group-hover:scale-110 z-10">
                                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" className="h-7 w-7"><path d="M9 12l2 2 4-4" /><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /></svg>
                                        </div>
                                        <span className="text-4xl font-black text-rose-600/10">05</span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-slate-950">Predictable Flat-Rate Pricing</h3>
                                    <p className="mt-3 text-slate-600">Transparent monthly pricing with no hidden costs or surprise billing.</p>
                                </article>
                            </div>
                        </div>
                        <aside className="lg:sticky lg:top-8 space-y-6">
                            <div className="overflow-hidden rounded-3xl bg-white shadow-xl shadow-slate-900/8">
                                <div className="bg-slate-950 p-6 text-white">
                                    <p className="text-lg font-semibold text-blue-200">Biosoftech Cloud Platform Stack</p>
                                    <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                                        A complete toolkit for product teams needing production-grade infrastructure without heavy complexity.
                                    </p>
                                </div>
                                <div className="divide-y divide-slate-100">
                                    <div className="p-5">
                                        <p className="font-semibold text-slate-950">Virtual Machines</p>
                                        <p className="mt-1 text-sm text-slate-500">Reliable compute for apps, APIs, workers, and services.</p>
                                    </div>
                                    <div className="p-5">
                                        <p className="font-semibold text-slate-950">Cloud Storage</p>
                                        <p className="mt-1 text-sm text-slate-500">Secure object storage for media, static assets, and backups.</p>
                                    </div>
                                    <div className="p-5">
                                        <p className="font-semibold text-slate-950">Managed Databases</p>
                                        <p className="mt-1 text-sm text-slate-500">Automated backups, updates, and scaling support.</p>
                                    </div>
                                    <div className="p-5">
                                        <p className="font-semibold text-slate-950">Kubernetes Services</p>
                                        <p className="mt-1 text-sm text-slate-500">Simplified orchestration for containerized workloads.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="overflow-hidden rounded-3xl bg-white shadow-xl shadow-slate-900/8 p-6">
                                <h4 className="text-lg font-semibold text-slate-950 mb-4">Ideal For</h4>
                                <ul className="space-y-3">
                                    <li className="flex gap-3">
                                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-600">1</span>
                                        <span className="text-sm text-slate-600">Startups and MVP development</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-600">2</span>
                                        <span className="text-sm text-slate-600">SaaS platforms and digital agencies</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-600">3</span>
                                        <span className="text-sm text-slate-600">Growing businesses scaling operations</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-600">4</span>
                                        <span className="text-sm text-slate-600">Development teams seeking simplified infrastructure management</span>
                                    </li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE SECTION */}
            <section className="relative z-30 min-h-screen overflow-hidden py-16 md:py-24 mt-10 md:mt-16 lg:mt-20 bg-cover bg-center bg-[#f0f4f8]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2069&auto=format&fit=crop')" }}>
                <div className="absolute inset-0 bg-white/30" />
                <div className="relative z-10 max-w-[1750px] mx-auto px-6 lg:px-20">
                    <div>
                        <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-slate-900">Why Choose <span className="text-blue-600">Biosoftech Cloud</span> Services</h2>
                        <div className="w-20 h-1 bg-blue-600 mt-4 rounded-full"></div>
                    </div>
                    <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                        Biosoftech Solutions offers a developer-friendly cloud platform designed for simplicity, performance, and affordability. Our services provide a streamlined alternative to complex enterprise systems, making them ideal for startups, SaaS platforms, and fast-growing businesses. With powerful infrastructure and easy-to-use tools, we enable teams to deploy applications quickly without unnecessary complexity.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            "Simple & Developer-Friendly Platform",
                            "Cost-Effective Cloud Hosting",
                            "High-Performance Infrastructure",
                            "Scalable Cloud Resources",
                            "Fast Deployment & Time-to-Market",
                            "Strong Open-Source Ecosystem",
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 bg-white border border-blue-100 hover:border-blue-300 rounded-2xl p-5 md:p-6 transition-all hover:shadow-md group">
                                <div className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-full bg-blue-600 text-white shrink-0 group-hover:scale-110 transition-transform">
                                    <svg stroke="currentColor" fill="none" strokeWidth="2.5" viewBox="0 0 24 24" className="w-5 h-5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                </div>
                                <p className="font-medium text-slate-800 leading-tight text-sm md:text-base">{item}</p>
                            </div>
                        ))}
                    </div>
                    <div className="bg-blue-600 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-5 md:gap-6 text-white mt-8 md:mt-10">
                        <div className="flex-1">
                            <p className="text-base md:text-lg leading-snug">Secure, reliable, and innovative cloud solutions are the backbone of modern business. Let Biosoftech Solutions build your cloud strategy and help you grow with confidence.</p>
                        </div>
                        <a href="/contact" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-6 md:px-8 py-3 md:py-4 rounded-2xl whitespace-nowrap transition-all active:scale-95 text-center text-sm md:text-base shrink-0">Request a Free Consultation</a>
                    </div>
                </div>
            </section>
            {/* DEVELOPMENT PROCESS SECTION */}
            <section
                ref={sectionRef}
                className="bg-[#0a0a0a] relative z-20 h-[500vh] pt-20 sm:pt-24 lg:pt-0"
            >
                <div className="sticky top-[80px] h-[calc(100vh-80px)] flex items-start lg:items-center overflow-y-auto lg:overflow-hidden pt-4 lg:pt-0 pb-4 lg:pb-0">
                    <div className="max-w-[1750px] mx-auto px-4 sm:px-6 lg:px-20 w-full">

                        <div className="text-center mb-6 sm:mb-8 mt-8 sm:mt-24 lg:mb-12">
                            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white">
                                Cloud Services <span className="text-blue-500">Development Process</span>
                            </h2>
                            <p className="mt-1 sm:mt-3 lg:mt-4 text-gray-500 text-xs sm:text-sm lg:text-lg">
                                We follow a simple, agile, and efficient process to deliver high-quality cloud solutions tailored to your business needs.
                            </p>
                        </div>

                        {/* Horizontal Cards Container */}
                        <div className="relative overflow-hidden group/cards">
                            <div
                                className="flex gap-4 sm:gap-8 transition-transform duration-700 ease-out"
                                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                            >
                                {stages.map((stage, index) => (
                                    <div
                                        key={stage.id}
                                        className="min-w-full bg-[#111] rounded-3xl p-5 sm:p-10 lg:p-16 border border-gray-800 flex flex-col lg:flex-row gap-4 sm:gap-8 lg:gap-12 items-center"
                                    >
                                        {/* Left Content */}
                                        <div className="lg:w-1/2 space-y-3 sm:space-y-4 lg:space-y-8">
                                            <div className="inline-flex items-center gap-3">
                                                <span className="text-4xl sm:text-6xl">{stage.icon}</span>
                                                <div className="px-4 sm:px-5 py-1 sm:py-2 bg-blue-600/10 border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-semibold rounded-full">
                                                    {stage.stage}
                                                </div>
                                            </div>

                                            <h3 className="text-xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                                                {stage.title}
                                            </h3>

                                            <p className="text-gray-400 text-sm sm:text-base lg:text-xl leading-relaxed">
                                                {stage.desc}
                                            </p>

                                            <div className="flex flex-wrap gap-2 sm:gap-3 pt-2 sm:pt-4 lg:pt-6">
                                                <a href="/contact" className="bg-blue-600 hover:bg-blue-500 px-4 sm:px-6 lg:px-10 py-2 sm:py-3 lg:py-4 rounded-2xl font-semibold text-xs sm:text-sm lg:text-lg transition-all active:scale-95 inline-flex items-center justify-center">
                                                    Get a Free Quote
                                                </a>
                                                <a href="/contact" className="border border-gray-600 hover:bg-gray-900 px-3 sm:px-5 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-2xl font-semibold text-white text-xs sm:text-sm lg:text-lg transition-all active:scale-95 inline-flex items-center justify-center">
                                                    Free Technical Consultation →
                                                </a>
                                            </div>
                                        </div>

                                        {/* Right Side */}
                                        <div className="hidden sm:block lg:w-1/2 rounded-2xl overflow-hidden w-full shrink-0">
                                            <img src={processImages[index]} alt={stage.title} width="600" height="400" className="w-full h-full object-cover max-h-48 sm:max-h-64 lg:max-h-none" loading="lazy" />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Mobile Navigation Arrows */}
                            <button
                                onClick={() => setActiveIndex(prev => Math.max(0, prev - 1))}
                                disabled={activeIndex === 0}
                                className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/60 border border-gray-600 flex items-center justify-center text-white hover:bg-black/80 transition-all active:scale-90 disabled:opacity-30 disabled:cursor-not-allowed sm:opacity-0 sm:group-hover/cards:opacity-100"
                                aria-label="Previous stage"
                            >
                                <ChevronLeft size={18} className="sm:w-5 sm:h-5" />
                            </button>
                            <button
                                onClick={() => setActiveIndex(prev => Math.min(stages.length - 1, prev + 1))}
                                disabled={activeIndex === stages.length - 1}
                                className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/60 border border-gray-600 flex items-center justify-center text-white hover:bg-black/80 transition-all active:scale-90 disabled:opacity-30 disabled:cursor-not-allowed sm:opacity-0 sm:group-hover/cards:opacity-100"
                                aria-label="Next stage"
                            >
                                <ChevronRight size={18} className="sm:w-5 sm:h-5" />
                            </button>
                        </div>

                        {/* Progress Indicator */}
                        <div className="flex justify-center gap-2 sm:gap-3 mt-4 sm:mt-8 lg:mt-16 pb-2 sm:pb-0">
                            {stages.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveIndex(i)}
                                    aria-label={`Go to stage ${i + 1}`}
                                    className={`h-3 sm:h-3 rounded-full transition-all duration-300 cursor-pointer ${i === activeIndex ? 'bg-blue-500 w-8 sm:w-12' : 'bg-gray-700 w-6 sm:w-8'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-[#EEF3FB] py-12 md:py-20 overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="grid lg:grid-cols-[1fr_0.8fr] xl:grid-cols-[1fr_700px] gap-10 items-stretch">

                        {/* LEFT */}
                        <div className="flex flex-col">
                            <p className="uppercase tracking-[4px] text-[#2455FF] font-medium mb-5">
                                AWS Migration
                            </p>
                            <h2 className="text-4xl md:text-5xl lg:text-[50px] xl:text-[58px] leading-tight font-semibold mb-8">
                                AWS Cloud Migration Services
                            </h2>
                            <p className="text-[#36507A] text-lg md:text-[20px] leading-relaxed md:leading-[2] max-w-[700px]">
                                At Biosoftech Solutions, we help businesses migrate seamlessly from legacy systems
                                or other cloud platforms to AWS with minimal downtime.
                                Our approach ensures optimized performance, and cost-efficient scalability.
                                Whether it's lift-and-shift, re-architecture, or multi-cloud consolidation,
                                we design migration strategies that fit your business needs.
                                We also provide AWS cost optimization audits and disaster
                                recovery setups to guarantee reliability and resilience.
                            </p>

                            {/* Dashboard */}
                            <div className="mt-12 md:mt-16 flex-1 flex flex-col">
                                <div className="bg-[#061227] rounded-[24px] md:rounded-[34px] p-6 md:p-8 shadow-2xl flex-1">
                                    <div className="flex flex-col sm:flex-row justify-between items-start gap-6">
                                        <div>
                                            <h3 className="text-white text-xl md:text-2xl font-semibold">
                                                Migration Control
                                            </h3>
                                            <p className="text-[#7FA2D5] mt-2 text-sm md:text-base">
                                                Assessment, consolidation, optimization
                                            </p>
                                        </div>
                                        <button aria-label="Refresh" className="w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-3xl bg-[#0F2446] flex items-center justify-center border border-[#24426E] hover:rotate-180 duration-700">
                                            <RefreshCw color="white" size={24} className="md:w-[28px] md:h-[28px]" />
                                        </button>
                                    </div>
                                    <div className="mt-8 border-t border-[#21375E]" />
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-8">
                                        {[
                                            ["Low", "Downtime risk"],
                                            ["20–35%", "Cost saving focus"],
                                            ["DR", "Ready setup"],
                                        ].map((item, i) => (
                                            <div key={i} className="rounded-[20px] md:rounded-[28px] bg-white/10 border border-white/10 p-5 md:p-7 backdrop-blur">
                                                <h3 className="text-white text-3xl md:text-[48px] font-bold">{item[0]}</h3>
                                                <p className="text-[#C4D2E8] mt-2 md:mt-3 text-sm md:text-base">{item[1]}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT */}
                        <div className="flex flex-col mt-10 lg:mt-0">
                            <div className="bg-white rounded-[24px] md:rounded-[34px] p-6 md:p-8 shadow-[0_20px_80px_rgba(0,0,0,.08)] border border-[#D8E6FF] flex-1 flex flex-col">
                                <div className="flex justify-between items-start gap-4">
                                    <div>
                                        <p className="text-[#2455FF] font-semibold text-sm md:text-base">Migration Roadmap</p>
                                        <h3 className="mt-2 md:mt-3 text-2xl md:text-[44px] font-semibold leading-tight">From legacy stack to AWS</h3>
                                    </div>
                                    <div className="px-3 md:px-5 h-[32px] md:h-[42px] rounded-full bg-[#EEF4FF] flex items-center text-[#2455FF] font-medium text-xs md:text-sm">
                                        AWS
                                    </div>
                                </div>

                                <div className="mt-8 md:mt-10 flex-1">
                                    {roadmap.map((item, index) => {
                                        const activeItem = index === active;
                                        return (
                                            <div key={index} className="flex gap-4 md:gap-5 group">
                                                <div className="flex flex-col items-center">
                                                    <button
                                                        onMouseEnter={() => setActive(index)}
                                                        className={`w-[40px] h-[40px] md:w-[48px] md:h-[48px] rounded-full text-xs md:text-sm font-bold transition shrink-0
                                                ${activeItem
                                                                ? "bg-[#2455FF] text-white shadow-xl scale-110"
                                                                : "bg-white text-[#2455FF] border"
                                                            }`}
                                                    >
                                                        {String(index + 1).padStart(2, "0")}
                                                    </button>
                                                    {index !== roadmap.length - 1 && (
                                                        <div className="w-[1px] h-[40px] md:h-[52px] bg-[#D7E4FF]" />
                                                    )}
                                                </div>
                                                <div
                                                    onMouseEnter={() => setActive(index)}
                                                    className={`flex-1 mb-4 md:mb-5 rounded-[16px] md:rounded-[22px] p-5 md:p-8 transition cursor-pointer
                                            ${activeItem
                                                            ? "bg-white shadow-xl border border-[#CFE0FF]"
                                                            : "bg-[#FAFBFF] border border-[#D9E6FF]"
                                                        }`}
                                                >
                                                    <h3 className="text-lg md:text-[28px] font-semibold leading-tight">{item}</h3>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="bg-[#020817] text-white py-20">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Heading */}
                    <h2 className="text-center text-3xl sm:text-4xl md:text-[42px] font-bold mb-20">
                        Why Biosoftech Solutions – Your Trusted AWS Partner
                    </h2>

                    {/* Main Layout */}
                    <div className="grid lg:grid-cols-[1fr_420px_1fr] gap-12 items-center">

                        {/* Left */}
                        <div className="space-y-20">
                            {leftFeatures.map((item, i) => {
                                const Icon = item.icon;

                                return (
                                    <div key={i}>
                                        <Icon
                                            size={46}
                                            className="text-cyan-300 mb-5"
                                            strokeWidth={1.5}
                                        />

                                        <h3 className="text-[24px] font-bold mb-3">
                                            {item.title}
                                        </h3>

                                        <p className="text-[#8B95A7] text-[18px] leading-9">
                                            {item.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Center Image */}
                        <div>
                            <div className="overflow-hidden rounded-2xl border border-white/10">
                                <img
                                    src={robotImage}
                                    alt="AI Robot"
                                    width="1920"
                                    height="1080"
                                    className="w-full h-[390px] object-cover"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        {/* Right */}
                        <div className="space-y-20">
                            {rightFeatures.map((item, i) => {
                                const Icon = item.icon;

                                return (
                                    <div key={i}>
                                        <Icon
                                            size={46}
                                            className="text-cyan-300 mb-5"
                                            strokeWidth={1.5}
                                        />

                                        <h3 className="text-[24px] font-bold mb-3">
                                            {item.title}
                                        </h3>

                                        <p className="text-[#8B95A7] text-[18px] leading-9">
                                            {item.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>

                    </div>
                </div>
            </section>
            <section className="bg-[#f5f5f5] py-20 overflow-hidden">
                <div className="max-w-[1800px] mx-auto px-6 lg:px-12">

                    <div className="grid lg:grid-cols-[1.35fr_1fr] gap-8 items-center">

                        {/* LEFT IMAGE */}
                        <div className="flex justify-start">

                            <div className="relative">

                                {/* BLUE SHAPE */}
                                <div
                                    className="
              absolute
              -top-8
              left-16
              w-[92%]
              h-[92%]
              bg-[#7AD7F4]
              rounded-[45%_55%_60%_40%/50%_40%_60%_50%]
            "
                                />

                                {/* GREEN SHAPE */}
                                <div
                                    className="
              absolute
              top-10
              -left-6
              w-[90%]
              h-[90%]
              bg-[#9CD600]
              rounded-[55%_45%_40%_60%/40%_60%_40%_60%]
            "
                                />

                                {/* IMAGE */}
                                <div
                                    className="
              relative z-10
              overflow-hidden
              w-full max-w-[900px]
              h-[400px] sm:h-[500px] md:h-[700px]
              rounded-[40%_60%_55%_45%/45%_35%_65%_55%]
            "
                                >
                                    <img
                                        src={consultationImage}
                                        alt="Consultation"
                                        width="800"
                                        height="600"
                                        className="
                w-full
                h-full
                object-cover
              "
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* FORM */}
                        <div className="max-w-[700px]">

                            <h2
                                className="
            text-4xl
            lg:text-5xl
            xl:text-6xl
            font-bold
            text-[#403B75]
            leading-tight
            mb-10
          "
                            >
                                Partner with
                                <br />
                                Biosoftech Solutions
                            </h2>

                            <p className="text-lg text-[#555] mb-8 max-w-lg">
                                Secure, scalable, and innovative — our cloud services are designed to transform your digital future.
                            </p>

                            <button
                                onClick={() => navigate("/contact?service=Cloud Service")}
                                className="px-10 py-4 text-white font-bold rounded-md bg-gradient-to-r from-[#F6B000] to-[#FF7A1A] hover:opacity-90 transition-all"
                            >
                                Get Free Consultation
                            </button>

                        </div>

                    </div>
                </div>
            </section>
            <section className="bg-[#f4f4f4] py-14 lg:py-20">
                <div className="max-w-[1450px] mx-auto px-6">

                    {/* Heading */}
                    <div className="text-center mb-14">
                        <h2 className="text-3xl sm:text-4xl md:text-[52px] font-bold text-[#2f2f2f] leading-none">
                            Key Features
                        </h2>

                        <p className="mt-6 text-[18px] text-[#555]">
                            Here are some features that are offered by Biosoftech Solutions for API
                            Gateway:
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="
                bg-white
                border
                border-[#bfd6f4]
                rounded-[4px]
                p-10
                min-h-[335px]
                transition-all
                duration-300
                hover:border-[#1f73ff]
                hover:shadow-[0_0_25px_rgba(31,115,255,0.12)]
              "
                            >
                                {/* Icon */}
                                <img
                                    src={feature.icon}
                                    alt={feature.title}
                                    width="64"
                                    height="64"
                                    className="w-[64px] h-[64px] object-contain"
                                    loading="lazy"
                                />

                                {/* Title */}
                                <h3
                                    className="
                  mt-8
                  text-[22px]
                  font-bold
                  text-[#0b376d]
                "
                                >
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p
                                    className="
                  mt-5
                  text-[16px]
                  leading-[1.75]
                  text-[#4d4d4d]
                "
                                >
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
            <section className="bg-[#f3f3f3] py-16 lg:py-20">
                <div className="max-w-[1450px] mx-auto px-6">

                    {/* Heading */}
                    <h2 className="text-center text-[42px] lg:text-[52px] font-bold text-[#333] mb-14">
                        Case Studies
                    </h2>

                    {/* Carousel */}
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex gap-8">

                            {caseStudies.map((item, index) => (
                                <div
                                    key={index}
                                    className="
                  flex-[0_0_100%]
                  h-[300px] sm:h-[40vh] lg:h-[60vh]
                  flex flex-col
                  bg-white
                  shadow-sm
                  border
                  border-[#e4e4e4]
                  overflow-hidden
                "
                                >
                                    {/* Image */}
                                    <div className="flex-1 overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            width="1920"
                                            height="1080"
                                            className="
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-700
                      hover:scale-110
                    "
                                            loading="lazy"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="bg-white px-6 py-7 shrink-0">
                                        <p
                                            className="
                      text-[18px]
                      text-[#222]
                      leading-9
                      font-medium
                    "
                                        >
                                            {item.title}
                                        </p>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex justify-center gap-2 mt-8">

                        <button
                            onClick={scrollPrev}
                            aria-label="Previous slide"
                            className="
              w-12
              h-12
              bg-[#145b90]
              text-white
              flex
              items-center
              justify-center
              transition
              hover:bg-[#0d4f7f]
            "
                        >
                            <ChevronLeft size={30} />
                        </button>

                        <button
                            onClick={scrollNext}
                            aria-label="Next slide"
                            className="
              w-12
              h-12
              bg-[#145b90]
              text-white
              flex
              items-center
              justify-center
              transition
              hover:bg-[#0d4f7f]
            "
                        >
                            <ChevronRight size={30} />
                        </button>

                    </div>

                </div>
            </section>
            <section className="bg-black py-20">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Heading */}
                    <div className="text-center mb-14">
                        <h2 className="text-white text-4xl lg:text-5xl font-bold">
                            Industries We Serve
                        </h2>

                        <p className="mt-6 max-w-4xl mx-auto text-gray-400 text-lg leading-9">
                            Azure Solutions Across Industries — We build scalable,
                            secure, and high-performance cloud solutions tailored to
                            the unique needs of diverse industries.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

                        {industries.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={index}
                                    className="
                  group
                  rounded-3xl
                  border border-[#1f355a]
                  bg-gradient-to-r
                  from-[#0e1931]
                  to-[#1a2740]
                  p-8
                  transition-all
                  duration-500
                  hover:border-[#2f81ff]
                  hover:-translate-y-2
                  hover:shadow-[0_0_30px_rgba(47,129,255,0.15)]
                "
                                >
                                    {/* Icon Circle */}
                                    <div
                                        className="
                    mx-auto
                    w-16
                    h-16
                    rounded-full
                    bg-[#2b2368]
                    flex
                    items-center
                    justify-center
                  "
                                    >
                                        <Icon
                                            size={30}
                                            className="text-[#4f9cff]"
                                        />
                                    </div>

                                    {/* Title */}
                                    <h3
                                        className="
                    mt-8
                    text-center
                    text-white
                    text-3xl
                    font-bold
                    leading-snug
                    transition-colors
                    duration-300
                    group-hover:text-[#4f9cff]
                  "
                                    >
                                        {item.title}
                                    </h3>

                                    {/* Description */}
                                    <p
                                        className="
                    mt-5
                    text-center
                    text-gray-400
                    text-lg
                    leading-8
                  "
                                    >
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default CloudServices;