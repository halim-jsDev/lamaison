import React from "react";
import styles from "../styles/Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/bgImg/bg.jpeg" objectFit="cover" alt="bgimage" width="500" height="390" />
      </div>
      
      <div className={styles.item}>
      <div className={styles.card}>
        <h2 className={styles.motto}>
        YES, WE HAVE THE BEST FOOD IN THE TOWN ...
        </h2>
      </div>
      <div className={styles.card}>
        <h1 className={styles.title}>FIND OUR RESTAURANT EASELY ...</h1>
        <p className={styles.text}>
          RUE PRINCIPAL GOURAYA 
          <br/> TIPAZA, GOURAYA
          <br/> TEL : 0771 861 203
        </p>
      </div>
      <div className={styles.card}>
      <h1 className={styles.title}>HAURAIRES DE TRAVAIL</h1>
      <p className={styles.text}>
          DU SAMEDI AU JEUDI  
          <br/> 10h - 20h 
          
        </p>

      </div>
      </div>
    </div>
  );
};

export default Footer;
