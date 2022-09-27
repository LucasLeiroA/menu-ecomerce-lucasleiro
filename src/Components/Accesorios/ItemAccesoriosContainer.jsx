import React from 'react'
import { getItemsByCategory } from '../../Services/mockAPI';
import {useState,useEffect} from "react";
import ItemList from '../Products/ItemList';

function ItemAccesoriosContainer() {
    const [data, setData] = useState([]);

    const cat= "accesorio";

    useEffect(() => {
      
    getItemsByCategory(cat).then(respuesta=>setData(respuesta))      
    }, [])
    

    console.log(data);

  return (
    <ItemList data={data}/>
  )
}

export default ItemAccesoriosContainer