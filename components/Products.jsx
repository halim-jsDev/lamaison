import React from "react";
import styles from "../styles/Products.module.css"
import ProductCart from "./ProductCart";

const Products = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>LA MAISON <br></br><span> since 1925</span></h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
        incidunt voluptatem dicta ea. Quaerat cum necessitatibus labore autem
        alias! Reprehenderit molestiae ducimus, quaerat iste magnam possimus
        sapiente tenetur harum veritatis!
      </p>
      <div className={styles.wrapper}>
        <ProductCart/>
        <ProductCart/>
        <ProductCart/>
        <ProductCart/>
        <ProductCart/>
        <ProductCart/>
        <ProductCart/>
        <ProductCart/>
        <ProductCart/>
        <ProductCart/>
        <ProductCart/>
        <ProductCart/>
        <ProductCart/>
        <ProductCart/>
        <ProductCart/>
        <ProductCart/>
      </div>
    </div>
  );
};

export default Products;
