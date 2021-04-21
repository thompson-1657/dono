import React, { useRef, useState, useEffect } from "react"
import { db } from "../../firebase"
import { useAuth } from "../../contexts/AuthContexts"
import { useCollectionData, useCollectionOnce } from "react-firebase-hooks/firestore"
import { FormControl, Button, InputGroup } from "react-bootstrap"
import Row from "../Row"
import Col from "../Col"
import ChatMessage from "../ChatMsg"
import firebase from "firebase/app";
import "firebase/firestore";
import "./style.css"
import { set } from "mongoose"

function ChatRoom() {
    const { currentUser } = useAuth()
    const [room, setRoom] = useState(currentUser.email)
    const [connectID, setConnectId] = useState("")
    const [formValue, setFormValue] = useState('');
    const [userId, setUserId] = useState(currentUser.uid)
    console.log(userId)
    console.log(currentUser.email)
    console.log(room)
    console.log(connectID)

    const chatterID = currentUser.email;
    const chateeID = room;
    const chatIDpre = [];
    chatIDpre.push(chatterID);
    chatIDpre.push(chateeID);
    chatIDpre.sort();
    chatIDpre.join('_');

    const dummy = useRef();

    const usersRef = db.collection('users');
    const chatRoom = db.collection('chatRoom');
    const newMesg = chatRoom
        .doc(chatIDpre.join('_'))
        .collection("room")
        .orderBy('createdAt')
        .limit(10)

    const guestQuery = usersRef.doc(userId).collection("connectRooms").orderBy('email').limit(100);
    const userQuery = usersRef.orderBy('email').limit(100);

    const [messages] = useCollectionData(newMesg, { idField: room });
    console.log(messages)

    const [users] = useCollectionData(userQuery);
    console.log(users)

    const [connect] = useCollectionData(guestQuery);
    console.log(connect)

    const handleGroupClick = async (e) => {
        e.preventDefault()
        setRoom(e.target.className)
        setConnectId(e.target.id)
        console.log(room)
        console.log(connectID)
    }

    const addEmail = async (e) => {
        e.preventDefault();
        console.log("ok")
        const { uid } = currentUser;
        console.log()
        await usersRef
            .doc(uid)
            .collection("connectRooms")
            .add({
                myEmail: currentUser.email,
                email: room,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            })
        await usersRef
            .doc(connectID)
            .collection("connectRooms")
            .add({
                myEmail: room,
                email: currentUser.email,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            })
        setRoom('');
    }

    const sendMessage = async (e) => {
        e.preventDefault();
        const { uid, email } = currentUser;
        console.log(uid)
        await chatRoom
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


                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Users</button>
                                <div class="dropdown-menu">
                                    {users && users.map(user => {
                                        return <li id={user.uid} className={user.email} onClick={handleGroupClick}>
                                            {user.email}
                                        </li>
                                    })}
                                </div>
                            </div>
                            <form className="emailAdd" onSubmit={addEmail}>
                                <input className="msgInput" value={room} onChange={(e) => setRoom(e.target.value)} placeholder="add email.." />
                                <button type="submit" >Connect</button>
                            </form>
                        </div>

                        <ul>
                            {connect && connect.map(user => {
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