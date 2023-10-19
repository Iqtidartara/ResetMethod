import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="w-full max-w-[72rem] mx-auto py-8">
      <div className="flex  items-center justify-between  sm:flex-row px-4 lg:px-0">
        <div className="flex items-center space-x-4 mb-4 lg:mb-0">
          <Image src="/logo.png" alt="logo" width={155} height={50} />
        </div>
        <Button  className="bg-gradient-to-t from-[#FFA448] to-[#FE862A] py-2 lg:py-3 px-3 lg:px-4 h-13 lg:h-13 w-auto lg:w-auto flex items-center justify-center space-x-2">
  <span className="text-base lg:text-lg  sm:text-sm">Download Now</span>
  <Image src="/tar.png" alt="Car hub Logo" width={15} height={15} />
</Button>

      </div>
    </nav>
  );
};

export default Navbar;
