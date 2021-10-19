import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

    return (
        <div className="login-form">
            <div>
                <h2 className="my-5">Register Here</h2>

                <form className="w-50 mx-auto my-5">
                    <div class="form-group row mt-5">
                        <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-10 mb-4">
                            <input type="email" class="form-control" id="staticEmail" placeholder="Enter email" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                        <div class="col-sm-10 mb-5">
                            <input type="password" class="form-control" id="inputPassword" placeholder="Password" />
                        </div>
                    </div>
                </form>
                <div>
                    <p>Already have an account ?</p>
                    <p className="mb-5"><Link to="/login">Login</Link></p>
                </div>
            </div>
        </div >
    );
};

export default Register;