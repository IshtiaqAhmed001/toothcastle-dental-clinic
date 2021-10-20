import React from 'react';
import { useParams } from 'react-router';
import useServices from '../../hooks/useServices';

const ServiceDetails = () => {
    let { serviceNo } = useParams();
    const { services } = useServices();
    console.log(services);
    serviceNo = parseInt(serviceNo);
    console.log(serviceNo)

    const showDetails = services.filter(service => parseInt(service.id) === serviceNo);


    return (
        <div className="my-5">
            <h1 className="my-5">THis is service no: {serviceNo}</h1>

            <div className="w-50 mx-auto">
                {
                    showDetails.map(singleDetail => <div className="col-lg-12 col-md-6 col-sm-12">
                        <div className="card h-100">
                            <img className="card-img-top" src={singleDetail.img} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">{singleDetail.name}</h5>
                                <p className="card-text text-start">
                                    {singleDetail.description}
                                    <p className="fw-bold">Price: {singleDetail.price}</p>
                                </p>

                            </div>
                            <div className="card-footer">

                                <small className="text-muted"><button className="btn btn-dark">Book Now</button></small>
                            </div>
                        </div>
                    </div>
                    )

                }
            </div>
        </div >
    );
};

export default ServiceDetails;