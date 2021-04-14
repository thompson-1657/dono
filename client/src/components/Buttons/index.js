import React from 'react'
import './style.css'
import {Button} from 'react-bootstrap'


const Buttons = ({children, type,onClick}) => (
  
  <Button variant="dark" className="mr-3" onClick={onClick} type={type}>{children}</Button>
  )

  export default Buttons