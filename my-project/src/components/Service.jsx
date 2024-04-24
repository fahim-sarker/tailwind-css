import React from 'react'

const Service = () => {
  return (
    <section>
      <div className="lg:flex">
        <div className="lg:w-[45%] lg:py-[100px] lg:ml-[100px] w-full">
            <h3 className='font-pops lg:text-[64px] text-[25px] text-center lg:text-start font-bold'>Our Services</h3>
            <p className='font-pops text-[16px] font-medium lg:w-[405px] w-full px-[10px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        </div>
        <div className="lg:w-[55%] bg-service py-[140px] bg-no-repeat bg-center bg-cover">
            <div className="text-center pb-[20px]">
                <h3 className='font-pops font-bold text-[30px] text-white text-center'>Modern natural oil and gas refineries.</h3>
                </div>
                <div className="lg:ml-[30px]  lg:text-start text-center">
                <a className='text-white rounded-md  hover:bg-black  duration-700  text-[16px] font-pops bg-[red] py-[13px] px-[30px]' href="#">LEARN MORE</a>
                </div>
        </div>
      </div>
    </section>
  )
}

export default Service
