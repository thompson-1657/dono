import React from 'react'
import './style.css'
import {Button} from 'react-bootstrap'


const Buttons = ({children, type,onClick}) => (
  
  <Button className='btn mr-2' onClick={onClick} type={type}>{children}</Button>
  )

  export default Buttons