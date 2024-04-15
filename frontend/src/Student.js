import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
//require('dotenv').config();
function Student() {

    const [students, setStudents] = useState([])

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axios.get(`http://${process.env.REACT_APP_BACKEND_HOST}:${process.env.REACT_APP_BACKEND_PORT}/`);
                setStudents(response.data);
                console.log(response.data)
            } catch (err) {
                console.error(err);
            }
        };

        fetchStudents();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://${process.env.REACT_APP_BACKEND_HOST}:${process.env.REACT_APP_BACKEND_PORT}/student/${id}`);
            // Update the 'students' state to reflect the deletion
            setStudents(students.filter(student => student.ID !== id));
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <Link to="/create" className='btn btn-success'>Add +</Link>
                <table className='table'>
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students.map((data, i) => (
                                <tr key={i}>
                                    <td>{data.ID}</td>
                                    <td>{data.Name}</td>
                                    <td>{data.Email}</td>
                                    <td>
                                        <Link to={`update/${data.ID}`} className='btn btn-primary'>Update</Link>
                                        <Link onClick={e => handleDelete(data.ID)} className='btn btn-danger ms-2'>Delete</Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Student