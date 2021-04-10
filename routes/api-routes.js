const router = require('express').Router()
const postController = require('../controllers/postController')
const userController = require('../controllers/userController')
const donateController = require('../controllers/donateControllers')

router.route('/api/post/:id')
    .get(drawingController.getPost)
    .put(drawingController.updatePost)
    .delete(drawingController.deletePost)

router.route('/api/donate/:id')
    .get(drawingController.getDonation)
    .put(drawingController.updateDonation)
    .delete(drawingController.deleteDonation)

router.route('/api/post')
    .get(drawingController.getPosts)
    .post(drawingController.createPost)

router.route('/api/donate')
    .get(drawingController.getDonations)
    .post(drawingController.createDonation)

router.route('/api/users/:id')
  .get(userController.getUser)
  .put(userController.updateUser)

module.exports = router