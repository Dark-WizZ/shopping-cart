import Navbar from "./components/Navbar";
import './App.css'
import {BrowserRouter as  Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import { useState, useEffect } from "react";
import Cart from "./components/Cart";

function App() {
  const [cartQty, setcartQty] = useState(0)
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  useEffect(()=>{
    async function fetchData(){
      const productApi = "https://fakestoreapi.com/products"
      const response = await fetch(productApi)
      const productsRes = await response.json()
      setProducts(productsRes)
    }
    fetchData()
  },[])
  const addToCartClk = (id)=>{
    if(cartQty>=99) return;
    id = id.target.dataset.id
    const qty = document.querySelector(".card[data-id='"+id+"'] input").value
    setCart([...cart, {...products[id-1], qty: Number.parseInt(qty)}])
    setcartQty(cartQty+1)
  }
  return <div className="App">
    <Router>
      <Navbar cartQty={cartQty}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="shop" element={<Shop addToCartClk={addToCartClk} products={products}/>} />
        <Route path="cart" element={<Cart products={cart}/>} />
      </Routes>
    </Router>
  </div>
}

export default App;
