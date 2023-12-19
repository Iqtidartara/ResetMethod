const Hero = () => {
  return (
    <div className="w-full max-w-[72rem] mx-auto mt-10">
      <div className="flex flex-col items-center text-center not-italic px-4">
        <h3 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl leading-tight text-[#EA7216] px-2 sm:px-4 py-1 sm:py-2 md:px-6 md:py-2 font-[500] gradientbg rounded-full hover:bg-[#EA7216] hover:text-white">
          Free New eBook Reveals
        </h3>
        <h1 className="md:text-[3.8rem] text-[2rem]  text-center text-[#171e3d] md:font-[700] font-[700] md:leading-[137.097%] leading-[1.2] tracking-[-0.125rem] mt-2 sm:mt-4 md:mt-8">
          How This Little-Known Secret <br className="hidden md:block" />
          <span className="text-[#FE862A]">&apos;RESET Method&apos;</span>{" "}
          Triggers Your Body&apos;s <br className="hidden md:block" /> Natural
          Mechanisms to
          <span className="text-[#FE862A]"> Reverse Diabetes</span>
        </h1>
        <h3 className="md:text-[1.4375rem] text-[1rem] font-[500] text-[#161E42] md:leading-[121.739%] leading-[1.2] mt-3 sm:mt-4 md:mt-6">
          Without Expensive Pills, Dangerous Injections, Or Frustrating Dietary
          Restrictions
        </h3>
      </div>
    </div>
  );
};

//  text-wrap: balance;

export default Hero;
