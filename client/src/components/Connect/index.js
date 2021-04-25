import React from 'react'
import {Link} from 'react-router-dom'
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


