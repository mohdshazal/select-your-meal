import React from 'react'
import Image from 'next/image'
const MainHeader = () => {
  return (
    <div className='flex justify-around bg-white pt-5 pb-5 relative'>
      <div className='flex items-center gap-4'>
        <Image
          src="cross.svg"
          alt=""
          width={35}
          height={35}
          className='bg-[#F3F3F3] rounded-full p-2 cursor-pointer'
        />
        <span className='font-bold text-lg'>Select your meals</span>
      </div>
      <div className='flex border border-#D3DBDA rounded-[24px] py-3 px-5 gap-5'>
        <div className='text-[#410DEB] font-bold text-base'>Step 1/3</div>
        <div className='flex gap-2 items-center'>
          <div className='w-4 h-4 bg-[#410DEB] rounded-full'></div>
          <div className='w-4 h-4 bg-[#E0E8E4] rounded-full'></div>
          <div className='w-4 h-4 bg-[#E0E8E4] rounded-full'></div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 bg-blue-500 h-1.5 w-3/12"></div>
    </div>
  )
}

export default MainHeader