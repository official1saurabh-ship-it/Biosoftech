import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhoneAlt, FaCalendarAlt, FaTimes, FaChevronDown } from 'react-icons/fa';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { 
      name: 'Services', 
      href: '#',
      dropdown: [
        { name: 'Paid Advertising', href: '#' },
        { name: 'SEO', href: '#' },
        { name: 'Social Media Optimization', href: '#' },
        { name: 'Web Design & Development', href: '#' },
      ]
    },
    { name: 'Blog', href: '#' },
    { name: 'Our Teams', href: '#' },
    { name: 'Contact Us', href: '#' },
  ];

  // Framer Motion Variants for Hover Effect
  const lineVariants = {
    initial: { scaleY: 0, opacity: 0 },
    hover: { 
      scaleY: 1, 
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  const textVariants = {
    initial: { color: "rgba(255, 255, 255, 0.7)" },
    hover: { 
      color: "#9255CE",
      transition: { duration: 0.3 }
    }
  };

  return (
    <>
      <header className={`fixed left-0 w-full z-50 transition-all duration-700 flex justify-center pointer-events-none ${isScrolled ? 'top-4' : 'top-8'}`}>
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className={`relative pointer-events-auto w-[92%] max-w-[1280px] h-16 flex items-center justify-between bg-gradient-to-r from-[#09090F] via-[#111827] to-[#09090F] backdrop-blur-2xl rounded-full border border-white/10 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5),0_0_30px_-10px_rgba(146,85,206,0.2)] px-1.5 transition-all duration-500 ${isScrolled ? 'h-14 scale-98 opacity-95' : 'scale-100 opacity-100'}`}
        >
          {/* Logo Section */}
          <div className="h-full py-1 shrink-0">
            <div className="h-full bg-gradient-to-r from-[#9255CE] to-[#BE60FF] rounded-full px-6 flex items-center gap-3 shadow-[0_0_20px_rgba(146,85,206,0.3)] relative overflow-hidden group">
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-7 h-7 text-white">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
                  <path d="M50 5 L90 27.5 L90 72.5 L50 95 L10 72.5 L10 27.5 Z" fill="none" stroke="currentColor" strokeWidth="8" />
                  <path d="M50 25 L75 40 L75 60 L50 75 L25 60 L25 40 Z" fill="currentColor" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-black text-lg leading-none tracking-tight uppercase">Logelite</span>
                <span className="text-white/60 text-[7px] font-bold uppercase tracking-[0.3em] mt-0.5 whitespace-nowrap">Launch and Grow</span>
              </div>
            </div>
          </div>

          {/* Navigation Area with CORRECTED Hover Effect */}
          <nav className="hidden lg:flex items-center gap-8 px-4 h-full">
            {menuItems.map((item) => (
              <motion.div 
                key={item.name} 
                className="relative h-full flex items-center cursor-pointer group"
                initial="initial"
                whileHover="hover"
              >
                {/* 1. Vertical Orange Glow Line - Triggered by Parent Hover */}
                <div className="absolute inset-0 flex justify-center pointer-events-none overflow-hidden">
                  <motion.div 
                    variants={lineVariants}
                    className="w-[2.5px] h-full bg-gradient-to-b from-transparent via-[#f28541] to-transparent shadow-[0_0_15px_#f28541]"
                  />
                </div>

                {/* 2. Text with Transition */}
                <motion.a 
                  href={item.href}
                  variants={textVariants}
                  className="relative z-10 flex items-center gap-1.5 text-[13px] font-bold uppercase tracking-[0.1em] py-2 whitespace-nowrap"
                >
                  {item.name}
                  {item.dropdown && <FaChevronDown size={8} className="opacity-40 group-hover:rotate-180 transition-transform duration-500" />}
                </motion.a>
                
                {/* Dropdown Menu */}
                {item.dropdown && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 pt-4 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 z-[100]">
                    <div className="bg-[#09090F]/98 backdrop-blur-3xl rounded-2xl border border-white/5 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden p-1.5">
                      {item.dropdown.map((subItem) => (
                        <a 
                          key={subItem.name} 
                          href={subItem.href}
                          className="block px-5 py-3 text-[11px] font-bold text-white/50 hover:bg-white/5 hover:text-[#9255CE] rounded-xl transition-all uppercase tracking-tighter"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </nav>

          {/* Action Area */}
          <div className="flex items-center gap-4 pr-2 shrink-0">
            <a 
              href="#" 
              className="hidden xl:flex items-center gap-2 border border-white/10 bg-white/5 px-7 py-2 rounded-full font-bold text-[12px] text-white/90 hover:bg-[#9255CE] hover:border-[#9255CE] hover:shadow-[0_0_20px_rgba(146,85,206,0.4)] transition-all duration-500 group uppercase tracking-widest"
            >
              <FaCalendarAlt className="text-[#9255CE] group-hover:text-white transition-colors" /> 
              <span>Meeting</span>
            </a>

            <div className="flex items-center gap-3 pl-3 border-l border-white/5">
              <a href="tel:+919076606339" className="flex items-center gap-3 group/phone">
                <div className="bg-[#9255CE] w-9 h-9 rounded-full flex items-center justify-center text-white shadow-[0_0_15px_rgba(146,85,206,0.5)] group-hover/phone:scale-110 transition-transform duration-500 ring-4 ring-[#9255CE]/10">
                  <FaPhoneAlt size={10} />
                </div>
                <div className="hidden md:flex flex-col">
                  <span className="text-[7px] text-white/30 font-bold uppercase tracking-[0.2em] leading-none">Connect</span>
                  <span className="text-[13px] text-white font-black mt-0.5 leading-none tracking-tight">+91-907-660-6339</span>
                </div>
              </a>

              <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex flex-col items-center justify-center gap-1 hover:bg-white/10 transition-all lg:hidden"
              >
                <div className="w-5 h-[1.5px] bg-white rounded-full" />
                <div className="w-5 h-[1.5px] bg-white rounded-full opacity-50" />
                <div className="w-5 h-[1.5px] bg-white rounded-full" />
              </button>
            </div>
          </div>
        </motion.div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-3xl z-[200] lg:hidden flex justify-end"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 35, stiffness: 300 }}
              className="h-full w-[80%] max-w-sm bg-[#09090F] border-l border-white/5 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8 flex items-center justify-between border-b border-white/5">
                <div className="flex flex-col">
                  <span className="text-white font-black text-2xl tracking-tighter">LOGELITE</span>
                  <span className="text-[#9255CE] text-[8px] font-bold uppercase tracking-widest mt-1">Launch and Grow</span>
                </div>
                <button onClick={() => setIsMobileMenuOpen(false)} className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 text-white hover:bg-white/10 transition-all">
                  <FaTimes />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-8">
                <nav className="space-y-2">
                  {menuItems.map((item) => (
                    <div key={item.name} className="group/mob">
                      <div 
                        className="flex items-center justify-between py-5 border-b border-white/5 cursor-pointer"
                        onClick={() => item.dropdown && setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                      >
                        <a href={item.href} className="text-lg font-bold text-white group-mob:text-[#9255CE] transition-colors uppercase tracking-[0.2em]">{item.name}</a>
                        {item.dropdown && <FaChevronDown size={12} className={`text-[#9255CE] transition-transform duration-500 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />}
                      </div>
                      
                      {item.dropdown && activeDropdown === item.name && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          className="pl-6 space-y-4 py-4 overflow-hidden border-l border-[#9255CE]/30"
                        >
                          {item.dropdown.map((subItem) => (
                            <a 
                              key={subItem.name} 
                              href={subItem.href}
                              className="block text-white/40 font-bold text-xs uppercase tracking-widest hover:text-white transition-colors"
                            >
                              {subItem.name}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  ))}
                </nav>
              </div>

              <div className="p-8 bg-black/40 border-t border-white/5 space-y-6">
                <a href="#" className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#9255CE] to-[#BE60FF] text-white py-5 rounded-2xl font-black text-sm uppercase tracking-[0.3em] shadow-[0_15px_30px_-5px_rgba(146,85,206,0.4)]">
                  <FaCalendarAlt /> Meeting
                </a>
                <a href="tel:+919076606339" className="flex items-center gap-5 p-6 bg-white/5 rounded-3xl border border-white/5 group">
                  <div className="bg-[#9255CE] w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <div className="text-[9px] text-white/30 font-bold uppercase tracking-widest">Global Support</div>
                    <div className="font-black text-white text-lg tracking-tight">+91-907-660-6339</div>
                  </div>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
