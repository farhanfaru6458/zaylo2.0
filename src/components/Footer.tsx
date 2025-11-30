import styles from "./css/Footer.module.css";
import { FaFacebookF, FaTwitter, FaInstagram,  FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        <div className={styles.colBrand}>
          <h2 className={styles.logo}>Zaylo.</h2>
          <p className={styles.desc}>
            We curate modern essentials for the contemporary lifestyle. Quality,
            sustainability, and design are at the heart of everything we do.
          </p>

          <div className={styles.socials}>
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaWhatsapp />
          </div>
        </div>

        <div className={styles.col}>
          <h4>Shop</h4>
          <a href="#">All Products</a>
          <a href="#">New Arrivals</a>
          <a href="#">Best Sellers</a>
          <a href="#">Sale</a>
        </div>

        <div className={styles.col}>
          <h4>Company</h4>
          <a href="#">About Us</a>
          <a href="#">Sustainability</a>
          <a href="#">Careers</a>
          <a href="#">Terms & Conditions</a>
        </div>

        <div className={styles.col}>
          <h4>Support</h4>
          <a href="#">FAQ</a>
          <a href="#">Shipping & Returns</a>
          <a href="#">Store Info</a>
          <a href="#">Contact Us</a>
        </div>

      </div>

      <div className={styles.bottomRow}>
        <p>© 2024 Zaylo. All rights reserved.</p>
        <p>Designed with rounded precision.</p>
      </div>
    </footer>
  );
}
