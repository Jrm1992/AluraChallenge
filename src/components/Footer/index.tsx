import React from 'react'
import Button from '../Button'
import Logo from '../Logo/logo'

export default function Footer() {
  return (
    <div className='w-ful h-[470px] flex flex-col'>
      <div className='w-full h-[368px] bg-[#EAF2FD] flex flex-row justify-between py-16 px-40 '>
        <Logo />
        <div className='w-48 h-full justify-between flex flex-col'>
          <a>Quem somos nós</a>
          <a>Política de privacidade</a>
          <a>Programa fidelidade</a>
          <a>Nossas lojas</a>
          <a>Quero ser franqueado</a>
          <a>Anuncie aqui</a>
        </div>
        <form className='w-[560px] h-full flex flex-col gap-2 '>
          <span className='font-bold text-[#464646]'>Fale Conosco</span>
          <input className='h-14 rounded shadow outline-none' />
          <textarea className='h-20 rounded shadow outline-none p-1' />
          <div>
            <Button type='submit' Text='Enviar mensagem' />
          </div>
        </form>
      </div>
      <div className='w-full flex flex-col justify-center items-center p-8'> 
        <span>Desenvolvido por Jose Roberto Marques</span>
        <span>2022</span>
      </div>
    </div>
  )
}
