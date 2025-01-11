import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function Read() {

    const [data, setData] = useState([])

    const {id} = useParams()
    
        useEffect(() => {
            fetch('http://localhost:3000/users/' + id)
            .then ((response) => response.json())
            .then((data) => setData(data))
    
        }, []);

  return (
    <div className='container'>
      <h1>Read</h1>
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
            <p className='card-text'>Name : {data.id}</p>
            <p className='card-text'>Name : {data.name}</p>
            <p className='card-text'>Email : {data.email}</p>
        </div>
      </div>
      </div>
      <Link to={`/update/${id}`} className='btn btn-success ms-2'>Edit</Link>
      <Link to={'/'} className='btn btn-primary ms-2'>Back</Link>
    </div>
  )
}

export default Read
