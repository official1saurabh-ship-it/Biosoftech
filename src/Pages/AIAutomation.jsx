import SEO from "../components/seo/SEO";
import StructuredData from "../components/seo/StructuredData";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
import laptopMockup from "../assets/shared-laptop-mockup.webp";
import aiStrategyConsulting from "../assets/ai-strategy-consulting.webp";


import why_icon_1_ai from "../assets/ai-why-expert-knowledge.avif";
import why_icon_2_ai from "../assets/ai-why-secure-compliant.avif";
import why_icon_3_ai from "../assets/ai-why-scalable.avif";
import why_icon_4_ai from "../assets/ai-why-tailored.avif";


import process_1 from "../assets/ai-process-requirement-analysis.webp";
import process_2 from "../assets/ai-process-data-preparation.webp";
import process_3 from "../assets/ai-process-model-development.webp";
import process_4 from "../assets/ai-process-testing-optimization.webp";
import process_5 from "../assets/ai-process-deployment.webp";
import process_6 from "../assets/ai-process-maintenance-support.webp";

import ai_bg from "../assets/ai-cta-banner.webp";

import mobiledevelopment from "../assets/mobiledevelopment.avif";
import websitedevelopment from "../assets/websitedevelopment.avif";
import ecommerce from "../assets/ecommerce.avif";
import salesforce from "../assets/salesforce.webp";
import ai from "../assets/ai.avif";
import iot from "../assets/iot.avif";
import blockchaindevelopment from "../assets/blockchaindevelopment.avif";
import gamedevelopment from "../assets/gamedevelopment.avif";





