import Banner from '../../components/Banner'
import Products from '../../components/Products'
import StarWars from '../../mocks/StarWars.Mock.json'
import Consoles from '../../mocks/Consoles.Mock.json'
import Diversos from '../../mocks/Diversos.Mock.json'

export default function Home() {
  
  return (
    <div>
      <>
        <Banner />
        <Products Items={StarWars} Title="Star Wars" />
        <Products Items={Consoles} Title="Consoles" />
        <Products Items={Diversos} Title="Diversos" />
      </>
    </div>
  )
}
