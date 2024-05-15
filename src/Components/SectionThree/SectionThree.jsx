import React from 'react'
import styles from '../SectionThree/SectionThree.module.css'

const SectionThree = () => {
  return (
    <div className={styles.box}>
         <div className={styles.container}>
            <div className={styles.logoWriteBox}>
            <div className={styles.writeBox}>
                <p>Collection</p>
                <h2>Women</h2>
            </div>
            </div>
            <div className={styles.logoWriteBox1}>
            <div className={styles.writeBox}>
                <p>Collection</p>
                <h2>Children</h2>
            </div>
            </div>
            <div className={styles.logoWriteBox2}>
            <div className={styles.writeBox}>
                <p>Collection</p>
                <h2>Men</h2>
            </div>
            </div>
         </div>
    </div>
  )
}

export default SectionThree