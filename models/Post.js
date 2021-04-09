const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
    post: {
        type: String,
        required: 'All posts require text'
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

const Post = mongoose.model('Post', postSchema)

module.exports = Post