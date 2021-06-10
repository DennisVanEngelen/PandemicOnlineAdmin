import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginAdmin, IAdmin } from './Components/AdminLogin';

import React, { useState } from 'react';

function App(this: any) : any{

  const [Admin, setAdmin] = useState<IAdmin>()

  const SetLoggedAdmin = () => {setAdmin(Admin)}
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route>
            <LoginAdmin GetAdminData = { SetLoggedAdmin.bind(this) } properties = {{ Username: "", Password: "" }}/>
          </Route>
        </Switch>
     </Router>
    </div>
  );
}
export default App;