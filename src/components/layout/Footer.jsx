import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaTwitter, FaHome, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const socialLinks = [
  { Icon: FaFacebookF, href: 'https://www.facebook.com/biosoftechsoftwaresolutions', label: 'Facebook' },
  { Icon: FaLinkedinIn, href: 'https://www.linkedin.com/company/biosoftechsoftwaresolutions/', label: 'LinkedIn' },
  { Icon: FaInstagram, href: 'https://www.instagram.com/biosoftechsoftwaresolutions/', label: 'Instagram' },
  { Icon: FaYoutube, href: 'https://www.biosoftech.com', label: 'Biosoftech Website' },
  { Icon: FaTwitter, href: 'https://x.com/biosoftech', label: 'X' },
];

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-12 mb-16">
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
              {['About Us', 'Blog', 'Career', 'Our Teams', 'Testimonials', 'Faqs', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-primary-1 transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-primary-1 group-hover:w-3 transition-all" />
                    {item}
                  </a>
                </li>
              ))}
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
                  <p className="text-gray-600 text-sm">3rd Floor, Office No-624/20A, Kotwali Rd, Matiyaari, Chinhat, Lucknow, Uttar Pradesh-226028</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="text-primary-1"><FaEnvelope /></div>
                <p className="text-gray-600 text-sm">info@biosoftech.com</p>
              </li>
              <li className="flex items-center gap-4">
                <div className="text-primary-1"><FaPhoneAlt /></div>
                <p className="text-gray-600 text-sm">+91-9044425858</p>
              </li>
              <li className="flex items-center gap-4">
                <div className="text-primary-1"><FaPhoneAlt /></div>
                <p className="text-gray-600 text-sm">+91-6209688930</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t py-8 text-center text-gray-500 text-sm">
          <p>Copyright 2021-26 | Biosoftech Pvt. Ltd. All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
