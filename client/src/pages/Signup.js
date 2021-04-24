import React, { useRef } from "react"
import { Form, Card } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContexts"
import { Link, useHistory } from "react-router-dom"
import Buttons from "../components/Buttons"
import Circle from "../components/Circle"
import API from "../utils/API"
import "../App.css"


export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { currentUser, signup } = useAuth()
    const history = useHistory()


    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await signup(emailRef.current.value, passwordRef.current.value);
            console.log(currentUser.uid)
            API.createUser({
                email: emailRef.current.value,
                firebaseId: currentUser.uid
                // firebaseId: uidRef.current.value
            })
            .then(res => {
                history.push("/home")
                console.log("hi")
            })
            .catch(err => console.log(err));
        } catch {
            console.log("error")
        }
    }
    return (
        <div className="signUpContainer container">
            <Card className="container" id="signUpCard">
                <Card.Body>
                    <h2 className="text-center mb-4">Signup</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Buttons className="w-100" type="submit">SignUp</Buttons>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                already have an account <Link className="loginLink" to="/login">Log in</Link>
            <Circle />
            </div>
        </div>
    )

}