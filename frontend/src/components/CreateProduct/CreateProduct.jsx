import React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { CreateDiv, logo, img, linea ,FormImage } from "./CreateProduct.module.css";
import states from "../Json/states.jsx";
import { useEffect } from "react";
import { getAllCategories } from "../../redux/actions";
import axios from "axios";
import { addPublication } from "../../redux/actions/index";
import swal from "sweetalert";
import { ToastContainer, toast } from "react-toastify";

function CreateProduct() {
  const CATEGORIAS = useSelector((state) => state.productReducer.Categories);
  const alert = useSelector((state) => state.productReducer.publicationAlert);
  const dispatch = useDispatch();
  const [stock, setStock] = useState(0);
  const [combination, setCombination] = useState({});
  const [images, setImages] = useState([]);
  const [stockTotal, setStockTotal] = useState(0)
  const [data, setData] = useState({
    title: "",
    description: "",
    pictures: [],
    price: 0,
    currency: "",
    seller: "62bf48e53682a40660d2c540",
    category: "",
    subCategory: "",
    shipping: { shippingtype: "" },
    condition: "",
    stock: { options: [] },
    brand: "",
    location: "",
    visibility: 0,
  });
  const subcategories = CATEGORIAS?.find((e) => e.name === data.category);
  const objects = subcategories?.subcategories.find(
    (e) => e.name === data.subCategory
  );

  useEffect(() => {
    if (alert === "success") {
      swal({
        title: `Publicación creada`,
        icon: "success",
      });
    }
    if (alert === "error") {
      swal({
        title: `Error en la publicación`,
        icon: "error",
      });
    }
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
      shipping: { shippingtype: e.target.value },
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

  function handleStock(e) {
    setStock(e.target.value);
  }
  async function handleOnSubmit(e) {
    e.preventDefault();
    if (data.stock.options.length < 1) {
      swal({
        title: `Aún no ha agregado ningún stock`,
        icon: "error",
      });
      return;
    }

    let arrayImg = [];
    for (let i = 0; i < images.length; i++) {
      let f = new FormData();
      f.append("image", images[i][0]);
      let result = await axios
        .post("http://localhost:5050/publicationtest/upload-image", f, {
          headers: { "content-type": "multipart/form-data" },
        })
        .catch((res) => console.log(res));
      console.log(result);
      arrayImg.push(result.data.data[0].imageURL);
    }

    dispatch(
      addPublication({
        ...data,
        pictures: [...arrayImg],
        category: subcategories?._id,
        subCategory: objects?._id,
      })
    );
    setImages([])
    setData({
      title: "",
      description: "",
      pictures: [],
      price: 0,
      currency: "",
      seller: "62bf48e53682a40660d2c540",
      category: "",
      subCategory: "",
      shipping: { shippingtype: "" },
      condition: "",
      stock: { options: [] },
      brand: "",
      location: "",
      visibility: 0,
    })
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
    
    setStockTotal(Number(stockTotal)+Number(stock))
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
    <div className={CreateDiv}>
      <h1>Publica tu Producto</h1>
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
      <Form onSubmit={(e) => handleOnSubmit(e)}>
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
            required
            className={FormImage}
          />
          <div >
            {images.length > 0 &&
              images.map((e, i) => (
                <span key={i} className={img}>
                  <span>{e[0].name}</span>
                  <button onClick={() => deleteImg(e[0].name)}>X</button>{" "}
                </span>
              ))}
          </div>
          <Form.Label>Moneda</Form.Label>
          <Form.Select
            aria-label="Default select example"
            value={data.currency}
            name="currency"
            onChange={(e) => handleOnChange(e)}
          >
            <option value="" disabled default>
              Seleccione una moneda
            </option>
            <option>ARS</option>
            <option>USD</option>
          </Form.Select>
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={data.price}
            onChange={(e) => handleOnChange(e)}
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
            {CATEGORIAS?.filter((e) => e.name !== "").map((e) => (
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

                <h2>
                  características Especiales:
                </h2>
              </div>
              {objects?.properties.map((e, i) => (
                <div key={e._id} >
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
                  <button onClick={(e) => submitStock(e)}>Agregar Stock</button>
                </div>
                  <div>
                    <h1>
                      Cantidad Total: {stockTotal}
                    </h1>
                  </div>
              </div>
              <div className={linea}></div>
            </Form>
          ) : null}

          <Form.Label>Envío</Form.Label>

          <Form.Select
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
          </Form.Select>
          <Form.Label>Condición</Form.Label>
          <Form.Select
            aria-label="Default select example"
            name="condition"
            value={data.condition}
            onChange={(e) => handleOnChange(e)}
            required>
            <option value="" disabled>Condición</option>
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
              .filter((e) => e.country_name === "Argentina")
              .map((state) => (
                <option key={state.id} value={state.name}>
                  {state.name}
                </option>
              ))}
          </Form.Select>
          <Form.Label>Visibilidad</Form.Label>
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
          </Form.Select>

          {/* <Form.Control
            name="visibility"
            value={data.visibility}
            onChange={(e) => handleOnChange(e)}
            required
          /> */}

        </Form.Group>
        
        <div className={img}>
          <div>
            <h1>
              Cantidad Total: {stockTotal}
            </h1>
          </div>
          <span>
            <button type="submit">publicar</button>
          </span>
        </div>
      </Form>
    </div>
  );
}

export default CreateProduct;
