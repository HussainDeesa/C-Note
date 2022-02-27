import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { Alert } from './Alert';

const Signup = (props) => {
    let navigate = useNavigate();
    const [crediantials, setCrediantials] = useState({ name: "", email: "", password: "", cpassword: "" })

    const handleSubmit = async (e) => {
        if (crediantials.password === crediantials.cpassword) {
            e.preventDefault();
            const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: crediantials.name, email: crediantials.email, password: crediantials.password })
            })

            const json = await response.json()
            console.log(json);
            if (json.success) {
                localStorage.setItem('token', json.authToken)
                navigate('/');
            }
            else {
                props.showAlert("*User with this email already exists")
            }
        }
        else {
            e.preventDefault()
            props.showAlert("*Password and Confirm Password are different")
        }

    };


    const handleOnChange = (e) => {
        setCrediantials({ ...crediantials, [e.target.name]: e.target.value })
    }

    return (
        <div className='container my-3'>
            <div className='form-template' id='form-login' >
                <div className='head'>
                    <h3 className='form-title'>Sign Up</h3>
                </div>
                <div className='form'>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" onChange={handleOnChange} className="form-control" name='name' id="name" required minLength={3} />
                        <label htmlFor="email" className="form-label">Email </label>
                        <input type="text" onChange={handleOnChange} className="form-control" name='email' id="email" aria-describedby="emailHelp" required />

                        <label htmlFor="password" className="form-label">Password </label>
                        <input type="password" onChange={handleOnChange} className="form-control" name='password' id="password" required minLength={7} />
                        <label htmlFor="cpassword" className="form-label">Confirm Password </label>
                        <input type="password" onChange={handleOnChange} className="form-control" name='cpassword' id="cpassword" required minLength={7} />

                        <button type="submit" className="btn btn-primary form-btn">Signup</button>
                    </form>
                        <Alert alert={props.alert}/>
                        <div className='log-sig-redirect'> Already have an account? <Link to='/login'>Login</Link></div>
                </div>

            </div>
        </div>

    )
}

export default Signup