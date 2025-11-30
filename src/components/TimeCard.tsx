"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./css/TimeCard.module.css";
import Link from "next/link";

export default function TimerCard() {
  const [timeLeft, setTimeLeft] = useState({

    hours: "00",
    minutes: "00",
    seconds:'00'
  });

  useEffect(() => {
    const target = new Date().getTime() + 2 * 24 * 3600 * 1000; // 2 days countdown

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = target - now;

      if (distance <= 0) {
        clearInterval(interval);
        return;
      }


      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24)
        .toString()
        .padStart(2, "0");

      const minutes = Math.floor((distance / (1000 * 60)) % 60)
        .toString()
        .padStart(2, "0");

         const seconds = Math.floor((distance / 1000) % 60)
        .toString()
        .padStart(2, "0");


      setTimeLeft({  hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="car m-4 rounded-5 shadow text-bg-dark position-relative">
    <picture>
  <source media="(max-width: 600px)" srcSet="/arrival4.png" />
  <source media="(max-width: 1024px)" srcSet="/hero.png" />
  <Image
    src="/hero.png"
    alt="Flash Sale"
    width={500}
    height={500}
    className="card-img rounded-5"
    priority
  />
</picture>


      {/* Overlay timer */}
      <div className={`card-img-overlay d-flex shadow-lg rounded-5 flex-column justify-content-end ${styles.overlay}`}>

<Link href={'/products'} className={`${styles.button}`}>
  <span className={`${styles.text}`}>Shop now</span>
  <span className={`${styles.blob}`}></span>
 <span className={`${styles.blob}`}></span>
  <span className={`${styles.blob}`}></span>
   <span className={`${styles.blob}`}></span>
</Link>

        <div className={styles.timerWrapper}>
           
          <div className={styles.box}>
            <h3>{timeLeft.hours}</h3>
            <p>HOURS</p>
          </div>

          <div className={styles.box}>
            <h3>{timeLeft.minutes}</h3>
            <p>MINS</p>
          </div>
          <div className={styles.box}>
            <h3>{timeLeft.seconds}</h3>
            <p>SEC</p>
          </div>
        </div>

      </div>
    </div>
  );
}
