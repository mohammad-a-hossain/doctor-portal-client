import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

import React, { createContext, useState } from 'react';

import Home from './components/home/home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';
import Login from './components/Login/Login';
import Dashboard from './components/dashboard/Dashboard/Dashboard';
import AllPatients from './components/allPatients/Allpatients/Allpatients';
import AddDoctor from './components/addDoctor/AddDoctor';
import PrivateRoute from './components/Login/privateRoute/PrivateRoute';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
     <Router>
       <Switch>
         <Route exact path='/'>
         <Home></Home>
         </Route>
         <Route path='/appointment'>
         <Appointment></Appointment>
         </Route>
          <Route path="/addDoctor">
            <AddDoctor></AddDoctor>
          </Route> 
         <PrivateRoute path='/dashboard'>
         <Dashboard></Dashboard>
         </PrivateRoute>
         <PrivateRoute path="/dashboard/allPatients">
            <AllPatients></AllPatients>
          </PrivateRoute>
         <Route path='/Login'>
         <Login></Login>
         </Route>
       </Switch>
     </Router>
      </UserContext.Provider>
  );
}

export default App;
