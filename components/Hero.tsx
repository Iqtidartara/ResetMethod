const Hero = () => {
  return (
    <div className="w-full max-w-[72rem] mx-auto mt-10">
      <div className="flex flex-col items-center text-center not-italic px-4">
        <h3 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl leading-tight text-[#EA7216] px-2 sm:px-4 py-1 sm:py-2 md:px-6 md:py-2 font-[500] gradientbg rounded-full hover:bg-[#EA7216] hover:text-white">
          Free New eBook Reveals
        </h3>
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[3.4rem] [text-wrap:balance] text-center text-[#171e3d] font-[700] leading-[2rem] md:leading-[3rem] lg:leading-[4rem] xl:leading-[5rem] tracking-normal mt-2 sm:mt-4 md:mt-8">
          How This Little-Known Secret <br className="hidden md:block" />
          <span className="text-[#FE862A]">'RESET Method'</span>{" "}
          Triggers Your Body's <br className="hidden md:block" /> Natural
          Mechanisms to
          <span className="text-[#FE862A]"> Reverse Diabetes</span>
        </h1>
        <h3 className="text-xs sm:text-sm md:text-base lg:text-lg [text-wrap:balance] xl:text-xl 2xl:text-2xl leading-tight text-[#161E42] mt-2 sm:mt-4 md:mt-6">
          Without Expensive Pills, Dangerous Injections, Or Frustrating Dietary
          Restrictions
        </h3>
      </div>
    </div>
  );
};

//  text-wrap: balance;

export default Hero;
