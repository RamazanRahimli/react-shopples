import React from "react";
import styles from "../Header/Header.module.css";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const Header = () => {
  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <div className={styles.topBox}>
          <div className={styles.leftBox}>
            <h4>
              <IoIosSearch />
            </h4>
            <input type="text" placeholder="Search" />
          </div>
          <div className={styles.mediumBox}>
            <button>SHOPPLES</button>
          </div>
          <div className={styles.rigthBox}>
            <p className={styles.CiUserTag}>
              <CiUser />
            </p>
            <p className={styles.CiHeartTag}>
              <CiHeart />
            </p>
            <p className={styles.dOutlineShoppingCarTag}>
              <h5 className={styles.heartBasketTag}>2</h5>
              <MdOutlineShoppingCart />
            </p>
          </div>
        </div>
        <div className={styles.bottomBox}>
          <nav>
            <ul>
                <li>HOME</li>
                <li>ABOUT</li>
              <li>SHOP</li>
              <li>CATALOGUE</li>
              <li>NEW ARRIVALS</li>
              <li>CONTACT</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
