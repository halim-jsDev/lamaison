import React, { useState } from "react";
import styles from "../../styles/Product.module.css";
import Image from "next/image";

const Product = () => {
  const [size, setSize] = useState(0);

  const pizza = {
    id: "1",
    img: "/img/piz2.webp",
    name: "Compagnola",
    price: [19, 27, 35],
    desc: "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur",
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={pizza.img} layout="fill" alt="pizzz" />
        </div>
      </div>

      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.name}</h1>
        <span className={styles.price}>{pizza.price[size]} DA</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>Choisir la taille de la pizza</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <Image src="/icons/pizzaSize.png" alt="" layout="fill" />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => setSize(1)}>
            <Image src="/icons/pizzaSize.png" alt="" layout="fill" />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => setSize(2)}>
            <Image src="/icons/pizzaSize.png" alt="" layout="fill" />
            <span className={styles.number}>Mega</span>
          </div>
        </div>
        <h3>SUPPLEMENTS</h3>
        <div className={styles.supplements}>
          <div className={styles.options}>
            <input
              type="checkbox"
              id="double"
              name="double"
              className={styles.checkbox}
            />
            <label htmlFor="double">Fromage</label>
          </div>
          <div className={styles.options}>
            <input
              type="checkbox"
              id="harrissa"
              name="harrissa"
              className={styles.checkbox}
            />
            <label htmlFor="harrissa">Harrissa</label>
          </div>
          <div className={styles.options}>
            <input
              type="checkbox"
              id="sauce maison"
              name="sauce maison"
              className={styles.checkbox}
            />
            <label htmlFor="sauce maison">Sauce Maison</label>
          </div>
        </div>
        <div className={styles.add}>
            <input type="number" defaultValue={1} className={styles.quantity}/>
            <button className={styles.button}> Ajouter </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
