const mongoose = require('mongoose')
const Schema = mongoose.Schema

const donateSchema = new Schema({
    title: {
        type: String,
        required: 'All donations require text'
    },
    description: {
        type: String,
    },
    typeOfDonation: {
        type: String,
    },
    chats: [
        {
            type: String
        }
    ],
    date: {
        type: Date,
        default: Date.now()
    },
    email: String,
    firebaseId: {
        type: String
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    placeid: {
        type: String
        // ref: 'User'
    }
})

const Donate = mongoose.model('Donate', donateSchema)

module.exports = Donate