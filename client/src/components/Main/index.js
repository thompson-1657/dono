import React from 'react'
import {Form, Row, Col, Container} from 'react-bootstrap'
import Jumbotron from '../Jumbotron'
import Navbar from '../Navbar'
import './style.css'
import Poll from '../Poll'
import Feed from '../Feed'
import Donate from '../Donate'
import Connect from '../Connect'
import Menu from '../Menu'

function Home() {
    return( 
    <>
    <div className="main">    

    <Row className="head">
    <Menu />

    </Row>

    <Row>
        <Col sm={3}>
        <Poll />
        </Col>
        <Col sm={6}>
        <Feed />
        </Col>
        <Col sm={3}>
        <Donate />
        <Connect />
        </Col>
    </Row>
        
</div>
</>
)
}

export default Home
