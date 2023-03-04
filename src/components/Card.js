import phone from '../pics/phone.png'

export default function Card(){
  return <div className="card">
    <div className='product-image'>
      <img src={phone} height="300" width="300" ></img>
      <div className='price'>$399</div>
    </div>
    <div className='title'>SAMSUNG G15</div>
    <div className='about'>
      <ul>
        <li>4GB Ram</li>
        <li>64GB Internal storage</li>
        <li>Snapdragon 440</li>
      </ul>
    </div>
    <div className='bottom-sec'>
      <div className='qty-sec'>
        <label for='qty'>Quantity: </label>
        <input id='qty' type='number' defaultValue='1' min='1'></input>
      </div>
      <button className='add-to-cart'>Add to Cart</button>
    </div>
  </div>
}