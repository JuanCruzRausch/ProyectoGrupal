const  nodemailer  = require('./src/utils/nodemailer')
const { orderConfirmation } = require('./src/templates/orderConfirmation')


// orderConfirmation devuelva el template HTML con los siguientes datos
const template = orderConfirmation({
    id: '0238ry201t', // id de la orden de compra
    products: [{
        name: 'Enano programador',
        amount: 3,
        price: `$${300}` //precio total de los 3 enanos
    },{
        name: 'Enano masajeador',
        amount: 1,
        price: `$${500}`
    }],
    total_price: 800,
    address: {
        street: 'mucha',
        number: '292',
        province: 'Me da pena decirlo',
        postalCode: '1412'
    },
    estimated_delivery_date: `hoy` // puede agarrar el date de la transaccion y sumarle 'x' cantidad de dias
})



// sendEmail recibe los parametros Email, subject, y template
nodemailer.sendEmail('email del comprador', 'Confirmar orden de compra', template)