import React from "react";
import Logo from '../../images/logo.svg';

import styles from './hero.module.scss';

export default () => (
    <>
        <div className={styles.container}>
            <div className={styles.hero}>
                <h1 className={styles.name}>Isabelle<span className={styles.lastName}>Nguyen-Phuoc</span></h1>
                <h2 className={styles.subtitle}>Software Engineer &amp; <span className={styles.designer}>Designer</span></h2>
                <img src={Logo} className={styles.logo} alt="Lightbulb logo"/>
            </div>
                <p className={styles.description}>Translating clients’ needs into UX solutions from idea, to mockup, to production-ready code.</p>
        </div>
        <hr className={styles.hr}/>
    </>

)

