import React from "react";
import Layout from '../components/layout';
import Logo from '../images/logo.svg';
import CaseStudyList from '../components/casestudy-list';
import Title from '../components/title';

import styles from '../pages/index.module.scss';
import { Link } from "gatsby";

export default ({data}) => (
    <Layout>
        <div className={styles.container}>
            <img src={Logo} className={styles.logo} alt="Lightbulb logo"/>
            <h1 className={styles.name}>Isabelle<span className={styles.lastName}>Nguyen-Phuoc</span></h1>
            <h2 className={styles.subtitle}>Software Engineer &amp; Designer</h2>
            <span className={styles.description}>Translating clients’ needs into UX solutions <br/>from idea, to mockup, to production-ready code</span>
            <Link to='/#portfolio' className={styles.arrow}>
                <img className={styles.animation} src="https://d3n32ilufxuvd1.cloudfront.net/55c4887f2541c97e1b608fee/1341550/upload-a74f3e75-fba2-43cb-967a-63dfb6cf214c.png" alt="Link to Portfolio"/>
                <span className={styles.caption}>View Portfolio</span>

            </Link>
        </div>
        <div className={styles.portfolio} id="portfolio">
            <Title title="Portfolio" subtitle="Case studies of my UX design and engineering projects"/>

            <CaseStudyList/>
        </div>
    </Layout>
)

