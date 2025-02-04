import React from "react";

import styles from './About.module.css'
import aboutImage from '../../../assets/about/GradMe.png';
import colab from '../../../assets/about/colab.png';
import multithread from '../../../assets/about/multithread.png';
import OpenGL from '../../../assets/about/aws.png';

export const About = () => {
    return <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.aboutBlock}>
            <img src={aboutImage} alt="Image of Me" className={styles.aboutImage} />
        <ul className={styles.textBlock}>
        <li className={styles.aboutSection}>
                <img src={multithread} alt="Multithreading" className={styles.textImage}/>
                <div className={styles.aboutText}>
                    <h3> Relevent Course Knowledge</h3>
                    <p> Operating Systems, Algorithms and Complexity, Data Structures,
                        Computer Architecture, Compliers, 
                        Machine Learning I, Object Oriented Programming, Computer Graphics.
                    </p>
                </div>
            </li>
            <li className={styles.aboutSection}>
                <img src={colab} alt="Google Colab" className={styles.textImage}/>
                <div className={styles.aboutText}>
                    <h3> Python Developer</h3>
                    <p> I have writen programs in Python to build machine learning 
                        models that analyze large datasets to uncover trends and generate 
                        accurate predictions.
                    </p>
                </div>
            </li>
            <li className={styles.aboutSection}>
                <img src={OpenGL} alt="OpenGL" className={styles.textImage}/>
                <div className={styles.aboutText}>
                    <h3> Further Learning</h3>
                    <p> Currently enrolled in online courses to learn and earn certificates,
                        focused on gaining knowledge about the AWS ecosystem and prepare for
                        the AWS Cloud Practitioner exam.
                    </p>
                </div>
            </li>

        </ul>
        </div>
    </section>;
}