import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navBar/NavBar";
import { Footer } from "./components/footer/Footer";
import { Home } from "./pages/home/Home";

export function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <div className='w-full min-h-[80vh] flex items-start p-8'>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/categorias" element={<CardCategoria descricao="Categoria 1"/>} />
            </Routes>
      </div>
      <Footer />
    </BrowserRouter>
    </>
  )
}