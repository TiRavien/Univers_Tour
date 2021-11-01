import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="row">
                <div className="col-lg-6 col-sm-12 py-3">
                    <h3>Univers Tour</h3>
                    <hr />
                    <h6>A visit to a place or area, especially one during which you look around the place or area and learn about it:</h6>
                    <ul>
                        <li>We went on a guided tour of the cathedral/museum/factory.</li>
                        <li>A bus took us on a sightseeing tour of the city.</li>
                        <li>We offer guided tours of the city.</li>
                    </ul>
                    <h6><i class="fab fa-twitter"></i> <i class="fab fa-facebook-f"></i>   <i class="fab fa-google-plus-g"></i>   <i class="fab fa-linkedin-in"></i></h6>
                </div>
                <div className="col-lg-3 col-sm-6 py-3">
                    <h3>Latest Tweets</h3>
                    <hr />
                    <p><i class="fab fa-twitter"></i>  @Creative_WS We've got SALE - 50%OFF. Only few days. Special price for special Theme Bellaria Cakes and Sweets </p>
                </div>
                <div className="col-lg-3 col-sm-6 py-3">
                    <h3>Tag Cloud</h3>
                    <hr />
                    <p><small>Adventure</small></p>
                    <p><small>Romantic</small></p>
                    <p><small>Wildlife</small></p>
                    <p><small>Brach</small></p>
                    <p><small>Honeymoon</small></p>
                </div>
            </div>
            <hr />
            <div>
                <p><i className="far fa-copyright"></i>  Copyright 2021 <span className="text-warning">Univers Tour</span>   |   All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;