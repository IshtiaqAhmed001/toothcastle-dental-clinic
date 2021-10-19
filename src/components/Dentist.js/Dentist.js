import React from 'react';
import './Dentist.css';
const Dentist = ({ dentist }) => {
    const { name, img } = dentist;
    return (

        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card h-100">
                <img className="card-img-top" src={img} alt="Card image cap" />
                <div className="card-body">
                    <h3 className="card-text">{name}</h3>
                </div>
                <div className="card-footer">

                    <small className="text-muted"><button className="btn btn-dark">Book Appointment</button></small>
                </div>
            </div>
        </div>

    );
};

export default Dentist;