import React from "React";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {

    const [user, setUser] = React.useState (null)
    const [lastname, setLastname] = React.useState (null)

    return  (
        <UserContext.Provider value={{user, setUser, lastname, setLastname}}>
            {children}
        </UserContext.Provider>

    )
}

export default UserContextProvider