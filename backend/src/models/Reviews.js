const {Schema, model} = require('mongoose');

const reviewSchema = new Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref: 'CommonUser'
    },
    pub_id:{
        type: Schema.Types.ObjectId,
        ref: 'PublicationTest'
    },
    seller_id:{
        type: Schema.Types.ObjectId,
        ref: 'Seller'
    },
    review:{
        type: String
    }
});

const Reviews  = model('Reviews', reviewSchema);

module.exports = Reviews;

