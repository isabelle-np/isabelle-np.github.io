import React from "react";
import Layout from '../components/layout';
import Logo from '../images/logo.svg';

import styles from '../pages/index.module.scss';

export default () => (
    <Layout>
        <div className={styles.container}>
            <img src={Logo} alt="Logo" className={styles.logo}/>
            <h1 className={styles.name}>Isabelle<span className={styles.lastName}>Nguyen-Phuoc</span></h1>
            <h2 className={styles.subtitle}>Software Engineer &amp; Designer</h2>
        </div>
    </Layout>
)
