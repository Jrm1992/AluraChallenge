import { useContext } from 'react'
import { LoginContext } from '../../common/contexts/LoginContext'
import Button from '../../components/Button'

export default function Login() {
  const {user, setUser, password, setPassword, isLogged} = useContext(LoginContext)

  function handleLogin(){
    isLogged = true
  }

  return (
    <>
      <div className='w-full bg-[#e5e5e5] p-24'>
        <div className='w-[423px] h-[291px] m-auto flex flex-col gap-6 items-center'>
          <span className='text-lg font-bold text-[#464646]'>Iniciar Sessão</span>
          <form onSubmit={handleLogin} className='flex flex-col flex-1 w-full justify-between'>
            <input value={user} onChange={() => setUser(event.value)} placeholder='Escreva seu email' className='h-16 p-3 rounded shadow outline-none' />
            <input value={password} onChange={() => setPassword(event.value)} placeholder='Escreva sua senha' className='h-16 p-3 rounded shadow outline-none' type='password' />
            <Button Text='Entrar' type='submit' />
          </form>
        </div>
      </div>
    </>
  )
}
