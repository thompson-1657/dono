import React, { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'

import './style.css'
import API from '../../utils/API'
import Buttons from "../Buttons"


const Poll = () => {

  const [poll, setPoll] = useState([])

  const [formObject, setFormObject] = useState({})

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

  function handleUpVoteClick(id, votes) {
    // console.log(id)
    API.updatePoll(id, votes)
      .then(res => {
      
        loadPolls()
      }
      )
      .catch(err => console.log(err));
  }

  function handleFormChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  function handlePollFormSubmit(event) {
    event.preventDefault()
    // console.log(formObject)
    if (formObject.text) {
      API.createPoll({
        text: formObject.text
      })
      .then(res => loadPolls())
        .catch(err => console.log(err));
    }
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
                      <img onClick={() => handleUpVoteClick(polls._id, polls.votes)} src="/icons/thumb-up.png" style={{ width: '30%', height: '30%' }} />{'  '} {polls.votes}</p>
                  </Form.Label>
                </Form>
              </div>
            )
          })}
        </div>
      ) : (
        <h3>No Polls to Display</h3>
      )}
      <div>
        Add a poll idea!
      </div>
      <Form className="poll-in">
        <Form.Group>
          <Form.Control name="text" 
          onChange={handleFormChange} 
          size="lg" type="text" placeholder="Food, supplies, etc." />
        </Form.Group>
        <Buttons 
        onClick={handlePollFormSubmit} 
        variant="primary" type="submit"
        
        >
          Submit
        </Buttons>

      </Form>
    </>
  )

}
export default Poll