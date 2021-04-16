import React from 'react'
import {Form} from 'react-bootstrap'
import './style.css'



const DonateForm = () => (
  <Form>
  
<Form.Group  controlId="formGroupItem">
    <Form.Label id="formLabel">What item(s) you donating?</Form.Label>
    <Form.Control type="item"  />
  </Form.Group>
  <Form.Group>
    <Form.File id="exampleFormControlFile1" label="Submit a photo of your donation" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>If you would like, describe the item(s) you are donating</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
</Form>
    )
    
      export default DonateForm