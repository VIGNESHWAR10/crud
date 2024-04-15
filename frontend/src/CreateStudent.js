import axios from 'axios';
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
//require('dotenv').config();

function CreateStudent() {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [id, setID] = useState('');
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        axios.post(`http://${process.env.REACT_APP_BACKEND_HOST}:${process.env.REACT_APP_BACKEND_PORT}/create`, {name, email, id})
        .then(res => {
            console.log(res);
            navigate("/");
        }).catch(err => console.log(err))
    }

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={handleSubmit}>
                    <h2>Add Student</h2>
                    <div className="mb-2">
                        <label htmlFor="">ID</label>
                        <input type="text" placeholder="Enter ID" className="form-control"
                        onChange={e => setID(e.target.value)}>
                        </input>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder="Enter Name" className="form-control"
                        onChange={e => setName(e.target.value)}>
                        </input>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder="Enter Email" className="form-control"
                        onChange={e => setEmail(e.target.value)}>
                        </input>
                    </div>
                    <button className="btn btn-success">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreateStudent