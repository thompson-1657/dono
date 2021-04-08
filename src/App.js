import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import Main from "./pages/Main";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import { AuthProvider} from "./contexts/AuthContexts"

// library.add(fab)

function App() {
    return (<>
        <AuthProvider>
        <Router>
        <div>
            <Navbar />
           <div className="w-100" style={{maxWidth: "400px"}}>
            <Route  exact path="/" component= {Signup} />
            </div>
        </div>
        </Router>
        </AuthProvider>
        </>
    )
}

export default App;


