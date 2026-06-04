import SEO from "../components/seo/SEO";

const teamMembers = [
  {
    name: "Amit Sharma",
    role: "Founder & CEO",
    desc: "Visionary leader with 15+ years of experience in software development and business strategy.",
  },
  {
    name: "Priya Verma",
    role: "CTO",
    desc: "Expert in cloud architecture and full-stack development, driving technical innovation.",
  },
  {
    name: "Rahul Singh",
    role: "Lead Full Stack Developer",
    desc: "Specializes in React, Node.js, and scalable backend systems.",
  },
  {
    name: "Neha Gupta",
    role: "UI/UX Design Lead",
    desc: "Crafting intuitive and beautiful user experiences for web and mobile applications.",
  },
  {
    name: "Vikram Patel",
    role: "Mobile App Developer",
    desc: "Flutter and React Native expert building cross-platform mobile solutions.",
  },
  {
    name: "Sneha Mishra",
    role: "AI/ML Engineer",
    desc: "Building intelligent automation solutions using NLP, computer vision, and predictive models.",
  },
  {
    name: "Arjun Yadav",
    role: "Cloud Engineer",
    desc: "Managing AWS/Azure infrastructure, CI/CD pipelines, and cloud security.",
  },
  {
    name: "Kavita Joshi",
    role: "Business Development Manager",
    desc: "Driving client partnerships and strategic growth initiatives.",
  },
];

const Teams = () => {
  return (
    <>
      <SEO
        title="Our Team – Biosoftech Solutions"
        description="Meet the talented team behind Biosoftech Solutions. Developers, designers, engineers, and innovators working from Lucknow, India."
        keywords="Biosoftech team, software team Lucknow, developers India"
        ogUrl="https://www.biosoftech.com/teams"
      />

      {/* HERO */}
      <section className="relative bg-[#12003f] overflow-hidden py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Meet Our Team
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            The passionate people behind Biosoftech Solutions, building
            innovative software that empowers businesses worldwide.
          </p>
        </div>
      </section>

      {/* TEAM GRID */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-primary-1/20 transition-all duration-300 text-center"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#12003f] to-[#2a0a80] flex items-center justify-center text-white text-2xl font-bold mb-4">
                  {member.name.split(" ").map(n => n[0]).join("")}
                </div>
                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                <p className="text-sm text-primary-1 font-semibold mt-1">{member.role}</p>
                <p className="text-sm text-gray-600 mt-3 leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#12003f] to-[#2a0a80] py-16 sm:py-20 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Want to Join Our Team?
          </h2>
          <p className="text-white/80 text-base sm:text-lg mb-8 max-w-xl mx-auto">
            We're always looking for talented individuals. Check out our open
            positions.
          </p>
          <a
            href="/career"
            className="inline-flex items-center px-8 py-3 rounded-full bg-white text-[#12003f] font-semibold hover:bg-gray-100 transition-colors"
          >
            View Careers
          </a>
        </div>
      </section>
    </>
  );
};

export default Teams;
