import React from 'react'

const Supply = () => {
    return (
        <section>
            <div className="lg:flex">
                <div className="lg:w-[50%] bg-suply py-[140px] bg-no-repeat bg-center bg-cover">
                    <div className="text-start pb-[20px]">
                        <h3 className=' lg:ml-[20px] font-pops font-bold text-[30px] text-white lg:text-start text-center'>Supply of national industries.</h3>
                    </div>
                    <div className="lg:ml-[20px]  lg:text-start text-center">
                        <a className='text-white text-[16px] font-pops rounded-md  hover:bg-black  duration-700  bg-[red] py-[13px] px-[30px]' href="#">LEARN MORE</a>
                    </div>
                </div>
                <div className="lg:w-[50%] bg-suply1 py-[140px] bg-no-repeat bg-center bg-cover">
                    <div className="text-center pb-[20px]">
                        <h3 className='font-pops font-bold text-[30px] text-white text-center'>National fuel distribution and supply.</h3>
                    </div>
                    <div className="lg:ml-[30px] lg:text-start text-center">
                        <a className='text-white text-[16px] font-pops  hover:bg-black  duration-700   rounded-md bg-[red] py-[13px] px-[30px]' href="#">LEARN MORE</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Supply
