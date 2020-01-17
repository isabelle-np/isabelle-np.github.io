import React from 'react'
import {Link} from 'gatsby'
import styles from  './casestudy.module.scss'

export default (props) => (

   <Link to={props.to}>
      <article className={styles.container} key={props.id}>
         <div className={styles.left}>
            <img src={props.image}/>
         </div>
         <div className={styles.right}>
            <p>{props.type}</p>
            <h3 className={styles.title}>{props.title}</h3>
            <h4>{props.subtitle}</h4>
         </div>
      </article>
   </Link>

)

