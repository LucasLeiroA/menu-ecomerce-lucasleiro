import React from 'react'
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
function ItemDetail(props) {

    let { tittle, price, img1, img2, img3, stock, initial,description } = props.dato;
    let num = initial;
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
                    initial={num}
                    tittle={tittle}
                    img={img1}
                    />
                    </Card.Body>
                
                 
        </div>
  
  </div>
  )
}

export default ItemDetail;