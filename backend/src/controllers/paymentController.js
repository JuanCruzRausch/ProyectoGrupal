//const Transaction = require ('../models/Transaction');
//const catchAsync = require('../utils/catchAsync');
//const AppError = require('../utils/appError');
const axios = require('axios');

const { PAYPAL_API, PAYPAL_API_CLIENT, PAYPAL_API_SECRET } = process.env;

exports.createOrder = async(req,res,next)=>{
    try {
        const order = {
            intent: 'CAPTURE',
            purchase_units:[{
                reference_id: "PUHF",
                description: "Sporting Goods",

                custom_id: "CUST-HighFashions",
                soft_descriptor: "HighFashions",
                amount: {
                    currency_code: "USD",
                    value: "230.00",
                    breakdown: {
                        item_total: {
                            currency_code: "USD",
                            value: "180.00"
                        },
                        shipping: {
                            currency_code: "USD",
                            value: "30.00"
                        },
                        handling: {
                            currency_code: "USD",
                            value: "10.00"
                        },
                        tax_total: {
                            currency_code: "USD",
                            value: "20.00"
                        },
                        shipping_discount: {
                            currency_code: "USD",
                            value: "10"
                        }
                    }
                },
                items: [{
                    name: "T-Shirt",
                    description: "Green XL",
                    sku: "sku01",
                    unit_amount: {
                         currency_code: "USD",
                         value: "90.00"
                    },
                    tax: {
                        currency_code: "USD",
                        value: "10.00"
                    },
                    quantity: "1",
                    category: "PHYSICAL_GOODS"
                },
                    {
                    name: "Shoes",
                    description: "Running, Size 10.5",
                    sku: "sku02",
                    unit_amount: {
                         currency_code: "USD",
                         value: "45.00"
                    },
                    tax: {
                        currency_code: "USD",
                        value: "5.00"
                    },
                    quantity: "2",
                    category: "PHYSICAL_GOODS"
                }
                ],
                shipping: {
                    method: "United States Postal Service",
                    address: {
                        name: {
                            full_name: "John",
                            surname: "Doe"
                        },
                        address_line_1: "123 Townsend St",
                        address_line_2: "Floor 6",
                        admin_area_2: "San Francisco",
                        admin_area_1: "CA",
                        postal_code: "94107",
                        country_code: "US"
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

        const {data:{access_token}} = await axios.post('https://api-m.sandbox.paypal.com/v1/oauth2/token', params, {
            headers:{
                'Content_Type':'application/x-www-form-urlencoded'
            },
            auth:{
                username: PAYPAL_API_CLIENT,
                password: PAYPAL_API_SECRET
            }
        })
        console.log('token', access_token)
        const response = await axios.post(`${PAYPAL_API}/v2/checkout/orders`, order, {
            headers:{
                Authorization: `Bearer ${access_token}`
            }
        })
        console.log('data la ptmreeeee', response.data);
        res.json(response.data.links[1].href)
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
    res.json(response.data);
}
exports.cancelOrder = async(req,res,next)=>{
    res.json('hola')
}