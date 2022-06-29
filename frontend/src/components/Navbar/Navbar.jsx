import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  getProductByCategory,
  BuscarProducto,
  setActive,
} from '../../redux/actions';
import { Navbarc, cartIMG, DropdownA, datalist, logo } from './Navbar.module.css';
import cart from '../../assets/img/cartICON.png';
import { useState } from 'react';
import LoginButton from '../Auth0/login';
import LogoutButton from '../Auth0/logout';
import { useAuth0 } from '@auth0/auth0-react';
import logo from './Navbar.module.css'

function NavbarComponent(props) {
  let navigate = useNavigate();

  let productsCache = [
    ...useSelector((state) => state.productReducer.allProductCache).map(
      (e) => e.title
    ),
  ];
  const [display, setDisplay] = useState([...productsCache]);
  const [displayFlag, setDisplayFlag] = useState(false);
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.productReducer.categories);
  const { user, isAuthenticated, isLoading } = useAuth0();

  const searchOnSubmit = (e) => {
    e.preventDefault();
    navigate('/');
    props.scrollTo();
    dispatch(setActive(1));
    dispatch(BuscarProducto(search));
  };

  function searchOnChange(e) {
    setSearch(e.target.value);
    setDisplay([...productsCache]);
    setDisplay([
      ...productsCache.filter((e) =>
        e.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      ),
    ]);
    e.target.value && setDisplayFlag(true);
    !e.target.value && setDisplayFlag(false);
  }

  const handleOnSelectCategory = (e) => {
    e.preventDefault();
    window.scrollTo(0, 650);
    navigate('/');
    dispatch(setActive(1));
    dispatch(getProductByCategory(e.target.innerText));
  };
  function refreshPage(e) {
    e.preventDefault();
    navigate('/');
  }

 
  return (
    <Navbar className={Navbarc} expand="lg">
      <Container fluid>
        <Navbar.Brand
          href="/"
          onClick={(e) => {
            refreshPage(e);
          }}
        >
          Minimal Store
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <NavDropdown title="Categorías" id="navbarScrollingDropdown">
              {categories?.map((category) => {
                return (
                  <NavDropdown.Item
                    key={category.id}
                    className={DropdownA}
                    onClick={(e) => handleOnSelectCategory(e)}
                    href="#"
                  >
                    {category.name}
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
            <Nav.Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate('/signin');
              }}
            >
              Iniciar sesion
            </Nav.Link>
            <Nav.Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate('/perfil');
              }}
            >
              Mi perfil
            </Nav.Link>
            <Link to="/cart">
              <img className={cartIMG} src={cart} alt="cart" />
            </Link>
          </Nav>
          <Form className="d-flex" onSubmit={(e) => searchOnSubmit(e)}>
            <input
              type="text"
              className={datalist}
              placeholder="...buscar"
              list="data"
              onChange={(e) => searchOnChange(e)}
            />
            <datalist id="data">
              {display.map((item, key) => (
                <option key={key} value={item} />
              ))}
            </datalist>
            <Button type="submit" variant="outline-success">
              Buscar
            </Button>
          </Form>
        </Navbar.Collapse>
          {isAuthenticated ? (
            <div>
              <div >
                <NavDropdown title={user.nickname}> 
                  {user.email_verified ? (
                    <div>
                      <NavDropdown.Item>Favoritos</NavDropdown.Item>
                      <NavDropdown.Item onClick={()=> navigate("/perfil")}>perfil</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <LogoutButton />
                    </div>
                ) : (
                  <h4>please verify you email  <LogoutButton /></h4>
                  )}
                </NavDropdown>  
              </div>
              <Container>                
                <Link to="/">
                  <img className={logo} src={user.picture} alt={user.name} />
                </Link>
              </Container>
            </div>
          ) : (
            <LoginButton />
            )}
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
