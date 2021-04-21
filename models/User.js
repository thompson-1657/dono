const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        //add regex expression to validate email
        type: String,
        required: 'An email is required'
    },
    zipCode: {
        type: Number,
    },
    firebaseId: {
        type: String,
    },
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
    // channels: [
    //     {
    //         type: Schema.Types.ObjectId,
    //         ref: 'Channel'
    //     }
    // ]
})

const User = mongoose.model('User', userSchema)

module.exports = User