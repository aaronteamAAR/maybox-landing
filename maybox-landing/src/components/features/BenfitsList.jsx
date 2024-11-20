import React from "react";

export default function BenfitsList() {
  return (
    <div className="flex justify-center w-full px-4 md:-ml-20">
      <div className="grid grid-cols-1 gap-6 w-[360px] md:grid-cols-[1fr_404px_1fr] md:gap-y-2 md:w-full md:mt-40">
        {/* First Card (Perks) */}
        <div className="row-span-2 p-6 pt-12 bg-white h-[410px] rounded-[26px] w-full md:w-[330px] md:h-[510px] md:mb-10">
          <h2 className="font-bold font-custom mb-6 text-[31px] md:text-2xl ">
            What are the membership perks?
          </h2>
          <div className="flex flex-col gap-5 space-y-3 font-custom font-normal h-[410px]  text-[15px] ">
            {[
              "Perfectly timed to your routine",
              "Save more",
              "Glow better, stress less",
              "You're in control",
            ].map((perk, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#FBA013] flex items-center justify-center">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 8L10 16L6 12"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-sm">{perk}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Second Card (Quality) */}
        <div className="p-6 pt-12 bg-white rounded-[26px] h-[217px] w-full md:w-[404px] md:h-[215px] flex md:block items-center justify-center text-center md:text-center">
          <div className="w-full flex flex-col items-center justify-center md:items-start md:text-center">
            <h2 className="text-[36px] font-custom w-1/2 leading-[40px]  md:w-full font-bold mb-4 md:text-3xl">
              100% Quality
            </h2>
            <p className="text-[#6C6C6C] font-custom2 text-center md:text-left">
              From the chosen product we offer quality with much assurance.
            </p>
          </div>
        </div>

        {/* Third Card (Pause, skip, or cancel) */}
        <div className="row-span-2 p-6 pt-12 bg-white rounded-[26px] h-[410px] flex flex-col w-full md:w-[330px] md:h-[510px] md:mb-10 md:text-left">
          <h2 className="font-bold font-custom mb-4 text-[35px] tracking-tight md:text-2xl ">
            Pause, skip, or cancel anytime. It's{" "}
            <span className="text-purple-600">self-care</span> on your terms.
          </h2>
          <p className="text-[15px] w-5/6 text-[#6C6C6C] mt-auto font-custom2 md:text-left md:w-full">
            Get your self-care essentials delivered exactly when you need them.
            No more waiting.
          </p>
        </div>

  
        {/* Fourth Card (Wellness) */}
        <div className="p-6 bg-white rounded-[26px] h-[217px] w-full md:w-[404px] md:h-[235px] flex md:block items-center justify-center text-center md:text-left">
          <div className="w-full pt-12 flex flex-col items-center justify-center md:items-center md:text-center ">
            <h2 className="text-2xl font-custom font-bold mb-4 md:text-3xl md:w-4/5">
              Stress-free wellness package
            </h2>
            <p className="text-[#6C6C6C] font-custom2 text-center md:text-left">
              We just make you comfortable!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
