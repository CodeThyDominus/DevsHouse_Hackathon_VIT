import { createContext,useContext,useState } from "react";

const UserContext=createContext();

const UserProvider=({children})=>{
    const [user,SetUser]=useState(null);
   return(
    <UserContext.Provider value={{user,SetUser}}>
        {children}
    </UserContext.Provider>
   )
}

const useUser=()=>useContext(UserContext);

export {useUser,UserProvider};