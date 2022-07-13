import React, { useState } from 'react';
import { container, modal_body, input_modal } from './Compras.module.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import arrow from '../../assets/img/leftarrow.png';
import { Detail_Links } from '../PerfilEditar/PerfilEditar.module.css';
import { DetailDark } from '../Terms/TermsDark.module.css';
import { getPurchases, reject, arrived } from '../../redux/actions/userAction';
import { Table } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import StarRating from '../Rating/StarRating';
import { Form } from 'react-bootstrap';
import { sendReview } from '../../redux/actions/InteractionsActions';
import { Helmet } from 'react-helmet-async';
export default function Compras() {
  const navigate = useNavigate();
  const mode = useSelector((state) => state.darkMode);
  const { isdarkMode } = mode;
  const [show, setShow] = useState(false);
  const purchases = useSelector((state) => state.userReducer.purchases);
  const user = useSelector((state) => state.userReducer.user);
  const [seller, setSeller] = useState(null);
  const [publication, setPublication] = useState(null);
  const dispatch = useDispatch();
  const [review, setReview] = React.useState({
    rep: null,
    rat: null,
    review: null,
  });
  useEffect(() => {
    dispatch(getPurchases(user?._id));
  }, [user]);

  const handleOnChange = (e) => {
    setReview({
      ...review,
      review: e.target.value,
    });
  };
  const handleSend = () => {
    dispatch(sendReview(publication, seller, user?._id, review));
    setSeller('');
    setPublication('');
    setReview({});
  };
  const getRatingSeller = (rep) => {
    setReview({ ...review, rep });
  };

  const getRatingPurchase = (rat) => {
    setReview({ ...review, rat });
  };

  return (
    <div>
      <Helmet>
        <title> ML7E Compras</title>
      </Helmet>
      <div className={container}>
        <div className={isdarkMode ? DetailDark : Detail_Links}>
          <img src={arrow} alt="back" />
          <a onClick={() => navigate(-1)}>
            <h2>Atras</h2>
          </a>
        </div>
        <Table
          striped
          bordered
          hover
          variant={isdarkMode ? 'dark' : 'light'}
          responsive="sm"
        >
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
                  <td>
                    <Link
                      to={`/products/${purchase?.transaction?.publication?._id}`}
                    >
                      {purchase?.transaction?.publication?.title}
                    </Link>
                  </td>
                ) : (
                  <td>
                    <Link
                      to={`/products/${purchase?.transaction?.publication?._id}`}
                    >
                      {purchase?.transaction?.publication?._id}
                    </Link>
                  </td>
                )}
                <td>{purchase?.publication?.price}</td>
                <td>{purchase?.transaction?.quantity}</td>
                <td>{purchase?.transaction?.seller?.brand}</td>
                <td>{purchase?.transaction?.status}</td>
                <td>
                  {purchase?.transaction?.status === 'pending' && (
                    <button
                      className="btn-success button"
                      onClick={() => dispatch(arrived(purchase._id, user?._id))}
                    >
                      Confirmar
                    </button>
                  )}
                  {purchase?.transaction?.status === 'pending' && (
                    <button
                      className="btn-danger button"
                      onClick={() => dispatch(reject(purchase._id, user?._id))}
                    >
                      Cancelar
                    </button>
                  )}
                  {purchase?.transaction?.status === 'fulfilled' && (
                    <button
                      className="btn-primary button"
                      onClick={() => {
                        setSeller(purchase?.transaction?.seller?._id);
                        setShow(!show);
                        setPublication(purchase?.transaction?.publication?._id);
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
            <Modal.Header closeButton></Modal.Header>
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
                    onChange={(e) => handleOnChange(e)}
                    dialogClassName={input_modal}
                    as="textarea"
                    rows={3}
                  />
                </Form.Group>
              </Form>
              <Button variant="primary" onClick={handleSend}>
                Enviar
              </Button>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </div>
  );
}
