import Link from 'next/link'
import React from 'react'
import {FaUsers} from 'react-icons/fa'
const LawareaCard = () => {
  return (
    <div className='  py-5 md:py-auto w-full  md:w-[400px] flex 
    flex-col items-center justify-center gap-7
    border-[0.3px] border-golden md:py-12 shadow-sm'>
    <div className='text-6xl text-golden'><FaUsers/></div>
    <div className="w-[20%] h-[0.5px] bg-golden "></div>
    <h1 className='text-2xl text-secondary '>Criminal Law</h1>
    <p className='text-base text-center text-secondary'>
      Church Street Solicitors Ltd provides reliable legal services across
      the UK. Our team of defence
    </p>
    <Link href={"#"} className='text-red-900'>read more</Link>
  </div>
  )
}

export default LawareaCard