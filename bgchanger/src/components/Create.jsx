import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Create() {

    const [values, setValues] = useState({
        name : '',
        email : ''
    })

    const navigate = useNavigate()

    function HandleSubmit(e){
        e.preventDefault();
        axios.post('http://localhost:3000/users', values)
        .then (response => {
            console.log(response)
            navigate('/')
        })
        .catch(err => console.log(err));
    }

  return (
    <div className='container'>
        <h1>Add a user (Create)</h1>
            <div className="col-md-4">
                <form onSubmit={HandleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                        <input onChange={e => setValues({...values, name: e.target.value})} type="text" className="form-control" name="exampleInputName"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                        <input onChange={e => setValues({...values, email: e.target.value})} type="email" className="form-control" name="exampleInputEmail" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
    </div>
  )
}

export default Create
