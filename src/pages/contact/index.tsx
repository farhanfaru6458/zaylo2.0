import Image from "next/image";
import styles from "./contact.module.css";
import { FaPaperPlane, FaPhoneAlt, FaClock, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import Head from "next/head";

export default function ContactPage() {
  return (
    <div className={styles.container}>
<Head>
        <title>Contact Zaylo.</title>
      </Head>
      <section className={styles.hero}>
        <h1>Lets Start a Conversation</h1>
        <p>
          Have a question about an order or just want to say hello?  
          Our team is ready to help.
        </p>
      </section>

      <div className={styles.contactWrapper}>
        <div className={styles.contactForm}>
          <h2>Send us a message</h2>
          <p>Fill out the form below and we’ll get back to you shortly.</p>

          <form>
            <div className={styles.row}>
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>

            <input type="email" placeholder="Email Address" />

            <select>
              <option>General Inquiry</option>
              <option>Order Issue</option>
              <option>Partnership</option>
            </select>

            <textarea placeholder="How can we help you?" rows={4}></textarea>

            <button type="submit">
              Send Message <FaPaperPlane size={14} />
            </button>
          </form>
        </div>

        <div className={styles.infoCards}>
          <div className={styles.card}>
            <FaMapMarkerAlt size={20} className={styles.icon} />
            <div>
              <h4>Our Office</h4>
              <p>123 Innovation Blvd, Tech District<br />San Francisco, CA 94107</p>
            </div>
          </div>

          <div className={styles.card}>
            <FaEnvelope size={20} className={styles.icon} />
            <div>
              <h4>Email Us</h4>
              <p>support@zaylo.com<br />partners@shopzaylo.com</p>
            </div>
          </div>

          <div className={styles.card}>
            <FaPhoneAlt size={20} className={styles.icon} />
            <div>
              <h4>Call Support</h4>
              <p>+1 (800) 123-4567<br />+1 (800) 987-6543</p>
            </div>
          </div>

          <div className={`${styles.card} ${styles.highlightCard}`}>
            <FaClock size={20} className={styles.icon} />
            <div>
              <h4>Office Hours</h4>
              <p>Mon - Fri: 9:00 AM - 8:00 PM<br />Sat - Sun: 10:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      <div className={`container-fluid ${styles.mapBanner}`}>
        <Image alt="" src="/map-banner.png" height={250} width={1140} className="rounded-5 shadow-lg p-2" />
        <div className={styles.mapOverlay}>
          <FaMapMarkerAlt size={30} />
        </div>
      </div>

      <section className={styles.faq}>
        <h2>Frequently Asked Questions</h2>

        <div className={styles.faqGrid}>
          <div className={styles.faqCard}>
            <h4>How do I track my order?</h4>
            <p>You can track your order using the “My Orders” section or via the tracking link sent to your email.</p>
          </div>

          <div className={styles.faqCard}>
            <h4>What is your return policy?</h4>
            <p>We offer a 30-day return policy for unused items.</p>
          </div>

          <div className={styles.faqCard}>
            <h4>Do you ship internationally?</h4>
            <p>Yes! Shipping cost is calculated at checkout.</p>
          </div>

          <div className={styles.faqCard}>
            <h4>Can I change my shipping address?</h4>
            <p>If your order hasn’t shipped yet, contact our support team immediately.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
