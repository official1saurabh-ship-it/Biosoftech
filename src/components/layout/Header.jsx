import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhoneAlt, FaCalendarAlt, FaTimes, FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const WEBSITE_URL = 'https://www.biosoftech.com';

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

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (activeDropdown && !e.target.closest('nav') && !e.target.closest('.mobile-menu-container')) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeDropdown]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    {
      name: 'Services',
      href: '#',
      dropdown: [
        { name: 'Web Development', href: '/web-development' },
        { name: 'App Development', href: '/app-development' },
        { name: 'Cloud Services', href: '/cloud-services' },
        { name: 'AI Automation', href: '/ai-automation' },
      ]
    },
    {
      name: 'Products',
      href: '#',
      dropdown: [
        { name: 'Sales and Billing System', href: 'https://billing.biosoftech.in/signin' },
        { name: 'Restaurant Management System', href: 'https://restaurants.biosoftech.in/' },
        { name: 'Hotel Management System', href: 'https://hotel.biosoftech.in/' },
        { name: 'Parking Management System', href: 'https://vms.biosoftech.in/' },
        { name: 'Attendance Management System', href: 'https://att.biosoftech.in/' },
        { name: 'Visitor Management System', href: 'https://vms.biosoftech.in/' },
        { name: 'CRM Platform', href: '#' },
        { name: 'ERP Solution', href: '#' },
        { name: 'PG Management System', href: 'https://pg.biosoftech.in/' },
        { name: 'Canteen Management System', href: '#' },
        { name: 'Pathology Management', href: 'https://pytho.biosoftech.in/' },
        { name: 'School Management', href: 'https://school.biosoftech.in/' },
        { name: 'Payroll Management', href: '#' },
        { name: 'Hospital Management System', href: '#' },
      ]
    },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
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
      <header className={`fixed left-0 w-full z-50 transition-all duration-700 flex justify-center pointer-events-none ${isScrolled ? 'top-1 sm:top-4' : 'top-1 sm:top-8'}`}>
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className={`relative pointer-events-auto w-[96%] sm:w-[92%] max-w-[1280px] h-14 sm:h-16 flex items-center justify-between bg-gradient-to-r from-[#09090F] via-[#111827] to-[#09090F] backdrop-blur-2xl rounded-full border border-white/10 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5),0_0_30px_-10px_rgba(146,85,206,0.2)] px-1.5 transition-all duration-500 ${isScrolled ? 'h-12 sm:h-14 scale-98 opacity-95' : 'scale-100 opacity-100'}`}
        >
          {/* Logo Section */}
          <Link to="/" className="h-full py-1 shrink-0">
            <div className="h-full bg-gradient-to-r from-[#9255CE] to-[#BE60FF] rounded-full px-6 flex items-center gap-3 shadow-[0_0_20px_rgba(146,85,206,0.3)] relative overflow-hidden group">
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-7 h-7 text-white">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
                  <path d="M50 5 L90 27.5 L90 72.5 L50 95 L10 72.5 L10 27.5 Z" fill="none" stroke="currentColor" strokeWidth="8" />
                  <path d="M50 25 L75 40 L75 60 L50 75 L25 60 L25 40 Z" fill="currentColor" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-black text-lg leading-none tracking-tight uppercase">Biosoftech</span>
                <span className="text-white/60 text-[7px] font-bold uppercase tracking-[0.3em] mt-0.5 whitespace-nowrap">Launch and Grow</span>
              </div>
            </div>
          </Link>

          {/* Navigation Area with CORRECTED Hover Effect */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-8 px-4 h-full">
            {menuItems.map((item) => (
              <motion.div
                key={item.name}
                className="relative h-full flex items-center group"
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
                {item.dropdown ? (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveDropdown(activeDropdown === item.name ? null : item.name);
                    }}
                    className="relative z-10 flex items-center gap-1.5 text-[13px] font-bold uppercase tracking-[0.1em] py-2 whitespace-nowrap cursor-pointer bg-transparent border-none"
                  >
                    <span className={`transition-colors duration-300 ${activeDropdown === item.name ? 'text-[#9255CE]' : 'text-white/70 group-hover:text-[#9255CE]'}`}>
                      {item.name}
                    </span>
                    <FaChevronDown size={8} className={`transition-all duration-500 ${activeDropdown === item.name ? 'rotate-180 text-[#9255CE]' : 'text-white/40'}`} />
                  </button>
                ) : (
                  <Link to={item.href} className="relative z-10 flex items-center gap-1.5 py-2 whitespace-nowrap">
                    <span className="text-[13px] font-bold uppercase tracking-[0.1em] text-white/70 group-hover:text-[#9255CE] transition-colors duration-300">
                      {item.name}
                    </span>
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-0 pt-4 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 z-[100] ${activeDropdown === item.name ? '!opacity-100 !visible' : ''}`}>
                    <div className="bg-[#09090F]/98 backdrop-blur-3xl rounded-2xl border border-white/5 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden p-1.5">
                      {item.dropdown.map((subItem) => {
                        const isExternal = subItem.href.startsWith('http');
                        const Component = isExternal ? 'a' : Link;
                        const props = isExternal 
                          ? { href: subItem.href, target: '_blank', rel: 'noreferrer' }
                          : { to: subItem.href, onClick: () => setActiveDropdown(null) };

                        return (
                          <Component
                            key={subItem.name}
                            {...props}
                            className="block px-5 py-3 text-[11px] font-bold text-white hover:bg-white/5 hover:text-[#9255CE] rounded-xl transition-all uppercase tracking-tighter"
                          >
                            {subItem.name}
                          </Component>
                        );
                      })}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </nav>

          {/* Action Area */}
          <div className="flex items-center gap-2 pr-2 min-w-fit shrink-0">
            <a
              href={WEBSITE_URL}
              target="_blank"
              rel="noreferrer"
              className="hidden xl:flex items-center gap-2 border border-white/10 bg-white px-7 py-2 rounded-full font-bold text-[12px] text-black hover:bg-[#9255CE] hover:border-[#9255CE] hover:shadow-[0_0_20px_rgba(146,85,206,0.4)] transition-all duration-500 group uppercase tracking-widest"
            >
              <FaCalendarAlt className="text-[#0e141d] group-hover:text-white transition-colors" />
              <span>Meeting</span>
            </a>

            <div
              className="
flex
items-center
gap-2
pl-2
ml-auto
border-l
border-white/5
"
            >
              <a href="tel:+919044425858" className="flex items-center gap-3 group/phone">
                <div className="bg-[#9255CE] w-9 h-9 rounded-full flex items-center justify-center text-white shadow-[0_0_15px_rgba(146,85,206,0.5)] group-hover/phone:scale-110 transition-transform duration-500 ring-4 ring-[#9255CE]/10">
                  <FaPhoneAlt size={10} />
                </div>
                <div className="hidden lg:flex flex-col">
                  <span className="text-[7px] text-white/30 font-bold uppercase tracking-[0.2em] leading-none">Connect</span>
                  <span className="text-[13px] text-white font-black mt-0.5 leading-none tracking-tight">+91-9044425858</span>
                </div>
              </a>

              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="
 flex
 lg:hidden

 w-12
 h-12

min-w-[48px]

rounded-full

border
border-white/20

bg-[#12121c]

items-center
justify-center

hover:bg-[#9255CE]

transition-all

z-[999]
"
              >

                <div className="space-y-1">

                  <div className="w-5 h-[2px] bg-white rounded" />

                  <div className="w-5 h-[2px] bg-white rounded" />

                  <div className="w-5 h-[2px] bg-white rounded" />

                </div>

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
            className="fixed inset-0 bg-black/95 backdrop-blur-3xl z-[200] lg:hidden flex justify-end mobile-menu-container"
            onClick={() => { setIsMobileMenuOpen(false); setActiveDropdown(null); }}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 35, stiffness: 300 }}
              className="h-full w-[80%] max-w-sm md:max-w-md bg-[#09090F] border-l border-white/5 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8 flex items-center justify-between border-b border-white/5">
                <div className="flex flex-col">
                  <span className="text-white font-black text-2xl tracking-tighter">BioSoftech</span>
                  <span className="text-[#9255CE] text-[8px] font-bold uppercase tracking-widest mt-1">Launch and Grow</span>
                </div>
                <button onClick={() => { setIsMobileMenuOpen(false); setActiveDropdown(null); }} className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 text-white hover:bg-white/10 transition-all">
                  <FaTimes />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-8">
                <nav className="space-y-2">
                  {menuItems.map((item) => {
                    const isExternal = item.href.startsWith('http') || item.href.startsWith('#');
                    const Component = isExternal ? 'a' : Link;
                    const props = isExternal ? { href: item.href } : { to: item.href, onClick: () => setIsMobileMenuOpen(false) };

                    return (
                      <div key={item.name} className="group/mob">
                        <div
                          className="flex items-center justify-between py-5 border-b border-white/5 cursor-pointer"
                          onClick={(e) => {
                            if (item.dropdown) {
                              setActiveDropdown(activeDropdown === item.name ? null : item.name);
                            }
                            if (!item.dropdown && !isExternal) {
                              setIsMobileMenuOpen(false);
                              setActiveDropdown(null);
                            }
                          }}
                        >
                          {item.dropdown ? (
                            <span className="text-lg font-bold text-white group-mob:text-[#9255CE] transition-colors uppercase tracking-[0.2em]">
                              {item.name}
                            </span>
                          ) : (
                            <Component {...props} className="text-lg font-bold text-white group-mob:text-[#9255CE] transition-colors uppercase tracking-[0.2em]">
                              {item.name}
                            </Component>
                          )}
                          {item.dropdown && <FaChevronDown size={12} className={`text-[#9255CE] transition-transform duration-500 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />}
                        </div>

                        {item.dropdown && activeDropdown === item.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            className="pl-6 space-y-4 py-4 overflow-hidden border-l border-[#9255CE]/30"
                          >
                            {item.dropdown.map((subItem) => {
                              const isSubExternal = subItem.href.startsWith('http') || subItem.href.startsWith('#');
                              const SubComponent = isSubExternal ? 'a' : Link;
                              const subProps = isSubExternal 
                                ? { href: subItem.href, target: isSubExternal && !subItem.href.startsWith('#') ? '_blank' : '_self', rel: isSubExternal && !subItem.href.startsWith('#') ? 'noreferrer' : '' }
                                : { to: subItem.href, onClick: () => { setIsMobileMenuOpen(false); setActiveDropdown(null); } };

                              return (
                                <SubComponent
                                  key={subItem.name}
                                  {...subProps}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    if (!isSubExternal) {
                                      setIsMobileMenuOpen(false);
                                      setActiveDropdown(null);
                                    }
                                  }}
                                  className="block text-white/40 font-bold text-xs uppercase tracking-widest hover:text-white transition-colors"
                                >
                                  {subItem.name}
                                </SubComponent>
                              );
                            })}
                          </motion.div>
                        )}
                      </div>
                    );
                  })}
                </nav>
              </div>

              <div className="p-8 bg-black/40 border-t border-white/5 space-y-6">
                <a href={WEBSITE_URL} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#9255CE] to-[#BE60FF] text-white py-5 rounded-2xl font-black text-sm uppercase tracking-[0.3em] shadow-[0_15px_30px_-5px_rgba(146,85,206,0.4)]">
                  <FaCalendarAlt /> Meeting
                </a>
                <a href="tel:+919044425858" className="flex items-center gap-5 p-6 bg-white/5 rounded-3xl border border-white/5 group">
                  <div className="bg-[#9255CE] w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <div className="text-[9px] text-white/30 font-bold uppercase tracking-widest">Global Support</div>
                    <div className="font-black text-white text-lg tracking-tight">+91-9044425858</div>
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
