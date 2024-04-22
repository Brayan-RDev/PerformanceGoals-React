import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navBar/NavBar";
import { Footer } from "./components/footer/Footer";
import { Home } from "./pages/home/Home";
import { ListaCategoria } from "./components/categoria/listaCategorias/ListaCategorias";
import { FormularioCategoria } from "./components/categoria/formularioTema/FormularioTema";
import { DeletarCategoria } from "./components/categoria/deletarCategoria/DeletarCategoria";

export function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <div className='w-full min-h-[80vh] flex items-start p-8'>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/categoria" element={<ListaCategoria />} />
              <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
              <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
              <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
            </Routes>
      </div>
      <Footer />
    </BrowserRouter>
    </>
  )
}