import { Link } from "react-router-dom"
export default function Home(props){
  return <div className="home">
    <p>WELCOME TO THE SHOPPING SITE</p>
    <p>START YOUR GOOFY SHOPPING JOURNEY HERE</p>
    <Link to='/shop' className="shop-btn">Shop Now!!</Link>
  </div>
}