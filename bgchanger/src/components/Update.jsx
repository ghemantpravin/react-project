import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Update() {

    // const [data, setData] = useState([])

    const {id} = useParams()

    const [values, setValues] = useState({
            name : '',
            email : ''
        })

    const navigate = useNavigate()
    
        useEffect(() => {
            axios.get('http://localhost:3000/users/' +id)
            .then(res => {
                setValues(res.data)
            })
            .catch(err => console.log(err))
    
        }, []);

        const HandleUpdate = (e) => {
            e.preventDefault()
            axios.put('http://localhost:3000/users/'+id, values)
            .then (response => {
            console.log(response)
            navigate('/')
        })
        .catch(err => console.log(err));
        }

  return (
    <div className='container'>
        <h1>Update</h1>
            <div className="col-md-4">
                <form onSubmit={HandleUpdate}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                        <input value={values.name} onChange={e => setValues({...values, name: e.target.value})} type="text" className="form-control" name="exampleInputName"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                        <input value={values.email} onChange={e => setValues({...values, email: e.target.value})} type="email" className="form-control" name="exampleInputEmail" />
                    </div>
                    <button type="submit" className="btn btn-primary">Update</button>
                    <Link to='/' className="btn btn-primary ms-2">Back</Link>
                </form>
            </div>
    </div>
  )
}

export default Update
