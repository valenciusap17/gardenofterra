import { FC } from "react";

const VisionValues: FC = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-11/12 flex justify-between">
          <div className="lg:w-5/12 w-full mx-11 flex flex-col items-center">
            <div className="xl:text-8xl lg:text-6xl  text-5xl text-center">
              Our values
            </div>
            <div className="flex gap-2 justify-center xl:text-8xl lg:text-6xl text-5xl text-center">
              <div>&</div> <div className="text-orange-400">vision</div>
            </div>
            <div className="text-left mx-4 pt-5">
              <div className="leading-8 lg:text-left text-center">
                Celebrating the bounty of our agrarian heritage, we employ
                cutting-edge technology and creative methodologies to curate a
                selection of premium plants. By doing so, we not only honor our
                roots but also embrace the future.
              </div>
              <div className="leading-8 hidden lg:block">
                Our overarching mission is to inspire a renewed focus on
                nurturing a more sustainable, green environment.
              </div>
            </div>
            <div className=" rounded-xl my-5 mx-5 lg:px-5 lg:py-3 px-3 py-2 bg-black w-fit text-white cursor-pointer">
              Join with us!
            </div>
            <div className=" flex gap-3 mx-5 items-center">
              <div className="w-fit bg-[#f5f5bc] lg:px-3 lg:py-2 px-2 py-1 rounded-lg font-bold cursor-pointer">
                Facebook
              </div>
              <div className="w-fit bg-[#d8ecc4] lg:px-3 lg:py-2 px-2 py-1 rounded-lg font-bold cursor-pointer">
                Instagram
              </div>
              <div className="w-fit bg-[#ffdcb4] lg:px-3 lg:py-2 px-2 py-1 rounded-lg font-bold cursor-pointer">
                Whatsapp
              </div>
            </div>
          </div>
          <div className=" lg:w-5/12 w-0 justify-center items-end relative lg:flex hidden">
            <div className="w-full h-5/6 rounded-3xl bg-[url('/images/ValenciusApriady.jpg')] bg-cover z-20 "></div>
            <div className="w-full h-5/6 rounded-3xl bg-[#d0c4b4] bg-cover absolute translate-x-3 translate-y-3 z-10"></div>
            <div className="w-full h-5/6 rounded-3xl bg-[#f0e4d4] bg-cover absolute translate-x-6 translate-y-6"></div>
            <div className="xl:w-52 w-40 z-30 h-36 rounded-s-3xl rounded-ee-3xl rounded-es-3xl rounded-se-md top-0 right-[-100px] lg:gap-1  bg-orange-400 bg-cover absolute  translate-y-6 flex flex-col justify-center items-center">
              <div className="xl:text-3xl lg:text-2xl text-xl text-center text-white">
                Valencius Primayudha
              </div>
              <div className="text-white lg:text-base text-sm">Owner</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VisionValues;
