import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css'

function NavBar(){
    return(
        <Navbar className="barra">
        <Container className="contenedor">
          <Navbar.Brand className="logo" href="#home"><img src="/favicon.ico" alt="" /></Navbar.Brand>
          <Nav className="nav-bar">
            <Nav.Link className="btn-n1" href="#home">Inicio</Nav.Link>
            <Nav.Link href="#features">vehiculos</Nav.Link>
            <Nav.Link href="#pricing">Electronica</Nav.Link>
            <Nav.Link href="#pricing">Libros</Nav.Link>
            <Nav.Link className="btn-n1" href="#pricing">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default NavBar;