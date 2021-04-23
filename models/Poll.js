const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pollSchema = new Schema({
    text: {
        type: String,
        required: 'All polls require text'
    },
    votes: {
        type: Number,
        default: 0
    },
    date: {
        type: Date,
        default: Date.now()
    },
    firebaseId: {
        type: String
    },
    user:
    {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    placeid: {
        type: String
        // ref: 'User'
    }

})

const Poll = mongoose.model('Poll', pollSchema)

module.exports = Poll