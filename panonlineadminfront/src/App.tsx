import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginAdmin, IAdmin } from './Components/AdminLogin';
import NavBar from './Components/NavBar';
import React, { useState } from 'react';
import { UserManager } from './Components/UserManager';

function App(){
  
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          <Route path = "/Login">
            <LoginAdmin properties = {{ Username: "", Password: "" }}/>
          </Route>
          <Route path = "/Management">
            <UserManager/>
          </Route>
        </Switch>
     </Router>
    </div>
  )
}
export default App;