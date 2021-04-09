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
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Post'
        }
    ]
})

const User = mongoose.model('User', userSchema)

module.exports = User