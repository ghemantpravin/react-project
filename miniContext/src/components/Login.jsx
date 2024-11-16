import React, { useContext, useState } from 'React'
import UserContext from '../context/UserContext';

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [lastname, setlastname] = useState('');

    const {setUser} = useContext (UserContext)

    function HandleSubmit(e){
        e.preventDefault()
        setUser ({username, password, lastname})
    }

  return (
    <div className='container'>
        <h2>Login</h2>
        <input type='text' placeholder='Username' value={username} 
        onChange={(e) => setUsername(e.target.value)}></input> {"   "}
        <input type='text' placeholder='Password' value={password}
        onChange={(e) => setPassword(e.target.value)}></input> {"   "}
        <input type='text' placeholder='Lastname' value={lastname}
        onChange={(e) => setlastname(e.target.value)}></input>
        <button onClick={HandleSubmit}>Submit</button>
    </div>
  )
}

export default Login
