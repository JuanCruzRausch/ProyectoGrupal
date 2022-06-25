import NavbarComponent from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import { app } from './App.module.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductDetail from './components/ProductDetail/ProductDetail';
import SignupScreen from './components/SignupScreen/SignupScreen';
import SigninScreen from './components/SigninScreen/SigninScreen';
import Perfil from './components/Perfil/Perfil';
import { useRef } from 'react'

function App() {
  const scrollTo = useRef()
  const scrollToSort = () =>{
    console.log(scrollTo)
    scrollTo.current.scrollIntoView()
  }
  return (
    <div className={app}>
      <BrowserRouter>
        <NavbarComponent scrollTo={scrollToSort}/>
        <Routes>
          <Route path="/perfil/editar" element={<Perfil />} />
          <Route path="/signin" element={<SigninScreen />} />
          <Route path="/signup" element={<SignupScreen />} />
          <Route path="/:_id" element={<ProductDetail />} />
          <Route path="/" element={<Products refElement={scrollTo} scrollTo={scrollToSort}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
