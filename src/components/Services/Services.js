import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = (props) => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/servicesData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div className="row p-5 mx-auto g-5">
            <h1 className="display-4 mb-4 section-title">Our Dental Services</h1>
            {
                services.slice(1, 7).map(service => <Service service={service}></Service>)
            }
        </div>
    );
};

export default Services;