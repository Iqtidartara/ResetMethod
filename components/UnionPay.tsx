"use client"
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button"
import Rating from "./Rating";

const testimonials = [
  {
    name: "Sarah Thompson ",
    rating: 5,
    avatar: "/sarah.png",
    content: "I can't express how grateful I am for the RESET Method. It's been a truly life-changing journey towards a diabetes-free life. The RESET Method provided me with invaluable insights and strategies, making it a comprehensive solution that I wholeheartedly recommend all",
    heading: "“Life-changing, diabetes-free journey!”",
  },
  {
    name: "Michael Rodriguez",
    rating: 5,
    avatar: "/micheal.png",
    content: "RESET Method has transformed my life, allowing me to bid farewell to medications and embrace a path to lasting health. It's more than just a method; it's a holistic approach that prioritizes your well-being over quick fixes. I am genuinely thankful for this transformation.",
    heading: "“No more meds, just health!”",
  },{
    name: "Emily Chang",
    rating: 5,
    avatar: "/emy.png",
    content: "Thanks to the RESET Method, diabetes is now history in my life. I'm thriving, feeling better than I ever thought possible. This method has not only improved my health but also my overall outlook on life. It's an extraordinary journey that I wouldn't trade for anything.",
    heading: "Diabetes is history, thanks!",
  },{
    name: "John Turner",
    rating: 5,
    avatar: "/jhon.png",
    content: "I feel absolutely revived, renewed, and most importantly, I'm diabetes-free—all thanks to the incredible RESET Method. It's not just about managing a condition; it's about reclaiming a vibrant, fulfilling life. The RESET Method is nothing short of remarkable.",
    heading: "Revived, renewed, and diabetes-free!",
  },{
    name: "Maria Sanchez",
    rating: 5,
    avatar: "/maria.png",
    content: "Thanks to the RESET Method, I've rediscovered life without the burdens of diabetes. It's been a remarkable journey, one filled with newfound energy and vitality. This method has made a significant impact on my life, and I couldn't be happier.",
    heading: "Rediscovered life without diabetes!",
  },{
    name: "David Patel",
    rating: 5,
    avatar: "/david.png",
    content: "With the RESET Method, there's no more fear—just the sweet freedom of a diabetes-free life. It's an empowering experience that goes beyond simply managing a condition. This method equips you with the tools and knowledge to take control of your health and future.",
    heading:"No more fear, just freedom!"
  },
];

const UnionPay = () => {
  const divStyle = {
    backgroundImage: "url('/Union.png')",
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className="h-auto" style={divStyle}>
      <div className="max-w-[72rem] mx-auto px-4">
        <div className="flex justify-center pt-8 ">
        <h3 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl leading-tight text-[#EA7216] px-2 sm:px-4 py-1 sm:py-2 md:px-6 md:py-2 font-[500] gradientbg rounded-full hover:bg-[#EA7216] hover:text-white mt-10">
          Free New eBook Reveals{" "}
        </h3>
        </div>

        <div className="text-center mt-4">
        <h1 className="text-[2.25rem] text-[#20284C] font-bold">
  What others say about{" "}
  <span className="text-[#FE862A]"> The RESET Method </span>
</h1>

          <p className="text-[1rem] sm:text-[1.3125rem] opacity-40 font-medium leading-[1.75rem] sm:leading-[2.3125rem] text-center">
            Don&apos;t just take my word for it. Here are some real-life case studies
            of people who have successfully <br /> reversed their diabetes using
            the RESET Method.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1.875rem] sm:gap-[4.6875rem] flex-wrap items-start mt-6 sm:mt-14">
          {testimonials.map((testimonial, index,heading) => (
            <div
              key={index}
              className="max-w-[100%] sm:max-w-[33.40275rem] bg-[#FFF] rounded-[1.11113rem] shadow-lg p-[1.125rem] sm:p-[1.66669rem] gap-[1.125rem] items-start"
            >
              <div className="flex items-center">
                <Image
                  className="w-[2.5rem] md:h-[3rem] sm:w-[2.75rem] h-[2.75rem] rounded-full mr-[0.625rem] sm:mr-4"
                  src={testimonial.avatar}
                  alt={`Avatar of ${testimonial.name}`}
                  width={40}
                  height={40}
                />
                <div className="text-[0.75rem] sm:text-sm">
                  <p className="text-[#333] sm:text-[#333] leading-[1.25rem] sm:leading-[1.44844rem] text-[0.875rem] sm:text-[0.96563rem] font-normal">
                    {testimonial.name}
                  </p>
                  <p>
                    <Rating value={testimonial.rating} max={5} />
                  </p>
                </div>
              </div>
              <h1 className="text-[#333] sm:text-[#333] text-[1rem] sm:text-[1.125rem] leading-[1.625rem] sm:leading-[1.92319rem] font-medium my-[0.875rem] sm:my-4">
                {testimonial.heading}
              </h1>
              <p className="text-[#505074] sm:text-[#505074] text-[0.875rem] sm:text-[1rem] leading-[1.5rem] sm:leading-[1.80556rem] font-normal">
                {testimonial.content}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
        <Button className="py-[2.12688rem] px-[3.125rem] rounded-lg mt-8 sm:mt-10 bg-[#FE862A] ">
            <div className="flex flex-col items-center gap-2">
              {/* Use consistent button text size for all screen sizes */}
              <h4 className="text-[1rem] font-medium">
                Get Instant Access For 100% FREE
              </h4>
              {/* Display the same inner text for all screen sizes */}
              <h4 className="text-[0.75rem] font-normal">
                Download now for $37 Free (for a limited time)
              </h4>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UnionPay;
