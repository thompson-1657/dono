import React from "react"
import { useAuth } from "../../contexts/AuthContexts"
import "./style.css"

export default function ChatMessage(props) {
    const { currentUser } = useAuth()
    const { text, uid, email } = props.message;

    const messageClass = uid === currentUser.uid ? 'sent' : 'received';
    console.log(messageClass)
    return (<>
        <div className={`message ${messageClass} ${uid}`}>
            <p className="textBox">
                {email}:
                <br></br>
                {text}</p>
        </div>
    </>)
}