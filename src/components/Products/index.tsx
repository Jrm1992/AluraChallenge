import { ArrowRight } from 'phosphor-react'
import ItemCard, { CardProps } from '../ItemCard'

interface Items {
  Items: CardProps[]
  Title: string
}

export default function Products({Items, Title}: Items) {
  return (
    <div className='maxw-[1136px] flex flex-col m-auto mt-16 mb-16 gap-4'>
    <div className='flex justify-between items-center'>
      <h4 className='font-bold text-4xl'>{Title}</h4>
      <a className='font-bold flex items-center gap-2 text-[#2a74e4]'>
        Ver tudo 
        <ArrowRight size={24} />
      </a>
    </div>
    <div className='w-full flex gap-4'> 
      {Items.map((product: CardProps, index) => {
        return (
          < ItemCard key={index} image={product.image} name={product.name} price={product.price} />
        )
      })}
    </div>
  </div>
  )
}
