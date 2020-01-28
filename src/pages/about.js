import React from 'react';
import Layout from '../components/layout';
import Title from '../components/Title/title';
import Portrait from '../images/portrait.jpg';
import Powerlifting from '../images/powerlifting.jpg';
import Grad from '../images/grad.jpg'
import styles from './about.module.scss';


export default () => (
    <Layout>
        <Title title="About" subtitle="I'm a curious go-getter who aspires to design and build technology grounded in humanity"/>
        <main>
        <img src={Grad} className={styles.image} alt="Isabelle graduationg from Boston University"/>
        <div className={styles.container}>
            <p className={styles.body}>Hi, I'm <span className={styles.isabelle}>Isabelle</span>! I'm a curious go-getter who aspires to design and build technology grounded in humanity. While my journey to technology is unconventional, my experiences have greatly shaped my approach to engineering and product development.</p>

            <p>My biggest strengths are my empathy for users, eagerness to learn, and eye for detail. My deep-rooted empathy stems from my experience as a UX/UI designer where I placed the wants and needs of users at the forefront of my work. Transitioning from a designer to a software engineer, I’m a tenacious learner who explores new technologies and languages, takes on challenges, and solves complex problems. Despite being an engineer who digs deep into lines of code, I understand and appreciate how those details create a complete and cohesive story. My ability to focus on the small, critical details and connect them to the bigger picture was developed by analyzing foreign policy and its global effects as an International Relations major. As a team member, I strive to promote an environment of open and blunt communication, where we, as a team, are not afraid to challenge each other. I believe that under these circumstances, the teams I’ve been apart of have delivered exceptional and award-winning products.</p>

            <p>As a polymath with a competitive fire, I’m constantly raising the bar and setting new goals, whether it’s learning a new subject like electrical engineering or hitting a new PR at the gym as a powerlifter.</p>

            <p>Originally from Connecticut, I've lived in five countries, the United States, France, Vietnam, Singapore, and China, and speak four languages: English, Vietnamese, Mandarin Chinese, and French.</p>
            </div>
            <img src={Portrait} className={styles.image} alt="Portrait of Isabelle taken at the Whitney Museum in New York"/>
        </main>
    </Layout>
)