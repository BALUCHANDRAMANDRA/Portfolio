import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./contact.module.css";


export const Contant = () =>{
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contant/emailIcon.png")} alt="Email icon" />
                    <a href="mailto:balujohnwesly@gmail.com">Email</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contant/linkedinIcon.png")} alt="Email icon" />
                    <a href="https://www.linkedin.com/in/balu-chandramandra-612736261/">LinkedIn</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contant/githubIcon.png")} alt="Email icon" />
                    <a href="https://github.com/BALUCHANDRAMANDRA">Github</a>
                </li>
            </ul>
        </footer>
    )
}