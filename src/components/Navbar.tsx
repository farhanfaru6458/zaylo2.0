

import React, { useEffect, useState } from "react";
import { IoIosBasket } from "react-icons/io";
import styles from "./css/Navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../../public/Zaylo-Logo.png";

export default function Navbar() {
  const [cartCount, setCartCount] = useState(0);
  const pathname = usePathname();
  useEffect(() => {
    const update = () => {
      const items = JSON.parse(localStorage.getItem("full-cart") || "[]");
      setCartCount(items.length);
    };

    update();

    window.addEventListener("cart-updated", update);
    return () => window.removeEventListener("cart-updated", update);
  }, []);

  const isCartPage = pathname === "/cart";

  return (
    <nav
      className={`${styles.navbar} navbar navbar-expand-lg rounded-4 fixed-top shadow-sm m-2 px-3`}
    >
      <div className="container-fluid">

        {/* Logo */}
        <Link href="/" className="navbar-brand fw-bold d-flex align-items-center gap-2">
          <Image src={logo} width={40} height={40} alt="logo" />
          Zaylo.
        </Link>

     
        <div className="collapse navbar-collapse" id="menu">
         <ul className="navbar-nav mx-auto text-center gap-2 gap-lg-4">

            <li className="nav-item">
              <Link
                className={ `  nav-link ${pathname === "/" ? styles.activeLink : ""}`}
                href="/"
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${
                  pathname === "/products" ? styles.activeLink : ""
                }`}
                href="/products"
              >
                Shop
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${
                  pathname === "/about" ? styles.activeLink : ""
                }`}
                href="/about"
              >
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${
                  pathname === "/contact" ? styles.activeLink : ""
                }`}
                href="/contact"
              >
                Contact
              </Link>
            </li>

          </ul>

          {/* Search + Cart */}
        
        </div>
          <Link href="/cart" className={`position-relative ms-2 ${styles.cart}`}>
              {cartCount > 0 && (
                <span
                  className={`badge rounded-pill bg-danger position-absolute  translate-middle ${styles.badgePop}`}
                  style={{ fontSize: "12px", padding: "4px 7px" }}
                >
                  {cartCount}
                </span>
              )}

              <IoIosBasket
                size={40}
                className="p-2 rounded-4 border"
                style={{
                  backgroundColor: isCartPage ? "black" : "#fcf6ef",
                  color: isCartPage ? "white" : "black",
                  transition: "0.3s ease",
                }}
              />
            </Link>
               <button
          className="navbar-toggler rounded-4"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

      </div>
    </nav>
  );
}
