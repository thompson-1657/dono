import React from 'react'
import {Form, Col, Row} from 'react-bootstrap'
import './style.css'


const Chat = () => (
    <Row>
        <Col md={2}>

        </Col>
    <Col md={8}>
    <div className="chat">

    <Form>
    <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Type your Message here</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  </Form>
  </div>
  </Col>
  <Col md={2}>

  </Col>
  </Row>


)

export default Chat