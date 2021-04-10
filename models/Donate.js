const mongoose = require('mongoose')
const Schema = mongoose.Schema

const donateSchema = new Schema({
    donate: {
        type: String,
        required: 'All donations require text'
    },
    date: {
        type: Date,
        default: Date.now()
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
})

const Donate = mongoose.model('Donate', donateSchema)

module.exports = Donate