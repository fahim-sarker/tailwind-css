import React, { useState } from 'react'
import Logo from "../assets/Logo (3).png"
import { MdCancelPresentation } from "react-icons/md";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  let [show, setShow] = useState(false)

  let handleshow = () =>{
    setShow(!show)
  }
  return (
    <>
      <nav className='bg-[red] py-7'>
        <div className="max-w-Container mx-auto px-3 lg:px-0">
          <div className="flex justify-between items-center">
            <div className="w-[30%]">
              <img src={Logo} alt="logo" />
            </div>
            <div className="">
              <ul className={`lg:flex gap-x-[47px] items-center absolute top-0 left-0 lg:static duration-700 ${show == true ?"bg-[gray] top-[210px] w-full text-center h-[270px]" : "w-full left-[-500px] top-[220px]"}`}>
                <li className='text-white text-[20px]  font-semibold  font-pops'><a href="#">Home</a></li>
                <li className='text-white text-[20px] font-semibold  font-pops'><a href="#">About</a></li>
                <li className='text-white text-[20px] font-semibold  font-pops'><a href="#">Services</a></li>
                <li className='text-white text-[20px] font-semibold  font-pops'><a href="#">Gallery</a></li>
                <li className='text-white text-[20px] font-semibold  font-pops'><a href="#">Blog</a></li>
                <li className='text-white text-[20px] rounded-md  hover:bg-black  duration-700  font-semibold  font-pops border-2 border-[#fff] py-2 px-4 inline-block'><a href="#">CONTACT</a></li>
              </ul>
            </div>
            <div className="lg:hidden" onClick={handleshow}>
              {show == true ? <MdCancelPresentation /> : <FaBars />}
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
