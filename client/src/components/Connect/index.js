import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import './style.css'
import Buttons from '../Buttons'


const Connect = () => (
  <Link to="/connect">
    <Buttons className="connect">
    Connect
    </Buttons>
    </Link>
    


)



export default Connect


