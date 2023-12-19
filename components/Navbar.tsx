import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="w-full max-w-[72rem] mx-auto px-4 py-8">
      <div className="flex  items-center md:justify-between justify-center  px-4 ">
        <div className="flex items-center space-x-4 mb-4 lg:mb-0">
          <Image src="/logo.png" alt="logo" width={600} height={300} className='w-[175px] h-[50px]' />
        </div>
        <div className='flex items-center justify-center md:block hidden'>
        <Button  className="bg-gradient-to-t from-[#FFA448] to-[#FE862A] gap-2 md:py-8 md:px-6 sm:py-6 sm:px-4 ">
  <span className="text-[1rem] font-[600] leading-[162.295%]">Download Now</span>
  <Image src="/tar.png" alt="Car hub Logo" width={16} height={20} />
</Button>
</div>
      </div>
    </nav>
  );
};

export default Navbar;
