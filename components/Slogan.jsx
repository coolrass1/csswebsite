import React from 'react'
import { IoSchoolSharp } from "react-icons/io5";
const Slogan = () => {
  return (
    <div className="flex flex-row flex-1 w-[250px] md:h-full gap-2 items-center justify-start  border-2 md:w-[400px] border-golden">
        <div className=" flex-[1] text-2xl border-r-2 flex  items-center justify-center  border-golden h-full  text-golden">
          <IoSchoolSharp className=''/>
        </div>
        <div className='flex-[3] flex flex-col gap-2'>
          <h5 className='text-golden capitalize'>Professionnal Team</h5>
          <p className='text-2xl capitalize text-white'>Here to Help</p>
        </div>
      </div>
  )
}

export default Slogan