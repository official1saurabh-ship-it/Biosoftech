import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Headphones,
  Home,
  Mail,
  Phone,
  Globe,
} from "lucide-react";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID_ORG = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_ORG;
const EMAILJS_TEMPLATE_ID_USER = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_USER;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

if (EMAILJS_PUBLIC_KEY) {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const serviceOptions = [
    "Visitor Management Platform",
    "Attendance Tracking Ecosystem",
    "Hospital Management Engine",
    "Smart Parking Solution",
    "Hotel Operations Platform",
    "Enterprise CRM Platform",
    "Custom ERP Architecture",
    "Sales & Billing Engine",
    "Restaurant Management Ecosystem",
    "PG Operations Platform",
    "Canteen Management Solution",
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

    const ownerParams = {
      to_email: "ansh@biosoftech.com",
      cc_email: "kishan@biosoftech.com",
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

    try {
      if (EMAILJS_TEMPLATE_ID_ORG) {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID_ORG,
          ownerParams,
          EMAILJS_PUBLIC_KEY
        );
      }

      if (EMAILJS_TEMPLATE_ID_USER) {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID_USER,
          userParams,
          EMAILJS_PUBLIC_KEY
        );
      }

      setStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully.",
      });
      setFormData({ firstName: "", lastName: "", phone: "", email: "", service: "", message: "" });
      setTimeout(() => setStatus({ type: "", message: "" }), 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const cards = [
    {
      title: "We will be in touch shortly.",
      desc:
        "Connect with Rank Digital Solution — the Best Digital Marketing Company in Lucknow for SEO, Ads & Website Development.",
    },
    {
      title: "Customer Support",
      desc:
        "Need help with your project or have queries about our services? We're just a message away — get expert assistance today!",
    },
    {
      title: "Sales & Marketing Support",
      desc:
        "Looking to grow your business online? Our marketing experts will guide you with tailored SEO and Ads strategies.",
    },
    {
      title: "Project Consultation",
      desc:
        "Planning a new digital campaign or website? Discuss your goals with our experts and get a personalized strategy.",
    },
  ];

  return (
    <>
      <section className="relative bg-[#F3F3F3] pb-12 md:pb-28">
        {/* HERO */}
        <div
          className="relative min-h-[320px] sm:min-h-[400px] md:h-[580px] overflow-hidden"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1920')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#02162F]/70" />

          <div className="relative z-10 max-w-[900px] mx-auto px-4 sm:px-6 text-center pt-20 sm:pt-24 md:pt-28">
            <h1
              className="
            text-white
            text-2xl
            sm:text-[32px]
            md:text-[42px]
            lg:text-[64px]
            font-bold
            leading-[1.15]
          "
            >
              Ready to transform your digital presence?
              Contact us today!
            </h1>

            <p
              className="
            text-white/85
            text-sm
            sm:text-base
            md:text-lg
            mt-4
            sm:mt-6
            md:mt-8
            leading-[1.8]
            md:leading-[2]
            max-w-[850px]
            mx-auto
          "
            >
              At Rank Digital Solution, we help businesses unlock
              their full online potential through powerful digital
              marketing strategies, expert SEO, and high-performing
              ad campaigns.
            </p>

            <button
              className="
            mt-6
            sm:mt-8
            md:mt-12
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
        max-w-[1180px]
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
            <div className="p-4 sm:p-6 md:p-10 lg:p-14">
              <h2
                className="
              text-2xl
              sm:text-[28px]
              md:text-[34px]
              lg:text-[48px]
              font-bold
            "
              >
                Send us a message
              </h2>

              <p
                className="
              mt-3
              sm:mt-4
              md:mt-5
              text-[#777]
              text-sm
              sm:text-base
              md:text-lg
              leading-[1.7]
              md:leading-[1.9]
              max-w-[650px]
            "
              >
                Have a question or need assistance?
                Send us a message and our team will get
                back to you shortly.
              </p>

              <form ref={formRef} onSubmit={handleSubmit} className="mt-6 sm:mt-8 md:mt-10 space-y-4 sm:space-y-5 md:space-y-6">
                <div className="grid md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-1.5">
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
                    w-full h-[48px] sm:h-[52px] px-3 sm:px-4
                    bg-gray-50 border border-gray-300
                    rounded-xl
                    text-gray-900 placeholder-gray-400
                    outline-none
                    focus:border-[#06b6d4] focus:ring-2 focus:ring-[#06b6d4]/20
                    transition-all duration-200 text-sm sm:text-base
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
                    w-full h-[48px] sm:h-[52px] px-3 sm:px-4
                    bg-gray-50 border border-gray-300
                    rounded-xl
                    text-gray-900 placeholder-gray-400
                    outline-none
                    focus:border-[#06b6d4] focus:ring-2 focus:ring-[#06b6d4]/20
                    transition-all duration-200 text-sm sm:text-base
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
                    w-full h-[48px] sm:h-[52px] px-3 sm:px-4
                    bg-gray-50 border border-gray-300
                    rounded-xl
                    text-gray-900 placeholder-gray-400
                    outline-none
                    focus:border-[#06b6d4] focus:ring-2 focus:ring-[#06b6d4]/20
                    transition-all duration-200 text-sm sm:text-base
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
                    w-full h-[48px] sm:h-[52px] px-3 sm:px-4
                    bg-gray-50 border border-gray-300
                    rounded-xl
                    text-gray-900 placeholder-gray-400
                    outline-none
                    focus:border-[#06b6d4] focus:ring-2 focus:ring-[#06b6d4]/20
                    transition-all duration-200 text-sm sm:text-base
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
                    w-full h-[48px] sm:h-[52px] px-3 sm:px-4 pr-8 sm:pr-10
                    bg-gray-50 border border-gray-300
                    rounded-xl
                    text-gray-900
                    outline-none appearance-none cursor-pointer
                    focus:border-[#06b6d4] focus:ring-2 focus:ring-[#06b6d4]/20
                    transition-all duration-200 text-sm sm:text-base
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
                  w-full px-3 sm:px-4 py-3 sm:py-4
                  bg-gray-50 border border-gray-300
                    rounded-xl
                    text-gray-900 placeholder-gray-400
                    outline-none resize-none
                    focus:border-[#06b6d4] focus:ring-2 focus:ring-[#06b6d4]/20
                    transition-all duration-200 text-sm sm:text-base
                  "
                    style={{ minHeight: "120px" }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="
                w-full h-[48px] sm:h-[54px]
                rounded-xl
                font-bold text-sm sm:text-base
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
                    className={`text-sm font-medium text-center ${
                      status.type === "success" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {status.message}
                  </p>
                )}
              </form>
            </div>

            {/* RIGHT */}
            <div className="min-h-[300px] sm:min-h-[400px] lg:min-h-[800px]">
              <iframe
                title="map"
                className="w-full h-full"
                loading="lazy"
                src="https://maps.google.com/maps?q=Lucknow&t=&z=12&ie=UTF8&iwloc=&output=embed"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F5F5] py-10 md:py-20">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16">
            {/* LEFT */}
            <div>
              <h1
                className="
              text-[36px]
              md:text-[48px]
              lg:text-[58px]
              leading-[1.1]
              font-bold
              text-black
            "
              >
                We will be in touch shortly.
              </h1>

              <p
                className="
              mt-6
              md:mt-8
              text-[20px]
              md:text-[26px]
              leading-[1.5]
              md:leading-[1.7]
              text-[#232323]
              max-w-[820px]
            "
              >
                Connect With The Best Digital Marketing Company in Lucknow
                for SEO, Ads & Website Development
              </p>

              <div className="grid sm:grid-cols-2 gap-5 mt-10 md:mt-12">
                {cards.map((item, index) => (
                  <div
                    key={index}
                    className="
                  bg-[#ECECF6]
                  px-6
                  md:px-10
                  py-8
                  md:py-12
                  text-center
                  min-h-[350px]
                  md:min-h-[420px]
                  flex
                  flex-col
                  items-center
                "
                  >
                    <Headphones
                      size={56}
                      md:size={72}
                      strokeWidth={2.4}
                      className="mb-6 md:mb-8 text-black"
                    />

                    <h3
                      className="
                    text-[18px]
                    md:text-[22px]
                    font-bold
                    leading-[1.4]
                  "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                    mt-4
                    md:mt-6
                    text-[16px]
                    md:text-[18px]
                    text-[#2B2B2B]
                    leading-[1.6]
                    md:leading-[1.8]
                    flex-1
                  "
                    >
                      {item.desc}
                    </p>

                    <button
                      className="
                    mt-6
                    md:mt-8
                    w-[130px]
                    md:w-[150px]
                    h-[48px]
                    md:h-[54px]
                    bg-[#261F58]
                    text-white
                    font-semibold
                    text-[18px]
                    md:text-[22px]
                  "
                    >
                      Chat Now
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div
              className="
            bg-white
            shadow-[0_10px_30px_rgba(0,0,0,.18)]
            h-fit
          "
            >
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1400"
                className="w-full h-[250px] md:h-[320px] object-cover"
                alt="building"
              />

              <div className="px-6 py-6 md:px-8 md:py-8">
                <h2
                  className="
                text-[48px]
                md:text-[66px]
                font-bold
                leading-none
              "
                >
                  Get in touch
                </h2>

                <div className="space-y-8 md:space-y-10 mt-8 md:mt-10">
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
                        "+91 62096 88930\n+91 90444 25858",
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
                        size={32}
                        md:size={42}
                        strokeWidth={2}
                        className="shrink-0"
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
                        text-[#8B8B8B]
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
