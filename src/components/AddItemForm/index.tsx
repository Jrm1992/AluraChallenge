import Button from '../Button'

export default function AddItemForm() {
  return (
    <div className='w-full bg-[#e5e5e5] py-16 flex flex-col items-center'>
      <h4 className='font-bold text-3xl mb-4'>Adicionar novo produto</h4>
      <form className='flex flex-col w-[560px] gap-4'>
        <input className='h-14 rounded shadow outline-none placeholder:absolute placeholder:m-1' placeholder='Url da imagem'  />
        <input className='h-14 rounded shadow outline-none placeholder:absolute placeholder:m-1' placeholder='Categoria'  />
        <input className='h-14 rounded shadow outline-none placeholder:absolute placeholder:m-1' placeholder='Nome do produto'  />
        <input className='h-14 rounded shadow outline-none placeholder:absolute placeholder:m-1' placeholder='Preco do produto'  />
        <textarea className='h-20 rounded shadow outline-none p-1' placeholder='Descricao do produto' />
        <Button type='submit' Text='Adicionar produto' />
      </form>
    </div>
  )
}
