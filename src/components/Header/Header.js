import React from 'react';
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';


const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="header">
            <div className="d-flex justify-content-between container">
                <div>
                    <NavLink className="text-logo" to='/home'><h3 className="fw-bold">Tooth Castle</h3></NavLink>

                </div>
                <div className="d-flex">
                    <NavLink className="nav-link" to='/home'>Home</NavLink>
                    <NavLink className="nav-link" to='/services'>Services</NavLink>
                    <NavLink className="nav-link" to='/dentists'>Dentists</NavLink>
                    <NavLink className="nav-link" to='/contact'>Blog</NavLink>
                    {/* <NavLink className="nav-link" to='/login'>Login</NavLink> */}
                    <NavLink className="user-name" to='/'>{user?.displayName}</NavLink>
                    {
                        user?.email ? <button onClick={logOut} className="logoutBtn border-0">Logout</button> : <NavLink className="nav-link" to='/login'>Login</NavLink>
                    }

                </div>
            </div>

        </div>
    );
};

export default Header;