"use client";

import Image from "next/image";
import styles from "./about.module.css";
import about1 from '../../../public/about1.png'
import about2 from '../../../public/our-team.png'
import Head from "next/head";
export default function AboutPage() {
  return (
    <main className={styles.page}>
      <Head>
        <title>About Zaylo.</title>
      </Head>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.headline}>Redefining the Art of Online Shopping</h1>
          <p className={styles.lead}>
            At Zaylo, we blend cutting-edge technology with curated aesthetics to
            bring you a shopping experience that feels personal, seamless, and
            delightfully unique.
          </p>

          <button className={`btn ${styles.cta}`}>Discover Our Story</button>
        </div>
      </section>

      {/* VALUES */}
      <section className={`${styles.section} container`}>
        <p className={styles.kicker}>OUR PHILOSOPHY</p>
        <h2 className={styles.sectionTitle}>Driven by Values</h2>

        <div className={styles.valuesGrid}>
          <article className={styles.valueCard}>
            <div className={styles.icon}>💡</div>
            <h3>Innovation First</h3>
            <p>
              We constantly push boundaries to create smarter, faster, and more
              intuitive ways for you to discover products you love.
            </p>
          </article>

          <article className={styles.valueCard}>
            <div className={styles.icon}>🌱</div>
            <h3>Sustainable Future</h3>
            <p>
              Commitment to eco-friendly packaging and carbon-neutral logistics
              is at the heart of our operations.
            </p>
          </article>

          <article className={styles.valueCard}>
            <div className={styles.icon}>🤝</div>
            <h3>Community Focused</h3>
            <p>
              We believe in building relationships, not just transactions. Our
              community drives every decision we make.
            </p>
          </article>
        </div>
      </section>

      {/* JOURNEY */}
      <section className={`${styles.section} ${styles.pale}`}>
        <div className="container">
          <p className={styles.kicker}>THE JOURNEY</p>
          <h2 className={styles.sectionTitle}>How We Started</h2>

          <div className={styles.row}>
            <div className={styles.colImage}>
              <div className={styles.cardImage}>
                <Image
                  src={about1}
                  alt="office"
                  width={900}
                  height={560}
                  className={styles.img}
                />
              </div>
            </div>

            <div className={styles.colText}>
              <h3>Born from a Simple Idea</h3>
              <p className={styles.text}>
                In 2020, amidst a rapidly changing world, Zaylo was conceived with a
                singular vision: to make online shopping feel less like a chore and
                more like a discovery. We started in a small shared workspace,
                fueled by coffee and big dreams.
              </p>

              <p className={styles.text}>
                Our founders realized that while e-commerce was convenient, it lacked
                soul. We set out to inject personality, care, and curation back into
                the digital marketplace.
              </p>
            </div>
          </div>

          <div className={styles.rowReverse}>
            <div className={styles.colText}>
              <h3>Growing Together</h3>
              <p className={styles.text}>
                What started as a team of three has now grown into a global family of
                creative minds. We have expanded our categories, refined logistics,
                and built a platform that serves millions of happy customers worldwide.
              </p>

              <p className={styles.text}>
                Despite our growth, our core mission remains unchanged: to deliver
                joy, one package at a time.
              </p>
            </div>

            <div className={styles.colImage}>
              <div className={styles.cardImage}>
                <Image
                  src={about2}
                  alt="team"
                  width={900}
                  height={560}
                  className={styles.img}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
