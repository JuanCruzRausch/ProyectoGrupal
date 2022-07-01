import React from 'react'
import { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { CreateDiv } from './CreateProduct.module.css'
import states from '../Json/states.jsx'
import { useEffect } from 'react'
import { getAllCategories } from '../../redux/actions'
function CreateProduct() {

    const dispatch = useDispatch()
    const CATEGORIAS = useSelector((state) => state.productReducer.Categories)
    const [stock, setstock] = useState({ options: [], stocktotal:0})
    useEffect(()=>{
        dispatch(getAllCategories())
    },[dispatch])

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
            stock,
            brand:"",
            location:"",
            visibility:0
        })
    function handleOptions(e){
        setstock(
            {
                ...stock,
                options: {...stock.options, [e.target.name]: e.target.value}
            }
        )
    }
    function handleOnChange(e){
        setdata(
            {
                ...data,
                [e.target.name]: e.target.value
            }
        )
    }
    const subcategories = CATEGORIAS?.find(e=> e.name === data.category)
    const objects = subcategories?.subcategories.find((e) => e.name === data.subCategory)
    console.log(objects);
    console.log(data);
    console.log(stock);
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
                        {CATEGORIAS?.filter(e=> e.name !=="").map(e => <option key={e.id}>{e.name}</option>)}
                    </Form.Select>
                   {
                    subcategories ?
                    <Form.Label>Sub-Categoria</Form.Label>
                    : null
                   } 
                    {
                    subcategories ? 
                    <Form.Select 
                        aria-label="Default select example" 
                        value={data.subCategory}
                        name="subCategory"
                        onChange={(e)=>handleOnChange(e)}>
                        <option value='' disabled default>Seleccione una categoria</option>
                        {subcategories?.subcategories.map(e => <option value={e.name} key={e.id}>{e.name}</option>)}
                    </Form.Select>
                    : null
                    }


                    {/*        STOCK TRABAJAR ACA          */}
                   {
                    objects ? 
                    <Form 
                        aria-label="Default select example" 
                        value={stock.options}
                        name="subCategory"
                        onChange={(e)=>handleOptions(e)}>
                        {objects?.properties.map(e =>(<div>
                            <label>{e.nameprop}</label>
                            { e.options.length >0 ?
                            <Form.Select
                            name={e.nameprop}
                            value={stock.options[e.nameprop]}
                            >{
                                e.options.map(e =><option >{e}</option>) 
                            }
                            </Form.Select> 
                             :
                             <input name={e.nameprop}/>}
                        </div>))}
                        <Form.Label>Stock</Form.Label>
                    <Form.Control
                        name="stocktotal"
                        type="number"
                        value={stock.stocktotal}
                        onChange={(e) => handleOptions(e)}
                        required
                    />
                        <button>Guardar Stock</button>
                    </Form>
                    : null
                   } 



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
                            value={data.condition}
                            onChange={(e) => handleOnChange(e)}
                            required>
                            <option value='' disabled>Condición</option>
                            <option value='new'>Nuevo</option>
                            <option value="used">Usado</option>
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