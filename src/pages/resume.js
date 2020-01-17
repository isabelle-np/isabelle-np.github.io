import React from 'react';
import { Link } from 'gatsby';
import Job from '../components/job';
import styles from './resume.module.scss';
import Layout from '../components/layout';
import Title from '../components/title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Resume() {
    return (
    <Layout>
        <Title title="Resume" subtitle="A strong communicator who translates clients’ needs into UX solutions from idea, to mockup, to production-ready code"/>
        <nav className={styles.nav}>
            <Link to="/resume/#work" className={styles.navLink} activeClassName={styles.active} >
            <FontAwesomeIcon icon="briefcase" className={styles.icon}/></Link>
            <Link to="/resume/#school" className={styles.navLink} activeClassName={styles.active} ><FontAwesomeIcon icon="graduation-cap" className={styles.icon}/></Link>
            <Link to="/resume/#skills" className={styles.navLink} activeClassName={styles.active} ><FontAwesomeIcon icon="lightbulb" className={styles.icon}/></Link>
            <Link to="/resume/#awards" className={styles.navLink} activeClassName={styles.active} ><FontAwesomeIcon icon="medal" className={styles.icon}/></Link>
        </nav>

        <main className={styles.container}>

            <div id="work" className={styles.section}>
                <h2 className={styles.heading}>Experience</h2>
                <Job 
                    company="JPMorgan Chase &amp; Co."
                    role="Software Engineer (UX/UI)"
                    date="June 2019 - Present"
                    location="Wilmington, DE">
                    <ul className={styles.bulletList}>
                        <li>Led the redesign of a business intelligence and analytics web application for C-Suite executives as the sole designer</li>
                        <li>Increased developer productivity by implementing CSS architecture, a UI library, and style guide</li>
                        <li>Created a W3C compliant GUI for an automated trading system to monitor trading activity on simulated markets</li>
                    </ul>
                </Job>

                <Job 
                    company="Cogo Labs"
                    role="Design Lead &amp; Front-end Engineer"
                    date="June 2018 - August 2018"
                    location="Boston, MA">
                    <ul className={styles.bulletList}>
                        <li>Launched a data-driven startup with 12K+ users in 10 weeks</li>
                        <li>Established clean, scalable, mobile-first design patterns and code practices for design and engineering, respectively</li>
                        <li>Refined user experience by conducting regular user testing and A/B tests to to drive product decisions</li>
                        <li>Ran A/B tests on Facebook Ad campaigns to maximize KPI performance</li>
                        <li>Compiled, evaluated, and communicated key metrics and user experience analytics to upper management through product development forecasts and weekly presentations</li>
                    </ul>
                </Job>

                <Job 
                    company="Avrio AI"
                    role="Web Designer &amp; Developer"
                    date="January 2018 - May 2018"
                    location="Boston, MA">
                    <ul className={styles.bulletList}>
                        <li>Revitalized the company website and integrated an AI chatbot, decreasing bounce rate by 22% and increasing leads by 36%</li>
                        <li>Developed corporate visual identity guide to ensure company-wide cohesiveness</li>
                        <li>Designed visual assets for inbound marketing campaigns</li>
                    </ul>
                </Job>
            </div>

            <div id="school" className={styles.section}>
                <h2 className={styles.heading}>Education</h2>
                <Job 
                    company="Boston University"
                    role="International Relations"
                    date="2019, Bachelor of Arts"
                    location="Boston, MA">
                    <ul className={styles.bulletList}>
                        <li>Head of Design at BU’s innovation &amp; entrepreneurship lab in computer science and computer engineering</li>
                        <li>Estabalished the first university-funded fellowship program for UX/UI designers</li>
                        <li>Developed a UX workshop series for CS and engineering students</li>
                        <li>Teaching Assistant for Design &amp; Interactive Experiences (Graduate Level)</li>
                    </ul>
                </Job>
            </div>

            <div id="skills" className={styles.section}>
                <h2 className={styles.heading}>Skills</h2>
                <h3 className={styles.skillType}>Engineering</h3>
                <p>JavaScript, HTML, CSS, React, Responsive Web, Java, Spring, Testing, Git, Python, SQL</p>
        
                <h3 className={styles.skillType}>Design</h3>
                <p>Interaction Design, UI Design, UX Research, Information Architecture, User and A/B Testing, Wireframing, Prototyping, Sketch, Adobe CC</p>

            </div>

            <div id="awards">
                <h2 className={styles.heading}>Awards &amp; Recognition</h2>
                <ul className={styles.bulletList}>
                    <li>JPMorgan Five Keys Award</li>
                    <li>Six-Time Hackathon Winner</li>
                    <li>Model UN Best Delegate</li>
                    <li>Dean’s List</li>
                    <li>Gold Medal with All Columbian Honors from Columbia Scholastic Press</li>
                    <li>All American Award with Distinctions from National Scholastic Press Association</li>
                </ul>
            </div>

        <h2 className={styles.heading}>Interests</h2>
        <Link to="/about">Learn more about me</Link>
        </main>
    </Layout>
    )}

export default Resume;
