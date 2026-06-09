import { useState } from "react";
import SEO from "../components/seo/SEO";
import careerVideo from "../assets/career-video.mp4";

const categories = ["All", "Development", "Design", "AI/ML", "Cloud", "Sales"];

const openings = [
  {
    title: "Full Stack Developer",
    category: "Development",
    type: "Full-Time",
    location: "Lucknow, UP",
    desc: "Build and maintain scalable web applications using React, Node.js, and cloud platforms. Experience with MongoDB, PostgreSQL, and REST APIs required.",
  },
  {
    title: "Mobile App Developer (Flutter)",
    category: "Development",
    type: "Full-Time",
    location: "Lucknow, UP",
    desc: "Develop cross-platform mobile applications using Flutter. Knowledge of Firebase, REST APIs, and app store deployment processes is a must.",
  },
  {
    title: "UI/UX Designer",
    category: "Design",
    type: "Full-Time",
    location: "Lucknow, UP",
    desc: "Design intuitive user interfaces and experiences for web and mobile applications. Proficiency in Figma, Adobe XD, and design systems required.",
  },
  {
    title: "Python Developer (AI/ML)",
    category: "AI/ML",
    type: "Full-Time",
    location: "Lucknow, UP",
    desc: "Work on AI automation projects involving NLP, computer vision, and predictive modeling. Strong skills in Python, TensorFlow, and FastAPI required.",
  },
  {
    title: "Cloud Engineer",
    category: "Cloud",
    type: "Full-Time",
    location: "Lucknow, UP",
    desc: "Manage and optimize cloud infrastructure on AWS/Azure/GCP. Experience with Docker, Kubernetes, CI/CD pipelines, and cloud security practices required.",
  },
  {
    title: "Business Development Executive",
    category: "Sales",
    type: "Full-Time",
    location: "Lucknow, UP",
    desc: "Drive client acquisition and partnership growth in software services. Strong communication skills and experience in IT sales required.",
  },
];

const perks = [
  {
    title: "Flexible Work Hours",
    desc: "We trust our team to manage their time effectively with flexible schedules and remote-friendly policies.",
  },
  {
    title: "Learning & Growth",
    desc: "Access to paid courses, certifications, and workshops to keep your skills sharp and career growing.",
  },
  {
    title: "Health Coverage",
    desc: "Comprehensive health insurance plans to keep you and your family covered.",
  },
  {
    title: "Team Culture",
    desc: "Regular team outings, hackathons, and a collaborative work environment that values every voice.",
  },
];

const Career = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredOpenings = activeCategory === "All" ? openings : openings.filter(job => job.category === activeCategory);

  return (
    <>
      <SEO
        title="Careers – Join the Biosoftech Solutions Team"
        description="Explore career opportunities at Biosoftech Solutions. We're hiring developers, designers, engineers, and sales professionals in Lucknow, India."
        keywords="careers at Biosoftech, software jobs Lucknow, developer jobs, IT careers India"
        ogUrl="https://www.biosoftech.com/career"
      />

      {/* HERO */}
      <section className="relative bg-[#12003f] overflow-hidden min-h-[clamp(400px,70vh,700px)]">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src={careerVideo} type="video/mp4" />
        </video>
        <a
          href="#openings"
          className="absolute bottom-8 right-[5vw] z-10 px-8 py-3 rounded-full bg-white text-[#12003f] font-semibold hover:bg-gray-100 transition-colors"
        >
          View Open Positions
        </a>
      </section>

      {/* WHY JOIN US */}
      <section className="bg-white section-py">
        <div className="container-site">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Why Work at Biosoftech?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We believe in creating an environment where innovation thrives,
            ideas matter, and every team member makes an impact.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk) => (
              <div
                key={perk.title}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-primary-1/20 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{perk.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPENINGS */}
      <section id="openings" className="bg-gray-50 section-py">
        <div className="container-site">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Current Openings
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Explore our open positions and take the next step in your career.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-[#12003f] text-white"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-[#12003f]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="space-y-4">
            {filteredOpenings.map((job) => (
              <div
                key={job.title}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-primary-1/30 hover:shadow-md transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 mt-2 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                        {job.type}
                      </span>
                      <span>{job.location}</span>
                    </div>
                  </div>
                  <a
                    href={`mailto:info@biosoftech.com?subject=Application for ${encodeURIComponent(job.title)}`}
                    className="inline-flex items-center px-5 py-2.5 rounded-full bg-primary-1 text-white text-sm font-semibold hover:opacity-90 transition-all shrink-0"
                  >
                    Apply Now
                  </a>
                </div>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">{job.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#12003f] to-[#2a0a80] py-12 sm:py-16 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Don't See the Right Role?
          </h2>
          <p className="text-white/80 text-base sm:text-lg mb-8 max-w-xl mx-auto">
            We're always on the lookout for great talent. Send us your resume
            and we'll keep you in mind for future opportunities.
          </p>
          <a
            href="mailto:info@biosoftech.com?subject=General Application - Biosoftech Careers"
            className="inline-flex items-center px-8 py-3 rounded-full bg-white text-[#12003f] font-semibold hover:bg-gray-100 transition-colors"
          >
            Send Your Resume
          </a>
        </div>
      </section>
    </>
  );
};

export default Career;
