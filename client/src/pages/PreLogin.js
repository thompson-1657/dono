import React from 'react'
import Circle from '../components/Circle'
import Rectangle from '../components/Rectangle'
import Buttons from '../components/Buttons'
import Logo from '../components/Logo'
import { Col, Row } from 'react-bootstrap'
import { useHistory } from "react-router-dom"
// import Location from '../components/Location'

function PreLogin() {
    const history = useHistory()

    return (
        <>
            <Row>

                <Col >
                    <Logo />
                    Your location: 
                    {/* <Location /> */}
                    
                </Col>
                <Col>
                </Col>
                <Col>
                    <div className='button-div'>
                        <Buttons onClick={() => history.push("/signup")}>Sign Up</Buttons>
                        <Buttons onClick={()=> history.push("/login")}>Sign In</Buttons>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Circle />
                </Col>
                <Col>
                    <Rectangle />
                </Col>
            </Row>
            <Row>
                <Col />
            </Row>
        </>


    )
}


export default PreLogin