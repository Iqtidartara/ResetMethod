"use client"
import React from 'react';
import { Button } from "./ui/button"
import Image from 'next/image';

const Masti = () => {
  const divStyle = {
    backgroundImage: "url('/mast chacha .png')",
    backgroundSize: '100% 100%', // You can adjust the background size as needed
    backgroundRepeat: 'no-repeat', // You can adjust the background repeat as needed
  };

  return (
    <section className='w-full '>
      <main className='max-w-[72rem] mx-auto px-4 md:py-20 py-8'>
    <div className=' py-12 px-4' style={divStyle}>
      <div className='text-center flex justify-center items-center flex-col gap-4 md:gap-8'>
        <h1 className='text-[#FFF] text-[1.5rem] md:text-[1.875rem] md:leading-[3.625rem] leading-normal font-normal mt-4 md:mt-8'>
          What are you waiting For
        </h1>
        <p className='text-[#FFF] text-[0.9rem] md:text-[1.125rem] font-normal md:leading-[2.1875rem] leading-normal'>
          Remember, the only thing standing between you and your health is a decision. <br className='hidden md:block' />
          Make the right one today. Click the link below to download your free guide and start your <br className='hidden md:block' /> journey to health and freedom today.
        </p>
        <Button  className="bg-gradient-to-t from-[#FFA448] to-[#FE862A] gap-2 md:py-6 md:px-8 sm:py-6 sm:px-4 ">
  <span className="text-[1rem] font-[600] leading-[162.295%]">Download Now</span>
  <Image src="/tar.png" alt="Car hub Logo" width={16} height={20} />
</Button>
      </div>
    </div>
    </main>
    </section>
  );
}

export default Masti;
