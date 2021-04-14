import React from 'react'
import {Card} from 'react-bootstrap'
import Buttons from "../Buttons"

import './style.css'




const DonateCard = (props) => (
  <>

  <Card className=" card text-center donateCard">
    <div className="overflow">
  <Card.Header>{props.title}</Card.Header>
  <Card.Body>
    <Card.Title></Card.Title>
    <Card.Text>
      <div>
    <img src={props.image} alt={props.name} /></div>
    <div className="cardText">{props.description}</div>
    </Card.Text>
    <Buttons >Donate</Buttons>
  </Card.Body>
  </div>
</Card>
  </>
  )

  export default DonateCard