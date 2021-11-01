import React, { useEffect, useState } from 'react';
import getUrl from '../../utilities/getUrl';
import Offering from '../Offering/Offering';

const Offerings = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(getUrl('offerings'))
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <>
            <div className="row">
                <h2 className="text-secondary pt-3">Main <span className="text-warning">Offerings</span></h2>
                {
                    services.map(service => <Offering
                        key={service._id}
                        service={service}
                    ></Offering>)
                }
            </div>
            <div className="row p-5 m-2 bg-warning text-light">
                <div className="col-lg-4">
                    <h3>GET LATEST OFFERS</h3>
                </div>
                <div className="col-lg-8">
                    <input type="text" placeholder="Enter your Email" />
                </div>
            </div>

        </>
    );
};

export default Offerings;