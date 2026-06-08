import SEO from "../components/seo/SEO";
import StructuredData from "../components/seo/StructuredData";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import reusability from "../assets/reusability.webp";
import scalability from "../assets/scalability.webp";
import flexibility from "../assets/flexibility.webp";
import consistent from "../assets/consistent-configuration.webp";
import timesaving from "../assets/time-saving.webp";


const CloudServices = () => {
    const navigate = useNavigate();
    const features = [
        {
            icon: reusability,
            title: "Traffic Management",
            description:
                "Biosoftech's API & Application Gateway efficiently handles incoming traffic, distributing it across multiple backend services to ensure optimal performance, prevent bottlenecks, and maintain high availability for applications.",
        },
        {
            icon: flexibility,
            title: "Security Measures",
            description:
                "These gateways implement robust security protocols, including authentication, authorization, and encryption, safeguarding APIs and applications against unauthorized access, data breaches, and other potential security threats.",
        },
        {
            icon: scalability,
            title: "Scalability",
            description:
                "With scalable architecture, the gateways seamlessly adapt to varying workloads, accommodating increased traffic and demand. This ensures consistent performance and responsiveness as applications and API usage grow over time.",
        },
        {
            icon: timesaving,
            title: "Load Balancing",
            description:
                "The gateways offer intelligent load balancing, evenly distributing incoming requests among multiple servers. This enhances resource utilization, prevents server overload, and improves overall system reliability and responsiveness.",
        },
        {
            icon: consistent,
            title: "Protocol Support:",
            description:
                "Supporting various communication protocols and data formats, our gateways facilitate interoperability between different services and systems. This flexibility ensures compatibility with a diverse range of applications and simplifies integration processes.",
        },
        {
            icon: reusability,
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
                description="Biosoftech Solutions provides strategic cloud services including AWS migration, cloud architecture, Kubernetes, and managed cloud infrastructure. 2+ years, 15+ projects."
                keywords="cloud services company, AWS migration, cloud architecture, managed cloud services, Kubernetes, cloud consulting, India"
                ogUrl="https://www.biosoftech.com/cloud-services"
            />
            <StructuredData type="LocalBusiness" />
            {/* HERO SECTION */}
            <section aria-label="Cloud services hero banner" className="w-full bg-[#F7F5EF] pb-8 lg:pb-16">
                <div className="w-full px-4 sm:px-6 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center pt-16 sm:pt-20 md:pt-24">
                        <div className="flex flex-col text-center lg:text-left">
                            <h1 className="text-fluid-5xl lg:text-fluid-6xl font-bold text-black leading-tight">
                                Best Cloud Services
                                <br />
                                Company in India
                            </h1>
                            <div className="mt-4 sm:mt-6 lg:mt-8 text-sm sm:text-base lg:text-xl leading-relaxed lg:leading-[1.8] text-[#111] max-w-full lg:max-w-[900px]">
                                <p>
                                    At Biosoftech Solutions, we provide strategic cloud services designed to scale with your business, reduce costs, and ensure long-term security. Our expertise helps transform your operations into efficient, future-ready systems that support growth and innovation.
                                </p>
                                <p className="mt-3 sm:mt-4 lg:mt-6">
                                    With <span className="font-bold">2+ years of experience</span> and <span className="font-bold">15+ projects delivered globally</span>, we are trusted by businesses across <span className="font-bold">15+ industries</span>. Our cloud solutions are built to convert challenges into opportunities, support compliance, and deliver measurable results.
                                </p>
                            </div>

                            <div className="mt-4 sm:mt-6 flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8">
                                <div className="text-center lg:text-left">
                                    <h3 className="text-xl sm:text-2xl md:text-[32px] lg:text-[40px] font-bold">Google</h3>
                                    <div className="text-[#f4a300] text-base sm:text-lg md:text-[22px] lg:text-[28px]">★★★★★</div>
                                    <p className="font-semibold text-sm sm:text-fluid-base">Rated 4.9/5 Stars</p>
                                </div>
                                <div className="text-center lg:text-left">
                                    <h3 className="text-xl sm:text-2xl md:text-[32px] lg:text-[40px] font-bold">Justdial</h3>
                                    <p className="border-t border-black text-xs sm:text-sm md:text-[16px] lg:text-[18px] font-semibold mt-1.5 pt-1.5">Trusted</p>
                                </div>
                                <div className="text-center lg:text-left">
                                    <h3 className="text-xl sm:text-2xl md:text-[32px] lg:text-[40px] font-bold">Trustpilot</h3>
                                    <div className="text-[#f4a300] text-base sm:text-lg md:text-[22px] lg:text-[28px]">★★★★★</div>
                                    <p className="font-semibold text-sm sm:text-fluid-base">Rated 4.8/5 Stars</p>
                                </div>
                            </div>

                            <div className="mt-4 sm:mt-6 flex flex-col lg:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                                <button onClick={() => navigate("/contact")} className="group bg-[#F7B700] px-4 sm:px-5 lg:px-8 h-[44px] sm:h-[50px] lg:h-[58px] text-sm sm:text-base lg:text-lg font-medium flex items-center justify-center gap-2 sm:gap-3 hover:bg-[#e4aa00] transition cursor-pointer min-h-[40px]">
                                    REQUEST PROPOSAL <FiArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </button>
                                <button onClick={() => navigate("/contact")} className="group bg-black text-white px-4 sm:px-5 lg:px-8 h-[44px] sm:h-[50px] lg:h-[58px] text-sm sm:text-base lg:text-lg font-medium flex items-center justify-center gap-2 sm:gap-3 hover:bg-[#151515] transition cursor-pointer min-h-[40px]">
                                    CLOUD SOLUTIONS <FiArrowRightCircle className="transition group-hover:translate-x-1" />
                                </button>
                            </div>
                        </div>

                        <div className="relative mt-6 sm:mt-8 lg:mt-0">
                            <img src={laptopMockup} alt="Laptop mockup showcasing cloud services platform interface" fetchPriority="high" width="800" height="500" className="relative z-10 w-full" />
                        </div>
                    </div>
                </div>
            </section>

            {/* STARTUP CLOUD SECTION */}
            <section className="hidden lg:block relative overflow-hidden bg-[#f8fbff] px-4 py-6 md:py-10">
                <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white to-transparent" aria-hidden="true"></div>
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-20">
                    <div className="text-center mb-6">
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-blue-600">Cloud infrastructure for growing businesses</p>
                        <h2 className="max-w-4xl mx-auto text-fluid-2xl lg:text-fluid-3xl font-semibold leading-tight text-slate-950">
                            Why Choose Biosoftech Cloud Services for <span className="bg-gradient-to-r from-[#01abfb] to-[#0176f2] bg-clip-text text-transparent">Startups and Enterprises</span>
                        </h2>
                        <p className="mt-3 text-fluid-sm leading-6 font-normal text-slate-600 max-w-3xl mx-auto">
                            At Biosoftech Solutions, we are the preferred cloud partner for startups, SaaS companies, and growing enterprises seeking simple, scalable, and cost-effective infrastructure. Our cloud services ensure predictable pricing, easy deployment, and future-ready solutions that help you scale without complexity.
                        </p>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] items-start">
                        <div>
                            <h3 className="text-xl font-semibold text-slate-950 mb-4">Key Benefits of Biosoftech Cloud Services</h3>
                            <div className="grid gap-4 sm:grid-cols-2">
                                <article className="group relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-50 via-white to-cyan-50 p-4 shadow-[0_8px_24px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(15,23,42,0.1)]">
                                    <div className="relative mb-3 flex items-center justify-between">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-lg shadow-emerald-500/30 transition-transform group-hover:rotate-6 group-hover:scale-110 z-10">
                                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" className="h-5 w-5"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                        </div>
                                        <span className="text-2xl font-black text-rose-600">01</span>
                                    </div>
                                    <h3 className="text-base font-semibold text-slate-950">60-80% Lower Infrastructure Cost</h3>
                                    <p className="mt-2 text-sm text-slate-600">Reduce spend compared to traditional hosting while maintaining reliable compute, storage, and database options.</p>
                                </article>
                                <article className="group relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 via-white to-sky-50 p-4 shadow-[0_8px_24px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(15,23,42,0.1)]">
                                    <div className="relative mb-3 flex items-center justify-between">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-500/30 transition-transform group-hover:rotate-6 group-hover:scale-110 z-10">
                                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" className="h-5 w-5"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M8 10h8M8 14h4" /></svg>
                                        </div>
                                        <span className="text-2xl font-black text-rose-600">02</span>
                                    </div>
                                    <h3 className="text-base font-semibold text-slate-950">Flexible Hosting and Storage</h3>
                                    <p className="mt-2 text-sm text-slate-600">Host applications, APIs, files, and workloads with seamless control and scalability.</p>
                                </article>
                                <article className="group relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-50 via-white to-pink-50 p-4 shadow-[0_8px_24px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(15,23,42,0.1)]">
                                    <div className="relative mb-3 flex items-center justify-between">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-600 text-white shadow-lg shadow-purple-500/30 transition-transform group-hover:rotate-6 group-hover:scale-110 z-10">
                                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" className="h-5 w-5"><circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" /></svg>
                                        </div>
                                        <span className="text-2xl font-black text-rose-600">03</span>
                                    </div>
                                    <h3 className="text-base font-semibold text-slate-950">Simpler Kubernetes Management</h3>
                                    <p className="mt-2 text-sm text-slate-600">Managed container orchestration without the complexity of traditional platforms.</p>
                                </article>
                                <article className="group relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-4 shadow-[0_8px_24px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(15,23,42,0.1)]">
                                    <div className="relative mb-3 flex items-center justify-between">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-600 text-white shadow-lg shadow-orange-500/30 transition-transform group-hover:rotate-6 group-hover:scale-110 z-10">
                                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" className="h-5 w-5"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
                                        </div>
                                        <span className="text-2xl font-black text-rose-600">04</span>
                                    </div>
                                    <h3 className="text-base font-semibold text-slate-950">Streamlined App Deployments</h3>
                                    <p className="mt-2 text-sm text-slate-600">Faster containerized deployments for web apps, APIs, and services with reduced DevOps overhead.</p>
                                </article>
                                <article className="group relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-rose-50 via-white to-red-50 p-4 shadow-[0_8px_24px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(15,23,42,0.1)]">
                                    <div className="relative mb-3 flex items-center justify-between">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-600 text-white shadow-lg shadow-rose-500/30 transition-transform group-hover:rotate-6 group-hover:scale-110 z-10">
                                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" className="h-5 w-5"><path d="M9 12l2 2 4-4" /><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /></svg>
                                        </div>
                                        <span className="text-2xl font-black text-rose-600">05</span>
                                    </div>
                                    <h3 className="text-base font-semibold text-slate-950">Predictable Flat-Rate Pricing</h3>
                                    <p className="mt-2 text-sm text-slate-600">Transparent monthly pricing with no hidden costs or surprise billing.</p>
                                </article>
                            </div>
                        </div>
                        <aside className="lg:sticky lg:top-8 space-y-4">
                            <div className="overflow-hidden rounded-2xl bg-white shadow-lg shadow-slate-900/6">
                                <div className="bg-slate-950 p-4 text-white">
                                    <p className="text-base font-semibold text-blue-200">Biosoftech Cloud Platform Stack</p>
                                    <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                                        A complete toolkit for product teams needing production-grade infrastructure without heavy complexity.
                                    </p>
                                </div>
                                <div className="divide-y divide-slate-100">
                                    <div className="p-3">
                                        <p className="text-sm font-semibold text-slate-950">Virtual Machines</p>
                                        <p className="mt-0.5 text-xs text-slate-500">Reliable compute for apps, APIs, workers, and services.</p>
                                    </div>
                                    <div className="p-3">
                                        <p className="text-sm font-semibold text-slate-950">Cloud Storage</p>
                                        <p className="mt-0.5 text-xs text-slate-500">Secure object storage for media, static assets, and backups.</p>
                                    </div>
                                    <div className="p-3">
                                        <p className="text-sm font-semibold text-slate-950">Managed Databases</p>
                                        <p className="mt-0.5 text-xs text-slate-500">Automated backups, updates, and scaling support.</p>
                                    </div>
                                    <div className="p-3">
                                        <p className="text-sm font-semibold text-slate-950">Kubernetes Services</p>
                                        <p className="mt-0.5 text-xs text-slate-500">Simplified orchestration for containerized workloads.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="overflow-hidden rounded-2xl bg-white shadow-lg shadow-slate-900/6 p-4">
                                <h4 className="text-base font-semibold text-slate-950 mb-3">Ideal For</h4>
                                <ul className="space-y-2">
                                    <li className="flex gap-2">
                                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-[10px] font-bold text-blue-600">1</span>
                                        <span className="text-xs text-slate-600">Startups and MVP development</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-[10px] font-bold text-blue-600">2</span>
                                        <span className="text-xs text-slate-600">SaaS platforms and digital agencies</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-[10px] font-bold text-blue-600">3</span>
                                        <span className="text-xs text-slate-600">Growing businesses scaling operations</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-[10px] font-bold text-blue-600">4</span>
                                        <span className="text-xs text-slate-600">Development teams seeking simplified infrastructure management</span>
                                    </li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE SECTION */}
            <section className="relative z-30 overflow-hidden py-16 md:py-20 mt-10 md:mt-16 lg:mt-20 bg-cover bg-center bg-[#f0f4f8]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2069&auto=format&fit=crop')" }}>
                <div className="absolute inset-0 bg-white/30" />
                <div className="relative z-10 w-full px-4 sm:px-6 lg:px-20">
                    <div>
                        <h2 className="text-fluid-4xl font-bold leading-tight text-slate-900">Why Choose <span className="text-blue-600">Biosoftech Cloud</span> Services</h2>
                        <div className="w-20 h-1 bg-blue-600 mt-4 rounded-full"></div>
                    </div>
                    <p className="text-fluid-base text-slate-600 leading-relaxed mt-6 mb-6">
                        Biosoftech Solutions offers a developer-friendly cloud platform designed for simplicity, performance, and affordability. Our services provide a streamlined alternative to complex enterprise systems, making them ideal for startups, SaaS platforms, and fast-growing businesses. With powerful infrastructure and easy-to-use tools, we enable teams to deploy applications quickly without unnecessary complexity.
                    </p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
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
                                <p className="font-medium text-slate-800 leading-tight text-fluid-base">{item}</p>
                            </div>
                        ))}
                    </div>
                    <div className="bg-blue-600 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-5 md:gap-6 text-white mt-8 md:mt-10">
                        <div className="flex-1">
                            <p className="text-fluid-base leading-snug">Secure, reliable, and innovative cloud solutions are the backbone of modern business. Let Biosoftech Solutions build your cloud strategy and help you grow with confidence.</p>
                        </div>
                        <Link to="/contact" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-6 md:px-8 py-3 md:py-4 rounded-2xl whitespace-nowrap transition-all active:scale-95 text-center text-fluid-base shrink-0">Request a Free Consultation</Link>
                    </div>
                </div>
            </section>
            {/* DEVELOPMENT PROCESS SECTION */}
            <section
                ref={sectionRef}
                className="bg-[#0a0a0a] relative z-20 pt-20 sm:pt-24 lg:pt-0"
                style={{
                    height: `${stages.length * 35}vh`,
                }}
            >
                <div className="sticky top-[80px] h-[calc(100vh-80px)] flex items-start lg:items-center overflow-hidden pt-4 lg:pt-0 pb-4 lg:pb-0">
                    <div className="w-full px-4 sm:px-6 lg:px-20 w-full">

                        <div className="text-center mb-6 sm:mb-8 mt-6 sm:mt-24 lg:mt-48 lg:mb-12">
                            <h2 className="text-fluid-4xl font-bold text-white">
                                Cloud Services <span className="text-blue-500">Development Process</span>
                            </h2>
                            <p className="mt-1 sm:mt-3 lg:mt-4 text-gray-500 text-fluid-base">
                                We follow a simple, agile, and efficient process to deliver high-quality cloud solutions tailored to your business needs.
                            </p>
                        </div>

                        {/* Horizontal Cards Container */}
                        <div className="relative overflow-hidden group/cards">
                            <div
                                className="flex transition-transform duration-700 ease-out"
                                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                            >
                                {stages.map((stage, index) => (
                                    <div
                                        key={stage.id}
                                        className="min-w-full w-full bg-[#111] rounded-3xl p-4 sm:p-10 lg:p-16 border border-gray-800 flex flex-col lg:flex-row gap-3 sm:gap-8 lg:gap-12 items-center"
                                    >
                                        {/* Left Content */}
                                        <div className="lg:w-1/2 space-y-2 sm:space-y-4 lg:space-y-8">
                                            <div className="inline-flex items-center gap-2 sm:gap-3">
                                                <span className="text-xl sm:text-fluid-5xl">{stage.icon}</span>
                                                <div className="px-2 sm:px-5 py-0.5 sm:py-2 bg-blue-600/10 border border-blue-500/30 text-blue-400 text-[11px] sm:text-fluid-sm font-semibold rounded-full">
                                                    {stage.stage}
                                                </div>
                                            </div>

                                            <h3 className="text-lg sm:text-fluid-4xl font-bold text-white leading-tight">
                                                {stage.title}
                                            </h3>

                                            <p className="text-gray-400 text-[13px] sm:text-fluid-lg leading-relaxed line-clamp-4 sm:line-clamp-none">
                                                {stage.desc}
                                            </p>

                                            <div className="flex flex-wrap gap-2 sm:gap-3 pt-1 sm:pt-4 lg:pt-6">
                                                <Link to="/contact" className="bg-blue-600 hover:bg-blue-500 px-3 sm:px-6 lg:px-10 py-2 sm:py-3 lg:py-4 rounded-2xl font-semibold text-xs sm:text-fluid-base transition-all active:scale-95 inline-flex items-center justify-center min-h-[44px]">
                                                    Get a Free Quote
                                                </Link>
                                                <Link to="/contact" className="border border-gray-600 hover:bg-gray-900 px-3 sm:px-5 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-2xl font-semibold text-white text-xs sm:text-fluid-base transition-all active:scale-95 inline-flex items-center justify-center min-h-[44px]">
                                                    Free Technical Consultation →
                                                </Link>
                                            </div>
                                        </div>

                                        {/* Right Side */}
                                        <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shrink-0">
                                            <img src={processImages[index]} alt={stage.title} width="600" height="400" className="w-full h-full object-cover max-h-28 sm:max-h-48 lg:max-h-none rounded-2xl" loading="lazy" />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Mobile Navigation Arrows */}
                            <button
                                onClick={() => setActiveIndex(prev => Math.max(0, prev - 1))}
                                disabled={activeIndex === 0}
                                className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-10 w-11 h-11 sm:w-10 sm:h-10 rounded-full bg-black/60 border border-gray-600 flex items-center justify-center text-white hover:bg-black/80 transition-all active:scale-90 disabled:opacity-30 disabled:cursor-not-allowed sm:opacity-0 sm:group-hover/cards:opacity-100 min-w-[44px] min-h-[44px]"
                                aria-label="Previous stage"
                            >
                                <ChevronLeft size={18} className="sm:w-5 sm:h-5" />
                            </button>
                            <button
                                onClick={() => setActiveIndex(prev => Math.min(stages.length - 1, prev + 1))}
                                disabled={activeIndex === stages.length - 1}
                                className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-10 w-11 h-11 sm:w-10 sm:h-10 rounded-full bg-black/60 border border-gray-600 flex items-center justify-center text-white hover:bg-black/80 transition-all active:scale-90 disabled:opacity-30 disabled:cursor-not-allowed sm:opacity-0 sm:group-hover/cards:opacity-100 min-w-[44px] min-h-[44px]"
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
            <section className="bg-[#EEF3FB] py-8 md:py-12 overflow-hidden">
                <div className="w-full px-4 sm:px-6">
                    <div className="grid lg:grid-cols-[1fr_0.8fr] xl:grid-cols-[1fr_700px] gap-6 items-stretch">

                        {/* LEFT */}
                        <div className="flex flex-col">
                            <p className="uppercase tracking-[4px] text-[#2455FF] font-medium mb-3">
                                AWS Migration
                            </p>
                            <h2 className="text-3xl md:text-4xl lg:text-[42px] xl:text-[48px] leading-tight font-semibold mb-5">
                                AWS Cloud Migration Services
                            </h2>
                            <p className="text-[#36507A] text-base md:text-[18px] leading-relaxed md:leading-[1.8] max-w-[700px]">
                                At Biosoftech Solutions, we help businesses migrate seamlessly from legacy systems
                                or other cloud platforms to AWS with minimal downtime.
                                Our approach ensures optimized performance, and cost-efficient scalability.
                                Whether it's lift-and-shift, re-architecture, or multi-cloud consolidation,
                                we design migration strategies that fit your business needs.
                                We also provide AWS cost optimization audits and disaster
                                recovery setups to guarantee reliability and resilience.
                            </p>

                            {/* Dashboard */}
                            <div className="mt-6 md:mt-8 flex-1 flex flex-col">
                                <div className="bg-[#061227] rounded-[20px] md:rounded-[24px] p-4 md:p-6 shadow-2xl flex-1">
                                    <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                                        <div>
                                            <h3 className="text-white text-fluid-lg font-semibold">
                                                Migration Control
                                            </h3>
                                            <p className="text-[#7FA2D5] mt-1 text-fluid-sm">
                                                Assessment, consolidation, optimization
                                            </p>
                                        </div>
                                        <button aria-label="Refresh" className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-[#0F2446] flex items-center justify-center border border-[#24426E] hover:rotate-180 duration-700">
                                            <RefreshCw color="white" size={20} className="md:w-[24px] md:h-[24px]" />
                                        </button>
                                    </div>
                                    <div className="mt-4 border-t border-[#21375E]" />
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
                                        {[
                                            ["Low", "Downtime risk"],
                                            ["20–35%", "Cost saving focus"],
                                            ["DR", "Ready setup"],
                                        ].map((item, i) => (
                                            <div key={i} className="rounded-[16px] md:rounded-[20px] bg-white/10 border border-white/10 p-3 md:p-4 backdrop-blur">
                                                <h3 className="text-white text-2xl md:text-[36px] font-bold">{item[0]}</h3>
                                                <p className="text-[#C4D2E8] mt-1 md:mt-2 text-fluid-sm">{item[1]}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT */}
                        <div className="flex flex-col mt-6 lg:mt-0">
                            <div className="bg-white rounded-[20px] md:rounded-[24px] p-4 md:p-6 shadow-[0_20px_80px_rgba(0,0,0,.08)] border border-[#D8E6FF] flex-1 flex flex-col">
                                <div className="flex justify-between items-start gap-3">
                                    <div>
                                        <p className="text-[#2455FF] font-semibold text-fluid-sm">Migration Roadmap</p>
                                        <h3 className="mt-1 md:mt-2 text-xl md:text-[32px] font-semibold leading-tight">From legacy stack to AWS</h3>
                                    </div>
                                    <div className="px-2 md:px-4 h-[26px] md:h-[34px] rounded-full bg-[#EEF4FF] flex items-center text-[#2455FF] font-medium text-xs md:text-fluid-sm">
                                        AWS
                                    </div>
                                </div>

                                <div className="mt-4 md:mt-6 flex-1">
                                    {roadmap.map((item, index) => {
                                        const activeItem = index === active;
                                        return (
                                            <div key={index} className="flex gap-3 md:gap-4 group">
                                                <div className="flex flex-col items-center">
                                                    <button
                                                        onMouseEnter={() => setActive(index)}
                                                        className={`w-[32px] h-[32px] md:w-[40px] md:h-[40px] rounded-full text-xs md:text-fluid-sm font-bold transition shrink-0
                                                ${activeItem
                                                                ? "bg-[#2455FF] text-white shadow-xl scale-110"
                                                                : "bg-white text-[#2455FF] border"
                                                            }`}
                                                    >
                                                        {String(index + 1).padStart(2, "0")}
                                                    </button>
                                                    {index !== roadmap.length - 1 && (
                                                        <div className="w-[1px] h-[24px] md:h-[36px] bg-[#D7E4FF]" />
                                                    )}
                                                </div>
                                                <div
                                                    onMouseEnter={() => setActive(index)}
                                                    className={`flex-1 mb-2 md:mb-3 rounded-[14px] md:rounded-[18px] p-3 md:p-5 transition cursor-pointer
                                            ${activeItem
                                                                ? "bg-white shadow-xl border border-[#CFE0FF]"
                                                                : "bg-[#FAFBFF] border border-[#D9E6FF]"
                                                            }`}
                                                >
                                                    <h3 className="text-sm md:text-[22px] font-semibold leading-tight">{item}</h3>
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
            <section className="bg-[#020817] text-white py-10 lg:py-14">
                <div className="w-full px-4 sm:px-6">

                    {/* Heading */}
                    <h2 className="text-center text-2xl sm:text-3xl md:text-[36px] font-bold mb-10">
                        Why Biosoftech Solutions – Your Trusted AWS Partner
                    </h2>

                    {/* Main Layout */}
                    <div className="grid lg:grid-cols-[1fr_420px_1fr] gap-6 items-center">

                        {/* Left */}
                        <div className="space-y-8">
                            {leftFeatures.map((item, i) => {
                                const Icon = item.icon;

                                return (
                                    <div key={i}>
                                        <Icon
                                            size={32}
                                            className="text-cyan-300 mb-3"
                                            strokeWidth={1.5}
                                        />

                                        <h3 className="text-[18px] lg:text-[20px] font-bold mb-2">
                                            {item.title}
                                        </h3>

                                        <p className="text-[#8B95A7] text-[14px] lg:text-[15px] leading-7">
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
                                    className="w-full h-[280px] object-cover"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        {/* Right */}
                        <div className="space-y-8">
                            {rightFeatures.map((item, i) => {
                                const Icon = item.icon;

                                return (
                                    <div key={i}>
                                        <Icon
                                            size={32}
                                            className="text-cyan-300 mb-3"
                                            strokeWidth={1.5}
                                        />

                                        <h3 className="text-[18px] lg:text-[20px] font-bold mb-2">
                                            {item.title}
                                        </h3>

                                        <p className="text-[#8B95A7] text-[14px] lg:text-[15px] leading-7">
                                            {item.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>

                    </div>
                </div>
            </section>
            <section className="bg-[#f5f5f5] py-16 lg:py-20 overflow-hidden">
                <div className="w-full px-4 sm:px-6 lg:px-12">

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
            text-fluid-5xl
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
            <section className="bg-[#f4f4f4] py-8 lg:py-12">
                <div className="w-full px-4 sm:px-6">

                    {/* Heading */}
                    <div className="text-center mb-6">
                        <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-[#2f2f2f] leading-none">
                            Key Features
                        </h2>

                        <p className="mt-3 text-base text-[#555]">
                            Here are some features that are offered by Biosoftech Solutions for API
                            Gateway:
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="
                bg-white
                border
                border-[#bfd6f4]
                rounded-[4px]
                p-6
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
                                    width="48"
                                    height="48"
                                    className="w-[48px] h-[48px] object-contain"
                                    loading="lazy"
                                />

                                {/* Title */}
                                <h3
                                    className="
                  mt-4
                  text-[18px]
                  font-bold
                  text-[#0b376d]
                "
                                >
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p
                                    className="
                  mt-3
                  text-[14px]
                  leading-[1.6]
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
                <div className="w-full px-4 sm:px-6">

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
            <section className="bg-black py-10 lg:py-14">
                <div className="w-full px-4 sm:px-6">

                    {/* Heading */}
                    <div className="text-center mb-8">
                        <h2 className="text-white text-fluid-3xl lg:text-fluid-4xl font-bold">
                            Industries We Serve
                        </h2>

                        <p className="mt-4 max-w-4xl mx-auto text-gray-400 text-base lg:text-lg leading-7 lg:leading-8">
                            Azure Solutions Across Industries — We build scalable,
                            secure, and high-performance cloud solutions tailored to
                            the unique needs of diverse industries.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">

                        {industries.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={index}
                                    className="
                  group
                  rounded-2xl
                  border border-[#1f355a]
                  bg-gradient-to-r
                  from-[#0e1931]
                  to-[#1a2740]
                  p-5
                  transition-all
                  duration-500
                  hover:border-[#2f81ff]
                  hover:-translate-y-1
                  hover:shadow-[0_0_30px_rgba(47,129,255,0.15)]
                "
                                >
                                    {/* Icon Circle */}
                                    <div
                                        className="
                    mx-auto
                    w-12
                    h-12
                    rounded-full
                    bg-[#2b2368]
                    flex
                    items-center
                    justify-center
                  "
                                    >
                                        <Icon
                                            size={22}
                                            className="text-[#4f9cff]"
                                        />
                                    </div>

                                    {/* Title */}
                                    <h3
                                        className="
                    mt-4
                    text-center
                    text-white
                    text-xl lg:text-2xl
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
                    mt-3
                    text-center
                    text-gray-400
                    text-sm lg:text-base
                    leading-6 lg:leading-7
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