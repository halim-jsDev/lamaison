import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Slider from "../components/Slider";
import Products from "../components/Products";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>La Maison</title>
        <meta name="descrFood Gouraya" content="Best Food in Gouraya" />
        <link rel="icon" href="/icons/burger.png" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700&family=Lobster&family=Montserrat:ital,wght@0,200;0,300;0,400;1,200;1,400;1,500;1,600;1,700;1,800&family=Mukta:wght@500;600;700;800&family=Playpen+Sans:wght@200;300;400;500;700&family=Yanone+Kaffeesatz:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous"
        ></link>
      </Head>

      <Products />
    </div>
  );
}
