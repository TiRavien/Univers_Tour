import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Offering = ({ service }) => {
    const { _id, Name, description, img } = service;
    return (
        <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{Name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <hr />
                    <Link to={`/offering/${_id}`}>
                        <Button variant="success">Book Now</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Offering;