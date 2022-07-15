import { NavLink } from 'react-router-dom'
import {Nav, NavLinked,NavLinkActive, Bars, NavMenu, NavBtn,NavLinkBtn,Cart,cartIMG, DropdownA, datalist, LoginContainer,logo,NavContainer,searchdata, searchdata2 } from './NewNavBar.module.css'
import {DarkcartIMG, NavDark, darkA} from './NavBarDarkmode.module.css'
import { getUsers } from '../../redux/actions/adminAction'
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
  getAllCategories,
  getProductBy,
  BuscarProducto,
  setActive,
  publicationSeller,
  getAllProducts
} from '../../redux/actions/productAction';
import { setUser, setSeller } from '../../redux/actions/userAction'
import EmptyCart from '../../assets/img/emptycart.png'
import cart from '../../assets/img/cartICON.png';
import { useState } from 'react';
import LoginButton from '../Auth0/login';
import LogoutButton from '../Auth0/logout';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios'
import swal from 'sweetalert'
import { useLocation } from 'react-router'
import { getTransaction } from '../../redux/actions/InteractionsActions'

function NewNavBar(props) {
  const queries = useLocation().search

    const sort = useSelector(state => state.productReducer.sort)
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
    const transaction = useSelector(state => state.interactionsReducer.transaction)
    const [display, setDisplay] = useState([...productsCache]);
    const [togglemenu, settogglemenu] = useState(false)
    const [screen, setscreen] = useState(window.innerWidth)
    const CartState = useSelector(state => state.CartReducer.cart.cartItem)
    const [search, setSearch] = useState('');
    const seller = useSelector(state => state.userReducer.seller)
    const categories = useSelector((state) => state.productReducer.allCategories);
    const userLogged = useSelector((state) => state.userReducer.user)
    const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
    const toggleNav = () =>{
        settogglemenu(!togglemenu)
    }


  useEffect(()=> {
    
      dispatch(getAllCategories())
  
    const changeWidth = () =>{
      setscreen(window.innerWidth)
    }
    window.addEventListener("resize", changeWidth)
  }, [])

  useEffect(()=>{
    if(queries){
      if (queries.includes("token")){
        dispatch(getTransaction(queries))
        navigate("/transaction")
      }
    } 
 },[])

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

    useEffect(()=>{
      getAllUsers()
    },[userLogged])


    async function getAllUsers (){
      const token = await getAccessTokenSilently()
      dispatch(getUsers(token))
    }
    const searchOnSubmit = (e) => {
      e.preventDefault();
      navigate('/');
      props.scrollTo();
      dispatch(setActive(1));
      dispatch(BuscarProducto(search, min, max));
    };
  
    function searchOnChange(e) {
      setSearch(e.target.value);
      setDisplay([...productsCache]);
      setDisplay([
        ...productsCache.filter((e) =>
          e.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        ),
      ]);

    
  }
  
    const handleOnSelectCategory = (e, categoryName) => {
      e.preventDefault();
      navigate("/")
      dispatch(setActive(1));
      window.scrollTo(0, 650);
      const cat = categories.find(cat => cat.name===categoryName)
      dispatch(getProductBy(cat._id, min, max, sort));
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
                }} to="/" activeclassname={NavLinkActive}>
            <img src={isdarkMode ? mercadolight : mercado} />
          </NavLink>
          <div className={searchdata2}>
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
        {    (togglemenu || screen >768) && (
            <div className={NavMenu}>
            <div className={isdarkMode ? darkA : null}>
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
            </div>
            <div className={searchdata}>
                <Form className="d-flex" onSubmit={(e) => searchOnSubmit(e)}>
                    <input
                    type="text"
                    className={datalist}
                    placeholder="...Buscar"
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
                <NavLink to="/cart" activeclassname={NavLinkActive}>
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
                  <div className={ isdarkMode ? darkA : null }>
                    <NavDropdown.Item onClick={() => navigate("/favoritos")}>Favoritos</NavDropdown.Item>
                    {userLogged?.authorization?.roles.includes("seller")&&<NavDropdown.Item onClick={() => navigate("/publicar")}>Publica tu producto</NavDropdown.Item>}
                    {!userLogged?.authorization?.roles.includes("seller")&&<NavDropdown.Item onClick={() => navigate("/perfil/altavendedor")}>Date de alta como vendedor</NavDropdown.Item>}
                    <NavDropdown.Item onClick={() => navigate("/perfil")}>Perfil</NavDropdown.Item>
                    <NavDropdown.Divider />
                    {/* <button onClick={async()=>{
                      // Sirve de ejemplo para el uso de token de auth0
                      const token = await getAccessTokenSilently()

                      const response = await axios.delete('http://localhost:5050/commonuser/block/auth0|62ca199c22809700112893e6?block=true', {

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
                :<img className={logo} src={user.picture} referrerpolicy="no-referrer"/>}
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
