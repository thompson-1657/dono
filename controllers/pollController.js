const db = require('../models')

module.exports = {
  createPoll: function(req, res) {
    db.Poll.create(req.body)
      .then(PollData => {
        res.json(PollData)
      })
      .catch(err => {
        console.log(err)
        res.status(500).send()
      })
  },
  getPolls: function(req, res) {
    db.Poll.find({})
      .then(Polls => {
        res.json(Polls)
      })
      .catch(err => {
        console.log(err)
        res.status(500).send()
      })
  },
  getPoll: function(req, res) {
    const { id } = req.params
    db.Poll.findById(id)
      .then(PollData => {
        res.json(PollData)
      })
      .catch(err => {
        console.log(err)
        res.status(500).send()
      })
  },
  updatePoll: function(req, res) {
    const { id } = req.params
    db.Poll.findByIdAndUpdate(id, req.body, { new: true })
      .then(PollData => {
        res.json(PollData)
      })
      .catch(err => {
        console.log(err)
        res.status(500).send()
      })
  },
  deletePoll: function(req, res) {
    const { id } = req.params
    db.Poll.findByIdAndDelete(id)
      .then(PollData => {
        res.json(PollData)
      })
      .catch(err => {
        console.log(err)
        res.status(500).send()
      })
  },
}