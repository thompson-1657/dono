import React from 'react'
import {Link } from 'react-router-dom'
import './style.css'
import Buttons from '../Buttons'


const Donate = () => (
    <Link to='/donate'>
    <Buttons className="donate">
   Donate
    </Buttons>
    </Link>
  


)



export default Donate