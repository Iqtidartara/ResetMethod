"use client"
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Medical from "@/components/Medical";
import Cards from "@/components/Cards";
import About from "@/components/About";
import ShortTerms from "@/components/ShortTerms";
import Introduction from "@/components/Introduction";
 import ResetMethod from "@/components/ResetMethod";
import UnionPay from "@/components/UnionPay";
import Yourself from "@/components/Yourself";
import AccordionDemo from "@/components/AccordionDemo";
import Masti from "@/components/Masti";
import Footer from "@/components/Footer";




const page = () => {
  const divStyle = {
    backgroundImage: "url(/pagebg.png)",
    backgroundSize: "100% 100%", // You can adjust the background size as needed
    backgroundRepeat: "no-repeat", // You can adjust the background repeat as needed
  };

  return (
    <main className="relative overflow-x-hidden">
        <div className="sh-[75.1875rem]" style={divStyle}>
      <Navbar /> 
       <Hero />
    <Medical />
       <Cards />
    </div>
       <About />
     <ShortTerms />
      <Introduction />
       <ResetMethod />
    <UnionPay />
     <Yourself />
      <AccordionDemo />
     <Masti />
     <Footer />  
    </main>
  );
};

export default page;
