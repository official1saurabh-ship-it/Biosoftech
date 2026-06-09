import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Store, Hotel, School, Building2 } from 'lucide-react';

const products = [
  {
    name: "Restro Mitra",
    desc: "Complete Restaurant Management System with POS, Inventory, and Table Management.",
    icon: <Store className="text-4xl text-orange-500" />,
    link: "https://restaurants.biosoftech.in/"
  },
  {
    name: "Hotel Mitra",
    desc: "Seamless Hotel Booking and Management System for properties of all sizes.",
    icon: <Hotel className="text-4xl text-blue-500" />,
    link: "https://hotel.biosoftech.in/"
  },
  {
    name: "Skola Mitra",
    desc: "All-in-one School Management System for administrators, teachers, and parents.",
    icon: <School className="text-4xl text-purple-500" />,
    link: "https://school.biosoftech.in/"
  },
  {
    name: "Billing Mitra",
    desc: "GST-compliant Sales and Billing System for retail and wholesale businesses.",
    icon: <Building2 className="text-4xl text-green-500" />,
    link: "https://billing.biosoftech.in/signin"
  }
];

const MitraSuite = () => {
  const navigate = useNavigate();
  return (
    <section className="section-py bg-white overflow-hidden">
      <div className="container-site">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-8 sm:mb-12 md:mb-16 gap-4 sm:gap-6 md:gap-8">
          <div className="max-w-2xl">
            <h2 className="text-fluid-h1 font-black text-[#09090F] mb-3 sm:mb-4 md:mb-6">
              The <span className="text-purple-600">Mitra Suite</span>
            </h2>
            <p className="text-fluid-lg text-gray-600">
              Industry-specific software solutions designed to simplify operations and boost productivity for your business.
            </p>
          </div>
          <button onClick={() => navigate("/contact")} className="px-6 sm:px-8 md:px-10 py-3 md:py-4 bg-[#09090F] text-white rounded-full font-bold uppercase tracking-widest hover:bg-purple-600 transition-all text-[11px] sm:text-xs md:text-sm whitespace-nowrap self-start lg:self-auto min-h-[44px]">
            View All Products
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {products.map((product, index) => (
            <motion.a 
              href={product.link}
              target="_blank"
              rel="noreferrer"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 sm:p-6 md:p-8 lg:p-10 bg-gray-50 rounded-[3rem] border border-gray-100 hover:bg-white hover:shadow-2xl hover:border-transparent transition-all"
            >
              <div className="mb-8 transform group-hover:scale-110 transition-transform">
                {product.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{product.name}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{product.desc}</p>
              <div className="text-purple-600 font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                Try it now <span>&rarr;</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MitraSuite;
