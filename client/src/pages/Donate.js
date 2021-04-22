import React, {Component} from 'react'

import DonateCard from '../components/DonateCard'
import {Col, Row} from 'react-bootstrap'
import donateCardData from '../donateCardData'
import Navbar from '../components/Navbar' 


class Donate extends Component {
  state = {
    donateCardData
  }
  render(){
    return(
<>
<Navbar />
      <Row>
        <Col></Col>
      </Row>
      <Row>
        <Col>
      
<div className=" container donateContainer">
  <div className="row">
  {this.state.donateCardData.map(donate =>{
    return(
      <div className="col-md-6">
         <DonateCard 
    title={donate.title}
    image={donate.image}
    description={donate.description}
    />
      </div>
    )
  })}
      
   
  </div>
</div>
  </Col>
  </Row>
  <Row>
    <Col></Col>
  </Row>









</>
    )
  }
}  
            
   
  

  export default Donate

 