const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pollSchema = new Schema({
    text: {
        type: String,
        required: 'All polls require text'
    },
    date: {
        type: Date,
        default: Date.now()
    },
    user:
    {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }

})

const Poll = mongoose.model('Poll', pollSchema)

module.exports = Poll