import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { Alert } from './Alert';

const Login = (props) => {
    const [crediantials, setCrediantials] = useState({ email: "", password: "" })
    let navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: crediantials.email, password: crediantials.password })
        })
        const json = await response.json()
        if (json.success) {
            localStorage.setItem('token', json.authToken);
            navigate('/');
        }
        else {
            props.showAlert("*Invalid Crediantials! Please try again");

        }
    };

    const handleOnChange = (e) => {
        setCrediantials({ ...crediantials, [e.target.name]: e.target.value })
    }
    return (
        <div className='container my-3'>
            <div className='form-template' id='form-login' >
                <div className='head'>
                    <h3 className='form-title'>Login</h3>
                </div>

                <div className='form'>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" value={crediantials.email} onChange={handleOnChange} className="form-control" id="email" aria-describedby="emailHelp" name='email' required />
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" value={crediantials.password} onChange={handleOnChange} className="form-control" id="password" name='password' required />
                        <Link to="#" className='forgot'>Forgot?</Link>
                        <button type="submit" className="btn btn-primary form-btn">Login</button>
                    </form>
                    <Alert alert={props.alert} />
                    <div className='log-sig-redirect'>Don't have an account? <Link to='/signup'>Sign Up</Link></div>

                </div>

            </div>
        </div>
    )
}

export default Login