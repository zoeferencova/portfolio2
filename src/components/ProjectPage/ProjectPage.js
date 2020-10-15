import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import styles from './ProjectPage.module.css';

const icons = {
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
        return this.props.techstack.map((technology, i) => <li className={styles.technology} key={i}>{technology}</li>);
    }

    makeLinks() {
        const arr = []
        for (let [key, value] of Object.entries(this.props.links)) {
            arr.push(
                <li className={styles.link} key={key}>
                    <span className={styles.icon}>{icons[key]}</span> <a href={value} target="_blank" rel="noopener noreferrer">{key}</a>
                </li>
            )
        }
        return arr;    
    }

    render() {
        return (
            <ScrollAnimation animateIn="fadeIn">
            <div className={`${this.props.code} ${styles.main}`}>
                <div className={styles.info}>
                    <h1 className={styles.subtitle}>{this.props.subtitle}</h1>
                    <div className={`${styles.description} description`}>
                        {this.props.description.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
                    </div>
                    <div className={`${styles.techstack} techstack`}>
                        <ul className={styles.techList}>
                            {this.makeTechStack()}
                        </ul>
                    </div>
                    <div className={styles.links}>
                        <ul className={styles.linkList}>
                            <li className={styles.seeOn}>See on: </li>
                           {this.makeLinks()}
                        </ul>
                    </div>
                </div> 
                <div className={styles.imageOverlay}>
                    <div className={`${styles.images} images`}>
                        {this.makeImages()}
                    </div> 
                </div> 
            </div>
            </ScrollAnimation>
        );
    }
}