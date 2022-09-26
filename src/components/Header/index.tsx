import Button from '../Button'
import Logo from '../Logo/logo'

export default function Header() {
  return (
    <div className='w-full h-28 px-36 items-center flex justify-between'>
      <div className='gap-12 flex items-center'>
        <Logo />
        <input className='h-11 rounded-3xl w-96 py-2 px-4 bg-[#f5f5f5] outline-none' placeholder='O que deseja encontrar?' />
      </div>
      <Button Text='Login' Primary />
    </div>
  )
}
