import ShopCartIcon from "../icons/shopping-cart-yellow.png"
import { Link } from "react-router-dom"

export default function Navbar(props){
  return <div className="navbar">
    <div className="home-section">
      <Link to='/'>HOME</Link>
    </div>
    <div className="shop-section">
      <Link to='shop'>SHOP</Link>
    </div>
    <div className="cart-icon">
      <img src={ShopCartIcon}></img>
      <div className="cart-count">0</div>
    </div>
  </div>
}