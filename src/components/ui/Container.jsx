const Container = ({ children, className = "" }) => (
  <div className={`container-site ${className}`}>
    {children}
  </div>
);

export default Container;
