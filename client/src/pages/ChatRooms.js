import React from "react"
import ChatRoom from "../components/ChatRoom"
import Container from "../components/Container"
import Navbar from '../components/Navbar' 



function ChatRooms(){
    
    return (
        <>
       <Navbar></Navbar>
        <Container className="messageContainer">
           <ChatRoom></ChatRoom>
        </Container>
        </>
    )
}

export default ChatRooms