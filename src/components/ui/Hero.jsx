import Container from "./Container";

const Hero = ({
  children,
  className = "",
  containerClass = "",
  backgroundClass = "bg-[#f5f5f5]",
  backgroundImage,
  overlay,
  id,
  columns = 1,
}) => {
  const bgStyle = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center" }
    : {};

  return (
    <section
      id={id}
      className={`relative overflow-hidden ${backgroundClass} ${className}`}
      style={bgStyle}
    >
      {overlay && (
        <div className="absolute inset-0" style={overlay} />
      )}
      <div className="relative z-10">
        <Container className={containerClass}>
          {columns === 2 ? (
            <div className="grid lg:grid-cols-2 gap-section-lg items-center pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 lg:pb-16">

            </div>
          ) : (
            <div className="pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 lg:pb-16">
              {children}
            </div>
          )}
        </Container>
      </div>
    </section>
  );
};

const HeroContent = ({ children, className = "" }) => (
  <div className={`z-10 ${className}`}>{children}</div>
);

const HeroMedia = ({ children, className = "" }) => (
  <div className={`relative flex justify-center items-center ${className}`}>
    {children}
  </div>
);

Hero.Content = HeroContent;
Hero.Media = HeroMedia;

export default Hero;
