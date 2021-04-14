const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        //add regex expression to validate email
        type: String,
        required: 'A username is required'
    },
    password: {
        type: String,
        required: 'A password is required'
    },
    zipCode: {
        type: Number,
        required: 'A zip code is required'
    },
    // firebaseId: {
    //     type: String,
    //     required: 'Every userneeds a firebase ID'
    // },
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Post'
        }
    ],
    donations: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Donate'
        }
    ],
    polls: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Poll'
        }
    ],
    channels: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Channel'
        }
    ]
})

const User = mongoose.model('User', userSchema)

module.exports = User