import React from 'react';
import Job from '../components/job';
import styles from './resume.module.scss';
import Layout from '../components/layout';
import Title from '../components/title';

export default () => (
    <Layout>
    <Title title="Resume" subtitle="A strong communicator who translates clients’ needs into UX solutions from idea, to mockup, to production-ready code."/>

    <main className={styles.container}>
{/****** Bio ******/}
        <p>A strong communicator who translates clients’ needs into UX solutions, from idea, to mockup, to production-ready code.</p>

{/****** Experience ******/}
        <h2 className={styles.section}>Experience</h2>
            <Job 
                company="JPMorgan Chase &amp; Co."
                role="Software Engineer (UX/UI)"
                date="June 2019 - Present"
                location="Wilmington, DE"/>

            <ul>
                <li>Led the redesign of a business intelligence and analytics web application for C-Suite executives as the sole designer</li>
                <li>Increased developer productivity by implementing CSS architecture, a UI library, and style guide</li>
                <li>Created a W3C compliant GUI for an automated trading system to monitor trading activity on simulated markets</li>
            </ul>
        

            <Job 
                company="Cogo Labs"
                role="Design Lead &amp; Front-end Engineer"
                date="June 2018 - August 2018"
                location="Boston, MA"
            />

            <ul>
                <li>Launched a data-driven startup with 12K+ users in 10 weeks</li>
                <li>Established clean, scalable, mobile-first design patterns and code practices for design and engineering, respectively</li>
                <li>Refined user experience by conducting regular user testing and A/B tests to to drive product decisions</li>
                <li>Ran A/B tests on Facebook Ad campaigns to maximize KPI performance</li>
                <li>Compiled, evaluated, and communicated key metrics and user experience analytics to upper management through product development forecasts and weekly presentations</li>
            </ul>

            <Job 
                company="Avrio AI"
                role="Web Designer &amp; Developer"
                date="January 2018 - May 2018"
                location="Boston, MA"
            />

            <ul>
                <li>Revitalized the company website and integrated an AI chatbot, decreasing bounce rate by 22% and increasing leads by 36%</li>
                <li>Developed corporate visual identity guide to ensure company-wide cohesiveness</li>
                <li>Designed visual assets for inbound marketing campaigns</li>
            </ul>

{/****** Education ******/}
        <h2 className={styles.section}>Education</h2>
        <Job 
            company="Boston University"
            role="International Relations"
            date="2019, Bachelor of Arts"
            location="Boston, MA"
        />
        <ul>
            <li>Head of Design at BU’s innovation &amp; entrepreneurship lab in computer science and computer engineering</li>
            <li>Estabalished the first university-funded fellowship program for UX/UI designers</li>
            <li>Developed a UX workshop series for CS and engineering students</li>
            <li>Teaching Assistant for Design &amp; Interactive Experiences (Graduate Level)</li>
        </ul>

{/****** Skills ******/}
        <h2 className={styles.section}>Skills</h2>
        <h3 className={styles.skillType}>Engineering</h3>
        <p>JavaScript, HTML, CSS, React, Responsive Web, Java, Spring, Testing, Git, Python, SQL</p>
        <h3 className={styles.skillType}>Design</h3>
        <p>Interaction Design, UI Design, UX Research, Information Architecture, User and A/B Testing, Wireframing, Prototyping, Sketch, Adobe CC</p>

{/****** Awards and Recognition ******/}
        <h2 className={styles.section}>Awards &amp; Recognition</h2>
        <ul>
            <li>JPMorgan Five Keys Award</li>
            <li>Six-Time Hackathon Winner</li>
            <li>Model UN Best Delegate</li>
            <li>Dean’s List</li>
            <li>Gold Medal with All Columbian Honors from Columbia Scholastic Press</li>
            <li>All American Award with Distinctions from National Scholastic Press Association</li>
        </ul>

{/****** Interests ******/}
        <h2 className={styles.section}>Interests</h2>
        <p>Powerlifting, electronics &amp; circuits, languages, accessibility, diversity &amp; inclusion in technology</p>
    </main>
    </Layout>
)

