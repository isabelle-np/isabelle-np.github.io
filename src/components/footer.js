import React from 'react';

export default () => (
    <footer>        
        <div className="social-media">
            <ul>
                <li>
                    <a href="http://linkedin.com/in/isabellenguyenphuoc/" target="_blank">
                        <span className="screen-reader-text">LinkedIn</span>
                        <span className="fab fa-linkedin fa-2x" aria-hidden="true"></span>
                    </a>
                </li>
                <li>
                    <a href="mailto:contact@isabellenp.com">
                        <span className="screen-reader-text">Email</span>
                        <span className="fas fa-envelope-square fa-2x" aria-hidden="true"></span>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/isabelle-np" target="_blank">
                        <span className="screen-reader-text">GitHub</span>
                        <span className="fab fa-github-square fa-2x" aria-hidden="true"></span>
                    </a>
                </li>
            </ul>
        </div>

        <p>&copy; 2020</p>
        <p>Designed &amp; Developed by Isabelle Nguyen-Phuoc</p>
    </footer>
)