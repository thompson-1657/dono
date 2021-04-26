import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './style.css'
import Poll from '../Poll'
import DonateFeed from '../DonateFeed'
import Navbar from '../Navbar'
import PostFeed from '../PostFeed'
import Post from '../Post'

function Main() {
    return (
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
                            
                            </div>
                            <div className="connect-container">
                            </div>
                            <PostFeed />
                            <Post/>
                        </Col>
                    </Row>
                </div>
        </>
    )
}

export default Main
