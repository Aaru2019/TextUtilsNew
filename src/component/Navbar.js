// import React,{useState} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
   
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.navmode} bg-${props.navmode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">{props.home}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">{props.about}</Link>
                            </li>

                        </ul>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" onClick= {props.switched }role="switch" id="flexSwitchCheckDefault"/>
                                <label style={
                                    props.modebtn==='dark'?{color:'black'}:{color:'white'}
                                
                                }class="form-check-label" for="flexSwitchCheckDefault">Switch to {props.modebtn} mode</label>
                        </div>
                        {/* <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search Anything Here" aria-label="Search"/>
                                <button className="btn btn-outline-danger" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </nav>
        </div>
    )
}
Navbar.propTypes = {
    title: PropTypes.string

}

Navbar.defaultProps = {
    title: "Enter Title"

}