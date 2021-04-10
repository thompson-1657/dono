const mongoose = require('mongoose')
const Schema = mongoose.Schema

const donateSchema = new Schema({
    text: {
        type: String,
        required: 'All donations require text'
    },
    typeOfDonation: {
        type: String,
        required: 'All donations require a selection between parishable or utility'
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