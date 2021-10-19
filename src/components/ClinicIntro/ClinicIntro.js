import React from 'react';

const ClinicIntro = () => {
    return (
        <div className="row mx-auto g-5">
            <div className="col-lg-6 col-md-12">
                <div className="my-5">
                    <img className="w-100 p-2" src="https://i.ibb.co/CHh93mQ/introbanner.webp" alt="" />
                </div>
            </div>
            <div className="col-lg-5 col-md-12 p-4">
                <h2 className="mt-4">Morden Dentistry Clinic</h2>
                <p className="text-start my-4"><small>We offer a wide-range of dental services at the General Clinic.You will be provided with a comprehensive treatment plan prior to the start of any dental services.To make an appointment or learn more about the services available at the Dentistry clinic please call on.</small></p>
                <ul class="list-group">
                    <li class="list-group-item list-group-item-primary">Certified Dentist Doctors</li>
                    <li class="list-group-item list-group-item-secondary">Latest Technology Equipment</li>
                    <li class="list-group-item list-group-item-success">Guarantee for dent treatment</li>
                    <li class="list-group-item list-group-item-danger">Before/After treatment care</li>
                    <li class="list-group-item list-group-item-warning">Insurance facility available</li>
                </ul>
            </div>
        </div>
    );
};

export default ClinicIntro;