import React, { useEffect, useState } from "react";
import styles from "../styles/Cart.module.css";
import Image from "next/image";
import { Table } from "react-bootstrap";

const Cart = () => {
  

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.trTitle}>
              <th>Produit</th>
              <th>Nom</th>
              <th>Extras</th>
              <th>PRIX</th>
              <th>Quantite</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.tr}>
              <td>
                <div className={styles.imgContainer}>
                  <Image
                    src="/img/piz2.webp"
                    alt=""
                    objectFit="cover"
                    layout="fill"
                    className={styles.imgCart}
                  />
                </div>
              </td>
              <td>
                {" "}
                <span className={styles.name}>CORALZO</span>
              </td>
              <td>
                {" "}
                <span className={styles.extras}>
                  Lorem ipsum dolor sit amet consectetur
                </span>
              </td>
              <td>
                <span className={styles.price}>19.90 DA</span>
              </td>
              <td>
                <span className={styles.quantity}>2</span>
              </td>
              <td>
                <span className={styles.total}>39.80 DA</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ==================================================== */}
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Soutotal:</b>79.60 DA
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Remise:</b>0.00 DA
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>79.60 DA
          </div>
          <button className={styles.button}>ACHETEZ MAINTENANT!</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

{
  /* <Table className={styles.table}>
        <thead>
          <tr className={styles.trTitle}>
            <th>Name</th>
            <th>Extras</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          </thead>
          <tr className={styles.tr}>
            <td>
              <span className={styles.name}>CORALZO</span>
            </td>
            <td>
              <span className={styles.extras}>
                Lorem ipsum dolor sit amet consectetur
              </span>
            </td>
            <td>
              <span className={styles.price}>$19.90</span>
            </td>
            <td>
              <span className={styles.quantity}>2</span>
            </td>
            <td>
              <span className={styles.total}>$39.80</span>
            </td>
          </tr>
        </Table> */
}
