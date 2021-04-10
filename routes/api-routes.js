const router = require('express').Router()
const postController = require('../controllers/postController')
const userController = require('../controllers/userController')
const donateController = require('../controllers/donateController')
const pollController = require('../controllers/pollController')

router.route('/api/post/:id')
    .get(postController.getPost)
    .put(postController.updatePost)
    .delete(postController.deletePost)

router.route('/api/donate/:id')
    .get(donateController.getDonation)
    .put(donateController.updateDonation)
    .delete(donateController.deleteDonation)

router.route('/api/poll/:id')
    .get(pollController.getPoll)
    .put(pollController.updatePoll)
    .delete(pollController.deletePoll)

router.route('/api/post')
    .get(postController.getPosts)
    .post(postController.createPost)

router.route('/api/donate')
    .get(donateController.getDonations)
    .post(donateController.createDonation)

router.route('/api/poll')
    .get(pollController.getPolls)
    .post(pollController.createPolls)

router.route('/api/users/:id')
    .get(userController.getUser)
    .put(userController.updateUser)

module.exports = router