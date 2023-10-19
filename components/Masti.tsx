"use client"
import React from 'react';
import { Button } from "./ui/button"

const Masti = () => {
  const divStyle = {
    backgroundImage: "url('/mast chacha .png')",
    backgroundSize: '100% 100%', // You can adjust the background size as needed
    backgroundRepeat: 'no-repeat', // You can adjust the background repeat as needed
  };

  return (
    <div className='h-[22.375rem] max-w-[72rem] mx-auto my-32' style={divStyle}>
      <div className='text-center flex justify-center items-center flex-col gap-4 md:gap-8'>
        <h1 className='text-[#FFF] text-[1.5rem] md:text-[1.875rem] leading-[3.625rem] font-normal mt-4 md:mt-8'>
          What are you waiting For
        </h1>
        <p className='text-[#FFF] text-[0.9rem] md:text-[1.125rem] font-normal leading-[2.1875rem]'>
          Remember, the only thing standing between you and your health is a decision. <br className='hidden md:block' />
          Make the right one today. Click the link below to download your free guide and start your <br className='hidden md:block' /> journey to health and freedom today.
        </p>
        <Button className='bg-[#FE862A] hover:bg-[#FE862A]/80'  >Download now</Button>
      </div>
    </div>
  );
}

export default Masti;
