import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    id: 1,
    question: "1. What services does Biosoftech Solutions offer?",
    answer:
      "Biosoftech Solutions provides end-to-end IT services including custom software development, web and mobile app design, cloud solutions, AI automation, and specialized industry products. Our offerings are designed to deliver scalable, secure, and SEO-friendly digital solutions that help businesses grow efficiently.",
  },
  {
    id: 2,
    question: "2. Which industries do you serve?",
    answer:
      "We serve diverse industries such as healthcare, education, retail, hospitality, finance, and manufacturing. Each solution is tailored to meet industry-specific challenges, ensuring compliance, scalability, and measurable outcomes. Our cross-domain expertise allows us to deliver innovative solutions across multiple business verticals.",
  },
  {
    id: 3,
    question: "3. How does your development process work?",
    answer:
      "Our AI-driven development process follows six structured stages: requirement analysis, data preparation, model development, testing, deployment, and maintenance. This ensures accuracy, scalability, and long-term success. Each stage is transparent, collaborative, and aligned with your business goals for maximum efficiency.",
  },
  {
    id: 4,
    question: "4. How much does a typical project cost?",
    answer:
      "Project costs depend on scope, complexity, and technology stack. We offer flexible pricing models including fixed, hourly, and package-based options. Our transparent approach ensures you know exactly what you're paying for, with no hidden charges or unexpected expenses.",
  },
  {
    id: 5,
    question: "5. How long does it take to build a software product?",
    answer:
      "Timelines vary by project size and features. A minimum viable product (MVP) can be delivered in 6-12 weeks, while enterprise-level solutions may take longer. We prioritize speed without compromising quality, ensuring timely delivery aligned with your business objectives.",
  },
  {
    id: 6,
    question: "6. Do you provide post-launch support and maintenance?",
    answer:
      "Yes, we provide 24/7 support, updates, and optimization after launch. Our maintenance services include bug fixes, performance monitoring, security patches, and feature enhancements. This ensures your solution evolves with changing business needs and remains reliable long-term.",
  },
  {
    id: 7,
    question: "7. Will my project idea remain confidential?",
    answer:
      "Absolutely. We sign non-disclosure agreements (NDAs) and follow strict security protocols to protect your intellectual property. Confidentiality is a priority, and all project details remain secure throughout development, ensuring your ideas are safe from unauthorized access or misuse.",
  },
  {
    id: 8,
    question: "8. What technologies and frameworks do you use?",
    answer:
      "We use modern stacks including React, Angular, Node.js, Python, .NET, Flutter, Kotlin, Salesforce, AWS, Azure, and AI/ML frameworks. Our technology choices are based on scalability, performance, and SEO-friendly architecture to ensure long-term business success.",
  },
  {
    id: 9,
    question: "9. How can I get started with Biosoftech Solutions?",
    answer:
      "Getting started is simple. Contact us for a consultation, share your requirements, and we'll design a tailored roadmap. From proposal to deployment, our team ensures smooth onboarding, transparent communication, and solutions aligned with your business goals.",
  },
  {
    id: 10,
    question: "10. Why choose Biosoftech over other IT companies?",
    answer:
      "With 2+ years of expertise, 15+ projects delivered, and a client-centric approach, Biosoftech combines innovation, scalability, and security. Our SEO-driven solutions, industry knowledge, and dedicated support make us a trusted partner for businesses seeking digital transformation.",
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
    <section id="faq" className="bg-white py-12 sm:py-16">
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
