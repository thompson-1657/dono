import React from 'react'
import {Form, Row, Col, Container} from 'react-bootstrap'
import Jumbotron from '../Jumbotron'
import Navbar from '../Navbar'
import './style.css'
import Poll from '../Poll'
import Feed from '../Feed'
import Donate from '../Donate'

function Home() {
    return( 
   <div>    

    <h1 className="top">Dono</h1>

    <Row>
        <Col sm={3}>
        <Poll />
        </Col>
        <Col sm={6}>
        <Feed />
        </Col>
        <Col sm={3}>
        <Donate />
        </Col>
    </Row>
        
</div>
)
}

export default Home
