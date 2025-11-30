"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "./product.module.css";
import SidebarFilter from "../../components/SidebarFilter";
import ProductCard from "../../components/ProductCard";
import Pagination from "../../components/Pagination";
import SkeletonCard from "../../components/SkeletonCard";
import { ProductServices } from "../../services/product-services";
import { Product } from "../../types/products";
import Head from "next/head";

const PAGE_SIZE = 9;

export default function ProductList() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [sortBy, setSortBy] = useState("Most Popular");
  const [page, setPage] = useState(1);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    async function load() {
      setLoading(true);
      await new Promise((r) => setTimeout(r, 3000));
      const data = await ProductServices.getProducts();
      setAllProducts(data);
      setLoading(false);
    }
    load();
  }, []);

  const categories = useMemo(() => {
    const unique = new Set<string>();
    allProducts.forEach((p) => unique.add(p.category));
    return ["All", ...Array.from(unique).filter((c) => c !== "groceries")];
  }, [allProducts]);

  const filtered = useMemo(() => {
    let temp = allProducts.filter((p) => p.category !== "groceries");

    if (selectedCategory !== "All") {
      temp = temp.filter((p) => p.category === selectedCategory);
    }

    temp = temp.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

 if (query.trim() !== "") {
    const lower = query.toLowerCase();

    temp = temp.filter(
      (p) =>
        p.title.toLowerCase().includes(lower) ||
        p.category.toLowerCase().includes(lower) 
    );
  }

    if (sortBy === "Price: Low → High") temp.sort((a, b) => a.price - b.price);
    else if (sortBy === "Price: High → Low")
      temp.sort((a, b) => b.price - a.price);

    return temp;
  }, [allProducts, selectedCategory, priceRange, sortBy,query]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);



  return (
    <div className="container-fluid px-3">
<Head>
        <title> Zaylo. Shop</title>
      </Head>
      {/* Banner */}
      <div className={`${styles.banner} text-center text-md-start`}>
        <nav className={styles.breadcrumb}>Home • Shop</nav>
        <h1 className={styles.title}>
          {selectedCategory === "All"
            ? "Explore All Products"
            : selectedCategory}
        </h1>
        <p className={styles.subtitle}>
          Discover premium items curated for modern lifestyle.
        </p>

           <div className="d-flex align-items-center gap-3">

            <input
              className="form-control rounded-5  d-lg-block"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
              style={{ background: "#fcf6ef" }}
            />

          
          </div>
      </div>

      <div className="row mt-4">

        {/* Desktop Sidebar */}
        <div className="d-none d-md-block col-md-3">
          <SidebarFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={(c) => {
              setSelectedCategory(c);
              setPage(1);
              scrollToTop();
            }}
            priceRange={priceRange}
            onChangePrice={(v) => {
              setPriceRange(v);
              setPage(1);
            }}
          />
        </div>

        {/* Mobile Filter */}
        <div className="d-md-none mb-3">
          <button
            className="btn btn-dark w-100"
            data-bs-toggle="collapse"
            data-bs-target="#mobileFilter"
          >
            Filters
          </button>

          <div id="mobileFilter" className="collapse mt-2">
            <SidebarFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={(c) => {
                setSelectedCategory(c);
                setPage(1);
              }}
              priceRange={priceRange}
              onChangePrice={(v) => {
                setPriceRange(v);
                setPage(1);
              }}
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="col-md-9">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-3 gap-2">
            <p className="m-0 text-center text-md-start">
              Showing <strong>{paged.length}</strong> of{" "}
              <strong>{filtered.length}</strong> products
            </p>

            <select
              className={`${styles.sortDropdown} form-select w-100 w-md-auto`}
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option>Most Popular</option>
              <option>Price: Low → High</option>
              <option>Price: High → Low</option>
            </select>
          </div>

            <div className="row g-3">
            {loading
              ? [...Array(9)].map((_, i) => (
                  <div key={i} className="col-6 col-sm-6 col-md-4">
                    <SkeletonCard />
                  </div>
                ))
              : paged.map((p) => (
                  <div key={p.id} className="col-6 col-sm-6 col-md-4">
                    <ProductCard p={p} />
                  </div>
                ))}
          </div>

          <Pagination
            page={page}
            totalPages={totalPages}
            onChange={(p) => {
              setPage(p);
              scrollToTop();
            }}
          />
        </div>
      </div>
    </div>
  );
}
