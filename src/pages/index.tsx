'use client'

import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../components/css/Navbar.module.css";
import card1 from '../../public/card-1.png'
import card2 from '../../public/card-2.png'
import card3 from '../../public/card-3.png'
import card4 from '../../public/card-4.png'
import arrival1 from '../../public/arrival1.png'
import arrival2 from '../../public/arrival2.png'
import arrival3 from '../../public/arrival3.png'
import arrival4 from '../../public/arrival4.png'
import { BiArrowFromLeft } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";
import Link from "next/link";
import TimerCard from "../components/TimeCard";
import { PiConfetti } from "react-icons/pi";
import Loading from "../loading";
export default function Home() {

 const products = [
    {
      id: 1,
      title: " Premium Fashion T-Shirt ",
      price: "$120.00",
      img: arrival1,
      isNew: true,
    },
    {
      id: 2,
      title: "Urban Bomber Jacket",
      price: "$45.00",
      img: arrival2,
      isNew: false,
    },
    {
      id: 3,
       title: "Retro Runner Sneakers",
      price: "$110.00",
      img: arrival4,
      isNew: false,
    },
    {
      id: 4,
       title: "Leather Crossbody Bag",
      price: "$199.00",
      img: arrival3,
      isNew: true,
    },
  ];

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) return <Loading />;

  
  return (
    <div style={{boxSizing:"content-box", marginTop:"20px"}}>
      {/* carousal-section */}

      <div
        id="carouselExampleAutoplaying"
        className="carousel slide shadow-container  "
        data-bs-ride="carousel"
      >
        <div className="carousel-inner p-5 pt-0  " >
          <Link href={'/products'} 
            className={`${styles.btn}`}
            style={{
              position: "absolute",
              zIndex: "999",
              padding: "5px",
              borderRadius: "20px",
              left: "150px",
              bottom: "100px",
            }}
          >
            Shop Now <BiArrowFromLeft size={20} color="black" />
          </Link>

               <div className="carousel-item">
            <div className={styles["carousel-img-wrapper"]}>
               <picture>
      <source media="(min-width: 1025px)" srcSet="/banner-2.png" />
      <source media="(min-width: 768px)" srcSet="/banner-2.png" />
      <source media="(max-width: 767px)" srcSet="/banner-mobile-2.png" />

      <Image
        src="/banner-2.png"
        alt="banner"
        fill
        className={styles["carousel-img"]}
        style={{ boxShadow: "black 0px -1px 17px" }}
      />
    </picture>
            </div>
          </div>

         <div className="carousel-item ">
  <div className={styles["carousel-img-wrapper"]}>
    <picture>
      <source media="(min-width: 1025px)" srcSet="/banner-1.png" />
      <source media="(min-width: 768px)" srcSet="/banner-1.png" />
      <source media="(max-width: 767px)" srcSet="/banner-mobile-1.png" />

      <Image
        src="/banner-1.png"
        alt="banner"
        fill
        className={styles["carousel-img"]}
        style={{ boxShadow: "black 0px -1px 17px" }}
      />
    </picture>
  </div>
</div>

     
          <div className="carousel-item active">
            <div className={styles["carousel-img-wrapper"]}>
                <picture>
      <source media="(min-width: 1025px)" srcSet="/banner-3.png" />
      <source media="(min-width: 768px)" srcSet="/banner-3.png" />
      <source media="(max-width: 767px)" srcSet="/banner-mobile-3.png" />

      <Image
        src="/banner-3.png"
        alt="banner"
        fill
        className={styles["carousel-img"]}
        style={{ boxShadow: "black 0px -1px 17px" }}
      />
    </picture>
            </div>{" "}
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* category section */}

      <div className="container-fluid d-flex ps-5 mt-3  justify-content-between">
<h1 className={`fw-bolder`} >Browse Catagories</h1>
<button type="button" className={`btn btn-ouline-secondary border ${styles.catagoryBtn}`}>view all catagories</button>

      </div>
  <div className={styles.categoryRow}>
  <div className={` ${styles.shadowContainer}`}>
    <Link href="/products">
      <Image alt="category" src={card1} fill className="category-img" />
    </Link>
  </div>

  <div className={styles.shadowContainer}>
    <Link href="/products">
      <Image alt="category" src={card3} fill className="category-img" />
    </Link>
  </div>

  <div className={styles.shadowContainer}>
    <Link href="/products">
      <Image alt="category" src={card4} fill className="category-img" />
    </Link>
  </div>

  <div className={styles.shadowContainer}>
    <Link href="/products">
      <Image alt="category" src={card2} fill className="category-img" />
    </Link>
  </div>
</div>


                     {/* New Arrival section */}

     <div className={styles.wrapper}>
      <h2 className={styles.title}>New Arrivals</h2>
 <Link href={'/products'} style={{textDecoration:"none", color:"black"}}>
      <div className={styles.grid}>
        {products.map((p) => (
          <div className={styles.card} key={p.id}>
            {p.isNew && <span className={styles.newTag}>NEW</span>}

            <div className={styles.imgWrapper}>
              <Image
                src={p.img}
                alt={p.title}
                fill
                className={styles.productImg}
              />
            </div>

            <div className={`p-1 ${styles.cardContent}`}>
              <div className="d-flex flex-column ">
              <p className={styles.productTitle}>{p.title}</p>
              <p className={`${styles.price} mt-2`}>{p.price}</p>
</div>
              <button className={styles.circleBtn}>
                <FiPlus size={20} />
              </button>
            </div>


          </div>
        ))}
        
      </div>
      </Link>
    </div>
    
<div className="container-fluid">
  <TimerCard/>
</div>

<div className={styles.heroWrapper}>
      <h2 className={styles.title}>Join The Zaylo Club</h2>
      <p className={styles.subtitle}>
        Subscribe to our newsletter and get 10% off your first order plus exclusive access to new drops.
      </p>

      <div className={styles.inputContainer}>
        <input
          type="email"
          placeholder="Enter your email address"
          className={styles.input}
        />
        <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className={styles.btn2}>Subscribe</button>

  
  <div className="modal  fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content bg-black">
      <div className="modal-header">
        <h1 className="modal-title text-white fs-5" id="exampleModalLabel">
          Your are Subscribed 
           <PiConfetti size={30} color="white"/>
           <PiConfetti size={30} color="white"/> 
           <PiConfetti size={30} color="white"/> 
           </h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
    
      <div className="modal-footer">
        <button type="button" className={`${styles.btn2}`} data-bs-dismiss="modal">Ok</button>
       
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
    </div>
  );
}
