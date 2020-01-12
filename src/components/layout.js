import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import styles from '../components/layout.module.scss';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeSquare, faCode, faPalette } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faEnvelopeSquare, faCode, faPalette);

export default ({ children }) => (
    <div className={styles.container}>
        <Header/>
        {children}
        <Footer className={styles.footer}/>
    </div>
)