import React ,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import './ItemCount.css'
import Swal from 'sweetalert2'                                                

function ItemCount(props) {

    let {stock , img , initial ,tittle} = props;
    
    
    const [count, setCount] = useState(1);
    //tengo un problema a la hora de inicializar el estado cuando pongo el initial como valor de incio de estado no me funciona
    //esto sucede cuando lo uso en itemDetail pero cuando lo uso en el item me funciona perfectamente si cuando lo vea me pueda 
    //coregir esta duda porfavor
        
    function handleAdd(){
        if (count < stock) {
            setCount(count + 1);    
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No hay tanta cantidad en stock',
              })
            
        }
    }

    function handleSubstract(){
        if (count>initial) {
            setCount(count - 1);
            
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No puede ingresar un valor menor a 1',
              })
        }
    }
    
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
      }

     

  return (
    
    <div className='container'>
        <ButtonGroup size="lg" className="mb-2" style={{width:'100%'}}>
            <Button className='btns' onClick={handleSubstract}>-</Button>
            <h1 style={{width:'60%', display:'flex',justifyContent:'center'}}>{count}</h1>
            <Button className='btns' onClick={handleAdd}>+</Button>
      </ButtonGroup>
      <Button className='btnAgregar' onClick={()=>onAdd(count,tittle,img)} style={{width:'100%'}} >Agregar al carrito</Button>

    </div>
  )
}

export default ItemCount;