import React, { useEffect, useState } from 'react';
import Dentist from '../Dentist/Dentist';
import './Dentists.css';
const Dentists = () => {
    const [dentists, setDentists] = useState([]);
    useEffect(() => {
        fetch('/dentists.json')
            .then(res => res.json())
            .then(data => setDentists(data))
    }, [])

    return (
        <div className="container">
            <h1 className="display-1 my-5">Highly Qualified Dentists</h1>
            <div className="row p-5 mx-auto g-5">
                {
                    dentists.map(dentist => <Dentist dentist={dentist}></Dentist>)
                }
            </div>
        </div>
    );
};

export default Dentists;