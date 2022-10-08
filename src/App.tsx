import { BrowserRouter } from "react-router-dom"
import { LoginProvider } from "./common/contexts/LoginContext"
import Footer from "./components/Footer"
import Header from "./components/Header"
import { Router } from "./routes/Router"

function App() {

  return (
    <BrowserRouter>
    <LoginProvider>
      <Header Login />
        <Router />
      <Footer />
    </LoginProvider>
    </BrowserRouter>
  )
}

export default App
