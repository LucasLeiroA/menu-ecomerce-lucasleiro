import React from 'react'
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import Swal from 'sweetalert2';
import {useContext} from "react";    
import {cartContext} from "../../Context/CartContext"   

function ItemDetail(props) {

    let {img1,img2,img3,price,tittle,description,stock,initial} = props.data;
    let dato = props.data;
    

    //Estado en el que se guarda el valor de itemCount
    
    
    const {addItem} = useContext(cartContext);
    
    function onAdd(count, tittle, img ) {

        Swal.fire({
            imageUrl: `${img}`,
            imageHeight: 100,
            imageWidth: 65,
            html: `<b>Cantidad: ${count}</b><br/>${tittle}`,
            footer: "Producto agregado ✅",
            showConfirmButton: false,
            position: "top-right",
            width: "20em",
            timer: "1500",
            
        });
       
        addItem(dato,count);

    }
    
    

  return (
    <div className='cant'>
        <div className='section1'>
            <Carousel className="carusel">
                <Carousel.Item>
                    <img className="d-block w-auto" src={img1} alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-auto" src={img2} alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-auto" src={img3} alt="Third slide" />
                </Carousel.Item>
                </Carousel>
        </div>
        <div className='section2'>
                
                    <Card.Body style={{ height: "20%" }}>
                    <Card.Title className="titulo">{tittle}</Card.Title>
                    <Card.Title className="precio">
                        Precio: <span>${price}</span>
                    </Card.Title>
                    <Card.Text className='des'>
                        {description}
                    </Card.Text>
                    <ItemCount
                    stock={stock}
                    initial={initial}
                    tittle={tittle}
                    img={img1}
                    onAdd={onAdd}
                    /> 
                    </Card.Body>
                
                 
        </div>
  
  </div>

  )
}

export default ItemDetail;