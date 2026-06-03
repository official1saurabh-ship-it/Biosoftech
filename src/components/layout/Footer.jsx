import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaTwitter, FaHome, FaEnvelope, FaPhoneAlt, FaWhatsapp, FaTimes } from 'react-icons/fa';
import biosoftechLogo from "../../assets/download.png";

const socialLinks = [
  { Icon: FaFacebookF, href: 'https://www.facebook.com/biosoftechsoftwaresolutions', label: 'Facebook' },
  { Icon: FaLinkedinIn, href: 'https://www.linkedin.com/company/biosoftechsoftwaresolutions/', label: 'LinkedIn' },
  { Icon: FaInstagram, href: 'https://www.instagram.com/biosoftechsoftwaresolutions/', label: 'Instagram' },
  { Icon: FaYoutube, href: 'https://youtube.com/@biosoftech?si=ODz3hODFqF5AmkT0', label: 'Biosoftech Website' },
  { Icon: FaTwitter, href: 'https://x.com/biosoftech', label: 'X' },
];

const helpfulLinks = [
  { name: 'About Us', to: '/about' },
  { name: 'Blog', to: '/blog' },
  { name: 'Contact Us', to: '/contact' },
];

const resourceLinks = [
  { name: 'Career', to: '#' },
  { name: 'Our Teams', to: '#' },
  { name: 'Testimonials', to: '#' },
  { name: 'Faqs', to: '#' },
];

const serviceLinks = [
  { name: 'Web Development', to: '/web-development' },
  { name: 'App Development', to: '/app-development' },
  { name: 'Cloud Services', to: '/cloud-services' },
  { name: 'AI Automation', to: '/ai-automation' },
];

const packageLinks = [
  { name: 'Enquiry', to: '/contact' },
  { name: 'Privacy Policy', to: '/privacy-policy' },
  { name: 'Terms & Conditions', to: '#' },
];

