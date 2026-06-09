import consultationImg from "../../assets/consultation-form.webp";
import { ChevronDown } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID_ORG = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_ORG;
const EMAILJS_TEMPLATE_ID_USER = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_USER;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function ConsultationSection() {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

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
        owner_name: formData.fullName,
        user_email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        date_time: now,
        site_name: "Biosoftech",
      };

      const userParams = {
        owner_name: formData.fullName,
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
      setFormData({ fullName: "", phone: "", email: "", service: "", message: "" });
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
  return (
    <section className="bg-[#f5f5f5] section-py overflow-hidden">

      <div className="container-site">

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-20 items-stretch">

          {/* LEFT IMAGE - hidden on very small screens */}

          <div
            className="
relative
hidden
sm:flex
justify-center
items-center
h-[430px]
sm:h-[560px]
lg:h-[700px]
max-h-[520px]
sm:max-h-none
"
          >

            {/* BLUE SHAPE */}

            <div
              className="
              absolute
              left-0
              top-10

            w-[220px]
            sm:w-[400px]
            lg:w-[500px]
            h-[280px]
            sm:h-[500px]
            lg:h-[620px]

              bg-[#78d9f7]

              rounded-[58%_42%_56%_44%/48%_34%_66%_52%]

              -z-10
            "
            />

            {/* GREEN SHAPE */}

            <div
              className="
              absolute
              left-3
              sm:left-6
              top-16
              sm:top-20
            w-[200px]
            sm:w-[360px]
            lg:w-[450px]
            h-[260px]
            sm:h-[460px]
            lg:h-[570px]

              bg-[#89d000]

              rounded-[58%_42%_56%_44%/48%_34%_66%_52%]

              -z-10
            "
            />

            {/* IMAGE */}

            <div
              className="
              overflow-hidden

             w-[220px]
            sm:w-[400px]
            lg:w-[500px]
            h-[280px]
            sm:h-[500px]
            lg:h-[620px]

              rounded-[58%_42%_56%_44%/48%_34%_66%_52%]
            "
            >
              <img
                src={consultationImg}
                alt="Biosoftech free software consultation booking form illustration"
                width="500"
                height="620"
                className="
                w-full
                h-full
                object-cover
              "
              />
            </div>

            {/* SMALL IMAGE */}

            <div
              className="
              absolute

              bottom-4
              right-0
              sm:right-10

              overflow-hidden

              w-[100px]
              h-[80px]
              sm:w-[220px]
              sm:h-[190px]
              lg:w-[260px]
              lg:h-[220px]

              rounded-[50%]
              border-[4px]
              sm:border-[10px]
              border-white
            "
            >
              <img
                src={consultationImg}
                alt="Biosoftech consultation decorative thumbnail for booking"
                width="260"
                height="220"
                className="
                w-full
                h-full
                object-cover
              "
              />
            </div>

          </div>

          {/* RIGHT FORM */}

          <div className="
flex
flex-col
justify-center
h-auto
lg:h-[700px]
">

            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">

              <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />

              <h2
                className="
                text-2xl
                sm:text-[30px]
                lg:text-[36px]
                xl:text-[42px]
                leading-[1.1]
                font-bold
                text-[#40356b]
              "
              >
                Book a Free Software Consultation
              </h2>

            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">

              <input
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter Your Full Name*"
                required
                className="
                w-full

               h-[58px]

                rounded-md

                border border-gray-300

                px-8

                outline-none

                bg-white
                focus:border-[#06b6d4] focus:ring-2 focus:ring-[#06b6d4]/20
              "
              />

              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter Your Phone Number*"
                type="tel"
                required
                className="
                w-full

                h-[58px]

                rounded-md

                border border-gray-300

                px-8

                outline-none
                focus:border-[#06b6d4] focus:ring-2 focus:ring-[#06b6d4]/20
              "
              />

              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Your Email Address*"
                type="email"
                required
                className="
                w-full

                h-[58px]

                rounded-md

                border border-gray-300

                px-8

                outline-none
                focus:border-[#06b6d4] focus:ring-2 focus:ring-[#06b6d4]/20
              "
              />

              <div className="relative">

                <label htmlFor="consultation-service" className="sr-only">How Can We Help You?</label>
                <select
                  id="consultation-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="
                   w-full

                  h-[58px]

                  rounded-md

                  border border-gray-300

                  px-8

                  truncate

                  appearance-none
                  outline-none
                  focus:border-[#06b6d4] focus:ring-2 focus:ring-[#06b6d4]/20
                "
                >
                  <option value="">
                    How Can We Help You?*
                  </option>

                  <option value="Develop Custom Software Solutions">
                    Develop Custom Software Solutions
                  </option>

                  <option value="Build Or Upgrade My Mobile App / Website">
                    Build Or Upgrade My Mobile App / Website
                  </option>

                  <option value="Integrate AI Automation Into My Workflow">
                    Integrate AI Automation Into My Workflow
                  </option>

                  <option value="Implement Mitra Suite Products (Billing, Restro, Hotel, Skola, Tentent)">
                    Mitra Suite (Billing, Restro, Hotel, Skola, Tentent)
                  </option>

                  <option value="Healthcare / Real Estate / Hospitality Software Needs">
                    Healthcare / Real Estate / Hospitality
                  </option>

                  <option value="Cloud Integration & Data Security Services">
                    Cloud Integration & Data Security Services
                  </option>

                  <option value="Not Sure - Need Expert Guidance">
                    Not Sure - Need Expert Guidance
                  </option>

                </select>

                <ChevronDown
                  className="
                  absolute
                  right-6
                  top-1/2
                  -translate-y-1/2
                  text-gray-500
                "
                />

              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="
Share a Brief About Your Business and Requirement So We Can Suggest the Best Solution*
"
                required
                className="
                w-full

                rounded-md

                border border-gray-300

                px-8
                py-6

                resize-none
                outline-none
                focus:border-[#06b6d4] focus:ring-2 focus:ring-[#06b6d4]/20
              "
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="
                w-full
                px-10
                py-5

                bg-[#ff9b22]

                text-white

                font-bold

                rounded-md
                disabled:opacity-60 disabled:cursor-not-allowed
              "
              >
                {isSubmitting
                  ? "SENDING..."
                  : status.type === "success"
                    ? "MESSAGE SENT!"
                    : "SEND MESSAGE"}
              </button>

              {status.message && (
                <p className={`text-sm font-medium text-center ${status.type === "success" ? "text-green-600" : "text-red-600"}`}>
                  {status.message}
                </p>
              )}

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}
