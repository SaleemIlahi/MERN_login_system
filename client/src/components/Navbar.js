import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
            <div className="container-fluid">
                <h1 className="navbar-brand my-auto">LOGIN</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link" href="#home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link" href="#link">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/signup" className="nav-link" href="#register">Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/logout" className="nav-link" href="#link">Logout</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
