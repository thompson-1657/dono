import React, { useRef, useState} from "react"
import { db } from "../../firebase"
import { useAuth } from "../../contexts/AuthContexts"
import { useCollectionData} from "react-firebase-hooks/firestore"
// import { FormControl, InputGroup } from "react-bootstrap"
import Row from "../Row"
import Col from "../Col"
import ChatMessage from "../ChatMsg"
import firebase from "firebase/app";
import "firebase/firestore";
import "./style.css"
// import { set } from "mongoose"
import { BsTrashFill } from 'react-icons/bs'

import styled from "styled-components"

const Button =styled.button`
background-color: #1a262b;
border: none;
color: white;
border-radius: 0 !important;
font-family: "PT Sans Narrow", sans-serif;
width: 100%;
margin-top: 10px;
box-shadow: 0 3px 6px #999, 0 3px 6px #999;
height: 50px;
`


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

    const [connect] = useCollectionData(guestQuery, { idField: "uid" });
    console.log(connect)

    const handleGroupClick = async (e) => {
        e.preventDefault()
        setRoom(e.target.className)
        setConnectId(e.target.id)
        console.log(room)
        console.log(connectID)
    }
    const handleDeleteOnClick = async (e) => {
        e.preventDefault()
        const { uid } = currentUser;
        console.log(e.target.className)
        await usersRef
        .doc(uid)
        .collection("connectRooms")
        .doc(e.target.className)
        .delete()
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
          <div className="container chatRoomContainer">
            <Row>
                <Col size="md-4">
                    <div className="userList">
                        <h2 className="userHeader">Users</h2>
                        <p className="msgDirection">Pick a User to message privately</p>


                        <div className="input-group mb-3 d-flex justify-content-center">
                            <div className="input-group-prepend">
                                <button class="btn dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Users</button>
                                <div className="dropdown-menu">
                                    {users && users.map(user => {
                                        return <li id={user.uid} className={user.email} onClick={handleGroupClick}>
                                            {user.email}
                                        </li>
                                    })}
                                </div>
                            </div>
                            <form className="emailAdd" onSubmit={addEmail}>
                                <input className="msgInput" value={room} onChange={(e) => setRoom(e.target.value)} placeholder="add email.." />
                                <Button className="messageBtn" type="submit" >Message</Button>
                            </form>
                        </div>

                        <ul>
                            {connect && connect.map(user => {
                                return <><li 
                                id="userEmailList"
                                className={user.email} onClick={handleGroupClick}>
                                    {user.email}
                                </li>
                                <button id="deleteButton" className={user.uid} onClick={handleDeleteOnClick}><BsTrashFill /></button>
                                </>
                            })}
                        </ul>
                    </div>
                </Col>
                <Col size="md-8">
                    <div className="msgBack">
                        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

                    </div>
                    <form className="msgSubmit" onSubmit={sendMessage}>
                        <input 
                        id="chatInput"
                        className="msgInput" value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="..." />
                        <button className="sendBtn" type="submit" disabled={!formValue}>Send</button>
                    </form>
                </Col>
            </Row>
            <Row></Row>
            </div>
        </>
    )
}

export default ChatRoom

