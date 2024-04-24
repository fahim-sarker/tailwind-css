import React from 'react'

const Contact = () => {
  return (
    <section className='bg-[red] py-[45px] border-b-2 border-[#FFB800] px-[10px] lg:-px-[0]'>
      <div className="max-w-Container mx-auto">
        <div className="flex justify-between items-center">
            <div className="">
                <h2 className='font-pops text-white lg:text-[36px] font-bold'>Want to join as member branch in your area?</h2>
            </div>
            <div className="">
                <a className='font-pops text-white rounded-md hover:bg-black  duration-700  text-[16px] lg:border-2 border-bg-[#fff] lg:py-[10px] lg:px-[20px] border-2 border-bg-[#fff] py-[10px] px-[10px]' href="#">CONTACT</a>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
