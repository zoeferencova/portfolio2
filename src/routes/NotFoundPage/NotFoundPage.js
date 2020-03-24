import React, { Component } from 'react';
import styles from './NotFoundPage.module.css';
import shared from '../../utils/Shared.module.css'

export default class NotFoundPage extends Component {
    render() {
        return (
            <div>
                <h1>404 - Page not found</h1>
                <p>Try going back to your previous page.</p>
            </div>
        )
    }
}