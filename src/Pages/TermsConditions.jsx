import React, { useEffect } from "react";
import SEO from "../components/seo/SEO";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const sections = [
  {
    id: "company-information",
    title: "1. Company Information",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed text-lg">
          <strong>Biosoftech Solutions Pvt. Ltd.</strong>
          <br />
          3rd Floor, Office No. 624F/20A, Kotwali Road, Opp. Om Saran Private ITI, Matiyari, Chinhat, Kanchanpur, Lucknow, Uttar Pradesh – 226028, India
        </p>
        <p className="text-gray-700 leading-relaxed text-lg">
          <em>Email:</em> <a href="mailto:info@biosoftech.com" className="text-[#3793DB] hover:underline">info@biosoftech.com</a>
          <br />
          <em>Phone:</em> +91 6209688930
        </p>
      </div>
    ),
  },
  {
    id: "acceptance-of-terms",
    title: "2. Acceptance of Terms",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed text-lg">
          By accessing our website, purchasing our products, or using our services, you acknowledge that you have read, understood, and agreed to these Terms and Conditions.
        </p>
      </div>
    ),
  },
  {
    id: "services",
    title: "3. Services",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed text-lg">
          Biosoftech Solutions Pvt. Ltd. provides software development, billing software, ERP solutions, website development, mobile application development, digital marketing, automation solutions, cloud services, IT consulting, and related technology services.
        </p>
        <p className="text-gray-700 leading-relaxed text-lg">
          We reserve the right to modify, suspend, or discontinue any service without prior notice.
        </p>
      </div>
    ),
  },
  {
    id: "user-responsibilities",
    title: "4. User Responsibilities",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed text-lg">
          Users agree to:
        </p>
        <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
          <li>Provide accurate and complete information when required.</li>
          <li>Use our services only for lawful purposes.</li>
          <li>Not engage in any activity that may disrupt or interfere with our services.</li>
          <li>Maintain the confidentiality of login credentials and account information.</li>
          <li>Comply with all applicable laws and regulations.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "intellectual-property-rights",
    title: "5. Intellectual Property Rights",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed text-lg">
          All content, software, source code, designs, logos, trademarks, graphics, documents, and materials provided by Biosoftech Solutions Pvt. Ltd. are the exclusive property of the company unless otherwise stated.
        </p>
        <p className="text-gray-700 leading-relaxed text-lg">
          Users may not:
        </p>
        <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
          <li>Copy, reproduce, distribute, or modify any content without written permission.</li>
          <li>Reverse engineer, decompile, or attempt to extract source code from our software.</li>
          <li>Use our trademarks, logos, or branding without authorization.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "payments-and-billing",
    title: "6. Payments and Billing",
    content: (
      <div className="space-y-6">
        <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
          <li>All payments must be made according to the agreed pricing and payment schedule.</li>
          <li>Fees paid for software licenses, development services, subscriptions, or consulting services are generally non-refundable unless otherwise specified in writing.</li>
          <li>Delayed payments may result in suspension of services.</li>
          <li>Applicable taxes, including GST, shall be charged as per Indian laws.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "project-delivery",
    title: "7. Project Delivery",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed text-lg">
          For software development, website development, and custom projects:
        </p>
        <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
          <li>Project timelines are estimates and may vary depending on client requirements and approvals.</li>
          <li>Clients are responsible for providing necessary content, information, and feedback on time.</li>
          <li>Delays caused by the client may affect project delivery schedules.</li>
          <li>Additional features beyond the agreed scope may incur additional charges.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "software-licensing",
    title: "8. Software Licensing",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed text-lg">
          Where software licenses are provided:
        </p>
        <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
          <li>The license grants a limited, non-exclusive, non-transferable right to use the software.</li>
          <li>Ownership of the software remains with Biosoftech Solutions Pvt. Ltd.</li>
          <li>Unauthorized resale, distribution, modification, or duplication is prohibited.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "data-privacy",
    title: "9. Data Privacy",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed text-lg">
          We are committed to protecting your data and privacy. Collection and use of personal information are governed by our Privacy Policy.
        </p>
        <p className="text-gray-700 leading-relaxed text-lg">
          Users are responsible for ensuring that the information they provide is lawful and accurate.
        </p>
      </div>
    ),
  },
  {
    id: "third-party-services",
    title: "10. Third-Party Services",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed text-lg">
          Our services may integrate with third-party platforms, APIs, payment gateways, hosting providers, or software solutions.
        </p>
        <p className="text-gray-700 leading-relaxed text-lg">
          We are not responsible for:
        </p>
        <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
          <li>Third-party service interruptions.</li>
          <li>Changes in third-party policies.</li>
          <li>Losses resulting from third-party service failures.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "limitation-of-liability",
    title: "11. Limitation of Liability",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed text-lg">
          To the maximum extent permitted by law, Biosoftech Solutions Pvt. Ltd. shall not be liable for:
        </p>
        <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
          <li>Indirect or consequential damages.</li>
          <li>Loss of profits, business opportunities, or data.</li>
          <li>Service interruptions caused by technical issues, force majeure events, cyber-attacks, or third-party failures.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed text-lg">
          Our total liability shall not exceed the amount paid by the client for the specific service giving rise to the claim.
        </p>
      </div>
    ),
  },
  {
    id: "warranty-disclaimer",
    title: "12. Warranty Disclaimer",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed text-lg">
          All services and software are provided on an "as is" and "as available" basis.
        </p>
        <p className="text-gray-700 leading-relaxed text-lg">
          We do not guarantee:
        </p>
        <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
          <li>Uninterrupted operation.</li>
          <li>Error-free performance.</li>
          <li>Compatibility with all third-party systems.</li>
          <li>Specific business outcomes or financial results.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "termination",
    title: "13. Termination",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed text-lg">
          We reserve the right to suspend or terminate access to our services if:
        </p>
        <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
          <li>These Terms are violated.</li>
          <li>Fraudulent or unlawful activity is detected.</li>
          <li>Payments remain overdue.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed text-lg">
          Termination does not relieve the user of outstanding payment obligations.
        </p>
      </div>
    ),
  },
  {
    id: "indemnification",
    title: "14. Indemnification",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed text-lg">
          Users agree to indemnify and hold harmless Biosoftech Solutions Pvt. Ltd., its directors, employees, partners, and affiliates from any claims, damages, liabilities, or expenses arising from misuse of services or violation of these Terms.
        </p>
      </div>
    ),
  },
  {
    id: "force-majeure",
    title: "15. Force Majeure",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed text-lg">
          Biosoftech Solutions Pvt. Ltd. shall not be liable for delays or failures resulting from events beyond reasonable control, including natural disasters, government actions, internet outages, cyber incidents, labor disputes, or other unforeseen circumstances.
        </p>
      </div>
    ),
  },
  {
    id: "governing-law-and-jurisdiction",
    title: "16. Governing Law and Jurisdiction",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed text-lg">
          These Terms and Conditions shall be governed by and interpreted in accordance with the laws of India.
        </p>
        <p className="text-gray-700 leading-relaxed text-lg">
          Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts located in Lucknow, Uttar Pradesh, India.
        </p>
      </div>
    ),
  },
  {
    id: "changes-to-terms",
    title: "17. Changes to Terms",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed text-lg">
          We reserve the right to update or modify these Terms and Conditions at any time. Updated versions will be posted on our website with the revised effective date.
        </p>
        <p className="text-gray-700 leading-relaxed text-lg">
          Continued use of our services after changes are posted constitutes acceptance of the updated Terms.
        </p>
      </div>
    ),
  },
  {
    id: "contact-information",
    title: "18. Contact Information",
    content: (
      <div className="space-y-6 text-gray-700 text-lg">
        <p>For any questions regarding these Terms and Conditions, please contact:</p>
        <p>
          <strong>Biosoftech Solutions Pvt. Ltd.</strong>
          <br />
          3rd Floor, Office No. 624F/20A, Kotwali Road, Opp. Om Saran Private ITI, Matiyari, Chinhat, Kanchanpur, Lucknow, Uttar Pradesh – 226028, India
        </p>
        <p>
          <em>Email:</em> <a href="mailto:info@biosoftech.com" className="text-[#3793DB] hover:underline">info@biosoftech.com</a>
          <br />
          <em>Phone:</em> +91 6209688930
          <br />
          <em>Website:</em> <a href="http://www.biosoftech.com" target="_blank" rel="noreferrer" className="text-[#3793DB] hover:underline">www.biosoftech.com</a>
        </p>
      </div>
    ),
  },
];

export default function TermsConditions() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-20 sm:pt-24 md:pt-28">
      <SEO
        title="Terms and Conditions – Biosoftech Solutions"
        description="Read the Terms and Conditions of Biosoftech Solutions governing the use of our website and services."
        keywords="terms and conditions, Biosoftech, terms of service, legal"
        ogUrl="https://www.biosoftech.com/terms-conditions"
      />

      <section className="bg-[#f8faff] py-16 md:py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-500 mb-4">Effective Date: 05-06-2026</p>
          <h1 className="text-fluid-5xl font-bold text-[#09090F] mb-6">
            Terms and Conditions
          </h1>
          <p className="text-fluid-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Welcome to Biosoftech Solutions Pvt. Ltd. By accessing or using our website, products, software, services, and solutions, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, please refrain from using our services.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

            <aside className="lg:w-1/4 lg:sticky lg:top-32 h-fit space-y-10">
              <div>
                <h3 className="text-2xl font-bold text-[#09090F] uppercase tracking-wider mb-6">
                  Biosoftech
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Biosoftech Solutions is committed to delivering high-quality software solutions while maintaining transparency and trust with our clients.
                </p>
              </div>

              <div className="border-t border-gray-100 pt-8">
                <h4 className="text-xl font-bold text-[#09090F] uppercase tracking-wider mb-6">
                  Useful Topics
                </h4>
                <nav className="flex flex-col space-y-4">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="text-[#3793DB] font-semibold hover:text-[#2c76af] transition-colors text-base inline-flex items-center gap-2"
                    >
                      <ChevronRight size={14} />
                      {section.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            <div className="lg:w-3/4 space-y-20">
              {sections.map((section) => (
                <div key={section.id} id={section.id} className="scroll-mt-32">
                  <h2 className="text-fluid-3xl font-bold text-[#3793DB] mb-8">
                    {section.title}
                  </h2>
                  <div className="content">
                    {section.content}
                  </div>
                </div>
              ))}

              <div className="pt-12 border-t border-gray-100">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <p className="text-gray-600 text-lg">
                    Go Back To Home
                  </p>
                  <button
                    onClick={() => navigate("/")}
                    className="inline-flex items-center gap-2 bg-[#3793DB] hover:bg-[#2c76af] text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg shadow-blue-100"
                  >
                    Home <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
