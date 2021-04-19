import axios from 'axios'

export default {
    getPolls: function() {
        return axios('/api/poll')
    },
    updatePoll: function(id) {
        return axios.put('/api/poll/' + id)
    },

    createPoll: function(pollData) {
        return axios.post("/api/poll", pollData);
    },
    getPosts: function() {
        return axios('/api/post')
    },
    updatePost: function(id, chats) {
        return axios.put('/api/post/' + id, chats)
    },
    createDonation: function(donationData) {
        return axios.post("/api/donate", donationData)
    },
    getDonations: function() {
        return axios('/api/donate')
    },
    updateDonation: function(id, chats) {
        return axios.put('/api/donate/' + id, chats)
    },
    createPost: function(postData) {
        return axios.post("/api/post", postData);
    },
    deletePost: function(id){
        return axios.delete('/api/post/' + id)
    },
    deleteDonation: function(id){
        return axios.delete('/api/donate/' + id)
    }
}