import { BrowserRouter } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import { Router } from "./routes/Router"

function App() {

  return (
    <BrowserRouter>
      <Header Login />
      <Router />
      <Footer />
    </BrowserRouter>
  )
}

export default App
