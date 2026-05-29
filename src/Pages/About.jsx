import { useEffect, useState, useRef } from "react";
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
import { Link } from "react-router-dom";
import {
  Award,
  Rocket,
  Lightbulb,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";
import about from "../assets/about-us.jpg";

export default function About() {
  const text = "starts here";
  const [displayText, setDisplayText] = useState("");
  const [offset, setOffset] = useState(0);
  const containerRef = useRef(null);
  const floatingRef = useRef(null);

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
  const buttonY = useTransform(scrollYProgress, [0, 1], [0, 80]);
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
    const handleScroll = () => {
      setOffset(window.scrollY * 0.12);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      title: "Performance Marketing",
      desc: "DRIVING MEASURABLE RESULTS WITH DATA-DRIVEN, ROI-FOCUSED STRATEGIES",
      color: "bg-gradient-to-br from-[#ff6e4d] to-[#f5d267]",
    },
    {
      title: "Social Media Marketing",
      desc: "BUILDING STRONG BRAND PRESENCE WITH ENGAGING, TARGETED CONTENT",
      color: "bg-gradient-to-br from-[#6bd5e4] to-[#3579ff]",
    },
    {
      title: "SEO Services",
      desc: "BOOSTING ONLINE VISIBILITY THROUGH STRATEGIC, RESULTS-DRIVEN SEO",
      color: "bg-gradient-to-br from-[#b9ec69] to-[#68c21b]",
    },
    {
      title: "Website Design",
      desc: "CRAFTING VISUALLY APPEALING, USER-FRIENDLY WEBSITES",
      color: "bg-gradient-to-br from-[#b071ef] to-[#d7c8ff]",
    },
  ];
  const serviceList = [
    "Social Media Marketing",
    "Search Engine Marketing",
    "Search Engine Optimization",
    "Social Media Optimization",
    "Web Design & Development",
  ];

  const stats = [
    { icon: Star, value: "500", plus: "+", title: "Verified", sub: "Reviews" },
    { icon: Calendar, value: "14", plus: "+", title: "Years of", sub: "Experience" },
    { icon: Handshake, value: "500", plus: "+", title: "Happy Clients", sub: "" },
    { icon: Users, value: "20", plus: "+", title: "Team", sub: "Members" },
  ];


  return (
    <div className="pt-0">
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
      <section className="relative overflow-hidden bg-[#f5f5f5]">
        <div className="absolute inset-0 opacity-40 md:opacity-70 bg-[linear-gradient(#d8d8d8_2px,transparent_2px),linear-gradient(90deg,#d8d8d8_2px,transparent_2px)] bg-[size:40px_40px] sm:bg-[size:60px_60px] md:bg-[size:120px_120px]" />
        <div className="max-w-[1600px] mx-auto min-h-0 lg:min-h-[calc(100vh-80px)] px-4 sm:px-8 md:px-12 lg:px-16 grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-16 lg:gap-24 items-center relative pb-12 md:pb-16">
          <div className="z-10 text-center lg:text-left pt-24 sm:pt-28 md:pt-28">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[68px] leading-tight md:leading-[85px] font-black max-w-[800px] text-[#09090F]">
              Your <span className="text-orange-500">AI-Powered</span> Digital<br />Marketing Partner
            </h1>
            <span className="text-blue-600 block mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              {displayText}
              <span className="inline-block w-1 md:w-2 h-6 sm:h-8 md:h-12 bg-blue-600 ml-1 animate-blink align-middle"></span>
            </span>
            <p className="mt-4 sm:mt-6 md:mt-8 text-sm sm:text-base md:text-[18px] leading-relaxed md:leading-[38px] text-gray-600 max-w-[650px] mx-auto lg:mx-0">
              Join <span className="font-bold text-gray-900">500+ businesses in Lucknow</span> who transformed their brands with
              <span className="font-bold text-gray-900"> Rank Digital Solution's</span> Best digital marketing in lucknow.
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 mt-4 sm:mt-6 md:mt-8 text-xs sm:text-sm md:text-[18px] font-semibold">
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
            <div className="absolute w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] md:w-[460px] md:h-[460px] rounded-full bg-[#FFEB3B] top-[20px] sm:top-[30px] md:top-[60px] left-1/2 -translate-x-1/2 z-10" />
            <img src="/girl.png" alt="Digital Marketing Expert" className="relative z-20 w-[200px] sm:w-[280px] md:w-[480px] drop-shadow-2xl" />
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
              <div><h3 className="text-xl sm:text-3xl md:text-5xl font-black text-blue-600">5+</h3><p className="text-[10px] sm:text-xs md:text-sm font-bold text-gray-500 uppercase tracking-widest">Years Of Experience</p></div>
            </div>
            <div className="absolute right-2 sm:right-4 md:right-10 bottom-8 sm:bottom-12 md:bottom-20 bg-white/95 backdrop-blur-md p-2 sm:p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-2xl z-30 border border-white/50 flex items-center gap-2 sm:gap-3">
              <div className="bg-blue-100 p-2 sm:p-3 rounded-xl"><span className="text-base sm:text-xl">🌐</span></div>
              <div><h3 className="text-xl sm:text-3xl md:text-5xl font-black text-blue-600">100+</h3><p className="text-[10px] sm:text-xs md:text-sm font-bold text-gray-500 uppercase tracking-widest">Websites Developed</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative overflow-hidden bg-[#f7f7f7]">
        <div className="absolute inset-0 opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/cartographer.png')]" />
        <div className="relative max-w-[1220px] mx-auto px-4 sm:px-6 py-10 sm:py-14">
          <div className="grid lg:grid-cols-[1fr_560px] gap-8 sm:gap-12 lg:gap-20 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-[36px] md:leading-[46px] lg:text-[50px] lg:leading-[66px] font-black text-black">Best Digital Marketing Agency in Lucknow for SEO, Performance Marketing, Social Media & Website Designing</h1>
              <p className="mt-4 sm:mt-6 text-[15px] sm:text-[17px] leading-[28px] sm:leading-[36px] text-[#222]">Welcome to Digital Mart Lab, the best digital marketing agency in Lucknow trusted by startups, local businesses, and growing brands. We specialize in SEO, performance marketing, social media marketing, and website designing.</p>
              <p className="mt-3 sm:mt-4 text-[15px] sm:text-[17px] leading-[28px] sm:leading-[36px] text-[#222]">Founded by Mr. Victor Singh, Digital Mart Lab is a certified digital marketing agency headquartered in Lucknow.</p>
              <h2 className="mt-5 sm:mt-7 text-2xl sm:text-3xl md:text-[28px] lg:text-[38px] font-black text-[#433d70]">Our Mission</h2>
              <p className="mt-2 sm:mt-3 text-[15px] sm:text-[17px] leading-[28px] sm:leading-[36px]">To empower businesses through data-driven digital marketing strategies that increase visibility and generate sustainable growth.</p>
              <button className="mt-6 sm:mt-8 px-6 sm:px-8 md:px-10 py-3 sm:py-4 border border-[#6b63ff] text-[#433d70] font-semibold hover:bg-[#3B3663] hover:text-white duration-500 text-sm sm:text-base min-h-[44px]">CHECK OUR GLOBAL REACH</button>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-5 md:gap-5 lg:gap-7">
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
              <h2 className="text-3xl sm:text-4xl md:text-[40px] md:leading-[50px] lg:text-[62px] lg:leading-[72px] font-light text-white"><span className="text-[#f2ab00] font-medium">RankON Technologies&apos;s</span><br />Existence Is Built On<br />Conviction</h2>
              <div className="mt-6 sm:mt-8 space-y-6 sm:space-y-8 text-white text-base sm:text-[18px] leading-[32px] sm:leading-[40px] md:leading-[32px] lg:leading-[40px]">
                <p>In our 14+ years of experience as a progressive digital marketing agency, we have witnessed the digital landscape evolve before our eyes.</p>
                <p>Even after algorithm shifts and AI results began to dominate the SERPs, we have helped businesses navigate these changes.</p>
                <p>We continuously observed evolving dynamics and adjusted our growth strategy.</p>
                <p>By implementing timely changes to our search strategy, we ensured businesses remain visible.</p>
              </div>
              <button className="mt-6 sm:mt-10 border border-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-white flex items-center gap-2 sm:gap-3 hover:bg-[#3B3663] duration-500 text-sm sm:text-base min-h-[44px]">Let&apos;s Accelerate Your Growth <ChevronRight size={16} className="sm:w-[20px] sm:h-[20px]" /></button>
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
      <section className="relative overflow-hidden bg-[#F7F7F1] min-h-0 lg:min-h-screen py-12 sm:py-16 lg:py-20" ref={containerRef}>
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[620px_1fr] gap-10 sm:gap-12 lg:gap-24 items-center">

            {/* LEFT SIDE - Static Cards with slight parallax */}
            <div
              style={{
                transform: `translateY(${offset * 0.4}px)`,
              }}
              className="relative h-[820px] hidden lg:block duration-300"
            >
              {/* BACK CARD */}
              <div className="absolute left-[20px] top-[10px] w-[420px] h-[560px] rounded-tr-[120px] bg-gradient-to-b from-[#D32FFF] to-[#FF5B5B] p-10">
                <h2 className="text-white text-[90px] font-black">235+</h2>
                <p className="text-white text-[26px] font-bold">Websites Developed</p>
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 mx-auto w-[240px] h-[240px] rounded-[36px] bg-[#C839D8] flex items-center justify-center text-[90px]">
                  🌐
                </div>
              </div>

              {/* FRONT CARD */}
              <div className="absolute left-[170px] top-[190px] w-[430px] h-[620px] bg-gradient-to-br from-[#291043] to-[#5B1896] p-10 z-20">
                <h2 className="text-white text-[82px] font-black">450+</h2>
                <p className="text-white text-[24px] font-bold">SEO Projects Completed</p>
                <div className="absolute inset-0 flex items-center justify-center text-[170px] opacity-90">
                  ✈️
                </div>
                <div className="absolute right-10 bottom-10 z-30">
                  <h2 className="text-white text-[76px] font-black">35+</h2>
                  <p className="text-white text-[22px]">Industries Served</p>
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

              <motion.h1
                style={{ y: headingY }}
                className="mt-2 text-3xl sm:text-4xl md:text-[40px] md:leading-[48px] lg:text-[64px] lg:leading-[72px] font-black"
              >
                We Transform<br />
                <span
                  className="text-transparent border-text"
                  style={{ WebkitTextStroke: '2px black' }}
                >
                  Dreams Into Life
                </span>
              </motion.h1>

              <motion.p
                style={{ y: descY }}
                className="mt-4 sm:mt-6 text-base sm:text-[18px] leading-[28px] sm:leading-[32px] text-[#555]"
              >
                Logelite is a global leader in next-generation digital marketing, web design and development.
              </motion.p>

              <motion.div
                style={{ y: featuresY }}
                className="space-y-4 sm:space-y-6 mt-6 sm:mt-10"
              >
                {[
                  { icon: Globe, title: "Easy", desc: "From project audits to strategy creation." },
                  { icon: CircleDollarSign, title: "Affordable", desc: "Cost effective services." },
                  { icon: ChartColumn, title: "Advanced", desc: "Future focused solutions." },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex gap-4 sm:gap-6 items-center">
                      <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] lg:w-[70px] lg:h-[70px] shrink-0 rounded-full bg-[#E9E9E9] flex items-center justify-center">
                        <Icon size={20} className="sm:w-[24px] sm:h-[24px] lg:w-[28px] lg:h-[28px]" />
                      </div>
                      <div>
                        <h3 className="text-2xl sm:text-3xl md:text-[24px] lg:text-[32px] font-black leading-tight">{item.title}</h3>
                        <p className="text-sm sm:text-[16px] mt-1 text-[#666]">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </motion.div>

              <motion.button
                style={{ y: buttonY }}
                className="mt-6 sm:mt-10 rounded-full border border-[#a84dff] px-6 sm:px-8 py-3 sm:py-4 flex items-center gap-3 sm:gap-4 hover:bg-[#a84dff] hover:text-white duration-500 text-sm sm:text-base min-h-[44px]"
              >
                Contact Now! <ChevronRight size={16} className="sm:w-[20px] sm:h-[20px]" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>





      <section ref={floatingRef} className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT IMAGE */}
            <div className="relative">

              <div className="overflow-hidden rounded-3xl shadow-xl">
                <img
                  src={about}
                  alt="About"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Icons - Orbiting */}

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                  style={{ rotate: orbitAngle }}
                  className="relative w-[520px] h-[520px]"
                >
                  <div className="absolute left-1/2 -ml-8 -top-8 w-16 h-16">
                    <motion.div
                      style={{ rotate: counterOrbitAngle }}
                      className="w-full h-full rounded-full bg-white shadow-lg flex items-center justify-center"
                    >
                      <Award className="w-8 h-8 text-orange-500" />
                    </motion.div>
                  </div>

                  <div className="absolute left-[453px] top-[98px] w-16 h-16">
                    <motion.div
                      style={{ rotate: counterOrbitAngle }}
                      className="w-full h-full rounded-full bg-white shadow-lg flex items-center justify-center"
                    >
                      <Rocket className="w-8 h-8 text-blue-500" />
                    </motion.div>
                  </div>

                  <div className="absolute left-[3px] top-[98px] w-16 h-16">
                    <motion.div
                      style={{ rotate: counterOrbitAngle }}
                      className="w-full h-full rounded-full bg-white shadow-lg flex items-center justify-center"
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

              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                We Offer All You
                <br />
                <span className="text-orange-500">
                  Need to Grow Online
                </span>
              </h2>

              {/* Description */}

              <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                Logelite ticks all the boxes for businesses to thrive online.
                We don't just introduce businesses to the digital world with
                our expert web design and development services; but also fuel
                growth through strategically crafted paid advertising and
                digital marketing solutions.
              </p>

              {/* Offer Title */}

              <div className="mt-10 flex items-center gap-3">
                <Lightbulb className="w-7 h-7 text-orange-500" />
                <h3 className="text-2xl font-bold">
                  We Offer
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

              <button className="mt-10 inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300">
                Get Quote
                <ArrowRight size={18} />
              </button>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
