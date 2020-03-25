import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import Main from '../../routes/Main/Main';
import About from '../../routes/About/About';
import Kocolabs from '../../routes/Kocolabs/Kocolabs';
import TravelBuddy from '../../routes/TravelBuddy/TravelBuddy';
import CoordinatorTool from '../../routes/CoordinatorTool/CoordinatorTool';
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage';
import shared from '../../utils/Shared.module.css'
import './App.css';

class App extends Component {
  backgroundColor() {
    switch (this.props.location.pathname) {
      case '/coordinator':
        return 'green'
      case '/kocolabs':
        return 'blue'
      case '/travelbuddy':
        return 'yellow'
      case '/about':
        return 'indigo'
      case '/':
        return 'white'
      default:
        return 'white';
    }
  }

  render() {
    return (
      <div className={`App ${this.backgroundColor()}`}>
        <Sidebar />
        <div className={shared.main}>
          <Switch>
            <Route exact path={'/'} component={Main} /> 
            <Route path={'/about'} component={About} /> 
            <Route path={'/coordinator'} component={CoordinatorTool} /> 
            <Route path={'/kocolabs'} component={Kocolabs} /> 
            <Route path={'/travelbuddy'} component={TravelBuddy} /> 
            <Route component={NotFoundPage} /> 
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(App)


