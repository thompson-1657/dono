import React, {Component} from 'react'

import DonateCard from '../components/DonateCard'
// import {Col, Container, Row} from 'react-bootstrap'
import donateCardData from '../donateCardData' 


class Donate extends Component {
  state = {
    donateCardData
  }
  render(){
    return(
<>

<div className="container">
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









</>
    )
  }
}  
            
   
  

  export default Donate

 