import React,{ useRef } from "react"
import { Form, Button, Card } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContexts"
import {Link, useHistory } from "react-router-dom"


export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { signup, currentUser } = useAuth()
    const mainPage = useHistory()

    function handleSubmit(e) {
        e.preventDefault();
        signup(emailRef.current.value, passwordRef.current.value)
        mainPage.push("/")
    }
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Signup</h2>
                    { currentUser && currentUser.email}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Button className="w-100" type="submit">SignUp</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                already have an account <Link to="/login">Log in</Link> 
            </div>
        </>
    )

}