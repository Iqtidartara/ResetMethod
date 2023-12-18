import Image from 'next/image'
import React from 'react'

const Introduction = () => {
  return (
    <section className='w-full'>
      <main className='mx-auto max-w-[72rem] px-4 py-20 flex flex-col md:flex-row items-start justify-center gap-10'>

        <div className='md:w-1/2 w-full'>
          <Image 
          src="/Introduction.png"
          width={503}
          height={565}
          alt='intoduction'
          className='md:w-[503px] md:h-[565px] w-full ' />
        </div>
        <div className='flex flex-col items-start justify-start md:w-1/2 w-full'>

<h1 className='text-[#2A3256] md:text-[2rem] text-[2rem] md:leading-[1.4] leading-[1.1] font-[700] capitalize'>Introducing the <span className='text-[#FE862A]'>RESET Method</span> </h1>

<p className='text-[1.25rem] md:leading-[176.19%] leading-normal font-[400] text-[#0C1438] mt-4 md:mt-[2.199rem]'>The RESET Method is a game-changer. It&apos;s a 5-step formula that helps you understand the cause of diabetes, identify the events that cause diabetes, fix the triggers in your body that cause diabetes, reverse diabetes through dietary and exercise changes, and make lifestyle changes to prevent relapse.
<br/><br className='md:block hidden'/>
The RESET Method is different because it&apos;s not about managing diabetes - it&apos;s about reversing it. It&apos;s about helping your body heal itself, not just treating the symptoms.
<br/><br className='md:block hidden'/>
It&apos;s about taking control of your health and living a life full of energy, vitality, and freedom.</p>
        </div>
      </main>
    </section>
  )
}

export default Introduction