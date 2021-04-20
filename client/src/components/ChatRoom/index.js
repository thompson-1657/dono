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
    const [userId, setUserId] = useState(currentUser.uid)
    console.log(userId)
    console.log(currentUser.email)

    const chatterID = currentUser.email;
    const chateeID = room;
    const chatIDpre = [];
    chatIDpre.push(chatterID);
    chatIDpre.push(chateeID);
    chatIDpre.sort();
    chatIDpre.join('_');





    const dummy = useRef();

    const messagesRef = db.collection('users').doc(userId).collection(room)
    const messageRef = db.collection('users').doc(room).collection(userId)
    const usersRef = db.collection('users');
    const newMesg = usersRef
        .doc(chatIDpre.join('_'))
        .collection("room")
        .orderBy('createdAt')
        .limit(10)

    const query = messagesRef.orderBy('createdAt').limit(100) || messageRef.orderBy('createdAt').limit(100)
    console.log(query)
    const userQuery = usersRef.orderBy('email').limit(100);

    const [messages] = useCollectionData(newMesg, { idField: room });
    console.log(messages)

    const [users] = useCollectionData(userQuery);
    console.log(users)




    const handleGroupClick = async (e) => {
        e.preventDefault()
        setRoom(e.target.className)
        console.log(room)
    }



    const sendMessage = async (e) => {
        e.preventDefault();
        const { uid, email } = currentUser;
        console.log(uid)
        await usersRef
            .doc(chatIDpre.join('_'))
            .collection("room")
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