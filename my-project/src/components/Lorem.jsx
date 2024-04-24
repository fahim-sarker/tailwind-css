import React from 'react'
import { FaAngleRight } from "react-icons/fa";

const Lorem = () => {
    return (
        <section className='bg-[#F0F0F0] lg:py-[135px] py-[30px]'>
            <div className="max-w-Container mx-auto">
                <div className="lg:flex justify-between">
                    <div className="lg:w-[32%] bg-lrm2 py-[65px] px-[45px] mb-[20px] bg-no-repeat bg-cover bg-center">
                        <p className='text-black text-[24px] pb-[50px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
                        <div className=" lg:text-start text-center">
                            <a className='text-white text-[16px] font-pops rounded-md  hover:bg-black  duration-700  bg-[gray] py-[13px] px-[30px]' href="#">Read more</a>
                        </div>
                    </div>
                    <div className="lg:w-[32%]  bg-lrm1 py-[65px] px-[45px] mb-[20px] bg-no-repeat bg-cover bg-center">
                        <p className='text-black text-[24px] pb-[50px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
                        <div className=" lg:text-start text-center">
                            <a className='text-white text-[16px] font-pops rounded-md  hover:bg-black  duration-700  bg-[gray] py-[13px] px-[30px]' href="#">Read more</a>
                        </div>
                    </div>
                    <div className="lg:w-[32%]  bg-lrm py-[65px] px-[45px] mb-[20px] bg-no-repeat bg-cover bg-center">
                        <p className='text-black text-[24px] pb-[50px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
                        <div className=" lg:text-start text-center">
                            <a className='text-white text-[16px] font-pops rounded-md  hover:bg-black  duration-700  bg-[gray] py-[13px] px-[30px]' href="#"> Read more</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Lorem
