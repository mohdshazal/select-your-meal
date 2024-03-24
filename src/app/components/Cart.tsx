"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import CartItem from './CartItem'
type CartItem = {
    id:number
    name: string;
    price: number;
  };
const Cart = () => {
    const [cartItems,setCartItems]=useState<CartItem[]>(
        [
            {   
                id:1,
                name:"Hummus Plate",
                price:30
            },
            {
                id:2,
                name:"Fried Kebab Plate",
                price:60
            }
        ]
    )
    let totalPrice:number=0
    cartItems.map(item=>{
        totalPrice+=item.price
    })
    const deleteHandler=(id:number)=>{
        setCartItems(cartItems.filter(item => item.id !== id))
    }
    return (
        <>
            <div className='bg-white rounded-2xl overflow-hidden h-5/6 mt-12 w-3/12'>
                <div>
                    <Image
                        src="/restaurant.jpg"
                        alt=""
                        width={400}
                        height={180}
                    />
                </div>
                <div className='p-5 text-center'>
                    <div className='flex gap-3 items-baseline'>
                        <span className='font-bold text-lg whitespace-nowrap'>Jawharat Esham Restaurent</span>
                       <div className='flex gap-1 items-baseline'>
                        <Image
                            src="/star.png"
                            alt=""
                            width={15}
                            height={15}
                            className='h-3 w-3'
                        />
                        <span className='text-[#74e108]'>4.7</span>
                        </div>
                    </div>
                    <div className='flex gap-2 mt-2'>
                        <span className='font-normal text-sm whitespace-nowrap'>Wafi Mall, First, Horus, Phase 5, Dubai</span>
                        <Image
                            src="location.svg"
                            alt=""
                            width={20}
                            height={20}
                        />
                    </div>
                    <div className='flex justify-center mt-3 mb-3'>
                        <button className='bg-black text-white px-5 py-2 rounded-lg font-normal text-sm'>Arabic Restaurant</button>
                    </div>
                </div>
                {
                    cartItems.map((item:CartItem,key)=>{
                        return <CartItem item={item} key={key} onDelete={deleteHandler}/>
                    })
                }
                <div className='flex items-center gap-4 px-5 py-7'>
                    <span className='font-normal text-sm text-[#2F3333A6]'>Total Price</span>
                    <span className='font-bold text-lg'>AED {totalPrice}</span>
                </div>

            </div>

        </>
    )
}

export default Cart