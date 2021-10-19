import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import './Login.css';


const Login = () => {
    const googleIcon = <FontAwesomeIcon icon={faGoogle} />;
    const { signInWithGoogle } = useAuth();
    return (
        <div >
            <div className="login-container">
                <h2 className="display-5 text-primary mt-4">Please Login</h2>
                <p className="my-4">You can login using Google directly</p>
                <div>
                    <button className="button mb-5" onClick={signInWithGoogle}><span className="google-icon">{googleIcon}</span></button>

                </div>
                <h3 className="fw-light text-success mt-5">You can also register manually</h3>
                <Link to="/register">Click Here to Register</Link>
            </div>
        </div>
    );
};

export default Login;