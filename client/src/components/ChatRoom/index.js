import React, { useRef, useState, useEffect } from "react"
import { db } from "../../firebase"
import { useAuth } from "../../contexts/AuthContexts"
import { useCollectionData, useCollectionOnce } from "react-firebase-hooks/firestore"
import Row from "../Row"
import Col from "../Col"
import ChatMessage from "../ChatMsg"
import firebase from "firebase/app";
import "firebase/firestore";
import "./style.css"

function ChatRoom() {
    const { currentUser } = useAuth()
    const [room, setRoom] = useState(currentUser.email)
    const [formValue, setFormValue] = useState('');

    console.log(currentUser.email)

    const dummy = useRef();

    const messagesRef = db.collection('messages').doc(room).collection("messages")
    const msgRef = db.collection('messages')
    const usersRef = db.collection('users');
    const roomsRef = db.collection('rooms');

    const query = messagesRef.orderBy('createdAt').limit(100);
    console.log(query)
    const userQuery = usersRef.orderBy('email').limit(100);
    // const roomQuery = roomsRef.orderBy('id').collection("msg").limit(100);

    const [messages] = useCollectionData(query, { idField: room });
    console.log(messages)

    const [users] = useCollectionData(userQuery);
    console.log(users)

    // const [room] = useCollectionData(roomQuery)
    // console.log(room)

    const handleGroupClick = async (e) => {
        e.preventDefault()
        setRoom(e.target.className)
        console.log(room)
    }

    const sendMessage = async (e) => {
        e.preventDefault();
        const { uid, email } = currentUser;
        console.log(uid)
        await msgRef
            .doc(room)
            .collection("messages")
            .add({
                text: formValue,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                uid,
                sentTo: room,
                email
            })
        setFormValue('');
        // dummy.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <>
            <Row>
                <Col size="md-4">
                    <div className="userList">
                        <h3>Users</h3>
                        <ul>
                            {users && users.map(user => {
                                return <li className={user.email} onClick={handleGroupClick}>
                                    {user.email}
                                </li>
                            })}
                        </ul>
                    </div>
                </Col>
                <Col size="md-8">
                    <div className="msgBack">
                        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

                    </div>
                    <form className="msgSubmit" onSubmit={sendMessage}>
                        <input className="msgInput" value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="..." />
                        <button type="submit" disabled={!formValue}>submit</button>
                    </form>
                </Col>
            </Row>

        </>
    )
}

export default ChatRoom