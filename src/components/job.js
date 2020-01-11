import React from 'react';
import styles from './job.module.scss';

export default (props) => (
    <section className="container">
        <div className={styles.heading}>
            <h3 className={styles.company}>{props.company}</h3>
            <h4 className={styles.role}>{props.role}</h4>
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