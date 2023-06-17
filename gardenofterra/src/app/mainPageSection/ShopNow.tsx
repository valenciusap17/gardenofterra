import { FC } from "react";

const ShopNow: FC = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className=" text-emerald-500 lg:text-7xl text-center font-bold mt-5 italic md:text-5xl text-3xl ">
          Authentic Indonesian
        </div>
        <div className="text-orange-400 lg:text-7xl text-center font-bold md:text-5xl text-3xl ">
          ORNAMENTAL PLANTS
        </div>
        <div className="2xl:w-[80%] lg:w-[70%] md:w-[60%] sm:w-[50%] h-[440px] bg-no-repeat min-w-[40%] rounded-3xl mt-5 bg-white bg-cover bg-[url('/images/wellPlantGreenHouse.png')] shadow-lg flex justify-center items-end">
          <button className="bg-green-500 text-white my-8 rounded-xl px-5 py-2 font-bold">
            Shop NOW!
          </button>
        </div>
      </div>
    </>
  );
};

export default ShopNow;
