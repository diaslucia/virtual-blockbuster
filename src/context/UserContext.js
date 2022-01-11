import React, { useState } from "react";
import { setLocalStorage, removeLocalStorage } from "../utils/HelperLocalStorage" 

const Context = React.createContext();

export const UserContextProvider = ({children}) => {
    const [user, setUser] = useState();

    const login = (objUserLogin) => {
        setUser({
            username: objUserLogin.username,
            email: objUserLogin.email
        });
        setLocalStorage("user", objUserLogin);
    }
    
    const logout = () => {
        setUser();
        removeLocalStorage("user");
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