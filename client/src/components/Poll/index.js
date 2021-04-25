import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import API from '../../utils/API'
import Buttons from "../Buttons"
import { useAuth } from "../../contexts/AuthContexts"
import { BsCheck } from 'react-icons/bs'
import { BsTrashFill } from 'react-icons/bs'
import { useGeo } from "../../contexts/GeoContext"
import './style.css'


const Poll = () => {

  const [poll_, setPoll] = useState([])
  const { currentUser } = useAuth()
  // console.log(currentUser)
  const [formObject, setFormObject] = useState({})
  const { placeid } = useGeo()

  useEffect(() => {
    loadPolls()
  }, [poll_])

  function loadPolls() {
    API.getPolls()
      .then(res =>
        setPoll(res.data)

      )
      .catch(err => console.log(err));
  };

  function handleUpVoteClick(id, votes) {
    API.updatePoll(id, votes)
      .then(res => {

        loadPolls()
      }
      )
      .catch(err => console.log(err));
  }

  function handleFormChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  };

  function handlePollFormSubmit(event) {
    event.preventDefault()
    if (formObject.text) {
      API.createPoll({
        text: formObject.text,
        firebaseId: currentUser.uid,
        placeid: placeid
      })
        .then(res => loadPolls())
        .catch(err => console.log(err));
    }
  }

  const handleDeletePollClick = (id) => {
    API.deletePoll(id)
      .then(res => {
        console.log(res)
      })
  }
  return (
    <>
      {poll_.length ? (

        <div>
          <p className="poll title card-title">Poll</p>
          {poll_.map(polls => {
            return (
              <div>
                {polls.placeid === placeid &&
                  <div className="poll-container">

                    <Form key={polls._id} className="poll">
                      <Form.Label>
                        <p>{polls.text}</p>
                        <p>
                          <BsCheck className="check" onClick={() => handleUpVoteClick(polls._id, polls.votes)} src="/icons/thumb-up.png" style={{ width: '30%', height: '30%' }} /> {polls.votes}</p>
                        {polls.firebaseId === currentUser.uid &&
                          <BsTrashFill name="id"
                            onClick={() => handleDeletePollClick(polls._id)}
                            style={{ width: "20px", height: "20px", marginTop: "5px", marginRight: "10px" }} />}
                      </Form.Label>
                    </Form>
                    </div>
          }</div>
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