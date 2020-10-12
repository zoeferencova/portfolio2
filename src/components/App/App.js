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
  makeProjectRoutes() {
    const routes = projects.map(project => {
      return <Route key={project.code} path={`/${project.code}`} render={(props) => <ProjectPage {...props} code={project.code} logo={project.logo} description={project.description} images={project.images} techstack={project.techstack} links={project.links} next={project.next} />}/> 
    })

    return routes;
  }

  render() {
    return (
      <div className="App">
        <Sidebar />
        <div className={shared.main}>
          <HashRouter basename="/">
            <Route exact path={'/'} component={Main} /> 
            <Route path={'/about'} component={About} /> 
            {this.makeProjectRoutes()}
          </HashRouter>
        </div>
      </div>
    );
  }
}

export default withRouter(App)


