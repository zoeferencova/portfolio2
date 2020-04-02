import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import Main from '../../routes/Main/Main';
import About from '../../routes/About/About';
import ProjectPage from '../ProjectPage/ProjectPage'
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage';
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
      case '/portfolio':
        return 'white'
      default:
        return 'white';
    }
  }

  makeProjectRoutes() {
    const routes = projects.map(project => {
      return <Route key={project.code} path={`/${project.code}`} render={(props) => <ProjectPage {...props} code={project.code} logo={project.logo} description={project.description} images={project.images} techstack={project.techstack} links={project.links} next={project.next} />}/> 
    })

    return routes;
  }

  render() {
    return (
      <div className={`App ${this.backgroundColor()}`}>
        <Sidebar />
        <div className={shared.main}>
          <Switch>
            <Route path={'/portfolio'} component={Main} /> 
            <Route path={'/about'} component={About} /> 
            {this.makeProjectRoutes()}
            <Route component={NotFoundPage} /> 
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(App)


