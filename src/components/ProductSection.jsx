import React from 'react';
import styles from './ProductSection.module.css';
import img from '../assets/img1.jpeg'

const ProductSection = () => {
  return (
    <div className={styles.container}>
     
      <div className={styles.banner}>
        <p>
          Enjoy complimentary shipping and a pack of red envelopes with every deliver-to-door orders over HKD 900 by entering NY25 at checkout.
          <span className={styles.closeButton}>+</span>
        </p>
      </div>

     
      <nav className={styles.navigation}>
        <div className={styles.navLeft}>
          <a href="#" className={styles.logo}>Aēsop</a>
          <div className={styles.navLinks}>
            <a href="#">New & Notable</a>
            <a href="#">Skin Care</a>
            <a href="#">Hand & Body</a>
            <a href="#">Home</a>
            <a href="#">Hair</a>
            <a href="#">Fragrance</a>
            <a href="#">Kits & Travel</a>
            <a href="#">Gifts</a>
            <a href="#">Read</a>
            <a href="#">Stores</a>
            <a href="#">Facial Appointments</a>
          </div>
        </div>
        <div className={styles.navRight}>
          <a href="#">Log in</a>
          <a href="#">Cabinet</a>
          <a href="#">Cart</a>
        </div>
      </nav>

      
      <div className={styles.mainContent}>
        <div className={styles.textContent}>
          <p className={styles.subtitle}>Brilliant performers</p>
          <h2 className={styles.title}>
            Immaculate to exfoliate.
            <br />
            Lucent to brighten.
          </h2>
          <p className={styles.description}>
            Immaculate Facial Tonic and Lucent Facial Concentrate:
            applied in sequence, these vitamin-rich formulations
            leave the skin refined, balanced and hydrated.
          </p>
          <button className={styles.cta}>
            Discover the duo
            <span className={styles.arrow}>→</span>
          </button>
        </div>
        <div className={styles.imageContent}>
          <img 
            src={`${img}` }
            alt="Aesop facial products" 
            className={styles.productImage}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductSection;