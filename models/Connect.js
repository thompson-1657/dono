const mongoose = require('mongoose')
const Schema = mongoose.Schema

const connectSchema = new Schema({
    text: {
        type: String,
        required: 'All connects require a title'
    },
    date: {
        type: Date,
        default: Date.now()
    },
    email: String,
    user:
    {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    zipCode: {
        type: Number,
        ref: 'User'
    }

})

const Connect = mongoose.model('Connect', connectSchema)

module.exports = Connect