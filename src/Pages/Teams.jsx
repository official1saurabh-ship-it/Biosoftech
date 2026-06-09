import SEO from "../components/seo/SEO";
import Dhananjay from "../assets/Dhananjay-Mishra.jpeg";
import Ajay from "../assets/Ajay-Tyagi.jpeg";
import Kishan from "../assets/Kishan-Prajapati.jpeg";
import Atul from "../assets/Atul-Narayan-Pandey.png";
import Saurabh from "../assets/Saurabh-Kumar-Dubey.png";
import Amulya from "../assets/Amulya-Singh.png";
import Karuna from "../assets/Karuna-Nidhan-Tiwari.jpeg";
import Fardeen from "../assets/Fardeen-Husain.webp";
const teamMembers = [
  {
    name: "Dhananjay Mishra",
    role: "CEO and FOUNDER",
    image: Dhananjay
  },
  {
    name: "Ansh Mishra",
    role: "CTO",
  },
  {
    name: "Anuj Kumar",
    role: "BUSINESS DEVELOPMENT ASSOCIATE",

  },
  {
    name: "Ajay Tyagi",
    role: "MOBILE APP DEVELOPER",
    image: Ajay
  },
  {
    name: "Kishan Prajapati",
    role: "Software Developer",
    image: Kishan
  },
  {
    name: "Atul Narayan Pandey",
    role: "Business Analyst",
    image: Atul
  },
  {
    name: "Saurabh Kumar Dubey",
    role: "Software Developer",
    image: Saurabh
  },
  {
    name: "Amulya Singh",
    role: "Human Resource (HR)",
    image: Amulya
  },
  {
    name: "Karuna Nidhan Tiwari",
    role: "Accountant",
    image: Karuna
  },
  {
    name: "Gitanjali Tiwari",
    role: "Human Resource (HR)",
  },
  {
    name: "Fardeen Husain",
    role: "Digital Marketing",
    image: Fardeen
  }
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
      <section className="relative bg-[#12003f] overflow-hidden section-py">
        <div className="container-site text-center">
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
      <section className="bg-white section-py">
        <div className="container-site">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-primary-1/20 transition-all duration-300 text-center"
              >
                {member.image ? (
                  <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-4 shrink-0">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#12003f] to-[#2a0a80] flex items-center justify-center text-white text-2xl font-bold mb-4">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </div>
                )}
                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                <p className="text-sm text-primary-1 font-semibold mt-1">{member.role}</p>
                <p className="text-sm text-gray-600 mt-3 leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#12003f] to-[#2a0a80] section-py text-center">
        <div className="container-site">
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
