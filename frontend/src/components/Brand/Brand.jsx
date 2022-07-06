import React from "react";
import { Form, Button } from "react-bootstrap";
import { Container_Small, Form_Div } from "./Brand.module.css";
import { useSelector, useDispatch } from "react-redux";
import { updateSeller } from "../../redux/actions/userAction"
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'

export default function Brand() {
  const navigate = useNavigate()
  const user = useSelector((state) => state.userReducer.user);
  const seller = useSelector((state) => state.userReducer.seller)
  const dispatch = useDispatch();
  const setSeller = (payload) => {
    return { type: "SET_SELLER", payload };
  };

  const sellerOnChange = (e, i) => {
    dispatch(
      setSeller({
        ...seller,
        [e]: i,
      }
    ));
  };


  const onHandleSubmit = async(e) => {
    e.preventDefault()
    dispatch(updateSeller(seller))
    .then(()=>{
      toast.success('marca actualizada correctamente', {
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      setTimeout(()=> navigate("/perfil"),3000)
    })
  };
  return (
    <div className="container">
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className={Form_Div}>
        <h1 className="my-3">Editar Marca</h1>
        <form onSubmit={(e) => onHandleSubmit(e)}>
          <Form.Group className="mb-3" controlId="name">
            <div>
                <Form.Label>Antigua Marca</Form.Label>
            </div>

            <Form.Label>Nueva Marca</Form.Label>
            <Form.Control
              required
              name="brand"
              onChange={(e) => sellerOnChange(e.target.name, e.target?.value)}
              value={seller?.brand}
            />
           
          </Form.Group>
          <div className="mb-3">
            <Button type="submit">Actualizar</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
