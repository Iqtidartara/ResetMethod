import Image from 'next/image';
import React from 'react';

const Yourself = () => {
  return (
    <div className="max-w-[72rem] mx-auto mt-16 px-4 md:px-0">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="md:w-[60%]">
          <h1 className="text-[#2A3256] text-center text-2xl md:text-3xl lg:text-4xl font-bold tracking-1.25 capitalize w-11/12">
            Save Yourself Months Of Costly{' '}
            <span className="text-[#FE862A]">Trial & Error</span> By Using Our Proven{' '}
            <span className="text-[#FE862A]">RESET Method</span>
          </h1>
          <p className="text-sm md:text-base lg:text-lg xl:text-lg font-medium leading-7 text-[#161E42] mt-4">
            Say goodbye to the constant worry, the endless doctor's appointments, the restrictive diets, and the side effects of medication. With the RESET Method, you can regain control of your health and reverse your diabetes. <br /> <br /> This revolutionary approach to health and wellness has already transformed the lives of hundreds of people just like you. It's not just a new way of managing diabetes - it's a whole new way of living. <br /> <br /> With the 'RESET Method' you're not just managing your diabetes, you're eliminating it!
          </p>
        </div>
        <div className="w-full md:w-[35%] mt-6 md:mt-0">
          <Image src="/honey.png" alt="image" width={790} height={529} className="" />
        </div>
      </div>
    </div>
  );
};

export default Yourself;
