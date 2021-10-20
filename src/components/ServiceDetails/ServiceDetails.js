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
    console.log(showDetails);

    return (
        <div className="my-5">
            <h1 className="my-5">THis is service no: {serviceNo}</h1>
            {
                <div>
                    <h2>Name: {showDetails[0].name}</h2>
                    <img src={showDetails[0].img} alt="" />
                </div>

            }
        </div >
    );
};

export default ServiceDetails;