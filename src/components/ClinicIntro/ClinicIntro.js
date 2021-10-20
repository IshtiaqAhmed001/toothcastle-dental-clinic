import React from 'react';
import './ClinicIntro.css';

const ClinicIntro = () => {
    return (
        <div>
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
                <div className="row mx-auto g-5 second-intro-section">
                    <div className="col-lg-6 col-md-6 col-sm-12" >
                        <h1>Why Choose Us ?</h1>
                        <p className="intro-paragraph text-start p-2">Our dental clinic was founded in 2021 by Ishtiaq Ahmed and team ProgrammingHero with the vision of providing high quality and affordable health care infrastructure Bangladesh.</p>
                        <p className="text-start p-2">
                            Our vision is to start a chain of dental clinics offering specialized treatment by experienced doctors all over the country. We offer the entire range of dental treatments and procedures at transparent and printed prices standards for all patients. We even offer free treatment to the patients if they can prove their financial disability.
                        </p>
                        <div className="text-start mb-5">
                            <button className="btn btn-dark">Book an Appointment</button>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">

                        <iframe className="container-fluid" width="560" height="315" src="https://www.youtube.com/embed/U24WMWyMr08" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default ClinicIntro;