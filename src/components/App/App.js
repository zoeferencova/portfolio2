import React, { Component } from 'react';
import { HashRouter, Route, withRouter } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import Main from '../../routes/Main/Main';
import About from '../../routes/About/About';
import ProjectPage from '../ProjectPage/ProjectPage'
import projects from '../../utils/project-data';
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

  makeProjectRoutes() {
    const routes = projects.map(project => {
      return <Route exact key={project.code} path={`/${project.code}`} render={(props) => <ProjectPage {...props} code={project.code} logo={project.logo} description={project.description} images={project.images} techstack={project.techstack} links={project.links} next={project.next} />}/> 
    })

    return routes;
  }

  render() {
    return (
      <div className={`App ${this.backgroundColor()}`}>
        <Sidebar />
        <div className={shared.main}>
          <HashRouter basename="/">
            <Route exact path={'/'} component={Main} /> 
            <Route exact path={'/about'} component={About} /> 
            {this.makeProjectRoutes()}
          </HashRouter>
        </div>
      </div>
    );
  }
}

export default withRouter(App)


