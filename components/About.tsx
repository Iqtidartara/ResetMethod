import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <div className="w-full max-w-[72rem] mx-auto mt-10 mb-10">
      <div className="flex flex-col md:flex-row justify-between px-4">
        <div className="w-full md:w-[50%] mt-12 text-center md:text-left"> {/* Added text-center class for centering content */}
          <h1 className="font-bold text-[1.5rem] md:text-[1.6rem] capitalize md:mb-0">
            Why most people <span className="text-[#FE862A]">fail</span> to reverse{" "}
            <span className="text-[#FE862A]">diabetes</span>
          </h1>
          <p className="mt-8 text-[0.875rem] md:text-[1rem] xl:text-[1rem] font-medium leading-[2rem] text-[#161E42]">
            Say goodbye to the constant worry, the endless doctor&apos;s appointments,
            the restrictive diets, and the side effects of medication. With the
            RESET Method, you can regain control of your health and reverse your
            diabetes. <br /> <br /> This revolutionary approach to health and
            wellness has already transformed the lives of hundreds of people just
            like you. It&apos;s not just a new way of managing diabetes - it&apos;s a whole
            new way of living. <br /> <br />
            With the&apos;RESET Method&apos; you&apos;re not just managing your diabetes, you&apos;re
            eliminating it!
          </p>
        </div>
        <div className="w-full md:w-[40%] mt-6 md:mt-0">
          <Image src="/intro.png" alt="image" width={599.33} height={630} className="" />
        </div>
      </div>
    </div>
  );
};

export default About;
