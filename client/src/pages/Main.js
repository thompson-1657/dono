import React from "react"
import { Button } from "react-bootstrap"
import { useHistory } from  "react-router-dom"
const nodeFetch = require('node-fetch');


const phq = require('predicthq');
// Initialises PredictHQ client library using your access token
// Note: You can find/create your access token at https://control.predicthq.com/clients
const client = new phq.Client({access_token: 'wl5feWUp3HyMfrj2TSeuUiVk8-ZBe47XWUp9-JZr', fetch: nodeFetch});

// Use the events endpoint
const phqEvents = client.events;
const logEventsToConsole = events => {
    for (const event of events) {
        // See https://developer.predicthq.com/resources/events/#fields for list of all event fields.
        console.log(event);
        console.log();
    }
};

// 10km range around the -36.844480,174.768368 geopoint
const withinParam = '10km@-36.844480,174.768368';

// Event search using `within` parameter.
// See https://developer.predicthq.com/resources/events/#parameters for all available search parameters.
phqEvents.search({within: withinParam, category: "community", label: "food-drives" 
})
    .then(logEventsToConsole)
    .catch(err => console.error(err));

// OR if you know the place ID - example below search for events within the New York state (ID: 5128638)
// Sort by start date in descending order
phqEvents.search({'place.scope': '5128638', 'sort': '-start'})
    .then(logEventsToConsole)
    .catch(err => console.error(err));


function Main(){
    const history = useHistory()
    function handleLogout(){
        history.push("/login")
    }
    return(
        <>
        <Button variant="link" onClick={handleLogout}>Log Out</Button>
        </>
    )
}

export default Main 