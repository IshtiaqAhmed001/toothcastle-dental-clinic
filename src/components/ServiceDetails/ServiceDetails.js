import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useServices from '../../hooks/useServices';
import './ServiceDetails.css';

const ServiceDetails = () => {
    let { serviceNo } = useParams();
    const { services } = useServices();
    console.log(services);
    serviceNo = parseInt(serviceNo);
    console.log(serviceNo)

    const showDetails = services.filter(service => parseInt(service.id) === serviceNo);


    return (
        <div className="my-5">
            <h1 className=" display-3 mt-5">Service Details</h1>
            <hr className="w-50 mx-auto mb-5" />

            <div className="w-50 mx-auto">
                {
                    showDetails.map(singleDetail => <div class="card mx-auto" style={{ width: "20rem" }}>
                        <img class="card-img-top" src={singleDetail.img} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title ">{singleDetail.name}</h5>
                            <p class="card-text">{singleDetail.description}</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item fw-bold text-success">Price: {singleDetail.price}</li>

                        </ul>
                        <div class="card-body">
                            <Link className="details-links" to="/*">Book Now</Link>
                            <Link className="details-links" to="/home">Home</Link>

                        </div>
                    </div>

                    )

                }
            </div>
        </div >
    );
};

export default ServiceDetails;