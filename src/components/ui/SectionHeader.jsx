const SectionHeader = ({
  label,
  title,
  description,
  titleClassName = "",
  labelClassName = "",
  descriptionClassName = "",
  center = true,
}) => (
  <div className={`mb-8 sm:mb-10 lg:mb-14 ${center ? "text-center" : ""}`}>
    {label && (
      <p className={`font-bold mb-2 sm:mb-3 ${labelClassName}`}>
        {label}
      </p>
    )}
    {title && (
      <h2 className={`text-fluid-h2 font-black leading-tight ${titleClassName}`}>
        {title}
      </h2>
    )}
    {description && (
      <p className={`mt-3 sm:mt-4 text-fluid-base text-gray-600 max-w-3xl ${center ? "mx-auto" : ""} ${descriptionClassName}`}>
        {description}
      </p>
    )}
  </div>
);

export default SectionHeader;
