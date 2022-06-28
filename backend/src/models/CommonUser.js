const {Schema, model} = require("mongoose");
const validator = require("validator");

const commonUser = new Schema({

    name:{
        type: String,
        require: [true,"Please tell us your name!"],
        validate: {
            validator: val => validator.isAlpha(val, ["en-US"],{ignore: " "}),
            message: "Name must have letters only"
        },
        minlength: [2, "User name must have at least 2 letters"],
        maxlength: [40, "User name can only have 40 letters"],
    },
    lastname:{
        type: String,
        require: [true,"Please tell us your lastname!"],
        validate: {
            validator: val => validator.isAlpha(val, ["en-US"],{ignore: " "}),
            message: "Lastname must have letters only"
        },
        minlength: [2, "User lastname must have at least 2 letters"],
        maxlength: [40, "User lastname can only have 40 letters"],
    }, 
    nickname:{
        type: String,
        default: function(){
            return this.name + " " + this.lastname;
        }
    }, 
    country:{
        type: String,
    },
    email:{
        type: String,
        required:[true, "You must provide your email"],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, "Please provide a valid email"]
    },
    role:{
        type: String,
        enum:["common", "buyer"],
        default: "common"
    },
    address:{
        province: String,
        city: String,
        postalcode: Number,
        street: String,
        number: String,
        dpto:{
            floor: String,
            number: String
        },
        ref: String
    },
    phone:{
        type: String,
        validate: [validator.isMobilePhone, "Please provide your phone number"]
        
    },
    credit_card:{
        type: String,
        validate: [validator.isCreditCard, "Credit card data is invalid"]
    },
    photo:{
        type: String,
    },
    registration_date:{
        type: Date,
        default: ()=>Date.now(),
        immutable:true
    }
})

const CommonUser = model("CommonUser", commonUser)

module.exports = CommonUser;