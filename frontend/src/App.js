import React from 'react';
import AddUser from './components/AddUser';
import {BrowserRouter,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import UserView from './components/UserView';
import ReportView from './components/ReportView';

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
        <Route component={Navbar}></Route>
        <Route exact path="/add" component={AddUser}></Route>
        <Route exact path="/" component={UserView}></Route>
        <Route exact path="/" component={ReportView}></Route>
      </BrowserRouter>
      
    </div>
  );
}

export default App;