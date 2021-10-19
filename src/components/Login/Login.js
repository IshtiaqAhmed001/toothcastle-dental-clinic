import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import './Login.css';


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signInUsingEmailandPassword } = useAuth();

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    const handleLogin = e => {
        e.preventDefault();
        console.log(email, password);
        signInUsingEmailandPassword(email, password);

    }


    const googleIcon = <FontAwesomeIcon icon={faGoogle} />;
    const { signInWithGoogle } = useAuth();
    return (
        <div >
            <div className="login-container">
                <h2 className="display-5 text-primary mt-4">Please Login</h2>
                <div className="login-form">
                    <div>
                        <form onSubmit={handleLogin} className="w-50 mx-auto my-5">
                            <div className="form-group row mt-5">
                                <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10 mb-4">
                                    <input onBlur={handleEmailChange} type="email" className="form-control" id="staticEmail" placeholder="Enter email" required />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                                <div className="col-sm-10 mb-2">
                                    <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword" placeholder="Password" required />
                                </div>
                            </div>
                            <div className="form-group row"><p className="text-danger"></p>
                            </div>

                            <div className="d-flex justify-content-center">
                                <div> <input className="btn btn-dark mt-2" type="submit" value="Login" /></div>
                                <div>
                                    <button className="button" onClick={signInWithGoogle}><span className="google-icon">{googleIcon}</span></button>
                                </div>

                            </div>
                        </form>

                    </div>
                </div >

                <h3 className="fw-light text-success mt-5">Not Registered?</h3>
                <Link to="/register">Click Here to Register</Link>
            </div>
        </div>
    );
};

export default Login;