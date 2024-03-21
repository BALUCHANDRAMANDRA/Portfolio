import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./about.module.css";

export const About = () =>{
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}><img src={getImageUrl("about/aboutImage.png")} alt="about img" className={styles.aboutImage} />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")}  alt="courser icon"/>
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>
                             I'm a frontend developer with exprience in buliding responsive and optimized sites
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")}  alt="courser icon"/>
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>
                            I have exprience developing fast and optimised back-end system and APIs
                        </p>
                    </div>
                </li>
            </ul>  
            </div>   
        </section>
    )
};