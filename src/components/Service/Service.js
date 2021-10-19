import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import './service.css';

const Service = ({ service }) => {
    const { name, id, img, description, price } = service;
    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div class="card h-100">
                <img class="card-img-top" src={img} alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{description}</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted"><button className="btn btn-dark">View Details</button></small>
                </div>
            </div>
        </div>

    );
};

export default Service;