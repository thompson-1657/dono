import React, { useRef } from "react"
import { Form, Button, Card } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContexts"
import { Link, useHistory } from "react-router-dom"


export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login, currentUser } = useAuth()
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault();
        try {
           await login(emailRef.current.value, passwordRef.current.value);
            history.push("/home")
        } catch{
            console.log("error")
        }
    }
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Login</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Button className="w-100" type="submit">Login</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Link to="/signup">Sign up</Link>
            </div>
        </>
    )

}

