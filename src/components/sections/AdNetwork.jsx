import { ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import advertiser from "../../assets/adnetwork-partner.png";
import publisher from "../../assets/adnetwork-publisher.png";
import affiliate from "../../assets/adnetwork-affiliate.webp";

const WEBSITE_URL = "https://www.biosoftech.com";

const cards = [
  {
    title: "Partner With Biosoftech",
    label: "Grow:",
    description:
      "Join our partner program and unlock new earning opportunities by promoting innovative software solutions. No prior setup is required - just share, connect, and start building revenue streams.",

    features: [
      "Zero Setup Cost - Begin instantly without investment.",
      "Recurring Rewards - Earn from every client you refer.",
      "Transparent Dashboard - Track growth with clear analytics.",
      "Dedicated Support Team - Get expert help whenever you need.",
    ],

    image: advertiser,

    reverse: false,
  },

  {
    title: "Biosoftech Affiliate Program",

    label: "Earn:",

    description:
      "Our affiliate program helps you monetize your network by connecting businesses with our custom software and AI automation tools. Earn commissions while empowering companies to grow digitally.",

    features: [
      "Instant Signup - Start earning right away.",
      "High Commission Rates - Maximize profits with every referral.",
      "Lifetime Earnings - Keep earning as long as clients stay.",
      "Global Access - Promote solutions across industries worldwide.",
    ],

    image: publisher,

    reverse: true,
  },

  {
    title: "Biosoftech Rewards Network",

    label: "Share:",

    description:
      "With our rewards network, you can generate income by introducing businesses to our Mitra Suite and enterprise solutions. It's simple, transparent, and designed for long-term growth.",

    features: [
      "Flexible Earnings - Choose how and when you earn.",
      "Performance Bonuses - Extra rewards for top partners.",
      "Seamless Integration - Easy tools to share and promote.",
      "24x7 Assistance - Always-on support for smooth operations.",
    ],

    image: affiliate,

    reverse: false,
  },
];

export default function AdNetworkSection() {
  return (
    <section className="bg-[#f7f4fb] overflow-hidden">

      <div className="container-site section-py-sm">

        <div className="flex flex-col lg:flex-row lg:justify-between gap-6 mb-6 lg:mb-8">

          <div className="max-w-6xl">

            <span
              className="
              px-5
              py-2
              rounded-full
              bg-[#f0e5ff]
              text-[#8f42f8]
              text-sm
              "
            >
              DIGITAL SOLUTIONS NETWORK
            </span>

            <h2
              className="
              mt-3
              text-[22px]
              sm:text-[28px]
              md:text-[36px]
              lg:text-[44px]
              xl:text-[48px]
              font-black
              leading-[1.08]
              lg:leading-none
              "
            >
              Our Flagship Digital Solutions
              <br />
              Network - Biosoftech
            </h2>

          </div>

          <Link
            to="/contact"
            aria-label="Visit our flagship solutions page"
            className="
  group
  mt-6
  relative
  inline-flex
  items-center
  self-start
"
          >

            <span
              className="
    relative
    z-10

    border
    border-purple-400

    px-5
    sm:px-7
    py-3
    sm:py-4

    rounded-full

    text-purple-500
    font-bold

    transition-all
    duration-700
    ease-[cubic-bezier(0.22,1,0.36,1)]

    lg:group-hover:translate-x-[72px]
    "
            >
              Visit Now
            </span>

            <span
              className="
    relative

    -ml-3

    bg-[#a657ff]

    w-10
    h-10
    sm:w-12
    sm:h-12

    rounded-full

    flex
    items-center
    justify-center

    text-white

    transition-all
    duration-700
    ease-[cubic-bezier(0.22,1,0.36,1)]

    lg:group-hover:-translate-x-[170px]
  "
            >

              <ArrowRight
                className="
      transition-all
      duration-700
      ease-[cubic-bezier(0.22,1,0.36,1)]

      group-hover:rotate-[-45deg]
    "
              />

            </span>

          </Link>

        </div>

        {cards.map((card) => (

          <Card
            key={card.title}
            {...card}
          />

        ))}

      </div>

    </section>
  );
}

function Card({
  title,
  label,
  description,
  features,
  image,
  reverse,
}) {

  const ref = useRef();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const handleChange = () => setIsDesktop(mediaQuery.matches);

    handleChange();
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const visible = useInView(
    ref,
    {
      once: false,
      amount: 0.1,
    }
  );

  const offsetValue = isDesktop ? 220 : 30;
  const offset = reverse ? offsetValue : -offsetValue;

  return (

    <motion.div
      ref={ref}

      initial={{ x: offset, opacity: 0 }}

      animate={{
        x: visible ? 0 : offset,
        opacity: visible ? 1 : 0,
      }}

      transition={{
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      }}

      className={`
grid
lg:grid-cols-2
gap-8
sm:gap-10
lg:gap-16
mb-6
sm:mb-8
lg:mb-10
items-center
overflow-hidden

${reverse
          ? "lg:[&>*:first-child]:order-2"
          : ""
        }
`}
    >

      {/* LEFT */}

      <div className="min-w-0">

        <h3
          className="
text-center
text-[20px]
sm:text-[24px]
md:text-[30px]
lg:text-[36px]
xl:text-[40px]
font-black
        mb-2
        lg:mb-4
"
        >
          {title}
        </h3>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">

          <span className="text-gray-500 text-sm sm:text-base">
            {label}
          </span>

          <p
            className="
text-sm
sm:text-base
lg:text-[18px]
max-w-[650px]
leading-relaxed
"
          >
            {description}
          </p>

        </div>

        <hr className="my-4 lg:my-6" />

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">

          <span className="text-gray-500 text-sm sm:text-base">
            Features:
          </span>

          <ul className="space-y-3">

            {features.map((f) => (
              <li
                key={f}
                className="
flex
gap-5
text-sm
sm:text-base
lg:text-[18px]
leading-relaxed
"
              >

                <span className="text-purple-500 shrink-0">
                  •
                </span>

                {f}

              </li>
            ))}

          </ul>

        </div>

      </div>

      {/* IMAGE */}

      <div
        className="
group
relative
overflow-hidden
rounded-[24px]
lg:rounded-none
max-w-[620px]
mx-auto
lg:max-w-none
cursor-pointer
"
      >

        <motion.img
          src={image}
          alt={title}
          width="620"
          height="460"

          whileHover={{
            scale: 1.05,
          }}

          transition={{
            duration: .7,
          }}

          className="
w-full
max-h-[260px]
sm:max-h-[340px]
lg:max-h-none
object-contain
"
        />

        <div
          className={`
absolute
inset-0

flex
justify-center
items-center

transition-all
duration-500
ease-in-out

${!isDesktop
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 group-hover:opacity-100 group-active:opacity-100 pointer-events-none group-hover:pointer-events-auto group-active:pointer-events-auto"
            }
`}
        >

          <Link
            to="/contact"
            aria-label="Learn more about this digital solution"
            className="
w-[90px]
h-[90px]
lg:w-[120px]
lg:h-[120px]

rounded-full

bg-[#ff6b2d]

border-[6px]
border-white

text-white

flex
flex-col

justify-center
items-center

rotate-[-18deg]
scale-75
sm:scale-90
lg:scale-100
"
          >

            <div
              className="
absolute
inset-3

rounded-full

border

border-dashed
border-white
"
            />

            <p>
              Learn More
            </p>

            <ArrowRight
              size={36}
            />

            <p>
              Learn More
            </p>

          </Link>

        </div>

      </div>

    </motion.div>

  );
}
