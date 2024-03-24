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
  const categories: string[] = ["Cold Apetizers", "Hot Apetizers", "Soup", "Sandwiches", "Shawarma", "Plates On Oven", "Grilled", "Seafood"]
  const categoriesDetails: Category[] = [
    {
      name: "Cold Apetizers",
      count: 3,
      items: [
        {
          name: "Hummus Plate",
          price: 30,
          rating: 4.7,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing"
        },
        {
          name: "Muttabal Plate",
          price: 20,
          rating: 4.2,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing"
        },
        {
          name: "Grilled Haloumi Chese",
          price: 50,
          rating: 4.5,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing"
        }
      ]
    },
    {
      name: "Hot Apetizers",
      count: 2,
      items: [
        {
          name: "Fried Kebab Plate",
          price: 40,
          rating: 4.7,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing"
        },
        {
          name: "Chicken Liver",
          price: 25,
          rating: 4.1,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing"
        }
      ]
    },
    {
      name: "Soup",
      count: 3,
      items: [
        {
          name: "Vegetable Soup",
          price: 21,
          rating: 4.7,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing"
        },
        {
          name: "Chicken Soup",
          price: 21,
          rating: 4.2,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing"
        },
        {
          name: "Corn Soup",
          price: 21,
          rating: 4.5,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing"
        }
      ]
    },
    {
      name: "Sandwiches",
      count: 2,
      items: [
        {
          name: "Falafel Sandwich",
          price: 19,
          rating: 4.7,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing"
        },
        {
          name: "Chicken Shawarma",
          price: 38,
          rating: 4.2,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing"
        }
      ]
    }
  ]
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const mainScrollContainerRef = useRef<HTMLDivElement | null>(null);

  const [scrollPixesls, setScrollPixesls] = useState<number>(610)
  const handleScroll = () => {
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
  const handleMainScroll = (index: string) => {
    const element = document.getElementById(index);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div ref={mainScrollContainerRef} className='border bg-white rounded-2xl mt-12 w-6/12'>
      <div ref={scrollContainerRef} className='border-b flex gap-1 p-5 overflow-hidden relative'>
        {
          categories.map((category, key) => {
            return <ScrollerCard category={category} key={key} onClick={() => handleMainScroll(category)} />
          })
        }
        <Image
          src="/blue-arrow-right.png"
          alt=""
          width={25}
          height={25}
          className={`absolute bg-white h-12 w-12 p-2 top-5 rounded-full cursor-pointer`}
          style={{ left: `${scrollPixesls}px` }}
          onClick={handleScroll}
        />
      </div>
      {
        categoriesDetails.map((categoryDetail: Category, key: any) => {
          return <ListWrapper categoryDetail={categoryDetail} key={key} />
        })
      }
    </div>
  )
}

export default MainCard