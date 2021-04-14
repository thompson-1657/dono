import React from "react";
import { Link} from "react-router-dom";
import "./style.css";
import {Button} from 'react-bootstrap'


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
    <div className="container-fluid">
    <Link to="/" className="navbar-brand" href="#">
        <h1>dōnō</h1>
    </Link>
<Button className="navbar-toggler" type="button" data-toggle="collapse"     data-target="#navbarSupportedContent">
<span className="navbar-toggler-icon"></span>
</Button>

<div className="collapse navbar-collapse" id="navbarSupportedContent">
 <ul className="navbar-nav  mb-2 mb-lg-0">
    <li className="nav-item">
         <Link to="/" className="nav-link" aria-current="page" href="#">Home</Link>
    </li>
    <li className="nav-item">
        <Link to="/donate" className="nav-link" aria-current="page" href="#">Donate</Link>
    </li>
     <li className="nav-item">
        <Link to="/chat" className="nav-link" aria-current="page" href="#">Connect</Link>
     </li>
     <li className="nav-item">
        <Link to="/" className="nav-link" aria-current="page" href="#">Logout</Link> 
        {/* change logout route to logout */}
     </li>

 </ul>
</div>
</div>
</nav>

  )
}


export default Navbar