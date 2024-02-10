import { createContext,useState } from "react";
    

export const AuthContext =  createContext()

// eslint-disable-next-line react/prop-types
export const AuthContextProvider =({children})=>{
     const [user] = useState({
        name:"Farhan",
     })
     return(

        <AuthContextProvider 
        value ={{
          user
       }}>
       {children}
       </AuthContextProvider>

     )  
  }
