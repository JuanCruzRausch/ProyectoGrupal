const User = require("../models/User");
const Category = require("../models/Category");
const axios = require("axios");

exports.signup = async (req, res, next) => {
  try {
    console.log(req.body);
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      photo: req.body.photo,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
      adress: req.body.adress,
    });

    res.status(201).json({
      status: "success",
      data: {
        user: newUser,
      },
    });
  } catch (e) {
    console.log(e);
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
  next();
};

exports.getCategories = async (req, res, next) => {
  try{
    const categoriesApi = await axios.get('https://api.mercadolibre.com/sites/MLA/categories');
    let categoriesArr= categoriesApi.data?.map(c=>c.name);
    for(let i=0;i<categoriesArr.length; i++){
      let found = await Category.findOne({name:categoriesArr[i]});
      if(!found){
        await Category.create({name: categoriesArr[i]});
      }
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