import React from 'react'
import {Link} from 'gatsby'
import styles from  './casestudy.module.scss'

export default (props) => (

   <Link to={props.to}>
      <article className={styles.container} key={props.id}>
         <div className={styles.left}>
            <img src={props.img}/>
         </div>
         <div className={styles.right}>
            <h3>
               {props.title}
            </h3>
            <h4>
               {props.subtitle}
            </h4>
            <div>
               {props.type}
            </div>
         </div>
      </article>
   </Link>

)

