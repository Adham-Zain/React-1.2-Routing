import React from 'react'
import "./navbar.css"
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container py-2">
                <NavLink className="navbar-brand" to="/">Start Freamwork</NavLink>
                <button className="navbar-toggler my-2 text-white fs-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa-solid fa-bars" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/portofolio">Portofolio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}