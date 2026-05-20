import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaArrowUp } from 'react-icons/fa';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

const Pricing = () => {
  const plans = [
    {
      name: "SEO",
      image: "https://via.placeholder.com/300x200?text=SEO+Plan",
      features: [
        "Comprehensive SEO Audit",
        "Competitor Analysis",
        "Keyword Research & Optimization",
        "On-Page Optimization",
        "Google Tools Setup",
        "Basic Link Building",
        "Detailed Monthly Reports"
      ],
      color: "border-primary-1"
    },
    {
      name: "SMO",
      image: "https://via.placeholder.com/300x200?text=SMO+Plan",
      features: [
        "Social Media Profile Setup",
        "Platform Strategy Development",
        "Basic Engagement & Management",
        "Content Creation (10 Posts/Month)",
        "Social Media Analytics",
        "Hashtag & Trend Monitoring",
        "Monthly Performance Reports"
      ],
      color: "border-secondary-1"
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-primary-1/5 -z-10 rounded-l-[100px]" />
      
      <div className="container mx-auto px-4">
        <SectionTitle 
          subtitle="POCKET-FRIENDLY"
          title='Plans That <span class="text-primary-1">Suit Your Business</span>'
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`bg-white rounded-[40px] shadow-2xl overflow-hidden border-b-8 ${plan.color} group`}
            >
              <div className="p-10 flex flex-col items-center text-center">
                <div className="text-sm font-bold tracking-widest text-primary-1 mb-4 flex items-center gap-4">
                  <div className="w-10 h-[1px] bg-primary-1" />
                  {plan.name}
                  <div className="w-10 h-[1px] bg-primary-1" />
                </div>
                
                <div className="mb-8 rounded-2xl overflow-hidden shadow-lg">
                  <img src={plan.image} alt={plan.name} className="w-full h-auto group-hover:scale-110 transition-transform duration-500" />
                </div>

                <ul className="space-y-4 mb-10 w-full">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-600 font-medium">
                      <FaShieldAlt className="text-primary-1 shrink-0" />
                      <span className="text-left text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="outline" className="w-full group-hover:bg-primary-1 group-hover:text-white">
                  Get Quote
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Button variant="primary" className="px-10 py-5 text-lg group">
            Get Started <FaArrowUp className="group-hover:-translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
