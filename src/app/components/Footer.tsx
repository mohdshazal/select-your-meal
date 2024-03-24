import React from 'react'
import Image from 'next/image'
const Footer = () => {
    return (
        <div className='w-full bg-white flex justify-end pt-3 pb-3 pr-20'>
            <div className='rounded-3xl text-white bg-[#410DEB] p-4 flex justify-center items-center gap-4 w-1/4'>
                <span className='font-normal text-lg'>Payment</span>
                <Image
                    src="/arrow-right.png"
                    alt=""
                    width={30}
                    height={30}
                />
            </div>
        </div>
    )
}

export default Footer