import React, { Component } from 'react';
import { NavLink, HashRouter } from 'react-router-dom';
import projects from '../../utils/project-data';
import styles from './Sidebar.module.css';

export default class Sidebar extends Component {
    state = {
        expanded: false
    }

    makeNavLinks() {
        return projects.map(project => {
            return <li className={styles.project} key={project.code} onClick={e => this.setState({ expanded: false })}><NavLink to={`/${project.code}`}>{project.title}</NavLink></li>
        })
    }

    render() {
        return (
            <div className={styles.nav}>
                <header>
                    <h1 className={styles.greeting}>Hello (<span className={styles.flower}>❀</span>・<span className={styles.mouth}>∀</span>・)ノ゛ <br></br><br></br>I'm Zoe Ferencova, a web developer.</h1>
                </header>
                <span className={styles.menu} onClick={e => !this.state.expanded ? this.setState({ expanded: true }) : this.setState({ expanded: false })}>Menu {!this.state.expanded && <span className={styles.arrow}>▽</span>}{this.state.expanded && <span className={styles.arrow}>△</span>}</span>
                <div className={`${styles.info} ${this.state.expanded ? styles.show : ''}`}>
                <HashRouter basename="/">
                    <ul className={styles.links}>
                        <li onClick={e => this.setState({ expanded: false })}><NavLink exact to='/'>Projects</NavLink></li>
                        {this.makeNavLinks()}
                        <li onClick={e => this.setState({ expanded: false })}><NavLink to='/about'>About Me</NavLink></li>
                    </ul>   
                </HashRouter>
                <address>
                    <ul className={styles.contact}>
                        <li><i className="fas fa-map-marker-alt"></i> Philadelphia</li>
                        <li><a target="_blank" rel="noopener noreferrer"  href="mailto:zoeferecova@gmail.com"><i className="fas fa-envelope"></i> Email me</a></li>
                        <li><a target="_blank" rel="noopener noreferrer"  href="https://github.com/zoeferencova/"><i className="fab fa-github"></i> Github</a></li>
                        <li><a target="_blank" rel="noopener noreferrer"  href="https://www.linkedin.com/in/zoeferencova/"><i className="fab fa-linkedin"></i> LinkedIn</a></li>
                        <li><a target="_blank" rel="noopener noreferrer"  href="https://drive.google.com/file/d/10VOxsr37KxC9ElvKE0Amp_Y0a3xEspnb/view?usp=sharing"><i className="fas fa-file"></i> Resume</a></li>
                    </ul>
                </address>
                </div>
            </div>
        );
    }
}