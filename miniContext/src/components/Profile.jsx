import React, {useContext} from 'React'
import UserContext from '../context/UserContext'


function Profile() {
    
    const {user} = useContext (UserContext)

    if(!user) return <div>Please Login</div>

    return <div> Welcome {user.lastname}</div>
}

export default Profile
