import React from 'react'

const ScrollerCard = ({ category, onClick }: { category: string, onClick: any }) => {
  return (
    <div onClick={onClick} className='bg-[#410DEB] border border-#D3DBDA rounded-[24px] w-36 pr-4 py-3 pl-4 m-auto cursor-pointer'>
      <span className='text-white font-medium text-base whitespace-nowrap'>{category}</span>
    </div>
  )
}

export default ScrollerCard