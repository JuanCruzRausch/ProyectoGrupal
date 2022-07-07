import Products from "./components/Products/Products";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Favoritos from './components/Favoritos/Favoritos'
import SignupScreen from "./components/SignupScreen/SignupScreen";
import SigninScreen from "./components/SigninScreen/SigninScreen";
import PerfilEditar from "./components/PerfilEditar/PerfilEditar";
import Dashboard from "./components/Dashboard/Dashboard";
import ShippingAddress from "./components/ShippingAddressScreen/ShippingAddress";
import Perfil from "./components/Perfil/Perfil";
import SellerProfile from "./components/Seller/SellerProfile";
import { useRef } from "react";
import Cart from "./components/Cart/Cart";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import 'react-toastify/dist/ReactToastify.css';
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { app, checkbox, label, ball,darkmode, appDark } from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { handledarkMode } from "./redux/actions/DarkActions";
import CreateProduct from "./components/CreateProduct/CreateProduct";
import NewNavBar from "./components/NewNavBar/NewNavBar";
import AltaVendedor from "./components/AltaVendedor/AltaVendedor"
import Footer from "./components/Footer/Footer";
import Error from "./components/Error/Error";
import SocialNet from "./components/SocialNet/SocialNet";
import Brand from "./components/Brand/Brand";
import Historial from "./components/Historial/Historial";
import socketIO from "socket.io-client";
import { useEffect } from "react";

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
          <Route path="/perfil/historial" element={ <Historial /> } />
          <Route path="/perfil/vendedor" element={<SellerProfile />} />
          <Route path="/perfil/altavendedor" element={<AltaVendedor />} />
          <Route path="/enano" element={ <Dashboard />} />
          <Route path="/publicar" element={ <CreateProduct /> } />
          <Route path="/perfil/marca" element={<Brand />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/perfil/redessociales" element={<SocialNet />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/placeorder" element={<PlaceOrder/>}/>
          <Route path="/shipping" element={<ShippingAddress />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/perfil/editar" element={<PerfilEditar />} />
          <Route path="/signin" element={<SigninScreen />} />
          <Route path="/signup" element={<SignupScreen />} />
          <Route path="*" element={ <Error /> } />
          <Route
           exact path="/products/:_id"
            element={<ProductDetail scrollTo={scrollToSort} />}
          />
          <Route
           exact path="/"
            element={<Products refElement={scrollTo} scrollTo={scrollToSort} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
