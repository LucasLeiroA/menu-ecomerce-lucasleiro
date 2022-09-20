
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css'
import CartWidget from '../CartWidget/CartWidget';

function NavBar(){
    return(
        <Navbar className="barra">
          <Container className="contenedor">
            <Navbar.Brand className="logo" href="#home"><img src="/logocel2.png" alt="" /></Navbar.Brand>
                  <Nav className="nav-bar">
                    <Nav.Link href="#features">Celulares</Nav.Link>
                    <Nav.Link href="#pricing">Accesorios</Nav.Link>
                    <Nav.Link href="#pricing">Fundas</Nav.Link>
                    <Nav.Link className="btn-n1" href="#pricing">Quienes Somos!</Nav.Link>
                    <Nav.Link  className="carrito" href="#cart"><CartWidget/></Nav.Link>  
                  </Nav>
          </Container>
      </Navbar>

      // <nav className='container'>
      //   <div className='logo'>
      //     <img src="/logocel2.png" alt="" />
      //   </div>
      //   <div className='nav-bar'>
      //     <ol>
      //       <ul>Celulares</ul>
      //       <ul>Accesorios</ul>
      //       <ul>Fundas</ul>
      //       <ul>Quienes Somos!</ul>
      //       <ul><CartWidget/></ul>
      //     </ol>
      //   </div>
      // </nav>
    )
}

export default NavBar;