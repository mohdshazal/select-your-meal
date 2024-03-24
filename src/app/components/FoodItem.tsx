import React, { useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import Modal from './Modal'
const FoodItem = ({item}:any) => {
  const [isChecked,setIsChecked]=useState<boolean>(false)
  const [isModal,setIsModal]=useState<boolean>(false)

  const handleCheck=()=>{
    setIsChecked(!isChecked)
  }
  const openModal=()=>{
    setIsModal(true)
  }
  const closeModal=()=>{
    setIsModal(false)
  }
  return (
    <>
    {
      isModal && <Modal onClose={closeModal}/>
    }
    <div 
    className={clsx('flex border-b-2 gap-3 items-center', { 'border-[#410DEB] border-solid rounded-lg border-4': isChecked})}>
      <div className='p-2 min-w-20'>
        <Image
          src="/hummus.jpg"
          alt=""
          width={90}
          height={80}
        />
      </div>
      <div className='font-semibold text-lg min-w-48'>
        <div className='whitespace-nowrap'>{item.name}</div>
        <div className='flex gap-3'>
          <div>AED {item.price}</div>
          <div className='flex gap-1 text-[#74e108]'>
            <span>{item.rating}</span>
          <Image
            src="/star.png"
            alt=""
            width={15}
            height={15}
            className='h-3 w-3 mt-2'
          />
          </div>
        </div>
      </div>
      <div className='font-medium text-sm text-[#2F3333A6]'>{item.description}</div>
      <div className='flex gap-2 items-center mr-2'>
        <div onClick={openModal}>
          <Image
            src="eye.svg"
            alt=""
            width={35}
            height={35}
            className='cursor-pointer'
          />
        </div>
        {
          !isChecked &&
        <div onClick={handleCheck}>
          <Image
            src="circle.svg"
            alt=""
            width={30}
            height={30}
            className='cursor-pointer'
          />
        </div>
        }
        {
          isChecked &&
        <div onClick={handleCheck}>
          <Image
            src="/blue-check.png"
            alt=""
            width={33}
            height={33}
            className='cursor-pointer'
          />
        </div>
        }
      </div>
    </div>
    </>
  )
}

export default FoodItem