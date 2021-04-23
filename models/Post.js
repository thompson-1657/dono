const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
    text: {
        type: String,
        required: 'All posts require text'
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

const Post = mongoose.model('Post', postSchema)

module.exports = Post