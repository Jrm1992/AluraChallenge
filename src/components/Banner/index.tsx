import React from 'react'

import hero from '../../assets/Hero.png'
import Button from '../Button'

export default function Banner() {
  return (
    <div className='bg-hero w-full h-[352px] p-8 flex flex-col justify-end'>
      <div className='flex flex-col gap-4 mx-32'>
        <h4 className='text-5xl text-white font-bold'>Dezembro Promocional</h4>
        <span className='text-2xl text-white font-bold'>Produtos selecionados com 33% de desconto</span>
        <div>
        <Button Text='Ver Consoles' />
        </div>
      </div>
    </div>
    //<img src={hero} />
  )
}
