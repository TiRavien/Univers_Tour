import React from 'react';
import "./AddaNewService.css";
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Button } from 'react-bootstrap';
import getUrl from '../../utilities/getUrl';

const AddaNewService = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data)
        axios.post(getUrl(`offerings`), data)
        .then(res => {
            if(res.data.insertedId) {
                alert('Ow! Successfully added');
                reset();
            }
        })
    };
    return (
        <div className="offering p-5">
            <h2>Add a New Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Name" {...register("Name", { required: true, maxLength: 20 })} />
                <textarea placeholder="Description" {...register("description")} />
                <input placeholder="Rate" type="number" {...register("price")} />
                <input placeholder="Image Link" {...register("img")} />
                <Button variant="primary">Submit</Button>
            </form>
        </div>
    );
};

export default AddaNewService;