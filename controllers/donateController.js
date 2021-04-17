const db = require('../models')

module.exports = {
  createDonation: function(req, res) {
    console.log("hi")
    db.Donate.create(req.body)
      .then(donationData => {
        res.json(donationData)
      })
      .catch(err => {
        console.log(err)
        res.status(500).send()
      })
  },
  getDonations: function(req, res) {
    db.Donate.find({})
      .then(Donations => {
        res.json(Donations)
      })
      .catch(err => {
        console.log(err)
        res.status(500).send()
      })
  },
  getDonation: function(req, res) {
    const { id } = req.params
    db.Donate.findById(id)
      .then(DonateData => {
        res.json(DonateData)
      })
      .catch(err => {
        console.log(err)
        res.status(500).send()
      })
  },
  updateDonation: function(req, res) {
    console.log(req.body.chats)
    const { id } = req.params
    const chats = req.body.chats
    console.log(id, chats)
    db.Donation.findByIdAndUpdate({_id: id} , {$push: {chats:chats}})
      .then(donationData => {
        // console.log("hi")
        res.json(donationData)
      })
      .catch(err => {
        console.log(err)
        res.status(500).send()
      })
  },
  deleteDonation: function(req, res) {
    const { id } = req.params
    db.Donate.findByIdAndDelete(id)
      .then(DonateData => {
        res.json(DonateData)
      })
      .catch(err => {
        console.log(err)
        res.status(500).send()
      })
  },
}