import { motion } from "framer-motion";

const SectionTitle = ({ subtitle, title, description, align = "left", className = "" }) => {
  const alignmentClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col mb-10 ${alignmentClass} ${className}`}
    >
      {subtitle && (
        <span className="text-primary-1 font-bold tracking-widest uppercase text-sm mb-2">{subtitle}</span>
      )}
      {title && (
        <h2 className="text-fluid-4xl font-bold text-gray-900 leading-tight mb-4">{title}</h2>
      )}
      {description && (
        <p className="text-gray-600 max-w-2xl text-lg">{description}</p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
