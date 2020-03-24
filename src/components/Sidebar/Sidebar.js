import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';
import shared from '../../utils/Shared.module.css';

export default class Sidebar extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to='/'>Selected Work</Link></li>
                    <li><Link to='/coordinator'>Coordinator Tool</Link></li>
                    <li><Link to='/travelbuddy'>TravelBuddy</Link></li>
                    <li><Link to='/kocolabs'>Kocolabs</Link></li>
                    <li><Link to='/about'>About Me</Link></li>
                </ul>
            </div>
        );
    }
}