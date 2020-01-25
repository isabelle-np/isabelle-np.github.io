import React from "react";
import { Link } from "gatsby";

import styles from './button.module.scss';

export default (props) => (
    <Link to={props.to} href={props.href} className={styles.button}>
        <span className={styles.caption}>{props.text}</span>
    </Link> 
)