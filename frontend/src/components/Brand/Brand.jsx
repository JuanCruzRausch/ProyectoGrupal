import React from "react";
import { Form, Button } from "react-bootstrap";
import { Container_Small, Form_Div } from "./Brand.module.css";
import { useSelector, useDispatch } from "react-redux";

export default function Brand() {
  const user = useSelector((state) => state.userReducer.user);
  const seller = useSelector((state) => state.userReducer.seller)
  const dispatch = useDispatch();
  const updateSeller = (payload) => {
    return { type: "SET_SELLER", payload };
  };

  const sellerOnChange = (e, i) => {
    dispatch(
      editSeller({
        ...seller,
        [e]: i,
      }
    ));
  };


  const onHandleSubmit = async(e) => {
    dispatch(updateSeller(seller));
  };
  return (
    <div className="container">
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
