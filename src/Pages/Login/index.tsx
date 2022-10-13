import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginContext } from '../../common/contexts/LoginContext'
import Button from '../../components/Button'

export default function Login() {
  const {user, setUser, password, setPassword, isLogged} = useContext(LoginContext)

  const navigate = useNavigate()

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i

  function handleLogin(e: Event ){
    e.preventDefault()
    if(emailRegex.test(user) && password.length > 4 ){
      navigate('/')
    }
  }

  console.log(password)

  return (
    <>
      <div className='w-full bg-[#e5e5e5] p-24'>
        <div className='w-[423px] h-[291px] m-auto flex flex-col gap-6 items-center'>
          <span className='text-lg font-bold text-[#464646]'>Iniciar Sessão</span>
          <form onSubmit={() => handleLogin(event)} className='flex flex-col flex-1 w-full justify-between'>
            <input value={user} onChange={() => setUser(event.target.value)} placeholder='Escreva seu email' className='h-16 p-3 rounded shadow outline-none' />
            {(emailRegex.test(user) || user.length == 0) 
              ? '' 
              : <span className='text-xs text-blue-700 absolute mt-[68px]'>Digite um email valido</span>
            }
            <input value={password} onChange={() => setPassword(event.target.value)} placeholder='Escreva sua senha' className='h-16 p-3 rounded shadow outline-none' type='password' />
            {(password.length < 4 && password.length > 0) 
              ? <span className='text-xs text-blue-700 absolute mt-[160px]'>Sua senha precisa ter no minimo 4 digitos</span> 
              : '' 
            }
            <Button Text='Entrar' type='submit'/>
          </form>
        </div>
      </div>
    </>
  )
}
