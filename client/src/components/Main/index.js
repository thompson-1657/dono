import React from 'react'
import { Row, Col} from 'react-bootstrap'
// import Jumbotron from '../Jumbotron'
// import Navbar from '../Navbar'
import './style.css'
import Poll from '../Poll'
import Feed from '../Feed'
import DonateFeed from '../DonateFeed'
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
        <div className="feed-container">
        
        <DonateFeed />

        </div>
        </Col>
        <Col sm={3}>
        <div className="donate-container"> 
        <Feed />  
        </div> 
        <div className="connect-container">
        </div>
        <Post />
        </Col>
    </Row>
        
</div>
</>
)
}

export default Main
