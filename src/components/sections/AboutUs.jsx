import {
  Phone,
  CircleCheckBig,
} from "lucide-react";

import teamwork from "../../assets/aboutus-teamwork.webp";
import R2 from "../../assets/aboutus-stat-illustration.webp";
import Innovation from "../../assets/aboutus-innovation.webp";

export default function AboutUs() {
  return (
    <section className="bg-[#f8f4fc] overflow-hidden section-py-sm">

      <div className="container-site">

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-stretch">

          {/* LEFT - hidden on small screens */}
          <div className="relative pr-0 lg:pr-[120px] hidden lg:block h-full">
            <div className="grid grid-cols-[1fr_180px] xl:grid-cols-[1fr_280px] gap-4 xl:gap-6 h-full">
              <div className="space-y-4 flex flex-col">
                <div
                  style={{
                    backgroundImage: `url(${teamwork})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                  className="relative rounded-[26px] overflow-hidden bg-[#f8f4fc] flex-[2] min-h-0 max-h-[calc(50%-3px)]"
                />
                <div className="relative flex-[2] min-h-0 bg-[#f8f4fc]">
                  <img src={R2} alt="Biosoftech company statistics and growth metrics illustration" width="400" height="300" className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="relative flex flex-col">
                <div className="rounded-[30px] overflow-hidden flex-1 min-h-[200px] xl:min-h-[280px] w-[180px] xl:w-[280px] relative bg-[#f8f4fc]">
                  <img src={Innovation} alt="Biosoftech innovation and technology concept illustration" width="320" height="700" className="absolute inset-0 w-full h-full object-contain" />
                </div>
                <div className="absolute right-[-55px] xl:right-[-90px] top-1/2 -translate-y-1/2 overflow-visible">
                  <div className="bg-purple-500 rounded-full h-[200px] xl:h-[260px] w-[60px] xl:w-[80px] text-white flex items-center justify-center">
                    <div className="rotate-90 whitespace-nowrap font-bold text-sm xl:text-lg">
                      2+ Years Of Excellence
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div>

            <div className="inline-flex bg-[#efe3ff] rounded-full px-4 py-1.5 text-purple-600 text-3xl sm:text-4xl font-bold">
              ABOUT US
            </div>

            <h2 className="mt-3 sm:mt-4 text-fluid-h1 font-black text-[#06031b]">
              Full-Service Software
              <br />
              Development Company
              <br />
              For Digital Growth
            </h2>

            <p className="mt-3 sm:mt-4 text-[#5b5b69] text-sm sm:text-xl lg:text-[22px] xl:text-[24px] leading-relaxed">
              We are a leading technology partner delivering innovation and
              efficiency for more than a decade. Our team specializes in
              custom software development, mobile apps, and AI-powered
              solutions — offering everything under one roof.
            </p>

            <div className="mt-3 sm:mt-4 space-y-2">
              <div className="flex items-center gap-3 text-fluid-xl font-bold text-purple-600">
                <CircleCheckBig size={22} className="text-green-500" />
                Fast Results, Smart Solutions!
              </div>
              <div className="flex items-center gap-3 text-fluid-xl font-bold text-purple-600">
                <CircleCheckBig size={22} className="text-green-500" />
                Achieve Your Business Goals!
              </div>
            </div>

            <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center">

              <div className="w-10 h-10 sm:w-14 sm:h-14 xl:w-[72px] xl:h-[72px] rounded-full border-2 border-orange-400 flex items-center justify-center shrink-0">

                <Phone className="text-orange-500 w-4 h-4 sm:w-[22px] sm:h-[22px]" />

              </div>

              <div>

                <div className="text-fluid-2xl font-black leading-tight">
                  +91-9044425858
                </div>
                <div className="text-fluid-2xl font-black leading-tight">
                  +91-6209688930
                </div>

                <div className="text-purple-500 text-fluid-base">
                  Have Any Query?
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
