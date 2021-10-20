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
                    showDetails.map(singleDetail => <div class="card" style={{ width: "18rem" }}>
                        <img class="card-img-top" src={singleDetail.img} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">{singleDetail.name}</h5>
                            <p class="card-text">{singleDetail.description}</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Price: {singleDetail.price}</li>
                            <li class="list-group-item">Dapibus ac facilisis in</li>
                            <li class="list-group-item">Vestibulum at eros</li>
                        </ul>
                        <div class="card-body">
                            <a href="#" class="card-link">Card link</a>
                            <a href="#" class="card-link">Another link</a>
                        </div>
                    </div>

                    )

                }
            </div>
        </div >
    );
};

export default ServiceDetails;