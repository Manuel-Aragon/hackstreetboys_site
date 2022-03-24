import React, { useState } from 'react'
import { auth } from '../firebase-config'
import { Link, useNavigate} from 'react-router-dom'
import { Navbar } from './Navbar';


export const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    let navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(() => {
            setSuccessMsg('Successfully Logged in.');
            setEmail('');
            setPassword('');
            setErrorMsg('');
            setTimeout(()=>{
                setSuccessMsg('');
                navigate(`/`);
            },3000)
            console.log('logged in')
            
        }).catch(errorMsg => setErrorMsg(errorMsg));
    }

    return (
        <div className='container'>
            <br />
            <h2>Login</h2>
            <Navbar/>
            <br></br>
            <hr></hr>
            {successMsg&&<>
                <div className='success-msg'>{successMsg}</div>
                <br></br>
            </>}
            <form autoComplete="off" className='form-group' onSubmit={handleLogin}>
                <label htmlFor="email">Email</label>
                <input type="email" className='form-control' required
                    onChange={(e) => setEmail(e.target.value)} value={email}></input>
                <br />
                <label htmlFor="password">Password</label>
                <input type="password" className='form-control' required
                    onChange={(e) => setPassword(e.target.value)} value={password}></input>
                <br />
                <button type="submit" className='btn btn-success btn-md mybtn'>LOGIN</button>
            </form>
            {errorMsg && <span className='error-msg'>{errorMsg}</span>}
            <br/>
            <span>Don't have an account? Register
                <Link to="/Register"> Here</Link>
            </span>
        </div>
    )
}