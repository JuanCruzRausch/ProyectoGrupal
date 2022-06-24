import NavbarComponent from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import { app } from './App.module.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductDetail from './components/ProductDetail/ProductDetail';
import SignupScreen from './components/SignupScreen/SignupScreen';
import SigninScreen from './components/SigninScreen/SigninScreen';

function App() {
  return (
    <div className={app}>
      <NavbarComponent />
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SigninScreen />} />
          <Route path="/signup" element={<SignupScreen />} />
          <Route path="/:id" element={<ProductDetail />} />
          <Route path="/" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
