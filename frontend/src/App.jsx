import NavbarComponent from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import {app} from './App.module.css'
function App() {
  return <div className={app}>
    <NavbarComponent />
    <Products/>
  </div>;
}

export default App;
