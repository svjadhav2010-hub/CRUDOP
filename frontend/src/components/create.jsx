import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Create() {
    const [values, setValues] = useState({
        name: '',
        email: ''
    });

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/student', values)
            .then(res => {
                console.log(res);
                navigate('/');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={handleSubmit}>
                    <h2>Add Student</h2>
                    
                    {/* Name Input Field */}
                    <div className="mb-2">
                        <label htmlFor="">Name</label>
                        <input 
                            type="text" 
                            placeholder="Enter the name" 
                            className="form-control"
                            onChange={(e) => setValues({ ...values, name: e.target.value })}
                        />
                    </div>

                    {/* Email Input Field */}
                    <div className="mb-2">
                        <label htmlFor="">Email</label>
                        <input 
                            type="text" 
                            placeholder="Enter the email" 
                            className="form-control"
                            onChange={(e) => setValues({ ...values, email: e.target.value })}
                        />
                    </div>

                    {/* Buttons */}
                    <button className="btn btn-success me-2">Add</button>
                    <Link to="/" className="btn btn-primary">Back</Link>
                </form>
            </div>
        </div>
    );
}

export default Create;
