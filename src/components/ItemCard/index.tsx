import React from 'react'

export interface CardProps {
  image: string
  name:string
  price: number
}

export default function ItemCard({image, name, price}: CardProps) {
  return (
    <div className='w-44 h-64 flex flex-col'>
      <img className='w-full h-44 ' src={image} />
      <span className='text-[#464646]'>{name}</span>
      <span className='font-bold text-[#464646]'>R$ {price}</span>
      <a className='font-bold text-[#2a74e4]'>Ver produto</a>
    </div>
  )
}
