import { useContext } from "react";
import { ChatContext } from "../../context/ChatContext";

const  PotentialChats= () => {
    const {potentialChats} = useContext(ChatContext)
    console.log("PotentialChtas",potentialChats);
    return ( <>Start Chats</>);
}
 
export default  PotentialChats;