export default function Card(props){
  return <div className={"card"} data-id={props.id}>
    <div className='product-image'>
      <img src={props.image} height="300" width="300" ></img>
      <div className='price'>${props.price}</div>
    </div>
    <div className='title'>{props.title}</div>
    <div className='about'>{props.desc}</div>
    <div className='bottom-sec'>
      <div className='qty-sec'>
        <label htmlFor='qty'>Quantity: </label>
        <input id='qty' type='number' defaultValue='1' min='1'></input>
      </div>
      <div className="rate">Rate: {props.rate}/5.0</div>
      <button className='add-to-cart' data-id={props.id} onClick={props.addToCartClk}>Add to Cart</button>
    </div>
  </div>
}