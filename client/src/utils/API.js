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
      }
}