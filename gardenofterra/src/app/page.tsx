import Image from "next/image";
import Navbar from "./components/Navbar";
import ShopNow from "./mainPageSection/ShopNow";
import AboutUs from "./mainPageSection/AboutUs";
import VisionValues from "./mainPageSection/VisionValues";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Reviews from "./mainPageSection/Reviews";
import Footer from "./mainPageSection/Footer";

export default function Home() {
  return (
    <>
      <div className="h-full bg-[#fffbec] flex flex-col items-center">
        <div className="w-10/12 ">
          <Navbar />
          <ShopNow />
          <div className="py-8 lg:py-16"></div>
          <AboutUs />
          <div className="py-8 lg:py-16"></div>
          <VisionValues />
          <div className="py-8 lg:py-16"></div>
          <Reviews />
          <div className="py-8 lg:py-16"></div>
        </div>
        <Footer />
      </div>
    </>
  );
}
