import React from 'react';
import styles from './title.module.scss'

export default ({ title, subtitle }) => (
    <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
    </div>
)