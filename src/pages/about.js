import React from 'react';
import Layout from '../components/layout';
import Title from '../components/title';
import Konexio from '../images/konexio.png';
import Graduation from '../images/graduation.jpg';
import TechConnect from '../images/techconnect.jpg';
import JPMorgan from '../images/jpmc.jpg';
import Powerlifting from '../images/powerlifting.jpg';
import styles from './about.module.scss';

export default () => (
    <div className={styles.wrapper}>
    <Layout>
        
        <Title title="About" subtitle="American-born and raised internationally, my approach to UX is greatly shaped by my deep understanding of cultures and empathy"/>
        <div className={styles.container}>
            <p>Hi, I'm Isabelle! I'm a curious go-getter who aspires to design and build technology grounded in humanity. That's why I became a self-taught designer-turned-software engineer while pursuing a degree in Foreign Policy and National Security. I'm curious about the fair (and unfair) use of technology and its implication on markets and society.</p>
            <img src={Graduation} className={styles.image} alt="Me at graduation"/>
            <p>I've combined my tech skills and background in International Relations to volunteer with non-profit organizations, including Konexio, where I designed a networking platform to match refugees in Konexio's digital literacy program with professionals in France. In academia, my senior thesis analyzed the socio-economic impacts of GDPR, the General Data Protection Regulation, and European competitiveness in the global technology industry.</p>
            <img src={Konexio} className={styles.image} alt="Presenting my project with Konexio at Tufts University"/>
            <p>I'm currently a software engineer at JPMorgan Chase &amp; Co. where I'm fortunate enough to both design and code. During the workday, I also lead an accessibility workshop for engineers, serve as a chair of the company sustainability group, and assist in weekly yoga classes. I'm also involved with the business resource groups for women, Asians, LGBTQ, and veterans an ally and </p>
            <img src={JPMorgan} className={styles.image} alt="Tech Connect Photo"/>
            <p>Outside of my 9-5, I'm a powerlifter and a budding yogi. I also develop content for a Youtube channel where I teach programming languages, frameworks, and tech topics like accessibility in a casual format with lots of memes. I'm a polymath who loves to learn, with my favorite subjects being medieval art history, electronics &amp; circuits, and surprisingly, math!</p>
            <img src={Powerlifting} className={styles.image} alt="Circuts or museum picture"/>
            <p>Originally from Connecticut, I've lived in five countries, the United States, France, Vietnam, Singapore, and China, and speak four languages: English, Vietnamese, Mandarin Chinese, and French. I'm currently based in Philadelphia, Pennsylvania, eating my way through the city one cheesesteak at a time.</p>
            <img src={TechConnect} className={styles.image} alt="Study abroad in Shanghai"/>
        </div>
    </Layout>
    </div>
)