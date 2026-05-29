import consultationImg from "../../assets/consultation.png";
import { ChevronDown } from "lucide-react";

export default function ConsultationSection() {
    return (
        <section className="bg-[#f5f5f5] py-12 lg:py-16 overflow-hidden">

            <div className="max-w-[1600px] mx-auto px-5 sm:px-8">

                <div className="grid lg:grid-cols-2 gap-10 md:gap-6 lg:gap-20 items-stretch">

                    {/* LEFT IMAGE */}

                    <div
                        className="
relative
flex
justify-center
items-center
h-[430px]
sm:h-[560px]
lg:h-[700px]
max-h-[520px]
sm:max-h-none
"
                    >

                        {/* BLUE SHAPE */}

                        <div
                            className="
              absolute
              left-0
              top-10

            w-[280px]
sm:w-[400px]
lg:w-[500px]
h-[360px]
sm:h-[500px]
lg:h-[620px]

              bg-[#78d9f7]

              rounded-[58%_42%_56%_44%/48%_34%_66%_52%]

              -z-10
            "
                        />

                        {/* GREEN SHAPE */}

                        <div
                            className="
              absolute
              left-6
              top-20
w-[260px]
sm:w-[360px]
lg:w-[450px]
h-[330px]
sm:h-[460px]
lg:h-[570px]

              bg-[#89d000]

              rounded-[58%_42%_56%_44%/48%_34%_66%_52%]

              -z-10
            "
                        />

                        {/* IMAGE */}

                        <div
                            className="
              overflow-hidden

             w-[280px]
sm:w-[400px]
lg:w-[500px]
h-[360px]
sm:h-[500px]
lg:h-[620px]

              rounded-[58%_42%_56%_44%/48%_34%_66%_52%]
            "
                        >
                            <img
                                src={consultationImg}
                                alt=""
                                className="
                w-full
                h-full
                object-cover
              "
                            />
                        </div>

                        {/* SMALL IMAGE */}

                        <div
                            className="
              absolute

              bottom-4
              right-0
              sm:right-10

              overflow-hidden

              w-[150px]
              h-[130px]
              sm:w-[220px]
              sm:h-[190px]
              lg:w-[260px]
              lg:h-[220px]

              rounded-[50%]
              border-[10px]
              border-white
            "
                        >
                            <img
                                src={consultationImg}
                                alt=""
                                className="
                w-full
                h-full
                object-cover
              "
                            />
                        </div>

                    </div>

                    {/* RIGHT FORM */}

                    <div className="
flex
flex-col
justify-center
h-auto
lg:h-[700px]
">

                        <div className="flex items-center gap-4 mb-8">

                            <span className="w-2 h-2 rounded-full bg-blue-600" />

                            <h2
                                className="
                text-[30px]
                sm:text-[36px]
                lg:text-[42px]
                leading-[1.1]
                font-bold
                text-[#40356b]
              "
                            >
                                Book a Free Software Consultation
                            </h2>

                        </div>

                        <form className="space-y-6">

                            <input
                                placeholder="Enter Your Full Name*"
                                className="
                w-full

               h-[58px]

                rounded-md

                border

                px-8

                outline-none

                bg-white
              "
                            />

                            <input
                                placeholder="Enter Your Phone Number*"
                                className="
                w-full

                h-[58px]

                rounded-md

                border

                px-8
              "
                            />

                            <input
                                placeholder="Enter Your Email Address*"
                                className="
                w-full

                h-[58px]

                rounded-md

                border

                px-8
              "
                            />

                            <div className="relative">

                                <select
                                    className="
                  w-full

                  h-[58px]

                  rounded-md

                  border

                  px-8

                  appearance-none
                "
                                >
                                    <option>
                                        How Can We Help You?*
                                    </option>

                                    <option>
                                        Develop Custom Software Solutions
                                    </option>

                                    <option>
                                        Build Or Upgrade My Mobile App / Website
                                    </option>

                                    <option>
                                        Integrate AI Automation Into My Workflow
                                    </option>

                                    <option>
                                        Implement Mitra Suite Products (Billing, Restro, Hotel, Skola, Tentent)
                                    </option>

                                    <option>
                                        Healthcare / Real Estate / Hospitality Software Needs
                                    </option>

                                    <option>
                                        Cloud Integration & Data Security Services
                                    </option>

                                    <option>
                                        Not Sure - Need Expert Guidance
                                    </option>

                                </select>

                                <ChevronDown
                                    className="
                  absolute
                  right-6
                  top-1/2
                  -translate-y-1/2
                  text-gray-500
                "
                                />

                            </div>

                            <textarea
                                rows="4"
                                placeholder="
Share a Brief About Your Business and Requirement So We Can Suggest the Best Solution*
"
                                className="
                w-full

                rounded-md

                border

                px-8
                py-6

                resize-none
              "
                            />

                            <button
                                className="
                px-10
                py-5

                bg-[#ff9b22]

                text-white

                font-bold

                rounded
              "
                            >
                                SEND MESSAGE
                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </section>
    );
}
