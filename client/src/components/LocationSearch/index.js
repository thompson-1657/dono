import React, { useContext, useState } from "react";
// import { Link } from "react-router-dom";
// import { useAuth } from "../../contexts/AuthContexts"
// import "./style.css";
import { useGeo } from "../../contexts/GeoContext"
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'
import Buttons from '../Buttons'
import Card from 'react-bootstrap/Card'
import axios from "axios";


const API_KEY = process.env.REACT_APP_MAPBOX_API

const LocationSearch = () => {

    // const [location, setLocation] = useState("dono is unable to find your location")
    // const [placeid, setPlaceid] = useState("place.6694790146427640")
    const { location } = useGeo()
    const [formObject, setFormObject] = useState({})
    const [newLocation, setNewLocation] = useState()
    const [newPlaceid, setNewPlaceid] = useState()

    // useEffect(() => {
    //     s()
    // }, [])

    function handleFormChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };



    function handleSearchLocationSubmit(event) {
        event.preventDefault()
        console.log(formObject.place)
        axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${formObject.place}.json?access_token=${API_KEY}`)
        .then(res => {

            console.log(res)
            for (var i = 0; i < res.data.features.length; i++) {
                if (res.data.features[i].place_type[0] == "place") {
                    console.log(res.data.features[i].place_name)
                    console.log(res.data.features[i].id)

                    setNewLocation(res.data.features[i].place_name)
                    setNewPlaceid(res.data.features[i].id)
                    
                }
            }
        })
        .catch(err => console.log(err));


    }

    return (

        <Accordion defaultActiveKey="1">

            {/* <Card> */}
            {/* <Card.Header> */}
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Change location?
          </Accordion.Toggle>
            {/* </Card.Header> */}
            <Accordion.Collapse eventKey="0">
                <Card.Body>

                    <Form>
                        <Form.Row>

                            <Col>
                                <Form.Control
                                    onChange={handleFormChange}
                                    name="place"
                                    placeholder="Enter place" />
                            </Col>
          
                            <Col xs="auto">
                                <Buttons
                                onClick={handleSearchLocationSubmit}
                                    type="submit"
                                    value="location"
                                >Set location</Buttons>

                            </Col>

                        </Form.Row>
                    </Form>

                </Card.Body>
            </Accordion.Collapse>
            {/* </Card> */}

        </Accordion>
    )
}

export default LocationSearch