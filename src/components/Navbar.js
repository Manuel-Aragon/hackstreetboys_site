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
                    <span><Link to='/Register' className='nav-link'>Register</Link></span>
                    <span><Link to='/Login' className='nav-link'>Login</Link></span>
                    </div>
                </>} 

                {GetCurrentUser()&&<>
                
                    <div className='rightside'>
                    <span><Link to='/Cart' className='nav-link'>Cart</Link></span>
                    <span><Link to='/' className='nav-link'>Reservations</Link></span>
                    <div className='btn btn-danger btn-md'
                        onClick={handleLogout}>Logout</div>                
                    </div>
                </>}       
            </nav>

    )
}