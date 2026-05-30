import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import {
  Star,
  ArrowRight,
  PlusCircle,
} from "lucide-react";

import {
  Bot,
  BrainCircuit,
  Workflow,
  Cpu,
  Sparkles,
} from "lucide-react";
import {
  Smartphone,
  Globe,
  ShoppingBag,
  Bitcoin,
  Gamepad2,


  ArrowUpRight,
} from "lucide-react";



import {
  FiSearch,
  FiSettings,
  FiMonitor,
} from "react-icons/fi";

import {
  IoGitNetwork,
} from "react-icons/io5";

import {
  HiOutlineCube,
} from "react-icons/hi";


import why_icon_1_ai from "../assets/why_icon_1_ai.avif";
import why_icon_2_ai from "../assets/why_icon_2_ai.avif";
import why_icon_3_ai from "../assets/why_icon_3_ai.avif";
import why_icon_4_ai from "../assets/why_icon_4_ai.avif";


import process_1 from "../assets/process_1_ai.webp";
import process_2 from "../assets/process_2_ai.webp";
import process_3 from "../assets/process_3_ai.webp";
import process_4 from "../assets/process_4_ai.webp";
import process_5 from "../assets/process_5_ai.webp";
import process_6 from "../assets/process_6_ai.webp";

import ai_bg from "../assets/bg_ai_cta_banner.webp";






