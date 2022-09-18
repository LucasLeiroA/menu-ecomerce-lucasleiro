import React from 'react'
import Item from './Item';
function ItemList(props) {
  return (
    <div className="products">
        {props.data.map((item) => {
          return( <Item
          key={item.id}
          tittle={item.tittle}
          price={item.price}
          img1={item.img1}
          img2={item.img2}
          img3={item.img3}
          stock={item.stock}/>)
         
        })}
    </div>
  )
}

export default ItemList