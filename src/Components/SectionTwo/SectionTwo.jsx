import React from "react";
import styles from "../SectionTwo/SectionTwo.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';

const SectionTwo = () => {
  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <div className={styles.iconWtiteBox}>
          <h5>
            <FontAwesomeIcon icon={faTruck}/>
          </h5>
          <div className={styles.writeBox}>
            <h3>FREE SHIPPING</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              at iaculis quam. Integer accumsan tincidunt fringilla.
            </p>
          </div>
        </div>
        <div className={styles.iconWtiteBox}>
          <h5>
          <FontAwesomeIcon icon={faRotateLeft} />
          </h5>
          <div className={styles.writeBox}>
            <h3>FREE SHIPPING</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              at iaculis quam. Integer accumsan tincidunt fringilla.
            </p>
          </div>
        </div>
        <div className={styles.iconWtiteBox}>
          <h5>
          <FontAwesomeIcon icon={faQuestion}  className={styles.faquestionTag}/>
          </h5>
          <div className={styles.writeBox}>
            <h3>FREE SHIPPING</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              at iaculis quam. Integer accumsan tincidunt fringilla.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
