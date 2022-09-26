interface ButtonProps {
  Text: string
  Primary?: boolean
  Bold?: boolean
  Disable?: boolean
}

export default function Button({Text, Primary, Bold, Disable }: ButtonProps) {

  const className = ` 
    ${Primary ? "text-[#2a74e4] border-[#2A7AE4] px-16" : "text-[#fff] border-[#fff] bg-[#2A7AE4]" }
    ${Bold ? "font-bold" : "font-normal" } 
    border-2 text-center p-4 cursor-pointer
    `

  return (
    <button disabled={Disable} className={className}>
      {Text}
    </button>
  )
}
