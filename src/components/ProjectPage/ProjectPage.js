import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './ProjectPage.module.css';
import './kocolabs.css';
import './travelbuddy.css';
import './coordinator.css';
import shared from '../../utils/Shared.module.css';

const icons = {
    "ReactJS": <i class="fab fa-react"></i>,
    "Node.js": <i class="fab fa-node-js"></i>,
    "HTML": <i class="fab fa-html5"></i>,
    "CSS": <i class="fab fa-css3-alt"></i>,
    "JavaScript": <i class="fab fa-js-square"></i>,
    "Liqiud (Shopify template language)": <i class="fab fa-shopify"></i>,
    "Adobe Illustrator": <i class="fab fa-adobe"></i>,
    "D3.js": <img src="https://raw.githubusercontent.com/d3/d3-logo/master/d3-outline.png" height="10px"></img>,
    "Express.js": <img src="https://www.titechglobal.com/wp-content/uploads/2017/08/ex.png" height="10px"></img>,
    "PostgreSQL": <img src="https://cdn.onlinewebfonts.com/svg/img_145825.png" height="10px"></img>,
    "JWT Authentication": <i class="fas fa-unlock-alt"></i>,
    "jQuery": <img src="https://cdn4.iconfinder.com/data/icons/scripting-and-programming-languages/512/jquery-512.png" height="10px"></img>,
    "Github": <i class="fab fa-github"></i>,
    "Github Frontend": <i class="fab fa-github"></i>,
    "Github Backend": <i class="fab fa-github"></i>,
    "Website": <i class="fas fa-external-link-alt"></i>,
    "Instagram": <i class="fab fa-instagram"></i>,
}

export default class ProjectPage extends Component {
    makeImages() {
        return this.props.images.map(image => {
            return(
                <img className={styles.image} key={image} src={require(`../../images/${image}`)} />
            )
        })
    }

    makeTechStack() {
        return this.props.techstack.map(technology => {
            return (
                <div className={styles.technology} key={technology}>
                    <span className={styles.icon}>{icons[technology]}</span> {technology}
                </div>
            )
        })
    }

    makeLinks() {
        const arr = []
        for (let [key, value] of Object.entries(this.props.links)) {
            arr.push(
                <div className={styles.links} key={key}>
                    <span className={styles.icon}>{icons[key]}</span> <a href={value} target="_blank">{key}</a>
                </div>
            )
        }
        return arr;    
    }

    render() {
        return (
            <div className={`${this.props.code} ${styles.main}`}>
                <header>{this.props.code === "travelbuddy" ? <div className={styles.travelbuddyLogo}><i class="fas fa-map-marker-alt"></i><span>travelbuddy</span></div> : <img className={styles.logo} src={require(`../../images/${this.props.logo}`)} />}</header>
                {this.makeImages()}
                <div className={styles.links}>
                    {this.makeLinks()}
                </div>
                <div className={styles.description}>
                    {this.props.description}
                </div>
                <div className={styles.techstack}>
                    {this.makeTechStack()}
                </div>
                <Link to={this.props.next} className={styles.next}>Next Project →</Link>
            </div>
        );
    }
}