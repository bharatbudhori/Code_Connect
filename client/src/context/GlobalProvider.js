import React,{useState} from "react";
import globalContext from './GlobalContext';


const GlobalProvider = ({ children }) => {
    
    const [loggedIn, setLoggedIn] = useState(false);
    
    const value = {
        loggedIn, setLoggedIn
    };
    
    return (
        
            <globalContext.Provider value={value}>
                {children}
            </globalContext.Provider>
       
    );
}
export default GlobalProvider;
