import React from "react"
import Circle from "../components/Circle"
import Rectangle from "../components/Rectangle"
import Logo from "../components/Logo"
import { Col, Row } from "react-bootstrap"
import { useHistory } from "react-router-dom"

import styled from "styled-components"

const Button = styled.button`
    background-color: #1a262b;
    border: none;
    color: white;
    border-radius: 0 !important;
    font-family: "PT Sans Narrow", sans-serif;
    width: 100px;
    box-shadow: 0 3px 6px #999;
    height: 45px;
    margin-right: 6px;
    
    @media (max-width: 375px) {
    
    height:4vh;
    width:16vw;
    margin-top:30px;
    font-size:12px;
    }
`



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
                        <Button
                        id="signUpBtn"
                        onClick={() => history.push("/signup")}>
                            Sign Up
                        </Button>
                        <Button 
                        onClick={()=> history.push("/login")}>
                            Sign In
                        </Button>
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