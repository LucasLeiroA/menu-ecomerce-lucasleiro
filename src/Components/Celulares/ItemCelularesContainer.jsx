import React from 'react'
import {useEffect,useState} from "react"
import { getItemsByCategory } from '../../Services/mockAPI';
import ItemList from '../Products/ItemList';
function ItemCelularesContainer() {

    const [data, setData] = useState([]);

    const cat= "celular";

    useEffect(() => {
      
    getItemsByCategory(cat).then(respuesta=>setData(respuesta))      
    }, [])
    

    console.log(data);

  return (
    <ItemList data={data}/>
  )
}

export default ItemCelularesContainer