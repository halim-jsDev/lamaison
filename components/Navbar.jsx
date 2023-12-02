import React from "react";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image
            src="/icons/telephone.png"
            alt="telephone"
            width="28"
            height="28"
          />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>Commadez !</div>
          <div className={styles.text}> 0771 861 203</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Accuil</li>
          <Image
            src="/icons/magasin2.png"
            alt="magasin"
            width="100"
            height="100"
          />
          <li className={styles.listItem}>A Propos</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src="/icons/panier.png" alt="magasin" width="30" height="30" />
          <div className={styles.counter}>20</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
