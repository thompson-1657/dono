import React, { useEffect, useState } from 'react'
import {Form, Col, Row, Button} from 'react-bootstrap'
import './style.css'
import API from '../../utils/API'

const Chat = (props) => {
  const [formObject, setFormObject] = useState({})

  const handleSubmitClickPost = (id, chats) => {
    // event.preventDefault()
    // const id = props.postId
    console.log(chats)
    
    
    API.updatePost(id, chats)
    .then(res => {
      console.log(id, chats)
    })
    .catch(err => console.log(err));
  }

  const handleFormChange = (event) => {
    event.preventDefault()
    console.log(event.target.value)
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  }

  const handleSubmitClickDonate = (id, chats) => {
    // event.preventDefault()
    // const id = props.postId
    console.log(id)
    
    API.updateDonation(id, chats)
    .then(res => {
      console.log(id, chats)
    })
    .catch(err => console.log(err));
  }



return (
  
    <Row>
        <Col md={2}>

        </Col>
    <Col md={8}>
    <div className="chat">

    <Form>
    <Form.Group controlId="form-control">
    <Form.Label>Type your Message here</Form.Label>
    <Form.Control 
    name="chats"
    as="textarea" 
    rows={3} 
    onChange={handleFormChange}
    {...props}    
    />
    <Button  as="input" 
    type="button" 
    value="Add to Chat"
    onClick={ props.postId ? () => handleSubmitClickPost(props.postId, formObject) : () => handleSubmitClickDonate(props.donationId, formObject)}
     />{' '}

  </Form.Group>
  </Form>
  </div>
  </Col>
  <Col md={2}>
  </Col>
  
  </Row>


)
}
export default Chat