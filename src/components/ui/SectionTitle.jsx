import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ subtitle, title, description, align = 'left', className = '' }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const alignmentClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <motion.div 
      className={`flex flex-col mb-10 ${alignmentClass} ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {subtitle && (
        <motion.span 
          variants={itemVariants}
          className="text-primary-1 font-bold tracking-widest uppercase text-sm mb-2"
        >
          {subtitle}
        </motion.span>
      )}
      {title && (
        <motion.h2 
          variants={itemVariants}
          className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      )}
      {description && (
        <motion.p 
          variants={itemVariants}
          className="text-gray-600 max-w-2xl text-lg"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
