import { ArrowRight } from "lucide-react";
import {
  motion,
  useInView,
} from "framer-motion";

import { useRef } from "react";

import advertiser from "../../assets/Advertiser.png";
import publisher from "../../assets/Publisher.png";
import affiliate from "../../assets/Affliate.png";

const cards = [
  {
    title: "7SEARCHPPC ADVERTISER",
    label: "Advertise:",
    description:
      "Leverage our self-serve business advertising platform exactly the way you need!",

    features: [
      "Captivating Ad Formats",
      "Multiple Bidding Models",
      "Quick Campaign Approval",
      "Complete Transparency",
      "24×7 Client Support",
    ],

    image: advertiser,

    reverse: false,
  },

  {
    title: "7SEARCHPPC PUBLISHER",

    label: "Monetize:",

    description:
      "Monetize effortlessly with publisher platform and start earning!",

    features: [
      "Captivating Ad Formats",
      "Easy & On-time Payouts",
      "Minimal Monetization Terms",
      "Complete Transparency",
      "24×7 Client Support",
    ],

    image: publisher,

    reverse: true,
  },

  {
    title: "7SEARCHPPC AFFILIATE PROGRAM",

    label: "Earn:",

    description:
      "Earn with affiliate program. No website or business required!",

    features: [
      "Mutual Reward System",
      "No Participation Fee",
      "Lifetime Commissions",
      "Complete Transparency",
      "24×7 Client Support",
    ],

    image: affiliate,

    reverse: false,
  },
];

export default function AdNetworkSection() {
  return (
    <section className="bg-[#f7f4fb]">

      <div className="max-w-[1500px] mx-auto px-8 py-20">

        <div className="flex justify-between mb-20">

          <div>

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
              AD NETWORK
            </span>

            <h2
              className="
              mt-5
              text-[72px]
              font-black
              leading-none
              "
            >
              Our Flagship Advertising
              <br />
              network - 7SearchPPC
            </h2>

          </div>

          <button
            className="
  group
  mt-6
  relative
  flex
  items-center
"
          >

            {/* TEXT */}

            <span
              className="
    relative
    z-10

    border
    border-purple-400

    px-10
    py-5

    rounded-full

    text-purple-500
    font-bold

    transition-all
    duration-700
    ease-[cubic-bezier(0.22,1,0.36,1)]

    group-hover:translate-x-[72px]
    "
            >
              Visit Now
            </span>

            {/* ICON */}

            <span
              className="
    relative

    -ml-3

    bg-[#a657ff]

    w-16
    h-16

    rounded-full

    flex
    items-center
    justify-center

    text-white

    transition-all
    duration-700
    ease-[cubic-bezier(0.22,1,0.36,1)]

    group-hover:-translate-x-[170px]
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

          </button>

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

  const visible = useInView(
    ref,
    {
      once: false,
      amount: 0.45,
    }
  );

  const offset =
    reverse
      ? 220
      : -220;

  return (

    <motion.div
      ref={ref}

      initial={false}

      animate={{
        x: visible
          ? 0
          : offset,
      }}

      transition={{
        duration: 1.5,
        ease: [0.22, 1, 0.36, 1],
      }}

      className={`
grid
lg:grid-cols-2
gap-16
mb-36
items-center

${reverse
          ? "lg:[&>*:first-child]:order-2"
          : ""
        }
`}
    >

      {/* LEFT */}

      <div>

        <h3
          className="
text-center
text-[54px]
font-black
mb-10
"
        >
          {title}
        </h3>

        <div className="flex gap-8">

          <span className="text-gray-500">
            {label}
          </span>

          <p
            className="
text-[24px]
max-w-[650px]
"
          >
            {description}
          </p>

        </div>

        <hr className="my-10" />

        <div className="flex gap-8">

          <span className="text-gray-500">
            Features:
          </span>

          <ul className="space-y-5">

            {features.map((f) => (
              <li
                key={f}
                className="
flex
gap-5
text-[24px]
"
              >

                <span className="text-purple-500">
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
"
      >

        <motion.img
          src={image}

          whileHover={{
            scale: 1.05,
          }}

          transition={{
            duration: .7,
          }}

          className="
w-full
"
        />

        <div
          className="
absolute
inset-0

flex
justify-center
items-center

opacity-0

group-hover:opacity-100

transition

duration-500
"
        >

          <div
            className="
w-[170px]
h-[170px]

rounded-full

bg-[#ff6b2d]

border-[8px]
border-white

text-white

flex
flex-col

justify-center
items-center

rotate-[-18deg]
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
              Read more
            </p>

            <ArrowRight
              size={56}
            />

            <p>
              Read more
            </p>

          </div>

        </div>

      </div>

    </motion.div>

  );
}