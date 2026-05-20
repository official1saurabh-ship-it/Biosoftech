import consultationImg from "../../assets/consultation.png";
import { ChevronDown } from "lucide-react";

export default function ConsultationSection() {
    return (
        <section className="bg-[#f5f5f5]  py-16">

            <div className="max-w-[1600px] mx-auto px-8">

                <div className="grid lg:grid-cols-2 gap-20 items-stretch">

                    {/* LEFT IMAGE */}

                    <div
                        className="
relative
flex
justify-center
items-center
h-[700px]
"
                    >

                        {/* BLUE SHAPE */}

                        <div
                            className="
              absolute
              left-0
              top-10

            w-[500px]
h-[620px]

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
w-[450px]
h-[570px]

              bg-[#89d000]

              rounded-[58%_42%_56%_44%/48%_34%_66%_52%]

              -z-10
            "
                        />

                        {/* IMAGE */}

                        <div
                            className="
              overflow-hidden

             w-[500px]
h-[620px]

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
              right-10

              overflow-hidden

              w-[260px]
              h-[220px]

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
h-[700px]
">

                        <div className="flex items-center gap-4 mb-8">

                            <span className="w-2 h-2 rounded-full bg-blue-600" />

                            <h2
                                className="
                text-[42px]
                leading-[1.1]
                font-bold
                text-[#40356b]
              "
                            >
                                Book a Free Digital Marketing Consultation
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
                                        SEO
                                    </option>

                                    <option>
                                        Social Media
                                    </option>

                                    <option>
                                        Branding
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
Share A Brief About Your Business
And Requirement So We Can Suggest
The Best Solution.*
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