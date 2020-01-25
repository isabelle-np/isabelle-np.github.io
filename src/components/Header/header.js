import React from 'react';
import { Link } from 'gatsby';
import Logo from '../../images/logo.svg';

import styles from './header.module.scss';

export default () => (
        
        <nav aria-label="site" role="navigation" className={styles.container}>
            <Link to="/" className={styles.home}><img src={Logo} alt="Logo" className={styles.logo}/></Link>
            <div className={styles.menu} id="navLinks">
                <Link className={styles.item} activeClassName={styles.active} to="/#portfolio">Portfolio</Link>
                <Link className={styles.item} activeClassName={styles.active} to="/resume">Resume</Link>
                <Link className={styles.item} activeClassName={styles.active} to="/about">About</Link>
            </div>
        </nav>
)


