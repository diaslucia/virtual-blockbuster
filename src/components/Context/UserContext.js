import React, { useState } from "react";

const Context = React.createContext()

export const UserContextProvider = ({children}) => {
    const [user, setUser] = useState();

    const login = (objUserLogin) => {
        setUser({
            username: objUserLogin.username,
            email: objUserLogin.email
        });
        /* window.localStorage.setItem("user", JSON.stringify(objUserLogin)) */
    }
    const logout = () => {
        setUser();
    }

    return(
        <Context.Provider value={{
                                user,
                                login,
                                logout     
                                }}>
            {children}
        </Context.Provider>
    )
}

export default Context