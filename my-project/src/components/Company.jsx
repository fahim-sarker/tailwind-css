import React from 'react'
import Log1 from "../assets/Logo1.png"
import Log2 from "../assets/Logo2.png"
import Log3 from "../assets/Logo3.png"
import Log4 from "../assets/Logo4.png"

const Company = () => {
  return (
    <section className='lg:py-[100px]'>
      <div className="max-w-Container mx-auto">
        <div className="flex">
          <div className="w-[25%]">
            <img src={Log1} alt="Log1" />
          </div>
          <div className="w-[25%]">
          <img src={Log2} alt="Log1" />
          </div>
          <div className="w-[25%]">
          <img src={Log3} alt="Log1" />
          </div>
          <div className="w-[25%]">
          <img src={Log4} alt="Log1" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Company
