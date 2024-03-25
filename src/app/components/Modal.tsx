"use client"
import React, { useState } from 'react'
import Image from 'next/image'
const Modal = ({ onClose }: any) => {
  const images = [
    "/hummus-modal.jpg",
    "/pan-cake-modal.jpeg",
    "/hummus-modal.jpg",
    "/pan-cake-modal.jpeg",
    "/hummus-modal.jpg",
    "/pan-cake-modal.jpeg"
  ]
  const [imageIndex,setImageIndex]=useState<number>(0)
  const handleSlide = (type: string) => {
    if (type === "increment") {
      setImageIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    } else {
      setImageIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    }
  };
  const [isWishListed, setIsWishListed] = useState<boolean>(false)
  const handleWishList = () => [
    setIsWishListed(!isWishListed)
  ]
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white w-1/4 rounded-lg">
        <div className='relative'>
          <Image src={images[imageIndex]} alt="" width={100} height={30} className={`w-full h-48`}/>
          {
            !isWishListed &&
            <Image
              src="/heart.png"
              alt=""
              width={35}
              height={35}
              className='absolute top-3 right-12 border-white bg-[#d6d0ca] rounded-full p-2 cursor-pointer'
              onClick={handleWishList}
            />
          }
          {
            isWishListed &&
            <Image
              src="/red-heart.png"
              alt=""
              width={40}
              height={40}
              className='absolute top-3 right-12 border-white rounded-full p-2 cursor-pointer'
              onClick={handleWishList}
            />
          }
          <Image
            src="/white-cross.png"
            alt=""
            width={35}
            height={35}
            className='absolute top-3 right-2 border-white bg-black rounded-full p-2 cursor-pointer'
            onClick={onClose}
          />
          <Image
            src="right-arrow.svg"
            alt=""
            width={35}
            height={35}
            className='absolute top-24 right-2  bg-white rounded-full p-2 cursor-pointer'
            onClick={() => handleSlide("increment")}
          />
          <Image
            src="left-arrow.svg"
            alt=""
            width={35}
            height={35}
            className='absolute top-24 left-2  bg-white rounded-full p-2 cursor-pointer'
            onClick={() => handleSlide("decrement")}
          />
        </div>
        <div className='flex justify-center gap-3'>
          {
            images.map((image,key)=>{
              return <div className={`border h-2 w-4 rounded-md mt-2 ${key == imageIndex ? "bg-[#410DEB]" : "bg-[#F3F3F3]"}`}></div>
            })
          }
          {/* <div className='bg-[#410DEB] border h-2 w-4 rounded-md mt-2'></div>
          <div className='bg-[#F3F3F3] h-2 w-4 rounded-md mt-2'></div>
          <div className='bg-[#F3F3F3] h-2 w-4 rounded-md mt-2'></div>
          <div className='bg-[#F3F3F3] h-2 w-4 rounded-md mt-2'></div>
          <div className='bg-[#F3F3F3] h-2 w-4 rounded-md mt-2'></div>
          <div className='bg-[#F3F3F3] h-2 w-4 rounded-md mt-2'></div> */}
        </div>
        <div className="mx-3 p-4">
          <div className="flex justify-between mt-1">
            <div className="font-semibold text-lg">Hummus Plate</div>
            <div className="flex gap-1 text-[#74e108]">
              <span>4.9</span>
              <Image src="/star.png" alt="" width={15} height={15} className="h-3 w-3 mt-1" />
            </div>
          </div>
          <div className="font-semibold text-[#410DEB] mt-1">AED 30</div>
          <div className="text-sm text-[#2F333399] mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </div>
          <div className="flex justify-center bg-[#410DEB] rounded-lg text-white p-2 mt-2">
            <button >Add meal</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal