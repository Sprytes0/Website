import React from "react";

import heroImage from '../../../assets/hero/headshot.png';
import styles from './Hero.module.css';

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Joseph</h1>
        <p className={styles.description}> I'm a recent gradute from the University of Texas at Austin with experience in Machine Learning, Operating Systems and Computer Graphics.
             Reach out if you'd like to learn more!</p>
             <div className={styles.buttons}>
             <a href="mailto:joeangeles@comcast.net" className={styles.contactBtn}>Contact Me</a>
             <a href="/data/Joseph Angeles Resume.pdf" download="Joseph_Angeles_Resume.pdf" className={styles.contactBtn}>
                    My Resume</a>
            </div>
        </div>
        <img src={heroImage} alt="Image of me" className={styles.heroImg} />
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>;
};