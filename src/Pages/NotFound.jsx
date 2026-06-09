import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SEO from "../components/seo/SEO";
import StructuredData from "../components/seo/StructuredData";

const NotFound = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <>
      <SEO
        title="404 - Page Not Found | Biosoftech"
        description="The page you are looking for might have been moved, deleted, or never existed. Return to Biosoftech home page or contact us for assistance."
        keywords="404, page not found, error page"
        canonical="https://www.biosoftech.com/404"
      />
      <StructuredData type="custom" data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "404 - Page Not Found",
        "description": "The page you are looking for does not exist.",
      }} />

      <section
        className="flex-1 flex items-center justify-center bg-white px-4 py-16 md:py-20"
        aria-label="404 Page Not Found"
      >
        <div className="max-w-[600px] mx-auto text-center">
          <div
            className={`transition-all duration-700 ease-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h1
              className="text-[120px] sm:text-[180px] md:text-[220px] lg:text-[260px] font-black leading-none select-none"
              style={{
                background: "linear-gradient(135deg, #A249ED, #836ceb, #f28541)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              aria-hidden="true"
            >
              404
            </h1>
          </div>

          <div
            className={`transition-all duration-700 delay-200 ease-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-bold text-gray-900 mt-[-10px] sm:mt-[-16px]">
              Oops! Page Not Found
            </h2>

            <p className="text-fluid-base sm:text-[18px] text-gray-500 mt-4 sm:mt-6 leading-relaxed max-w-[480px] mx-auto">
              The page you are looking for might have been moved, deleted, or never existed.
            </p>
          </div>

          <div
            className={`transition-all duration-700 delay-400 ease-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 sm:mt-10">
              <button
                onClick={() => navigate("/")}
                className="w-full sm:w-auto h-[50px] sm:h-[56px] px-8 sm:px-10 bg-[#2E57FF] text-white text-fluid-base font-semibold rounded-lg hover:scale-[1.03] transition-all duration-300 min-h-[44px]"
              >
                Back to Home
              </button>

              <button
                onClick={() => navigate("/contact")}
                className="w-full sm:w-auto h-[50px] sm:h-[56px] px-8 sm:px-10 border-2 border-gray-300 text-gray-700 text-fluid-base font-semibold rounded-lg hover:border-[#2E57FF] hover:text-[#2E57FF] hover:scale-[1.03] transition-all duration-300 min-h-[44px]"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
