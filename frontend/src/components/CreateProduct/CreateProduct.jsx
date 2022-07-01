import React from 'react'
import { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { CreateDiv } from './CreateProduct.module.css'
import states from '../Json/states.jsx'
function CreateProduct() {
    const categorias = useSelector((state) => state.productReducer.categories);
    const [data, setdata] = useState(
        {
            title: "",
            description: "",
            pictures: [],
            price: null,
            currency: "",
            seller: "",
            category: "",
            subCategory: "",
            shipping: { shippingtype: "" },
            condition: "",
            stock: { options: [], stocktotal:0},
            brand:"",
            location:"",
            visibility:0
        })
    const [errors, seterrors] = useState({})
    const [isSubmit, setisSubmit] = useState(false)
    
    function handleOnChange(e){
        setdata(
            {
                ...data,
                [e.target.name]: e.target.value
            }
        )
    }
    console.log(data);
    return (
        <div className={CreateDiv}>
            <h1>Publica tu Producto</h1>
            <Form>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Nombre del producto</Form.Label>
                    <Form.Control
                        name="title"
                        value={data.title}
                        onChange={(e) => handleOnChange(e)}
                        required
                    />
                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control
                        name="description"
                        value={data.description}
                        onChange={(e) => handleOnChange(e)}
                        as="textarea" rows={3}
                        required
                    />
                    <Form.Label>Imagenes</Form.Label>
                    <Form.Control
                        type="file" multiple
                        name="pictures"
                        value={data.pictures}
                        onChange={(e) => handleOnChange(e)}
                        required
                    />
                    <Form.Label>Precio</Form.Label>
                    <Form.Control
                        type="number"
                        name="price"
                        value={data.price}
                        onChange={(e) => handleOnChange(e)}
                        required
                    />
                    <Form.Label>Moneda</Form.Label>
                    <Form.Select 
                        aria-label="Default select example" 
                        value={data.currency}
                        name="currency"
                        onChange={(e)=>handleOnChange(e)}>
                        <option value='' disabled default>Seleccione una moneda</option>
                        <option>ARS</option>
                        <option>USD</option>
                    </Form.Select>
                    <Form.Label>Categoria</Form.Label>
                    <Form.Select 
                        aria-label="Default select example" 
                        value={data.category}
                        name="category"
                        onChange={(e)=>handleOnChange(e)}>
                        <option value='' disabled default>Seleccione una categoria</option>
                        {categorias.filter(e=> e.name !=="").map(e => <option key={e.id}>{e.name}</option>)}
                    </Form.Select>
                   <Form.Label>Sub-Categoria</Form.Label>
                    <Form.Control
                        name="subCategory"
                        value={data.subCategory}
                        onChange={(e) => handleOnChange(e)}
                        required
                    />
                    <Form.Label>Envío</Form.Label>
                    <Form.Control
                        name="shipping"
                        value={data.shipping}
                        onChange={(e) => handleOnChange(e)}
                        required
                    />
                    <Form.Label>Condición</Form.Label>
                    <Form.Select 
                        aria-label="Default select example"
                            name="condition"
                            value=''
                            onChange={(e) => handleOnChange(e)}
                            required>
                            <option>Condición</option>
                            <option>Nuevo</option>
                            <option>Usado</option>
                    </Form.Select>
                   <Form.Label>Stock</Form.Label>
                    <Form.Control
                        name="stock"
                        value={data.stock}
                        onChange={(e) => handleOnChange(e)}
                        required
                    />
                    <Form.Label>Marca</Form.Label>
                    <Form.Control
                        name="brand"
                        value={data.brand}
                        onChange={(e) => handleOnChange(e)}
                        required
                    />
                    <Form.Label>Ubicación</Form.Label>
                    <Form.Select aria-label="Default select example"
                         value={data.location}
                        name = "location"
                        onChange={(e) => handleOnChange(e)}>
                        <option value='' disabled default>Seleccione una provincia</option>
                        {states.filter(e => e.country_name === "Argentina").map(state => <option key={state.id} value={state.name}>{state.name}</option> )}
                    </Form.Select>
                    <Form.Label>Visibilidad</Form.Label>
                    <Form.Control
                        name="visibility"
                        value={data.visibility}
                        onChange={(e) => handleOnChange(e)}
                        required
                    />
                </Form.Group>
            </Form>
        </div>
    )
}

export default CreateProduct