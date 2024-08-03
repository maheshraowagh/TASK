import { useContext, useState } from "react";
import {createContext} from "react"

export const AuthContext = createContext();

export const AuthProvider = ({children})=>{

    const [token, setToken] = useState(localStorage.getItem("token"))
    const[isAdmin, setIsAdmin] = useState(localStorage.getItem("isAdmin"))

const storetokenInLS =(serverToken)=>{
    console.log(serverToken)
    setToken( serverToken.token);
    setIsAdmin(serverToken.isAdmin)
  return localStorage.setItem("token", serverToken.token)
}

let isLoggedIn = !!token;

const LogoutUser = ()=>{
 setToken("");
 return localStorage.removeItem("token")
}


return (<AuthContext.Provider value={{storetokenInLS,LogoutUser,isLoggedIn,isAdmin}}>
    {children}
</AuthContext.Provider>)
}


export const useAuth = ()=>{
    const authContextValue = useContext(AuthContext);
    if(!authContextValue){
        throw new Error("useAuth used outside of the Provider");
    }
    return authContextValue;
}


