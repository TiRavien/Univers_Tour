import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import getUrl from '../../utilities/getUrl';

const ManageAllOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);



    useEffect(() => {
        fetch(getUrl('orders'))
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []); 
    return (
        <div className="p-3">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Rate</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                        orders.map((order, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{user.displayName}</td>
                                <td>{order.service.Name}</td>
                                <td>
                                    <img className="w-25" src={order.service.img} alt="" />
                                </td>
                                <td>${order.service.price}</td>
                                <td>{order.status }</td>
                            </tr>
                        ))
                    }
                    <Button variant="danger">Delete</Button>
                </tbody>
            </Table>
        </div>
    );
};

export default ManageAllOrders;