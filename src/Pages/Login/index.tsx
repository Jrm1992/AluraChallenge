import React from 'react'
import Button from '../../components/Button'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

export default function Login() {
  return (
    <>
      <Header Login={false} />
      <div className='w-full bg-[#e5e5e5] p-24'>
        <div className='w-[423px] h-[291px] m-auto flex flex-col gap-6 items-center'>
          <span className='text-lg font-bold text-[#464646]'>Iniciar Sessão</span>
          <form className='flex flex-col flex-1 w-full justify-between'>
            <input placeholder='Escreva seu email' className='h-16 p-3 rounded shadow' />
            <input placeholder='Escreva sua senha' className='h-16 p-3 rounded shadow' type='password' />
            <Button Text='Entrar' />
          </form>

        </div>
      </div>
      <Footer />
    </>
  )
}
