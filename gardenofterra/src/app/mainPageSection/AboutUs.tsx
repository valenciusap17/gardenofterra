import { FC } from "react";

const AboutUs: FC = () => {
  return (
    <>
      <div className="flex  justify-center">
        <div className="w-9/12 flex lg:flex-row flex-col lg:gap-5 gap-10 items-center">
          <div className="h-[450px] w-6/12 rounded-3xl bg-[#f8ecdc] shadow-lg ">
            <div className="flex flex-col lg:px-12 lg:pt-16 px-6 pt-8 text-xs sm:text-sm md:text-base lg:text-sm xl:text-base">
              <div className="rounded-lg bg-emerald-600 w-fit px-2 py-1 text-xs text-white truncate">
                About Us
              </div>
              <div className="pt-5"></div>
              <div>
                Garden of Terra is a young Indonesian ornamental business
                founded in 2021 by three ambitious college students.
                <div className="">
                  They specialize in unique decorative plants and have built
                  strong relationships with fellow enthusiasts and activists.
                </div>
              </div>
              <div className="xl:pt-20 pt-5"></div>
              <div className="flex gap-2 items-center ">
                <div className=" w-12 h-12 bg-[url('/images/SoniKesuma.jpg')] bg-no-repeat rounded-full bg-cover"></div>
                <div className=" flex flex-col justify-center">
                  <div className="text-xs md:text-sm font-bold">
                    Muhammad Soni Kesuma Anom
                  </div>
                  <div className="text-xs md:text-sm">Marketing Director</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-7/12 mx-10 gap-5 justify-center flex flex-col items-center ">
            <div className="h-[130px] w-full bg-[#f5f5bc] rounded-full">
              <div className="flex flex-col items-center justify-center h-full">
                <div className="md:text-5xl sm:text-3xl text-xl  font-bold">
                  1000+
                </div>
                <div className="flex gap-1 flex-col md:flex-row items-center">
                  <div className="lg:text-base text-sm">Ornamental</div>
                  <div className="lg:text-base text-sm"> plant types</div>
                </div>
              </div>
            </div>
            <div className="h-[130px] w-full bg-[#d8ecc4] rounded-full">
              <div className="flex flex-col items-center justify-center h-full">
                <div className="md:text-5xl sm:text-3xl text-xl font-bold">
                  500+
                </div>
                <div className="flex gap-1 flex-col md:flex-row items-center">
                  <div className="lg:text-base text-sm">Global shipping </div>
                  <div className="lg:text-base text-sm">completed</div>
                </div>
              </div>
            </div>
            <div className="h-[130px] w-full bg-[#ffdcb4] rounded-full">
              <div className="flex flex-col items-center justify-center h-full">
                <div className="md:text-5xl sm:text-3xl text-xl font-bold">
                  3
                </div>
                <div className="flex gap-1 flex-col md:flex-row items-center">
                  <div className="lg:text-base text-sm">Greenhouse located</div>
                  <div className="lg:text-base text-sm">at jakarta</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
