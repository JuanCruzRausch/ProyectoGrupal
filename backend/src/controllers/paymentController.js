const Transaction = require ('../models/Transaction');
const CommonUser = require('../models/CommonUser');
//const catchAsync = require('../utils/catchAsync');
//const AppError = require('../utils/appError');
const axios = require('axios');

const { PAYPAL_API, PAYPAL_API_CLIENT, PAYPAL_API_SECRET } = process.env;

exports.createOrder = async(req,res,next)=>{
    try {
        const {cartItem, shippingAddress} = req.body;
        const {id} = req.params
        
        let itemsPaypal = []
        for(let item of cartItem){
            let itemObj = {
                    id: item.product,
                    name: item.title,
                    description: item.title,
                    sku: item.stock.stockTotal.toString(),
                    unit_amount: {
                         currency_code: "USD",
                         value: item.price.toString()
                    },
                    tax: {
                        currency_code: "USD",
                        value: "0"
                    },
                    quantity: item.quantity.toString(),
                    category: "PHYSICAL_GOODS"
                }
            itemsPaypal.push(itemObj);        
        }
        let total_value = 0;
        for(let itemV of cartItem){
            total_value=total_value+(itemV.price*itemV.quantity)
        }
        //Orden de compra que recibe Paypal
        const order = {
            intent: 'CAPTURE',
            purchase_units:[{
                reference_id: "PUHF",
                description: "Orden de Pago MercadoEnanos",
                custom_id: "CUST-MercadoEnanos",
                soft_descriptor: "MercadoEnanos",
                amount: {
                    currency_code: "USD",
                    value: total_value.toString(),
                    breakdown: {
                        item_total: {
                            currency_code: "USD",
                            value: total_value.toString()
                        },
                        shipping: {
                            currency_code: "USD",
                            value: "0.00"
                        },
                        handling: {
                            currency_code: "USD",
                            value: "0.00"
                        },
                        tax_total: {
                            currency_code: "USD",
                            value: "0.00"
                        },
                        shipping_discount: {
                            currency_code: "USD",
                            value: "0.00"
                        }
                    }
                },
                items: itemsPaypal,
                shipping: {
                    method: "Delivery",
                    address: {
                        name: {
                            full_name: shippingAddress.fullname,
                            surname: shippingAddress.fullname
                        },
                        address_line_1: shippingAddress.address,
                        address_line_2: '-',
                        admin_area_2: shippingAddress.city,
                        admin_area_1: shippingAddress.country,
                        postal_code: shippingAddress.postalCode,
                        country_code: "AR"
                    }
                }
            }],
            application_context:{
                brand_name: 'MercadoEnanitos',
                landing_page: 'LOGIN',
                user_action: 'PAY_NOW',
                return_url: 'http://localhost:5050/payment/capture-order',
                cancel_url: 'http://localhost:5050/payment/cancel-order'
            }
        }
        
        const params = new URLSearchParams();
        params.append('grant_type', 'client_credentials');
        //Genero el access token
        const {data:{access_token}} = await axios.post('https://api-m.sandbox.paypal.com/v1/oauth2/token', params, {
            headers:{
                'Content_Type':'application/x-www-form-urlencoded'
            },
            auth:{
                username: PAYPAL_API_CLIENT,
                password: PAYPAL_API_SECRET
            }
        })

        // se manda info a paypal
        const response = await axios.post(`${PAYPAL_API}/v2/checkout/orders`, order, {
            headers:{
                Authorization: `Bearer ${access_token}`
            }
        })

        //--guardar en commonuser la orden compra
        let products = []
        cartItem.map(el=>products.push({
            publicationId: el.product,
            quantity: el.quantity
        }));

        let user = await CommonUser.findByIdAndUpdate(id,{purchase_order: {
            products: products,
            link: response.data.links[1].href
        }})
        
        res.json(response.data.links[1].href) //-- devuelvo el link de pago
    } catch (error) {
        //console.log(error);
        next(error);
    }
};

exports.captureOrder = async(req,res,next)=>{
    const {token} = req.query

    const response = await axios.post(`${PAYPAL_API}/v2/checkout/orders/${token}/capture`,{},{
        auth:{
            username: PAYPAL_API_CLIENT,
            password: PAYPAL_API_SECRET
        }
    })

    //---create de transactions

    res.json(response.data);
}
exports.cancelOrder = async(req,res,next)=>{

    res.json('hola')
}