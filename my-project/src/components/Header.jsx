import React from 'react'
import { CiMail } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <header className='bg-[#000] border-b-2 border-[#FFB800]'>
        <div className="max-w-Container mx-auto">
            <div className="lg:flex py-[16px] bg-[#000]">
              <div className="lg:w-1/4 w-full lg:pb-0 pb-3">
                <div className="text-white flex justify-center lg:justify-start items-center gap-[9px] lg:text-[16px]">
                  <CiMail/>
                  <p className='font-pops'>mail@yourcompany.com</p>
                </div>
              </div>
              <div className="lg:w-1/4 w-full lg:pb-0 pb-3">
                <div className="text-white flex justify-center lg:justify-start items-center gap-[9px] lg:text-[16px]">
                  <BsTelephone/>
                  <p className='font-pops'>+896 120 5889 (Toll free)</p>
                </div>
              </div>
              <div className="lg:w-1/2 w-full lg:pb-0 pb-3">
                <div className="text-white flex justify-center lg:justify-end items-end gap-x-4 lg:text-[16px]">
                  <FaFacebook/>
                  <FaTwitter/>
                  <FaInstagram/>
                  <FaLinkedinIn/>
                </div>
              </div>
            </div>
        </div>
      </header>
    </>
  )
}

export default Header
