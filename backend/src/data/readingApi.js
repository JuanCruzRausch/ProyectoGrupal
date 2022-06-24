const fs = require('fs');
const axios = require('axios');

const getData = async (cant) => {
  try {
    console.log('Starting the task...');
    const dataApiCat = await axios.get(
      'https://api.mercadolibre.com/sites/MLA/categories'
    );

    let prodArr = [];

    for (let j = 0; j <= dataApiCat.data.length - 1; j++) {
      let dataApi = await axios.get(
        `https://api.mercadolibre.com/sites/MLA/search?category=${dataApiCat.data[j].id}`
      );

      for (let i = 0; i < cant; i++) {
        let p = dataApi.data.results[i];
        let product;
        if (p?.seller.eshop?.nick_name) {
          product = {
            id: p?.id,
            title: p?.title,
            price: p?.price,
            promoPrice: p?.sale_price,
            currency: p?.currency_id,
            seller: {
              id: p?.seller.id,
              name: p?.seller.eshop?.nick_name,
              registration_date: p?.seller.registration_date,
              tags: p?.seller.tags,
              image: p?.seller.eshop?.eshop_logo_url,
              reputation: {
                status: p?.seller.seller_reputation.power_seller_status,
                level: p?.seller.seller_reputation.level_id,
              },
              metrics: {
                cancellations: {
                  period:
                    p?.seller.seller_reputation.metrics.cancellations.period,
                  quantity:
                    p?.seller.seller_reputation.metrics.cancellations.value,
                },
                claims: {
                  period: p?.seller.seller_reputation.metrics.claims.period,
                  quantity: p?.seller.seller_reputation.metrics.claims.value,
                },
                sales: {
                  period: p?.seller.seller_reputation.metrics.sales.period,
                  quantity: p?.seller.seller_reputation.metrics.sales.value,
                },
              },
              transactionsTotal: {
                total: p?.seller.seller_reputation.transactions.total,
                canceled: p?.seller.seller_reputation.transactions.canceled,
                completed: p?.seller.seller_reputation.transactions.completed,
              },
            },
            stock: p?.available_quantity,
            totalSold: p?.sold_quantity,
            buyingMode: p?.buying_mode,
            listingType: p?.listing_type_id,
            condition: p?.condition,
            image: p?.thumbnail,
            mercadopago: p?.accepts_mercadopago,
            province: p?.address.state_name,
            freeShipping: p?.shipping.free_shipping,
            category: dataApiCat.data[j].name,
          };
        } else {
          product = {
            id: p?.id,
            title: p?.title,
            price: p?.price,
            promoPrice: p?.sale_price,
            currency: p?.currency_id,
            seller: {
              id: p?.seller.id,
              name: null,
              registration_date: p?.seller.registration_date,
              tags: p?.seller.tags,
              image: null,
              reputation: {
                status: p?.seller.seller_reputation.power_seller_status,
                level: p?.seller.seller_reputation.level_id,
              },
              metrics: {
                cancellations: {
                  period:
                    p?.seller.seller_reputation.metrics.cancellations.period,
                  quantity:
                    p?.seller.seller_reputation.metrics.cancellations.value,
                },
                claims: {
                  period: p?.seller.seller_reputation.metrics.claims.period,
                  quantity: p?.seller.seller_reputation.metrics.claims.value,
                },
                sales: {
                  period: p?.seller.seller_reputation.metrics.sales.period,
                  quantity: p?.seller.seller_reputation.metrics.sales.value,
                },
              },
              transactionsTotal: {
                total: p?.seller.seller_reputation.transactions.total,
                canceled: p?.seller.seller_reputation.transactions.canceled,
                completed: p?.seller.seller_reputation.transactions.completed,
              },
            },
            stock: p?.available_quantity,
            totalSold: p?.sold_quantity,
            buyingMode: p?.buying_mode,
            listingType: p?.listing_type_id,
            condition: p?.condition,
            image: p?.thumbnail,
            mercadopago: p?.accepts_mercadopago,
            province: p?.address.state_name,
            freeShipping: p?.shipping.free_shipping,
            category: dataApiCat.data[j].name,
          };
        }
        prodArr.push(product);
      }
      if (j === 15) {
        console.log('Task half done...');
      } else if (j === 25) {
        console.log('Task almost done...');
      }
    }
    fs.writeFile('./data.json', JSON.stringify(prodArr), (err) => {
      if (err) console.log(err);
      else {
        console.log('File written successfully');
      }
    });
  } catch (e) {
    console.log(e);
  }
};

getData(20);
