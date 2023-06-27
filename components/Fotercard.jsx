import Link from 'next/link';
import React from 'react'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
const Fotercard = () => {
  return (
<div className='flex flex-col gap-12 items-center justify-center'>
          <h1 className='text-2xl text-[#bbb9b9]'>Area of Law</h1>
          <ul className='flex flex-col gap-2 items-start justify-start'>
            <li className='flex justify-center items-center gap-2 text-lg text-[#bbb9b9]'>
              <MdKeyboardDoubleArrowRight /> <Link href="#">criminal</Link>
            </li>
            <li className='flex justify-center items-center gap-2 text-lg text-[#bbb9b9]'>
              <MdKeyboardDoubleArrowRight /> <Link href="#">criminal</Link>
            </li>
            <li className='flex justify-center items-center gap-2 text-lg text-[#bbb9b9]'>
              <MdKeyboardDoubleArrowRight /> <Link href="#">Other service</Link>
            </li>
            <li className='flex justify-center items-center gap-2 text-lg text-[#bbb9b9]'>
              <MdKeyboardDoubleArrowRight /> <Link href="#">Housing Law</Link>
            </li>
            <li className='flex justify-center items-center gap-2 text-lg text-[#bbb9b9]'>
              <MdKeyboardDoubleArrowRight /> <Link href="#">Employement</Link>
            </li>
            <li className='flex justify-center items-center gap-2 text-lg text-[#bbb9b9]'>
              <MdKeyboardDoubleArrowRight /> <Link href="#">Immigration</Link>
            </li>
            <li className='flex justify-center items-center gap-2 text-lg text-[#bbb9b9]'>
              <MdKeyboardDoubleArrowRight /> <Link href="#">family</Link>
            </li>
          </ul>
        </div>
  )
}

export default Fotercard