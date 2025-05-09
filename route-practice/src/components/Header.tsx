import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
        <nav>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/products">Products</Link></li>
        </nav>
    </header>
  )
}

export default Header