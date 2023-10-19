import Image from "next/image";
import React from "react";

const ShortTerms = () => {
  const taraStyle = {
    backgroundImage: "url('/Vector.png')",
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8" style={taraStyle}>
      <div className="max-w-[72rem] mx-auto">
      <div className="text-center px-4">
          <h1 className="text-[#20284C] md:text-3xl text-xl font-bold pt-6 md:pt-16">
            Short-Term Effects of{" "}
            <span className="text-[#FE862A]"> diabetes </span>
          </h1>
          <p className="mt-8  text-[1.313rem] font-medium  leading-[1.75rem] sm:leading-[2rem]  text-[#525A7E] mx-auto w-2/3 [text-wrap:balance]">
            Living with diabetes can damage your body and well-being, leaving you feeling helpless with significant short-term effects. It&apos;s time to regain control and stop the symptoms from getting worse.
          </p>
        </div>

        <div className="flex flex-wrap justify-center mt-8 sm:mt-16">
          {[
            {
              iconSrc: "/Group 1000000811 (1).png",
              title: "Frequent urination",
              description:
                "The kidneys try to get rid of excess sugar in the blood by filtering it out and sending it to the bladder. This can lead to frequent urination, especially at night.",
            },
            {
              iconSrc: "/Group 1000000811 (2).png",
              title: "Increased thirst",
              description:
                "The body also tries to get rid of excess sugar by making you thirsty. This can lead to drinking more fluids than usual.",
            },
            {
              iconSrc: "/Group 1000000811 (3).png",
              title: "Blurred vision",
              description:
                "High blood sugar levels can damage the blood vessels in the retina, the light-sensitive tissue at the back of the eye. This can lead to blurred vision or even blindness.",
            },
            {
              iconSrc: "/Group 1000000811 (4).png",
              title: "Fatigue",
              description:
                "High blood sugar levels can make it difficult for the body to use energy. This can lead to fatigue, weakness, and lack of energy.",
            },
            {
              iconSrc: "/Group 1000000811 (4).png",
              title: "Dizziness",
              description:
                "High blood sugar levels can cause the brain to not get enough glucose, which can lead to dizziness or lightheadedness.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-full sm:w-1/2 lg:w-1/3 p-4 md:p-6 lg:p-8"
            >
              <Image
                src={item.iconSrc}
                alt={item.title}
                width={50}
                height={30}
              />
              <h1 className="text-lg sm:text-xl font-bold leading-[2rem] text-[#20284C] mt-4">
                {item.title}
              </h1>
              <p className="text-[0.9375rem] font-medium  leading-[1.5rem] text-[#525A7E] text-center mt-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-16">
          <h1 className="text-[#20284C] text-3xl font-bold">
            Long-Term Effects of{" "}
            <span className="text-[#FE862A]"> diabetes </span>
          </h1>
          <p className="mt-8 text-[1.313rem] font-medium leading-[1.75rem] sm:leading-[2rem]  text-[#525A7E] mx-auto w-2/3 [text-wrap:balance]">
            Ignoring diabetes can have severe consequences for your long-term health. These potential complications are not only debilitating but can also be life-threatening.
          </p>
        </div>

        <div className="flex flex-wrap justify-center mt-8 sm:mt-16">
          {[
            {
              iconSrc: "/Group 1000000811 (1).png",
              title: "Heart disease",
              description:
                "Diabetes significantly elevates the risk for serious heart conditions by damaging blood vessels, leading to potential heart attacks, strokes, and becoming the principal cause of death for those with diabetes.",
            },
            {
              iconSrc: "/Group 1000000811 (4).png",
              title: "Stroke",
              description:
                "Individuals with diabetes confront a higher risk of experiencing strokes, a grave condition that can yield irreversible brain damage or, in severe cases, death.",
            },
            {
              iconSrc: "/Group 1000000811 (2).png",
              title: "Kidney disease",
              description:
                "The enduring effects of high blood sugar in diabetics can severely impair kidney functions, potentially leading to irreversible kidney diseases or complete kidney failure.",
            },
            {
              iconSrc: "/Group 1000000811 (3).png",
              title: "Nerve demage",
              description:
                "Diabetic neuropathy, a repercussion of unmanaged diabetes, damages nerves causing persistent numbness, pain in extremities, escalating to infections, and, in extreme cases, amputation.",
            },
            {
              iconSrc: "/Group 1000000811 (2).png",
              title: "Eye problems",
              description:
                "Diabetes compromises blood vessels in the eyes, leading to retinopathy, a condition that can cause consistent vision blurring, severe vision loss, or even complete blindness.",
            },
            {
              iconSrc: "/Group 1000000811 (1).png",
              title: "Gum disease",
              description:
                "Elevated blood sugar levels in diabetics increase the risk of gum complications, potentially leading to serious dental conditions and, eventually, tooth loss.  ",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-full sm:w-1/2 lg:w-1/3 p-4 md:p-6 lg:p-8"
            >
              <Image
                src={item.iconSrc}
                alt={item.title}
                width={50}
                height={30}
              />
              <h1 className="text-lg sm:text-xl font-bold leading-[2rem] text-[#20284C] mt-4">
                {item.title}
              </h1>
              <p className="text-[0.9375rem] font-medium  leading-[1.5rem] text-[#525A7E] text-center mt-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShortTerms;
