import React from 'react'
import {Form} from 'react-bootstrap'
import './style.css'


const Poll = () => (
<Form className="poll">
   
   <Form.Check 
     id={`Poll 1`}
     label={`Poll 1`}
   />
         <Form.Check 
     id={`Poll 2`}
     label={`Poll 2`}
   />
   <Form.Check 
     id={`Poll 3`}
     label={`Poll 3`}
   />



</Form>
)


export default Poll