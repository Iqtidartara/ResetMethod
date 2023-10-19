import Image from "next/image";
import React from "react";

const Cards = () => {
  return (
    <div className=" md:block hidden  max-w-[72rem] mx-auto mt-10">
      <div className="inline-flex px-[2.25rem] py-[1.06913rem] bg-[#FFF] justify-center items-center gap-[2.9485rem] shadow-lg rounded-md sm:hidden ">
        {/* Hide the entire component on small devices */}
      </div>
      <div className="inline-flex px-[2.25rem] py-[1.06913rem] ml-14 bg-[#FFF] justify-center items-center gap-[2.9485rem] shadow-lg rounded-md">
        {/* Keep individual cards visible on all other screen sizes */}
        <div className="">
          <Image src="/icon (6).png" alt="img1" width={50} height={30} />
          <h1 className="text-[0.93113rem] font-bold mt-[1.5rem]">Enjoy Every Meal</h1>
          <p className="text-[0.8275rem] font-medium leading-[1.34494rem] mt-[1.2rem]">
            Savor your favorite foods again with our adaptable and lenient
            dietary guidelines.
          </p>
        </div>
        <div className="w-[0.05175rem] h-[10.91469rem] bg-[#000] opacity-30"></div>
        <div className="">
          <Image src="/icon (7).png" alt="img1" width={50} height={30} />
          <h1 className="text-[0.93113rem] font-bold mt-[1.5rem]">Zero Medication Costs</h1>
          <p className="text-[0.8275rem] font-medium leading-[1.34494rem] mt-[1.2rem]">
            Slash your medical bills by reducing the dependency on costly
            diabetes medications.
          </p>
        </div>
        <div className="w-[0.05175rem] h-[10.91469rem] bg-[#000] opacity-30"></div>
        <div className="">
          <Image src="/icon (8).png" alt="img1" width={50} height={30} />
          <h1 className="text-[0.93113rem] font-bold mt-[1.5rem]">Save Time on Doctor’s Visits</h1>
          <p className="text-[0.8275rem] font-medium leading-[1.34494rem] mt-[1.2rem]">
            Cut down the endless appointments & check-ups, giving you more time
            for what you love.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
