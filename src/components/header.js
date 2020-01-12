import React from 'react';
import { Link } from 'gatsby';
import styles from '../components/header.module.scss';

export default () => (
    <nav role="navigation" className={styles.menu}>
        <div className={styles.container}>
            <Link className={styles.item} to="/">Portfolio</Link>
            <Link className={styles.item} to="/resume">Resume</Link>
            <Link className={styles.item} to="/about">About</Link>
            <Link className={styles.item} to="/contact">Contact</Link> 
        </div>
    </nav>
)
