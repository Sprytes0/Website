import React from 'react'

import styles from "./Contact.module.css"

import emailIcon from '../../../assets/contact/emailIcon.png';
import githubIcon from '../../../assets/contact/githubIcon.png';
import linkedinIcon from '../../../assets/contact/linkedinIcon.png';

export const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={emailIcon} alt="Email icon" />
                <a href="mailto:joeangeles@comcast.net">joeangeles@comcast.net</a>
            </li>
            <li className={styles.link}>
                <img src={linkedinIcon} alt="LinkedIn icon" />
                <a href="https://www.linkedin.com/in/joseph-angeles-3baa96249/">LinkedIn.com/JosephAngeles</a>
            </li>
            <li className={styles.link}>
                <img src={githubIcon} alt="GitHub icon" />
                <a href="https://github.com/Sprytes0">GitHub.com/Sprytes</a>
            </li>
        </ul>
    </footer>
  )
}

