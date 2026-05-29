import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaDesktop, FaMobileAlt, FaGlobe, FaSearchDollar } from 'react-icons/fa';

const WebDevelopment = () => {
  const serviceCards = [
    {
      title: "Custom Web Development",
      desc: "Tailored websites built from scratch to meet your unique business requirements and brand identity.",
      icon: <FaCode className="text-4xl text-blue-500" />
    },
    {
      title: "E-commerce Solutions",
      desc: "High-converting online stores with secure payment gateways and seamless user experiences.",
      icon: <FaRocket className="text-4xl text-orange-500" />
    },
    {
      title: "Enterprise Portals",
      desc: "Scalable and secure web portals for internal business processes and customer management.",
      icon: <FaDesktop className="text-4xl text-purple-500" />
    },
    {
      title: "CMS Development",
      desc: "Easy-to-manage content systems like WordPress, Headless CMS, and custom solutions.",
      icon: <FaGlobe className="text-4xl text-green-500" />
    }
  ];

  const whyChooseUs = [
    {
      title: "Tailored Solutions",
      desc: "We don't believe in one-size-fits-all. Every website is designed specifically for your target audience."
    },
    {
      title: "Multilingual Support",
      desc: "Reach a global audience with websites that support multiple languages and regions."
    },
    {
      title: "SEO-First Approach",
      desc: "We build websites with clean code and architecture that search engines love from day one."
    },
    {
      title: "Timely Delivery",
      desc: "Our agile development process ensures your project stays on track and launches on schedule."
    }
  ];

  return (
    <div className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16 md:mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-[#09090F] mb-6 sm:mb-8"
          >
            Build Websites That <br className="hidden sm:block" /><span className="text-[#9255CE]">Drive Growth</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0"
          >
            From stunning landing pages to complex enterprise systems, Biosoftech delivers web solutions that combine beautiful design with powerful functionality.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-16 sm:mb-24 md:mb-32">
          {serviceCards.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 sm:p-8 md:p-10 bg-gray-50 rounded-[2rem] md:rounded-[2.5rem] border border-gray-100 hover:bg-white hover:shadow-2xl hover:border-transparent transition-all group"
            >
              <div className="mb-4 sm:mb-6 md:mb-8 transform group-hover:scale-110 group-hover:rotate-3 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 sm:mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Multilingual Section */}
        <div className="bg-[#09090F] rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[4rem] p-6 sm:p-8 md:p-24 text-white mb-16 sm:mb-24 md:mb-32 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 to-transparent pointer-events-none" />
          <div className="relative z-10 grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-20 items-center">
            <div>
              <div className="inline-block bg-purple-600 px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-widest mb-4 sm:mb-6 md:mb-8">
                Global Reach
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black mb-4 sm:mb-6 md:mb-8 leading-tight">
                Multilingual Website <br />Development
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 sm:mb-8 md:mb-10 leading-relaxed">
                Break language barriers and expand your market reach. We specialize in developing websites that automatically adapt to the user's language and cultural preferences.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
                {['RTL Support', 'Auto-Translation', 'Local SEO', 'Regional Content'].map((feature) => (
                  <span key={feature} className="px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-3 bg-white/5 rounded-xl md:rounded-2xl border border-white/10 font-bold text-[11px] sm:text-xs md:text-sm">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="w-full aspect-square bg-gradient-to-tr from-purple-600 to-blue-600 rounded-full blur-[100px] opacity-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2rem] md:rounded-[3rem] p-6 sm:p-8 md:p-12 relative z-10">
                <FaGlobe className="text-4xl sm:text-5xl md:text-7xl text-purple-500 mb-4 sm:mb-6 md:mb-8" />
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 md:mb-6">Localized Experience</h3>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  We don't just translate words; we adapt the entire user journey to ensure cultural relevance and maximum engagement in every market.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Section */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6 text-[#09090F]">Why Choose Biosoftech?</h2>
          <p className="text-gray-600 text-sm sm:text-base">The technology partner you can trust for your digital success.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {whyChooseUs.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 p-6 sm:p-8 md:p-10 bg-white border border-gray-100 rounded-[2rem] sm:rounded-[3rem] hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 shrink-0 font-black text-xl sm:text-2xl">
                0{index + 1}
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;
