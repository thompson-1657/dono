import React, { createContext, useState, useEffect, useContext } from 'react'
import axios from 'axios'

export const GeoSearchContext = createContext(null)

const API_KEY = process.env.REACT_APP_MAPBOX_API
// import Location from '../components/Location'

const GeoSearchContexts = React.createContext()

export function useGeoSearch() {
    return useContext(GeoSearchContexts)
}

export function GeoSearchProvider({ children }) {

    const [searchLocation, setSearchLocation] = useState()
    const [searchPlaceid, setSearchPlaceid] = useState()

    locationSearch()

    function locationSearch() {

        axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${x}.json?access_token=${API_KEY}`)
        .then(res => {

            console.log(res)
            for (var i = 0; i < res.data.features.length; i++) {
                if (res.data.features[i].place_type[0] == "place") {
                    console.log(res.data.features[i].place_name)
                    console.log(res.data.features[i].id)

                    setSearchLocation(res.data.features[i].place_name)
                    setSearchPlaceid(res.data.features[i].id)
                    
                }
            }
        })
        .catch(err => console.log(err));


    }

    
    const searchLocationValue = {
        searchLocation,
        searchPlaceid
    }


    return (
        <GeoSearchContexts.Provider value={searchLocationValue}>
            {children}
        </GeoSearchContexts.Provider>
    )
}