import React from 'react';
import Layout from '../components/layout';
import Title from '../components/Title/title';
import Portrait from '../images/portrait.jpg';
import Powerlifting from '../images/powerlifting.jpg';
import Grad from '../images/grad.jpg'
import styles from './about.module.scss';


export default () => (
    <Layout>
        <Title title="About" subtitle="American-born and raised internationally, my approach to UX is greatly shaped by my deep understanding of cultures and empathy"/>
        <main>
        <img src={Grad} className={styles.image} alt="Isabelle graduationg from Boston University"/>
            <p className={`${styles.body} ${styles.container}`}>Hi, I'm Isabelle! I'm a curious go-getter who aspires to design and build technology grounded in humanity. While my journey to technology is unconventional, my experiences have greatly shaped my approach to engineering and product development.  

            My deep-rooted empathy stems from my experience as a UX/UI designer where I placed the wants and needs of users at the forefront of my work. I’m a tenacious learner who transitioned from a designer to a software engineer, quickly mastering new technologies and languages. My ability to focus on the meticulous details and to connect them to the bigger picture was developed by analyzing foreign policy and its global effects as an International Relations major.
            
            As an award-winning Model United Nations delegate, I’m a strong communicator who favors respectful bluntness and isn’t afraid to disagree. I’m also a six-time collegiate hackathon winner where I’ve collaborated with teammates from different backgrounds to build projects that have won awards such as Best UI, Best Financial Hack, Best Business Plan, and 2nd Place, all in less than 24 hours.
            
            As a polymath with a competitive fire, I’m constantly raising my own bar and setting new goals, whether it’s learning a new subject like electrical engineering or hitting a new PR at the gym as a powerlifter.

            Originally from Connecticut, I've lived in five countries, the United States, France, Vietnam, Singapore, and China, and speak four languages: English, Vietnamese, Mandarin Chinese, and French.
            </p>
            <img src={Portrait} className={styles.image} alt="Portrait of Isabelle taken at the Whitney Museum in New York"/>
        </main>
    </Layout>
)