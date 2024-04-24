import React from 'react'

const Banner = () => {
  return (
    <>
      <section className='bg-ban lg:py-[257px] py-[80px]'>
        <div className="max-w-Container mx-auto">
            <div className="">
                <h2 className=' text-white lg:text-[64px] lg:w-[830px] pb-8 font-pops text-center lg:text-start px-[10px] lg:px-[0px]'>We exist since 1975 on the oil and gas industry.</h2>
                <div className="text-center lg:text-start ">
                <a className='rounded-md   hover:bg-black  duration-700 text-white text-[16px] font-pops bg-[red] py-[13px] px-[30px]' href="#">LEARN MORE</a>
                </div>
            </div>
        </div>
      </section>

    </>
  )
}

export default Banner
