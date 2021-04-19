import React from 'react'
import { Row, Col} from 'react-bootstrap'
// import Jumbotron from '../Jumbotron'
// import Navbar from '../Navbar'
import './style.css'
import Poll from '../Poll'
import Feed from '../Feed'
import Donate from '../Donate'
import Connect from '../Connect'
// import Menu from '../Menu'
import Navbar from '../Navbar'
import Post from '../Post'

function Main() {
    return( 
    <>
    <Navbar />

    <div className="home">    

    <Row className="head">
    

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
        <Post />
        </Col>
    </Row>
        
</div>
</>
)
}

export default Main
