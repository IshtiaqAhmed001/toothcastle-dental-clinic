import React from 'react';
import { useHistory } from 'react-router';
import './Appointment.css';
const Appointment = () => {
    const history = useHistory();

    const handleAppointment = () => {
        history.push('/home');
    }
    return (
        <div>
            <h2 className="text-center display-5 mt-2">Make an Appointment</h2>

            <div className="my-5 w-75 mx-auto">
                <form className="ms-5 border border-dark  p-5" >
                    <div className="form-row">
                        <div className="form-group col-12">
                            <input type="text" className="form-control" id="inputName" placeholder="Enter Name" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-12">
                            <input type="email" className="form-control" id="inputEmail4" placeholder="Enter email" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-12">
                            <input type="text" className="form-control" id="inputAddress" placeholder="Enter Address" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-12">
                            <input type="text" className="form-control" id="Enter Phone" placeholder="Enter Phone No" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-12">
                            <input type="text" className="form-control" id="Enter city" placeholder="Enter City" />
                        </div>
                    </div>

                    <button type="submit" onClick={handleAppointment} className="btn border-0 btn-primary mb-5">Book Appointment</button>
                </form>
            </div>
        </div>
    );
};

export default Appointment;