const Category = require("../models/Category");
const axios = require('axios')

exports.getCategories = async (req, res, next) => {
    try{
      const categoriesApi = await axios.get('https://api.mercadolibre.com/sites/MLA/categories');
      let categoriesArr= categoriesApi.data?.map(c=>c.name);
      for(let i=0;i<categoriesArr.length; i++){
        await Category.create({name: categoriesArr[i]});
      }
      res.status(201).json({
        status: "success",
        data: {
          categories: categoriesArr,
        },
      });
    }catch(e){
      console.log(e);
      res.status(400).json({
        status: "fail",
        message: e,
      });
    }
    next();
  }