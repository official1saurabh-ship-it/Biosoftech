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

import robotImage from "../assets/robot-ai.avif";
import consultationImage from "../assets/consultation.png";
import useEmblaCarousel from "embla-carousel-react";

import caseStudy1 from "../assets/case3.jpg";
import caseStudy2 from "../assets/case4.jpg";


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
            title: "AWS-Certified Engineers",
            description:
                "Our team holds certifications across Solutions Architecture, DevOps, and Security Specialty.",
        },
        {
            icon: ShieldCheck,
            title: "Outcome-Driven Approach",
            description:
                "Every AWS recommendation we make is tied to a measurable business outcome.",
        },
        {
            icon: Bot,
            title: "Security by Design",
            description:
                "Security is embedded into every layer of our work—IAM matrices, WAF rules, and KMS encryption.",
        },
    ];

    const rightFeatures = [
        {
            icon: CloudCog,
            title: "Full-Lifecycle Delivery",
            description:
                "From initial AWS consulting through migration and ongoing managed services.",
        },
        {
            icon: ArrowLeftRight,
            title: "FinOps-First Cost Governance",
            description:
                "Our FinOps practice typically reduces AWS spend by 25–40% through proactive infrastructure adjustments.",
        },
        {
            icon: CloudCog,
            title: "Global Delivery Capability",
            description:
                "With international offices, we provide robust follow-the-sun operational assistance.",
        },
    ];

    const stages = [
        {
            id: 1,
            stage: "STAGE 01",
            title: "Requirement Analysis",
            desc: "We start by understanding your business objectives, technical needs, and application requirements in detail.",
            icon: "🔍",
        },
        {
            id: 2,
            stage: "STAGE 02",
            title: "Cloud Architecture Design",
            desc: "We design a secure and scalable DigitalOcean architecture tailored to your business needs.",
            icon: "☁️",
        },
        {
            id: 3,
            stage: "STAGE 03",
            title: "Deployment & Development",
            desc: "We set up your DigitalOcean environment and deploy infrastructure using best practices.",
            icon: "🚀",
        },
        {
            id: 4,
            stage: "STAGE 04",
            title: "Testing & Optimization",
            desc: "We thoroughly test your system for performance, security, and scalability.",
            icon: "✅",
        },
        {
            id: 5,
            stage: "STAGE 05",
            title: "Test & Quality Assurance",
            desc: "Rigorous testing including security validation and performance benchmarking.",
            icon: "🛡️",
        },
        {
            id: 6,
            stage: "STAGE 06",
            title: "Monitoring & Managed Services",
            desc: "Continuous monitoring, updates, and optimization to ensure long-term stability.",
            icon: "📊",
        }
    ];

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
            {/* HERO SECTION */}
            <section className="w-full bg-[#F7F5EF] pb-12 lg:pb-24">
                <div className="max-w-[1750px] mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center min-h-0 lg:min-h-screen pt-24 sm:pt-28 md:pt-32">
                        <div className="flex flex-col text-center lg:text-left">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-black leading-tight">
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
                                <button className="group bg-[#F7B700] px-5 sm:px-6 lg:px-10 h-[54px] sm:h-[60px] lg:h-[74px] text-base sm:text-lg lg:text-[22px] font-medium flex items-center justify-center gap-3 sm:gap-4 hover:bg-[#e4aa00] transition cursor-pointer min-h-[44px]">
                                    REQUEST PROPOSAL <FiArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </button>
                                <button className="group bg-black text-white px-5 sm:px-6 lg:px-10 h-[54px] sm:h-[60px] lg:h-[74px] text-base sm:text-lg lg:text-[22px] font-medium flex items-center justify-center gap-3 sm:gap-4 hover:bg-[#151515] transition cursor-pointer min-h-[44px]">
                                    CLOUD SOLUTIONS <FiArrowRightCircle className="transition group-hover:translate-x-1" />
                                </button>
                            </div>
                        </div>

                        <div className="relative mt-8 sm:mt-12 lg:mt-0">
                            <div className="absolute left-[5%] sm:left-[8%] top-[5%] z-20 w-[140px] sm:w-[200px] md:w-[420px] rotate-[-6deg] bg-white rounded-xl shadow-xl p-2 md:p-4">
                                <img src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85" className="w-full h-[70px] sm:h-[100px] md:h-[220px] object-cover rounded" alt="" />
                            </div>
                            <img src="https://pngimg.com/d/laptop_PNG101816.png" alt="" className="relative z-10 w-full" />
                        </div>
                    </div>
                </div>
            </section>

            {/* STARTUP CLOUD SECTION */}
            <section className="hidden lg:block relative overflow-hidden bg-[#f8fbff] px-4 py-10 md:py-16">
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent" aria-hidden="true"></div>
                <div className="relative mx-auto max-w-[1750px] px-6 lg:px-20">
                    <div className="text-center mb-12">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">Startup-ready cloud infrastructure</p>
                        <h2 className="max-w-4xl mx-auto text-2xl font-semibold leading-tight text-slate-950 md:text-3xl lg:text-4xl">
                            Why Choose DigitalOcean for <span className="bg-gradient-to-r from-[#01abfb] to-[#0176f2] bg-clip-text text-transparent">Startups and Scaleups?</span>
                        </h2>
                        <p className="mt-6 text-base leading-7 font-normal text-slate-600 md:text-lg max-w-3xl mx-auto">
                            DigitalOcean is a preferred cloud platform for startups, growing SaaS companies, and digital agencies looking for simple, scalable, and cost-effective infrastructure.
                        </p>
                    </div>

                    <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] items-start">
                        <div>
                            <h3 className="text-2xl font-semibold text-slate-950 mb-6">Key Benefits of DigitalOcean</h3>
                            <div className="grid gap-6 sm:grid-cols-2">
                                <article className="group relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-cyan-50 p-6 shadow-[0_10px_34px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(15,23,42,0.14)]">
                                    <div className="relative mb-6 flex items-center justify-between">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg shadow-emerald-500/30 transition-transform group-hover:rotate-6 group-hover:scale-110 z-10">
                                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" className="h-7 w-7"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline></svg>
                                        </div>
                                        <span className="text-4xl font-black text-emerald-600/10">01</span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-slate-950">60-80% Lower Infrastructure Cost</h3>
                                    <p className="mt-3 text-slate-600">Reduce infrastructure spend compared with similar AWS or Azure setups.</p>
                                </article>
                                <article className="group relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 via-white to-sky-50 p-6 shadow-[0_10px_34px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(15,23,42,0.14)]">
                                    <div className="relative mb-6 flex items-center justify-between">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-500/30 transition-transform group-hover:rotate-6 group-hover:scale-110 z-10">
                                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" className="h-7 w-7"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect></svg>
                                        </div>
                                        <span className="text-4xl font-black text-blue-600/10">02</span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-slate-950">Flexible Hosting and Storage</h3>
                                    <p className="mt-3 text-slate-600">Use Droplets, Managed Databases, and Spaces with a simpler control layer.</p>
                                </article>
                            </div>
                        </div>
                        <aside className="lg:sticky lg:top-8">
                            <div className="overflow-hidden rounded-3xl bg-white shadow-xl shadow-slate-900/8">
                                <div className="bg-slate-950 p-6 text-white">
                                    <p className="text-lg font-semibold text-blue-200">DigitalOcean Platform Stack</p>
                                </div>
                                <div className="grid grid-cols-2 gap-px bg-slate-200">
                                    <div className="bg-white p-5"><p className="font-semibold text-slate-950">Droplets</p></div>
                                    <div className="bg-white p-5"><p className="font-semibold text-slate-950">Managed DBs</p></div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE SECTION */}
            <section className="relative py-16 bg-white overflow-hidden">
                <div className="max-w-[1750px] mx-auto px-6 lg:px-20">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                        <div className="space-y-10">
                            <div>
                                <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-slate-900">Why Choose <span className="text-blue-600">DigitalOcean Cloud</span> Services</h2>
                                <div className="w-20 h-1 bg-blue-600 mt-4 rounded-full"></div>
                            </div>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                DigitalOcean is a developer-friendly cloud platform designed for simplicity, performance, and affordability.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-white border border-blue-100 hover:border-blue-300 rounded-2xl p-6 transition-all hover:shadow-md group">
                                    <div className="w-11 h-11 flex items-center justify-center rounded-full border border-blue-200 text-blue-600 text-2xl group-hover:scale-110 transition-transform">🙂</div>
                                    <p className="font-medium text-slate-800 leading-tight">Simple & Developer-Friendly Platform</p>
                                </div>
                                <div className="flex items-center gap-3 bg-white border border-blue-100 hover:border-blue-300 rounded-2xl p-5 transition-all hover:shadow-md group">
                                    <div className="w-11 h-11 flex items-center justify-center rounded-full border border-blue-200 text-blue-600 text-2xl group-hover:scale-110 transition-transform">💰</div>
                                    <p className="font-medium text-slate-800 leading-tight">Cost-Effective Cloud Hosting</p>
                                </div>
                            </div>
                            <div className="bg-blue-600 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-6 text-white">
                                <div className="flex-1"><p className="text-lg leading-snug">Ready to scale your business? Let's build your cloud strategy together.</p></div>
                                <a href="/contact" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 rounded-2xl whitespace-nowrap transition-all active:scale-95 text-center">Request a Free Consultation</a>
                            </div>
                        </div>
                        <div className="relative hidden lg:block pt-8">
                            <img src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2069&auto=format&fit=crop" alt="DigitalOcean Cloud" className="w-full h-auto rounded-3xl shadow-2xl object-cover" />
                        </div>
                    </div>
                </div>
            </section>
            {/* DEVELOPMENT PROCESS SECTION */}
            <section
                ref={sectionRef}
                className="bg-[#0a0a0a] relative h-auto lg:h-[600vh]"
            >
                <div className="lg:sticky lg:top-0 lg:h-screen flex items-center overflow-hidden">
                    <div className="max-w-[1750px] mx-auto px-6 lg:px-20 w-full">

                        <div className="text-center mb-12">
                            <h2 className="text-4xl lg:text-5xl font-bold text-white">
                                DigitalOcean <span className="text-blue-500">Development Process</span>
                            </h2>
                            <p className="mt-4 text-gray-400 text-lg">
                                We follow a simple, agile, and efficient process to deliver high-quality solutions.
                            </p>
                        </div>

                        {/* Horizontal Cards Container */}
                        <div className="relative overflow-hidden">
                            <div
                                className="flex gap-8 transition-transform duration-700 ease-out"
                                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                            >
                                {stages.map((stage, index) => (
                                    <div
                                        key={stage.id}
                                        className="min-w-full bg-[#111] rounded-3xl p-10 md:p-6 lg:p-16 border border-gray-800 flex flex-col lg:flex-row gap-12 md:gap-8 lg:gap-12 items-center"
                                    >
                                        {/* Left Content */}
                                        <div className="lg:w-1/2 space-y-8">
                                            <div className="inline-flex items-center gap-3">
                                                <span className="text-6xl">{stage.icon}</span>
                                                <div className="px-5 py-2 bg-blue-600/10 border border-blue-500/30 text-blue-400 text-sm font-semibold rounded-full">
                                                    {stage.stage}
                                                </div>
                                            </div>

                                            <h3 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                                                {stage.title}
                                            </h3>

                                            <p className="text-gray-300 text-xl leading-relaxed">
                                                {stage.desc}
                                            </p>

                                            <div className="flex flex-wrap gap-4 pt-6">
                                                <a href="/contact" className="bg-blue-600 hover:bg-blue-500 px-10 py-4 rounded-2xl font-semibold text-lg transition-all active:scale-95 inline-flex items-center justify-center">
                                                    Get a Free Quote
                                                </a>
                                                <a href="/contact" className="border border-gray-600 hover:bg-gray-900 px-8 py-4 rounded-2xl font-semibold transition-all active:scale-95 inline-flex items-center justify-center">
                                                    Free Technical Consultation →
                                                </a>
                                            </div>
                                        </div>

                                        {/* Right Side */}
                                        <div className="lg:w-1/2 bg-gray-900 rounded-2xl aspect-video flex items-center justify-center border border-gray-700 text-gray-400 text-5xl">
                                            Stage {index + 1}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Progress Indicator */}
                        <div className="flex justify-center gap-3 mt-16">
                            {stages.map((_, i) => (
                                <div
                                    key={i}
                                    className={`h-3 rounded-full transition-all duration-300 ${i === activeIndex ? 'bg-blue-500 w-12' : 'bg-gray-700 w-8'}`}
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
                            <h1 className="text-4xl md:text-5xl lg:text-[58px] leading-tight font-semibold mb-8">
                                AWS Cloud Migration Services
                            </h1>
                            <p className="text-[#36507A] text-lg md:text-[20px] leading-relaxed md:leading-[2] max-w-[700px]">
                                We help businesses migrate smoothly from legacy systems and
                                other cloud platforms to AWS with minimal downtime.
                                Our approach includes legacy system to AWS migration,
                                lift-and-shift vs re-architecture assessment,
                                and multi-cloud to AWS consolidation based on business needs.
                                We also provide AWS cost optimisation audits and disaster
                                recovery setup on AWS to ensure better performance,
                                scalability, and reliability.
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
                                        <button className="w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-3xl bg-[#0F2446] flex items-center justify-center border border-[#24426E] hover:rotate-180 duration-700">
                                            <RefreshCw color="white" size={24} className="md:w-[28px] md:h-[28px]" />
                                        </button>
                                    </div>
                                    <div className="mt-8 border-t border-[#21375E]" />
                                    <div className="grid sm:grid-cols-3 gap-5 mt-8">
                                        {[
                                            ["Low", "Downtime risk"],
                                            ["20–35%", "Cost saving focus"],
                                            ["DR", "Ready setup"],
                                        ].map((item, i) => (
                                            <div key={i} className="rounded-[20px] md:rounded-[28px] bg-white/10 border border-white/10 p-5 md:p-7 backdrop-blur">
                                                <h2 className="text-white text-3xl md:text-[48px] font-bold">{item[0]}</h2>
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
                                        <h2 className="mt-2 md:mt-3 text-2xl md:text-[44px] font-semibold leading-tight">From legacy stack to AWS</h2>
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
                        Why Biosoftech – The Difference That Makes Cloud Projects Succeed
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
                                    className="w-full h-[390px] object-cover"
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
                                        className="
                w-full
                h-full
                object-cover
              "
                                    />
                                </div>
                            </div>
                        </div>

                        {/* FORM */}
                        <div className="max-w-[700px]">

                            <h2
                                className="
            text-5xl
            lg:text-6xl
            font-bold
            text-[#403B75]
            leading-tight
            mb-10
          "
                            >
                                Book a Free Cloud
                                <br />
                                Consultation
                            </h2>

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
                                    className="w-[64px] h-[64px] object-contain"
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
                  h-[60vh]
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
                                            className="
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-700
                      hover:scale-110
                    "
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

                        <p className="mt-6 max-w-4xl mx-auto text-gray-300 text-lg leading-9">
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
                    text-gray-300
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