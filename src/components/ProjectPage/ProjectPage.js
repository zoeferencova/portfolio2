import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import styles from './ProjectPage.module.css';

const icons = {
    // "ReactJS": <i className="fab fa-react"></i>,
    // "Node.js": <i className="fab fa-node-js"></i>,
    // "HTML": <i className="fab fa-html5"></i>,
    // "CSS": <i className="fab fa-css3-alt"></i>,
    // "JavaScript": <i className="fab fa-js-square"></i>,
    // "Liqiud": <i className="fab fa-shopify"></i>,
    // "Adobe Illustrator": <i className="fab fa-adobe"></i>,
    // "D3.js": <img src="https://raw.githubusercontent.com/d3/d3-logo/master/d3-outline.png" height="10px" alt="D3 logo"></img>,
    // "Express.js": <img src="https://www.titechglobal.com/wp-content/uploads/2017/08/ex.png" height="10px" alt="Express.js logo"></img>,
    // "PostgreSQL": <img src="https://cdn.onlinewebfonts.com/svg/img_145825.png" height="10px" alt="PostgreSQL logo"></img>,
    // "JWT": <i className="fas fa-unlock-alt"></i>,
    // "jQuery": <img src="https://cdn4.iconfinder.com/data/icons/scripting-and-programming-languages/512/jquery-512.png" height="10px" alt="jQuery logo"></img>,
    "Github": <i className="fab fa-github"></i>,
    "Github Frontend": <i className="fab fa-github"></i>,
    "Github Backend": <i className="fab fa-github"></i>,
    "Website": <i className="fas fa-external-link-alt"></i>,
    "Instagram": <i className="fab fa-instagram"></i>,
}

export default class ProjectPage extends Component {
    makeImages() {
        return this.props.images.map((image, i) => {
            return(
                <img key={image} src={require(`../../images/${this.props.code}/${image}`)} alt={`${this.props.title}`} />
            )
        })
    }

    makeTechStack() {
        return this.props.techstack.map(technology => <li className={styles.technology}>{technology}</li>);
    }

    makeLinks() {
        const arr = []
        for (let [key, value] of Object.entries(this.props.links)) {
            arr.push(
                <div className={styles.link} key={key}>
                    <span className={styles.icon}>{icons[key]}</span> <a href={value} target="_blank" rel="noopener noreferrer">{key}</a>
                </div>
            )
        }
        return arr;    
    }

    render() {
        return (
            <ScrollAnimation animateIn="fadeIn">
            <div className={`${this.props.code} ${styles.main}`}>
                <Link to={this.props.next} className={`${styles.next} ${styles.nextMobile}`}>Next Project →</Link>          
                <div className={styles.info}>
                    <div className={`${styles.description} description`}>
                        {this.props.description}
                    </div>
                    <div className={`${styles.techstack} techstack`}>
                        <ul className={styles.techList}>
                            {this.makeTechStack()}
                        </ul>
                    </div>
                    <div className={styles.links}>
                        <span className={styles.seeOn}>See on: </span> {this.makeLinks()}
                    </div>
                    <Link to={this.props.next} className={`${styles.next} next`}>Next Project →</Link>
                </div>  
                <div className={`${styles.images} images`}>
                    {this.makeImages()}
                </div> 
            </div>
            </ScrollAnimation>
        );
    }
}