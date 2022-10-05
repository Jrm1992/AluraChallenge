import Button from '../../components/Button'

import StarWars from '../../mocks/StarWars.Mock.json'
import Consoles from '../../mocks/Consoles.Mock.json'
import Diversos from '../../mocks/Diversos.Mock.json'
import ItemCard from '../../components/ItemCard'

export default function AllItems() {
  return (
    <>
      <div className='w-full bg-[#e5e5e5] py-16 flex flex-col items-center'>
        <div className='w-[1136px] flex-1 flex items-center justify-between'>
          Todos os Produtos
          <Button Text='Adicionar Produto' />
        </div>
        <div className='w-[1152px] mt-4 grid grid-cols-6 place-items-center'>
          {StarWars.map((item, index) => {
            return (
              < ItemCard key={index} image={item.image} name={item.name} price={item.price} />
            )
          })}
          {Consoles.map((item, index) => {
            return (
              < ItemCard key={index} image={item.image} name={item.name} price={item.price} />
            )
          })}
          {Diversos.map((item, index) => {
            return (
              < ItemCard key={index} image={item.image} name={item.name} price={item.price} />
            )
          })}
        </div>
      </div>
    </>
  )
}
