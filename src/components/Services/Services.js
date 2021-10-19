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
        <div className="row p-5 mx-auto">
            {
                services.map(service => <Service service={service}></Service>)
            }
        </div>
    );
};

export default Services;