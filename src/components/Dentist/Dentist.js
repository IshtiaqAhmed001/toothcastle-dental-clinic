import React from 'react';

const Dentist = ({ dentist }) => {
    const { id, name, img } = dentist;
    return (

        <div className="col-lg-4 col-md-6 col-sm-12">
            <div class="card h-100">
                <img class="card-img-top" src={img} alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">{ }</h5>
                    <p class="card-text"></p>

                </div>
                <div class="card-footer">

                    <small class="text-muted"><button className="btn btn-dark">Book Appointment</button></small>
                </div>
            </div>
        </div>

    );
};

export default Dentist;