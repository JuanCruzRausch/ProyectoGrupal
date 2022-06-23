import React from 'react'
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button,  } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getProductByCategory } from "../../redux/actions"
import {Navbarc, } from './Navbar.module.css'
function NavbarComponent() {

  const dispatch = useDispatch()
  const categories = useSelector(state=>state.categories)

  const handleOnSelectCategory = (e) => {
    e.preventDefault()
    console.log(e.target.innerText);
    dispatch(getProductByCategory())
  }

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
            <NavDropdown title="Categorías" id="navbarScrollingDropdown"  >
              {
                categories.map(category=>{
                  return(
                    <NavDropdown.Item className={"bg-dark"} key={category.id} onClick={e => handleOnSelectCategory(e)} href="#">{category.name}</NavDropdown.Item>
                  )
                }) 
              }

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
              placeholder="buscar"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent