import React from "react";

import styles from './intbutton.module.scss';

export default (props) => (
    <a href={props.href} className={styles.button} target="_blank" rel="noopener noreferrer" aria-label={props.label}>
        <span className={styles.caption}>{props.text}</span>
    </a> 
)