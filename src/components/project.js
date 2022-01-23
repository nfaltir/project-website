import React from 'react'
//xsimport { GatsbyImage } from 'gatsby-plugin-image'

import * as styles from './project.module.css'

export default function Project() {
  return (
    <div className={styles.project_box}>
      <h1 className={styles.project_title}>Projects</h1>
      <p className={styles.project_detail}>
        <span className={styles.specialty_one}>Web development</span> &
        <span className={styles.specialty_two}> Datascience</span>
      </p>
    </div>
  )
}
