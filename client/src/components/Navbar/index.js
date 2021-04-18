import React from "react";
import { Link} from "react-router-dom";
import { useAuth } from "../../contexts/AuthContexts"
import "./style.css";
import Location from '../Location'
function Navbar() {
    const { logout } = useAuth()



  return (
    <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
            <Link to="/home" className="navbar-brand" href="#">
                <h1>dōnō</h1>
            </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse"     data-target="#navbarSupportedContent">
        <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav mb-3 mb-lg-0">
            <li className="nav-item">
                 <Link to="/home" className="nav-link" aria-current="page" href="#">hōme</Link>
            </li>
             <li className="nav-item">
                <Link to="/donate" className="nav-link" aria-current="page" href="#">dōnate</Link>
             </li>
            <li className="nav-item">
                <Link to="/connect" className="nav-link" aria-current="page" href="#">cōnnect</Link>
            </li>
            <li className="nav-item">
                <Link to="/message" className="nav-link" aria-current="page" href="#">message</Link>
            </li>
            <li className="nav-item">
                <Link to="/" className="nav-link" aria-current="page" href="#" onClick={()=> logout()}>lōgōut</Link>
            </li>
            <li><Location /></li>
         </ul>
        </div>
        </div>
  </nav>
  )
}


export default Navbar