const HeroSection = () => {
  const sectionRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;

      const rect = section.getBoundingClientRect();

      const scrollProgress =
        Math.min(
          Math.max(
            (-rect.top / (section.offsetHeight - window.innerHeight)),
            0
          ),
          1
        );

      const step = Math.min(
        processData.length - 1,
        Math.floor(scrollProgress * processData.length)
      );

      setActiveStep(step);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);


  const capabilities = [
    {
      number: "01",
      title: "LLM Application Development",
      description:
        "Custom applications built on GPT-4o, Claude 3.5 Sonnet, Llama 3.1, and Gemini — tailored to your workflows, data, and compliance requirements.",
    },

    {
      number: "02",
      title: "RAG Pipeline Development",
      description:
        "Retrieval-Augmented Generation systems that connect your LLM to internal knowledge bases, documents, and databases.",
    },

    {
      number: "03",
      title: "AI Agents & Workflow Automation",
      description:
        "Autonomous multi-step agents built with LangChain, LangGraph, and AutoGen that execute tasks and integrate with tools.",
    },

    {
      number: "04",
      title: "LLM Fine-Tuning on Proprietary Data",
      description:
        "Fine-tune open-source and proprietary models on your business data for domain-specific intelligence.",
    },

    {
      number: "05",
      title: "Enterprise AI Chatbot & Copilot Development",
      description:
        "Production-grade chatbots and copilots for customer support, internal operations, and enterprise workflows.",
    },

    {
      number: "06",
      title: "Multimodal AI",
      description:
        "AI systems that understand and generate across text, image, audio, and video for advanced automation.",
    },
  ];


  const features = [
    {
      image: why_icon_1_ai,
      title: "Advanced AI Expertise",
      description:
        "Our team specializes in modern AI frameworks, machine learning models, and data-driven solutions.",
    },

    {
      image: why_icon_2_ai,
      title: "Security & Compliance",
      description:
        "We ensure your data is protected with secure and compliant AI implementations.",
    },

    {
      image: why_icon_3_ai,
      title: "Scalable Solutions",
      description:
        "Our AI systems are designed to scale with your business growth.",
    },

    {
      image: why_icon_4_ai,
      title: "Custom Approach",
      description:
        "We build solutions tailored to your business challenges and goals.",
    },
  ];


  const expertiseData = [
    {
      icon: BrainCircuit,
      title: "AI Strategy & Technical Consulting",
      description:
        "We begin with use-case analysis, system architecture design, LLM selection, and prompt engineering strategy.",
    },
    {
      icon: Bot,
      title: "Custom AI Agent Engineering",
      description:
        "Using advanced tools like AutoGen Studio, LangChain, and vector memory systems, we craft intelligent agents.",
    },
    {
      icon: Workflow,
      title: "AI Automation & Workflow Orchestration",
      description:
        "AI agents automate workflows by integrating controllers and execution systems.",
    },
    {
      icon: Cpu,
      title: "AI Agent Integration",
      description:
        "We integrate agents with CRM, ERP, APIs, and enterprise systems securely.",
    },
    {
      icon: Sparkles,
      title: "Memory, Learning & Continuous Improvement",
      description:
        "Agents continuously improve using memory modules, feedback loops, and adaptive learning.",
    },
  ];


  const services = [
    {
      title: "Mobile App",
      category: "DEVELOPMENT",
      icon: Smartphone,
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
      heading: "Mobile App Development",
      description:
        "We specialize in augmenting the mobile experience for users of different niches, industries, products, and more that can help businesses enhance their value with futuristic mobile applications.",
      technologies: [
        "Android App",
        "iPhone App",
        "Flutter",
        "Swift",
        "React Native",
        "Kotlin",
        "Ionic",
        "Xamarin",
      ],
    },

    {
      title: "Website",
      category: "DEVELOPMENT",
      icon: Globe,
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
      heading: "Website Development",
      description:
        "We build scalable and responsive websites with premium UI/UX and modern technologies.",
      technologies: [
        "React",
        "Next.js",
        "Tailwind",
        "Node.js",
        "MongoDB",
        "Express",
        "Firebase",
        "Vercel",
      ],
    },

    {
      title: "E-commerce",
      category: "DEVELOPMENT",
      icon: ShoppingBag,
      image:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop",
      heading: "E-commerce Development",
      description:
        "Launch modern online stores with advanced payment systems and scalable architecture.",
      technologies: [
        "Shopify",
        "WooCommerce",
        "Stripe",
        "Razorpay",
        "React",
        "Next.js",
        "Node.js",
        "MongoDB",
      ],
    },

    {
      title: "Blockchain",
      category: "DEVELOPMENT",
      icon: Bitcoin,
      image:
        "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=1200&auto=format&fit=crop",
      heading: "Blockchain Development",
      description:
        "Build secure blockchain applications, crypto platforms, and decentralized ecosystems.",
      technologies: [
        "Ethereum",
        "Solidity",
        "Web3",
        "Smart Contracts",
        "Polygon",
        "NFT",
        "WalletConnect",
        "Node.js",
      ],
    },

    {
      title: "Game",
      category: "DEVELOPMENT",
      icon: Gamepad2,
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
      heading: "Game Development",
      description:
        "Create immersive gaming experiences with modern engines and multiplayer systems.",
      technologies: [
        "Unity",
        "Unreal",
        "C#",
        "Photon",
        "3D Games",
        "2D Games",
        "VR",
        "AR",
      ],
    },

    {
      title: "AI & ML",
      category: "SOLUTIONS",
      icon: BrainCircuit,
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
      heading: "AI & ML Solutions",
      description:
        "AI-powered automation, recommendation systems, intelligent agents, and analytics.",
      technologies: [
        "OpenAI",
        "Gemini",
        "LangChain",
        "Python",
        "TensorFlow",
        "PyTorch",
        "Vector DB",
        "RAG",
      ],
    },

    {
      title: "IoT & Embedded",
      category: "SOLUTIONS",
      icon: Cpu,
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
      heading: "IoT & Embedded Solutions",
      description:
        "Connected devices, automation systems, and smart hardware integrations.",
      technologies: [
        "Arduino",
        "Raspberry Pi",
        "Sensors",
        "MQTT",
        "Embedded C",
        "IoT Cloud",
        "Automation",
        "Edge AI",
      ],
    },
  ];
  const [activeService, setActiveService] = useState(services[0]);
  const processData = [
    {
      stage: "STAGE 01",
      title: "Requirement Analysis",
      description:
        "We begin by understanding your business challenges, goals, and technical requirements. This phase helps us define the right AI strategy and roadmap.",
      image: process_1,
      icon: FiSearch,
    },

    {
      stage: "STAGE 02",
      title: "Data Collection & Preparation",
      description:
        "High-quality data is the foundation of successful AI systems. We gather, clean, and structure relevant data for model training.",
      image: process_2,
      icon: IoGitNetwork,
    },

    {
      stage: "STAGE 03",
      title: "Model Development",
      description:
        "Our experts design and build advanced AI models using the latest algorithms and technologies for intelligent automation.",
      image: process_3,
      icon: HiOutlineCube,
    },

    {
      stage: "STAGE 04",
      title: "Testing & Optimization",
      description:
        "We rigorously test AI models to evaluate performance, accuracy, and reliability while continuously optimizing results.",
      image: process_4,
      icon: FiSettings,
    },

    {
      stage: "STAGE 05",
      title: "Deployment",
      description:
        "Once validated, we seamlessly deploy AI solutions into your existing systems across platforms and infrastructures.",
      image: process_5,
      icon: IoGitNetwork,
    },

    {
      stage: "STAGE 06",
      title: "Maintenance",
      description:
        "AI systems require continuous monitoring and improvement. We provide ongoing support, updates, and optimization.",
      image: process_6,
      icon: FiMonitor,
    },
  ];


  return (
    <>
      <section className="w-full min-h-0 lg:min-h-screen bg-[#f3f1eb] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pb-12 sm:pb-16 lg:pb-32">

          {/* Main Grid */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center min-h-0 lg:min-h-screen pt-24 sm:pt-28 md:pt-32">

            {/* Left Content */}
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-black leading-tight">
                Best Website Development
                <br />
                Company In India
              </h1>

              <p className="mt-4 sm:mt-6 lg:mt-8 text-[#333] text-base sm:text-lg leading-7 sm:leading-9 max-w-2xl">
                Are you looking for website development services in India?
                RankON Technologies is a leading web development company in
                India, offering{" "}
                <span className="font-semibold">
                  strategic website development services
                </span>{" "}
                designed to convert traffic into leads, support long-term SEO,
                and scale with your business.
              </p>

              <p className="mt-4 sm:mt-6 lg:mt-8 text-[#333] text-base sm:text-lg leading-7 sm:leading-9 max-w-2xl">
                With{" "}
                <span className="font-semibold">
                  14+ years of experience
                </span>{" "}
                and{" "}
                <span className="font-semibold">
                  1,000+ digital projects delivered globally
                </span>
                , RankON creates websites that don&apos;t just look professional,
                they perform.
              </p>

              {/* Rating Section */}
              <div className="flex flex-wrap gap-4 sm:gap-6 lg:gap-8 mt-6 sm:mt-8 lg:mt-12">

                {/* Clutch */}
                <div>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1d2b36]">
                    Clutch
                  </h3>

                  <div className="flex mt-1 sm:mt-2 text-[#f7b500]">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="sm:w-[22px] sm:h-[22px]"
                        fill="currentColor"
                      />
                    ))}
                  </div>

                  <p className="mt-1 font-semibold text-xs sm:text-sm">
                    Rated 5/5 Stars
                  </p>
                </div>

                {/* Upwork */}
                <div>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                    <span className="text-[#6fda44]">Up</span>
                    <span className="text-black">work</span>
                  </h3>

                  <p className="mt-4 sm:mt-6 font-semibold text-lg sm:text-xl lg:text-2xl">
                    Top Rated Plus
                  </p>
                </div>

                {/* Google */}
                <div>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                    <span className="text-[#4285F4]">G</span>
                    <span className="text-[#EA4335]">o</span>
                    <span className="text-[#FBBC05]">o</span>
                    <span className="text-[#4285F4]">g</span>
                    <span className="text-[#34A853]">l</span>
                    <span className="text-[#EA4335]">e</span>
                  </h3>

                  <div className="flex mt-1 sm:mt-2 text-[#f7b500]">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="sm:w-[22px] sm:h-[22px]"
                        fill="currentColor"
                      />
                    ))}
                  </div>

                  <p className="mt-1 font-semibold text-xs sm:text-sm">
                    Rated 4.9/5 Stars
                  </p>
                </div>

                {/* Google Partner */}
                <div>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                    <span className="text-[#4285F4]">G</span>
                    <span className="text-[#EA4335]">o</span>
                    <span className="text-[#FBBC05]">o</span>
                    <span className="text-[#4285F4]">g</span>
                    <span className="text-[#34A853]">l</span>
                    <span className="text-[#EA4335]">e</span>
                  </h3>

                  <p className="text-lg sm:text-xl lg:text-2xl mt-1 sm:mt-2">Partner</p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-8 lg:mt-12">

                <button className="bg-[#f4b400] hover:bg-[#e3a600] transition-all px-5 sm:px-6 lg:px-8 py-3 sm:py-4 text-black font-semibold flex items-center gap-2 sm:gap-3 text-sm sm:text-base min-h-[44px]">
                  REQUEST PROPOSAL
                  <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
                </button>

                <button className="bg-black hover:bg-[#222] transition-all px-5 sm:px-6 lg:px-8 py-3 sm:py-4 text-white font-semibold flex items-center gap-2 sm:gap-3 text-sm sm:text-base min-h-[44px]">
                  WEBSITE PACKAGES
                  <PlusCircle size={16} className="sm:w-[18px] sm:h-[18px]" />
                </button>
              </div>
            </div>

            {/* Right Side */}
            <div className="relative flex justify-center lg:justify-end">

              {/* Background Dots */}
              <div className="absolute bottom-0 right-0 grid grid-cols-6 gap-2 sm:gap-4 opacity-20">
                {[...Array(36)].map((_, i) => (
                  <div
                    key={i}
                    className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#d8d2c8]"
                  />
                ))}
              </div>

              {/* Floating Card */}
              <div className="absolute top-6 sm:top-10 left-0 lg:left-10 w-[200px] sm:w-[260px] lg:w-[300px] bg-white shadow-2xl rounded-md rotate-[-6deg] p-3 sm:p-4 z-20">
                <img
                  src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop"
                  alt="website mockup"
                  className="rounded-md h-24 sm:h-32 lg:h-40 w-full object-cover"
                />

                <div className="grid grid-cols-3 gap-1 sm:gap-2 mt-2 sm:mt-4">
                  <img
                    src="https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=600&auto=format&fit=crop"
                    className="rounded-md h-10 sm:h-12 lg:h-16 object-cover"
                  />

                  <img
                    src="https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=600&auto=format&fit=crop"
                    className="rounded-md h-10 sm:h-12 lg:h-16 object-cover"
                  />

                  <img
                    src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=600&auto=format&fit=crop"
                    className="rounded-md h-10 sm:h-12 lg:h-16 object-cover"
                  />
                </div>
              </div>

              {/* Laptop Image */}
              <img
                src="https://pngimg.com/d/laptop_PNG101816.png"
                alt="laptop"
                className="relative z-10 w-full max-w-xl lg:max-w-2xl object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-black text-white">

        {/* Background Glow */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-600/30 blur-[180px]" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-700/30 blur-[180px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

          {/* MAIN GRID */}
          <div className="grid lg:grid-cols-[420px_1fr] border border-white/10">

            {/* LEFT SIDE STICKY */}
            <div className="lg:sticky lg:top-0 h-fit border-r border-white/10 p-8 lg:p-12 self-start">

              <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                Our AI Agent
                <br />
                Development
                <br />
                Expertise
              </h2>

              <p className="mt-8 text-white/80 text-lg leading-8 lg:leading-10">
                We deliver full-cycle engineering and deployment of custom AI
                agents using a modern tech stack and best-in-class frameworks.
              </p>

              {/* IMAGE */}
              <div className="mt-10 rounded-3xl overflow-hidden border border-cyan-500/20">
                <img
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop"
                  alt="AI"
                  className="w-full h-[420px] md:h-[300px] lg:h-[420px] object-cover"
                />
              </div>
            </div>


            {/* RIGHT SIDE */}
            <div className="grid md:grid-cols-2 p-3 md:p-6 lg:p-12 gap-8 md:gap-12 lg:gap-16">

              {expertiseData.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className={`
          p-8 lg:p-14
          border-white/10
          ${index % 2 === 0 ? "md:border-r" : ""}
          ${index < 4 ? "border-b" : ""}
        `}
                  >
                    {/* CONTENT */}
                    <div className="max-w-xl">

                      {/* ICON */}
                      <div className="w-16 h-16 rounded-full border border-cyan-500/30 bg-white/5 flex items-center justify-center">
                        <Icon
                          className="text-cyan-400"
                          size={30}
                        />
                      </div>

                      {/* TITLE */}
                      <h3 className="mt-8 text-3xl lg:text-4xl font-bold leading-tight">
                        {item.title}
                      </h3>

                      {/* DESCRIPTION */}
                      <p className="mt-6 text-white/75 text-lg leading-9">
                        {item.description}
                      </p>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>






      <section className="bg-[#f3f3f3] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          {/* TOP SECTION */}
          <div className="grid lg:grid-cols-2 gap-10 items-start">

            {/* LEFT */}
            <div>
              <h2 className="text-5xl lg:text-6xl font-bold leading-tight text-[#111]">
                Amplifying Business Progress
                <br />
                Through Smart Solutions
              </h2>

              <div className="w-24 h-[2px] bg-black mt-8" />
            </div>

            {/* RIGHT */}
            <div>
              <p className="text-xl text-[#444] leading-8 lg:leading-10 max-w-2xl">
                Obtain robust software solutions, modernize systems,
                and leverage futuristic technologies for growth opportunities.
              </p>

              <button className="mt-10 flex items-center gap-5 group">
                <div className="w-16 h-16 rounded-full border-2 border-black flex items-center justify-center transition-all duration-300 group-hover:bg-black">
                  <ArrowUpRight className="group-hover:text-white transition-all duration-300" />
                </div>

                <span className="text-2xl font-medium">
                  Explore Services
                </span>
              </button>
            </div>
          </div>

          {/* MAIN CONTENT */}
          <div className="mt-20 bg-[#efefef] p-6 lg:p-10 rounded-[20px]">

            <div className="grid lg:grid-cols-[1fr_450px] gap-10">

              {/* LEFT CARDS */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

                {services.map((service, index) => {
                  const Icon = service.icon;
                  const isActive =
                    activeService.title === service.title;

                  return (
                    <button
                      key={index}
                      onClick={() => setActiveService(service)}
                      className="relative h-[280px] rounded-[24px] overflow-hidden group text-left"
                    >

                      {/* IMAGE */}
                      <img
                        src={service.image}
                        alt={service.title}
                        className="
                        absolute inset-0 w-full h-full object-cover
                        transition-transform duration-700
                        group-hover:scale-110
                      "
                      />

                      {/* OVERLAY */}
                      <div className="absolute inset-0 bg-black/45" />

                      {/* CONTENT */}
                      <div className="relative z-10 flex flex-col justify-between h-full p-6">

                        {/* TOP ICON */}
                        <div className="w-11 h-11 rounded-xl bg-[#377dff] flex items-center justify-center">
                          <Icon size={20} className="text-white" />
                        </div>

                        {/* BOTTOM */}
                        <div>
                          <h3 className="text-white text-3xl font-bold leading-tight">
                            {service.title}
                          </h3>

                          <p className="mt-2 text-white/90 tracking-[2px] text-sm">
                            {service.category}
                          </p>
                        </div>
                      </div>

                      {/* ACTIVE ARROW */}
                      {isActive && (
                        <div className="absolute bottom-5 right-5 z-20">
                          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                            <ArrowUpRight className="text-black" />
                          </div>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* RIGHT DETAILS PANEL */}
              <div className="bg-[#f7f7f7] rounded-[24px] p-8 lg:p-12">

                <h3 className="text-5xl md:text-[32px] lg:text-5xl font-bold text-[#111] leading-tight">
                  {activeService.heading}
                </h3>

                <div className="w-16 h-[2px] bg-black mt-8" />

                <p className="mt-10 text-[#444] text-xl leading-8 lg:leading-10">
                  {activeService.description}
                </p>

                {/* TECHNOLOGIES */}
                <div className="grid grid-cols-2 gap-y-6 gap-x-10 mt-12">
                  {activeService.technologies.map((tech, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4"
                    >
                      <div className="w-4 h-4 rounded-full border-2 border-gray-300" />

                      <span className="text-xl text-[#222]">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>




      <section className="relative overflow-hidden bg-[#020617] py-24 text-white">

        {/* BACKGROUND GLOW */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-700/20 blur-[180px]" />

          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[180px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">

          {/* TOP CONTENT */}
          <div className="text-center max-w-5xl mx-auto px-6">

            <p className="text-cyan-400 uppercase tracking-[5px] text-sm font-semibold">
              Generative AI & LLM
            </p>

            <h2 className="mt-5 text-5xl lg:text-6xl font-bold leading-tight">
              Our Generative AI & LLM Capabilities
            </h2>

            <p className="mt-8 text-xl leading-8 lg:leading-10 text-white/75">
              We build production-ready generative AI systems — from
              LLM-powered applications and RAG pipelines to autonomous
              agents and fine-tuned models.
            </p>
          </div>

          {/* CARDS */}
          <div className="mt-20 grid md:grid-cols-2 xl:grid-cols-3 gap-5 px-6">

            {capabilities.map((item, index) => (
              <div
                key={index}
                className="
                relative overflow-hidden
                border border-white/10
                bg-[#07122B]
                rounded-[6px]
                p-8 lg:p-10
                min-h-[420px] md:min-h-[320px] lg:min-h-[420px]
                group
                transition-all duration-500
                hover:border-cyan-500/40
              "
              >

                {/* HOVER BOTTOM ANIMATION */}
                <div
                  className="
                  absolute bottom-0 left-0
                  h-[4px] w-0
                  bg-cyan-400
                  transition-all duration-500
                  group-hover:w-full
                "
                />

                {/* GLOW EFFECT */}
                <div
                  className="
                  absolute inset-0 opacity-0
                  group-hover:opacity-100
                  transition-all duration-500
                  bg-gradient-to-br
                  from-cyan-500/5
                  to-blue-500/5
                "
                />

                {/* NUMBER */}
                <div
                  className="
    relative z-10
    w-16 h-16
    rounded-xl
    border border-white/10
    flex items-center justify-center
    text-cyan-400
    font-bold
    text-3xl
    bg-[#020817]

    transition-all duration-500

    group-hover:bg-cyan-400
    group-hover:text-black
    group-hover:border-cyan-400
  "
                >
                  {item.number}
                </div>

                {/* TITLE */}
                <h3
                  className="
                  relative z-10
                  mt-12
                  text-4xl
                  font-bold
                  leading-tight
                "
                >
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                  relative z-10
                  mt-8
                  text-xl
                leading-10 md:leading-8 lg:leading-10
                text-white/75
              "
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>









      <section className="relative overflow-hidden bg-[#020617] py-24 text-white">

        {/* BACKGROUND GLOW */}
        <div className="absolute inset-0 overflow-hidden">

          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-700/10 blur-[180px]" />

          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[180px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

          {/* TITLE */}
          <h2 className="text-center text-4xl lg:text-6xl font-bold leading-tight">
            Why Choose PerfectionGeeks For AI Solutions
          </h2>

          {/* MAIN GRID */}
          <div className="mt-20 grid lg:grid-cols-[1fr_420px_1fr] gap-16 items-center">

            {/* LEFT FEATURES */}
            <div className="space-y-20">

              {features.slice(0, 2).map((item, index) => (
                <div
                  key={index}
                  className="group"
                >

                  {/* IMAGE ICON */}
                  <div
                    className="
                    w-20 h-20
                    rounded-2xl
                    border border-cyan-500/20
                    bg-white/5
                    flex items-center justify-center
                    transition-all duration-500
                    group-hover:bg-cyan-400/10
                  "
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="
                      w-10 h-10
                      object-contain
                      transition-all duration-500
                      group-hover:scale-110
                    "
                    />
                  </div>

                  {/* TITLE */}
                  <h3 className="mt-8 text-3xl font-bold">
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-5 text-white/70 text-xl leading-10 md:leading-8 lg:leading-10">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CENTER IMAGE */}
            <div className="relative">

              {/* IMAGE CARD */}
              <div
                className="
                relative overflow-hidden
                rounded-[28px]
                border border-white/10
                group
              "
              >

                {/* IMAGE */}
                <img
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop"
                  alt="AI Robot"
                  className="
                  w-full h-[540px] md:h-[400px] lg:h-[540px]
                  object-cover
                  transition-transform duration-700
                  group-hover:scale-110
                "
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/20" />
              </div>
            </div>

            {/* RIGHT FEATURES */}
            <div className="space-y-20">

              {features.slice(2, 4).map((item, index) => (
                <div
                  key={index}
                  className="group"
                >

                  {/* IMAGE ICON */}
                  <div
                    className="
                    w-20 h-20
                    rounded-2xl
                    border border-cyan-500/20
                    bg-white/5
                    flex items-center justify-center
                    transition-all duration-500
                    group-hover:bg-cyan-400/10
                  "
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="
                      w-10 h-10
                      object-contain
                      transition-all duration-500
                      group-hover:scale-110
                    "
                    />
                  </div>

                  {/* TITLE */}
                  <h3 className="mt-8 text-3xl font-bold">
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-5 text-white/70 text-xl leading-10 md:leading-8 lg:leading-10">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      <section
        ref={sectionRef}
        className="
    relative
    bg-[#030712]
    text-white
    h-auto
    lg:h-[600vh]
  "
      >

        {/* BACKGROUND */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-700/10 blur-[180px]" />

          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[180px]" />
        </div>

        <div
          className="
    lg:sticky lg:top-0
    h-auto
    lg:h-screen
    flex flex-col justify-center
    relative z-10
    py-12
    lg:py-0
  "
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 w-full">

            {/* TITLE */}
            <div className="text-center">

              <div className="inline-block relative">

                {/* BORDER DESIGN */}
                <div className="absolute -top-4 -left-4 w-20 h-20 border-l border-t border-cyan-500/40" />

                <div className="absolute -bottom-4 -right-4 w-20 h-20 border-r border-b border-cyan-500/40" />

                {/* DIAMONDS */}
                <div className="absolute -top-5 left-0 w-4 h-4 bg-blue-500 rotate-45" />

                <div className="absolute -bottom-5 right-0 w-4 h-4 bg-blue-500 rotate-45" />

                <h2 className="text-4xl lg:text-6xl font-bold">
                  Our AI{" "}
                  <span className="text-cyan-400">
                    Development
                  </span>{" "}
                  Process
                </h2>
              </div>

              <p className="mt-10 max-w-5xl mx-auto text-xl text-white/60 leading-10 md:leading-8 lg:leading-10">
                Our AI development process is designed to transform your
                business ideas into intelligent solutions.
              </p>
            </div>

            {/* TIMELINE */}
            <div className="relative mt-24">

              {/* LINE */}
              <div className="absolute top-8 left-0 w-full h-[2px] bg-white/10" />

              {/* ACTIVE LINE */}
              <div
                className="absolute top-8 left-0 h-[2px] bg-cyan-400 transition-all duration-700"
                style={{
                  width: `${(activeStep / 5) * 100}%`,
                }}
              />

              {/* STEPS */}
              <div className="relative flex justify-between">

                {processData.map((item, index) => {
                  const Icon = item.icon;

                  const isActive = index <= activeStep;

                  return (
                    <button
                      key={index}
                      onClick={() => setActiveStep(index)}
                      className="relative z-10 group"
                    >

                      <div
                        className={`
                      w-16 h-16 rounded-full
                      border-2
                      flex items-center justify-center
                      transition-all duration-500

                      ${isActive
                            ? "border-cyan-400 bg-black shadow-[0_0_25px_rgba(34,211,238,0.7)]"
                            : "border-white/20 bg-black"
                          }
                    `}
                      >
                        <Icon
                          size={22}
                          className={
                            isActive
                              ? "text-cyan-400"
                              : "text-white/40"
                          }
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* CONTENT */}
            <div className="mt-20 grid lg:grid-cols-2 gap-16 items-center">

              {/* LEFT */}
              <div>

                {/* STAGE */}
                <div
                  className="
                inline-flex items-center
                px-5 py-2
                rounded-full
                bg-cyan-500/10
                border border-cyan-500/20
                text-cyan-300
                text-sm
                tracking-[2px]
                font-semibold
              "
                >
                  {processData[activeStep].stage}
                </div>

                {/* TITLE */}
                <h3 className="mt-8 text-4xl lg:text-5xl font-bold leading-tight">
                  {processData[activeStep].title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-8 text-xl text-white/55 leading-10 md:leading-8 lg:leading-10 max-w-2xl">
                  {processData[activeStep].description}
                </p>

                {/* BUTTONS */}
                <div className="mt-12 flex flex-wrap gap-6">

                  <Link
                    to="/contact"
                    className="
                  inline-flex items-center justify-center px-8 py-5
                  bg-cyan-300
                  text-black
                  rounded-xl
                  text-lg
                  font-semibold
                  hover:bg-cyan-200
                  transition-all duration-300
                "
                  >
                    Request a Demo
                  </Link>

                  <Link
                    to="/contact"
                    className="
                  inline-flex items-center gap-3
                  text-cyan-300
                  text-xl
                  font-semibold
                  group
                "
                  >
                    Talk to Expert

                    <ArrowRight
                      className="
                    transition-all duration-300
                    group-hover:translate-x-2
                  "
                    />
                  </Link>
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="flex items-center justify-center">

                <div
                  className="
                relative overflow-hidden
                rounded-[28px]
                group
                w-full
              "
                >

                  <img
                    src={processData[activeStep].image}
                    alt={processData[activeStep].title}
                    className="
                  w-full max-h-[50vh]
                  object-contain
                  transition-all duration-700
                  group-hover:scale-110
                "
                  />

                  <div className="absolute inset-0 bg-black/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>







      <section className="relative overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0">
          <img
            src={ai_bg}
            alt="AI Background"
            className="w-full h-full object-cover"
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-[#001B66]/75" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-24">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT SIDE */}
            <div>
              <h2
                className="
                text-5xl lg:text-6xl
                font-bold
                text-white
                leading-tight
              "
              >
                Artificial Intelligence:
                <br />
                All What
                <br />
                You Need
              </h2>
            </div>

            {/* RIGHT SIDE */}
            <div>
              <p
                className="
                text-xl
                leading-10 md:leading-8 lg:leading-10
                text-white/90
              "
              >
                When it comes to Artificial Intelligence, it has the
                capability to completely transform your business results
                and that too without costing you a lot of time. Here at
                Perfection Geeks, we understand your business approach
                and will help you with all kinds of AI solutions that
                include: natural language processing, deep learning,
                and machine learning.
              </p>

              {/* BUTTON */}
              <Link
                to="/contact"
                className="
                inline-flex items-center justify-center
                mt-10
                px-10 py-4
                rounded-lg
                bg-cyan-300
                text-black
                font-semibold
                text-lg
                transition-all duration-300
                hover:bg-cyan-200
                hover:scale-105
              "
              >
                Consult Now!
              </Link>
            </div>
          </div>
        </div>
      </section>


    </>
  );
};

export default HeroSection;
