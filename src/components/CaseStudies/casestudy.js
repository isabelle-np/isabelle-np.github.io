import React from 'react'
import {Link} from 'gatsby'
import styles from  './casestudy.module.scss'
import Img from "gatsby-image"

export default (props) => (

   <Link to={props.to} className={styles.link}>
      <section className={styles.container} key={props.id}>
         <Img fluid={props.fluid} className={styles.image}/>
         <div className={styles.info}>
            <p className={styles.kind}>{props.type}</p>
            <h3 className={styles.title}>{props.title}</h3>
            <h4 className={styles.subtitle}>{props.subtitle}</h4>
         </div>
      </section>
   </Link>

)
