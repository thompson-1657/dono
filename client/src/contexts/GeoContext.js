import React, { createContext, useState, useEffect, useContext } from 'react'
import axios from 'axios'

export const GeoContext = createContext(null)

const API_KEY = process.env.REACT_APP_MAPBOX_API
// import Location from '../components/Location'

const GeoContexts = React.createContext()

export function useGeo() {
    return useContext(GeoContexts)
}


export function GeoProvider({ children }) {

    const [location, setLocation] = useState("dono cannot find your location")
    const [placeid, setPlaceid] = useState("place.12345")

    useEffect(() => {
        locationAPI()
    }, [])

    function locationAPI() {
        var options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };

        function success(pos) {
            var crd = pos.coords;

            console.log('Your current position is:');
            console.log(`Latitude : ${crd.latitude}`);
            console.log(`Longitude: ${crd.longitude}`);
            console.log(`More or less ${crd.accuracy} meters.`);
            // console.log(`https://api.mapbox.com/geocoding/v5/mapbox.places/${crd.longitude},${crd.latitude}.json?access_token=${API_KEY}`)

            axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${crd.longitude},${crd.latitude}.json?access_token=${API_KEY}`)
                .then(res => {

                    console.log(res)
                    for (var i = 0; i < res.data.features.length; i++) {
                        if (res.data.features[i].place_type[0] === "place") {
                            // console.log(res.data.features[i].place_name)
                            setLocation(res.data.features[i].place_name)
                            setPlaceid(res.data.features[i].id)

                        }
                    }
                    // setLocation()
                })

        }

        function error(err) {
            console.warn(`ERROR(${err.code}): ${err.message}`);
        }

        navigator.geolocation.getCurrentPosition(success, error, options);
    }


    const locationValue = {
        location,
        placeid,
        setPlaceid,
        setLocation
    }

    // console.log(location)

    return (
        <GeoContexts.Provider value={locationValue}>
            {children}
        </GeoContexts.Provider>
    )
}