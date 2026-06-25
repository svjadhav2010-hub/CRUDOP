import {React, useState} from 'react';
import {Link} from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

function Home()
{
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8081/read')
            .then(res => {
                setData(res.data);
            })
            .catch(error => {
                console.error('Error fetching student data:', error);
            });
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8081/delete/`+id)
            .then(res => {
                window.location.reload();
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <h2>Student List</h2>
                <div className='d-flex justify-content-end'>
                    <Link to="/create" className='btn btn-success'>create +</Link>
                </div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>E-mail</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((student,index)=>
                            {
                                return(
                                    <tr key={index}>
                                        <td>{student.id}</td>
                                        <td>{student.name}</td>
                                        <td>{student.email}</td>
                                        <td>
                                            <Link to={`/read/${student.id}`} className='btn btn-sm btn-info'>Read</Link>
                                            <Link to={`/update/${student.id}`} className='btn btn-sm btn-primary mx-2'>Edit</Link>
                                            <button onClick={() => handleDelete(student.id)} className='btn btn-sm btn-danger'>Delete</button>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default Home;