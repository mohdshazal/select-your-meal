"use client"
import React from 'react'
import Image from 'next/image'
const CartItem = ({item,onDelete}:any) => {
  const deleteItem=()=>{
    onDelete(item.id) 
  }
  return (
    <div className='flex border border-[#D3DBDA] gap-5 items-center'>
        <div className='p-2'>
        <Image
        src="/hummus.jpg"
        alt=""
        width={72}
        height={65}
        />  
        </div>
        <div className='font-semibold min-w-44'>
            <div className='text-lg text-[#410DEB] whitespace-nowrap'>{item.name}</div>
            <div className='text-sm'>AED {item.price}</div>
        </div>
        <div className='' onClick={deleteItem}>
        <Image
        src="trash.svg"
        alt=""
        width={20}
        height={20}
        className='cursor-pointer'
        /> 
        </div>
    </div>
  )
}

export default CartItem