"use client"
import React, { useRef, useState } from 'react'
import ScrollerCard from './ScrollerCard'
import ListWrapper from './ListWrapper'
import Image from 'next/image'
type Category = {
  name: string;
  count: number;
  items: MenuItem[];
};
type MenuItem = {
  name: string;
  price: number;
  rating: number;
  description: string;
};

const MainCard = () => {
  const categories:string[]=["Cold Apetizers","Hot Apetizers","Soup","Sandwiches","Shawarma","Plates On Oven","Grilled","Seafood"]
  const categoriesDetails:Category[]=[
    {
      name:"Cold Apetizers",
      count:5,
      items:[
        {
          name:"Hummus Plate",
          price:30,
          rating:4.7,
          description:"Lorem ipsum dolor sit amet, consectetur adipiscing"
        },
        {
          name:"Muttabal Plate",
          price:20,
          rating:4.2,
          description:"Lorem ipsum dolor sit amet, consectetur adipiscing"
        },
        {
          name:"Grilled Haloumi Chese",
          price:50,
          rating:4.5,
          description:"Lorem ipsum dolor sit amet, consectetur adipiscing"
        }
      ]
    },
    {
      name:"Hot Apetizers",
      count:2,
      items:[
        {
          name:"Fried Kebab Plate",
          price:40,
          rating:4.7,
          description:"Lorem ipsum dolor sit amet, consectetur adipiscing"
        },
        {
          name:"Chicken Liver",
          price:25,
          rating:4.1,
          description:"Lorem ipsum dolor sit amet, consectetur adipiscing"
        }
      ]
    }
  ]
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [scrollPixesls,setScrollPixesls]=useState(0)
  // let scrollPixesls:number=610
  const handleScroll=()=>{
    if (scrollContainerRef.current) {
      const currentScrollLeft = scrollContainerRef.current?.scrollLeft;
      const newLeftPosition = scrollPixesls + 100;
      scrollContainerRef.current?.scrollTo({
          left: currentScrollLeft + 100,
          behavior: 'smooth',
      });
      setScrollPixesls(newLeftPosition)
  }
  }
  return (
    <div className='border bg-white rounded-2xl mt-12 w-6/12'>
      <div ref={scrollContainerRef} className='border-b flex gap-1 p-5 overflow-hidden relative'>
        {
          categories.map((category,key)=>{
            return <ScrollerCard category={category} key={key}/>

          })
        }
        <div onClick={handleScroll} className={`absolute bg-white p-3 top-5 rounded-full left-[610px]`}>
          <Image
            src="/blue-arrow-right.png"
            alt=""
            width={25}
            height={25}
          />
        </div>
      </div>
      {
        categoriesDetails.map((categoryDetail:Category,key:any)=>{
          return <ListWrapper categoryDetail={categoryDetail} key={key}/>
        })
      }
    </div>
  )
}

export default MainCard