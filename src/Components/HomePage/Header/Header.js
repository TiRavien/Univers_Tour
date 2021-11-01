import React from 'react';
import { Carousel } from 'react-bootstrap';

const Header = () => {
    return (
        <>
            <div><Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/4T1yY0H/haidan-M4-Gw3q-Q36-J4-unsplash-2.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>AL RAHMA MOSQUE, JEDDAH</h3>
                        <p>The Al-Rahma Mosque is a mosque located on Hatherley Street in Toxteth, Liverpool, England, which can accommodate between 2,000.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/7SjcD92/This-picture-taken-on-July-8-2020-shows-an-aerial-view-of-the-Burj-al-Arab-hotel-in-the-Gulf-emirate.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption> 
                        <h3>BURJ AL ARAB, DUBAI</h3>
                        <p>Burj Al Arab takes hotel design to a new level of modern luxury, and has also redefined the meaning of exceptional hospitality, both in Dubai and around the world.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/HY13KVm/Bosphorus-Bridge.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>ISTANBUL, TURKEY</h3>
                        <p>Istanbul is a major city in Turkey that straddles Europe and Asia across the Bosphorus Strait. Its Old City reflects cultural influences of the many empires that once ruled here.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>
            <div className="row p-5">
                <div className="col-lg-7">
                    <h3><span className="text-primary">POPULAR</span> DESTINATION</h3>
                    <hr />
                    <p>With a world full of fascinating destinations, choosing the perfect vacation spot can present a challenge. That's why U.S. News used expert opinions.</p>
                </div>
                <div className="col-lg-4">
                    <img src="https://i.ibb.co/L0mzPKX/beautiful-woman-1.jpg" alt="" />
                </div>
            </div>
        </>
    );
};

export default Header;