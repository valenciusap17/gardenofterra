"use client";
import { FC, useEffect, useState } from "react";
import { reviewType } from "../Interface/ReviewsType";
import { reviews } from "../constants/reviews";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const Reviews: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [opacity, setOpacity] = useState("opacity-100");
  const handleArrowRight = () => {
    setOpacity("opacity-0");
    setTimeout(() => {
      setCurrentIndex(
        currentIndex == reviews.length - 1 ? 0 : currentIndex + 1
      );
      setOpacity("opacity-100");
    }, 500);
  };
  const handleArrawLeft = () => {
    setOpacity("opacity-0");
    setTimeout(() => {
      setCurrentIndex(
        currentIndex == 0 ? reviews.length - 1 : currentIndex - 1
      );
      setOpacity("opacity-100");
    }, 500);
  };

  useEffect(() => {
    const intervalIndex = setInterval(() => {
      setOpacity("opacity-0");
      setTimeout(() => {
        setCurrentIndex(
          currentIndex == reviews.length - 1 ? 0 : currentIndex + 1
        );
        setOpacity("opacity-100");
      }, 500);
    }, 5000);
    return () => clearInterval(intervalIndex);
  }, [currentIndex]);
  return (
    <>
      <div className="flex xl:justify-between justify-center h-[400px] relative">
        <div
          className={`w-5/12 xl:block hidden  h-full rounded-3xl ${reviews[currentIndex][0]}  transition-opacity duration-500 ${opacity} bg-cover bg-no-repeat z-20`}
        ></div>
        <div className="w-5/12 xl:block hidden  h-full rounded-3xl bg-[#d0c4b4] bg-cover absolute translate-x-[-12px] translate-y-3 z-10"></div>
        <div className="w-5/12 xl:block hidden h-full rounded-3xl bg-[#f0e4d4] bg-cover absolute translate-x-[-24px] translate-y-6 "></div>
        <div className="xl:w-6/12 w-8/12  h-7/12 flex flex-col items-center justify-center gap-5">
          <div className="flex flex-col gap-10 xl:items-end items-center ">
            <div
              className={`leading-8 xl:text-right text-center text-lg transition-opacity duration-500 ${opacity}`}
            >
              {reviews[currentIndex][1]}
            </div>
            <div
              className={`flex flex-col xl:text-right text-center  transition-opacity duration-500 ${opacity}`}
            >
              <div className="font-bold">{reviews[currentIndex][2]}</div>
              <div>{reviews[currentIndex][3]}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-4 flex justify-center gap-10 mt-5">
        <AiOutlineArrowLeft size={40} onClick={handleArrawLeft} className="cursor-pointer"/>
        <AiOutlineArrowRight size={40} onClick={handleArrowRight} className="cursor-pointer"/>
      </div>
    </>
  );
};

export default Reviews;
