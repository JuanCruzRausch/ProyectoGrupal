import { useNavigate } from 'react-router-dom'
import React from 'react'
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getProductByCategory, BuscarProducto, } from "../../redux/actions"
import { Navbarc, cartIMG, DropdownA, datalist } from './Navbar.module.css'
import cart from '../../assets/img/cartICON.png'
import { useState } from 'react'

function NavbarComponent(props) {

  let navigate = useNavigate()

  let productsCache = [...(useSelector(state => state.allProductCache)).map(e => e.title)]
  const [display, setDisplay] = useState([...productsCache])
  const [displayFlag, setDisplayFlag] = useState(false)
  const [search, setSearch] = useState("")
  const dispatch = useDispatch()
  const categories = useSelector(state => state.categories)



  const searchOnSubmit = (e) => {
    e.preventDefault()
    props.scrollTo()
    navigate("/")
    dispatch(BuscarProducto(search))
  }

  function searchOnChange(e) {
    setSearch(e.target.value)
    setDisplay([...productsCache])
    setDisplay([...productsCache.filter(e => e.toLocaleLowerCase().includes(search.toLocaleLowerCase()))])
    e.target.value && setDisplayFlag(true)
    !e.target.value && setDisplayFlag(false)
  }

  const handleOnSelectCategory = (e) => {
    e.preventDefault()
    props.scrollTo()
    navigate("/")
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
                categories.map(category => {
                  return (
                    <NavDropdown.Item key={category.id} className={DropdownA}
                      onClick={e => handleOnSelectCategory(e)} href="#">{category.name}
                    </NavDropdown.Item>
                  )
                })
              }
            </NavDropdown>
            <Nav.Link href="/signin">Iniciar sesion</Nav.Link>
            <Nav.Link href="/perfil/editar">Mi perfil</Nav.Link>
            <img className={cartIMG} src={cart} alt="cart" />
          </Nav>
          <Form className="d-flex" onSubmit={(e) => searchOnSubmit(e)}>
            <input type="text" 
              className={datalist}
              placeholder="...buscar"
              list="data" 
              onChange={(e) => searchOnChange(e)} />
              <datalist id="data">
                {display.map((item, key) =>
                  <option key={key} value={item} />
                )}
                </datalist>
            <Button type="submit" variant="outline-success">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent