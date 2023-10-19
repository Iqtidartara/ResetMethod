import Image from 'next/image';
import React from 'react';

const Introduction= () => {
  return (
    <div className="max-w-[72rem] mx-auto flex items-center justify-center py-10">
      <div className="flex flex-col md:flex-row justify-between px-4">
      <div className="w-[100%] md:w-[40%] mt-6 md:mt-0">
          <Image src="/bg (3).png" alt="image" width={400} height={200} className="" />
        </div>
        <div className="md:w-[60%]">
          <h1 className="font-bold text-[2.375rem] [text-wrap:balance] ">
          Introducing the <span className="text-[#FE862A]"> RESET Method</span> 
          </h1>
          <p className=" [text-wrap:balance] text-[1rem] md:text-[1.3125rem] leading-[2.3125rem] font-normal text-[#161E42] mt-4 md:mt-10">
            Say goodbye to the constant worry, the endless doctor&apos;s appointments,
            the restrictive diets, and the side effects of medication. With the
            RESET Method, you can regain control of your health and reverse your
            diabetes. <br /> <br /> This revolutionary approach to health and
            wellness has already transformed the lives of hundreds of people just
            like you. It&apos;s not just a new way of managing diabetes - it&apos;s a whole
            new way of living. <br /> <br />
            With the &apos;RESET Method&apos; you&apos;re not just managing your diabetes, you&apos;re
            eliminating it!
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Introduction;
