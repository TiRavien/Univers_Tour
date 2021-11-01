import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Navber = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <h3><i class="fab fa-osi"></i> <span className="text-warning">Univers</span> Tour</h3>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>

                        {user?.email ?
                            <>
                                <Nav.Link as={Link} to="/myOrder">My Orders</Nav.Link>
                                 
                                <Nav.Link as={Link} to="/manageAll">Manage All Orders</Nav.Link>

                                <Nav.Link as={Link} to="/addaNewService">Add a New Service</Nav.Link>
                                
                                    <img className="rounded-circle me-3" height="40" width="40" src={user?.photoURL} alt="" />
                                
                                <Button onClick={logOut} variant="danger">Logout</Button>
                            </>
                            :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navber;