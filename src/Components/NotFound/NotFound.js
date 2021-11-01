import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <img style={{ width: '100%', padding: '10px' }} src="https://i.ibb.co/SQ7n7tK/404-error-page-not-found.jpg" alt="" />
            <Link to="/">  <Button variant="warning"> Go Home</Button> </Link>
        </div>
    );
};

export default NotFound;