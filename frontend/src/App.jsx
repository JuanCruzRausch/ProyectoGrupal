import NavbarComponent from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import { app } from './App.module.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className={app}>
        <NavbarComponent />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Products />}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
