import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div>
            <div className="">
                <nav className="navbar navbar-expand-lg bg-dark navbar-dark ">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="/">Website</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link " aria-current="page" to="/" >Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/about">About</NavLink>
                                </li>
                                  <li className="nav-item">
                                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/help">Help</NavLink>
                                </li>
                                 <li className="nav-item">
                                    <NavLink className="nav-link" to="/life">Lifecycle</NavLink>
                                </li>
                                  <li className="nav-item">
                                    <NavLink className="nav-link" to="/usereducer">useReducer</NavLink>
                                </li>
                                 <li className="nav-item">
                                    <NavLink className="nav-link" to="/useRef">Usered</NavLink>
                                </li>
                                {/* <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li> */}
                                <li className="nav-item">
                                    <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>

            </div>
        </div>
    )
}

export default Header
