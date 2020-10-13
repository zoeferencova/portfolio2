import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Kocolabs from '../../images/kocolabs.png'
import Coordinator from '../../images/coordinator.png'
import TravelBuddy from '../../images/travelbuddy.png'
import CommUnity from "../../images/community.png"
import styles from './Main.module.css'
import ScrollAnimation from 'react-animate-on-scroll';

export default class Main extends Component {

    render() {
        return (
            <ScrollAnimation animateIn="fadeIn">
            <div className={styles.container}>
                <Link to="/coordinator" className={styles.project}><span className={styles.name}>Coordinator Tool</span><img src={Coordinator} width="100%" alt="Coordinator tool"></img></Link>
                <Link to="/kocolabs" className={styles.project}><span className={styles.name}>Kocolabs</span><img src={Kocolabs} width="100%" alt="Kocolabs"></img></Link>
                <Link to="/community" className={styles.project}><span className={styles.name}>CommUnity</span><img src={CommUnity} width="100%" alt="TravelBuddy"></img></Link>
                <Link to="/travelbuddy" className={styles.project}><span className={styles.name}>TravelBuddy</span><img src={TravelBuddy} width="100%" alt="TravelBuddy"></img></Link>
            </div>
            </ScrollAnimation>
            
        );
    }
}