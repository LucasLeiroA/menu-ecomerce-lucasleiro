import React from 'react'
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import ItemCount from '../ItemCount/ItemCount';
import './CardProduct.css';
import Swal from 'sweetalert2'

function Item(props) {



  let {tittle, price,img1,img2,img3,stock,initial} = props;



  function onAdd(count,tittle,img) {

    Swal.fire({
      imageUrl:`${img}`,
      imageHeight:100,
      imageWidth:65,
      html:`<b>Cantidad: ${count}</b><br/>${tittle}`,
      footer:"Producto agregado ✅",
      showConfirmButton:false,
      position:"top-right",
      width:"20em",
      timer:"1500"
    })
  }

 
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
        <ItemCount stock={stock} initial={initial} onAdd={onAdd} tittle={tittle} img={img1}/>
    </Card>
  )
}

export default Item;