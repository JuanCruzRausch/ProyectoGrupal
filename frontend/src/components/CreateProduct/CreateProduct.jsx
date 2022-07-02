import React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { CreateDiv, logo } from "./CreateProduct.module.css";
import states from "../Json/states.jsx";
import { useEffect } from "react";
import { getAllCategories } from "../../redux/actions";
import axios from "axios";
import { addPublication } from '../../redux/actions/index'
function CreateProduct() {
  const CATEGORIAS = useSelector((state) => state.productReducer.Categories);
  const dispatch = useDispatch();
  const [stock, setStock] = useState(0);
  const [combination, setCombination] = useState({});
  const [images, setImages] = useState([]);
  const [uploadedImg, setUploaded] = useState([]);
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
    dispatch(getAllCategories());
  }, [dispatch]);

  const deleteImg = (i) =>{
    setImages([...images.filter((e)=> e[0].name!== i)])
  }
  const handleOnChangeImages =  (file) => {
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
    e.preventDefault()
    // f.append("image", images[0][0])
    let arrayImg = []
    for(let i = 0; i <images.length; i ++){
      let f = new FormData();
      f.append("image", images[i][0]);
      let result = await axios
        .post("http://localhost:5050/publicationtest/upload-image", f, {
          headers: { "content-type": "multipart/form-data" },
        })
        .catch((res) => console.log(res));
        console.log(result)
      arrayImg.push(result.data.data[0].imageURL)
    }
  
    console.log(data)
    dispatch( addPublication( {
      ...data, 
      pictures: [...arrayImg],
      category: subcategories?._id,
      subCategory: objects?._id
    }))

  }
  function submitStock(e) {
    e.preventDefault();
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
    setStock(0);
    setCombination({});
  }

  return (
    <div className={CreateDiv}>
      <h1>Publica tu Producto</h1>
      {images.length>0&&images.map(e=> <span ><span>{e[0].name}</span><button onClick={()=>deleteImg(e[0].name)}>X</button> </span>)}
      <Form onSubmit={(e)=> handleOnSubmit(e)}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Nombre del producto</Form.Label>
          <Form.Control
            accept = "image/jpg, image/png, image/jpeg"
            name="title"
            value={data.title}
            onChange={(e) => handleOnChange(e)}
            // required
          />
          <Form.Label>Descripcion</Form.Label>
          <Form.Control
            name="description"
            value={data.description}
            onChange={(e) => handleOnChange(e)}
            as="textarea"
            rows={3}
            // required
          />
          <Form.Label>Imagenes</Form.Label>
          <Form.Control
            type="file"
            multiple
            name="image"
            onChange={(e) => handleOnChangeImages(e.target.files)}
            // required
          />
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={data.price}
            onChange={(e) => handleOnChange(e)}
            // required
          />
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
              {objects?.properties.map((e, i) => (
                <div key={e._id}>
                  <label>{e.nameprop}</label>
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
                    <input
                      onChange={(e) => handleCombinations(e, i)}
                      name={e.nameprop}
                      value={combination[i]?.value}
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
                // required
              />
              <button onClick={(e) => submitStock(e)}>Guardar Stock</button>
            </Form>
          ) : null}

          <Form.Label>Envío</Form.Label>
          <Form.Control
            name="shippingtype"
            value={data.shipping.shippingtype}
            onChange={(e) => handleShipping(e)}
            // required
          />
          <Form.Label>Condición</Form.Label>
          <Form.Select
            aria-label="Default select example"
            name="condition"
            value={data.condition}
            onChange={(e) => handleOnChange(e)}
            // required
          >
            <option value="" disabled>
              Condición
            </option>
            <option value="new">Nuevo</option>
            <option value="used">Usado</option>
          </Form.Select>
          {/* <Form.Label>Stock</Form.Label>
          <Form.Control
            name="stock"
            value={data.stock}
            onChange={(e) => handleOnChange(e)}
            required
          /> */}
          <Form.Label>Marca</Form.Label>
          <Form.Control
            name="brand"
            value={data.brand}
            onChange={(e) => handleOnChange(e)}
            // required
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
          <Form.Control
            name="visibility"
            value={data.visibility}
            onChange={(e) => handleOnChange(e)}
            // required
          />
        </Form.Group>
        <button type="submit">submit</button>
      </Form>
    </div>
  );
}

export default CreateProduct;
