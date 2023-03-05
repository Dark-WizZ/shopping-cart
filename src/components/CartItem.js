export default function CartItem(props){
  return <div className="cart-item">
    <img src={props.image}></img>
    <div className="title">{props.title}</div>
    <div className="price">Price=${props.price}</div>
    <div className="qty">Qty={props.qty}</div>
    <div className="total">${props.price*props.qty}</div>
  </div>
}