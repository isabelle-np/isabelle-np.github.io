import React from 'react';
import { Link } from 'gatsby';
import styles from '../components/header.module.scss';
import Logo from '../images/logo-small.svg';

export default () => (
        
        <nav role="navigation" className={styles.menu}>
            <Link to="/" className={styles.homeLink}><img src={Logo} alt="Logo" className={styles.logo}/></Link>
            <div className={styles.container}>
                <Link className={styles.item} activeClassName={styles.active} to="/#portfolio">Portfolio</Link>
                <Link className={styles.item} activeClassName={styles.active} to="/resume">Resume</Link>
                <Link className={styles.item} activeClassName={styles.active} to="/about">About</Link>
                <Link className={styles.item} activeClassName={styles.active} to="/contact">Contact</Link> 
            </div>
        </nav>
)
