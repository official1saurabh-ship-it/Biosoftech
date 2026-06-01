import SEO from "../components/seo/SEO";
import StructuredData from "../components/seo/StructuredData";
import { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Phone,
  CheckCircle,
  Star,
  Calendar,
  Handshake,
  Users,
  ChevronRight,
  CircleDollarSign,
  Globe,
  ChartColumn,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import {
  Award,
  Rocket,
  Lightbulb,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";
import about from "../assets/about-hero-illustration.webp";
import growthImage from "../assets/about-growth-engine.png";
import freshIdeasImage from "../assets/about-fresh-ideas.webp";
import aboutHero from "../assets/about-us-hero-software-solutions.avif";

export default function About() {
  const navigate = useNavigate();
  const text = "starts here";
  const [displayText, setDisplayText] = useState("");
  const [offset, setOffset] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);
  const formRef = useRef();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: "",
    city: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const containerRef = useRef(null);
  const floatingRef = useRef(null);
  const [captchaA, setCaptchaA] = useState(0);
  const [captchaB, setCaptchaB] = useState(0);
  const [captchaUser, setCaptchaUser] = useState("");
  const [captchaError, setCaptchaError] = useState(false);

  useEffect(() => {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    setCaptchaA(a);
    setCaptchaB(b);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: floatingProgress } = useScroll({
    target: floatingRef,
    offset: ["start end", "end start"],
  });

  const orbitAngle = useTransform(floatingProgress, [0, 1], [0, 360]);
  const counterOrbitAngle = useTransform(orbitAngle, (v) => -v);

  // Individual line transforms - each moves differently to create separation
  const tagY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const headingY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const descY = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const featuresY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const buttonY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const lineScale = useTransform(scrollYProgress, [0, 1], [0.95, 1.05]);

  useEffect(() => {
    let i = 0;
    let isDeleting = false;

    const type = () => {
      const fullText = text;

      if (!isDeleting) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;

        if (i === fullText.length) {
          isDeleting = true;
          setTimeout(type, 2000);
          return;
        }
        setTimeout(type, 100);
      } else {
        setDisplayText("");
        i = 0;
        isDeleting = false;
        setTimeout(type, 500);
      }
    };

    const timeout = setTimeout(type, 500);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const handleChange = (e) => setIsDesktop(e.matches);
    handleChange(mq);
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.12);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      title: "Mobile Development",
      desc: "ANDROID & IOS APPS DESIGNED FOR SPEED, SECURITY, AND USABILITY",
      color: "bg-gradient-to-br from-[#ff6e4d] to-[#f5d267]",
    },
    {
      title: "Desktop Apps",
      desc: "BUSINESS DESKTOP SOLUTIONS BUILT FOR POWER, SPEED, AND RELIABILITY",
      color: "bg-gradient-to-br from-[#6bd5e4] to-[#3579ff]",
    },
    {
      title: "Cloud Services",
      desc: "FUTURE-READY CLOUD INTEGRATION WITH SECURE AND SCALABLE SYSTEMS",
      color: "bg-gradient-to-br from-[#b9ec69] to-[#68c21b]",
    },
    {
      title: "Web Development",
      desc: "RESPONSIVE WEBSITES BUILT TO SCALE WITH USER-FRIENDLY DESIGN",
      color: "bg-gradient-to-br from-[#b071ef] to-[#d7c8ff]",
    },
  ];
  const serviceList = [
    "Education – Schools, colleges, and training institutes",
    "Healthcare – Hospitals, labs, and pathology centers",
    "Hospitality – Hotels, restaurants, and cafés",
    "Retail – Shops, e-commerce, and billing systems",
    "Real Estate – PGs, hostels, and property management",
  ];

  const stats = [
    { icon: Star, value: "500", plus: "+", title: "Verified", sub: "Projects" },
    { icon: Calendar, value: "10", plus: "+", title: "Years of", sub: "Experience" },
    { icon: Handshake, value: "500", plus: "+", title: "Happy Clients", sub: "" },
    { icon: Users, value: "50", plus: "+", title: "Skilled Team", sub: "Members" },
  ];

  const services1 = [
    {
      percentage: "90%",
      color: "#7065F0",
      title: "Web Development",
      description:
        "Unlock your business potential with our modern web solutions. We design scalable, user-friendly websites and portals that strengthen your online presence and streamline operations.",
    },
    {
      percentage: "89%",
      color: "#F59E0B",
      title: "Mobile Applications",
      description:
        "Boost engagement with powerful Android and iOS apps. Our mobile solutions improve accessibility, enhance customer experience, and drive growth for businesses of all sizes.",
    },
    {
      percentage: "95%",
      color: "#4ADE80",
      title: "Industry Software Solutions",
      description:
        "Maximize efficiency with tailored systems for restaurants, hotels, schools, billing, pathology labs, and staff management. Our industry-specific platforms simplify workflows and deliver measurable results.",
    },
  ];

  const timelineData = [
    {
      year: "2021",
      side: "right",
      color: "#42C97A",
      title: "Our Beginning",
      description:
        "Founded with the mission to deliver affordable and effective software solutions in India.",
    },
    {
      year: "2022",
      side: "left",
      color: "#FF2BBF",
      title: "Leveraging AI & Cloud",
      description:
        "Integrated AI automation and cloud services to help businesses streamline operations and achieve smarter growth.",
    },
    {
      year: "2023",
      side: "right",
      color: "#E63946",
      title: "Future Expansion & Innovation",
      description:
        "Strengthened our presence in India with next-generation AI-driven automation, industry-specific software, and advanced enterprise solutions. Preparing for global expansion, we continue to innovate with technology that keeps businesses ahead of the curve.",
    },
    {
      year: "2024",
      side: "left",
      color: "#00BFFF",
      title: "Recognition Across Industries",
      description:
        "Served clients in 35+ industries, completing 500+ projects, and building long-term partnerships across India.",
    },
    {
      year: "2025",
      side: "right",
      color: "#FF6B35",
      title: "Scaling Enterprise Solutions",
      description:
        "Expanded offerings with enterprise-grade analytics platforms, ERP systems, and advanced cloud integrations, strengthening our role as a trusted technology partner for large organizations.",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (parseInt(captchaUser) !== captchaA + captchaB) {
      setCaptchaError(true);
      const a = Math.floor(Math.random() * 10) + 1;
      const b = Math.floor(Math.random() * 10) + 1;
      setCaptchaA(a);
      setCaptchaB(b);
      setCaptchaUser("");
      return;
    }
    setCaptchaError(false);

    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    const now = new Date().toLocaleString("en-IN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateIdOrg = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_ORG;
      const templateIdUser = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_USER;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !publicKey) {
        throw new Error("Email service not configured properly. Please contact support.");
      }

      const ownerParams = {
        to_email: "ansh@biosoftech.com",
        owner_name: formData.fullName,
        user_email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        date_time: now,
        site_name: "Biosoftech",
      };

      const userParams = {
        owner_name: formData.fullName,
        user_email: formData.email,
        site_name: "Biosoftech",
        company_name: "Biosoftech Solutions",
        support_email: "info@biosoftech.com",
        to_email: formData.email,
      };

      if (templateIdOrg) {
        await emailjs.send(serviceId, templateIdOrg, ownerParams, { publicKey });
      }

      if (templateIdUser) {
        await emailjs.send(serviceId, templateIdUser, userParams, { publicKey });
      }

      setStatus({ type: "success", message: "Thank you! Your message has been sent successfully." });
      setFormData({ fullName: "", phone: "", email: "", service: "", city: "", message: "" });
      setTimeout(() => setStatus({ type: "", message: "" }), 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      const errorMsg = error?.text || error?.message || "Something went wrong. Please try again or contact us directly.";
      setStatus({ type: "error", message: errorMsg });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-0">
      <SEO
        title="About Us – Software Development Company | Biosoftech Solutions"
        description="Learn about Biosoftech Solutions – 10+ years, 500+ projects, 500+ happy clients. We deliver web, mobile, desktop, cloud, and AI-powered software solutions from Lucknow, India."
        keywords="about Biosoftech, software company Lucknow, web development company India, mobile app development, cloud services"
        ogUrl="https://www.biosoftech.com/about"
      />
      <StructuredData type="LocalBusiness" />
      <StructuredData type="Breadcrumb" data={[
        { name: "Home", url: "https://www.biosoftech.com" },
        { name: "About", url: "https://www.biosoftech.com/about" },
      ]} />
      <style>
        {`
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
          .animate-blink {
            animation: blink 0.8s infinite;
          }
        `}
      </style>

      {/* Hero Section */}
      <section aria-label="About us hero banner" className="relative overflow-hidden bg-[#f5f5f5]">
        <div className="absolute inset-0 opacity-40 md:opacity-70 bg-[linear-gradient(#d8d8d8_2px,transparent_2px),linear-gradient(90deg,#d8d8d8_2px,transparent_2px)] bg-[size:40px_40px] sm:bg-[size:60px_60px] md:bg-[size:120px_120px]" />
        <div className="max-w-[1600px] mx-auto min-h-0 lg:min-h-[calc(100vh-80px)] px-4 sm:px-8 md:px-12 lg:px-16 grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-16 lg:gap-24 items-center relative pb-12 md:pb-16 overflow-x-hidden">
          <div className="z-10 text-center lg:text-left pt-24 sm:pt-28 md:pt-28">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[68px] leading-tight md:leading-[85px] font-black max-w-[800px] text-[#09090F]">
              Your <span className="text-orange-500">AI-Powered</span> Software<br />Partner <span className="text-blue-600">{displayText}</span>
              <span className="inline-block w-1 md:w-2 h-5 sm:h-8 md:h-12 bg-blue-600 ml-1 animate-blink align-middle"></span>
            </h1>
            <p className="mt-4 sm:mt-6 md:mt-8 text-sm sm:text-base md:text-[16px] lg:text-[18px] leading-relaxed md:leading-[30px] lg:leading-[38px] text-gray-600 max-w-[650px] mx-auto lg:mx-0">
              Join <span className="font-bold text-gray-900">500+ businesses worldwide</span> who transformed their operations with
              <span className="font-bold text-gray-900"> Biosoftech Solutions'</span> best software development and automation services.
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 mt-4 sm:mt-6 md:mt-8 text-xs sm:text-sm md:text-base lg:text-[18px] font-semibold">
              <CheckCircle size={16} className="sm:w-[20px] sm:h-[20px] text-purple-600 shrink-0" />
              <span>Rated</span>
              <span className="text-orange-500">★★★★★</span>
              <span>by 200+ happy clients</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start mt-6 sm:mt-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-4 border-white bg-gray-200 -ml-2 first:ml-0 overflow-hidden shadow-sm">
                  <div className="w-full h-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center text-white font-bold text-xs">{i}</div>
                </div>
              ))}
              <span className="ml-2 sm:ml-3 bg-purple-600 text-white rounded-full px-2 sm:px-3 py-1 text-xs sm:text-sm font-bold shadow-lg">1k+</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 mt-6 sm:mt-8 md:mt-10 justify-center lg:justify-start">
              <Link to="/contact" className="bg-[#09090F] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl inline-flex items-center justify-center gap-2 font-bold hover:bg-purple-600 transition-all shadow-xl text-sm sm:text-base min-h-[44px]"><Phone size={16} className="sm:w-[18px] sm:h-[18px]" />Book a Meeting</Link>
              <Link to="/contact" className="border-2 border-gray-200 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl inline-flex items-center justify-center font-bold hover:border-purple-600 hover:text-purple-600 transition-all text-sm sm:text-base min-h-[44px]">📞 Talk To Us</Link>
            </div>
          </div>
          <div className="relative flex justify-center mt-8 sm:mt-12 lg:mt-0">
            <div className="absolute w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] md:w-[460px] md:h-[460px] rounded-full bg-[#FFEB3B] top-[20px] sm:top-[30px] md:top-[60px] left-1/2 -translate-x-1/2 z-10 max-w-full" />
            <img src={aboutHero} alt="Biosoftech Solutions - Software Development Company" fetchPriority="high" width="480" height="600" className="relative z-20 w-[200px] sm:w-[280px] md:w-[480px] drop-shadow-2xl" />
            <div className="absolute top-4 right-4 sm:top-8 sm:right-8 md:top-12 md:right-12 z-30">
              <div className="w-7 h-7 sm:w-9 sm:h-9 md:w-11 md:h-11 bg-white rounded-full flex items-center justify-center shadow-lg text-base sm:text-xl font-bold border">G</div>
            </div>
            <div className="absolute top-16 right-0 sm:top-24 sm:right-0 md:top-32 md:right-[-10px] z-30">
              <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-blue-600 text-lg sm:text-2xl font-bold border">f</div>
            </div>
            <div className="absolute top-2 right-20 sm:top-4 sm:right-28 md:top-12 md:right-40 z-30">
              <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-red-500 text-base sm:text-xl border">♻</div>
            </div>
            <div className="absolute bottom-28 left-4 sm:bottom-36 sm:left-8 md:bottom-44 md:left-12 z-30">
              <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-red-600 text-lg sm:text-2xl border">▶</div>
            </div>
            <div className="absolute left-2 sm:left-4 md:left-10 bottom-8 sm:bottom-12 md:bottom-20 bg-white/95 backdrop-blur-md p-2 sm:p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-2xl z-30 border border-white/50 flex items-center gap-2 sm:gap-3">
              <div className="bg-blue-100 p-2 sm:p-3 rounded-xl"><span className="text-base sm:text-xl">⭐</span></div>
              <div><h3 className="text-xl sm:text-3xl md:text-5xl font-black text-blue-600">10+</h3><p className="text-[10px] sm:text-xs md:text-sm font-bold text-gray-500 uppercase tracking-widest">Years of Experience</p></div>
            </div>
            <div className="absolute right-2 sm:right-4 md:right-10 bottom-8 sm:bottom-12 md:bottom-20 bg-white/95 backdrop-blur-md p-2 sm:p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-2xl z-30 border border-white/50 flex items-center gap-2 sm:gap-3">
              <div className="bg-blue-100 p-2 sm:p-3 rounded-xl"><span className="text-base sm:text-xl">🌐</span></div>
              <div><h3 className="text-xl sm:text-3xl md:text-5xl font-black text-blue-600">500+</h3><p className="text-[10px] sm:text-xs md:text-sm font-bold text-gray-500 uppercase tracking-widest">Projects Delivered</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="w-full overflow-hidden bg-[#09090F] py-4">
        <style>{`
          @keyframes dm-marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .dm-marquee-track {
            display: flex;
            gap: 2.5rem;
            animation: dm-marquee 30s linear infinite;
            width: max-content;
          }
          .dm-marquee-track:hover {
            animation-play-state: paused;
          }
          .dm-marquee-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            white-space: nowrap;
            color: white;
            font-size: 1.125rem;
            font-weight: 500;
          }
        `}</style>
        <div className="dm-marquee-wrap w-full">
          <div className="dm-marquee-track">
            {(() => {
              const items = [
                "Best Digital Marketing Company In Lucknow",
                "Social Media Ads",
                "Content Strategy",
                "Brand Identity",
                "Email Marketing",
                "SEO Optimization",
                "WordPress Development",
                "Video Marketing",
                "Creative Strategy",
                "Web Design",
                "PPC Campaigns",
              ];
              return [...items, ...items].map((text, i) => (
                <div key={i} className="dm-marquee-item">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-yellow-400 shrink-0" fill="currentColor">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  {text}
                </div>
              ));
            })()}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative overflow-hidden bg-[#f7f7f7]">
        <div className="absolute inset-0 opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/cartographer.png')]" />
        <div className="relative max-w-[1220px] mx-auto px-4 sm:px-6 py-10 sm:py-14">
          <div className="grid lg:grid-cols-[1fr_560px] gap-8 sm:gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-[36px] md:leading-[46px] lg:text-[42px] lg:leading-[54px] xl:text-[50px] xl:leading-[66px] font-black text-black">Best Software Development Company for Web, Mobile, Desktop & Cloud Solutions</h2>
              <p className="mt-4 sm:mt-6 text-[15px] sm:text-[17px] leading-[28px] sm:leading-[36px] text-[#222]">Welcome to Biosoftech Solutions, a trusted software company serving startups, enterprises, and growing brands since 2015. We specialize in web development, mobile apps, desktop applications, and cloud services, offering result-driven solutions to help businesses scale efficiently.</p>
              <p className="mt-3 sm:mt-4 text-[15px] sm:text-[17px] leading-[28px] sm:leading-[36px] text-[#222]">Founded with a vision to simplify technology, Biosoftech Solutions is headquartered in Lucknow, Uttar Pradesh, and has expanded globally with clients across multiple industries. Our expertise lies in building industry-specific products and delivering measurable results.</p>
              <h3 className="mt-5 sm:mt-7 text-2xl sm:text-3xl md:text-[28px] lg:text-[32px] xl:text-[38px] font-black text-[#433d70]">Our Mission</h3>
              <p className="mt-2 sm:mt-3 text-[15px] sm:text-[17px] leading-[28px] sm:leading-[36px]">To empower businesses worldwide by creating smart, AI-powered software solutions that streamline operations, generate growth, and drive long-term success.</p>
              <button onClick={() => navigate("/contact")} className="mt-6 sm:mt-8 px-6 sm:px-8 md:px-10 py-3 sm:py-4 border border-[#6b63ff] text-[#433d70] font-semibold hover:bg-[#3B3663] hover:text-white duration-500 text-sm sm:text-base min-h-[44px]">CHECK OUR GLOBAL REACH</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-5 lg:gap-7">
              {services.map((item) => (
                <div key={item.title} className="group bg-white rounded-[18px] p-5 sm:p-6 md:p-6 lg:p-8 shadow-[0_18px_40px_rgba(0,0,0,.05)] hover:bg-[#3B3663] hover:-translate-y-2 duration-500">
                  <div className={`w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[72px] md:h-[72px] rounded-full mb-4 sm:mb-6 md:mb-8 transition-all duration-500 group-hover:scale-110 ${item.color}`} />
                  <h3 className="text-lg sm:text-xl md:text-[24px] leading-[28px] sm:leading-[34px] font-black text-[#2b2d46] group-hover:text-white duration-500">{item.title}</h3>
                  <p className="mt-3 sm:mt-5 text-[12px] sm:text-[13px] leading-[24px] sm:leading-[28px] font-semibold text-[#404256] group-hover:text-white/90 duration-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conviction Section (Section 3) */}
      <section className="relative overflow-hidden bg-black">
        <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_top,#5b0000,transparent_40%),radial-gradient(circle_at_bottom,#3f0000,transparent_40%)]" />
        <div className="relative max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="grid lg:grid-cols-[1fr_420px] gap-10 sm:gap-12 lg:gap-24 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-[40px] md:leading-[50px] lg:text-[52px] lg:leading-[62px] xl:text-[62px] xl:leading-[72px] font-light text-white"><span className="text-[#f2ab00] font-medium">Biosoftech Solutions&apos;s</span><br />Existence Is Built On<br />Conviction</h2>
              <div className="mt-6 sm:mt-8 space-y-6 sm:space-y-8 text-white text-base sm:text-[18px] leading-[28px] sm:leading-[40px] md:leading-[32px] lg:leading-[40px]">
                <p>In our 10+ years of experience as a progressive software development company, we have witnessed the digital landscape evolve rapidly.</p>
                <p>Even as AI automation, cloud integration, and new technologies reshaped industries, we have consistently helped businesses adapt and thrive.</p>
                <p>We observed changing dynamics and refined our growth strategies to cut through complexity, competition, and digital noise.</p>
                <p>By implementing timely innovations, we ensured our clients&apos; businesses remain efficient, scalable, and future-ready without compromising stability. That&apos;s sustainability in progress and conviction in action!</p>
              </div>
              <button onClick={() => navigate("/contact")} className="mt-6 sm:mt-10 border border-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-white flex items-center gap-2 sm:gap-3 hover:bg-[#3B3663] duration-500 text-sm sm:text-base min-h-[44px]">Let&apos;s Accelerate Your Growth with a Tailored Solution <ChevronRight size={16} className="sm:w-[20px] sm:h-[20px]" /></button>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-5 self-center">
              {stats.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="bg-[#f8f8f8] rounded-md py-4 sm:py-6 px-3 sm:px-5 flex items-center gap-3 sm:gap-4 h-fit duration-500">
                    <Icon size={24} className="sm:w-[32px] sm:h-[32px] text-black duration-500 shrink-0" strokeWidth={1.4} />
                    <div className="flex flex-col">
                      <div className="text-[#f3a800] text-xl sm:text-2xl lg:text-[28px] font-light leading-tight">
                        {item.value}<span className="text-red-500 text-sm sm:text-[18px]">{item.plus}</span>
                      </div>
                      <div className="text-black text-[12px] sm:text-[14px] font-medium leading-tight">{item.title} {item.sub}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Who Are We Section */}
      <section className="relative overflow-hidden bg-[#F7F7F1] min-h-0 lg:min-h-screen py-12 sm:py-16 lg:py-20 pb-20 sm:pb-24 lg:pb-28" ref={containerRef}>
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[620px_1fr] gap-10 sm:gap-12 lg:gap-24 items-center">

            {/* LEFT SIDE - Static Cards with slight parallax */}
            <div
              style={{
                transform: isDesktop ? `translateY(${offset * 0.4}px)` : "none",
              }}
              className="relative duration-300"
            >
              {/* Desktop overlapping cards */}
              <div className="hidden lg:block h-[820px]">
                <div className="absolute left-[20px] top-[10px] w-[420px] h-[560px] rounded-tr-[120px] bg-gradient-to-b from-[#D32FFF] to-[#FF5B5B] p-10">
                  <h3 className="text-white text-[90px] font-black">500+</h3>
                  <p className="text-white text-[26px] font-bold">Projects Delivered</p>
                  <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 mx-auto w-[240px] h-[240px] rounded-[36px] bg-[#C839D8] flex items-center justify-center text-[90px]">🌐</div>
                </div>
                <div className="absolute left-[170px] top-[190px] w-[430px] h-[620px] bg-gradient-to-br from-[#291043] to-[#5B1896] p-10 z-20">
                  <h3 className="text-white text-[82px] font-black">300+</h3>
                  <p className="text-white text-[24px] font-bold">Satisfied Clients</p>
                  <div className="absolute inset-0 flex items-center justify-center text-[170px] opacity-90">⚡</div>
                  <div className="absolute right-10 bottom-10 z-30">
                    <h3 className="text-white text-[76px] font-black">40+</h3>
                    <p className="text-white text-[22px]">Industries Served</p>
                  </div>
                </div>
              </div>

              {/* Mobile stacked cards */}
              <div className="lg:hidden space-y-4">
                <div className="rounded-tr-[60px] bg-gradient-to-b from-[#D32FFF] to-[#FF5B5B] p-6 sm:p-8">
                  <h3 className="text-white text-[48px] sm:text-[64px] font-black">500+</h3>
                  <p className="text-white text-lg sm:text-xl font-bold">Projects Delivered</p>
                  <div className="mt-4 w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-[#C839D8] flex items-center justify-center text-4xl sm:text-5xl">🌐</div>
                </div>
                <div className="rounded-tr-[60px] bg-gradient-to-br from-[#291043] to-[#5B1896] p-6 sm:p-8">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-white text-[48px] sm:text-[64px] font-black">300+</h3>
                      <p className="text-white text-lg sm:text-xl font-bold">Satisfied Clients</p>
                    </div>
                    <div className="text-6xl sm:text-7xl opacity-90">⚡</div>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-white text-[44px] sm:text-[56px] font-black">40+</h3>
                    <p className="text-white text-base sm:text-lg font-bold">Industries Served</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE - Scroll Animation with Framer Motion Hooks */}
            <motion.div style={{ scale: lineScale }}>

              <motion.p
                style={{ y: tagY }}
                className="text-[#af60ff] font-semibold text-sm sm:text-base"
              >
                ✺ Who Are We?
              </motion.p>

              <motion.h2
                style={{ y: headingY }}
                className="mt-2 text-3xl sm:text-4xl md:text-[40px] md:leading-[48px] lg:text-[54px] lg:leading-[62px] xl:text-[64px] xl:leading-[72px] font-black"
              >
                We Transform<br />
                <span
                  className="text-transparent border-text"
                  style={{ WebkitTextStroke: '2px black' }}
                >
                  Ideas Into Reality
                </span>
              </motion.h2>

              <motion.p
                style={{ y: descY }}
                className="mt-4 sm:mt-6 text-base sm:text-[18px] leading-[28px] sm:leading-[32px] text-[#444]"
              >
                Biosoftech Solutions is a global leader in next-generation software development and IT services. We specialize in delivering measurable results through web, mobile, desktop, and cloud solutions, empowering businesses across industries with smart, scalable technology. With 500+ projects delivered, 300+ satisfied clients, and 40+ industries served, we combine innovation with reliability to help organizations thrive in the digital era.
              </motion.p>

              <motion.div
                style={{ y: featuresY }}
                className="space-y-4 sm:space-y-6 mt-6 sm:mt-10"
              >
                {[
                  { icon: Globe, title: "Easy", desc: "From project audits to strategy creation, we simplify every step." },
                  { icon: CircleDollarSign, title: "Affordable", desc: "Cost-effective solutions tailored to client needs." },
                  { icon: ChartColumn, title: "Advanced", desc: "Future-focused technology that keeps businesses ahead." },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex gap-4 sm:gap-6 items-center">
                      <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] lg:w-[70px] lg:h-[70px] shrink-0 rounded-full bg-[#E9E9E9] flex items-center justify-center">
                        <Icon size={20} className="sm:w-[24px] sm:h-[24px] lg:w-[28px] lg:h-[28px]" />
                      </div>
                      <div>
                        <h3 className="text-2xl sm:text-3xl md:text-[24px] lg:text-[32px] font-black leading-tight">{item.title}</h3>
                        <p className="text-sm sm:text-[16px] mt-1 text-[#444]">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </motion.div>

              <motion.button
                onClick={() => navigate("/contact")}
                style={{ y: buttonY }}
                className="mt-6 sm:mt-10 rounded-full border border-[#a84dff] px-6 sm:px-8 py-3 sm:py-4 flex items-center gap-3 sm:gap-4 hover:bg-[#a84dff] hover:text-white duration-500 text-sm sm:text-base min-h-[44px]"
              >
                Contact Now! <ChevronRight size={16} className="sm:w-[20px] sm:h-[20px]" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>





      <section ref={floatingRef} className="py-12 sm:py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT IMAGE */}
            <div className="relative">

              <div className="overflow-hidden">
                <img
                  src={about}
                  alt="About Biosoftech Solutions - software development company illustration"
                  loading="lazy"
                  width="800"
                  height="600"
                  className="w-full h-full object-cover "
                />
              </div>

              {/* Floating Icons - Orbiting */}

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                  style={{ rotate: orbitAngle }}
                  className="relative w-[700px] h-[700px] hidden sm:block"
                >
                  <div className="absolute left-1/2 -ml-8 -top-8 w-16 h-16">
                    <motion.div
                      style={{ rotate: counterOrbitAngle }}
                      className="w-full h-full rounded-full flex items-center justify-center"
                    >
                      <Award className="w-8 h-8 text-orange-500" />
                    </motion.div>
                  </div>

                  <div className="absolute left-[438px] top-[647px] w-16 h-16">
                    <motion.div
                      style={{ rotate: counterOrbitAngle }}
                      className="w-full h-full rounded-full flex items-center justify-center"
                    >
                      <Rocket className="w-8 h-8 text-blue-500" />
                    </motion.div>
                  </div>

                  <div className="absolute left-[-11px] top-[438px] w-16 h-16">
                    <motion.div
                      style={{ rotate: counterOrbitAngle }}
                      className="w-full h-full rounded-full flex items-center justify-center"
                    >
                      <Lightbulb className="w-8 h-8 text-purple-500" />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* RIGHT CONTENT */}

            <div>

              {/* Subtitle */}

              <div className="inline-flex items-center gap-2 text-orange-500 font-semibold mb-5">
                <BadgeCheck className="w-5 h-5" />
                What We Do
              </div>

              {/* Heading */}

              <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                We Offer All You
                <br />
                <span className="text-orange-500">
                  Need to Grow Online
                </span>
              </h2>

              {/* Description */}

              <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                At Biosoftech Solutions, we deliver complete digital and software
                solutions that help businesses across multiple industries grow
                online. From web design and development to advanced automation
                and analytics, our expertise spans diverse sectors — ensuring
                every business finds the right technology to thrive.
              </p>

              {/* Offer Title */}

              <div className="mt-10 flex items-center gap-3">
                <Lightbulb className="w-7 h-7 text-orange-500" />
                <h3 className="text-2xl font-bold">
                  We Work Across 35+ Industries
                </h3>
              </div>

              {/* Services */}

              <ul className="mt-6 space-y-4">
                {serviceList.map((service) => (
                  <li
                    key={service}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <BadgeCheck className="w-5 h-5 text-orange-500" />
                    {service}
                  </li>
                ))}
              </ul>

              {/* Button */}

              <button onClick={() => navigate("/contact")} className="mt-10 inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300">
                Get Quote
                <ArrowRight size={18} />
              </button>

            </div>
          </div>
        </div>
      </section>



      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-[36px] lg:text-[42px] leading-tight font-light text-black">
              <span className="font-semibold">
                The Technology Growth Engine
              </span>{" "}
              For Ambitious Businesses
              <br />
              Across Industries
            </h2>
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left Content */}
            <div className="max-w-[620px]">

              <p className="text-[15px] sm:text-[17px] leading-[1.8] sm:leading-[2] text-[#333] mb-8">
                Biosoftech Solutions designs and builds complete software
                ecosystems for ambitious organizations that want to scale,
                streamline operations, and gain a competitive edge. With us,
                breakthrough growth is never accidental — it's the result of
                a clear plan, strong execution, and future-ready technology.
              </p>

              <p className="text-[15px] sm:text-[17px] leading-[1.8] sm:leading-[2] text-[#333] mb-8">
                For years, we've partnered with businesses across India,
                delivering measurable results through web development, mobile
                applications, desktop solutions, cloud services, AI automation,
                and industry-specific management systems.
              </p>

              <p className="text-[15px] sm:text-[17px] leading-[1.8] sm:leading-[2] text-[#333] mb-8">
                We excel at: Web Development, Mobile Applications, Desktop
                Solutions, Cloud Services, AI Automation, and Industry
                Management Systems — restaurant, hotel, school, billing,
                pathology, and staff management software.
              </p>

              <p className="text-[15px] sm:text-[17px] leading-[1.8] sm:leading-[2] text-[#333]">
                So, whether you're a startup, a small-to-medium business,
                a large enterprise, or an entrepreneur with big ambitions,
                you're already incredible, and we're here to make you even
                more incredible. Together, we create a rare mix of ambition
                and strategy, creativity and performance, vision and
                execution.
              </p>

            </div>

            {/* Right Illustration */}
            <div className="flex justify-center lg:justify-end">
              <img
                src={growthImage}
                alt="Digital Growth"
                loading="lazy"
                width="620"
                height="500"
                className="w-full max-w-[620px] object-contain"
              />
            </div>

          </div>
        </div>
      </section>





      <section className="bg-[#f8f8f8] py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-14">
            <p className="uppercase text-[#3F3D73] font-bold tracking-wide text-sm">
              WHAT WE DO
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-[#3F3D73] mt-2">
              Fresh Ideas for Every Business
            </h2>
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Image */}
            <div className="flex justify-center">
              <img
                src={freshIdeasImage}
                alt="Fresh Ideas"
                loading="lazy"
                width="700"
                height="500"
                className="w-full max-w-[700px] object-contain"
              />
            </div>

            {/* Right Services */}
            <div className="space-y-12">

              {services1.map((item, index) => (
                <div key={index} className="flex gap-4 sm:gap-8">

                  {/* Circle */}
                  <div
                    className="w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] rounded-full border-[3px] sm:border-[5px] flex items-center justify-center flex-shrink-0"
                    style={{ borderColor: item.color }}
                  >
                    <span
                      className="font-bold text-xl sm:text-4xl"
                      style={{ color: item.color }}
                    >
                      {item.percentage}
                    </span>
                  </div>

                  {/* Text */}
                  <div>
                    <h3
                      className="text-2xl sm:text-3xl font-bold mb-3"
                      style={{ color: item.color }}
                    >
                      {item.title}
                    </h3>

                    <p className="text-[#222] text-base sm:text-xl leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                </div>
              ))}

            </div>

          </div>
        </div>
      </section>



      <section className="relative overflow-hidden bg-[#f8f7ff] py-24">

        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full border border-[#ede9ff] opacity-50" />

        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full border border-[#ede9ff] opacity-50" />

        <div className="absolute bottom-0 left-1/4 w-[500px] h-[250px] bg-[#f1efff] rounded-t-full opacity-70" />
        <div className="absolute bottom-0 right-0 w-[450px] h-[200px] bg-[#f1efff] rounded-t-full opacity-70" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          {/* Heading */}
          <div className="text-center mb-24">
            <p className="uppercase font-bold text-[#3d3a72] tracking-wide text-sm">
              OUR GROWTH STORY
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-[#3d3a72] mt-4">
              The Story of Biosoftech Solutions
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">

            {/* Center Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-[#dddaf5] -translate-x-1/2" />

            {timelineData.map((item, index) => (
              <div
                key={item.year}
                className="relative grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-10 md:gap-20 items-center mb-6 sm:mb-10 md:mb-20 lg:mb-28"
              >
                {/* Left Side */}
                <div
                  className={item.side === "left"
                    ? "flex justify-start lg:justify-end"
                    : "hidden lg:block lg:invisible"
                  }
                >
                  <div
                    className="w-full max-w-[280px] sm:max-w-[330px] bg-white rounded-2xl p-5 sm:p-8 shadow-sm border-l-4 lg:border-r-4"
                    style={{ borderColor: item.color }}
                  >
                    <div className="lg:hidden text-lg font-bold mb-2" style={{ color: item.color }}>{item.year}</div>
                    <h3 className="font-bold text-2xl sm:text-3xl text-[#3d3a72] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-base sm:text-xl text-[#66668a] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Right Side */}
                <div
                  className={item.side === "right"
                    ? "flex justify-end lg:justify-start"
                    : "hidden lg:block lg:invisible"
                  }
                >
                  <div
                    className="w-full max-w-[280px] sm:max-w-[330px] bg-white rounded-2xl p-5 sm:p-8 shadow-sm border-r-4 lg:border-l-4"
                    style={{ borderColor: item.color }}
                  >
                    <div className="lg:hidden text-lg font-bold mb-2" style={{ color: item.color }}>{item.year}</div>
                    <h3 className="font-bold text-2xl sm:text-3xl text-[#3d3a72] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-base sm:text-xl text-[#66668a] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Year */}
                <div
                  className="hidden lg:block absolute left-1/2 -translate-x-1/2 text-5xl font-bold"
                  style={{
                    color: item.color,
                    top: "50%",
                    transform: item.side === "left" ? "translate(120%, -50%)" : "translate(-140%, -50%)",
                  }}
                >
                  {item.year}
                </div>

                {/* Dot */}
                <div
                  className="hidden lg:block absolute left-1/2 w-5 h-5 rounded-full -translate-x-1/2"
                  style={{
                    backgroundColor: item.color,
                    top: "50%",
                    boxShadow: `0 0 20px ${item.color}`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>




      <section
        className="relative py-20 bg-cover bg-center bg-gray-900"
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">

            {/* LEFT SIDE */}
            <div className="border border-yellow-500 rounded-md p-4 sm:p-6 md:p-8 bg-black/30">

              <p className="text-yellow-400 text-xl sm:text-2xl md:text-3xl mb-4">
                Request a Call Back!
              </p>

              <h2 className="text-white text-2xl sm:text-4xl lg:text-6xl leading-tight font-light">
                Book an Appointment With
                <br />
                Our Top-Rated{" "}
                <span className="text-yellow-400 font-semibold">
                  Software
                  <br />
                  Experts.
                </span>
              </h2>

              <p className="text-white/90 text-base sm:text-lg md:text-2xl leading-relaxed mt-8">
                You've seen what Biosoftech Solutions can deliver — now it's
                time to talk directly with our team about your project.
                Whether you need web development, mobile apps, desktop
                solutions, cloud services, AI automation, or industry-specific
                software, we're here to guide you every step of the way.
                Don't delay — let's build your future together.
              </p>

              {/* Logos */}
              <div className="grid grid-cols-3 gap-6 mt-12">

                <div className="text-center">
                  <div className="h-20 mx-auto flex items-center justify-center text-white/80 font-bold text-lg">Clutch</div>
                </div>

                <div className="text-center">
                  <div className="h-20 mx-auto flex items-center justify-center text-white/80 font-bold text-lg">Upwork</div>
                </div>

                <div className="text-center">
                  <div className="h-20 mx-auto flex items-center justify-center text-white/80 font-bold text-lg">Google</div>
                </div>

              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8">

                <div className="bg-[#FFB800] rounded-xl py-4 text-center">
                  <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
                    1000+
                  </h3>

                  <p className="text-white text-sm sm:text-base md:text-xl">
                    Projects Delivered
                  </p>
                </div>

                <div className="bg-[#FFB800] rounded-xl py-4 text-center">
                  <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
                    99%
                  </h3>

                  <p className="text-white text-sm sm:text-base md:text-xl">
                    Client Satisfaction
                  </p>
                </div>

                <div className="bg-[#FFB800] rounded-xl py-4 text-center">
                  <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
                    500+
                  </h3>

                  <p className="text-white text-sm sm:text-base md:text-xl">
                    Long-Term Clients
                  </p>
                </div>

              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="border border-yellow-500 rounded-md p-4 sm:p-6 md:p-8 bg-black/30">

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">

                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="h-14 w-full px-4 bg-white rounded outline-none text-sm sm:text-base"
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="h-14 w-full px-4 bg-white rounded outline-none text-sm sm:text-base"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Whatsapp Mobile Number"
                    required
                    className="h-14 w-full px-4 bg-white rounded outline-none text-sm sm:text-base"
                  />

                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="City"
                    className="h-14 w-full px-4 bg-white rounded outline-none text-sm sm:text-base"
                  />
                </div>

                <label htmlFor="about-service" className="sr-only">Select Service</label>
                <select id="about-service" name="service" value={formData.service} onChange={handleChange} className="h-14 px-4 bg-white rounded w-full outline-none text-sm sm:text-base">
                  <option value="">- Select Service -</option>
                  <option value="Develop Custom Software Solutions">Develop Custom Software Solutions</option>
                  <option value="Build Or Upgrade My Mobile App / Website">Build Or Upgrade My Mobile App / Website</option>
                  <option value="Integrate AI Automation Into My Workflow">Integrate AI Automation Into My Workflow</option>
                  <option value="Implement Mitra Suite Products (Billing, Restro, Hotel, Skola, Tentent)">Mitra Suite (Billing, Restro, Hotel, Skola, Tentent)</option>
                  <option value="Healthcare / Real Estate / Hospitality Software Needs">Healthcare / Real Estate / Hospitality</option>
                  <option value="Cloud Integration & Data Security Services">Cloud Integration & Data Security Services</option>
                  <option value="Not Sure - Need Expert Guidance">Not Sure - Need Expert Guidance</option>
                </select>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Please type atleast 20 characters about your Inquiry"
                  required
                  className="w-full p-4 bg-white rounded outline-none text-sm sm:text-base"
                />

                <div className="bg-white rounded p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                  <label className="text-sm sm:text-base font-medium text-gray-700 whitespace-nowrap">
                    What is {captchaA} + {captchaB}?
                  </label>
                  <input
                    type="number"
                    value={captchaUser}
                    onChange={(e) => setCaptchaUser(e.target.value)}
                    placeholder="Answer"
                    className="h-10 w-24 px-3 border border-gray-300 rounded outline-none text-sm"
                  />
                  {captchaError && (
                    <span className="text-red-500 text-sm">Wrong answer, try again</span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#FFB800] hover:bg-[#e6a500] transition-all disabled:opacity-60 disabled:cursor-not-allowed w-full sm:w-auto px-8 sm:px-14 py-4 rounded-full text-black text-lg sm:text-xl font-medium"
                >
                  {isSubmitting ? "SENDING..." : status.type === "success" ? "MESSAGE SENT!" : "Submit Now"}
                </button>

                {status.message && (
                  <p className={`text-sm font-medium text-center sm:text-left ${status.type === "success" ? "text-green-400" : "text-red-400"}`}>
                    {status.message}
                  </p>
                )}

              </form>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
