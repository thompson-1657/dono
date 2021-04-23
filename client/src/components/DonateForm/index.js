import React, { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'
import './style.css'
import Buttons from "../Buttons"

import API from '../../utils/API'
import { useAuth } from "../../contexts/AuthContexts"
import { useGeo } from "../../contexts/GeoContext"


const DonateForm = (props) => {

  const [formObject, setFormObject] = useState({
    title: "",
    description: "",
  })

  const { currentUser } = useAuth()
  const { placeid } = useGeo()

  function handleFormChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  function handleClick(e) {
    e.preventDefault()
    console.log(formObject.title)
    
    API.createDonation({
      title: formObject.title,
      description: formObject.description,
      firebaseId: currentUser.uid,
      email: currentUser.email,
      placeid: placeid
    })
    .then(donationData => {
      console.log(donationData)
    })
    .catch(err => console.log(err));

  }

  
  return (
    
    <Form>
      <Form.Group controlId="formGroupItem">
        <Form.Label id="formLabel">What item(s) you donating?</Form.Label>
        <Form.Control
        name="title" 
        onChange={handleFormChange} type="item" />
      </Form.Group>
      <Form.Group>
        <Form.File id="exampleFormControlFile1" label="Submit a photo of your donation" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>If you would like, describe the item(s) you are donating</Form.Label>
        <Form.Control 
        name="description" 
        onChange={handleFormChange}
        as="textarea" rows={3} />
        <Buttons
        onClick={handleClick}
        >Donate</Buttons>
      </Form.Group>
    </Form>
  )
}
export default DonateForm