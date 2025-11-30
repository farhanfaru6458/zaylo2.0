"use client";

import styles from "./css/Pagination.module.css";

type Props = {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
};

export default function Pagination({ page, totalPages, onChange }: Props) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={styles.paginationWrapper}>
      <button
        className={styles.pageBtn}
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
      >
        ⟵
      </button>

      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onChange(p)}
          className={`${styles.pageNumber} ${
            page === p ? styles.activePage : ""
          }`}
        >
          {p}
        </button>
      ))}

      <button
        className={styles.pageBtn}
        disabled={page === totalPages}
        onClick={() => onChange(page + 1)}
      >
        ⟶
      </button>
    </div>
  );
}
