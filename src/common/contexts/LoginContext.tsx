import { createContext, Dispatch, SetStateAction, useState } from "react";

export interface LoginContext {
  user: string
  setUser?: Dispatch<SetStateAction<string>>
  password: string
  setPassword?: Dispatch<SetStateAction<string>>
  isLogged: boolean
}

let Data = {
  user: '',
  password: '',
  isLogged: false
}

export const LoginContext = createContext<LoginContext>(Data)

export const LoginProvider = ({children}) => {
  
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  
  return (
    <LoginContext.Provider value={{user, setUser, password, setPassword}}>
      {children}
    </LoginContext.Provider>
  )
}