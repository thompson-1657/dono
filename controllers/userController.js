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
    const { email } = req.params
    const { firebaseId } = req.params
    //if firebaseId is null
    //Add a firebase ID
    db.User.findByIdAndUpdate(id, firebaseId, { new: true })
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