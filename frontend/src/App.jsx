import { useEffect } from "react";
import { useDispatch } from "react-redux";
import NavbarComponent from "./components/Navbar/Navbar";
import {getAllProducts} from "./redux/actions";


function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getAllProducts())
  },[])
  return <div className="App">
    <NavbarComponent />
  </div>;
}

export default App;
