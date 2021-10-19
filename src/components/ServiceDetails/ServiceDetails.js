import React from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const { serviceNo } = useParams();

    return (
        <div>
            <h1>THis is service no: {serviceNo}</h1>

        </div >
    );
};

export default ServiceDetails;