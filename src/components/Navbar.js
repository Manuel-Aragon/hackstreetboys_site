import React from 'react'
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
    
    const handleLogin=()=>{
        navigate('/login')
    }

    const handleRegister=()=>{
        navigate('/register')
    }

    return (
            <nav class="navbar navbar-expand-lg bg-light navbar-light py-3 fixed-top">
                <div className='container'>
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
                    <div class="collapse navbar-collapse" id="navmenu">
                        {!GetCurrentUser()&&<>
                            <ul class="navbar-nav ms-auto">
                            <li  className='btn btn-secondary btn-md'
                                    onClick={handleRegister}>Register</li> 
                                    <li  className='btn btn-primary btn-md'
                                    onClick={handleLogin}>Login</li> 
                                </ul>
                        </>} 

                        {GetCurrentUser()&&<>
                            <ul class="navbar-nav ms-auto">
                                <li class="nav-item">
                                    <span><Link to='/Cart' className='nav-link'>Cart</Link></span>
                                </li>
                                <li class="nav-item">
                                    <span><Link to='/' className='nav-link'>Reservations</Link></span>
                                </li>
                                <li>
                                <div className='btn btn-danger btn-md'
                                    onClick={handleLogout}>Logout</div>          
                                </li>
                            </ul>
                        </>}
                    </div>
                </div>
            </nav>

    )
}