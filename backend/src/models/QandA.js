const {Schema, model} = require('mongoose');

const qandaSchema = new Schema({
    publication_id:{
        type: Schema.Types.ObjectId,
        immutable: true,
        ref:'PublicationTest'
    },
    seller_id:{
        type: Schema.Types.ObjectId,
        immutable: true,
        ref:'Seller'
    },
    buyer_id:{
        type: Schema.Types.ObjectId,
        immutable: true,
        ref:'CommonUser'
    },
    question:{
        type: String,
        required:[true,'Please, ask your question'],
        minlength:[5,'The question must have a minimun of 5 characters'],
        maxlength:[250,'The question can only have a max of 250 characters']
    },
    answer:{
        type: String,
        minlength:[5,'The answer must have a minimun of 5 characters'],
        maxlength:[250,'The answer can only have a max of 250 characters']
    },
});

const QandA = model('QandA',qandaSchema);

module.exports = QandA;