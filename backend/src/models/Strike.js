const {Schema, model} = require('mongoose');

const newStrike = new Schema({
    seller: {
        type: Schema.Types.ObjectId,
        ref:'Seller',
    },
    reason: String,
})

const Strike = model('Strike',newStrike);

module.exports = Strike;