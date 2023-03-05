import { useEffect, useState } from "react"
import CartItem from "./CartItem"

export default function Cart(props){
  const[totalCost, setTotalCost] = useState(0)
  const[totalQty, setTotalQty] = useState(0)
  useEffect(()=>{
    let total = props.products.reduce((a, c)=>a+c.qty*c.price, 0)
    let qty = props.products.reduce((a, c)=>a+c.qty, 0)
    setTotalCost(total)
    setTotalQty(qty)
  })
  return<div className="cart">
    <div class="items">
      <div className="top-bar">
        <div className="item-title">ITEM</div>
        <div className="detail-title">DETAIL</div>
        <div className="total-title">TOTAL</div>
      </div>
      {props.products.map((p)=><CartItem
        image={p.image} title={p.title} price={p.price}
        qty={p.qty}
      />)}
    </div>
    <div className="summary">ORDER SUMMARY:
        <div className="total-qty">
          Total Quantity = {totalQty}
        </div>
        <div class="total-cost">
          Total Cost= {totalCost}
        </div>
        <button className="place-order-btn">
          {"Place Order>>>"}
        </button>
    </div>
  </div>
}