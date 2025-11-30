import Image from "next/image";
import styles from "./styles/globals.module.css";
import logo from '../public/Zaylo-Logo.png'

export default function Loading() {
  return (
    <div className={styles.bagLoader}>
      
      <div className={styles.bagWrapper}>
        <div className={styles.bag}>
          {/* IMAGE FILL */}
          <div className={styles.fillImage}>
              <Image
                    src={logo}
                    alt='logo'
                    height={100}
                    width={100}
                   
                  /> 
          </div>
        </div>

        <div className={styles.handle}></div>
      </div>

      <p className={styles.bagText}>Loading your shopping experience…</p>
    </div>
  );
}
