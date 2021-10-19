import useServices from '../../hooks/useServices';
import Service from '../Service/Service';

const Services = (props) => {

    const { services } = useServices();


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