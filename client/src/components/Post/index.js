import React, { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'

import './style.css'
import API from '../../utils/API'
import Buttons from "../Buttons"



const Post = () => {
    const [formObject, setFormObject] = useState({})

    function handleFormChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    function handlePostFormSubmit(event) {
        event.preventDefault()
        // console.log(formObject)
        if (formObject.text) {
            API.createPost({
                text: formObject.text
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