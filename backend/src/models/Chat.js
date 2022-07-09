const { Schema, model } = require('mongoose');

const chatSchema = new Schema({
    message: Schema.Types.Array[{
        id_sender: {
            type: Schema.Types.ObjectId,
            ref: 'CommonUser'
        },
        id_transmitter: {
            type: Schema.Types.ObjectId,
            ref: 'CommonUser',
        },
        content: Schema.Types.String,
        date_created: {
            type: Date,
            immutable: true,
            default: () => Date.now(),
        },
        state: Schema.Types.String

    }],
    talkative_one_id: {
        type: Schema.Types.ObjectId,
        immutable: true,
        ref: 'CommonUser'
    },
    talkative_two_id: {
        type: Schema.Types.ObjectId,
        immutable: true,
        ref: 'CommonUser'
    },
    date_created: {
        type: Date,
        immutable: true,
        default: () => Date.now(),
    },
});

const Chat = model('Chat', chatSchema);

module.exports = Chat