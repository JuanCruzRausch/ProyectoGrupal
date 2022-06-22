const fs = require("fs");
const axios = require("axios");

const getCategories = async ()=>{
    const categoriesApi = await axios.get('https://api.mercadolibre.com/sites/MLA/categories');
    let categoriesArr= categoriesApi.data?.map(c=>c.name);
    console.log('cate', categoriesArr)
    fs.writeFile("./categories.json",JSON.stringify(categoriesArr),(err) => {
        if (err) console.log(err);
        else {
          console.log("File written successfully");
        }
    });
}

getCategories();