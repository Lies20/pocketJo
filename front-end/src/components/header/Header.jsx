import Logo from "../logo/Logo"
import Navbar from "../navbar/Navbar"
import "./Header.css"

function Header() {
  return (
    <header className="header-container">
        <Logo/>
        <Navbar/>
    </header>
  )
}

export default Header