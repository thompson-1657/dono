const db = require('../models')

module.exports = {
  getUser: function(req, res) {
    const { id } = req.params
    db.User.findById(id)
      .then(userData => {
        res.json(userData)
      })
      .catch(err => {
        console.log(err)
        res.status(500).send()
      })
  },
  updateUser: function(req, res) {
    const { id } = req.params
    db.User.findByIdAndUpdate(id, req.body, { new: true })
      .then(userData => {
        res.json(userData)
      })
      .catch(err => {
        console.log(err)
        res.status(500).send()
      })
  },
  createUser: function(req, res) {
    console.log(req.body)
    db.User.create(req.body)
      .then(userData => {
        res.json(userData)
      })
      .catch(err => {
        console.log(err)
        res.status(500).send()
      })
  },
}