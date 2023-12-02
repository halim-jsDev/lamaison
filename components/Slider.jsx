import React from "react";
import styles from "../styles/Slider.module.css";
import Image from "next/image";
import { Carousel } from "react-bootstrap";

const Slider = () => {
  return (
    
     <div className={styles.container}>
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      alt="First slide"
      style={{width:"300vw", height:"600"}}
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=600"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://photo-cdn2.icons8.com/a98khvpNDbax-6cyoFc2crR_bfmH6RwE2iCj24mTqB4/rs:fit:1608:1072/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5l/eHRlcm5hbC9hMmE0/Mi84MGQ2M2JkMWIw/YzY0ODA2YmMzZThj/YTQ1NTdjZjA1MC5q/cGc.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
     </div>
   
  );
};

export default Slider;
{
  /*<div className={styles.arrowContainer} style={{left:0}}>
        <Image src="/slider/arrow-l.png" alt="" layout="fill" />
      </div>
      <div className={styles.wrapper}>
        {images.map((imag, i) => (
        <div className={styles.imgContainer} key={i}>
            <Image
              src={imag}
              alt="slid-Image"
              layout="fill"
              objectFit="contain"
            />
        </div>))}
      </div>
      <div className={styles.arrowContainer} style={{right:0}}>
        <Image src="/slider/arrow-r.png" alt="" layout="fill" />
      </div>  */
}
