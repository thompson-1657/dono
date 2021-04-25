import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContexts"
import { GeoProvider } from "./contexts/GeoContext"
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute"
import Home from './pages/Home'
import Donate from './pages/Donate'
import PreLogin from './pages/PreLogin'
import Connect from './pages/Connect'
import ChatRoom from "./pages/ChatRooms";
import './App.css';

function App() {
    return (
        <>

            <Router>
                <AuthProvider>
                    <GeoProvider>
                    <Switch>
                    <Route exact path='/'>
                        <PreLogin />
                    </Route>
                    <Route path='/signUp'>
                        <Signup />
                    </Route>
                    <Route path='/login'>
                        <Login />
                    </Route>
                    <PrivateRoute path='/message' component={ChatRoom} />
                    <PrivateRoute path='/connect' component={Connect} />
                    <PrivateRoute path='/donate' component={Donate} />
                    <PrivateRoute exact path='/home' component={Home} />
                    </Switch>
                    </GeoProvider>
                </AuthProvider>
            </Router>
        </>
    )
}

export default App;