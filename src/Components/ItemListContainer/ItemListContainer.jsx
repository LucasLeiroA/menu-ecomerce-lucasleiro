import React from "react";
import CardProduct from "../Products/CardProduct";
import "./ItemListContainer.css";
function ItemListContainer(props) {
  return (
    <>
      {/* <h1 className="titulo">{props.msg}</h1> */}

      <div className="products">
        <CardProduct
          tittle="Moto G22 128 GB iceberg blue 4 GB RAM"
          price={43.239}
          img1="/imgPhone/phone1.1.webp"
          img2="/imgPhone/phone1.2.webp"
          img3="/imgPhone/phone1.3.webp"
          stock={4}
        />
        <CardProduct 
        tittle="Konka Indus Dual SIM 32 GB negro 3 GB RAM"
        price={26.399}
        img1="/imgPhone/phone2.1.webp"
        img2="/imgPhone/phone2.2.webp"
        img3="/imgPhone/phone2.3.webp"
        stock={3}
        />
        <CardProduct 
         tittle="Samsung Galaxy A32 128 GB awesome blue 4 GB RAM"
         price={75.999}
         img1="/imgPhone/phone3.1.webp"
         img2="/imgPhone/phone3.2.webp"
         img3="/imgPhone/phone3.3.webp"
         stock={5}/>
      </div>
    </>
  );
}

export default ItemListContainer;
