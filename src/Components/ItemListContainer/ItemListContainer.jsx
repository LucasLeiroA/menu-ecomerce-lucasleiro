import React,{useState,useEffect} from "react";
import "./ItemListContainer.css";
import getItems, { getItemsByCategory } from "../../Services/mockAPI";
import ItemList from "../Products/ItemList";
import {useParams} from "react-router-dom";

function ItemListContainer() {

const [data, setData] = useState([]);

let { cat } = useParams();

useEffect(() => {
  if (cat === undefined) {
     getItems().then(
    (respuesta)=>{
      setData(respuesta)
       }
   )
  }else{
    getItemsByCategory(cat).then(
      (respuesta)=>{
        setData(respuesta)
         }
     )
  }
  
}, [cat])


  return (
    <>
     

         <ItemList data={data}/>
      
    </>
  );
}

export default ItemListContainer;
