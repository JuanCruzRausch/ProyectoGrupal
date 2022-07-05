const {Schema, model} = require('mongoose');

const newStrike = new Schema({
    seller: {
        type: Schema.Types.ObjectId,
        ref:'CommonUser',
    },
    reason: String,
})

const Strike = model('Strike',newStrike);

module.exports = Strike;