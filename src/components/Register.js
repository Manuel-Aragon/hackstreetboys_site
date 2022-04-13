import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import { Navbar } from './Navbar';
import './form.css'

export const Register = (props) => {

    // defining state
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // signup
    const signup = (e) => {
    }

    return (
        <div className='container'>
            <Navbar/>
            <br />
            <h2>Sign up</h2>
            <br />
            <form autoComplete="off" className='form-group' onSubmit={signup}>
                <label htmlFor="name">Name</label>
                <input type="text" className='form-control' required
                    onChange={(e) => setName(e.target.value)} value={name} />
                <br />
                <label htmlFor="email">Email</label>
                <input type="email" className='form-control' required
                    onChange={(e) => setEmail(e.target.value)} value={email} />
                <br />
                <label htmlFor="password">Password</label>
                <input type="password" className='form-control' required
                    onChange={(e) => setPassword(e.target.value)} value={password} />
                <br />
                <button type="submit" className='btn btn-success btn-md mybtn'>SUBMIT</button>
            </form>
            {/* {error && <span className='error-msg'>{error}</span>} */}
            <br />
            <span>Already have an account? Login
                <Link to="login"> Here</Link>
            </span>
        </div>
    )
}