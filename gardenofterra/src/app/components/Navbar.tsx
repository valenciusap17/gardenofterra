import { FC } from "react";

const Navbar: FC = () => {
  return (
    <>
      <div className="w-full h-16 flex justify-between p-3 items-center">
        <div className="flex gap-3 items-center">
          <div className="w-10 h-10 bg-[url('/images/GardenOfTerraLogo.jpg')] bg-cover bg-no-repeat rounded-full"></div>
          <div className=" text-2xl font-bold">Garden Of Terra</div>
        </div>
        <div className="lg:flex hidden gap-5">
          <div >About Us</div>/<div>Services</div>/
          <div>Reviews</div>/<div>News</div>
        </div>
        <div>
          <button className="border-2 border-black px-4 py-1 hover:bg-amber-200  font-bold rounded-full ">
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
