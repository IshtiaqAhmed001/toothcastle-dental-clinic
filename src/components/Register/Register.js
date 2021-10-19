import { updateProfile } from '@firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const { registerWithEmailandPass, error, setError } = useAuth();

    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    const handleRegister = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError('Password must be at least 6 characters long!')
            return;
        }

        registerWithEmailandPass(name, email, password);
    }




    return (
        <div className="login-form">
            <div>
                <h2 className="my-5">Register Here</h2>

                <form onSubmit={handleRegister} className="w-50 mx-auto my-5">
                    <div className="form-group row mt-5">
                        <label htmlFor="staicName" className="col-sm-2 col-form-label text-start">Name</label>
                        <div className="col-sm-10 mb-4">
                            <input onBlur={handleNameChange} type="text" className="form-control" id="staicName" placeholder="Enter Name" required />
                        </div>
                    </div>
                    <div className="form-group row ">
                        <label htmlFor="staticEmail" className="col-sm-2 col-form-label text-start">Email</label>
                        <div className="col-sm-10 mb-4">
                            <input onBlur={handleEmailChange} type="email" className="form-control" id="staticEmail" placeholder="Enter email" required />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label text-start">Password</label>
                        <div className="col-sm-10 mb-5">
                            <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword" placeholder="Password" required />
                        </div>
                    </div>
                    <div className="form-group row"><p className="text-danger">{error}</p>
                    </div>
                    <input className="btn btn-dark" type="submit" value="Register" />
                </form>
                <div>
                    <p className="fs-4">Already have an account ?</p>
                    <p className="mb-5 fs-5"><Link to="/login">Login</Link></p>
                </div>
            </div>
        </div >
    );
};

export default Register;