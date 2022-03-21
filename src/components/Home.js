import React, { useEffect } from 'react'
import { Navbar } from './Navbar';
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase-config'

export const Home = ({ user }) => {

    const navigate = useNavigate()

    return (
        <div className='wrapper'>
            <Navbar user={user} />
        </div>
    )
}