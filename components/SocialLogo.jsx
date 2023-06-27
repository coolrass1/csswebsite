import React from 'react'
import {
    FaFacebookF,
    FaTwitter,
    FaInstagramSquare,

  } from "react-icons/fa";

const SocialLogo = () => {
  return (
    <div className=" mt-2  flex gap-5">
          
    <div className="flex justify-center items-center text-sm text-primary   ">
<FaFacebookF />
</div>
<div className="flex justify-center items-center text-sm text-primary  ">
<FaTwitter />
</div>
<div className="flex justify-center items-center text-sm text-primary  ">
<FaInstagramSquare />
</div>
</div>
  )
}

export default SocialLogo

