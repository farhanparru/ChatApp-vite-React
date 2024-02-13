import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
import { Container, Stack } from "react-bootstrap";

const Chat = () => {

    const {userChats,isUserChatsLoading,userChatsError} = useContext(ChatContext)

    console.log("UserChats",userChats);

    return (
     <Container>
        {userChats?.length < 1 ? null :(
         <Stack direction="horizontal" gap={4} 
         className="align-items">
         <Stack className=" messages-box  flex-grow-0 pe-3" gap={3}>
           {isUserChatsLoading && <p>Loading chats...</p>}
           {userChats?.map((chat,index)=>{
            return(
                <div key={index}>
                    
                </div>
            )

           })}
         </Stack>
         <p>ChatBox</p>
        </Stack>
       )}
        
        </Container> 

    )
}
 
export default Chat;