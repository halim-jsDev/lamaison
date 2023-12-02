import React from "react";
import styles from "../styles/ProductCart.module.css";
import Image from "next/image";

const ProductCart = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/piz2.webp" alt="pizza" width="200" height="200" />
      <h1 className={styles.title}>Pizza 01</h1>
      <p className={styles.price}> 350 DA</p>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. quidem
        dignissimos nihil exercitationem molestias totam omnis, magni ipsa?
      </p>
    </div>
  );
};

export default ProductCart;
