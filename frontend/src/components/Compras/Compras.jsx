import React, { useState } from "react";
import { container, modal_body, input_modal } from "./Compras.module.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPurchases, reject, arrived } from "../../redux/actions/userAction";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import StarRating from "../Rating/StarRating";
import { Form } from "react-bootstrap";
import { sendReview } from '../../redux/actions/InteractionsActions'
export default function Compras() {
  const [show, setShow] = useState(false);
  const purchases = useSelector((state) => state.userReducer.purchases);
  const user = useSelector((state) => state.userReducer.user);
  const [seller, setSeller] = useState(null)
  const [publication, setPublication] = useState(null)
  const dispatch = useDispatch();
  const [review, setReview] = React.useState({
    rep:null,
    rat:null,
    review: null
  })
  useEffect(() => {
    dispatch(getPurchases(user?._id));
  }, [user]);

  const handleOnChange = (e) =>{
      setReview({
          ...review,
          review : e.target.value
      })
  }
  const handleSend = () => {
      dispatch(sendReview(publication, seller, user?._id, review))
      setSeller("")
      setPublication("")
      setReview({})
  }
  const getRatingSeller = (rep) =>{
      setReview({...review, rep})
  }

  const getRatingPurchase = (rat) => {
    setReview({...review, rat})
  }


 
  return (
    <div className={container}>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>PRODUCTO</th>
            <th>PRECIO</th>
            <th>CANTIDAD</th>
            <th>MARCA</th>
            <th>STATUS</th>
            <th>CONFIRMACIONES</th>
            <th>FECHA</th>
          </tr>
        </thead>
        <tbody>
          {purchases?.map((purchase) => (
            <tr>
              <td>{purchase._id}</td>
              {purchase?.transaction?.publication?.title ? (
                <Link
                  to={`/products/${purchase?.transaction?.publication?._id}`}
                >
                  <td>{purchase?.transaction?.publication?.title}</td>
                </Link>
              ) : (
                <Link
                  to={`/products/${purchase?.transaction?.publication?._id}`}
                >
                  <td>{purchase?.transaction?.publication?._id}</td>
                </Link>
              )}
              <td>{purchase?.publication?.price}</td>
              <td>{purchase?.transaction?.quantity}</td>
              <td>{purchase?.transaction?.seller?.brand}</td>
              <td>{purchase?.transaction?.status}</td>
              <td>
                {purchase?.transaction?.status === "pending" && (
                  <button
                    className="btn-success button"
                    onClick={() => dispatch(arrived(purchase._id, user?._id))}
                  >
                    Confirmar
                  </button>
                )}
                {purchase?.transaction?.status === "pending" && (
                  <button
                    className="btn-danger button"
                    onClick={() => dispatch(reject(purchase._id, user?._id))}
                  >
                    Cancelar
                  </button>
                )}
                {purchase?.transaction?.status === "fulfilled" && (
                  <button
                    className="btn-primary button"
                    onClick={() => {
                      setSeller(purchase?.transaction?.seller?._id)
                      setShow(!show);
                      setPublication(purchase?.transaction?.publication?._id)
                    }}
                  >
                    Calificar
                  </button>
                )}
              </td>
              <td>{purchase?.dateOfBuy?.substring(0, 10)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div>
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-120w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body dialogClassName={modal_body}>
            <Modal.Title id="example-custom-modal-styling-title">
              Como calificas la compra?
            </Modal.Title>
            <StarRating getRating={getRatingPurchase} />
            <Modal.Title id="example-custom-modal-styling-title">
              Como calificas el vendedor?
            </Modal.Title>
            <StarRating getRating={getRatingSeller} />
            
            <br />
            <Form>
                <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
                >
                <Form.Label>Describenos tu experiencia:</Form.Label>
                <Form.Control 
                onChange={(e)=>handleOnChange(e)}
                dialogClassName={input_modal} as="textarea" rows={3} />
                </Form.Group>
            </Form>
            <Button variant="primary" onClick={handleSend}>
            Enviar
          </Button>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}
