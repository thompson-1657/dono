import React from 'react'
import {Card} from 'react-bootstrap'
import DonateForm from '../DonateForm'
import DonateIcon from '../DonateIcon'

import './style.css'




const DonateCard = (props) => {


return (
  <>

  <Card className=" card text-center donateCard">
    <div className="overflow">
  <Card.Header id="cardHeader">{props.title}</Card.Header>
  <Card.Body id="cardBody">
    <Card.Title></Card.Title>
    <Card.Text>
      <div className="corners">
    <img src={props.image} alt={props.name} /></div>
    <div className="cardText">{props.description}</div>
    </Card.Text>
    <DonateIcon />
    <DonateForm />
    {/* <Buttons 
    >Donate</Buttons> */}
  </Card.Body>
  </div>
 
</Card>
  </>
  )
}
  export default DonateCard