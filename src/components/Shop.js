import Card from "./Card"

export default function Shop(props){

  return <div className="shop">
    <div className='cards'>
      {props.products.map((p)=><Card
        image={p.image} price={p.price} title={p.title} key={p.id} id={p.id}
        desc={p.description} rate={p.rating.rate} category={p.category}
        addToCartClk={props.addToCartClk}
      />)}
    </div>
  </div>
}