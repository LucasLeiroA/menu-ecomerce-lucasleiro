import React from 'react'
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import ItemCount from '../ItemCount/ItemCount';
import './CardProduct.css';

function Item(props) {

  let {tittle, price,img1,img2,img3,stock} = props;

  return (
    <Card style={{ width: '18rem', marginBottom:'20px',marginTop:'20px'}}>
      <Carousel className='carusel'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
      <Card.Body style={{height:'20%'}}>
        <Card.Title>{tittle}</Card.Title>
        <Card.Title>{price}</Card.Title>
      </Card.Body>
        <ItemCount stock={stock}/>
    </Card>
  )
}

export default Item;