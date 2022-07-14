import React from 'react';
import { useState } from 'react';
import url from '../../ulr';
import low from '../../assets/img/icons_Products/podium_last.png';
import medium from '../../assets/img/icons_Products/podium_second.png';
import high from '../../assets/img/icons_Products/podium_first.png';
import free from '../../assets/img/icons_Products/free.png';
import normal from '../../assets/img/icons_Products/correo.png';
import seller from '../../assets/img/icons_Products/seller.png';
import pickup from '../../assets/img/icons_Products/-person.png';
import Loading from '../Loading/Loading'
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  CreateDiv,
  logo,
  img,
  linea,
  FormImage,
  Visibility,
  ShippingType,
  CreateForm,
  SegundaParte,
} from './CreateProduct.module.css';
import states from '../Json/states.jsx';
import { useEffect } from 'react';
import { getAllCategories } from '../../redux/actions';
import axios from 'axios';
import { addPublication, setAlert } from '../../redux/actions/index';
import { setSeller } from '../../redux/actions/userAction';
import swal from 'sweetalert';
import { useAuth0 } from '@auth0/auth0-react';
import { ToastContainer, toast } from 'react-toastify';
import LoginButton from '../Auth0/login';
import { Helmet } from 'react-helmet-async';

function CreateProduct() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { isAuthenticated } = useAuth0();
  const CATEGORIAS = useSelector((state) => state.productReducer.allCategories);
  const alert = useSelector((state) => state.productReducer.publicationAlert);
  const userState = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();
  const [stock, setStock] = useState(0);
  const [combination, setCombination] = useState({});
  const [images, setImages] = useState([]);
  const [stockTotal, setStockTotal] = useState(0);
  const { _id } = useSelector((state) => state.userReducer.seller);
  const loading = useSelector(state => state.productReducer.loading)
  const [data, setData] = useState({
    title: '',
    description: '',
    pictures: [],
    price: 0,
    currency: 'USD',
    seller: _id,
    category: '',
    subCategory: '',
    shipping: { shippingType: '' },
    condition: '',
    stock: { options: [] },
    brand: '',
    location: '',
    visibility: 0,
  });
  const subcategories = CATEGORIAS?.find((e) => e.name === data.category);
  const objects = subcategories?.subcategories.find(
    (e) => e.name === data.subCategory
  );
  useEffect(() => {
    if (alert === 'success') {
      swal({
        title: `Publicación creada`,
        icon: 'success',
      });
    }

    if (alert === 'error') {
      swal({
        title: `Error en la publicación`,
        icon: 'error',
      });
    }
    dispatch(setAlert('none'));
    dispatch(getAllCategories());
  }, [dispatch, alert]);

  const deleteImg = (i) => {
    setImages([...images.filter((e) => e[0].name !== i)]);
  };
  const handleOnChangeImages = (file) => {
    setImages([...images, file]);
  };
  function handleShipping(e) {
    setData({
      ...data,
      shipping: { shippingType: e.target.value },
    });
  }
  function handleCombinations(e, i) {
    setCombination({ ...combination, [e.target.name]: e.target.value });
  }
  function handleOnChange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  function priceValidation(e) {
    if (e.target.value >= 0) handleOnChange(e);
  }
  function handleStock(e) {
    setStock(e.target.value);
  }
  async function handleOnSubmit(e) {
    e.preventDefault();
    if (data.stock.options.length < 1) {
      swal({
        title: `Aún no ha agregado ningún stock`,
        icon: 'error',
      });
      return;
    }

    let arrayImg = [];
    dispatch({type:"SET_LOADING", payload:"spin"})
    for (let i = 0; i < images.length; i++) {
      let f = new FormData();
      f.append('image', images[i][0]);
      let result = await axios
        .post(`/upload-image`, f, {
          headers: { 'content-type': 'multipart/form-data' },
        })
        .catch((res) => console.log(res));
      arrayImg.push(result.data.data[0].imageURL);
    }

    await dispatch(
      addPublication(userState._id, {
        ...data,
        currency: 'USD',
        pictures: [...arrayImg],
        category: subcategories?._id,
        subCategory: objects?._id,
      })
    );
    dispatch(setSeller(userState._id));
  }

  function submitStock(e) {
    e.preventDefault();
    if (stock <= 0) {
      return;
    }
    let arr = [];
    for (const element in combination) {
      arr.push({ name: element, value: combination[element] });
    }
    setData({
      ...data,
      stock: {
        options: [...data.stock.options, { combination: [...arr], stock }],
      },
    });

    setStockTotal(Number(stockTotal) + Number(stock));
    setStock(0);
    setCombination({});

    toast.success('Stock agregado Correctamente', {
      position: 'top-right',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  return (
    <div>
      <Helmet>
        <title>ML7E Publicar Producto</title>
      </Helmet>

      <div className={CreateDiv}>
        
        {userState?.authorization?.roles.includes('seller') ? (
          <div>
            <h1>Publica tu Producto</h1>
            <Form onSubmit={(e) => handleOnSubmit(e)} className={CreateForm}>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Nombre del producto</Form.Label>
                <Form.Control
                  accept="image/jpg, image/png, image/jpeg"
                  name="title"
                  placeholder="Ej: Samsung galaxy S10+ 3GB/64GB"
                  value={data.title}
                  onChange={(e) => handleOnChange(e)}
                  required
                />
                <Form.Label>Descripcion</Form.Label>
                <Form.Control
                  name="description"
                  value={data.description}
                  onChange={(e) => handleOnChange(e)}
                  as="textarea"
                  placeholder="Describa su producto.."
                  rows={4}
                  required
                />
                <Form.Label>Imagenes (.jpg .jpeg .png)</Form.Label>
                <Form.Control
                  type="file"
                  multiple
                  onChange={(e) => handleOnChangeImages(e.target.files)}
                  className={FormImage}
                />
                <div>
                  {images.length > 0 &&
                    images.map((e, i) => (
                      <span key={i} className={img}>
                        <span>{e[0].name}</span>
                        <button onClick={() => deleteImg(e[0].name)}>
                          X
                        </button>{' '}
                      </span>
                    ))}
                </div>

                <Form.Label>Precio en USD</Form.Label>
                <Form.Control
                  type="number"
                  name="price"
                  value={data.price}
                  onChange={(e) => priceValidation(e)}
                  required
                />
                <Form.Label>Categoria</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  value={data.category}
                  name="category"
                  onChange={(e) => handleOnChange(e)}
                >
                  <option value="" disabled default>
                    Seleccione una categoria
                  </option>
                  {CATEGORIAS?.filter((e) => e.name !== '').map((e) => (
                    <option key={e.id}>{e.name}</option>
                  ))}
                </Form.Select>
                {subcategories ? <Form.Label>Sub-Categoria</Form.Label> : null}
                {subcategories ? (
                  <Form.Select
                    aria-label="Default select example"
                    value={data.subCategory}
                    name="subCategory"
                    onChange={(e) => handleOnChange(e)}
                  >
                    <option value="" disabled default>
                      Seleccione una categoria
                    </option>
                    {subcategories?.subcategories.map((e) => (
                      <option value={e.name} key={e.id}>
                        {e.name}
                      </option>
                    ))}
                  </Form.Select>
                ) : null}

                {/*        STOCK TRABAJAR ACA          */}
                {objects ? (
                  <Form aria-label="Default select example">
                    <div className={linea}></div>
                    <div>
                      <h2>características Especiales:</h2>
                    </div>
                    {objects?.properties.map((e, i) => (
                      <div key={e._id}>
                        <label>{e.nameprop}: </label>
                        {e.options.length > 0 ? (
                          <Form.Select
                            name={e.nameprop}
                            value={combination[i]?.value}
                            onChange={(e) => handleCombinations(e, i)}
                          >
                            <option default value="">
                              {e.nameprop}
                            </option>
                            {e.options.map((e, i) => (
                              <option key={i}>{e}</option>
                            ))}
                          </Form.Select>
                        ) : (
                          <Form.Control
                            name={e.nameprop}
                            value={combination[i]?.value}
                            onChange={(e) => handleCombinations(e, i)}
                          />
                        )}
                      </div>
                    ))}
                    <Form.Label>Stock</Form.Label>
                    <Form.Control
                      name="stock"
                      type="number"
                      value={stock}
                      onChange={(e) => handleStock(e)}
                      required
                    />
                    <div className={img}>
                      <div>
                        <button onClick={(e) => submitStock(e)}>
                          Agregar Stock
                        </button>
                      </div>
                      <div>
                        <h1>Cantidad Total: {stockTotal}</h1>
                      </div>
                    </div>
                    <div className={linea}></div>
                  </Form>
                ) : null}

                {data.title.length > 0 &&
                data.description.length > 0 &&
                data.category.length > 0 &&
                data.subCategory.length > 0 ? (
                  <div className={SegundaParte}>
                    <Form.Label>Envío: </Form.Label>
                    <form
                      className={ShippingType}
                      value={data.shipping.shippingType}
                      name="shippingType"
                      onChange={(e) => handleShipping(e)}
                    >
                      <div>
                        <input type="radio" value="free" name="shippingType" />
                        <img src={free} />
                        <label htmlFor=""> Envío gratis</label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          value="normal"
                          name="shippingType"
                        />
                        <img src={normal} />
                        <label htmlFor="">Envio por Correo</label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          value="seller"
                          name="shippingType"
                        />
                        <img src={seller} />
                        <label htmlFor="">Acordar con el comprador</label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          value="pickup"
                          name="shippingType"
                        />
                        <img src={pickup} />
                        <label htmlFor="">Retiro por sucursal</label>
                      </div>
                    </form>

                    {/* <Form.Select
            required
            aria-label="Default select example"
            value={data.shipping.shippingtype}
            name="shippingtype"
            onChange={(e) => handleShipping(e)}>
            <option value="" disabled default>
            Seleccione un tipo de envío
            </option>
            <option value="free">
            Envío gratis
            </option>
            <option value="normal">
            Envio por Correo
            </option>
            <option value="seller">
            Acordar con el comprador 
            </option>
            <option value="pickup">
            Retiro por sucursal
            </option>
          </Form.Select> */}

                    <Form.Label>Condición</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      name="condition"
                      value={data.condition}
                      onChange={(e) => handleOnChange(e)}
                      required
                    >
                      <option value="" disabled>
                        Condición
                      </option>
                      <option value="new">Nuevo</option>
                      <option value="used">Usado</option>
                    </Form.Select>
                    <Form.Label>Marca</Form.Label>
                    <Form.Control
                      placeholder="Ej: Puma, Nike, Samsung"
                      name="brand"
                      value={data.brand}
                      onChange={(e) => handleOnChange(e)}
                      required
                    />
                    <Form.Label>Ubicación</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      value={data.location}
                      name="location"
                      onChange={(e) => handleOnChange(e)}
                    >
                      <option value="" disabled default>
                        Seleccione una provincia
                      </option>
                      {states
                        .filter((e) => e.country_name === 'Argentina')
                        .map((state) => (
                          <option key={state.id} value={state.name}>
                            {state.name}
                          </option>
                        ))}
                    </Form.Select>
                    {/* <Form.Label>Visibilidad</Form.Label>
          <Form.Select
          aria-label="Default select example"
          value={data.visibility}
          name="visibility"
          onChange={(e) => handleOnChange(e)}>
          <option value="" disabled default>
          Seleccione un tipo de visualizacion
          </option>
          <option value="1">
          1 -poca visualizacion-
          </option>
          <option value="2">
          2 -visualización intermedia-
          </option>
          <option value="3">
          3 -máxima visualización- 
          </option>
        </Form.Select> */}
                    <Form.Label>Visualización</Form.Label>
                    <form
                      className={Visibility}
                      value={data.visibility}
                      name="visibility"
                      onChange={(e) => handleOnChange(e)}
                    >
                      <div>
                        <input type="radio" value="3" name="visibility" />
                        <img src={high} />
                        <label htmlFor="">máxima visualización</label>
                      </div>
                      <div>
                        <input type="radio" value="2" name="visibility" />
                        <img src={medium} />
                        <label htmlFor="">visualización intermedia</label>
                      </div>
                      <div>
                        <input type="radio" value="1" name="visibility" />
                        <img src={low} />
                        <label htmlFor="">poca visualizacion</label>
                      </div>
                    </form>
                  </div>
                ) : null}
              </Form.Group>
                {loading==="spin"&&<Loading/>}
              <div className={img}>
                <div>
                  <h1>Cantidad Total: {stockTotal}</h1>
                </div>
                <span>
                  <button type="submit">publicar</button>
                </span>
              </div>
            </Form>
           
          </div>
        ) : (
          <LoginButton />
        )}
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
      </div>
    </div>
  );
}
export default CreateProduct;
