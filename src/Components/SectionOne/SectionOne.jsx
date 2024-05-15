import React from 'react'
import styles from '../SectionOne/SectionOne.module.css'

const SectionOne = () => {
  return (
    <div className={styles.box}>
        <div className={styles.container}>
        <div className={styles.rightBox}>
            <h1>Finding Your Perfect Shoes</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
            <button>Shop Now</button>
        </div>
        </div>
    </div>
  )
}

export default SectionOne