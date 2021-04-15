import axios from 'axios'

export default {
    getPolls: function() {
        return axios('/api/poll')
    },
    updatePoll: function(id) {
        return axios('/api/poll/' + id)
    }

}