const Footer = () => {
  const [callPopup, setCallPopup] = useState({ visible: false, number: '' });

  return (
    <footer className="bg-gray-50 pt-12 sm:pt-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* TOP ROW */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {/* Helpful Links */}
          <div>
            <h4 className="text-xl font-bold mb-8 relative inline-block">
              Helpful Links
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary-1 rounded-full" />
            </h4>
            <ul className="space-y-4">
              {helpfulLinks.map((item) => (
                <li key={item.name}>
                  <Link to={item.to} className="text-gray-600 hover:text-primary-1 transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-primary-1 group-hover:w-3 transition-all" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-xl font-bold mb-8 relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary-1 rounded-full" />
            </h4>
            <ul className="space-y-4">
              {serviceLinks.map((item) => (
                <li key={item.name}>
                  <Link to={item.to} className="text-gray-600 hover:text-primary-1 transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-primary-1 group-hover:w-3 transition-all" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Packages */}
          <div>
            <h4 className="text-xl font-bold mb-8 relative inline-block">
              Our Packages
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary-1 rounded-full" />
            </h4>
            <ul className="space-y-4">
              {packageLinks.map((item) => (
                <li key={item.name}>
                  <Link to={item.to} className="text-gray-600 hover:text-primary-1 transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-primary-1 group-hover:w-3 transition-all" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xl font-bold mb-8 relative inline-block">
              Resources
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary-1 rounded-full" />
            </h4>
            <ul className="space-y-4">
              {resourceLinks.map((item) => {
                const isExternal = item.to.startsWith('http') || item.to === '#';
                const Component = isExternal ? 'a' : Link;
                const props = isExternal ? { href: item.to } : { to: item.to };
                return (
                  <li key={item.name}>
                    <Component {...props} className="text-gray-600 hover:text-primary-1 transition-colors flex items-center gap-2 group">
                      <span className="w-1 h-1 rounded-full bg-primary-1 group-hover:w-3 transition-all" />
                      {item.name}
                    </Component>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Biosoftech Logo + CTA + Badge */}
          <div className="flex flex-col md:col-span-2 lg:col-span-1">
            <Link
              to="/"
              className="inline-block mb-6"
            >
              <img src={biosoftechLogo} alt="Biosoftech" className="h-5 sm:h-6 w-24 sm:w-32 object-contain" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary-1 text-white rounded-lg font-semibold hover:opacity-90 transition-all w-fit mb-4"
            >
              Get in Touch
            </Link>

          </div>
        </div>

        {/* MIDDLE ROW */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16 border-t pt-12 sm:pt-16">
          <div>
            <Link
              to="/"
              className="inline-block mb-6"
            >
              <img src={biosoftechLogo} alt="Biosoftech" className="h-5 sm:h-6 w-24 sm:w-32 object-contain" />
            </Link>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Building innovative software solutions that empower businesses to grow, adapt, and succeed in the digital world.
            </p>
          </div>
          <div>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="text-primary-1 mt-1"><FaHome /></div>
                <div>
                  <p className="font-bold text-gray-900">Head Office</p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=3rd+Floor,+Office+No-624/20A,+Kotwali+Rd,+Matiyaari,+Chinhat,+Lucknow,+Uttar+Pradesh-226028"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-600 text-sm hover:text-primary-1 transition-colors"
                  >
                    3rd Floor, Office No-624/20A, Kotwali Rd, Matiyaari, Chinhat, Lucknow, Uttar Pradesh-226028
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-primary-1"><FaEnvelope /></div>
                <a href="mailto:info@biosoftech.com" className="text-gray-600 text-sm hover:text-primary-1 transition-colors">
                  info@biosoftech.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-primary-1"><FaPhoneAlt /></div>
                <button
                  onClick={() => setCallPopup({ visible: true, number: '+91-9044425858' })}
                  className="text-gray-600 text-sm hover:text-primary-1 transition-colors text-left"
                >
                  +91-9044425858
                </button>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-primary-1"><FaPhoneAlt /></div>
                <button
                  onClick={() => setCallPopup({ visible: true, number: '+916209688930' })}
                  className="text-gray-600 text-sm hover:text-primary-1 transition-colors text-left"
                >
                  +91-6209688930
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="border-t py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            Copyright 2021-26 | Biosoftech Pvt. Ltd. All Right Reserved
          </p>
          <div className="flex gap-4">
            {socialLinks.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary-1 hover:bg-primary-1 hover:text-white transition-all transform hover:-translate-y-1"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy-policy" className="text-gray-500 hover:text-primary-1 transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-gray-500 hover:text-primary-1 transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>

        {/* Call Popup */}
        {callPopup.visible && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            onClick={() => setCallPopup({ visible: false, number: '' })}
          >
            <div
              className="bg-white rounded-2xl shadow-2xl p-8 w-[90%] max-w-sm mx-4 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setCallPopup({ visible: false, number: '' })}
                aria-label="Close popup"
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-500"
              >
                <FaTimes size={14} />
              </button>
              <h3 className="text-lg font-bold text-gray-900 mb-6">Call via</h3>
              <div className="space-y-4">
                <a
                  href={`tel:${callPopup.number}`}
                  className="flex items-center gap-4 w-full p-4 rounded-xl border border-gray-200 hover:border-primary-1 hover:bg-primary-1/5 transition-all text-left group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary-1/10 flex items-center justify-center text-primary-1 group-hover:bg-primary-1 group-hover:text-white transition-all">
                    <FaPhoneAlt size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 group-hover:text-primary-1 transition-colors">Phone Call</p>
                    <p className="text-sm text-gray-500">{callPopup.number}</p>
                  </div>
                </a>
                <a
                  href={`https://wa.me/${callPopup.number.replace('+', '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 w-full p-4 rounded-xl border border-gray-200 hover:border-green-500 hover:bg-green-50 transition-all text-left group"
                >
                  <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-600 group-hover:bg-green-500 group-hover:text-white transition-all">
                    <FaWhatsapp size={22} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 group-hover:text-green-600 transition-colors">WhatsApp</p>
                    <p className="text-sm text-gray-500">{callPopup.number}</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
