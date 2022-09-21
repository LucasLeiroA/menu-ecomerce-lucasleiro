import React, { useState, useEffect } from "react";
import { getSingleItem } from "../../Services/mockAPI";
import ItemDetail from "./ItemDetail";


function ItemDetailContainer() {
  const [dato, setDato] = useState({});

  useEffect(() => {
    getSingleItem(1).then(
     (respuesta)=>{
       setDato(respuesta)
        }
    )
 }, [])


  return (
    <>
    <ItemDetail dato={dato}/>
    </>
  
  );
}

export default ItemDetailContainer;
