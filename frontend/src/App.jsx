import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./components/Products/Products";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Favoritos from './components/Favoritos/Favoritos'
import SignupScreen from "./components/SignupScreen/SignupScreen";
import SigninScreen from "./components/SigninScreen/SigninScreen";
import PerfilEditar from "./components/PerfilEditar/PerfilEditar";
import Dashboard from "./components/Dashboard/Dashboard";
import ShippingAddress from "./components/ShippingAddressScreen/ShippingAddress";
import Perfil from "./components/Perfil/Perfil";
import SellerProfile from "./components/Seller/SellerProfile";
import Cart from "./components/Cart/Cart";
import About from './components/About/About';
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import CreateProduct from "./components/CreateProduct/CreateProduct";
import NewNavBar from "./components/NewNavBar/NewNavBar";
import AltaVendedor from "./components/AltaVendedor/AltaVendedor"
import Footer from "./components/Footer/Footer";
import Error from "./components/Error/Error";
import SocialNet from "./components/SocialNet/SocialNet";
import Rating from "./components/Rating/Rating";
import Brand from "./components/Brand/Brand";
import Historial from "./components/Historial/Historial";
import Terms from "./components/Terms/Terms";
import Privacy from "./components/Privacy/Privacy";
import Controlls from "./components/Controlls/Controlls";
import UserList from "./components/UserList/UserList";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import socketIO from "socket.io-client";
import { handledarkMode } from "./redux/actions/DarkActions";
import { useRef } from "react";
import { useEffect } from "react";
import { app, checkbox, label, ball,darkmode, appDark } from "./App.module.css";
import 'react-toastify/dist/ReactToastify.css';
import Transaction from "./components/Transtaction/Transaction";
import Ventas from "./components/Ventas/Ventas";

const WS = "http://localhost:5050"

function App() {
  const dispatch = useDispatch();
  const mode = useSelector((state)=> state.darkMode)
  const { isdarkMode } = mode;
  const switchDarkMode = () => {
    isdarkMode
      ? dispatch(handledarkMode(false))
      : dispatch(handledarkMode(true));
  };
  const scrollTo = useRef();
  useEffect(()=>{
    socketIO(WS)
  },[])

  const scrollToSort = () => {
    scrollTo.current.scrollIntoView();
  };
  return (
    <div className={
      isdarkMode ?
      appDark
      : app 
      }>
      <BrowserRouter>
         <NewNavBar scrollTo={scrollToSort}/> 
       <div className={darkmode}>
        <input type="checkbox" className={checkbox} id="checkbox" onChange={switchDarkMode} checked={isdarkMode} />
        <label htmlFor="checkbox" className={label}>
            <BsMoonStarsFill color="white" />
            <BsFillSunFill color="yellow" />
            <div className={ball}></div>
        </label>
        </div>
        <Routes>
          <Route path="/perfil/ventas" element={ <Ventas />} />
          <Route path="/transaction/" element={ <Transaction />} />
          <Route path="/admin/userlist" element={ <UserList /> } />
          <Route path="/privacidad" element={ <Privacy /> } />
          <Route path="/terminos-y-condiciones" element={ <Terms /> } />
          <Route path="/perfil/historial/rating" element={ <Rating /> }/>
          <Route path="/perfil/historial" element={ <Historial /> } />
          <Route path="/perfil/vendedor" element={<SellerProfile />} />
          <Route path="/perfil/altavendedor" element={<AltaVendedor />} />
          <Route path="/perfil/marca" element={<Brand />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/perfil/editar" element={<PerfilEditar />} />
          <Route path="/perfil/redessociales" element={<SocialNet />} />
          <Route path="/admin/dashboard" element={ <Dashboard />} />
          <Route path="/publicar" element={ <CreateProduct /> } />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/placeorder" element={<PlaceOrder/>}/>
          <Route path="/shipping" element={<ShippingAddress />} />
          <Route path="/signin" element={<SigninScreen />} />
          <Route path="/signup" element={<SignupScreen />} />
          <Route path="/nosotros" element={ <About /> } />
          <Route exact path="/products/:_id" element={<ProductDetail scrollTo={scrollToSort} />} />
          <Route exact path="/" element={<Products refElement={scrollTo} scrollTo={scrollToSort} />}/>
          <Route path="*" element={ <Error /> } />
        </Routes>
        <Footer />
        <Controlls />
      </BrowserRouter>
    </div>
  );
}
export default App;