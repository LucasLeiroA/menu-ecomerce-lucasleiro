import React, { useState, createContext } from "react";

const cartContext = createContext();

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addItem(item, count) {
    if (IsInCart(item.id)) {
      let newCart = cart.map((itemMapeo) => {
        if (itemMapeo.id === item.id) {
          itemMapeo.count += count;
          return itemMapeo;
        } else {
          return itemMapeo;
        }
      });
      setCart(newCart);
    } else {
      let newCart = cart;
      newCart.push({ ...item, count });
      setCart(newCart);
    }
  }

  function getTotalItemsInCart() {
    let total = 0;
    cart.forEach((item) => (total += item.count));
    return total;
  }
  function IsInCart(id) {
    let found = cart.some((item) => item.id === id);
    return found;
  }

  function clear() {
    setCart([]);
  }
  
  function removeItem(itemId){

    let itemFind = cart.findIndex((item)=>item.id === itemId);
        cart.splice(itemFind,1);
        setCart(cart);
               
  }
 


  

  return (
    <cartContext.Provider value={{ cart, addItem, getTotalItemsInCart, clear,removeItem }}>
      {children}
    </cartContext.Provider>
  );
}

export { cartContext };
