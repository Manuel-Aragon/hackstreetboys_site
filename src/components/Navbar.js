import React,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {auth} from '../firebase-config'
import {useNavigate} from 'react-router-dom'
import { GetCurrentUser } from '../App'

export const Navbar = () => {

    const navigate = useNavigate();

    const handleLogout=()=>{
        auth.signOut().then(()=>{
            navigate('/');
        })
    }

    return (
            <nav class="navbar navbar-expand-lg bg-light navbar-light py-3 fixed-top">
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
                {!GetCurrentUser()&&<>
                    <div className='rightside'>
                    <div><Link className='navlink' to="signup">SIGN UP</Link></div>
                    <div><Link className='navlink' to="login">LOGIN</Link></div>
                    </div>
                </>} 

                {GetCurrentUser()&&<>
                    <div className='rightside'>
                    <div className='btn btn-danger btn-md'
                    onClick={handleLogout}>LOGOUT</div>                
                    </div>
                </>}       
            </nav>

    )
}