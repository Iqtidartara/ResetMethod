import Image from 'next/image'
import React from 'react'

const Yourself = () => {
  return (
    <section className='w-full'>
      <main className='mx-auto max-w-[72rem] px-4 md:py-20 py-8'>

        <h2 className='md:text-[3rem] text-[2rem] font-[700] capitalize md:leading-normal leading-[1.2] tracking-[-0.125rem] text-center text-[#2A3256]'>Save Yourself Months Of Costly <span className='text-[#FE862A]'>Trial & Error </span> By Using Our Proven <span className='text-[#FE862A]'>RESET Method</span></h2>
<div className='flex flex-col md:flex-row items-center justify-start mt-[2.23rem] md:gap-[51px] gap-3'>

<div className='md:w-1/2 w-full'>
  <p className='text-[#0C1438] md:text-[1.3125rem] text-[1rem] font-[400] md:leading-[166.19%] leading-[1.2] opacity-[0.8]'>
  Why waste months struggling along, trying to figure things out for yourself? 
<br/><br className='md:block hidden'/>
You can save this time and get a much better result when you get our expert advice and use our FREE blueprint to reverse diabetes. It&apos;s like a shortcut which gives you several main benefits.
<br/><br className='md:block hidden'/>
Are you ready to reverse diabetes in the shortest time possible? To regain your health without months of hard work it usually takes? Then download your free eBook while you still can.
  </p>
</div>
<div className='md:w-1/2 w-full flex items-center md:justify-start justify-center'>
<Image
src="/honey.png" alt='oldman'
width={510}
height={455}
 />
</div>
</div>

      </main>
    </section>
  )
}

export default Yourself