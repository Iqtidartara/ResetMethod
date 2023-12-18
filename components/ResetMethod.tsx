import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const ResetMethod = () => {
  return (
    <div className="h-auto md:h-[75.1875rem] bg-[#1A1A1A] flex flex-col items-center">
      <div className="max-w-[72rem] mx-auto px-4">
        <div className="text-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold pt-6 md:pt-28">
            What You&apos;ll Discover Inside{" "}
            <span className="text-[#FE862A]">the RESET Method</span>
          </h1>
          <p className="text-center md:text-[1.3125rem] text-[1rem] leading-[176.19%] font-[500] text-[#FFF] opacity-[0.7] mt-[2.12rem] ">
          "The RESET METHOD Guide" is your roadmap to a healthier, happier life.
            <br />
            Here&apos;s a sneak peek of what&apos;s inside:
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center mt-6 md:mt-16 space-y-6 md:space-y-0 md:space-x-6 items-center">
          <div className="w-full sm:w-[60%]">
            <Image
              src="/Group 1000000827.png"
              alt="introImage"
              width={700}
              height={700}
            />
          </div>

          <div className="w-full sm:w-[40%] z-1 relative">
            <Image
              src="/Frame 1171275441 (1).png"
              alt="introImage"
              width={450}
              height={400}
              className="mr-4 sm:mr-[35px]"
            />
            <div className="bg-[#272727] rounded-lg px-6 py-6 mt-2 md:mt-0 relative">
              <div className="flex justify-between text-white text-base md:text-lg">
                <h1>Regular price:</h1>
                <h1>$99</h1>
              </div>
              <div className="flex justify-between mt-2 md:mt-5 text-base md:text-lg text-white">
                <div className="flex items-center">
                  <Image
                    src="/smile.png"
                    alt="introImage"
                    width={20}
                    height={20}
                  />
                  <span className="ml-2">Special price offer:</span>
                </div>
                <h1>FREE</h1>
              </div>
              <Button className="flex flex-col justify-center items-center  rounded-md bg-gradient-to-b from-orange-500 to-orange-700 shadow-md md:gap-2 gap-0 md:px-9 px-6 md:py-10 py-8 mt-[2.5rem] md:w-auto w-full">
          
              {/* Use consistent button text size for all screen sizes */}  
              <h4 className="md:text-[1.20444rem] text-[1rem] font-[600]">
                Get Instant Access For 100% FREE
              </h4>
              {/* Display the same inner text for all screen sizes */}
              <h4 className="md:text-[0.75688rem] text-[.5rem] font-[400]">
                Download now for $37 Free (for a limited time)
              </h4>
            
          </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetMethod;
