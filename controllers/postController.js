const db = require('../models')

module.exports = {
  createPost: function(req, res) {
    db.Post.create(req.body)
      .then(PostData => {
        res.json(PostData)
      })
      .catch(err => {
        console.log(err)
        res.status(500).send()
      })
  },
  getPosts: function(req, res) {
    db.Post.find({})
      .then(Posts => {
        res.json(Posts)
      })
      .catch(err => {
        console.log(err)
        res.status(500).send()
      })
  },
  getPost: function(req, res) {
    const { id } = req.params
    db.Post.findById(id)
      .then(PostData => {
        res.json(PostData)
      })
      .catch(err => {
        console.log(err)
        res.status(500).send()
      })
  },
  updatePost: function(req, res) {
    const { id } = req.params
    db.Post.findByIdAndUpdate(id, req.body, { new: true })
      .then(PostData => {
        res.json(PostData)
      })
      .catch(err => {
        console.log(err)
        res.status(500).send()
      })
  },
  deletePost: function(req, res) {
    const { id } = req.params
    db.Post.findByIdAndDelete(id)
      .then(PostData => {
        res.json(PostData)
      })
      .catch(err => {
        console.log(err)
        res.status(500).send()
      })
  },
}