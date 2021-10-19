import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

const Service = ({ service }) => {
    const { name, id, img, description, price } = service;
    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            {/* <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card> */}
            <div class="card h-100">
                <img class="card-img-top" src={img} alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{description}</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted"><button className="btn btn-primary">Book Appointment</button></small>
                </div>
            </div>
        </div>

    );
};

export default Service;