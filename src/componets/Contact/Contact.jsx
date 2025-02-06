import React from 'react'

import styles from "./Contact.module.css"

export const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src="assets/contact/emailIcon.png" alt="Email icon" />
                <a href="mailto:joeangeles@comcast.net">joeangeles@comcast.net</a>
            </li>
            <li className={styles.link}>
                <img src="assets/contact/linkedinIcon.png" alt="LinkedIn icon" />
                <a href="https://www.linkedin.com/in/joseph-angeles-3baa96249/">LinkedIn.com/JosephAngeles</a>
            </li>
            <li className={styles.link}>
                <img src="assets/contact/githubIcon.png" alt="GitHub icon" />
                <a href="https://github.com/Sprytes0">GitHub.com/Sprytes</a>
            </li>
        </ul>
    </footer>
  )
}

