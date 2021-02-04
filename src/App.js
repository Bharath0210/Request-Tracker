import './App.css';
import React from 'react';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import RequestPage from './Pages/RequestPage.js';
import ApprovalPage from './Pages/ApprovalPage';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Navbar from './Pages/Navbar';

function App() {
  return (
    <>
     <Router>
      <Navbar />
      <Switch>
      <Route path = "/" exact component ={Home} />  
      <Route path = "/Dashboard" component ={Dashboard} />  
      <Route path = "/Request" component ={RequestPage} />
      <Route path = "/Approval" component ={ApprovalPage} />
      </Switch>
      </Router>
      </>
  )
}
export default App;
