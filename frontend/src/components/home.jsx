import {React, useState} from 'react';
import {Link} from 'react-router-dom';

function Home()
{
    const [data, setData] = useState("");

    return (
        <div>
            <div>
                <h2>Student List</h2>
                <div>
                    <Link>create +</Link>
                </div>
                <table>
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
                                            <Link>Read</Link>
                                            <Link>Edit</Link>
                                            <button>Delete</button>
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