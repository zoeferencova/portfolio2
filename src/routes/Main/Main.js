import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Kocolabs from '../../images/kocolabs.png'
import Coordinator from '../../images/coordinatortool.png'
import TravelBuddy from '../../images/travelbuddy.png'
import styles from './Main.module.css'
import ScrollAnimation from 'react-animate-on-scroll';

import shared from '../../utils/Shared.module.css'

export default class Main extends Component {

    render() {
        return (
            <ScrollAnimation animateIn="fadeIn">
            <div className={styles.container}>
                <Link to="/coordinator" className={styles.coordinator}><span className={styles.projectName}>Coordinator Tool</span><img src={Coordinator} width="100%"></img></Link>
                <Link to="/kocolabs" className={styles.kocolabs}><span className={styles.projectName}>Kocolabs</span><img src={Kocolabs} width="100%"></img></Link>
                <Link to="/travelbuddy" className={styles.travelbuddy}><span className={styles.projectName}>TravelBuddy</span><img src={TravelBuddy} width="100%"></img></Link>
            </div>
            </ScrollAnimation>
            
        );
    }
}