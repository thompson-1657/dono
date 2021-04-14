const db = require('../models')

module.exports = {
  createChannel: function(req, res) {
    db.Channel.create(req.body)
      .then(ChannelData => {
        res.json(ChannelData)
      })
      .catch(err => {
        console.log(err)
        res.status(500).send()
      })
  },
  getChannels: function(req, res) {
    db.Channel.find({})
      .then(Channels => {
        res.json(Channels)
      })
      .catch(err => {
        console.log(err)
        res.status(500).send()
      })
  },
  getChannel: function(req, res) {
    const { id } = req.params
    db.Channel.findById(id)
      .then(ChannelData => {
        res.json(ChannelData)
      })
      .catch(err => {
        console.log(err)
        res.status(500).send()
      })
  },
  updateChannel: function(req, res) {
    const { id } = req.params
    db.Channel.findByIdAndUpdate(id, req.body, { new: true })
      .then(ChannelData => {
        res.json(ChannelData)
      })
      .catch(err => {
        console.log(err)
        res.status(500).send()
      })
  },
  deleteChannel: function(req, res) {
    const { id } = req.params
    db.Channel.findByIdAndDelete(id)
      .then(ChannelData => {
        res.json(ChannelData)
      })
      .catch(err => {
        console.log(err)
        res.status(500).send()
      })
  },
}