import { useState } from "react";
import laptopMockup from "../assets/laptop-screen-website-mockup.webp";
import { ArrowUpRight } from "lucide-react";
import { ArrowRight } from "lucide-react";
import {
    BadgeCheck,
    LayoutPanelLeft,
    Wrench,
    Shield,
    Check,
} from "lucide-react";


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
            title:
                "What tools and technologies do you use for development?",
            answer:
                "There are various tools and technologies we use for Android development. Some of them include Android Studio, AVD Manager, Eclipse, XML, SQLite, Android NDK, Realm, Android SDK, Fabric, Genymotion, GameMaker Studio, and various others. Along with this, our Android app development team keeps themselves knowledgeable about almost every latest trend which can help us to choose the most suitable tech stacks based on your development requirements.",
        },

        {
            id: "03",
            title:
                "Can I Hire dedicated developers from your company?",
            answer:
                "Our Android app developers hold the experience and expertise to deliver outstanding results with the highest optimization. We allow businesses to hire developers from our Android development team who can take advantage of our technical expertise to get much-anticipated development outcomes.",
        },

        {
            id: "04",
            title:
                "How much can Android app development cost?",
            answer:
                "Android App development cost estimation does not depend on just one factor. The cost estimation considers various factors such as your development project requirements, type of app development solution, the complexity of the solution, features and functionalities to include in the mobile application and many more.",
        },

        {
            id: "05",
            title:
                "How much time app development can take?",
            answer:
                "Just as the cost estimation, defining the time frame of the Android app development solution depends on various factors such as project requirements, app development time frame, the complexity of the app development, the type of solution, features, and functionalities of the mobile application, the required app development team, and many more.",
        },

        {
            id: "06",
            title:
                "How do you assure the confidentiality of my app idea?",
            answer:
                "Your app idea matters to us as much as it does to you. So before moving on with anything else we make sure to sign an NDA to keep your app idea always safe and secure.",
        },

        {
            id: "07",
            title:
                "Who will have complete control over the application after the deployment?",
            answer:
                "Once our development team successfully deploys the application on the Play Store, we make sure to transfer the app ownership rights and source code of the application to our clients while handing over the project.",
        },
    ];
    const cards = [
        {
            icon: <BadgeCheck size={28} />,
            title: "App Store Review",
            desc: "Strict compliance process",
        },
        {
            icon: <LayoutPanelLeft size={28} />,
            title: "UI/UX Expectations",
            desc: "Apple Human Interface Guidelines",
        },
        {
            icon: <Wrench size={28} />,
            title: "Testing & Validation",
            desc: "Real device + TestFlight",
        },
        {
            icon: <Shield size={28} />,
            title: "Security & Privacy",
            desc: "Apple's strict requirements",
        },
    ];

    const points = [
        "Strict App Store review process",
        "Higher UI/UX expectations",
        "More detailed testing and validation",
        "Strong security and privacy requirements",
        "Optimization for Apple's ecosystem",
    ];




    return (
        <>
            {/* Section 1: Hero */}
            <section className="bg-[#f7f6f1] overflow-hidden pb-12 md:pb-20">
                <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-16">
                    <div className="grid lg:grid-cols-2 items-center gap-8 sm:gap-12 lg:gap-20 min-h-0 lg:min-h-screen pt-24 sm:pt-28 md:pt-32">
                        <div className="text-center lg:text-left">
                            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-[68px] leading-tight md:leading-[1.1] font-medium text-black max-w-[720px] mx-auto lg:mx-0">
                                Best Website Development<br className="hidden md:block" />Company In India
                            </h1>
                            <div className="mt-6 sm:mt-8 md:mt-10 text-[#1d1d1d] text-sm sm:text-base md:text-lg leading-relaxed md:leading-[2.1] max-w-[760px]">
                                <p>
                                    Are you looking for website development services in India?
                                    RankON Technologies is a leading web development company in
                                    India, offering <span className="font-semibold">strategic website development services</span> designed to convert traffic into leads, support long-term SEO, and scale with your business.
                                </p>
                                <p className="mt-4 sm:mt-6 md:mt-10">
                                    With <span className="font-semibold">14+ years of experience</span> and <span className="font-semibold">1,000+ digital projects delivered globally</span>, RankON creates websites that don&apos;t just look professional, they perform.
                                </p>
                            </div>
                            <div className="mt-6 sm:mt-10 md:mt-14 flex flex-wrap justify-center lg:justify-start items-center gap-4 sm:gap-6 md:gap-12">
                                <img src="/logos/clutch.png" alt="" className="h-10 sm:h-12 md:h-20 object-contain" />
                                <img src="/logos/upwork.png" alt="" className="h-10 sm:h-12 md:h-20 object-contain" />
                                <img src="/logos/google-review.png" alt="" className="h-10 sm:h-12 md:h-20 object-contain" />
                                <img src="/logos/google-partner.png" alt="" className="h-10 sm:h-12 md:h-20 object-contain" />
                            </div>
                            <div className="mt-6 sm:mt-10 md:mt-14 flex flex-col sm:flex-row justify-center lg:justify-start gap-2 sm:gap-0">
                                <button className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-[#ffba00] text-black font-medium uppercase hover:brightness-95 transition text-sm sm:text-base min-h-[44px]">REQUEST PROPOSAL →</button>
                                <button className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-black text-white uppercase hover:bg-neutral-900 transition text-sm sm:text-base min-h-[44px]">WEBSITE PACKAGES ⊕</button>
                            </div>
                        </div>
                        <div className="flex justify-center mt-8 sm:mt-12 lg:mt-0">
                            <img src={laptopMockup} alt="Website mockup on laptop" className="w-full max-w-[600px] sm:max-w-[800px] object-contain" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Lift Your Brand */}
            <section className="bg-[#f7f7f7] overflow-hidden py-10 sm:py-12 md:py-20">
                <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-16">
                    <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                        <div className="text-center lg:text-left">
                            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-[64px] leading-tight md:leading-[1.15] font-semibold text-black max-w-[760px] mx-auto lg:mx-0">
                                Lift Your Brand with Cutting-Edge<br className="hidden md:block" />Android Applications
                            </h2>
                            <ul className="mt-6 sm:mt-10 md:mt-14 space-y-4 sm:space-y-6 md:space-y-10 text-left">
                                {brandPoints.map((item, i) => (
                                    <li key={i} className="flex gap-3 sm:gap-4 md:gap-5 text-[#525b6a] text-sm sm:text-base md:text-lg leading-relaxed md:leading-[2]">
                                        <span className="mt-[6px] sm:mt-[8px] md:mt-[12px] text-black shrink-0">•</span>
                                        <span className="max-w-[720px]">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className="mt-8 sm:mt-12 md:mt-16 px-6 sm:px-10 md:px-14 py-3 sm:py-4 md:py-6 rounded-full bg-[#058989] text-white text-sm sm:text-base md:text-lg font-semibold hover:brightness-95 transition shadow-lg min-h-[44px]">
                                Shape your success story with Appdid today!
                            </button>
                        </div>
                        <div className="relative flex justify-center min-h-[300px] sm:min-h-[400px] md:min-h-[650px] mt-8 sm:mt-12 lg:mt-0">
                            <img src="/apps/app1.png" alt="" className="absolute left-[2%] sm:left-[0%] md:left-[5%] top-[22%] sm:top-[20%] md:top-[26%] w-[80px] sm:w-[120px] md:w-[180px] lg:w-[210px] drop-shadow-2xl z-10" />
                            <img src="/apps/app2.png" alt="" className="absolute top-0 left-1/2 -translate-x-1/2 w-[90px] sm:w-[130px] md:w-[190px] lg:w-[220px] z-20 drop-shadow-2xl" />
                            <img src="/apps/app3.png" alt="" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90px] sm:w-[130px] md:w-[190px] lg:w-[220px] z-10 drop-shadow-2xl" />
                            <img src="/apps/app4.png" alt="" className="absolute right-[2%] sm:right-[0%] md:right-[8%] top-[24%] sm:top-[20%] md:top-[28%] w-[80px] sm:w-[120px] md:w-[180px] lg:w-[210px] drop-shadow-2xl z-10" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: User-Centric */}
            <section className="bg-[#f7f7f7] overflow-hidden py-16 md:py-24">
                <div className="max-w-[1450px] mx-auto px-6 lg:px-16">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="relative flex justify-center min-h-[350px] md:min-h-[520px] order-2 lg:order-1">
                            <div className="absolute bottom-[10px] md:bottom-[15px] w-[250px] md:w-[380px] h-[30px] md:h-[50px] bg-black/15 blur-2xl rounded-full" />
                            <img src="/android/phone-back.png" alt="" className="absolute left-[45%] md:left-[48%] top-[8%] w-[150px] md:w-[250px] rotate-[12deg] z-10 drop-shadow-2xl" />
                            <img src="/android/phone-front.png" alt="" className="absolute left-[15%] md:left-[18%] top-[3%] w-[160px] md:w-[260px] z-20 drop-shadow-2xl" />
                        </div>
                        <div className="order-1 lg:order-2 text-center lg:text-left">
                            <h2 className="text-3xl md:text-5xl lg:text-[60px] leading-tight md:leading-[1.15] font-semibold text-black max-w-[820px] mx-auto lg:mx-0">
                                Crafting User-Centric Android<br className="hidden md:block" />Experiences through Innovative<br className="hidden md:block" />Development
                            </h2>
                            <ul className="mt-10 md:mt-14 space-y-8 md:space-y-12 text-left">
                                {userCentricPoints.map((point, index) => (
                                    <li key={index} className="flex gap-4 md:gap-5 text-[#50596b] text-base md:text-lg leading-relaxed md:leading-[2]">
                                        <span className="mt-[8px] md:mt-[12px] text-black">•</span>
                                        <span className="max-w-[720px]">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: Unleash Power */}
            <section id="app-development" className="relative overflow-hidden bg-[#f4f4f4] py-16 md:py-20">
                <div className="hidden md:block absolute top-0 right-0 w-[55%] h-[420px] border-[4px] border-dashed border-cyan-300 rounded-full opacity-80 translate-x-32 -translate-y-16" />
                <div className="hidden md:block absolute bottom-[-180px] right-[-120px] w-[60%] h-[420px] border-[4px] border-dashed border-cyan-300 rounded-full opacity-80" />
                <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
                    <div className="grid lg:grid-cols-2 items-center gap-12">
                        <div className="max-w-[620px] text-center lg:text-left mx-auto lg:mx-0">
                            <h2 className="text-3xl lg:text-[56px] leading-tight lg:leading-[1.15] font-bold text-black">
                                Unleash the Power of Android App<br className="hidden lg:block" />Development for Business Growth
                            </h2>
                            <p className="mt-6 md:mt-8 text-[#45526a] text-base md:text-[18px] leading-relaxed md:leading-[2]">
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
                        <div className="relative flex justify-center mt-12 lg:mt-0">
                            <img src="/tablet.png" alt="" className="w-[300px] md:w-[520px] rotate-[-20deg] drop-shadow-[0_20px_25px_rgba(0,0,0,0.2)] md:drop-shadow-[0_35px_40px_rgba(0,0,0,0.25)]" />
                            <img src="/phone.png" alt="" className="absolute w-[100px] md:w-[180px] top-[-10px] left-[30%] md:left-[35%] rotate-[8deg] drop-shadow-[0_15px_15px_rgba(0,0,0,0.25)] md:drop-shadow-[0_30px_30px_rgba(0,0,0,0.3)]" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5: Our Process */}
            <section className="bg-[#f7f5f0] py-12 sm:py-16 md:py-24 overflow-hidden">
                <div className="max-w-[1450px] mx-auto px-4 sm:px-6">
                    <h2 className="text-center text-2xl sm:text-3xl md:text-5xl font-bold mb-10 sm:mb-16 md:mb-20">
                        Our Process to <span className="text-orange-500">Success</span>
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 sm:gap-y-16 md:gap-y-28 gap-x-6 sm:gap-x-10">
                        {process.map((item) => (
                            <div key={item.id} className="relative flex flex-col items-center text-center">
                                <div className="absolute top-[-16px] left-1/2 -translate-x-1/2 lg:left-[25%] lg:translate-x-0 w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold z-10">
                                    {item.id}
                                </div>
                                <div className="h-[100px] w-[100px] md:h-[120px] md:w-[120px] bg-gray-200 rounded-full mb-6 flex items-center justify-center">
                                    <span className="text-gray-400 text-[10px] md:text-xs text-center px-2">{item.title}</span>
                                </div>
                                <h3 className="font-bold text-xl md:text-[20px] mb-3">{item.title}</h3>
                                <p className="text-gray-700 text-sm md:text-lg leading-relaxed max-w-[300px]">{item.desc}</p>
                                {item.id !== 8 && (
                                    <div className="hidden lg:block absolute top-[80px] -right-[90px] w-[180px] border-t-[4px] border-dashed border-orange-500 rounded-full rotate-[8deg]" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 6: Stats */}
            <section className="bg-[#f8f8f8] py-12 sm:py-16 md:py-20">
                <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-16">
                    <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
                        <div className="max-w-[760px] text-center lg:text-left">
                            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-[64px] leading-tight md:leading-[1.15] font-semibold text-[#171212]">
                                Get Scalable Android App<br className="hidden md:block" />Development Services
                            </h2>
                            <div className="mt-6 sm:mt-8 md:mt-10 space-y-4 sm:space-y-6 md:space-y-8">
                                <p className="text-[#343434] text-sm sm:text-base md:text-lg leading-relaxed md:leading-[2]">
                                    Got an idea? We help turn it into a real Android app. As a trusted Android app development company, OrangeMantra builds smart apps to match your business needs.
                                </p>
                                <p className="text-[#343434] text-sm sm:text-base md:text-lg leading-relaxed md:leading-[2]">
                                    We've spent years creating Android app development solutions for all kinds of clients; startups, big brands, and everything in between. Our team understands how Android works and we design apps that connect well with your users.
                                </p>
                                <p className="text-[#343434] text-sm sm:text-base md:text-lg leading-relaxed md:leading-[2]">
                                    Let's build something that stands out. Reach out to our Android mobile app development company and explore what we can create together.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-12 lg:mt-0">
                            {stats.map((item, index) => (
                                <div key={index} className="bg-white border border-gray-200 rounded-[22px] p-5 sm:p-6 md:p-8 min-h-[180px] sm:min-h-[220px] md:min-h-[270px] hover:shadow-xl transition flex flex-col items-center lg:items-start text-center lg:text-left">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-2xl bg-[#4f1d91] flex items-center justify-center">
                                        <img src={item.icon} alt="" className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 object-contain" />
                                    </div>
                                    <h3 className="mt-4 sm:mt-6 md:mt-8 text-3xl sm:text-4xl md:text-[56px] font-bold text-[#4f1d91]">{item.value}</h3>
                                    <p className="mt-2 sm:mt-3 md:mt-4 text-sm sm:text-base md:text-[18px] font-semibold leading-snug md:leading-[1.5] text-[#171212] max-w-[220px]">{item.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 7: Technology & Frameworks Categories */}
            <section className="relative bg-[#f7f7f7] py-16 md:py-24 overflow-hidden">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[900px] h-[300px] md:h-[500px] bg-white/40 blur-[80px] md:blur-[140px] rounded-full" />
                <div className="relative max-w-[1450px] mx-auto px-6">
                    <div className="text-center max-w-[1200px] mx-auto">
                        <h2 className="text-3xl md:text-5xl lg:text-[60px] font-bold leading-tight md:leading-[1.15] text-[#1c1717]">
                            Technology & Frameworks We Use for Android App Development Services
                        </h2>
                        <p className="mt-6 md:mt-8 text-[#393939] text-base md:text-lg leading-relaxed md:leading-[2] max-w-[1100px] mx-auto">
                            Being an acclaimed Android app development company, we possess comprehensive technology expertise that makes us capable of delivering high-end apps to match the client's business needs.
                        </p>
                    </div>
                    <div className="mt-12 md:mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {techCategoryData.map((card, index) => (
                            <div key={index} className="bg-white rounded-[24px] overflow-hidden shadow-md border border-gray-200">
                                <div className="bg-[#4f1d91] px-6 py-4 md:py-5">
                                    <h3 className="text-white text-lg md:text-[20px] font-bold">{card.title}</h3>
                                </div>
                                <div className="px-4">
                                    {card.items.map((item, i) => (
                                        <div key={i} className="flex items-center gap-4 py-4 md:py-5 border-b last:border-0">
                                            <img src={item.icon} alt="" className="w-6 h-6 md:w-8 md:h-8 object-contain" />
                                            <span className="text-base md:text-[18px] text-[#1d2333]">{item.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 8: Steps */}
            <section className="bg-[#f8f8f8] py-16 md:py-20">
                <div className="max-w-[1500px] mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="text-center lg:text-left">
                            <h2 className="text-3xl md:text-5xl lg:text-[60px] font-bold leading-tight lg:leading-[1.15]">
                                Steps We Take To Impart Our Android App Development Services
                            </h2>
                            <p className="mt-6 md:mt-10 text-base md:text-lg leading-relaxed md:leading-[2] text-gray-600">
                                We follow a structured Android development process while leaving room for improvements and feedback.
                            </p>
                            <div className="mt-8 md:mt-12 flex flex-wrap justify-center lg:justify-start gap-3">
                                {steps.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setActiveStep(i)}
                                        className={`w-12 h-12 md:w-14 md:h-14 rounded-full font-bold transition text-sm md:text-base ${activeStep === i ? "bg-[#4f1d91] text-white" : "bg-white border"}`}
                                    >
                                        {i + 1}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div>
                            <div className="bg-white rounded-[24px] md:rounded-[30px] p-6 md:p-10 min-h-[350px] md:min-h-[450px] border shadow-lg flex flex-col justify-center transition-all">
                                <div className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-[20px] md:rounded-[24px] bg-[#4f1d91] flex items-center justify-center mx-auto lg:mx-0">
                                    <img src={steps[activeStep].icon} alt="" className="w-10 md:w-12" />
                                </div>
                                <span className="mt-6 md:mt-8 text-[#4f1d91] font-bold text-center lg:text-left block">STEP {activeStep + 1}</span>
                                <h3 className="mt-2 md:mt-3 text-2xl md:text-[42px] font-bold text-center lg:text-left">{steps[activeStep].title}</h3>
                                <p className="mt-4 md:mt-8 text-base md:text-lg leading-relaxed md:leading-[2] text-gray-600 text-center lg:text-left">{steps[activeStep].desc}</p>
                                <div className="mt-8 md:mt-12 flex justify-center lg:justify-start gap-4">
                                    <button
                                        onClick={() => setActiveStep((prev) => (prev === 0 ? steps.length - 1 : prev - 1))}
                                        className="w-12 h-12 md:w-14 md:h-14 rounded-full border flex items-center justify-center hover:bg-gray-50 transition"
                                    >
                                        ←
                                    </button>
                                    <button
                                        onClick={() => setActiveStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1))}
                                        className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#4f1d91] text-white flex items-center justify-center hover:brightness-110 transition"
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
            <section className="bg-[#f8f8f8] py-16 md:py-24">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-5xl lg:text-[64px] font-semibold leading-tight md:leading-[1.15]">
                            App Development<br className="hidden md:block" />Technologies <span className="text-[#34d058]">We Work On</span>
                        </h2>
                        <p className="mt-6 md:mt-8 text-[#333] text-base md:text-lg leading-relaxed md:leading-[2] max-w-[900px] mx-auto">
                            Leverage the Technical Expertise of A Top Custom App Development Company to Own Feature-rich Mobile Applications
                        </p>
                    </div>
                    <div className="mt-12 md:mt-20 flex justify-center flex-wrap gap-2 md:gap-0 border-b">
                        {Object.keys(techTabsData).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTechTab(tab)}
                                className={`px-4 md:px-10 py-3 md:py-5 text-sm md:text-base font-medium transition border-b-2 ${activeTechTab === tab ? "border-black" : "border-transparent"}`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                    <div className="mt-12 md:mt-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-8 sm:gap-y-12 md:gap-y-16">
                        {techTabsData[activeTechTab].map((item, i) => (
                            <div key={i} className="flex flex-col items-center text-center">
                                <img src={item.icon} alt="" className="w-10 h-10 md:w-[60px] md:h-[60px] object-contain" />
                                <h3 className="mt-4 md:mt-5 text-sm md:text-[18px]">{item.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[#f6f6f6] py-16 md:py-20">
                <div className="max-w-[1600px] mx-auto px-4 md:px-0">
                    <div className="grid lg:grid-cols-[1.6fr_0.8fr] gap-0">
                        {/* LEFT GRID */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 p-3 sm:p-4 md:p-5">
                            {services.map((item, index) => (
                                <div
                                    key={index}
                                    onMouseEnter={() => setActive(index)}
                                    onClick={() => setActive(index)}
                                    className="
                  relative
                  overflow-hidden
                  rounded-[18px] sm:rounded-[22px]
                  h-[180px] sm:h-[220px] md:h-[270px]
                  group
                  cursor-pointer
                "
                                >
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
                                    <div className="absolute inset-0 bg-black/45" />
                                    <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-3 sm:left-5 md:left-6 text-white z-10">
                                        <h3 className="text-lg sm:text-xl md:text-[22px] font-bold">
                                            {item.title}
                                        </h3>
                                        <p className="text-[11px] sm:text-xs md:text-sm mt-1 md:mt-2 tracking-widest">
                                            {item.sub}
                                        </p>
                                    </div>
                                    {active === index && (
                                        <div className="absolute right-3 sm:right-5 md:right-6 bottom-3 sm:bottom-5 md:bottom-6 text-white text-2xl sm:text-3xl md:text-4xl z-10">
                                            →
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* RIGHT PANEL */}
                        <div className="bg-[#f8f8f8] px-6 sm:px-8 md:px-12 py-10 sm:py-12 md:py-16 flex flex-col justify-center text-center lg:text-left">
                            <h2 className="text-3xl md:text-[42px] font-semibold">
                                {services[active].title}
                            </h2>
                            <div className="w-[50px] md:w-[70px] h-[2px] bg-black mt-6 md:mt-8 mx-auto lg:mx-0" />
                            <p className="mt-8 md:mt-10 text-base md:text-lg text-gray-700 leading-relaxed md:leading-[2]">
                                We specialize in augmenting the mobile experience
                                for users of different niches, industries,
                                products and more that can help businesses
                                enhance their value with futuristic mobile
                                applications.
                            </p>
                            {/* Tech list */}
                            <div className="mt-10 md:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-y-4 md:gap-y-8 text-left max-w-[400px] mx-auto lg:mx-0">
                                {[
                                    "Android App", "iPhone App", "Flutter", "Swift",
                                    "React Native", "Kotlin", "Ionic", "Xamarin",
                                ].map((item) => (
                                    <div key={item} className="flex items-center gap-3 md:gap-4">
                                        <div className="w-3 h-3 md:w-4 md:h-4 rounded-full border border-gray-400" />
                                        <span className="text-lg md:text-[20px]">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full bg-[#f5f5f5] py-12 md:py-16">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="grid lg:grid-cols-[1fr_450px] xl:grid-cols-[1fr_580px] gap-10 md:gap-12 lg:gap-20">
                        {/* LEFT */}
                        <div className="text-center lg:text-left">
                            <h2 className="text-3xl md:text-5xl lg:text-[56px] font-bold text-[#171717] leading-tight">
                                Why iOS Costs More
                            </h2>
                            <p className="mt-6 md:mt-10 text-lg md:text-[20px] leading-relaxed md:leading-[1.8] text-[#667085] max-w-[650px] mx-auto lg:mx-0">
                                Higher upfront cost, but better monetization and
                                user value. Pricing isn&apos;t just about
                                features—it&apos;s about App Store standards,
                                strict UI expectations, and ecosystem optimization.
                            </p>
                            {/* Cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10 md:mt-14">
                                {cards.map((card, i) => (
                                    <div key={i} className="bg-[#ECECEC] rounded-[12px] p-5 md:p-6 flex gap-4 text-left">
                                        <div className="w-12 h-12 md:w-[56px] md:h-[56px] rounded-xl border border-[#D9DDFF] flex items-center justify-center text-[#6465FF] shrink-0">
                                            {card.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-base md:text-[18px] font-semibold text-[#232B3A]">
                                                {card.title}
                                            </h4>
                                            <p className="mt-1 md:mt-2 text-sm md:text-[16px] text-[#98A2B3]">
                                                {card.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* RIGHT */}
                        <div className="bg-[#081126] rounded-[24px] p-8 md:p-10 shadow-2xl text-white flex flex-col justify-center">
                            <h3 className="text-2xl md:text-[38px] font-bold leading-tight">
                                What Actually Impacts iOS Cost
                            </h3>
                            <div className="mt-8 md:mt-10 space-y-6 md:space-y-8">
                                {points.map((point, i) => (
                                    <div key={i} className="flex gap-4 items-start">
                                        <div className="min-w-[28px] md:min-w-[32px] h-[28px] md:h-[32px] rounded-full bg-[#141E46] border border-[#3B49FF] flex items-center justify-center shrink-0 mt-1">
                                            <Check size={14} />
                                        </div>
                                        <span className="text-base md:text-[20px] text-[#D7DAE3]">
                                            {point}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-10 pt-8 border-t border-[#202A4C]">
                                <p className="text-base md:text-[18px] text-[#9DA7C0] leading-relaxed">
                                    Higher upfront cost, but better monetization
                                    and user value.
                                </p>
                                <button className="mt-8 w-full h-14 md:h-[64px] rounded-[14px] bg-white text-[#182033] text-lg md:text-[20px] font-semibold transition hover:scale-[1.02] active:scale-95">
                                    Get Your Project Scoped
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#f8f8f8] py-16 md:py-24">
                <div className="max-w-[1450px] mx-auto px-6">
                    {/* Heading */}
                    <div className="text-center max-w-[1200px] mx-auto">
                        <h2 className="text-3xl md:text-5xl lg:text-[64px] font-bold leading-tight md:leading-[1.15] text-[#1b1515]">
                            Platforms Our End-To-End Android Apps
                            Development Services
                            <br className="hidden md:block" />
                            Can Target
                        </h2>
                        <p className="mt-6 md:mt-8 text-base md:text-lg leading-relaxed md:leading-[2] text-[#404040] max-w-[1200px] mx-auto">
                            Segregated by mediums but unified by our
                            platform-compatible Android Apps.
                            As a reputed Android app development company,
                            we can build platform-centric apps for your
                            business in any domain for unmatched results.
                        </p>
                    </div>
                    {/* Platform Cards */}
                    <div className="mt-12 md:mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {platforms.map((item, index) => (
                            <div key={index} className="bg-white min-h-[120px] md:min-h-[150px] rounded-xl px-6 md:px-8 py-8 md:py-10 flex items-center gap-5 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-100">
                                <img src={item.icon} alt="" className="w-10 h-10 md:w-[42px] md:h-[42px] object-contain shrink-0" />
                                <div>
                                    <h3 className="text-base md:text-[18px] font-semibold text-[#161c2d]">
                                        {item.title}
                                    </h3>
                                    {item.subtitle && (
                                        <div className="text-base md:text-[18px] font-semibold text-[#161c2d]">
                                            {item.subtitle}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[#f8f8f8] py-16 md:py-24">
                <div className="max-w-[1450px] mx-auto px-6">
                    {/* Heading */}
                    <h2 className="text-center text-3xl md:text-5xl lg:text-[62px] font-semibold leading-tight md:leading-[1.15]">
                        One-Stop Solution for a Complete Mobile App
                        Development Company
                    </h2>
                    {/* Content */}
                    <div className="mt-12 md:mt-20 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* LEFT */}
                        <div className="text-center lg:text-left">
                            <div className="text-[#3d3d3d] text-base md:text-lg leading-relaxed md:leading-[2] space-y-6 md:space-y-10 max-w-[760px] mx-auto lg:mx-0">
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
                        <div className="grid grid-cols-2 gap-4 md:gap-6 px-4 md:px-0">
                            <ImageCard src={images[0]} className="h-[180px] md:h-[260px]" />
                            <ImageCard src={images[1]} className="h-[220px] md:h-[350px]" />
                            <ImageCard src={images[2]} className="h-[150px] md:h-[220px] mt-8 md:mt-12" />
                            <ImageCard src={images[3]} className="h-[200px] md:h-[290px]" />
                        </div>
                    </div>
                </div>
            </section>











            <section className="w-full bg-[#e7e7e7] py-0 md:py-8">
                <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 overflow-hidden">

                    {/* LEFT */}
                    <div className="bg-[#5B5BF2] text-white flex items-center justify-center py-16 md:py-24">
                        <div className="w-full max-w-[820px] px-8 md:px-12 lg:px-16">

                            {/* Heading */}
                            <h2 className="text-3xl md:text-5xl lg:text-[56px] leading-tight font-bold tracking-[-1px] md:tracking-[-2px]">
                                <span className="relative inline-block">
                                    {/* Yellow strip */}
                                    <span className="absolute left-0 bottom-[4px] md:bottom-[10px] w-full h-[8px] md:h-[12px] bg-[#FFC928] z-0"></span>
                                    <span className="relative z-10">Why Choose</span>
                                </span>
                                {" "}Hyperlink InfoSystem As Your App Development Company?
                            </h2>

                            {/* Paragraph */}
                            <p className="mt-6 md:mt-10 text-base md:text-[18px] leading-relaxed md:leading-[2] text-white/95 font-light">
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
                    <div className="bg-black text-white flex items-center justify-center py-16 md:py-24">
                        <div className="w-full max-w-[820px] px-8 md:px-12 lg:px-16">
                            <h2 className="text-4xl md:text-6xl lg:text-[72px] leading-tight font-light">
                                <span className="font-bold">12+ Years</span> of App Development Experience
                            </h2>

                            <ul className="mt-10 md:mt-14 space-y-4 md:space-y-6 text-base md:text-[18px]">
                                {[
                                    "1200+ Developers",
                                    "500+ App Developers",
                                    "97% Success Ratio",
                                    "4500+ Mobile Applications Developed",
                                    "110 Million App Downloads",
                                    "End-to-end App Development Support",
                                    "Multiple Hiring Models",
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center gap-4">
                                        <span className="text-xl md:text-[22px] text-yellow-400">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full bg-[#efefef] py-12 sm:py-16 md:py-24">
                <div className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-8">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-[64px] font-bold text-[#181818] leading-tight text-center md:text-left">
                        App Development FAQs
                    </h2>

                    <p className="mt-4 sm:mt-6 md:mt-8 max-w-[900px] text-sm sm:text-base md:text-[18px] leading-relaxed md:leading-[2] text-[#444] text-center md:text-left mx-auto md:mx-0">
                        Our skilled Android developers have answered some frequently asked
                        questions about Android development, and we have compiled them into a
                        list for your convenience.
                    </p>

                    <div className="mt-8 sm:mt-12 md:mt-20">
                        {faqData.map((faq) => (
                            <div key={faq.id} className="border-b border-[#e5e5e5]">
                                <button
                                    onClick={() => setOpen(open === faq.id ? null : faq.id)}
                                    className="w-full text-left py-4 sm:py-6 md:py-10 group"
                                >
                                    <div className="flex flex-col md:flex-row gap-3 sm:gap-4 md:gap-10">
                                        <div className="md:min-w-[90px]">
                                            <span className="text-2xl sm:text-3xl md:text-[58px] font-bold text-[#181818]">
                                                {faq.id}
                                            </span>
                                        </div>

                                        <div className="flex-1">
                                            <div className="flex justify-between items-start gap-3 sm:gap-4 md:gap-10">
                                                <h3 className="text-base sm:text-xl md:text-[28px] leading-tight md:leading-[1.5] font-medium text-[#222]">
                                                    {faq.title}
                                                </h3>
                                                <div className={`
                          min-w-[32px] h-[32px] sm:min-w-[40px] sm:h-[40px] md:min-w-[56px] md:h-[56px]
                          rounded-full border border-[#666]
                          flex items-center justify-center
                          transition-all duration-300 shrink-0
                          ${open === faq.id ? "rotate-45 bg-black text-white" : ""}
                        `}>
                                                    <ArrowUpRight size={16} className="sm:w-[20px] sm:h-[20px] md:w-[28px] md:h-[28px]" />
                                                </div>
                                            </div>

                                            <div className={`
                        overflow-hidden transition-all duration-500
                        ${open === faq.id ? "max-h-[600px] sm:max-h-[400px] mt-4 sm:mt-6 md:mt-8" : "max-h-0"}
                      `}>
                                                <p className="text-sm sm:text-base md:text-[18px] leading-relaxed md:leading-[2] text-[#444]">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="w-full bg-[#0d0d0d]">
                <div className="relative max-w-[1900px] mx-auto min-h-[350px] sm:min-h-[450px] md:h-[560px] overflow-hidden">
                    <img src="/hero-bg.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/45 to-black/20" />

                    <div className="relative z-10 h-full flex items-center py-12 sm:py-16 md:py-0">
                        <div className="px-4 sm:px-6 md:px-8 lg:px-16 text-center md:text-left w-full">
                            <div className="inline-flex items-center bg-white rounded-full px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-3 text-sm sm:text-base md:text-[22px] font-medium text-[#232323]">
                                2000+ businesses
                            </div>

                            <h2 className="mt-6 sm:mt-8 md:mt-10 text-white text-2xl sm:text-3xl md:text-6xl lg:text-[86px] leading-tight lg:leading-[1.05] font-bold max-w-[1000px] mx-auto md:mx-0">
                                Let&apos;s Create Big Stories Together
                            </h2>

                            <div className="mt-4 sm:mt-6 md:mt-10 w-[50px] sm:w-[60px] md:w-[90px] h-[2px] bg-white mx-auto md:mx-0" />

                            <p className="mt-4 sm:mt-6 md:mt-10 text-white text-base sm:text-lg md:text-[24px] max-w-[900px] mx-auto md:mx-0">
                                Share your project details to build your path toward success
                            </p>

                            <button className="group relative mt-8 sm:mt-10 md:mt-16 flex items-center justify-center md:justify-start gap-3 sm:gap-4 md:gap-6 mx-auto md:mx-0">
                                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-[60px] md:h-[60px] border border-white rounded-full transition-all duration-700 ease-out group-hover:w-full group-hover:rounded-[999px]" />
                                <span className="relative z-10 w-10 h-10 sm:w-12 sm:h-12 md:w-[60px] md:h-[60px] flex items-center justify-center text-white shrink-0">
                                    <ArrowRight size={20} className="sm:w-[24px] sm:h-[24px] md:w-[28px] md:h-[28px]" />
                                </span>
                                <span className="relative z-10 text-white text-lg sm:text-xl md:text-[34px] font-medium pr-4 sm:pr-6 md:pr-10">
                                    Get A Quote
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>



        </>
    );
};

export default AppDevelopment;
