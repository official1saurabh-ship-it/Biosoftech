import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const ImageCard = ({ src, className = "" }) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <div
            className={`
        relative
        overflow-hidden
        rounded-[24px]
        ${className}
      `}
        >
            {/* Loader */}
            {!loaded && (
                <div
                    className="
            absolute
            inset-0
            animate-pulse
            bg-gradient-to-r
            from-gray-200
            via-gray-100
            to-gray-200
          "
                />
            )}

            {/* Image */}
            <img
                src={src}
                alt=""
                onLoad={() => setLoaded(true)}
                className={`
          w-full
          h-full
          object-cover
          transition
          duration-700
          ${loaded
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-105"
                    }
        `}
            />
        </div>
    );
};

const AppDevelopment = () => {
    // 1. Rename 'active' states to be unique
    const [activeStep, setActiveStep] = useState(0);
    const [activeTechTab, setActiveTechTab] = useState("FRONTEND");
    const [active, setActive] = useState(0);
    const [open, setOpen] = useState("01");

    const process = [
        { id: 1, title: "CLIENT IDEA", desc: "We build a user story by asking questions.", img: "/process/client.png" },
        { id: 2, title: "BUSINESS ANALYSIS", desc: "We refer to the pieces as code development guidelines.", img: "/process/analysis.png" },
        { id: 3, title: "DESIGN PROTOTYPE", desc: "We deploy wireframes to find issues before they develop.", img: "/process/design.png" },
        { id: 4, title: "UI DESIGN", desc: "We improve the appearance of elements till you're satisfied.", img: "/process/ui.png" },
        { id: 5, title: "APP DEVELOPMENT", desc: "Our technique for iterative programming improves with each stage.", img: "/process/dev.png" },
        { id: 6, title: "BETA RELEASE", desc: "We developed a tiny group of users to test the app.", img: "/process/beta.png" },
        { id: 7, title: "APP STORE LAUNCH", desc: "The fresh application is available for download.", img: "/process/store.png" },
        { id: 8, title: "POST DELIVERY SUPPORT", desc: "Complete support for post-launch customer satisfaction.", img: "/process/support.png" },
    ];

    const brandPoints = [
        "Transform your brand's presence with cutting-edge Android applications that redefine user engagement.",
        "Our custom Android app development solutions in Mumbai are designed to be more than just software; they're extensions of your brand identity.",
        "From conceptualization to execution, we're dedicated to delivering Android apps that resonate with your audience and drive brand loyalty.",
    ];

    const userCentricPoints = [
        "Our Android app development is rooted in user-centric design, ensuring every tap and swipe delights your users.",
        "We don't just create apps; we craft experiences that seamlessly blend creativity and innovation.",
        "Through meticulous planning and innovative development, we ensure your Android app becomes an indispensable part of your users' lives.",
    ];

    const stats = [
        { icon: "/stats/experience.png", value: "25+", title: "Years of Experience" },
        { icon: "/stats/project.png", value: "250+", title: "Successful Project Delivered" },
        { icon: "/stats/team.png", value: "200+", title: "Development Specialists" },
        { icon: "/stats/rating.png", value: "98%", title: "Client Retention Rate" },
    ];

    // 2. Rename first techData to 'techCategoryData'
    const techCategoryData = [
        {
            title: "Languages",
            items: [
                { icon: "/tech/java.png", name: "Java" },
                { icon: "/tech/cpp.png", name: "C++" },
                { icon: "/tech/kotlin.png", name: "Kotlin" },
                { icon: "/tech/c.png", name: "C" },
            ],
        },
        {
            title: "Development Tools",
            items: [
                { icon: "/tech/android-studio.png", name: "Android Studio" },
                { icon: "/tech/android-ide.png", name: "Android-IDE" },
                { icon: "/tech/intellij.png", name: "IntelliJ IDEA" },
                { icon: "/tech/vs.png", name: "Visual Studio" },
            ],
        },
        {
            title: "Frameworks",
            items: [
                { icon: "/tech/corona.png", name: "Corona SDK" },
                { icon: "/tech/xamarin.png", name: "Xamarin" },
                { icon: "/tech/phonegap.png", name: "PhoneGap" },
                { icon: "/tech/ionic.png", name: "Ionic" },
            ],
        },
        {
            title: "Platforms",
            items: [
                { icon: "/tech/android.png", name: "Android SDK" },
                { icon: "/tech/titanium.png", name: "Titanium Mobile SDK" },
                { icon: "/tech/xamarin.png", name: "Xamarin" },
                { icon: "/tech/react.png", name: "React Native" },
            ],
        },
    ];

    const steps = [
        { title: "Planning", desc: "Firstly, we always begin by going in depth to understand the requirements and demands clients have.", icon: "/process/planning.svg" },
        { title: "App Discovery", desc: "Then focusing on visions and goals, we create a functionality-loaded model.", icon: "/process/discovery.svg" },
        { title: "UI/UX Designing", desc: "We devise layouts compelling enough to retain users and convert visitors.", icon: "/process/design.svg" },
        { title: "App Development", desc: "Frontend and backend are integrated with database and APIs.", icon: "/process/development.svg" },
        { title: "Testing & Launch", desc: "Testing is done thoroughly before deployment.", icon: "/process/testing.svg" },
        { title: "Support & Maintenance", desc: "Performance-centric support after deployment.", icon: "/process/support.svg" },
    ];

    // 3. Rename second techData to 'techTabsData'
    const techTabsData = {
        FRONTEND: [
            { icon: "/tech/js.png", name: "Java Script" },
            { icon: "/tech/ts.png", name: "Type Script" },
            { icon: "/tech/vue.png", name: "Vue Js" },
            { icon: "/tech/angular.png", name: "Angular" },
            { icon: "/tech/flutter.png", name: "Flutter" },
            { icon: "/tech/kotlin.png", name: "Kotlin" },
            { icon: "/tech/swift.png", name: "Swift" },
            { icon: "/tech/react.png", name: "React Js" },
            { icon: "/tech/html.png", name: "Html 5" },
            { icon: "/tech/css.png", name: "Css 3" },
        ],
        BACKEND: [
            { icon: "/tech/node.png", name: "Node Js" },
            { icon: "/tech/express.png", name: "Express" },
            { icon: "/tech/php.png", name: "PHP" },
            { icon: "/tech/laravel.png", name: "Laravel" },
        ],
        DATABASE: [
            { icon: "/tech/mongo.png", name: "MongoDB" },
            { icon: "/tech/mysql.png", name: "MySQL" },
            { icon: "/tech/postgres.png", name: "PostgreSQL" },
        ],
        DEVOPS: [
            { icon: "/tech/docker.png", name: "Docker" },
            { icon: "/tech/aws.png", name: "AWS" },
        ],
        "QUALITY ASSURANCE": [
            { icon: "/tech/jest.png", name: "Jest" },
            { icon: "/tech/cypress.png", name: "Cypress" },
        ],
    };

    const services = [
        {
            title: "Mobile App",
            sub: "DEVELOPMENT",
            image: "/services/mobile.jpg",
        },

        {
            title: "Website",
            sub: "DEVELOPMENT",
            image: "/services/website.jpg",
        },

        {
            title: "E-commerce",
            sub: "DEVELOPMENT",
            image: "/services/ecommerce.jpg",
        },

        {
            title: "Blockchain",
            sub: "DEVELOPMENT",
            image: "/services/blockchain.jpg",
        },

        {
            title: "Game",
            sub: "DEVELOPMENT",
            image: "/services/game.jpg",
        },

        {
            title: "Salesforce",
            sub: "SOLUTIONS",
            image: "/services/salesforce.jpg",
        },

        {
            title: "AI & ML",
            sub: "SOLUTIONS",
            image: "/services/ai.jpg",
        },

        {
            title: "IoT & Embedded",
            sub: "SOLUTIONS",
            image: "/services/iot.jpg",
        },
    ];

    const platforms = [
        {
            icon: "/platform/mobile.svg",
            title: "Mobile &",
            subtitle: "Tablets",
        },

        {
            icon: "/platform/tv.svg",
            title: "Smart TV",
        },

        {
            icon: "/platform/watch.svg",
            title: "Wearable",
            subtitle: "Devices",
        },

        {
            icon: "/platform/xr.svg",
            title: "Android",
            subtitle: "XR",
        },

        {
            icon: "/platform/speaker.svg",
            title: "Smart",
            subtitle: "Speaker",
        },

        {
            icon: "/platform/car.svg",
            title: "Android",
            subtitle: "Automotive",
        },
    ];

    const images = [
        "/company/img1.jpg",
        "/company/img2.jpg",
        "/company/img3.jpg",
        "/company/img4.jpg",
    ];
    const points = [
        "1200+ Developers",
        "500+ App Developers",
        "97% Success Ratio",
        "4500+ Mobile Applications Developed",
        "110 Million App Downloads",
        "End-to-end App Development Support",
        "Multiple Hiring Models",
    ];


    const faqData = [
        {
            id: "01",
            title:
                "How can I find the best Android app development team for my development project requirements?",
            answer:
                "You can reach out to one of the top Android app development companies like Hyperlink InfoSystem and share your development requirements with them. Finalize the best one, based on their Android app development expertise, development knowledge, years of experience, and advanced skills to develop digital solutions based on your project requirements.",
        },
        {
            id: "02",
            title: "What tools and technologies do you use for development?",
        },
        {
            id: "03",
            title: "Can I Hire dedicated developers from your company?",
        },
        {
            id: "04",
            title: "How much can Android app development cost?",
        },
        {
            id: "05",
            title: "How much time app development can take?",
        },
        {
            id: "06",
            title: "How do you assure the confidentiality of my app idea?",
        },
        {
            id: "07",
            title:
                "Who will have complete control over the application after the deployment?",
        },
    ];




    return (
        <>
            <div className="h-20 bg-[#09090F]" />

            {/* Section 1: Hero */}
            <section className="bg-[#f7f6f1] overflow-hidden py-20">
                <div className="max-w-[1500px] mx-auto px-6 lg:px-16">
                    <div className="grid lg:grid-cols-2 items-center gap-20">
                        <div>
                            <h1 className="text-[44px] md:text-[68px] leading-[1.1] font-medium text-black max-w-[720px]">
                                Best Website Development<br />Company In India
                            </h1>
                            <div className="mt-10 text-[#1d1d1d] text-lg leading-[2.1] max-w-[760px]">
                                <p>
                                    Are you looking for website development services in India?
                                    RankON Technologies is a leading web development company in
                                    India, offering <span className="font-semibold">strategic website development services</span> designed to convert traffic into leads, support long-term SEO, and scale with your business.
                                </p>
                                <p className="mt-10">
                                    With <span className="font-semibold">14+ years of experience</span> and <span className="font-semibold">1,000+ digital projects delivered globally</span>, RankON creates websites that don’t just look professional, they perform.
                                </p>
                            </div>
                            <div className="mt-14 flex flex-wrap items-center gap-12">
                                <img src="/logos/clutch.png" alt="" className="h-20 object-contain" />
                                <img src="/logos/upwork.png" alt="" className="h-20 object-contain" />
                                <img src="/logos/google-review.png" alt="" className="h-20 object-contain" />
                                <img src="/logos/google-partner.png" alt="" className="h-20 object-contain" />
                            </div>
                            <div className="mt-14 flex flex-wrap gap-0">
                                <button className="px-10 py-5 bg-[#ffba00] text-black font-medium uppercase hover:brightness-95 transition">REQUEST PROPOSAL →</button>
                                <button className="px-10 py-5 bg-black text-white uppercase hover:bg-neutral-900 transition">WEBSITE PACKAGES ⊕</button>
                            </div>
                        </div>
                        <div className="relative flex justify-center">
                            <div className="absolute bottom-0 right-0 w-[320px] h-[220px] opacity-20 bg-[radial-gradient(circle,#000_12%,transparent_13%)] bg-[length:34px_34px]" />
                            <img src="/mockup/window.png" alt="" className="absolute w-[340px] lg:w-[420px] left-[8%] top-[5%] z-20 rotate-[-6deg]" />
                            <img src="/mockup/laptop.png" alt="" className="relative w-full max-w-[760px] object-contain z-10" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Lift Your Brand */}
            <section className="bg-[#f7f7f7] overflow-hidden py-20">
                <div className="max-w-[1500px] mx-auto px-6 lg:px-16">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h1 className="text-[42px] md:text-[64px] leading-[1.15] font-semibold text-black max-w-[760px]">
                                Lift Your Brand with Cutting-Edge<br />Android Applications
                            </h1>
                            <ul className="mt-14 space-y-10">
                                {brandPoints.map((item, i) => (
                                    <li key={i} className="flex gap-5 text-[#525b6a] text-lg leading-[2]">
                                        <span className="mt-[12px] text-black">•</span>
                                        <span className="max-w-[720px]">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className="mt-16 px-14 py-6 rounded-full bg-[#058989] text-white text-lg font-semibold hover:brightness-95 transition shadow-lg">
                                Shape your success story<br />with Appdid today!
                            </button>
                        </div>
                        <div className="relative flex justify-center min-h-[650px]">
                            <img src="/apps/app1.png" alt="" className="absolute left-[5%] top-[26%] w-[180px] lg:w-[210px] drop-shadow-2xl" />
                            <img src="/apps/app2.png" alt="" className="absolute top-0 left-1/2 -translate-x-1/2 w-[190px] lg:w-[220px] z-20 drop-shadow-2xl" />
                            <img src="/apps/app3.png" alt="" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[190px] lg:w-[220px] z-10 drop-shadow-2xl" />
                            <img src="/apps/app4.png" alt="" className="absolute right-[8%] top-[28%] w-[180px] lg:w-[210px] drop-shadow-2xl" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: User-Centric */}
            <section className="bg-[#f7f7f7] overflow-hidden py-24">
                <div className="max-w-[1450px] mx-auto px-6 lg:px-16">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="relative flex justify-center min-h-[520px]">
                            <div className="absolute bottom-[15px] w-[380px] h-[50px] bg-black/15 blur-2xl rounded-full" />
                            <img src="/android/phone-back.png" alt="" className="absolute left-[48%] top-[8%] w-[250px] rotate-[12deg] z-10 drop-shadow-2xl" />
                            <img src="/android/phone-front.png" alt="" className="absolute left-[18%] top-[3%] w-[260px] z-20 drop-shadow-2xl" />
                        </div>
                        <div>
                            <h2 className="text-[42px] md:text-[60px] leading-[1.15] font-semibold text-black max-w-[820px]">
                                Crafting User-Centric Android<br />Experiences through Innovative<br />Development
                            </h2>
                            <ul className="mt-14 space-y-12">
                                {userCentricPoints.map((point, index) => (
                                    <li key={index} className="flex gap-5 text-[#50596b] text-lg leading-[2]">
                                        <span className="mt-[12px] text-black">•</span>
                                        <span className="max-w-[720px]">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: Unleash Power */}
            <section id="app-development" className="relative overflow-hidden bg-[#f4f4f4] py-20">
                <div className="absolute top-0 right-0 w-[55%] h-[420px] border-[4px] border-dashed border-cyan-300 rounded-full opacity-80 translate-x-32 -translate-y-16" />
                <div className="absolute bottom-[-180px] right-[-120px] w-[60%] h-[420px] border-[4px] border-dashed border-cyan-300 rounded-full opacity-80" />
                <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
                    <div className="grid lg:grid-cols-2 items-center gap-12">
                        <div className="max-w-[620px]">
                            <h1 className="text-4xl lg:text-[56px] leading-[1.15] font-bold text-black">
                                Unleash the Power of Android App<br />Development for Business Growth
                            </h1>
                            <p className="mt-8 text-[#45526a] text-[18px] leading-[2]">
                                Supercharge your business growth with our dynamic Android app
                                development services. As experienced android app developers in
                                Mumbai, we understand that your app is more than just code; it is
                                a strategic business asset that supports long-term growth and
                                scalability.
                                <br /><br />
                                By aligning our development approach with your specific business
                                goals, we deliver measurable outcomes and a strong return on
                                investment. With a focus on functionality, intuitive design, and
                                high performance, we build Android applications that help your
                                brand stand out and succeed in today’s competitive digital
                                environment.
                            </p>
                        </div>
                        <div className="relative flex justify-center">
                            <img src="/tablet.png" alt="" className="w-[520px] rotate-[-20deg] drop-shadow-[0_35px_40px_rgba(0,0,0,0.25)]" />
                            <img src="/phone.png" alt="" className="absolute w-[180px] top-[-10px] left-[35%] rotate-[8deg] drop-shadow-[0_30px_30px_rgba(0,0,0,0.3)]" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5: Our Process */}
            <section className="bg-[#f7f5f0] py-24 overflow-hidden">
                <div className="max-w-[1450px] mx-auto px-6">
                    <h2 className="text-center text-5xl font-bold mb-20">
                        Our Process to <span className="text-orange-500">Success</span>
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-28 gap-x-10">
                        {process.map((item) => (
                            <div key={item.id} className="relative flex flex-col items-center text-center">
                                <div className="absolute top-[-16px] left-[25%] w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
                                    {item.id}
                                </div>
                                <div className="h-[120px] w-[120px] bg-gray-200 rounded-full mb-6 flex items-center justify-center">
                                    <span className="text-gray-400 text-xs text-center px-2">{item.title}</span>
                                </div>
                                <h3 className="font-bold text-[34px] lg:text-[20px] mb-3">{item.title}</h3>
                                <p className="text-gray-700 text-lg leading-relaxed max-w-[300px]">{item.desc}</p>
                                {item.id !== 8 && (
                                    <div className="hidden lg:block absolute top-[80px] -right-[90px] w-[180px] border-t-[4px] border-dashed border-orange-500 rounded-full rotate-[8deg]" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 6: Stats */}
            <section className="bg-[#f8f8f8] py-20">
                <div className="max-w-[1450px] mx-auto px-6 lg:px-16">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div className="max-w-[760px]">
                            <h2 className="text-[42px] md:text-[64px] leading-[1.15] font-semibold text-[#171212]">
                                Get Scalable Android App<br />Development Services
                            </h2>
                            <div className="mt-10 space-y-8">
                                <p className="text-[#343434] text-lg leading-[2]">
                                    Got an idea? We help turn it into a real Android app. As a trusted Android app development company, OrangeMantra builds smart apps to match your business needs.
                                </p>
                                <p className="text-[#343434] text-lg leading-[2]">
                                    We've spent years creating Android app development solutions for all kinds of clients; startups, big brands, and everything in between. Our team understands how Android works and we design apps that connect well with your users.
                                </p>
                                <p className="text-[#343434] text-lg leading-[2]">
                                    Let's build something that stands out. Reach out to our Android mobile app development company and explore what we can create together.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            {stats.map((item, index) => (
                                <div key={index} className="bg-white border border-gray-200 rounded-[22px] p-8 min-h-[270px] hover:shadow-xl transition">
                                    <div className="w-16 h-16 rounded-2xl bg-[#4f1d91] flex items-center justify-center">
                                        <img src={item.icon} alt="" className="w-8 h-8 object-contain" />
                                    </div>
                                    <h3 className="mt-8 text-[56px] font-bold text-[#4f1d91]">{item.value}</h3>
                                    <p className="mt-4 text-[18px] font-semibold leading-[1.5] text-[#171212] max-w-[220px]">{item.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 7: Technology & Frameworks Categories */}
            <section className="relative bg-[#f7f7f7] py-24 overflow-hidden">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-white/40 blur-[140px] rounded-full" />
                <div className="relative max-w-[1450px] mx-auto px-6">
                    <div className="text-center max-w-[1200px] mx-auto">
                        <h2 className="text-[34px] md:text-[60px] font-bold leading-[1.15] text-[#1c1717]">
                            Technology & Frameworks We Use for Android App Development Services
                        </h2>
                        <p className="mt-8 text-[#393939] text-lg leading-[2] max-w-[1100px] mx-auto">
                            Being an acclaimed Android app development company, we possess comprehensive technology expertise that makes us capable of delivering high-end apps to match the client's business needs.
                        </p>
                    </div>
                    <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {techCategoryData.map((card, index) => (
                            <div key={index} className="bg-white rounded-[24px] overflow-hidden shadow-md border border-gray-200">
                                <div className="bg-[#4f1d91] px-6 py-5">
                                    <h3 className="text-white text-[20px] font-bold">{card.title}</h3>
                                </div>
                                <div className="px-4">
                                    {card.items.map((item, i) => (
                                        <div key={i} className="flex items-center gap-4 py-5 border-b last:border-0">
                                            <img src={item.icon} alt="" className="w-8 h-8 object-contain" />
                                            <span className="text-[18px] text-[#1d2333]">{item.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 8: Steps */}
            <section className="bg-[#f8f8f8] py-20">
                <div className="max-w-[1500px] mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-[42px] lg:text-[60px] font-bold leading-[1.15]">
                                Steps We Take To Impart Our Android App Development Services
                            </h2>
                            <p className="mt-10 text-lg leading-[2] text-gray-600">
                                We follow a structured Android development process while leaving room for improvements and feedback.
                            </p>
                            <div className="mt-12 flex flex-wrap gap-3">
                                {steps.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setActiveStep(i)}
                                        className={`w-14 h-14 rounded-full font-bold transition ${activeStep === i ? "bg-[#4f1d91] text-white" : "bg-white border"}`}
                                    >
                                        {i + 1}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div>
                            <div className="bg-white rounded-[30px] p-10 min-h-[450px] border shadow-lg flex flex-col justify-center transition-all">
                                <div className="w-[90px] h-[90px] rounded-[24px] bg-[#4f1d91] flex items-center justify-center">
                                    <img src={steps[activeStep].icon} alt="" className="w-12" />
                                </div>
                                <span className="mt-8 text-[#4f1d91] font-bold">STEP {activeStep + 1}</span>
                                <h3 className="mt-3 text-[42px] font-bold">{steps[activeStep].title}</h3>
                                <p className="mt-8 text-lg leading-[2] text-gray-600">{steps[activeStep].desc}</p>
                                <div className="mt-12 flex gap-4">
                                    <button
                                        onClick={() => setActiveStep((prev) => (prev === 0 ? steps.length - 1 : prev - 1))}
                                        className="w-14 h-14 rounded-full border"
                                    >
                                        ←
                                    </button>
                                    <button
                                        onClick={() => setActiveStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1))}
                                        className="w-14 h-14 rounded-full bg-[#4f1d91] text-white"
                                    >
                                        →
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 9: Tech Work On Tabs */}
            <section className="bg-[#f8f8f8] py-24">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="text-center">
                        <h2 className="text-[40px] md:text-[64px] font-semibold leading-[1.15]">
                            App Development<br />Technologies <span className="text-[#34d058]">We Work On</span>
                        </h2>
                        <p className="mt-8 text-[#333] text-lg leading-[2] max-w-[900px] mx-auto">
                            Leverage the Technical Expertise of A Top Custom App Development Company to Own Feature-rich Mobile Applications
                        </p>
                    </div>
                    <div className="mt-20 flex justify-center flex-wrap border-b">
                        {Object.keys(techTabsData).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTechTab(tab)}
                                className={`px-10 py-5 font-medium transition border-b-2 ${activeTechTab === tab ? "border-black" : "border-transparent"}`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                    <div className="mt-20 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-16">
                        {techTabsData[activeTechTab].map((item, i) => (
                            <div key={i} className="flex flex-col items-center text-center">
                                <img src={item.icon} alt="" className="w-[60px] h-[60px] object-contain" />
                                <h3 className="mt-5 text-[18px]">{item.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>








            <section className="bg-[#f6f6f6] py-20">

                <div className="max-w-[1600px] mx-auto">

                    <div className="grid lg:grid-cols-[1.6fr_0.8fr]">

                        {/* LEFT GRID */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 p-5">

                            {services.map((item, index) => (
                                <div
                                    key={index}
                                    onMouseEnter={() => setActive(index)}
                                    className="
                  relative
                  overflow-hidden
                  rounded-[22px]
                  h-[270px]
                  group
                  cursor-pointer
                "
                                >

                                    {/* IMAGE → ZOOM ONLY */}
                                    <img
                                        src={item.image}
                                        alt=""
                                        className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                                    />

                                    {/* Overlay */}
                                    <div
                                        className="
                    absolute
                    inset-0
                    bg-black/45
                  "
                                    />

                                    {/* Content */}
                                    <div
                                        className="
                    absolute
                    bottom-8
                    left-6
                    text-white
                    z-10
                  "
                                    >
                                        <h3 className="text-[22px] font-bold">
                                            {item.title}
                                        </h3>

                                        <p
                                            className="
                      text-sm
                      mt-2
                      tracking-widest
                    "
                                        >
                                            {item.sub}
                                        </p>
                                    </div>

                                    {/* Arrow */}
                                    {active === index && (
                                        <div
                                            className="
                      absolute
                      right-6
                      bottom-6
                      text-white
                      text-4xl
                      z-10
                    "
                                        >
                                            →
                                        </div>
                                    )}
                                </div>
                            ))}

                        </div>

                        {/* RIGHT PANEL */}
                        <div
                            className="
              bg-[#f8f8f8]
              px-12
              py-16
              flex
              flex-col
              justify-center
            "
                        >

                            <h2
                                className="
                text-[42px]
                font-semibold
              "
                            >
                                {services[active].title}
                            </h2>

                            <div className="w-[70px] h-[2px] bg-black mt-8" />

                            <p
                                className="
                mt-10
                text-lg
                text-gray-700
                leading-[2]
              "
                            >
                                We specialize in augmenting the mobile experience
                                for users of different niches, industries,
                                products and more that can help businesses
                                enhance their value with futuristic mobile
                                applications.
                            </p>

                            {/* Tech list */}
                            <div
                                className="
                mt-16
                grid
                grid-cols-2
                gap-y-8
              "
                            >
                                {[
                                    "Android App",
                                    "iPhone App",
                                    "Flutter",
                                    "Swift",
                                    "React Native",
                                    "Kotlin",
                                    "Ionic",
                                    "Xamarin",
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="
                    flex
                    items-center
                    gap-4
                  "
                                    >
                                        <div
                                            className="
                      w-4
                      h-4
                      rounded-full
                      border
                    "
                                        />

                                        <span className="text-[20px]">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>

                        </div>

                    </div>

                </div>

            </section>



            <section className="bg-[#f8f8f8] py-24">

                <div className="max-w-[1450px] mx-auto px-6">

                    {/* Heading */}
                    <div className="text-center max-w-[1200px] mx-auto">

                        <h2
                            className="
              text-[40px]
              md:text-[64px]
              font-bold
              leading-[1.15]
              text-[#1b1515]
            "
                        >
                            Platforms Our End-To-End Android Apps
                            Development Services
                            <br />
                            Can Target
                        </h2>

                        <p
                            className="
              mt-8
              text-lg
              leading-[2]
              text-[#404040]
              max-w-[1200px]
              mx-auto
            "
                        >
                            Segregated by mediums but unified by our
                            platform-compatible Android Apps.
                            As a reputed Android app development company,
                            we can build platform-centric apps for your
                            business in any domain for unmatched results.
                        </p>

                    </div>

                    {/* Platform Cards */}
                    <div
                        className="
            mt-20
            grid
            grid-cols-2
            md:grid-cols-3
            lg:grid-cols-6
            gap-4
          "
                    >

                        {platforms.map((item, index) => (
                            <div
                                key={index}
                                className="
                bg-white
                min-h-[150px]
                rounded-md
                px-8
                py-10
                flex
                items-center
                gap-5
                cursor-pointer
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
              "
                            >

                                {/* Icon */}
                                <img
                                    src={item.icon}
                                    alt=""
                                    className="
                  w-[42px]
                  h-[42px]
                  object-contain
                  shrink-0
                "
                                />

                                {/* Text */}
                                <div>

                                    <h3
                                        className="
                    text-[18px]
                    font-semibold
                    text-[#161c2d]
                  "
                                    >
                                        {item.title}
                                    </h3>

                                    {item.subtitle && (
                                        <div
                                            className="
                      text-[18px]
                      font-semibold
                      text-[#161c2d]
                    "
                                        >
                                            {item.subtitle}
                                        </div>
                                    )}

                                </div>

                            </div>
                        ))}

                    </div>

                </div>

            </section>




            <section className="bg-[#f8f8f8] py-24">

                <div className="max-w-[1450px] mx-auto px-6">

                    {/* Heading */}
                    <h2
                        className="
            text-center
            text-[38px]
            md:text-[62px]
            font-semibold
            leading-[1.15]
          "
                    >
                        One-Stop Solution for a Complete Mobile App
                        Development Company
                    </h2>

                    {/* Content */}
                    <div
                        className="
            mt-20
            grid
            lg:grid-cols-[1fr_0.95fr]
            gap-20
            items-center
          "
                    >

                        {/* LEFT */}
                        <div>

                            <div
                                className="
                text-[#3d3d3d]
                text-lg
                leading-[2]
                space-y-10
                max-w-[760px]
              "
                            >
                                <p>
                                    We work with businesses that want to profit
                                    from digital technology, supporting them in
                                    developing creative digital experiences that
                                    yield demonstrable results.
                                </p>

                                <p>
                                    We consult with the customer to decide the
                                    best course of action to address client and
                                    user concerns. We develop an app or piece of
                                    software that maximises the desired value.
                                </p>

                                <p>
                                    Appsinvo develops digital applications for
                                    mobile, web and online platforms using
                                    user-centred design and scalable software.
                                </p>
                            </div>

                        </div>

                        {/* RIGHT IMAGE GRID */}
                        <div
                            className="
              grid
              grid-cols-2
              gap-6
            "
                        >

                            <ImageCard
                                src={images[0]}
                                className="h-[260px]"
                            />

                            <ImageCard
                                src={images[1]}
                                className="h-[350px]"
                            />

                            <ImageCard
                                src={images[2]}
                                className="
                h-[220px]
                ml-12
              "
                            />

                            <ImageCard
                                src={images[3]}
                                className="
                h-[290px]
              "
                            />

                        </div>

                    </div>

                </div>

            </section>











            <section className="w-full bg-[#e7e7e7] py-8">
                <div className="max-w-[1600px] mx-auto h-[650px] grid grid-cols-1 lg:grid-cols-2 overflow-hidden">

                    {/* LEFT */}
                    <div className="bg-[#5B5BF2] text-white flex items-center justify-center">
                        <div className="w-full max-w-[820px] px-12 lg:px-16">

                            {/* Heading */}
                            <h1 className="text-[56px] leading-[1.05] font-bold tracking-[-2px]">

                                <span className="relative inline-block">

                                    {/* Yellow strip */}
                                    <span className="absolute left-0 bottom-[10px] w-[320px] h-[12px] bg-[#FFC928] z-0"></span>

                                    <span className="relative z-10">
                                        Why Choose
                                    </span>

                                </span>

                                {" "}Hyperlink
                                <br />
                                InfoSystem As Your App
                                <br />
                                Development Company?

                            </h1>

                            {/* Paragraph */}
                            <p className="mt-10 text-[18px] leading-[2] text-white/95 font-light">
                                We are a top app development company delivering innovative
                                and intuitive solutions to global start-ups to enterprise-level
                                businesses. Our team of expert developers takes pride in
                                leveraging their development experience, expertise, and
                                proficiency to develop customer-centric and industry-best
                                digital solutions. Here are some of our specifications that
                                can make us an ideal choice for your next development
                                requirements.
                            </p>

                        </div>
                    </div>

                    {/* RIGHT */}

                    <div className="bg-black text-white flex items-center justify-center">
                        <div className="w-full max-w-[820px] px-12 lg:px-16 ">

                            <h2 className="text-[72px] leading-[1.15] font-light">
                                <span className="font-bold">
                                    12+ Years
                                </span>{" "}
                                of App
                                <br />
                                Development
                                <br />
                                Experience
                            </h2>

                            <ul className="mt-14 space-y-6 text-[18px]">
                                {[
                                    "1200+ Developers",
                                    "500+ App Developers",
                                    "97% Success Ratio",
                                    "4500+ Mobile Applications Developed",
                                    "110 Million App Downloads",
                                    "End-to-end App Development Support",
                                    "Multiple Hiring Models",
                                ].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-4"
                                    >
                                        <span className="text-[22px]">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                        </div>
                    </div>

                </div>
            </section>








            <section className="w-full bg-[#efefef] py-20">
                <div className="max-w-[1320px] mx-auto px-8">

                    {/* Heading */}
                    <h2 className="text-[64px] font-bold leading-none text-[#191919]">
                        App Development FAQs
                    </h2>

                    <p className="mt-8 text-[18px] text-[#444] max-w-[900px] leading-[2]">
                        Our skilled Android developers have answered some frequently asked
                        questions about Android development, and we have compiled them into a
                        list for your convenience.
                    </p>

                    {/* FAQ */}
                    <div className="mt-20">

                        {faqData.map((item) => (
                            <div
                                key={item.id}
                                className="border-b border-[#e3e3e3]"
                            >
                                <button
                                    onClick={() =>
                                        setOpen(open === item.id ? null : item.id)
                                    }
                                    className="w-full py-10"
                                >
                                    <div className="flex items-start gap-10">

                                        {/* Number */}
                                        <div className="min-w-[90px]">
                                            <h3 className="text-[60px] font-bold text-[#171717]">
                                                {item.id}
                                            </h3>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 text-left">

                                            <h4 className="text-[28px] font-medium leading-[1.5] text-[#222]">
                                                {item.title}
                                            </h4>

                                            {open === item.id && item.answer && (
                                                <p className="mt-8 text-[18px] leading-[2] text-[#444] max-w-[1100px]">
                                                    {item.answer}
                                                </p>
                                            )}
                                        </div>

                                        {/* Arrow */}
                                        <div
                                            className={`
                    w-[58px]
                    h-[58px]
                    rounded-full
                    border
                    border-[#7a7a7a]
                    flex
                    items-center
                    justify-center
                    transition
                    duration-300
                    ${open === item.id ? "rotate-45" : ""}
                  `}
                                        >
                                            <ArrowUpRight
                                                size={28}
                                                strokeWidth={1.8}
                                            />
                                        </div>

                                    </div>
                                </button>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

        </>
    );
};

export default AppDevelopment;
