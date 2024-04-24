import React from 'react'
import G1 from "../assets/g1.png"
import G2 from "../assets/g2.png"
import G3 from "../assets/g3.png"
import G4 from "../assets/g4.png"

const Garadge = () => {
    return (
        <section className='pb-[20px]'>
            <div className="flex justify-between">
                <div className="w-[24%]">
                    <img src={G1} alt="g1" />
                </div>
                <div className="w-[24%]">
                    <img src={G2} alt="g1" />
                </div>
                <div className="w-[24%]">
                    <img src={G3} alt="g1" />
                </div>
                <div className="w-[24%]">
                    <img src={G4} alt="g1" />
                </div>
            </div>
        </section>
    )
}

export default Garadge
