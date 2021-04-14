const mongoose = require('mongoose')
const Schema = mongoose.Schema

const channelSchema = new Schema({
    text: {
        type: String,
        required: 'All channels require a title'
    },
    date: {
        type: Date,
        default: Date.now()
    },
    user:
    {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    zipCode: {
        type: Number,
        ref: 'User'
    }

})

const Channel = mongoose.model('Channel', channelSchema)

module.exports = Channel