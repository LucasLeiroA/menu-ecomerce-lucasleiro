import React from 'react'
import {useContext} from "react";    
import {cartContext} from "../../Context/CartContext" ;
import CartList from './CartList';
import './CartContainer.css';


function CartContainer() {

  const {cart,clear} = useContext(cartContext);


  return (
    <div>{
      cart.map((item) =>{
        return (<CartList
          key={item.id}
          id={item.id}
          cat={item.category}
          tittle={item.tittle}
          price={item.price}
          img1={item.img1}
          count={item.count}
          stock={item.stock}/>)
      })
      }
      {cart.length>=1?
      <div className='Limpiar'>
        <button onClick={()=>clear()} className='btnLimpiar'>Limpiar Carrito 🗑️</button>
      </div>:<div className='cartVacio'>No hay productos en el carrito 🛒!!</div>}
      </div>
  )
}

export default CartContainer