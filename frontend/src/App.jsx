import NavbarComponent from "./components/Navbar/Navbar";
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
import { useEffect, useRef } from "react";
import Cart from "./components/Cart/Cart";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import 'react-toastify/dist/ReactToastify.css';
// import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { app, checkbox, label, ball,darkmode } from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { handledarkMode } from "./redux/actions/DarkActions";
import CreateProduct from "./components/CreateProduct/CreateProduct";
import NewNavBar from "./components/NewNavBar/NewNavBar";
import Footer from "./components/Footer/Footer";
function App() {
  const dispatch = useDispatch();
  const mode = useSelector((state)=> state.darkMode)
  const { isdarkMode } = mode;
  const switchDarkMode = () => {
    isdarkMode
      ? dispatch(handledarkMode(false))
      : dispatch(handledarkMode(true));
  };
  let doc = document.getElementsByClassName("navbar")
  let divs= document.querySelectorAll("div");
  let a = document.querySelectorAll("a");

  // useEffect(() => {
  //   document.body.style.backgroundColor = isdarkMode ? "#000000" : "#eceded"
  //   doc[0].style.backgroundColor = isdarkMode ? "#000c6b" : "#fbcb0b"
  //   divs[0].style.color = isdarkMode ? "#ffffff" : "#000000"
  // }, [isdarkMode]);
  
  const scrollTo = useRef();
  const scrollToSort = () => {
    scrollTo.current.scrollIntoView();
  };
  return (
    <div className={app}>
      <BrowserRouter>
        {/* <NavbarComponent scrollTo={scrollToSort} /> */}
         <NewNavBar scrollTo={scrollToSort}/> 
       {/* <> 
       <div className={darkmode}>
        <input
            type="checkbox"
            className={checkbox}
            id="checkbox"
            // onChange prop to fire our internal function for changing the dark mode value
            onChange={switchDarkMode}
            // checking checked prop with dark mode state
            checked={isdarkMode}
          />
          <label htmlFor="checkbox" className={label}>
            <BsMoonStarsFill color="white" />
            <BsFillSunFill color="yellow" />
            <div className={ball}></div>
          </label>
        </div>
        </> */}
        <Routes>
          <Route path="/perfil/vendedor" element={<SellerProfile />} />
          <Route path="/enano" element={ <Dashboard />} />
          <Route path="/publicar" element={ <CreateProduct /> } />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/placeorder" element={<PlaceOrder/>}/>
          <Route path="/shipping" element={<ShippingAddress />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/perfil/editar" element={<PerfilEditar />} />
          <Route path="/signin" element={<SigninScreen />} />
          <Route path="/signup" element={<SignupScreen />} />
          <Route
            path="/:_id"
            element={<ProductDetail scrollTo={scrollToSort} />}
          />
          <Route
            path="/"
            element={<Products refElement={scrollTo} scrollTo={scrollToSort} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
