import { Link} from "react-router-dom";
import Logo from "../../assets/drogas.png"

export function Navbar() {

  return (
    <>
    <header className="flex justify-center w-full h-24 shadow-lg">
      <nav className="w-full h-full flex items-center justify-between px-8">
        <Link to='/'>
          <div className="flex items-center gap-2">
            <img src={Logo} className="w-16" alt="Logo" />
            <h1 className="text-2xl font-semibold">BRAFarma</h1>
          </div>
        </Link>

        <ul className="w-[50%] h-full flex items-center gap-4">
          <li><Link to='/home' className='p-4'>Home</Link></li>
          <li><Link to='/cadastrar' className='p-4'>Contato</Link></li>
          <li><Link to='/cadastrar' className='p-4'>Sobre nós</Link></li>
        </ul>
      </nav>
    </header>
    </>
  )
}