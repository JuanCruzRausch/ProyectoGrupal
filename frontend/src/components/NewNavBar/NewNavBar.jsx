import { NavLink } from 'react-router-dom'
import {Nav, NavLinked,NavLinkActive, Bars, NavMenu, NavBtn,NavLinkBtn,Cart,cartIMG, DropdownA, datalist, LoginContainer,logo,NavContainer,searchdata,  } from './NewNavBar.module.css'
import {DarkcartIMG, NavDark} from './NavBarDarkmode.module.css'
import {FaBars} from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import lupa from '../../assets/img/lupa.png'
import Favoritos from '../../assets/img/heart.png'
import mercado from '../../assets/img/mercadoenanos5.png'
import mercadolight from '../../assets/img/mercadoenanos5Light.png'
import {
  Navbar,
  Container,
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
  publicationSeller,
  getAllProducts
} from '../../redux/actions/index';
import { setUser, setSeller } from '../../redux/actions/userAction'
import EmptyCart from '../../assets/img/emptycart.png'
import cart from '../../assets/img/cartICON.png';
import { useState } from 'react';
import LoginButton from '../Auth0/login';
import LogoutButton from '../Auth0/logout';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios'

function NewNavBar(props) {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const mode = useSelector((state)=> state.darkMode)
    const { isdarkMode } = mode;
    const {max, min} = useSelector((state) => state.productReducer.maxMinPrice)
    let productsCache = [
      ...useSelector((state) => state.productReducer.allProductCache).map(
        (e) => e.title
      ),
    ];
   
    const [display, setDisplay] = useState([...productsCache]);
    const [displayFlag, setDisplayFlag] = useState(false);
    const [togglemenu, settogglemenu] = useState(false)
    const [screen, setscreen] = useState(window.innerWidth)
    const CartState = useSelector(state => state.CartReducer.cart.cartItem)
    const [search, setSearch] = useState('');
    const seller = useSelector(state => state.userReducer.seller)
    const categories = useSelector((state) => state.productReducer.Categories);
    const userLogged = useSelector((state) => state.userReducer.user)
    const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
    const toggleNav = () =>{
        settogglemenu(!togglemenu)
    }
 
  useEffect(()=> {
    const changeWidth = () =>{
      setscreen(window.innerWidth)
    }
    window.addEventListener("resize", changeWidth)
  }, [])

    useEffect(() => {
      user?
      dispatch(setUser(user))
      .then(()=>dispatch(setSeller(userLogged?._id)))
      .catch((e)=> console.log(e))
      :null
    },[user])

    useEffect(() => {
      userLogged?
      dispatch(setSeller(userLogged?._id))
      .catch((e)=> console.log(e))
      :null
    },[userLogged])
  
    useEffect(() => {
      seller?._id?
      dispatch(publicationSeller(seller._id))
      .then((res)=> {})
      .catch((e)=> {})
      :null
    },[seller])

    const searchOnSubmit = (e) => {
      e.preventDefault();
      navigate('/');
      props.scrollTo();
      dispatch(setActive(1));
      dispatch(BuscarProducto(search, min, max));
    };
  
    function searchOnChange(e) {
      setSearch(e.target.value);
      if(e.target.value === ""){
        dispatch(getAllProducts())
      }
      else{
      setDisplay([...productsCache]);
      setDisplay([
        ...productsCache.filter((e) =>
          e.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        ),
      ]);
      e.target.value && setDisplayFlag(true);
      !e.target.value && setDisplayFlag(false);
    }
  }
  
    const handleOnSelectCategory = (e, categoryName) => {
      e.preventDefault();
      navigate("/")
      dispatch(setActive(1));
      window.scrollTo(0, 650);
      const cat = categories.find(cat => cat.name===categoryName)
      dispatch(getProductByCategory(cat._id, min, max));
    };

    function refreshPage(e) {
      e.preventDefault();
      navigate('/');
    }
  
  return (
    <div className={
      isdarkMode ? 
      NavDark 
      : NavContainer
      }>
        <nav className={Nav}>
            <NavLink className={NavLinked} onClick={(e) => 
                {refreshPage(e);
                }} to="/" ActiveClassname={NavLinkActive}>
            <img src={isdarkMode ? mercadolight : mercado} />
          </NavLink>
          <div onClick={toggleNav} className={Bars}>
            <FaBars/> 
          </div>

        {    (togglemenu || screen >768) && (
            <div className={NavMenu}>
            <NavDropdown title="Categorías" id="navbarScrollingDropdown">
                {categories?.map((category) => {
                    return (
                    <NavDropdown.Item
                        key={category._id}
                        className={DropdownA}
                        onClick={(e) => handleOnSelectCategory(e, category.name)}
                        href="#"
                    >
                        {category.name}
                    </NavDropdown.Item>
                    );
                })}
                </NavDropdown>
            <div className={searchdata}>
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
                    <img src={lupa} />
                    </Button>
                </Form>
            </div>
                <NavLink to="/cart" ActiveClassname={NavLinkActive}>
                {
                CartState.length > 0 ? <div className={Cart}>
                  <img className={ isdarkMode ? DarkcartIMG : cartIMG } src={cart} alt="cart" />
                  <h6>{CartState.length}</h6>
                </div> :
                  <img className={ isdarkMode ? DarkcartIMG : cartIMG } src={EmptyCart} alt="cart" />
                }   
                </NavLink>
                {
                  isAuthenticated ? 
                  (<Link to="/favoritos"><img className={ isdarkMode ? DarkcartIMG : cartIMG } src={Favoritos} alt="favoritos" /></Link>) 
                  : null
                }
          {isAuthenticated ? (
          <div className={LoginContainer}>
            <div >
              <NavDropdown title={user.nickname}>
                {userLogged?.email_verified ? (
                  <div>
                    <NavDropdown.Item onClick={() => navigate("/favoritos")}>Favoritos</NavDropdown.Item>
                    {userLogged?.authorization?.roles.includes("seller")&&<NavDropdown.Item onClick={() => navigate("/publicar")}>Publica tu producto</NavDropdown.Item>}
                    {!userLogged?.authorization?.roles.includes("seller")&&<NavDropdown.Item onClick={() => navigate("/perfil/altavendedor")}>Publica tu producto</NavDropdown.Item>}
                    <NavDropdown.Item onClick={() => navigate("/perfil")}>Perfil</NavDropdown.Item>
                    <NavDropdown.Divider />
                    {/*  Es para probar rutas con token de auth0
                    <button onClick={async()=>{
                      const token = await getAccessTokenSilently()
                      const response = await axios.get('http://localhost:5050/apiAuth0', {
                        headers: {
                          Authorization: `Bearer ${token}`
                        }
                      })
                    }} >api Admin Auth0</button> */}
                    <LogoutButton />
                  </div>

                ) : (                  
                  <p><LogoutButton />please verify you email </p>
                  
                )}
              </NavDropdown>
            </div>
            <Container>
              <Link to="/">
                {userLogged?.photo?<img className={logo} src={userLogged?.photo} />
                :<img className={logo} src={user.picture} />}
              </Link>
            </Container>
          </div>
        ) : (
          <LoginButton />
        )}

        </div>)}
    
    </nav>
</div>
  )
}

export default NewNavBar