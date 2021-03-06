import React from 'react'
import {Link} from 'react-router-dom'
import {auth} from '../firebase-config'
import {useNavigate} from 'react-router-dom'
import { GetCurrentUser } from '../App'
import logo from '../img/hacklogotransparent.png'

export const Navbar = () => {

    const navigate = useNavigate();

    const handleLogout=()=>{
        auth.signOut().then(()=>{
            navigate('/');
            GetCurrentUser();
        })
    }
    
    const handleLogin=()=>{
        navigate('/login')
    }

    const handleRegister=()=>{
        navigate('/register')
    }

    return (
            <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 fixed-top">
                <div className='container'>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <span><Link to="/" className='navlink'>
                                <img src={logo} alt="Site Logo and link to home" hieght={50} width={100} />
                            </Link></span>
                        </li>
                        <li className="nav-item">
                            <span><Link to="/Merch" className='nav-link'>Merch</Link></span>
                        </li>
                        <li className="nav-item">
                            <span><Link to="/Events" className='nav-link'>Events</Link></span>
                        </li>
                        <li className="nav-item">
                        <span><Link to="/Announcements" className='nav-link'>Announcements</Link></span>
                        </li>
                        <li className="nav-item">
                            <span><Link to='/Bio' className='nav-link'>Bio</Link></span>
                        </li>
                    </ul>
                    <div className="collapse navbar-collapse" id="navmenu">
                        {!GetCurrentUser()&&<>
                            <ul className="navbar-nav ms-auto">
                            <li  className='btn btn-secondary btn-md'
                                    onClick={handleRegister}>Register</li> 
                                    <li  className='btn btn-primary btn-md'
                                    onClick={handleLogin}>Login</li> 
                                </ul>
                        </>} 

                        {GetCurrentUser()&&<>
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <span><Link to='/Cart' className='nav-link'>Cart</Link></span>
                                </li>
                                <li className="nav-item">
                                    <span><Link to='/Reservations' className='nav-link'>Reservations</Link></span>
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