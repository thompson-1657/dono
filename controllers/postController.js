const db = require('../models')

module.exports = {
  createPost: function(req, res) {
    db.Post.create(req.body)
      .then(postData => {
        res.json(postData)
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
    console.log(req.body.chats)
    const { id } = req.params
    const chats = req.body.chats
    console.log(id, chats)
    db.Post.findByIdAndUpdate({_id: id} , {$push: {chats:chats}})
      .then(PostData => {
        // console.log("hi")
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