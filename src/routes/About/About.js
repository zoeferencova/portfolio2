import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import styles from './About.module.css';

export default class About extends Component {
    state = {
        catHover: false
    }

    render() {
        return (
            <ScrollAnimation animateIn="fadeIn">
                <div className={styles.main}>
                    <p className={styles.aboutText}>My name is Zoe Ferencova. I am a web developer originally from the Czech Republic and currently based in Queens, NY. I love to build things, and I am super passionate about making people’s lives easier by creating beautiful, simple, and intuitive products. I pride myself on my ability to learn quickly and on being a good teammate. Outside of work, I am a massive Chelsea FC supporter, an okay cook, and a proud owner of two very cute cats <span onMouseOver={e => this.setState({ catHover: true })} onMouseOut={e => this.setState({ catHover: false })} className={styles.hoverMessage}>(hover here for proof of cuteness)</span>.</p>
                    <div className={styles.image}>
                        <img className={`${styles.headshot} ${this.state.catHover && styles.hide}`} src={require('../../images/headshot.JPG')} alt="Zoe Ferencova headshot"></img>
                        <img className={`${styles.cats} ${this.state.catHover && styles.show}`} src={require('../../images/cats.JPG')} alt="Zoe's cats"></img>
                    </div>
                </div>
            </ScrollAnimation>
        );
    }
}