import { FC } from "react";
import {AiOutlineInstagram, AiOutlineWhatsApp, AiOutlineYoutube} from 'react-icons/ai';


const Footer: FC = () => {
  return (
    <>
      <div className="w-full md:h-52 h-80 bg-[#f0e4d4] md:gap-0 gap-5 flex flex-col md:flex-row items-center md:justify-between justify-center px-20 ">
        <div className="flex flex-col md:flex-row md:items-center items-center gap-3">
          <div className="w-28 h-28 rounded-full bg-[url('/images/GardenOfTerraLogo.jpg')] bg-cover bg-no-repeat"></div>
          <div className="flex flex-col md:justify-center md:items-start items-center text-lg">
            <div className="text-3xl">Garden Of Terra</div>
            <div>#BersamaKitaHijaukanBumi</div>
          </div>
        </div>
        <div>
          Ikuti Garden Of Terra
          <div className="flex justify-around">
            <AiOutlineInstagram size={30} />
            <AiOutlineWhatsApp size={30} />
            <AiOutlineYoutube size={30} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
