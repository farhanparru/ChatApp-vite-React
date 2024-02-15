import { createContext, useEffect, useState } from "react";
import { baseUrl,getRequest, postRequest } from "../utils/services"


export const ChatContext = createContext()

// eslint-disable-next-line react/prop-types
    export const ChatContextProvider = ({children,user})=>{
    const [userChats,setUserChats] = useState(null)
    const [isUserChatsLoading,setIsUserChatsLoading] = useState(false)
    const [userChatsError,setUserChatsError] = useState(null);
    const [potentialChats,setPotentialChats] =useState([])
   

    useEffect(()=>{
    
      const getUsers = async() =>{

        const response = await getRequest(`${baseUrl}/users`)
        // console.log(response,"hai");

        if(response.error){
        return console.log("Error fethcing users",response);
        }

       const Chatsp =  response.filter((e)=>{
        let isChatCreated = false
            // eslint-disable-next-line react/prop-types
            if(user._id === e._id) return false
            if(userChats){
              userChats?.some((chat)=>{
                return chat.members[0] ===e._id
              })
            }

        });
      };


    getUsers()
    }) 

       
   






    useEffect(()=>{
       const getUserChats = async()=>{
           // eslint-disable-next-line react/prop-types
           if(user?._id){
            setIsUserChatsLoading(true)
            setUserChatsError(null)
             // eslint-disable-next-line react/prop-types
             const response = await getRequest(`${baseUrl}/chats/${user?._id}`)

             setIsUserChatsLoading(false)

             if(response.error){
                return setUserChatsError(response)
             }
             setUserChats(response)
           }
       }
     getUserChats()
    },[user])

    return (
    <ChatContext.Provider value={{
        userChats,
        isUserChatsLoading,
        userChatsError,
       
       
    }}>
    {children}
    </ChatContext.Provider>
    );
};
