import NavbarComponent from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import { app } from "./App.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import SignupScreen from "./components/SignupScreen/SignupScreen";
import SigninScreen from "./components/SigninScreen/SigninScreen";
import PerfilEditar from "./components/PerfilEditar/PerfilEditar";
import ShippingAddress from "./components/ShippingAddressScreen/ShippingAddress";
import Perfil from "./components/Perfil/Perfil";
import { useRef } from "react";
import Cart from "./components/Cart/Cart";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";

function App() {
  const scrollTo = useRef();
  const scrollToSort = () => {
    scrollTo.current.scrollIntoView();
  };
  return (
    <div className={app}>
      <BrowserRouter>
        <NavbarComponent scrollTo={scrollToSort} />
        <Routes>
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
      </BrowserRouter>
    </div>
  );
}

export default App;
