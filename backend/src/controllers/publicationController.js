const User = require("../models/User");
const Category = require("../models/Category");
const Publication = require("../models/Publication");

exports.post = async (req, res, next) => {
  try {
    const { publication } = req.body;
    const seller = await User.find({ name: publication.seller.name });
    const category = await Category.find({ name: publication.category });
    const newPublication = await Publication.create({
      title: publication.title,
      subtitle: publication.subtitle,
      descriptions: publication.descriptions,
      price: publication.price,
      currency: publication.currency,
      status: publication.status,
      tags: publication.tags,
      seller_id: seller.id,
      category_id: category.id,
      link: publication.link,
      shipping: publication.shipping,
      condition: publication.condition,
      pictures: publication.pictures,
      stock: publication.stock,
      address: publication.address,
      rating: publication.address,
    });
    res.status(201).json({
        status: 'created',
        data: newPublication
    })
  } catch (error) {
    res.json({ message: error.message });
  }
};


/*
  {
    "id": "MLA694601563",
    "title": "Matafuego 5kg Nuevo Abc Con Iram C Tarjeta + Soporte + Chapa",
    "price": 9639,
    "promoPrice": null,
    "currency": "ARS",
    "seller": {
      "id": 40727839,
      "name": "DINAMIC STORE",
      "registration_date": "2007-10-17T00:07:27.000-04:00",
      "tags": [
        "normal",
        "eshop",
        "mshops",
        "credits_profile",
        "credits_priority_4",
        "messages_as_seller"
      ],
      "image": "http://http2.mlstatic.com/eshops-logo/40727839v9b7c5b.png",
      "reputation": { "status": "platinum", "level": "5_green" },
      "metrics": {
        "cancellations": { "period": "60 days", "quantity": 23 },
        "claims": { "period": "60 days", "quantity": 73 },
        "sales": { "period": "60 days" }
      },
      "transactionsTotal": {
        "total": 53787,
        "canceled": 2778,
        "completed": 51009
      }
    },
    "stock": 1,
    "totalSold": 500,
    "buyingMode": "buy_it_now",
    "listingType": "gold_special",
    "condition": "new",
    "image": "http://http2.mlstatic.com/D_790370-MLA47131067576_082021-I.jpg",
    "mercadopago": true,
    "province": "Buenos Aires",
    "freeShipping": true,
    "category": "Accesorios para Vehículos"
  },


*/
