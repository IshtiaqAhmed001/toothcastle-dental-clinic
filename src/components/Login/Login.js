import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import useAuth from '../../hooks/useAuth';

import './Login.css';


const Login = () => {
    const googleIcon = <FontAwesomeIcon icon={faGoogle} />;
    const { signInWithGoogle } = useAuth();
    return (
        <div >
            <div className="login-container">
                <h2 className="display-6 text-primary mt-4">Please Login</h2>
                <p className="my-4">You can login using any of the methods</p>
                <div>
                    <button className="button" onClick={signInWithGoogle}><span className="google-icon">{googleIcon}</span></button>

                </div>
            </div>
        </div>
    );
};

export default Login;