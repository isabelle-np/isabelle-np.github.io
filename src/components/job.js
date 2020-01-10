import React from 'react';
import styles from './job.module.scss';

export default (props) => (
    <section className="container">
        <div className={styles.heading}>
            <p className={styles.company}>{props.company}</p>
            <p className={styles.role}>{props.role}</p>
        </div>
        <div className={styles.details}>
            <p className={styles.date}>{props.date}</p>
            <p className={styles.location}>{props.location}</p>
        </div>
        <ul>
            <li>{props.bullet}</li>
        </ul>
    </section>
    
)