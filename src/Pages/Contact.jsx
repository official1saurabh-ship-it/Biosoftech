import SEO from "../components/seo/SEO";
import StructuredData from "../components/seo/StructuredData";
import React, { useState, useRef, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import emailjs from "@emailjs/browser";
import {
  Headphones,
  Home,
  Mail,
  Phone,
  Globe,
} from "lucide-react";
import contact from "../assets/contactimage.jpg"

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID_ORG = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_ORG;
const EMAILJS_TEMPLATE_ID_USER = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_USER;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const [searchParams] = useSearchParams();
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    service: searchParams.get("service") || "",
    message: "",
  });

  const serviceOptions = [
    "Develop Custom Software Solutions",
    "Build Or Upgrade My Mobile App / Website",
    "Integrate AI Automation Into My Workflow",
    "Implement Mitra Suite Products (Billing, Restro, Hotel, Skola, Tentent)",
    "Healthcare / Real Estate / Hospitality Software Needs",
    "Cloud Integration & Data Security Services",
    "Not Sure – Need Expert Guidance",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      if (!EMAILJS_SERVICE_ID || !EMAILJS_PUBLIC_KEY) {
        throw new Error("Email service not configured properly. Please contact support.");
      }

      const ownerParams = {
        to_email: "ansh@biosoftech.com",
        owner_name: `${formData.firstName} ${formData.lastName}`,
        first_name: formData.firstName,
        last_name: formData.lastName,
        user_email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        date_time: now,
        site_name: "Biosoftech",
      };

      const userParams = {
        owner_name: formData.firstName,
        user_email: formData.email,
        site_name: "Biosoftech",
        company_name: "Biosoftech Solutions",
        support_email: "info@biosoftech.com",
        to_email: formData.email,
      };

      if (EMAILJS_TEMPLATE_ID_ORG) {
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID_ORG, ownerParams, { publicKey: EMAILJS_PUBLIC_KEY });
      }

      if (EMAILJS_TEMPLATE_ID_USER) {
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID_USER, userParams, { publicKey: EMAILJS_PUBLIC_KEY });
      }

      setStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully.",
      });
      setFormData({ firstName: "", lastName: "", phone: "", email: "", service: "", message: "" });
      setTimeout(() => setStatus({ type: "", message: "" }), 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      const errorMsg = error?.text || error?.message || "Something went wrong. Please try again or contact us directly.";
      setStatus({
        type: "error",
        message: errorMsg,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const cards = [
    {
      title: "We will be in touch shortly.",
      desc:
        "Connect with Biosoftech Solutions — your trusted technology partner in India for web, mobile, desktop, cloud, AI automation, and industry-specific software systems.",
    },
    {
      title: "Customer Support",
      desc:
        "Need help with your project or have queries about our solutions? Our support team is always ready to assist you with expert guidance.",
    },
    {
      title: "Project Consultation",
      desc:
        "Planning a new system or software upgrade? Discuss your goals with our experts and get a personalized strategy tailored to your industry.",
    },
  ];

  return (
    <>
      <SEO
        title="Contact Us | Biosoftech - Ready to Transform Your Business?"
        description="Get in touch with Biosoftech for customer support, project consultation, or to transform your business. Call us at +91-9044425858, email info@biosoftech.com, or visit our headquarters. Fill out our contact form to send us a message."
        keywords="Contact Biosoftech, Get in touch, Customer Support, Project Consultation, Biosoftech Headquarters, Biosoftech Phone Number, Biosoftech Email, Software Development Company Contact"
        ogTitle="Contact Us | Biosoftech"
        ogDescription="We will be in touch shortly. Contact Biosoftech for expert digital solutions and consultation. Ready to transform your business? Send us a message or visit our office."
        canonical="https://www.biosoftech.com/contact"
        ogUrl="https://www.biosoftech.com/contact"
      />
      <StructuredData type="custom" data={{
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "mainEntity": {
          "@type": "Organization",
          "name": "Biosoftech Solutions",
          "url": "www.biosoftech.com",
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "+91-9044425858",
              "contactType": "customer service"
            },
            {
              "@type": "ContactPoint",
              "email": "info@biosoftech.com",
              "contactType": "sales"
            }
          ]
        }
      }} />
      <section aria-label="Contact us hero banner" className="relative bg-[#F3F3F3] pb-16 md:pb-44">
        {/* HERO */}
        <div
          className="relative min-h-[320px] sm:min-h-[400px] md:min-h-[520px] lg:min-h-[480px] overflow-hidden"
          style={{
            backgroundImage:
              `url(${contact})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#02162F]/70" />

          <div className="relative z-10 max-w-[900px] mx-auto px-4 sm:px-6 text-center pt-16 sm:pt-20 md:pt-24">
            <h1
              className="
            text-white
            text-fluid-h1
            font-bold
          "
            >
              Ready to Transform Your Business?
            </h1>

            <p
              className="
            text-white/85
            text-fluid-base
            mt-4
            sm:mt-6
            md:mt-8
            leading-[1.8]
            md:leading-relaxed
            max-w-[850px]
            mx-auto
          "
            >
              At Biosoftech Solutions, we help businesses unlock their full
              potential through powerful software development, automation,
              and industry-specific solutions. Whether you're building your
              system from scratch or scaling to new heights, our team ensures
              measurable results and lasting growth.
            </p>
            <p
              className="
            text-white/85
            text-fluid-base
            mt-4
            leading-[1.8]
            md:leading-relaxed
            max-w-[850px]
            mx-auto
          "
            >
              From web development and mobile applications to desktop software,
              cloud services, AI automation, and management systems for schools,
              hotels, restaurants, billing, and pathology labs — we deliver
              technology that drives efficiency and success.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-6 sm:mt-8 md:mt-10">
              <span className="bg-white/15 text-white px-4 py-2 rounded-full text-sm font-medium">Free Consultation</span>
              <span className="bg-white/15 text-white px-4 py-2 rounded-full text-sm font-medium">After-Sales Services</span>
              <span className="bg-white/15 text-white px-4 py-2 rounded-full text-sm font-medium">24/7 Support</span>
            </div>
            <button
              onClick={() => formRef.current?.scrollIntoView({ behavior: "smooth" })}
              className="
            mt-4
            sm:mt-6
            md:mt-8
            bg-[#2E57FF]
            text-white
            h-[50px]
            sm:h-[60px]
            md:h-[72px]
            px-6
            sm:px-8
            md:px-12
            rounded-lg
            text-sm
            sm:text-base
            md:text-lg
            font-semibold
            hover:scale-[1.03]
            duration-300
          "
            >
              Free Consultation
            </button>
          </div>
        </div>

        {/* CONTACT CARD */}
        <div
          className="
        relative
        z-20
        max-w-7xl
        mx-auto
        -mt-[40px]
        sm:-mt-[60px]
        md:-mt-[120px]
        px-3
        sm:px-4
        md:px-6
      "
        >
          <div
            className="
          bg-white
          shadow-[0_20px_60px_rgba(0,0,0,.15)]
          overflow-hidden
          grid
          lg:grid-cols-[1fr_560px]
        "
          >
            {/* LEFT */}
            <div className="p-4 sm:p-5 md:p-8 lg:p-10">
              <h2
                className="
              text-xl
              sm:text-[24px]
              md:text-[28px]
              lg:text-[36px]
              font-bold
            "
              >
                Send us a message
              </h2>

              <p
                className="
              mt-2
              sm:mt-3
              md:mt-4
              text-[#555]
              text-sm
              sm:text-base
              leading-[1.5]
              md:leading-[1.6]
              max-w-[650px]
            "
              >
                Have a question or need assistance?
                Send us a message and our team will get
                back to you shortly.
              </p>

              <form ref={formRef} onSubmit={handleSubmit} className="mt-4 sm:mt-5 md:mt-6 space-y-3 sm:space-y-4">
                <div className="grid md:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First Name"
                      autoComplete="given-name"
                      required
                      className="
                    w-full h-[40px] sm:h-[44px] px-3 sm:px-4
                    bg-gray-50 border border-gray-300
                    rounded-xl
                    text-gray-900 placeholder-gray-400
                    outline-none
                    focus:border-[#06b6d4] focus:ring-2 focus:ring-[#06b6d4]/20
                    transition-all duration-200 text-fluid-base
                  "
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name"
                      autoComplete="family-name"
                      required
                      className="
                    w-full h-[40px] sm:h-[44px] px-3 sm:px-4
                    bg-gray-50 border border-gray-300
                    rounded-xl
                    text-gray-900 placeholder-gray-400
                    outline-none
                    focus:border-[#06b6d4] focus:ring-2 focus:ring-[#06b6d4]/20
                    transition-all duration-200 text-fluid-base
                  "
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone"
                      autoComplete="tel"
                      required
                      className="
                    w-full h-[40px] sm:h-[44px] px-3 sm:px-4
                    bg-gray-50 border border-gray-300
                    rounded-xl
                    text-gray-900 placeholder-gray-400
                    outline-none
                    focus:border-[#06b6d4] focus:ring-2 focus:ring-[#06b6d4]/20
                    transition-all duration-200 text-fluid-base
                  "
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      autoComplete="email"
                      required
                      className="
                    w-full h-[40px] sm:h-[44px] px-3 sm:px-4
                    bg-gray-50 border border-gray-300
                    rounded-xl
                    text-gray-900 placeholder-gray-400
                    outline-none
                    focus:border-[#06b6d4] focus:ring-2 focus:ring-[#06b6d4]/20
                    transition-all duration-200 text-fluid-base
                  "
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Service <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="
                    w-full h-[40px] sm:h-[44px] px-3 sm:px-4 pr-8 sm:pr-10
                    bg-gray-50 border border-gray-300
                    rounded-xl
                    text-gray-900
                    outline-none appearance-none cursor-pointer
                    focus:border-[#06b6d4] focus:ring-2 focus:ring-[#06b6d4]/20
                    transition-all duration-200 text-fluid-base
                  "
                    >
                      <option value="" disabled>Select Service</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                    <svg
                      className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 text-gray-500 pointer-events-none"
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    required
                    className="
                  w-full px-3 sm:px-4 py-2 sm:py-3
                  bg-gray-50 border border-gray-300
                    rounded-xl
                    text-gray-900 placeholder-gray-400
                    outline-none resize-none
                    focus:border-[#06b6d4] focus:ring-2 focus:ring-[#06b6d4]/20
                    transition-all duration-200 text-fluid-base
                  "
                    style={{ minHeight: "80px" }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="
                  w-full h-[40px] sm:h-[44px]
                rounded-xl
                font-bold text-fluid-base
                text-white
                bg-gradient-to-r from-[#06b6d4] to-[#3b82f6]
                hover:brightness-110
                transition-all duration-300
                disabled:opacity-60 disabled:cursor-not-allowed
                flex items-center justify-center gap-2
              "
                >
                  {isSubmitting
                    ? "Sending..."
                    : status.type === "success"
                      ? "Message Sent!"
                      : "Send Message →"}
                </button>

                {status.message && (
                  <p
                    className={`text-sm font-medium text-center ${status.type === "success" ? "text-green-600" : "text-red-600"
                      }`}
                  >
                    {status.message}
                  </p>
                )}
              </form>
            </div>

            {/* RIGHT */}
            <div className="relative min-h-[250px] sm:min-h-[300px] lg:min-h-[400px] flex flex-col">
              <div className="relative flex-1 overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                <iframe
                  title="Biosoftech Location"
                  className="absolute inset-0 w-full h-full z-10"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=81.0291113%2C26.8697931%2C81.0491113%2C26.8897931&amp;layer=mapnik&amp;marker=26.8797931%2C81.0391113"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/70 to-transparent p-4 sm:p-5 md:p-6 pt-12">
                  <p className="text-white text-fluid-base font-medium leading-relaxed">
                    3rd Floor, Office No-624F/20A, Kotwali Rd, Matiyari, Chinhat, Lucknow, Uttar Pradesh-226028
                  </p>
                  <a
                    href="https://www.google.com/maps/dir//Biosoftech+Software+Solutions,+3rd+Floor,+Office+No,+624F%2F20A,+Kotwali+Rd,+opp.+Om+Saran+Private+ITI,+Matiyari,+Chinhat,+Lucknow,+Uttar+Pradesh+226028"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-2 sm:mt-3 text-white/90 hover:text-white text-sm font-semibold underline underline-offset-2 transition"
                  >
                    Get Directions ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F5F5] section-py">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-section-lg">
            {/* LEFT */}
            <div className="min-w-0">
              <h2
                className="
              text-fluid-h1
              font-bold
              text-black
            "
              >
                We will be in touch shortly.
              </h2>

              <p
                className="
              mt-6 md:mt-8
              text-fluid-lg
              leading-[1.5] md:leading-[1.7]
              text-[#232323]
              max-w-[820px]
            "
              >
                Connect with Biosoftech Solutions — your trusted technology
                partner in India for web, mobile, desktop, cloud, AI automation,
                and industry-specific software systems.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-10 md:mt-12">
                {cards.map((item, index) => (
                  <div
                    key={index}
                    className="
                  bg-[#ECECF6]
                  px-3
                  sm:px-6
                  md:px-10
                  py-6
                  sm:py-8
                  md:py-12
                  text-center
                  min-h-[250px]
                  sm:min-h-[350px]
                  md:min-h-[420px]
                  flex
                  flex-col
                  items-center
                "
                  >
                    <Headphones
                      size={56}
                      strokeWidth={2.4}
                      className="md:w-[72px] md:h-[72px] mb-6 md:mb-8 text-black"
                    />

                    <h3
                      className="
                    text-fluid-h3
                    font-bold
                  "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                    mt-4 md:mt-6
                    text-fluid-base
                    text-[#2B2B2B]
                    leading-[1.6] md:leading-[1.8]
                    flex-1
                  "
                    >
                      {item.desc}
                    </p>


                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div
              className="
            bg-white
            shadow-[0_10px_30px_rgba(0,0,0,.18)]
          
          "
            >
              <div className="flex justify-center p-4">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=700"
                  alt="building"
                  className="
      w-[600px]
      md:w-[400px]
      h-[80px]
      md:h-[120px]
      object-cover
      rounded-lg
    "
                />
              </div>

              <div className="px-5 py-3 md:px-6 md:py-4">
                <h2
                  className="
                text-[24px]
                sm:text-[28px]
                md:text-[36px]
                font-bold
                leading-none
              "
                >
                  Get in touch
                </h2>

                <div className="space-y-3 md:space-y-4 mt-3 md:mt-4">
                  {[
                    {
                      icon: Home,
                      title: "Headquarter",
                      value:
                        "3rd Floor, Office No-624F/20A, Kotwali Rd, Matiyari, Chinhat, Lucknow, Uttar Pradesh-226028",
                    },
                    {
                      icon: Mail,
                      title: "Email us",
                      value:
                        "info@biosoftech.com",
                    },
                    {
                      icon: Phone,
                      title: "Click Us",
                      value:
                        "+91-9044425858\n+91-6209688930",
                    },
                    {
                      icon: Globe,
                      title: "Our Website",
                      value:
                        "www.biosoftech.com",
                    },
                  ].map((info, i) => (
                    <div
                      key={i}
                      className="flex gap-4 md:gap-5"
                    >
                      <info.icon
                        size={24}
                        strokeWidth={2}
                        className="sm:w-[32px] sm:h-[32px] md:w-[42px] md:h-[42px] shrink-0"
                      />

                      <div>
                        <h4
                          className="
                        text-[18px]
                        md:text-[22px]
                        font-bold
                      "
                        >
                          {info.title}
                        </h4>

                        <p
                          className="
                        mt-3
                        md:mt-4
                        text-[#5B5B5B]
                        text-[16px]
                        md:text-[18px]
                        leading-[1.6]
                        md:leading-[1.8]
                        whitespace-pre-line
                      "
                        >
                          {info.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
