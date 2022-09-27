import React, { useState, useEffect } from "react";
import { getSingleItem } from "../../Services/mockAPI";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";


function ItemDetailContainer() {
  const [data, setData] = useState({}); 
  const { id,cat } = useParams();
  




  useEffect(() => {
    getSingleItem(id,cat).then(
     (respuestaDatos)=>{
       setData(respuestaDatos)
       }
    )
 }, [id,cat])
 
 

  return (
    <>
    <ItemDetail data={data}/>
    </>
  
  );
}

export default ItemDetailContainer;
