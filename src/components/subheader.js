import React from 'react'
//xsimport { GatsbyImage } from 'gatsby-plugin-image'

import * as styles from './subheader.module.css'

export default function Subheader() {
  return (
    <div className={styles.subheader_box}>
      <h1 className={styles.subheader_title}>Norvin</h1>
      <p className={styles.subheader_details}>
        Python Developer | Web Devevloper | Data
      </p>
    </div>
  )
}
