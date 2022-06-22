const fs = require("fs");
const axios = require("axios");

const getData = async (cant) => {
  try {
    console.log("Starting the task...");
    const dataApiCat = await axios.get(
      "https://api.mercadolibre.com/sites/MLA/categories"
    );

    let prodArr = [];

    for (let j = 0; j <= dataApiCat.data.length - 1; j++) {
      let dataApi = await axios.get(
        `https://api.mercadolibre.com/sites/MLA/search?category=${dataApiCat.data[j].id}`
      );

      for (let i = 0; i < cant; i++) {
        let p = dataApi.data.results[i];
        let product = {
          name: p?.title,
          price: p?.price,
          promoPrice: p?.sale_price,
          currency: p?.currency_id,
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
        prodArr.push(product);
      }
      if (j === 15) {
        console.log("Task half done...");
      } else if (j === 25) {
        console.log("Task almost done...");
      }
    }
    fs.writeFile("./data.json", JSON.stringify(prodArr), (err) => {
      if (err) console.log(err);
      else {
        console.log("File written successfully");
      }
    });
  } catch (e) {
    console.log(e);
  }
};

getData(1);
