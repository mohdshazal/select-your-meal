import React from 'react'
import FoodItem from './FoodItem'

const ListWrapper = ({ categoryDetail }: any) => {
  return (
    <div className='mt-10 pl-10 pr-10'>
      <div className='flex justify-between'>
        <span className='font-bold text-2xl mb-3'>{categoryDetail.name}
          <div className="inline-block ml-2 h-8 w-8 bg-black text-white rounded-full text-center">{categoryDetail.count}</div>
        </span>
        <span className='font-medium text-sm text-[#2F3333A6]'>Select</span>
      </div>
      {
        categoryDetail?.items.map((item:any,key:number)=>{
          return <FoodItem item={item} key={key}/>
        })
      }
    </div>
  )
}

export default ListWrapper