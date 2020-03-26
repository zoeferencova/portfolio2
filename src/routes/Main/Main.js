import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Kocolabs from '../../images/kocolabs.png'
import Coordinator from '../../images/coordinatortool.png'
import TravelBuddy from '../../images/travelbuddy.png'
import styles from './Main.module.css'
import shared from '../../utils/Shared.module.css'

export default class Main extends Component {
    render() {
        return (
            <div className={styles.container}>
                <Link to="/coordinator" className={styles.coordinator} ><img src={Coordinator} height="350px"></img></Link>
                <Link to="/kocolabs" className={styles.kocolabs}><img src={Kocolabs} height="250px"></img></Link>
                <Link to="/travelbuddy" className={styles.travelbuddy}><img src={TravelBuddy} height="375px"></img></Link>
            </div>
        );
    }
}