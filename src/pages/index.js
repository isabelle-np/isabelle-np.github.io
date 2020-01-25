import React from "react";
import Layout from '../components/layout';
//import Logo from '../images/logo.svg';
import CaseStudyList from '../components/CaseStudies/casestudy-list';
import Title from '../components/Title/title';
import Hero from '../components/Hero/hero';

import styles from '../pages/index.module.scss';

export default ({data}) => (
    <Layout>
        <Hero/>
        <div className={styles.portfolio} id="portfolio">
            <Title className={styles.title} title="Portfolio" subtitle="Case studies of my UX design and engineering projects"/>
            <CaseStudyList/>
        </div>
    </Layout>
)

