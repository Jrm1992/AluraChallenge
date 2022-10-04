import { Link } from 'react-router-dom'
import Button from '../Button'
import Logo from '../Logo/logo'

interface LoginProps {
  Login:boolean
}

export default function Header({Login}: LoginProps) {
  return (
    <div className='w-full h-28 px-36 items-center flex justify-between'>
      <div className='gap-12 flex items-center'>
        <Link to="/">
          <Logo />
        </Link>
        <input className='h-11 rounded-3xl w-96 py-2 px-4 bg-[#f5f5f5] outline-none bg-glass bg-[center_right_16px] bg-6 bg-no-repeat' placeholder='O que deseja encontrar?' />
      </div>
      {Login && <Link to="/login"><Button Text='Login' Primary /></Link>}
    </div>
  )
}
