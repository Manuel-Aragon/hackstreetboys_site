import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { auth, fs } from '../firebase-config'

export const Register = (props) => {

    // defining state
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // signup
    let navigate = useNavigate();
    const signup = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then((cred) => {
            fs.collection('users').doc(cred.user.uid).set({
                Name: name,
                Email: email,
                Password: password
            }).then(() => {
                setName('');
                setEmail('');
                setPassword('');
                navigate(`/`);
                setError('');
            }).catch(err => setError(err.message));
        }).catch(err => setError(err.message));
    }

    return (
        <div className='container'>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h2>Sign up</h2>
        <br />
        <form autoComplete="off" className='form-group' onSubmit={signup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name"className='form-control' required
                onChange={(e) => setName(e.target.value)} value={name} />
            <br />
            <label htmlFor="email">Email</label>
            <input type="email" id="email"className='form-control' required
                onChange={(e) => setEmail(e.target.value)} value={email} />
            <br />
            <label htmlFor="pass">Password</label>
            <input type="password" id="pass" className='form-control' required
                onChange={(e) => setPassword(e.target.value)} value={password} />
            <br />
            <button type="submit" className='btn btn-success btn-md mybtn'>SUBMIT</button>
        </form>
        {error && <span className='error-msg'>{error}</span>}
        <br />
        <span>Already have an account? Login
            <Link to="/login"> Here</Link>
        </span>
    </div>
    )
}