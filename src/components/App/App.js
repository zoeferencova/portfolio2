import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import Main from '../../routes/Main/Main';
import About from '../../routes/About/About';
import Kocolabs from '../../routes/Kocolabs/Kocolabs';
import TravelBuddy from '../../routes/TravelBuddy/TravelBuddy';
import CoordinatorTool from '../../routes/CoordinatorTool/CoordinatorTool';
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Sidebar />
        <Switch>
          <Route exact path={'/'} component={Main} /> 
          <Route path={'/about'} component={About} /> 
          <Route path={'/coordinator'} component={CoordinatorTool} /> 
          <Route path={'/kocolabs'} component={Kocolabs} /> 
          <Route path={'/travelbuddy'} component={TravelBuddy} /> 
          <Route component={NotFoundPage} /> 
        </Switch>
      </div>
    );
  }
}


