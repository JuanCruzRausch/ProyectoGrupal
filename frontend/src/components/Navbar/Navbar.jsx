import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  Button,
} from 'react-bootstrap';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import {
  getProductByCategory,
  BuscarProducto,
  setActive,
} from '../../redux/actions';
import { setUser } from '../../redux/actions/userAction'
import {
  Navbarc,
  cartIMG,
  DropdownA,
  datalist,
  LoginContainer,
  logo,
  Cart,
  Publicar
} from './Navbar.module.css';
import EmptyCart from '../../assets/img/emptycart.png'
import cart from '../../assets/img/cartICON.png';
import { useState } from 'react';
import LoginButton from '../Auth0/login';
import LogoutButton from '../Auth0/logout';
import { useAuth0 } from '@auth0/auth0-react';

function NavbarComponent(props) {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  let productsCache = [
    ...useSelector((state) => state.productReducer.allProductCache).map(
      (e) => e.title
    ),
  ];
  const [display, setDisplay] = useState([...productsCache]);
  const [displayFlag, setDisplayFlag] = useState(false);
  const CartState = useSelector(state => state.CartReducer.cart.cartItem)
  const [search, setSearch] = useState('');

  const categories = useSelector((state) => state.productReducer.categories);
  const userLogged = useSelector((state) => state.userReducer.user)
  const { user, isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    user?dispatch(setUser(user)):null
  },[user])

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

  const handleOnSelectCategory = (e, name) => {
    e.preventDefault();
    window.scrollTo(0, 650);
    navigate('/');
    dispatch(setActive(1));
    dispatch(getProductByCategory(name));
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
                    onClick={(e) => handleOnSelectCategory(e, category.name)}
                    href="#"
                  >
                    {category.name}
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>

            <Link to="/publicar" >
              {
                isAuthenticated ?
                  <div className={Publicar}>
                    <h5>Publica tu producto</h5>
                  </div> :
                  null
              }
            </Link>
            <Link to="/cart" >
              {
                CartState.length > 0 ? <div className={Cart}>
                  <img className={cartIMG} src={cart} alt="cart" />
                  <h6>{CartState.length}</h6>
                </div> :
                  <img className={cartIMG} src={EmptyCart} alt="cart" />
              }
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
          <div className={LoginContainer}>
            <div >
              <NavDropdown title={user.nickname}>
                {userLogged?.email_verified ? (
                  <div>
                    <NavDropdown.Item onClick={() => navigate("/favoritos")}>Favoritos</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => navigate("/shipping")}>Shipping</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => navigate("/perfil")}>perfil</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <LogoutButton />
                  </div>
                ) : (                  
                  <div>
                    <p>please verify you email </p>
                    <LogoutButton />
                  </div>   
                )}
              </NavDropdown>
            </div>
            <Container>
              <Link to="/">
                <img className={logo} src={user.picture} />
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
