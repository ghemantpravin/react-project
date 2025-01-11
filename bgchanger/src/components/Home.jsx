import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate()
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/users')
        .then ((response) => response.json())
        .then((data) => setData(data))

    }, []);

    const HandleDelete = (id) =>{
        const confirm = window.confirm("Are you sure?")
        if(confirm){
            axios.delete('http://localhost:3000/users/' +id)
            .then(res => {
                location.reload('')
            })
            .catch(err => console.log(err));
        }
      }

  return (
    <div className='container'>
        <h1>List of Users</h1>
            <div className="w-75 rounded bg-white border shadow p-4">
                <div style={{float: 'right'}}>
                    <Link to='/create' className='btn btn-success'>ADD</Link>
                </div>
                <table className='table table-hover'> 
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>  
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((d, i) => {
                                return(
                                <tr key={i}>
                                    <td>{d.id}</td>
                                    <td>{d.name}</td>
                                    <td>{d.email}</td>
                                    <td>
                                        <Link to={`/read/${d.id}`} className="btn btn-primary me-1">Read</Link>
                                        <Link to={`/update/${d.id}`} className="btn btn-warning me-1">Edit</Link>
                                        <button onClick={e => HandleDelete(d.id)} className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

    </div>
  )


}

export default Home
