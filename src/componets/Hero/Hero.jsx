import React from "react";
import styles from "./hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return(
        <section className={styles.container}>
            <div className={styles.contant}>
                <h1 className={styles.title}>Hi,I'm Balu</h1>
                <p className={styles.description}>
                    I'm a full-stack developer with exprience of React, NodeJs.
                    Reach out if you'd like to learn.
                </p>
                <a href="mailto:balujohnwesly@gmail.com" className={styles.contantbtn}>Content Me</a>
            </div>  
            <img src={getImageUrl("Home/heroImage.png")} alt="Hero of image me" className={styles.heroImg}/>
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
}