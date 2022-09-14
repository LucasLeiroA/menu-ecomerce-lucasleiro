import React ,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import './ItemCount.css'
function ItemCount(props) {

    let {stock} = props;

    const [count, setCount] = useState(1)

    function handleAdd(){
        if (count < stock) {
            setCount(count + 1)    
        }else{
            alert("No hay tanta cantidad en stock")
        }
    }

    function handleSubstract(){
        if (count>1) {
            setCount(count - 1)
            
        }else{
            alert("No puede ingresar un valor menor a 1")
        }
    }

  return (
    <div className='container'>
        <ButtonGroup size="lg" className="mb-2" style={{width:'100%'}}>
            <Button className='btns' onClick={handleSubstract}>-</Button>
            <h1 style={{width:'60%', display:'flex',justifyContent:'center'}}>{count}</h1>
            <Button className='btns' onClick={handleAdd}>+</Button>
      </ButtonGroup>
      <Button className='btnAgregar' style={{width:'100%'}} >Agregar al carrito</Button>

    </div>
  )
}

export default ItemCount;