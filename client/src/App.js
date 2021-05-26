import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Gardeners from "./pages/Gardeners";
import Landing from "./pages/Landing";
import Plants from "./pages/Plants";
import Profile from "./pages/Profile";
import Trellis from "./pages/Trellis";
import Private from "./components/Private";
import './App.css';
import AuthContext from './utils/AuthContext';
import NavBar from './components/NavBar';

function App() {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    loading: false,
    user: null,
  });



  return (
    <>
    <AuthContext.Provider value={{ authData: authState, setAuth: setAuthState }}>
      <Router>
          <NavBar />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/plants' component={Plants} />
            <Private exact path='/gardeners' component={Gardeners} />
            <Private exact path='/profile' component={Profile} />
            <Private exact path='/trellis' component={Trellis} />
          </Switch>
      </Router>
      </AuthContext.Provider>
    </>
  );
}

export default App;
