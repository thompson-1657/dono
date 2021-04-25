import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import './style.css'

const Menu = () => (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="#home">Dōnō</Navbar.Brand>
      <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Donate</Nav.Link>
      <Nav.Link href="#pricing">Connect</Nav.Link>
      </Nav>
    </Navbar>
)

export default Menu