import React from 'react'
import Circle from '../components/Circle'
import Rectangle from '../components/Rectangle'
import Buttons from '../components/Buttons'
import Logo from '../components/Logo'
import {Col, Row} from 'react-bootstrap'



const PreLogin = () => (
<>
<Row>
    
    <Col >
        <Logo />
    </Col>
    <Col>
    </Col>
    <Col>
        <div className='button-div'>
        <Buttons>Sign Up</Buttons>
        <Buttons>Sign In</Buttons>
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

  export default PreLogin