const HeroSection = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const viewHeight = window.innerHeight;
      const offset = viewHeight * 0.15;

      const scrollProgress =
        Math.min(
          Math.max(
            ((-rect.top - offset) / (sectionHeight - viewHeight - offset)),
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
      title: "Intelligent LLM Applications",
      description:
        "Custom AI applications built on GPT-4o, Claude, Llama, and Gemini, tailored to your workflows and compliance needs. We manage model selection, prompt engineering, API integration, and deployment for production reliability.",
    },

    {
      number: "02",
      title: "Knowledge-Driven RAG Pipelines",
      description:
        "Connect LLMs to your internal knowledge bases, documents, and databases with Retrieval-Augmented Generation pipelines. Deliver accurate, source-grounded responses with smooth integration into enterprise data systems.",
    },

    {
      number: "03",
      title: "Autonomous AI Agents",
      description:
        "We engineer multi-step AI agents using LangChain, LangGraph, and AutoGen that automate workflows, make decisions, and integrate with CRM, ERP, and cloud platforms to reduce manual effort.",
    },

    {
      number: "04",
      title: "Domain-Specific Fine-Tuning",
      description:
        "Fine-tune models on your proprietary datasets to improve accuracy and relevance. Integrated pipelines ensure deployment across industries like healthcare, finance, legal, and retail.",
    },

    {
      number: "05",
      title: "Enterprise Copilot Solutions",
      description:
        "Production-grade chatbots and copilots for customer support, HR, sales, and operations. Built with multi-system integration for scalability, compliance, and enterprise security.",
    },

    {
      number: "06",
      title: "Multimodal AI Integration",
      description:
        "AI systems that understand and generate across text, image, audio, and video. Use cases include document intelligence, visual search, voice automation, and video analysis, all integrated into your workflows.",
    },
  ];


  const features = [
    {
      image: why_icon_1_ai,
      title: "Expert AI Knowledge",
      description:
        "Our team specializes in modern AI frameworks, machine learning models, and data-driven solutions, ensuring innovation and reliability in every project.",
    },

    {
      image: why_icon_2_ai,
      title: "Secure & Compliant Systems",
      description:
        "We prioritize data protection and compliance, embedding advanced security protocols into every AI implementation to safeguard your business.",
    },

    {
      image: why_icon_3_ai,
      title: "Scalable AI Solutions",
      description:
        "Our AI systems are designed to grow with your business, supporting scalability and performance as your operations expand.",
    },

    {
      image: why_icon_4_ai,
      title: "Tailored AI Approach",
      description:
        "We deliver custom AI solutions aligned with your unique challenges and goals, ensuring maximum impact and measurable outcomes.",
    },
  ];


  const expertiseData = [
    {
      icon: BrainCircuit,
      title: "Custom AI Engineering",
      description:
        "Using advanced frameworks, we build AI agents and automation systems capable of autonomous decision-making, planning, and execution across enterprise workflows.",
    },
    {
      icon: Bot,
      title: "Workflow Orchestration",
      description:
        "Our automation solutions integrate controllers that decompose tasks, schedule execution, and handle conditional logic, optimizing processes that traditionally require human effort.",
    },
    {
      icon: Workflow,
      title: "System Integration",
      description:
        "We connect AI automation with your CRM, ERP, data pipelines, and enterprise tools via secure APIs and containerized services for seamless real-time coordination.",
    },
    {
      icon: Cpu,
      title: "Predictive Analytics & Insights",
      description:
        "Leverage machine learning and predictive models to forecast trends, detect anomalies, and make proactive business decisions with confidence.",
    },
    {
      icon: Sparkles,
      title: "Continuous Monitoring & Optimization",
      description:
        "We provide ongoing support with performance tuning, model retraining, and security updates, ensuring your AI automation remains reliable and future-ready.",
    },
    {
      icon: Star,
      title: "Start Your AI Automation Journey",
      description:
        "Partner with Biosoftech Solutions to unlock intelligent automation that drives efficiency, scalability, and innovation.",
    },
  ];


  const services = [
    {
      title: "Mobile App",
      category: "DEVELOPMENT",
      icon: Smartphone,
      image:
        mobiledevelopment,
      heading: "Mobile App Development",
      description:
        "We specialize in enhancing mobile experiences across industries, helping businesses deliver value-driven applications that stand out in competitive markets.",
      technologies: [
        "Android",
        "iPhone",
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
        websitedevelopment,
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
        ecommerce,
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
        blockchaindevelopment,
      heading: "Blockchain Solutions",
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
        gamedevelopment,
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
      title: "Salesforce",
      category: "SOLUTIONS",
      icon: BrainCircuit,
      image:
        salesforce,
      heading: "Salesforce Solutions",
      description:
        "Enterprise-grade Salesforce implementations, customizations, and integrations to streamline sales, service, and marketing operations.",
      technologies: [
        "Salesforce",
        "Apex",
        "Lightning",
        "SOQL",
        "LWC",
        "Process Builder",
        "Flow",
        "Einstein AI",
      ],
    },

    {
      title: "AI & ML",
      category: "SOLUTIONS",
      icon: Cpu,
      image:
        ai,
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
        iot,
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
        "We begin by understanding your business challenges, goals, and technical requirements. This stage defines the right AI strategy, identifies opportunities, and creates a roadmap tailored to your needs.",
      image: process_1,
      icon: FiSearch,
    },

    {
      stage: "STAGE 02",
      title: "Data Collection & Preparation",
      description:
        "High-quality data is the foundation of successful AI systems. We gather, clean, and structure relevant data to ensure accuracy, consistency, and readiness for model training and analysis.",
      image: process_2,
      icon: IoGitNetwork,
    },

    {
      stage: "STAGE 03",
      title: "Model Development",
      description:
        "Our experts design and build advanced AI models using the latest algorithms and technologies. Models are trained on prepared data to deliver reliable predictions and intelligent automation.",
      image: process_3,
      icon: HiOutlineCube,
    },

    {
      stage: "STAGE 04",
      title: "Testing & Optimization",
      description:
        "We rigorously test AI models for performance, accuracy, and reliability. Continuous optimization ensures adaptability to real-world scenarios and consistent results.",
      image: process_4,
      icon: FiSettings,
    },

    {
      stage: "STAGE 05",
      title: "Deployment",
      description:
        "Once validated, AI solutions are seamlessly integrated into existing systems, ensuring smooth functionality across platforms without disrupting operations.",
      image: process_5,
      icon: IoGitNetwork,
    },

    {
      stage: "STAGE 06",
      title: "Maintenance & Support",
      description:
        "AI systems require continuous monitoring and improvement. We provide ongoing support, updates, and optimization to ensure solutions evolve with changing data and business needs.",
      image: process_6,
      icon: FiMonitor,
    },
  ];


  return (
    <>
      <SEO
        title="AI Solutions | Biosoftech - AI-Driven Software Development Company for Digital Growth"
        description="Biosoftech is an AI-driven software development company for digital growth. We provide innovative AI solutions and smart software to help you achieve your business goals. With 50+ successful implementations, we are your trusted partner worldwide."
        keywords="AI Solutions, AI Automation, AI-Driven Software Development, Digital Growth, Biosoftech, Smart Software, AI for Business, Technical Partner"
        ogTitle="AI Solutions - Biosoftech"
        ogDescription="Partner with Biosoftech for your digital growth. We are an AI-driven software development company with 50+ successful projects and 25+ client trust. Explore our AI solutions today."
        canonical="https://www.biosoftech.com/ai-solutions"
        ogUrl="https://www.biosoftech.com/ai-automation"
      />
      <StructuredData type="custom" data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "AI Solutions",
        "provider": {
          "@type": "Organization",
          "name": "Biosoftech"
        },
        "description": "Biosoftech is an AI-driven software development company for digital growth, offering AI solutions and smart software with 50+ successful implementations and 25+ client trust."
      }} />
      <section aria-label="AI automation hero banner" className="w-full bg-[#f3f1eb] overflow-hidden">
        <div className="container-site">

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-section-lg items-center pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-12 lg:pb-16">

            {/* Left Content */}
            <div>
              <h1 className="text-fluid-5xl font-semibold text-black leading-tight">
                Transforming Businesses
                <br />
                with Intelligent Automation
              </h1>

              <p className="mt-4 sm:mt-6 lg:mt-8 text-[#333] text-fluid-base leading-7 sm:leading-9 max-w-full lg:max-w-2xl">
                At Biosoftech Solutions, we deliver AI automation services that
                help businesses streamline operations, reduce costs, and unlock
                new opportunities for growth. Our intelligent solutions combine
                machine learning, natural language processing, robotic process
                automation, and predictive analytics to create smarter workflows
                and future-ready enterprises.
              </p>

              {/* Rating Section */}
              <div className="flex flex-wrap gap-4 sm:gap-6 lg:gap-8 mt-6 sm:mt-8 lg:mt-12">

                {/* Clutch */}
                <div>
                  <h3 className="text-fluid-4xl font-bold text-[#1d2b36]">
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

                  <p className="mt-1 font-semibold text-fluid-sm">
                    Rated 5/5 Stars
                  </p>
                </div>

                {/* Upwork */}
                <div>
                  <h3 className="text-fluid-4xl font-bold">
                    <span className="text-black">work</span>
                  </h3>

                  <p className="mt-4 sm:mt-6 font-semibold text-fluid-xl">
                    Top Rated Plus
                  </p>
                </div>

                {/* Google */}
                <div>
                  <h3 className="text-fluid-4xl font-bold">
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

                  <p className="mt-1 font-semibold text-fluid-sm">
                    Rated 4.9/5 Stars
                  </p>
                </div>

              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-8 lg:mt-12">

                <button onClick={() => navigate("/contact")} className="bg-[#f4b400] hover:bg-[#e3a600] transition-all px-5 sm:px-6 lg:px-8 py-3 sm:py-4 text-black font-semibold flex items-center gap-2 sm:gap-3 text-fluid-base min-h-[44px]">
                  REQUEST PROPOSAL
                  <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
                </button>

                <button onClick={() => navigate("/contact")} className="bg-black hover:bg-[#222] transition-all px-5 sm:px-6 lg:px-8 py-3 sm:py-4 text-white font-semibold flex items-center gap-2 sm:gap-3 text-fluid-base min-h-[44px]">
                  AI SOLUTIONS
                  <PlusCircle size={16} className="sm:w-[18px] sm:h-[18px]" />
                </button>
              </div>
            </div>

            {/* Right Side */}
            <div className="relative flex justify-center lg:justify-end">

              {/* Laptop Image */}
              <img
                src={laptopMockup}
                alt="Laptop mockup showcasing AI automation dashboard"
                fetchPriority="high"
                width="800"
                height="500"
                className="relative z-10 w-full max-w-xl lg:max-w-2xl object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-black text-white">

        {/* Background Glow */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-600/30 blur-[180px]" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-700/30 blur-[180px]" />
        </div>

        <div className="container-site relative z-10">

          {/* MAIN GRID */}
          <div className="flex flex-col lg:grid lg:grid-cols-[420px_1fr] border border-white/10">

            {/* LEFT SIDE STICKY */}
            <div className="lg:sticky lg:top-0 h-fit lg:border-r border-white/10 p-6 sm:p-8 lg:p-12 self-start">

              <h2 className="text-fluid-5xl font-bold leading-tight">
                AI Strategy
                <br />
                &amp; Consulting
              </h2>

              <p className="mt-8 text-white/80 text-lg leading-8 lg:leading-10">
                We begin with use-case analysis, architecture design, and AI
                model selection to ensure automation aligns with your business
                goals and delivers measurable impact.
              </p>

              {/* IMAGE */}
              <div className="mt-10">
                <img
                  src={aiStrategyConsulting}
                  alt="AI Strategy Consulting"
                  loading="lazy"
                  width="1920"
                  height="550"
                  className="w-full h-[300px] md:h-[400px] lg:h-[550px] object-cover"
                />
              </div>
            </div>


            {/* RIGHT SIDE */}
            <div className="grid grid-cols-1 md:grid-cols-2 p-3 md:p-6 lg:p-12 gap-8 md:gap-12 lg:gap-16">

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
                      <h3 className="mt-8 text-fluid-3xl font-bold leading-tight">
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






      <section className="bg-[#f3f3f3] py-10 lg:py-14">
        <div className="px-4 sm:px-6 lg:px-10 w-full">

          {/* TOP SECTION */}
          <div className="grid lg:grid-cols-2 gap-6 items-start">

            {/* LEFT */}
            <div>
              <h2 className="text-fluid-4xl lg:text-fluid-5xl font-bold leading-tight text-[#111]">
                Driving Business Growth
                <br />
                Through Smart Digital Solutions
              </h2>

              <div className="w-20 h-[2px] bg-black mt-5" />
            </div>

            {/* RIGHT */}
            <div>
              <p className="text-base lg:text-xl text-[#444] leading-7 lg:leading-9 max-w-2xl">
                Unlock robust software solutions, modernize legacy systems,
                and leverage next-gen technologies to accelerate your business
                growth with Biosoftech Solutions.
              </p>

              <button onClick={() => navigate("/contact")} className="mt-6 flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center transition-all duration-300 group-hover:bg-black">
                  <ArrowUpRight size={20} className="group-hover:text-white transition-all duration-300" />
                </div>

                <span className="text-xl lg:text-2xl font-medium">
                  Explore Services
                </span>
              </button>
            </div>
          </div>

          {/* MAIN CONTENT */}
          <div className="mt-10 bg-[#efefef] p-4 lg:p-6 rounded-[16px]">

            <div className="grid lg:grid-cols-[1fr_500px] gap-6">

              {/* LEFT CARDS */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">

                {services.map((service, index) => {
                  const Icon = service.icon;
                  const isActive =
                    activeService.title === service.title;

                  return (
                    <button
                      key={index}
                      onClick={() => setActiveService(service)}
                      className="relative h-[180px] md:h-[220px] rounded-[16px] overflow-hidden group text-left"
                    >

                      {/* IMAGE */}
                      <div
                        className="absolute inset-0 transition-transform duration-700 group-hover:scale-110 bg-cover bg-center"
                        style={{ backgroundImage: `url(${service.image})` }}
                      />

                      {/* OVERLAY */}
                      <div className="absolute inset-0 bg-black/45" />

                      {/* CONTENT */}
                      <div className="relative z-10 flex flex-col justify-between h-full p-4">

                        {/* TOP ICON */}
                        <div className="w-9 h-9 rounded-lg bg-[#377dff] flex items-center justify-center">
                          <Icon size={16} className="text-white" />
                        </div>

                        {/* BOTTOM */}
                        <div>
                          <h3 className="text-white text-xl lg:text-2xl font-bold leading-tight">
                            {service.title}
                          </h3>

                          <p className="mt-1 text-white/90 tracking-[2px] text-xs">
                            {service.category}
                          </p>
                        </div>
                      </div>

                      {/* ACTIVE ARROW */}
                      {isActive && (
                        <div className="absolute bottom-3 right-3 z-20">
                          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                            <ArrowUpRight size={18} className="text-black" />
                          </div>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* RIGHT DETAILS PANEL */}
              <div className="bg-[#f7f7f7] rounded-[16px] p-5 lg:p-8">

                <h3 className="text-2xl lg:text-[32px] xl:text-4xl font-bold text-[#111] leading-tight">
                  {activeService.heading}
                </h3>

                <div className="w-12 h-[2px] bg-black mt-4" />

                <p className="mt-5 text-[#444] text-base lg:text-lg leading-7 lg:leading-8">
                  {activeService.description}
                </p>

                {/* TECHNOLOGIES */}
                <div className="grid grid-cols-2 gap-y-3 gap-x-6 mt-6">
                  {activeService.technologies.map((tech, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3"
                    >
                      <div className="w-3 h-3 rounded-full border-2 border-gray-300" />

                      <span className="text-sm lg:text-base text-[#222]">
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




      <section className="relative overflow-hidden bg-[#020617] py-10 text-white">

        {/* BACKGROUND GLOW */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-700/20 blur-[140px]" />

          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[140px]" />
        </div>

        <div className="relative z-10 w-full">

          {/* TOP CONTENT */}
          <div className="text-center max-w-5xl mx-auto px-4 sm:px-6">

            <p className="text-cyan-400 uppercase tracking-[4px] text-xs sm:text-sm font-semibold">
              Generative AI & LLM
            </p>

            <h2 className="mt-3 text-fluid-4xl lg:text-fluid-5xl font-bold leading-tight">
              Biosoftech Generative AI & LLM Capabilities
            </h2>

            <p className="mt-4 text-base lg:text-xl leading-7 lg:leading-9 text-white/75">
              We deliver enterprise-ready generative AI systems — from custom
              LLM applications and RAG pipelines to autonomous agents and
              multimodal AI — all designed with seamless integration into your
              existing workflows.
            </p>
          </div>

          {/* CARDS */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 px-4 sm:px-6">

            {capabilities.map((item, index) => (
              <div
                key={index}
                className="
                relative overflow-hidden
                border border-white/10
                bg-[#07122B]
                rounded-[6px]
                p-5 lg:p-6
                group
                transition-all duration-500
                hover:border-cyan-500/40
              "
              >

                {/* HOVER BOTTOM ANIMATION */}
                <div
                  className="
                  absolute bottom-0 left-0
                  h-[3px] w-0
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
    w-12 h-12
    rounded-lg
    border border-white/10
    flex items-center justify-center
    text-cyan-400
    font-bold
    text-xl
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
                  mt-5
                  text-2xl lg:text-3xl
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
                  mt-3
                  text-sm lg:text-base
                leading-6 lg:leading-7
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









      <section className="relative overflow-hidden bg-[#020617] py-10 text-white">

        {/* BACKGROUND GLOW */}
        <div className="absolute inset-0 overflow-hidden">

          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-700/10 blur-[140px]" />

          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[140px]" />
        </div>

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10">

          {/* TITLE */}
          <h2 className="text-center text-fluid-4xl lg:text-fluid-5xl font-bold leading-tight">
            Why Choose Biosoftech for AI Solutions
          </h2>

          {/* MAIN GRID */}
          <div className="mt-10 grid lg:grid-cols-[1fr_420px_1fr] gap-8 items-center">

            {/* LEFT FEATURES */}
            <div className="space-y-8">

              {features.slice(0, 2).map((item, index) => (
                <div
                  key={index}
                  className="group"
                >

                  {/* IMAGE ICON */}
                  <div
                    className="
                    w-14 h-14
                    rounded-xl
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
                      loading="lazy"
                      className="
                      w-7 h-7
                      object-contain
                      transition-all duration-500
                      group-hover:scale-110
                    "
                      width="28"
                      height="28"
                    />
                  </div>

                  {/* TITLE */}
                  <h3 className="mt-4 text-xl lg:text-2xl font-bold">
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-3 text-white/70 text-sm lg:text-base leading-7 lg:leading-8">
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
                rounded-[20px]
                border border-white/10
                group
              "
              >

                {/* IMAGE */}
                <img
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop"
                  alt="AI Robot"
                  loading="lazy"
                  width="1920"
                  height="540"
                  className="
                  w-full h-[200px] md:h-[280px] lg:h-[380px]
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
            <div className="space-y-8">

              {features.slice(2, 4).map((item, index) => (
                <div
                  key={index}
                  className="group"
                >

                  {/* IMAGE ICON */}
                  <div
                    className="
                    w-14 h-14
                    rounded-xl
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
                      loading="lazy"
                      className="
                      w-7 h-7
                      object-contain
                      transition-all duration-500
                      group-hover:scale-110
                    "
                      width="28"
                      height="28"
                    />
                  </div>

                  {/* TITLE */}
                  <h3 className="mt-4 text-xl lg:text-2xl font-bold">
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-3 text-white/70 text-sm lg:text-base leading-7 lg:leading-8">
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
    h-[350vh]
  "
      >

        {/* BACKGROUND */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-700/10 blur-[180px]" />

          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[180px]" />
        </div>

        <div
          className="
    sticky top-0
    h-[clamp(400px,100vh,750px)]
    flex flex-col justify-center
    relative z-10
  "
        >
            <div className="container-site">

            {/* TITLE */}
            <div className="text-center">

              <div className="inline-block relative">

                {/* BORDER DESIGN */}
                <div className="hidden sm:block absolute -top-4 -left-4 w-20 h-20 border-l border-t border-cyan-500/40" />

                <div className="hidden sm:block absolute -bottom-4 -right-4 w-20 h-20 border-r border-b border-cyan-500/40" />

                {/* DIAMONDS */}
                <div className="hidden sm:block absolute -top-5 left-0 w-4 h-4 bg-blue-500 rotate-45" />

                <div className="hidden sm:block absolute -bottom-5 right-0 w-4 h-4 bg-blue-500 rotate-45" />

                <h2 className="text-fluid-4xl lg:text-fluid-5xl mt-10 lg:mt-16 font-bold">
                  Our AI{" "}
                  <span className="text-cyan-400">
                    Development
                  </span>{" "}
                  Process
                </h2>
              </div>

              <p className="mt-2 sm:mt-4 md:mt-6 max-w-5xl mx-auto text-fluid-base lg:text-fluid-lg text-white/60 leading-6 sm:leading-7 md:leading-8 lg:leading-9">
                We follow a structured, data-driven approach to transform
                business ideas into intelligent AI solutions. Each stage
                ensures accuracy, scalability, and long-term success.
              </p>
            </div>

            {/* TIMELINE */}
            <div className="relative mt-4 sm:mt-8 md:mt-14">

              {/* LINE */}
              <div className="absolute top-[18px] sm:top-6 md:top-8 left-0 w-full h-[2px] bg-white/10" />

              {/* ACTIVE LINE */}
              <div
                className="absolute top-[18px] sm:top-6 md:top-8 left-0 h-[2px] bg-cyan-400 transition-all duration-700"
                style={{
                  width: `${(activeStep / 5) * 100}%`,
                }}
              />

              {/* STEPS */}
              <div className="relative flex justify-between gap-1 sm:gap-0 overflow-x-auto hide-scrollbar">

                {processData.map((item, index) => {
                  const Icon = item.icon;

                  const isActive = index <= activeStep;

                  return (
                    <button
                      key={index}
                      onClick={() => setActiveStep(index)}
                      aria-label={`${item.stage}: ${item.title}`}
                      className="relative z-10 group shrink-0"
                    >

                      <div
                        className={`
                      w-9 h-9 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full
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
                          size={16}
                          className="sm:hidden"
                        />
                        <Icon
                          size={22}
                          className="hidden sm:block"
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* CONTENT */}
            <div className="mt-4 sm:mt-10 md:mt-20 grid lg:grid-cols-2 gap-4 sm:gap-8 md:gap-16 items-center">

              {/* LEFT */}
              <div>

                {/* STAGE */}
                <div
                  className="
                inline-flex items-center
                px-3 sm:px-5 py-1 sm:py-2
                rounded-full
                bg-cyan-500/10
                border border-cyan-500/20
                text-cyan-300
                text-fluid-sm
                tracking-[2px]
                font-semibold
              "
                >
                  {processData[activeStep].stage}
                </div>

                {/* TITLE */}
                <h3 className="mt-3 sm:mt-6 md:mt-8 text-fluid-4xl font-bold leading-tight">
                  {processData[activeStep].title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-3 sm:mt-6 md:mt-8 text-fluid-lg text-white/55 leading-6 sm:leading-8 md:leading-8 lg:leading-10 max-w-2xl">
                  {processData[activeStep].description}
                </p>

                {/* BUTTONS */}
                <div className="mt-4 sm:mt-8 md:mt-12 flex flex-wrap gap-3 sm:gap-6">

                  <Link
                    to="/contact"
                    className="
                  inline-flex items-center justify-center px-5 sm:px-8 py-3 sm:py-5
                  bg-cyan-300
                  text-black
                  rounded-xl
                  text-fluid-base
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
                  inline-flex items-center gap-2 sm:gap-3
                  text-cyan-300
                  text-fluid-lg
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
                    loading="lazy"
                    width="800"
                    height="600"
                    className="
                    w-full max-h-[20vh] sm:max-h-[30vh] md:max-h-[50vh]
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







      <section className="relative overflow-hidden flex items-center">

        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${ai_bg})` }}
        >
          <div className="absolute inset-0 bg-[#001B66]/75" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20">

          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">

            {/* LEFT SIDE */}
            <div>
              <h2
                className="
                text-fluid-5xl
                font-bold
                text-white
                leading-tight
              "
              >
                Artificial Intelligence:
                <br />
                Everything Your
                <br />
                Business Needs
              </h2>
            </div>

            {/* RIGHT SIDE */}
            <div>
              <p
                className="
                text-fluid-lg
                leading-7 sm:leading-8 md:leading-8 lg:leading-10
                text-white/90
              "
              >
                Artificial Intelligence has the power to transform your business
                outcomes without consuming excessive time or resources. At
                Biosoftech Solutions, we understand your business approach and
                deliver end-to-end AI solutions that accelerate growth and
                efficiency.
              </p>

              {/* BUTTON */}
              <Link
                to="/contact"
                className="
                inline-flex items-center justify-center
                mt-6 sm:mt-10
                px-6 sm:px-10 py-3 sm:py-4
                rounded-lg
                bg-cyan-300
                text-black
                font-semibold
                text-fluid-base
                transition-all duration-300
                hover:bg-cyan-200
                hover:scale-105
              "
              >
                Let&apos;s Talk AI
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-8 lg:py-12">
        <div className="w-full px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-cyan-500 uppercase tracking-[4px] text-xs sm:text-sm font-semibold">
              Why AI
            </p>
            <h2 className="mt-3 text-fluid-3xl lg:text-fluid-4xl font-bold text-[#111] leading-tight">
              Benefits of AI Development
            </h2>
            <p className="mt-3 text-fluid-base lg:text-fluid-lg text-gray-600 leading-relaxed">
              Unlock transformative advantages that drive measurable business
              outcomes with Biosoftech&apos;s cutting-edge AI solutions.
            </p>
          </div>

          <div className="mt-8 lg:mt-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
            {[
              {
                number: "01",
                title: "Intelligent Task Automation",
                desc: "Eliminate repetitive, manual workflows with AI-powered automation that operates 24/7, boosting efficiency without fatigue.",
              },
              {
                number: "02",
                title: "Smarter Decision-Making",
                desc: "Leverage predictive analytics and data-driven insights to make faster, more accurate business decisions.",
              },
              {
                number: "03",
                title: "Enhanced Customer Experience",
                desc: "Deliver personalized, real-time interactions through AI chatbots, recommendation engines, and intelligent support systems.",
              },
              {
                number: "04",
                title: "Reduced Operational Costs",
                desc: "Cut overheads by replacing error-prone manual processes with precise, scalable AI solutions.",
              },
              {
                number: "05",
                title: "Increased Efficiency & Productivity",
                desc: "Empower teams to focus on high-value work while AI handles routine tasks at unprecedented speed.",
              },
              {
                number: "06",
                title: "Scalable Growth Enablement",
                desc: "Easily scale operations with AI systems that adapt to growing workloads, enabling business expansion without compromising performance.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="group relative bg-white border border-gray-200 rounded-xl p-5 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-500 font-bold text-lg group-hover:bg-cyan-500 group-hover:text-white transition-all duration-500">
                  {item.number}
                </div>
                <h3 className="mt-4 text-lg lg:text-xl font-bold text-[#111]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm lg:text-base text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
};

export default HeroSection;
