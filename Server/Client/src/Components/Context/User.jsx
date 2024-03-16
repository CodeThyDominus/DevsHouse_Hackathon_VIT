import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, SetUser] = useState(null);
    const id=Cookies.get('id');
    console.log(id);
    useEffect(()=>{
     (async () => {
       try {
           const {data:{profile}} = await axios.get(`http://localhost:8090/api/profile/${id}`);
           console.log(profile);
           SetUser(profile);
       } catch (err) {
           console.log(err);
       }
    })()
    },[])
    return (
        <UserContext.Provider value={{ user, SetUser }}>
            {children}
        </UserContext.Provider>
    );
};

const useUser = () => useContext(UserContext);

export { useUser, UserProvider };
