import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export const Navbar = () => {

    return (
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
            <div className='navbox'>
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <span><Link to="/" className='nav-link'>Home</Link></span>
                    </li>
                    <li class="nav-item">
                        <span><Link to="/Merch" className='nav-link'>Merch</Link></span>
                    </li>
                    <li class="nav-item">
                        <span><Link to="/Events" className='nav-link'>Events</Link></span>
                    </li>
                    <li class="nav-item">
                    <span><Link to="/Announcements" className='nav-link'>Announcements</Link></span>
                    </li>
                    <li class="nav-item">
                        <span><Link to='/Bio' className='nav-link'>Bio</Link></span>
                    </li>
                </ul>

            </div>
            <div className='rightside -'>
                    <span><Link to="/Register" className='btn btn-secondary btn-sm'>Register</Link></span>
                    <span><Link to="/Login" className='btn btn-primary btn-sm'>LOGIN</Link></span>
            </div>
        </nav>
    )
}