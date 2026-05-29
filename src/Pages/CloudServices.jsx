import React, { useState, useRef, useEffect } from "react";
import { FiArrowUpRight, FiArrowRightCircle } from "react-icons/fi";
import { ArrowRight } from "lucide-react";
import { RefreshCw } from "lucide-react";

const CloudServices = () => {
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

    return (
        <main className="min-h-screen bg-white">
            {/* HERO SECTION */}
            <section className="w-full bg-[#F7F5EF] pb-12 lg:pb-24">
                <div className="max-w-[1750px] mx-auto px-6 lg:px-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen pt-28 md:pt-32">
                        <div className="flex flex-col text-center lg:text-left">
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-black leading-tight">
                                Best Website Development <br />
                                Company In India
                            </h1>
                            <div className="mt-8 lg:mt-10 text-lg lg:text-[22px] leading-relaxed lg:leading-[2] text-[#111] max-w-[900px]">
                                <p>
                                    Are you looking for website development services in India? RankON Technologies is a leading web development company in India, offering <span className="font-bold">strategic website development services</span> designed to convert traffic into leads, support long-term SEO, and scale with your business.
                                </p>
                                <p className="mt-6 lg:mt-10">
                                    With <span className="font-bold">14+ years of experience</span> and <span className="font-bold">1,000+ digital projects delivered globally</span>, RankON creates websites that don&apos;t just look professional, they perform.
                                </p>
                            </div>

                            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-8 lg:gap-12">
                                <div className="text-center lg:text-left">
                                    <h3 className="text-3xl md:text-[52px] font-bold">Clutch</h3>
                                    <div className="text-[#f4a300] text-xl md:text-[34px]">★★★★★</div>
                                    <p className="font-semibold text-sm md:text-base">Rated 5/5 Stars</p>
                                </div>
                                <div className="text-center lg:text-left">
                                    <h3 className="text-3xl md:text-[52px] font-bold"><span className="text-[#69D24A]">up</span>work</h3>
                                    <p className="border-t border-black text-sm md:text-[20px] font-semibold mt-2 pt-2">Top Rated Plus</p>
                                </div>
                                <div className="text-center lg:text-left">
                                    <h3 className="text-3xl md:text-[52px] font-medium"><span className="text-[#4285F4]">G</span><span className="text-[#EA4335]">o</span><span className="text-[#FBBC05]">o</span><span className="text-[#4285F4]">g</span><span className="text-[#34A853]">l</span><span className="text-[#EA4335]">e</span></h3>
                                    <div className="text-[#f4a300] text-xl md:text-[34px]">★★★★★</div>
                                    <p className="font-semibold text-sm md:text-base">Rated 4.9/5 Stars</p>
                                </div>
                            </div>

                            <div className="mt-10 flex flex-col sm:flex-row gap-4 lg:gap-0 justify-center lg:justify-start">
                                <button className="group bg-[#F7B700] px-6 lg:px-10 h-[60px] lg:h-[74px] text-lg lg:text-[22px] font-medium flex items-center justify-center gap-4 hover:bg-[#e4aa00] transition cursor-pointer">
                                    REQUEST PROPOSAL <FiArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </button>
                                <button className="group bg-black text-white px-6 lg:px-10 h-[60px] lg:h-[74px] text-lg lg:text-[22px] font-medium flex items-center justify-center gap-4 hover:bg-[#151515] transition cursor-pointer">
                                    WEBSITE PACKAGES <FiArrowRightCircle className="transition group-hover:translate-x-1" />
                                </button>
                            </div>
                        </div>

                        <div className="relative mt-12 lg:mt-0">
                            <div className="absolute left-[8%] top-[5%] z-20 w-[200px] md:w-[420px] rotate-[-6deg] bg-white rounded-xl shadow-xl p-2 md:p-4">
                                <img src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85" className="w-full h-[100px] md:h-[220px] object-cover rounded" alt="" />
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
                className="bg-[#0a0a0a] relative h-[600vh]"
            >
                <div className="sticky top-0 h-screen flex items-center overflow-hidden">
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
                                                <button className="bg-blue-600 hover:bg-blue-500 px-10 py-4 rounded-2xl font-semibold text-lg transition-all active:scale-95">
                                                    Get a Free Quote
                                                </button>
                                                <button className="border border-gray-600 hover:bg-gray-900 px-8 py-4 rounded-2xl font-semibold transition-all active:scale-95">
                                                    Free Technical Consultation →
                                                </button>
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


        </main>
    );
};

export default CloudServices;