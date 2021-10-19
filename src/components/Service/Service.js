import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './service.css';

const Service = ({ service }) => {

    const { name, id, img, description, price } = service;
    const history = useHistory();
    const url = `/details/${id}`;
    const handleViewDetailsBtn = () => {
        history.push(url);
    }
    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div class="card h-100">
                <img class="card-img-top" src={img} alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{description}</p>

                </div>
                <div class="card-footer">
                    <h6>Price: {price}</h6>
                    <small class="text-muted"><button onClick={handleViewDetailsBtn} className="btn btn-dark">View Details</button></small>
                </div>
            </div>
        </div>

    );
};

export default Service;