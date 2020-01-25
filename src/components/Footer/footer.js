import React from 'react';
import styles from './footer.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from '../Button/button';



export default () => (
<>
    <div className={styles.button}>
        <Button to="/style-guide" text="View Site Style Guide"/>
    </div>

    <footer className={styles.footer}> 

   
        <nav className={styles.socialMedia} aria-label="social media">
            <a href="http://linkedin.com/in/isabellenguyenphuoc/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FontAwesomeIcon icon={['fab','linkedin']} aria-hidden="true" className={styles.icon}/> 
            </a>

            <a href="mailto:contact@isabellenp.com" aria-label="Email">
                <FontAwesomeIcon icon="envelope-square" aria-hidden="true" className={styles.icon}/> 
            </a>
  
            <a href="https://github.com/isabelle-np" target="_blank" rel="noopener noreferrer" aria-label="Github">
                <FontAwesomeIcon icon={['fab', 'github-square']} aria-hidden="true" className={styles.icon}/>
            </a>
        </nav>

        <p className={styles.copyright}>
            <FontAwesomeIcon icon="palette" aria-hidden="true" title="Designed" className={styles.copyrightIcon}/> 
            <span className="sr-only">Designed</span> 
            and
            <FontAwesomeIcon icon="code" aria-hidden="true" title="Developed" className={styles.copyrightIcon}/>
            <span className="sr-only">developed</span> 
            by Isabelle Nguyen-Phuoc</p>
    </footer>
    </>
)