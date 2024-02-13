import { createContext, useEffect, useState } from "react";
import { baseUrl,getRequest,postRequest } from "../utils/services"

export const ChatContext = createContext()

// eslint-disable-next-line react/prop-types
export const ChatContextProvider = ({children,user})=>{
    const [userChats,setUserChats] = useState(null)
    const [isUserChatsLoading,setIsUserChatsLoading] = useState(false)
    const [userChatsError,setUserChatsError] = useState(null);

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
        userChatsError
    }}>
    {children}
    </ChatContext.Provider>
    );
};
