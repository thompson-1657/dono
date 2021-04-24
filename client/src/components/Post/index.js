import React, {useState } from 'react'
import { Form } from 'react-bootstrap'

import './style.css'
import API from '../../utils/API'
import Buttons from "../Buttons"
import { useAuth } from "../../contexts/AuthContexts"
import { useGeo } from "../../contexts/GeoContext"


const Post = () => {
    const [formObject, setFormObject] = useState({})
    const { currentUser } = useAuth()
    const { placeid } = useGeo()

    function handleFormChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    function handlePostFormSubmit(event) {
        event.preventDefault()
        // console.log(formObject)
        if (formObject.text) {
            API.createPost({
                text: formObject.text,
                firebaseId: currentUser.uid,
                email: currentUser.email,
                placeid: placeid
            })
                .then(res => console.log("HI"))
                .catch(err => console.log(err));
        }
    }


    return (
        <Form className="poll">
            <Form.Group>
                <Form.Control name="text"
                    onChange={handleFormChange}
                    size="md" type="text" placeholder="Add a community post!" />
            </Form.Group>
            <Buttons
                onClick={handlePostFormSubmit}
                variant="primary" type="submit"
                id="pollSubmit"

            >
                Submit
    </Buttons>

        </Form>
    )

}

export default Post