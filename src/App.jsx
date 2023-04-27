import About from "./pages/About"
import Header from "./components/Header"
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/about" element={ <About /> } />
        </Routes>
      </BrowserRouter>
    </>
    
  )
}

