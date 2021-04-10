import React from "react"
import { useAuth } from "/Users/davidroman/Desktop/project3/src/contexts/AuthContexts.js"
import { Route, Redirect } from "react-router-dom"

function PrivateRoute({component: Component, ...rest}) {
    const { currentUser } = useAuth()
    return (
        <Route
            {...rest}
            render={props => {
                 return currentUser ? <Component {...props}/> : <Redirect to="/login" />
            }}>
        </Route>
    )

}

export default PrivateRoute