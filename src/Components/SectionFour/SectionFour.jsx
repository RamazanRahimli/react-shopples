import React from 'react'
import styles from '../SectionFour/SectionFour.module.scss'
const SectionFour = () => {
  return (
    <div className={styles.box}>
        <div className={styles.container}>
            <div className={styles.topBox}>
                <p></p>
                <h2>Featured Products</h2>
            </div>
            <div className={styles.bottomBox}>
            <div className={styles.productCard}>
                <img src="" alt="" />
                <div className={styles.writeSaleBox}>
                    <a>Tank Top</a>
                    <p>Finding perfect t-shirt</p>
                    <h5>$50</h5>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default SectionFour