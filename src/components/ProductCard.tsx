import styles from "./css/ProductCard.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";

type Product = {
  id: number;
  images?: string[];
  title: string;
  category: string;
  price: number;
};

export default function ProductCard({ p }: { p: Product }) {

  
  return (
    <Link href={`/products/${p.id}`} className={styles.cardLink}>
      <div className={styles.card}>

        <div className={styles.cardTop}>
          <span className={styles.badge}>New</span>
          <FaRegHeart className={styles.likeIcon} />
        </div>

        {p.images?.[0] && (
          <Image
            src={p.images[0]}
            alt={p.title}
            width={300}
            height={300}
            className={`rounded-5 ${styles.image}`}
          />
        )}

        <div className="card-body">
          <div className={styles.productInfo}>
            <p className={styles.category} >{p.category}</p>

            <h3 className={styles.productTitle}>{p.title}</h3>

            <div className={styles.bottomRow}>
              <span className={styles.price}>${p.price}</span>
             
<button className={styles.button}    >
  <div className={styles.buttonOuter}>
    <div className={styles.buttonInner}>
      <span>+</span>
    </div>
  </div>
</button>

            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
