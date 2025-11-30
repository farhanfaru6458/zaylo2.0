"use client";

import styles from "./css/SideBarFilter.module.css";

type Props = {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (c: string) => void;
  priceRange: [number, number];
  onChangePrice: (v: [number, number]) => void;
};

export default function SidebarFilter({
  categories,
  selectedCategory,
  onSelectCategory,

}: Props) {
  return (
    <div className={styles.sidebar}>
      <h4 className={styles.sidebarTitle}>Categories</h4>

      {categories.map((c) => (
        <button
          key={c}
          className={`${styles.categoryBtn} ${
            selectedCategory === c ? styles.activeCategory : ""
          }`}
          onClick={() => onSelectCategory(c)}
        >
          {c}
        </button>
      ))}

     
    
    </div>
  );
}
