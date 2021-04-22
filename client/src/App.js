import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContexts"
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import Main from "./pages/Main";
// import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute"
import Home from './pages/Home'
// import Poll from './components/Poll'
// import Feed from './components/Feed'
// import Chat from './components/Chat'
// import Menu from './components/Menu'
import Donate from './pages/Donate'
import ChatRooms from './pages/ChatRooms'
import PreLogin from './pages/PreLogin'
import Connect from './pages/Connect'
import ChatRoom from "./pages/ChatRooms";
// library.add(fab)


function App() {
    return (
        <>

            <Router>
                <AuthProvider>
                    <Switch>
                        <Route exact path='/' component={PreLogin} />
                        <Route path='/signUp' component={Signup} />
                        <Route path='/login' component={Login} />
                        <PrivateRoute path='/message' component={ChatRoom} />
                        <PrivateRoute path='/connect' component={Connect} />
                        <PrivateRoute path='/donate' component={Donate} />
                        <PrivateRoute exact path='/home' component={Home} />
                    </Switch>
                </AuthProvider>
            </Router>
        </>
    )
}

export default App;