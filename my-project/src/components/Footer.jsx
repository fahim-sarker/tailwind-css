import React from 'react'
import Lg from "../assets/Logo (3).png"
import { CiMail } from "react-icons/ci";
import { FaFacebookF,FaTwitter,FaLinkedin,FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-[#000] lg:py-[160px] py-[30px]'>
      <div className="max-w-Container mx-auto">
       <div className="lg:flex justify-between text-center lg:text-start">
       <div className="lg:w-[40%]">
        <img className='pb-[30px] ml-[100px] lg:ml-[0]' src={Lg} alt="logo" />
        <p className='text-white pb-[10px] text-[16px] font-pops'>mail@yourcompany.com</p>
        <p className='text-white  pb-[10px] text-[16px] font-pops'>+896 120 5889 (Toll free)</p>
        <p className='text-white  pb-[30px] text-[16px] font-pops'>101 Baker Street, New York, USA, 12345</p>
        <div className="text-white flex text-[35px] gap-x-5 justify-center lg:justify-start">
            <FaFacebookF className='bg-[red] p-[8px] rounded-xl'/>
            <FaTwitter className='bg-[red] p-[8px] rounded-xl' />
            <FaLinkedin className='bg-[red] p-[8px] rounded-xl' />
            <FaInstagram className='bg-[red] p-[8px] rounded-xl' />
        </div>
       </div>
        <div className="lg:w-[20%]">
            <h3 className='text-white text-[30px] font-pops font-semibold pb-[20px]'>company</h3>
            <ul className='text-white text-[20px] font-pops  px-[10px]'>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Gallery</li>
            </ul>
        </div>
        <div className="lg:w-[20%]">
        <h3 className='text-white text-[30px] font-pops font-semibold pb-[20px]'>Others</h3>
            <ul className='text-white text-[20px] font-pops  px-[10px]'>
                <li>Blog</li>
                <li>Contact</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="lg:w-[20%]">
        <h3 className='text-white text-[30px] font-pops font-semibold pb-[20px]'>Certificate</h3>
       <div className="flex items-center gap-5 justify-center lg:justify-start">
        <h2 className='text-[30px] text-[skyblue]'>iso</h2>
        <h2 className='text-[20px] text-[pink]'>liquid<span className='text-[green]'>green</span>
        </h2>
       </div>
        </div>
       </div>
      </div>
    </footer>
  )
}

export default Footer
