import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <div className="w-full max-w-[72rem] mx-auto mt-10 mb-10">
      <div className="flex flex-col md:flex-row justify-between px-4">
        <div className="w-full md:w-[50%] mt-12 text-center md:text-left"> {/* Added text-center class for centering content */}
          <h1 className="font-bold md:text-[3rem] text-[2rem]  capitalize md:mb-0 leading-[1.1]">
            Why most people <span className="text-[#FE862A]">fail</span> to reverse{" "}
            <span className="text-[#FE862A]">diabetes</span>
          </h1>
          <p className="mt-8 md:text-[1.3125rem] text-[1rem]  font-[400] md:leading-[176.19%] leading-normal  text-[#161E42]">
          The unfortunate reality is that 95% of individuals with diabetes will never be able to reverse their condition. This is because they have been deceived, controlled, and kept unaware by the very individuals who are meant to safeguard their well-being.
<br/><br className='md:block hidden'/>
Moreover, the majority of traditional approaches have proved ineffective as they merely target the symptoms without addressing the underlying cause. 
<br/><br className='md:block hidden'/>
Consequently, these individuals find themselves trapped in a cycle of medication and dietary limitations that solely alleviate the symptoms instead of tackling the root cause.
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
