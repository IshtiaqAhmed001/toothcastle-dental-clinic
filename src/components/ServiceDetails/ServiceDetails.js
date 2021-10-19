import React from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const { serviceNo } = useParams();

    return (
        <div className="my-5">
            <h1 className="my-5">THis is service no: {serviceNo}</h1>

        </div >
    );
};

export default ServiceDetails;