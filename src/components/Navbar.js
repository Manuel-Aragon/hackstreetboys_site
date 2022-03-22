import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {

    return (
        <div className='navbox'>
            <div className='leftside'>
                <span><Link to="merch" className='navlink'>Merch</Link></span>
                <span><Link to="events" className='navlink'>Events</Link></span>
                <span><Link to="bio" className='navlink'>Bio</Link></span>
            </div>
            {<div className='rightside'>
                <span><Link to="signup" className='navlink'>SIGN UP</Link></span>
                <span><Link to="login" className='navlink'>LOGIN</Link></span>
            </div>}
        </div>
    )
}