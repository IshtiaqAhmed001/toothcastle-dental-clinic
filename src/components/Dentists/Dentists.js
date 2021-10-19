import React, { useEffect, useState } from 'react';
import Dentist from '../Dentist.js/Dentist';
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
            <p>We have more than 20 MDS surgeons. Our team has expert professionals who are immensely experienced for several years.

            </p>
            <div className="row p-5 mx-auto g-5">
                {
                    dentists.map(dentist => <Dentist
                        key={dentist.id}
                        dentist={dentist}></Dentist>)
                }
            </div>
        </div>
    );
};

export default Dentists;