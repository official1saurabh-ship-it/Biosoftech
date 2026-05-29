import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaTwitter, FaHome, FaEnvelope, FaPhoneAlt, FaWhatsapp, FaTimes } from 'react-icons/fa';

const socialLinks = [
  { Icon: FaFacebookF, href: 'https://www.facebook.com/biosoftechsoftwaresolutions', label: 'Facebook' },
  { Icon: FaLinkedinIn, href: 'https://www.linkedin.com/company/biosoftechsoftwaresolutions/', label: 'LinkedIn' },
  { Icon: FaInstagram, href: 'https://www.instagram.com/biosoftechsoftwaresolutions/', label: 'Instagram' },
  { Icon: FaYoutube, href: 'https://www.biosoftech.com', label: 'Biosoftech Website' },
  { Icon: FaTwitter, href: 'https://x.com/biosoftech', label: 'X' },
];

const Footer = () => {
  const [callPopup, setCallPopup] = useState({ visible: false, number: '' });

  return (
    <footer className="bg-gray-50 pt-12 sm:pt-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-12 mb-12 sm:mb-16">
          {/* Company Info */}
          <div>
            <a
              href="https://www.biosoftech.com"
              target="_blank"
              rel="noreferrer"
              className="inline-block text-3xl font-bold text-primary-1 mb-8"
            >
              Logelite
            </a>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We are a team of 100+ professionals with more than 10 years of experience in delivering digital marketing and WordPress solutions. Don't believe it? See it for yourself!
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
          </div>

          {/* Quick Menu */}
          <div>
            <h4 className="text-xl font-bold mb-8 relative inline-block">
              Quick Menu
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary-1 rounded-full" />
            </h4>
            <ul className="space-y-4">
              {[
                { name: 'About Us', to: '/about' },
                { name: 'Blog', to: '/blog' },
                { name: 'Career', to: '#' },
                { name: 'Our Teams', to: '#' },
                { name: 'Testimonials', to: '#' },
                { name: 'Faqs', to: '#' },
                { name: 'Contact Us', to: '/contact' },
              ].map((item) => {
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

          {/* Useful Links */}
          <div>
            <h4 className="text-xl font-bold mb-8 relative inline-block">
              Useful links
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary-1 rounded-full" />
            </h4>
            <ul className="space-y-4">
              {['Enquiry', 'Paid Advertising', 'SEO', 'SMO', 'Web Development', 'Privacy Policy', 'Terms & Conditions'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-primary-1 transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-primary-1 group-hover:w-3 transition-all" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-xl font-bold mb-8 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary-1 rounded-full" />
            </h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
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
              </li>
              <li className="flex items-center gap-4">
                <div className="text-primary-1"><FaEnvelope /></div>
                <a href="mailto:info@biosoftech.com" className="text-gray-600 text-sm hover:text-primary-1 transition-colors">
                  info@biosoftech.com
                </a>
              </li>
              <li className="flex items-center gap-4">
                <div className="text-primary-1"><FaPhoneAlt /></div>
                <button
                  onClick={() => setCallPopup({ visible: true, number: '+919044425858' })}
                  className="text-gray-600 text-sm hover:text-primary-1 transition-colors text-left"
                >
                  +91-9044425858
                </button>
              </li>
              <li className="flex items-center gap-4">
                <div className="text-primary-1"><FaPhoneAlt /></div>
                <button
                  onClick={() => setCallPopup({ visible: true, number: '+916209688930' })}
                  className="text-gray-600 text-sm hover:text-primary-1 transition-colors text-left"
                >
                  +91-6209688930
                </button>
              </li>
            </ul>
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

        <div className="border-t py-8 text-center text-gray-500 text-sm">
          <p>Copyright 2021-26 | Biosoftech Pvt. Ltd. All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
