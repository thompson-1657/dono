import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import './style.css'
import API from '../../utils/API'


const Poll = () => {

  const [poll, setPoll] = useState([])

  
  useEffect(() => {
    loadPolls()
  }, [])

  function loadPolls() {
    API.getPolls()
      .then(res =>
        // console.log(res.data)
        setPoll(res.data)

      )
      //   .then(console.log(data))
      .catch(err => console.log(err));
  };

  function handleUpVoteClick(id) {

    // console.log(id)
    API.updatePoll(id)
      .then(res =>
        console.log(res)
      )
      .catch(err => console.log(err));
  }
  return (
    <>
      {poll.length ? (

        <div>
          <p className="poll">Poll</p>
          {poll.map(polls => {
            return (
              <div className="poll-container">

                <Form key={polls._id} className="poll">
                  <Form.Label>
                    <p>{polls.text}</p>
                    <p>
                      <img onClick={() => handleUpVoteClick(polls._id)} src="/icons/thumb-up.png" style={{ width: '30%', height: '30%' }} />{'  '} {polls.votes}</p>
                  </Form.Label>

                  {/* <Form.Check
                    id={polls.text}
                    label={polls.votes}
                  /> */}
                </Form>
              </div>
            )
          })}
        </div>
      ) : (
        <h3>No Polls to Display</h3>
      )}

    </>
  )

}
export default Poll