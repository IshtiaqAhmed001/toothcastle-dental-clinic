import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';


const Header = () => {
    const normalStyle = {
        textDecoration: "none",
        color: 'black',
        marginRight: "10px",
        padding: '10px',
        fontWeight: "600",
        fontSize: "1.2rem",
        pointer: 'cursor',
        transition: "0.5s"
    };
    const logoStyle = {
        textDecoration: 'none',
        color: 'black',
        pointer: 'cursor'

    }
    return (
        <div className="header">
            <div className="d-flex justify-content-between container">
                <div>
                    <NavLink style={logoStyle} to='/home'><h3 className="fw-bold">Tooth Castle</h3></NavLink>

                </div>
                <div className="d-flex">
                    <NavLink className="nav-link" style={normalStyle} to='/home'>Home</NavLink>
                    <NavLink className="nav-link" style={normalStyle} to='/services'>Services</NavLink>
                    <NavLink className="nav-link" style={normalStyle} to='/login'>Login</NavLink>
                    <NavLink className="nav-link" style={normalStyle} to='/blog'>Blog</NavLink>
                    <NavLink className="nav-link" style={normalStyle} to='/contact'>Contact</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;