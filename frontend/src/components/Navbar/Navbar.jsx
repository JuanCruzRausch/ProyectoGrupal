import React from 'react'
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { getProductByCategory } from "../../redux/actions"

function NavbarComponent() {

  const dispatch = useDispatch()

  const handleOnSelect = (e) => {
    e.preventDefault()
    console.log(e.target.innerText);
    dispatch(getProductByCategory())
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavDropdown title="Categorías" id="navbarScrollingDropdown">
              <NavDropdown.Item onClick={e => handleOnSelect(e)} href="#">Vehiculos</NavDropdown.Item>
              <NavDropdown.Item onClick={e => handleOnSelect(e)} href="#">Supermercados</NavDropdown.Item>
              <NavDropdown.Item onClick={e => handleOnSelect(e)} href="#">Tecnología</NavDropdown.Item>
              <NavDropdown.Item onClick={e => handleOnSelect(e)} href="#">Electrodomésticos</NavDropdown.Item>
              <NavDropdown.Item onClick={e => handleOnSelect(e)} href="#">Hogar y Muebles</NavDropdown.Item>
              <NavDropdown.Item onClick={e => handleOnSelect(e)} href="#">Deportes y Fitness</NavDropdown.Item>
              <NavDropdown.Item onClick={e => handleOnSelect(e)} href="#">Belleza y Cuidado Personal</NavDropdown.Item>
              <NavDropdown.Item onClick={e => handleOnSelect(e)} href="#">Accesorio para Vehículos</NavDropdown.Item>
              <NavDropdown.Item onClick={e => handleOnSelect(e)} href="#">Herramientas</NavDropdown.Item>
              <NavDropdown.Item onClick={e => handleOnSelect(e)} href="#">Construcción</NavDropdown.Item>
              <NavDropdown.Item onClick={e => handleOnSelect(e)} href="#">Inmuebles</NavDropdown.Item>
              <NavDropdown.Item onClick={e => handleOnSelect(e)} href="#">Compra Internacional</NavDropdown.Item>
              <NavDropdown.Item onClick={e => handleOnSelect(e)} href="#">Moda</NavDropdown.Item>
              <NavDropdown.Item onClick={e => handleOnSelect(e)} href="#">Juegos y Juguetes</NavDropdown.Item>
              <NavDropdown.Item onClick={e => handleOnSelect(e)} href="#">Bebés</NavDropdown.Item>
              <NavDropdown.Item onClick={e => handleOnSelect(e)} href="#">Productos Sustentables</NavDropdown.Item>
              <NavDropdown.Item onClick={e => handleOnSelect(e)} href="#">Salud y Equipamiento Médico</NavDropdown.Item>
              <NavDropdown.Item onClick={e => handleOnSelect(e)} href="#">Industrias y Oficinas</NavDropdown.Item>
              <NavDropdown.Item onClick={e => handleOnSelect(e)} href="#">Servicios</NavDropdown.Item>
              <NavDropdown.Item onClick={e => handleOnSelect(e)} href="#">Tiendas oficiales</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Ver más categorías
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent