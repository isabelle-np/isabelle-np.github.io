import React from 'react';
import Footer from '../components/Footer/footer';
import Header from '../components/Header/header';
import styles from '../components/layout.module.scss';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeSquare, faCode, faPalette, faBriefcase, faGraduationCap, faLightbulb, faMedal, faBars } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faEnvelopeSquare, faCode, faPalette, faBriefcase, faGraduationCap, faLightbulb, faMedal, faBars);

export default ({ children }) => (
    <div className={styles.container}>
        <Header/>
        {children}
        <Footer className={styles.footer}/>
    </div>
)