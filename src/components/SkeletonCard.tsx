import styles from "./css/SkeletonCard.module.css";

export default function SkeletonCard() {
  return (
    <div className={styles.skeletonCard}>
      <div className={styles.skeletonBadge}></div>
      <div className={styles.skeletonImg}></div>

      <div className={styles.skeletonInfo}>
        <div className={styles.skeletonTextSmall}></div>
        <div className={styles.skeletonText}></div>
        <div className={styles.skeletonPrice}></div>
      </div>
    </div>
  );
}
