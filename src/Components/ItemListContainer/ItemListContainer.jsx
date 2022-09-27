import React,{useState,useEffect} from "react";
import "./ItemListContainer.css";
import getItems from "../../Services/mockAPI";
import ItemList from "../Products/ItemList";

function ItemListContainer() {

const [data, setData] = useState([]);


useEffect(() => {
   getItems().then(
    (respuesta)=>{
      setData(respuesta)
       }
   )
}, [])


  return (
    <>
     

         <ItemList data={data}/>
      
    </>
  );
}

export default ItemListContainer;
