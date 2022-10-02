import React,{useState,createContext} from "react";


const cartContext = createContext();


export default function CartContextProvider({children}){
    
    const [cart, setCart] = useState([]);
    
    function addItem(item,count){
        let newCart = cart;
        newCart.push({...item,count});
        setCart(newCart);
    }
 
    function getTotalItemsInCart(){
        let total = 0;
        cart.forEach(item => total += item.count)
        return total;
    }

    function clear(){
        setCart([]);
    }
    
    
    return(
        <cartContext.Provider value={{cart,addItem,getTotalItemsInCart,clear}}>
            {children}
        </cartContext.Provider>
    )
}

export {cartContext};   