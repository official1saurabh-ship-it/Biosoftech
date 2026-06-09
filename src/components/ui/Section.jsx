import Container from "./Container";

const Section = ({
  children,
  className = "",
  containerClass = "",
  backgroundClass = "",
  id,
  as: Tag = "section",
}) => (
  <Tag id={id} className={`section-py ${backgroundClass} ${className}`}>
    <Container className={containerClass}>
      {children}
    </Container>
  </Tag>
);

const SectionInner = ({ children, className = "" }) => (
  <div className={className}>{children}</div>
);

Section.Inner = SectionInner;

export default Section;
