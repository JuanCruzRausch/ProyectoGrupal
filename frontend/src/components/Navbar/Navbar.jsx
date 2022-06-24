import React from 'react'
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getProductByCategory, BuscarProducto, } from "../../redux/actions"
import {Navbarc,cartIMG,DropdownA } from './Navbar.module.css'
import cart from '../../assets/img/cartICON.png'
import {useState} from "react"

function NavbarComponent() {

  const [search, setSearch] = useState("")
  const dispatch = useDispatch()
  const categories = useSelector(state => state.categories)



  const searchOnSubmit = (e) => {
    e.preventDefault()
    console.log(search)
    dispatch(BuscarProducto(search))
  }

  const searchOnChange = (e) => {
    setSearch(e.target.value)
  }

  const handleOnSelectCategory = (e) => {
    e.preventDefault()
    dispatch(getProductByCategory(e.target.innerText))
  }


  return (
    <Navbar className={Navbarc} expand="lg" >
      <Container fluid >
        <Navbar.Brand href="/">Minimal Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            
            navbarScroll
          >
            <NavDropdown title="Categorías" id="navbarScrollingDropdown"  >
              {
                categories.map(category=>{
                  return(
                    <NavDropdown.Item key={category.id} className={DropdownA}
                    onClick={e => handleOnSelectCategory(e)} href="#">{category.name}
                    </NavDropdown.Item>
                  )
                }) 
              }
            </NavDropdown>
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="#action2">Mi perfil</Nav.Link>
            <img className={cartIMG} src={cart} alt="cart"/>
          </Nav>
          <Form className="d-flex" onSubmit={(e) => searchOnSubmit(e)}>
            <FormControl
              type="search"
              placeholder="buscar"
              className="me-2"
              aria-label="Search"
              onChange={(e) => searchOnChange(e)} />
            <Button type="submit" variant="outline-success">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent