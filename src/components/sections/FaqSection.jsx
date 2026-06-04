import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    id: 1,
    question: "What services does Biosoftech Solutions offer?",
    answer:
      "Biosoftech Solutions provides end-to-end software development services including custom software development, web development, mobile app development (Android & iOS), cloud services (AWS, Azure, GCP), AI & automation solutions, and our specialized Mitra Suite products for billing, restaurants, hotels, schools, and tenant management.",
  },
  {
    id: 2,
    question: "Which industries do you serve?",
    answer:
      "We serve a wide range of industries including healthcare, real estate, hospitality, education, retail, logistics, and finance. Our solutions are tailored to meet the unique requirements of each sector, helping businesses streamline operations and drive digital transformation.",
  },
  {
    id: 3,
    question: "How does your development process work?",
    answer:
      "Our development process follows a proven methodology: requirement analysis, planning & architecture, design (UI/UX), development with agile sprints, rigorous QA testing, deployment, and ongoing support. We maintain transparent communication throughout and deliver milestones on schedule.",
  },
  {
    id: 4,
    question: "How much does a typical project cost?",
    answer:
      "Project costs vary based on complexity, features, technology stack, and timeline. We offer flexible engagement models — fixed-price for well-defined projects and dedicated team models for ongoing work. Contact us with your requirements for a free, no-obligation estimate.",
  },
  {
    id: 5,
    question: "How long does it take to build a software product?",
    answer:
      "Timelines depend on project scope. A simple MVP can be delivered in 4–6 weeks, while larger enterprise solutions may take 3–6 months or more. We provide a detailed timeline after understanding your requirements during the initial consultation.",
  },
  {
    id: 6,
    question: "Do you provide post-launch support and maintenance?",
    answer:
      "Yes, we offer comprehensive post-launch support and maintenance services including bug fixes, feature updates, performance monitoring, security patches, and server management. Our 24x7 technical support ensures your applications run smoothly at all times.",
  },
  {
    id: 7,
    question: "Will my project idea remain confidential?",
    answer:
      "Absolutely. We sign a Non-Disclosure Agreement (NDA) before starting any project to protect your intellectual property. Your idea, code, and business data remain strictly confidential throughout our engagement and beyond.",
  },
  {
    id: 8,
    question: "What technologies and frameworks do you use?",
    answer:
      "We work with modern technologies including React, Next.js, Node.js, Python, PHP, Laravel, Flutter, React Native, Swift, Kotlin, AWS, Azure, Google Cloud, Docker, Kubernetes, and various AI/ML frameworks. We select the best tech stack based on your project's specific needs.",
  },
  {
    id: 9,
    question: "How can I get started with Biosoftech Solutions?",
    answer:
      "Getting started is simple — reach out to us via phone at +91-9044425858 or +91-6209688930, email us at info@biosoftech.com, or fill out the contact form on our website. We'll schedule a free consultation to understand your requirements and provide a tailored solution.",
  },
];

const FaqSection = () => {
  const [open, setOpen] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const toggle = (id) => {
    setOpen(open === id ? null : id);
  };

  const visibleFaqs = showAll ? faqData : faqData.slice(0, 5);

  return (
    <section id="faq" className="bg-white py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Everything you need to know about Biosoftech Solutions. Cant find the answer youre looking for? Feel free to{" "}
          <a href="mailto:info@biosoftech.com" className="text-primary-1 underline hover:no-underline">
            contact us
          </a>.
        </p>

        <div className="space-y-4">
          {visibleFaqs.map((faq) => {
            const isOpen = open === faq.id;
            return (
              <div
                key={faq.id}
                className={`border rounded-2xl transition-all duration-300 ${
                  isOpen
                    ? "border-primary-1 shadow-lg shadow-primary-1/10"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-base sm:text-lg font-semibold text-gray-900 pr-2">
                    {faq.question}
                  </span>
                  <span
                    className={`min-w-[32px] h-[32px] rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "bg-primary-1 text-white"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-400 ${
                    isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-6 pb-5 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {!showAll && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-primary-1 text-primary-1 font-semibold hover:bg-primary-1 hover:text-white transition-all duration-300"
            >
              <Plus size={20} />
              View More FAQs
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FaqSection;
