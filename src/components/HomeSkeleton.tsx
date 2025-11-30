"use client";

import styles from "../globals.module.css";

export default function HomeSkeleton() {
  return (
    <div className={styles.wrapper}>
      
      {/* Banner / Carousel Skeleton */}
      <div className={`${styles.skeletonBox} ${styles.banner}`}></div>

      {/* Category Title Row */}
      <div className={styles.rowBetween}>
        <div className={styles.skeletonTextLarge}></div>
        <div className={styles.skeletonButton}></div>
      </div>

      {/* Category Cards (4 items) */}
      <div className={styles.grid4}>
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className={`${styles.skeletonBox} ${styles.categoryCard}`}></div>
        ))}
      </div>

      {/* New Arrivals Title */}
      <div className={styles.skeletonTextLarge}></div>

      {/* New Arrival Product Grid (4 items) */}
      <div className={styles.grid4}>
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className={styles.productCard}>
            <div className={`${styles.skeletonBox} ${styles.productImage}`} />
            <div className={styles.skeletonText} />
            <div className={styles.skeletonTextShort} />
          </div>
        ))}
      </div>

      {/* Timer Card */}
      <div className={`${styles.skeletonBox} ${styles.timerCard}`} />

      {/* Newsletter */}
      <div className={`${styles.skeletonBox} ${styles.newsletter}`} />
    </div>
  );
}
