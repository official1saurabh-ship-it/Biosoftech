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

export default function About() {
  const text = "starts here";
  const [displayText, setDisplayText] = useState("");
  const [offset, setOffset] = useState(0);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Vertical parallax: moves up as you scroll
  const yTranslate = useTransform(scrollYProgress, [0, 1], [100, -100]);
  // Scale growth: grows as you scroll
  const scaleGrow = useTransform(scrollYProgress, [0, 1], [0.9, 1.1]);

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
        <div className="absolute inset-0 opacity-40 md:opacity-70 bg-[linear-gradient(#d8d8d8_2px,transparent_2px),linear-gradient(90deg,#d8d8d8_2px,transparent_2px)] bg-[size:60px_60px] md:bg-[size:120px_120px]" />
        <div className="max-w-[1600px] mx-auto min-h-[calc(100vh-80px)] px-4 sm:px-8 md:px-12 lg:px-16 grid lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center relative pb-12 md:pb-16">
          <div className="z-10 text-center lg:text-left pt-28 md:pt-28">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-tight md:leading-[85px] font-black max-w-[800px] text-[#09090F]">
              Your <span className="text-orange-500">AI-Powered</span> Digital<br />Marketing Partner
            </h1>
            <span className="text-blue-600 block mt-3 text-3xl sm:text-4xl md:text-5xl font-bold">
              {displayText}
              <span className="inline-block w-1 md:w-2 h-8 md:h-12 bg-blue-600 ml-1 animate-blink align-middle"></span>
            </span>
            <p className="mt-6 md:mt-8 text-base md:text-[18px] leading-relaxed md:leading-[38px] text-gray-600 max-w-[650px] mx-auto lg:mx-0">
              Join <span className="font-bold text-gray-900">500+ businesses in Lucknow</span> who transformed their brands with
              <span className="font-bold text-gray-900"> Rank Digital Solution's</span> Best digital marketing in lucknow.
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-3 mt-6 md:mt-8 text-sm md:text-[18px] font-semibold">
              <CheckCircle size={20} className="text-purple-600" />
              <span>Rated</span>
              <span className="text-orange-500">★★★★★</span>
              <span>by 200+ happy clients</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start mt-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-white bg-gray-200 -ml-2 first:ml-0 overflow-hidden shadow-sm">
                  <div className="w-full h-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center text-white font-bold text-xs">{i}</div>
                </div>
              ))}
              <span className="ml-3 bg-purple-600 text-white rounded-full px-3 py-1 text-sm font-bold shadow-lg">1k+</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-5 mt-10 justify-center lg:justify-start">
              <button className="bg-[#09090F] text-white px-8 py-4 rounded-2xl flex items-center justify-center gap-2 font-bold hover:bg-purple-600 transition-all shadow-xl"><Phone size={18} />Book a Meeting</button>
              <button className="border-2 border-gray-200 px-8 py-4 rounded-2xl font-bold hover:border-purple-600 hover:text-purple-600 transition-all">📞 Talk To Us</button>
            </div>
          </div>
          <div className="relative flex justify-center mt-12 lg:mt-0">
            <div className="absolute w-[300px] h-[300px] md:w-[460px] md:h-[460px] rounded-full bg-[#FFEB3B] top-[30px] md:top-[60px] left-1/2 -translate-x-1/2 z-10" />
            <img src="/girl.png" alt="Digital Marketing Expert" className="relative z-20 w-[280px] md:w-[480px] drop-shadow-2xl" />
            <div className="absolute top-8 right-8 md:top-12 md:right-12 z-30">
              <div className="w-9 h-9 md:w-11 md:h-11 bg-white rounded-full flex items-center justify-center shadow-lg text-xl font-bold border">G</div>
            </div>
            <div className="absolute top-24 right-0 md:top-32 md:right-[-10px] z-30">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-blue-600 text-2xl font-bold border">f</div>
            </div>
            <div className="absolute top-4 right-28 md:top-12 md:right-40 z-30">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-red-500 text-xl border">♻</div>
            </div>
            <div className="absolute bottom-36 left-8 md:bottom-44 md:left-12 z-30">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-red-600 text-2xl border">▶</div>
            </div>
            <div className="absolute left-4 md:left-10 bottom-12 md:bottom-20 bg-white/95 backdrop-blur-md p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-2xl z-30 border border-white/50 flex items-center gap-3">
              <div className="bg-blue-100 p-3 rounded-xl">⭐</div>
              <div><h3 className="text-3xl md:text-5xl font-black text-blue-600">5+</h3><p className="text-xs md:text-sm font-bold text-gray-500 uppercase tracking-widest">Years Of Experience</p></div>
            </div>
            <div className="absolute right-4 md:right-10 bottom-12 md:bottom-20 bg-white/95 backdrop-blur-md p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-2xl z-30 border border-white/50 flex items-center gap-3">
              <div className="bg-blue-100 p-3 rounded-xl">🌐</div>
              <div><h3 className="text-3xl md:text-5xl font-black text-blue-600">100+</h3><p className="text-xs md:text-sm font-bold text-gray-500 uppercase tracking-widest">Websites Developed</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative overflow-hidden bg-[#f7f7f7]">
        <div className="absolute inset-0 opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/cartographer.png')]" />
        <div className="absolute top-6 left-[22%] w-2 h-2 rounded-full bg-green-400" />
        <div className="absolute top-[160px] left-[12%] w-2 h-2 rounded-full bg-cyan-400" />
        <div className="absolute bottom-[200px] left-[6%] w-2 h-2 rounded-full bg-pink-400" />
        <div className="absolute top-[280px] right-[28%] w-2 h-2 rounded-full bg-yellow-400" />
        <div className="absolute top-[350px] right-[12%] w-2 h-2 rounded-full bg-red-400" />
        <div className="absolute top-[120px] right-[10%] w-2 h-2 rounded-full bg-purple-500" />
        <div className="relative max-w-[1220px] mx-auto px-6 py-14">
          <div className="grid lg:grid-cols-[1fr_560px] gap-20 items-center">
            <div>
              <h1 className="text-[50px] leading-[66px] font-black text-black">Best Digital Marketing Agency in Lucknow for SEO, Performance Marketing, Social Media & Website Designing</h1>
              <p className="mt-6 text-[17px] leading-[36px] text-[#222]">Welcome to Digital Mart Lab, the best digital marketing agency in Lucknow trusted by startups, local businesses, and growing brands. We specialize in SEO, performance marketing, social media marketing, and website designing.</p>
              <p className="mt-4 text-[17px] leading-[36px] text-[#222]">Founded by Mr. Victor Singh, Digital Mart Lab is a certified digital marketing agency headquartered in Lucknow.</p>
              <h2 className="mt-7 text-[38px] font-black text-[#433d70]">Our Mission</h2>
              <p className="mt-3 text-[17px] leading-[36px]">To empower businesses through data-driven digital marketing strategies that increase visibility and generate sustainable growth.</p>
              <button className="mt-8 px-10 py-4 border border-[#6b63ff] text-[#433d70] font-semibold hover:bg-[#3B3663] hover:text-white duration-500">CHECK OUR GLOBAL REACH</button>
            </div>
            <div className="grid grid-cols-2 gap-7">
              {services.map((item) => (
                <div key={item.title} className="group bg-white rounded-[18px] p-8 shadow-[0_18px_40px_rgba(0,0,0,.05)] hover:bg-[#3B3663] hover:-translate-y-2 duration-500">
                  <div className={`w-[72px] h-[72px] rounded-full mb-8 transition-all duration-500 group-hover:scale-110 ${item.color}`} />
                  <h3 className="text-[24px] leading-[34px] font-black text-[#2b2d46] group-hover:text-white duration-500">{item.title}</h3>
                  <p className="mt-5 text-[13px] leading-[28px] font-semibold text-[#404256] group-hover:text-white/90 duration-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conviction Section (Section 3) */}
      <section className="relative overflow-hidden bg-black">
        <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_top,#5b0000,transparent_40%),radial-gradient(circle_at_bottom,#3f0000,transparent_40%)]" />
        <div className="relative max-w-[1180px] mx-auto px-8 py-12">
          <div className="grid lg:grid-cols-[1fr_420px] gap-24 items-center">
            <div>
              <h2 className="text-[62px] leading-[72px] font-light text-white"><span className="text-[#f2ab00] font-medium">RankON Technologies’s</span><br />Existence Is Built On<br />Conviction</h2>
              <div className="mt-8 space-y-8 text-white text-[18px] leading-[40px]">
                <p>In our 14+ years of experience as a progressive digital marketing agency, we have witnessed the digital landscape evolve before our eyes.</p>
                <p>Even after algorithm shifts and AI results began to dominate the SERPs, we have helped businesses navigate these changes.</p>
                <p>We continuously observed evolving dynamics and adjusted our growth strategy.</p>
                <p>By implementing timely changes to our search strategy, we ensured businesses remain visible.</p>
              </div>
              <button className="mt-10 border border-white px-10 py-5 text-white flex items-center gap-3 hover:bg-[#3B3663] duration-500">Let's Accelerate Your Growth <ChevronRight size={20} /></button>
            </div>
            <div className="grid grid-cols-2 gap-5 self-center">
              {stats.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="bg-[#f8f8f8] rounded-md py-6 px-5 flex items-center gap-4 h-fit duration-500">
                    <Icon size={32} strokeWidth={1.4} className="text-black duration-500 shrink-0" />
                    <div className="flex flex-col">
                      <div className="text-[#f3a800] text-[28px] font-light leading-tight">
                        {item.value}<span className="text-red-500 text-[18px]">{item.plus}</span>
                      </div>
                      <div className="text-black text-[14px] font-medium leading-tight">{item.title} {item.sub}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Who Are We Section */}
      <section className="relative overflow-hidden bg-[#F7F7F1] min-h-screen py-20" ref={containerRef}>
        <div className="max-w-[1350px] mx-auto px-6">
          <div className="grid lg:grid-cols-[620px_1fr] gap-24 items-center">

            {/* LEFT SIDE - Static Cards with slight parallax */}
            <div
              style={{
                transform: `translateY(${offset * 0.4}px)`,
              }}
              className="relative h-[820px] duration-300"
            >
              {/* BACK CARD */}
              <div className="absolute left-0 top-0 w-[420px] h-[560px] rounded-tr-[120px] bg-gradient-to-b from-[#D32FFF] to-[#FF5B5B] p-10">
                <h2 className="text-white text-[90px] font-black">235+</h2>
                <p className="text-white text-[26px] font-bold">Websites Developed</p>
                <div className="absolute left-[40px] bottom-[60px] w-[240px] h-[240px] rounded-[36px] bg-[#C839D8] flex items-center justify-center text-[90px]">
                  🌐
                </div>
              </div>

              {/* FRONT CARD */}
              <div className="absolute left-[150px] top-[180px] w-[430px] h-[620px] bg-gradient-to-br from-[#291043] to-[#5B1896] p-10 z-20">
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
            <motion.div
              style={{
                y: yTranslate,
                scale: scaleGrow,
                transformOrigin: "top left"
              }}
            >
              <p className="text-[#af60ff] font-semibold">✺ Who Are We?</p>

              <h1 className="mt-2 text-[64px] leading-[72px] font-black">
                We Transform<br />
                <span
                  className="text-transparent border-text"
                  style={{ WebkitTextStroke: '2px black' }}
                >
                  Dreams Into Life
                </span>
              </h1>

              <p className="mt-6 text-[18px] leading-[32px] text-[#555]">
                Logelite is a global leader in next-generation digital marketing, web design and development.
              </p>

              <div className="space-y-6 mt-10">
                {[
                  { icon: Globe, title: "Easy", desc: "From project audits to strategy creation." },
                  { icon: CircleDollarSign, title: "Affordable", desc: "Cost effective services." },
                  { icon: ChartColumn, title: "Advanced", desc: "Future focused solutions." },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex gap-6 items-center">
                      <div className="w-[70px] h-[70px] shrink-0 rounded-full bg-[#E9E9E9] flex items-center justify-center">
                        <Icon size={28} />
                      </div>
                      <div>
                        <h3 className="text-[32px] font-black leading-tight">{item.title}</h3>
                        <p className="text-[16px] mt-1 text-[#666]">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <button className="mt-10 rounded-full border border-[#a84dff] px-8 py-4 flex items-center gap-4 hover:bg-[#a84dff] hover:text-white duration-500">
                Contact Now! <ChevronRight />
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
