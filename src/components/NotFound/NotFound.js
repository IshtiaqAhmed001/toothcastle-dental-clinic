import React from 'react';
import './NotFound.css'
import image from '../../images/shared/404notfound.png'
import Button from 'react-bootstrap/Button';
import { Link, useHistory } from 'react-router-dom';

const NotFound = () => {

    return (
        <div className="notFound">
            <div className="imageContainer my-5">
                <img className="w-75" src={image} alt="" />
                <br />
                <Link to='/home'> <Button variant="dark">Go back to Home</Button>{' '}</Link>
            </div>
        </div>
    );
};

export default NotFound;