import React from 'react'
import { useEffect } from 'react'
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategory, getProductByCategory, BuscarProducto } from "../../redux/actions"
import {Navbarc} from './Navbar.module.css'
function NavbarComponent() {
  
  const dispatch = useDispatch()
  const state = useSelector(state => state.AllCategory)
  
  
  
  
  function handleOnSelect(e){
    dispatch(getProductByCategory(e.target.value))
  }
  
  useEffect(() =>{
    dispatch(getAllCategory())
  },[dispatch])
  return (
    <Navbar className={Navbarc} expand="lg" >
      <Container fluid >
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Form.Select title="Categorías" id="navbarScrollingDropdown" onChange={e => handleOnSelect(e)}>
              <option value="Todos">Todos</option>
              {
                state.map((e,i) => (
                  <option value={e} key={i}>{e}</option>
                ))
              }
            </Form.Select>
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="buscar"
              className="me-2"
              aria-label="Search"
              onChange={(e) => dispatch(BuscarProducto(e.target.value))}
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent