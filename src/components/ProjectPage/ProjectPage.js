import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './ProjectPage.module.css';
import './kocolabs.css';
import './travelbuddy.css';
import './coordinator.css';
import shared from '../../utils/Shared.module.css';

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
                <div className={styles.techstack} key={technology}>
                    {technology}
                </div>
            )
        })
    }

    render() {
        return (
            <div className={this.props.code}>
                <header><h2 className={styles.title}>{this.props.title}</h2></header>
                {this.makeImages()}
                <div className={styles.description}>
                    {this.props.description}
                </div>
                <div className={styles.links}>
                    {this.props.links}
                </div>
                {this.makeTechStack()}
                <Link to={this.props.next}>Next Project →</Link>
            </div>
        );
    }
}