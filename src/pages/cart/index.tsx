"use client";
import styles from "./cart.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import YouMight from "../../components/YouMight";
import Link from "next/link";
import Loading from "../../loading";
import Head from "next/head";

type CartItem = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  images: string[];
  category?: string;
  color?: string;
  band?: string;
  rating: number;
  description: string;
};



export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

useEffect(() => {
  function loadCart() {
    const stored = localStorage.getItem("full-cart");
    if (stored) {
      setCartItems(JSON.parse(stored));
    }
  }
  loadCart();
}, []);


  const increase = (id: number) => {
    setCartItems((prev) =>
      prev.map((p) => (p.id === id ? { ...p, quantity: p.quantity + 1 } : p))
    );
  };

  const decrease = (id: number) => {
    setCartItems((prev) =>
      prev.map((p) =>
        p.id === id && p.quantity > 1 ? { ...p, quantity: p.quantity - 1 } : p
      )
    );
  };

const removeItem = (id: number) => {
  setCartItems((prev) => {
    const updated = prev.filter((p) => p.id !== id);

    localStorage.setItem("full-cart", JSON.stringify(updated));

    window.dispatchEvent(new Event("cart-updated"));



    return updated;
  });
};
 const scrollToTop  = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shipping = 15;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

   const [loading, setLoading] = useState(true);
  
    useEffect(() => {
  
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }, []);
if (loading) return <Loading />;


  {scrollToTop()}
  return (
    <div className={`${styles.cartPage} container py-4`}>
<Head>
        <title>Your Cart</title>
      </Head>
      <h1 className="text-center fw-bold mb-3">Your Cart</h1>

      <p className={`${styles.breadcrumbText} text-center`}>
        Home &gt; Shop &gt; <span className="fw-semibold">Shopping Cart</span>
      </p>

      <div className="row mt-4">

        {/* LEFT CART LIST */}
        <div className="col-12 col-lg-8">

          {cartItems.map((item) => (
            <div
              key={item.id}
              className={`${styles.cartItem} position-relative d-flex flex-wrap p-3 shadow-sm rounded-4 mb-4`}
            >
                 <div className="position-absolute top-0 end-0">
                <button
                  className={styles.removeBtn}
                  onClick={() => removeItem(item.id)}
                >
                  ×
                </button>

                  <div className="modal  fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content bg-black">
      <div className="modal-header">
        <h1 className="modal-title text-white fs-5" id="exampleModalLabel">
          Your Order Has Been Placed
      
           </h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
    
      <div className="modal-footer">
        <button type="button"  onClick={() => removeItem(item.id)} className={`${styles.btn2}`} data-bs-dismiss="modal">Ok</button>
       
      </div>
    </div>
  </div>
</div>
              </div>
              {/* PRODUCT IMAGE */}
              <div className="col-4 col-md-3 mb-3 mb-md-0">
                <Image
                  src={item.images[0]}
                  width={110}
                  height={110}
                  className="rounded-4 img-fluid"
                  alt={item.title}
                />
              </div>
              

              {/* ITEM DETAILS */}
              <div className="col-8 col-md-3 d-flex flex-column justify-content-center">
                <h5 className="fw-bold">{item.title}</h5>
                <p className="text-muted small mb-1">
                  Color: {item.color || "Black"}
                </p>
                {item.band && (
                  <p className="text-muted small">Band: {item.band}</p>
                  
                )}
                
              </div>

              {/* PRICE */}
              <div className="col-4 col-md-2 d-flex flex-column justify-content-center">
                <span className="fw-bold">${item.price.toFixed(2)}</span>
              </div>

              {/* QUANTITY */}
              <div className="col-4 col-md-2 d-flex align-items-center">
                <button
                  className={styles.qtyBtn}
                  onClick={() => decrease(item.id)}
                >
                  –
                </button>
                <span className="mx-2 fw-bold">{item.quantity}</span>
                <button
                  className={styles.qtyBtn}
                  onClick={() => increase(item.id)}
                >
                  +
                </button>
              </div>

              {/* TOTAL */}
              <div className="col-4 col-md-1 d-flex align-items-center fw-bold">
                ${(item.price * item.quantity).toFixed(2)}
              </div>

              {/* REMOVE */}
           
            </div>
          ))}
        </div>

        {/* RIGHT ORDER SUMMARY */}
        <div className="col-12 col-lg-4 mt-4 mt-lg-0">
          <div className={`${styles.orderBox} p-4 shadow-sm rounded-4`}>
            <h4 className="fw-bold mb-3">Order Summary</h4>

            <div className="d-flex justify-content-between mb-2">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="d-flex justify-content-between mb-2">
              <span>Shipping Estimate:</span>
              <span>${shipping.toFixed(2)}</span>
            </div>

            <div className="d-flex justify-content-between mb-3">
              <span>Tax Estimate:</span>
              <span>${tax.toFixed(2)}</span>
            </div>
<div className="d-flex justify-content-between mb-3">
  <span>Total:</span>
  <span>${total.toFixed(2)}</span>
</div>
            <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className={`${styles.checkoutBtn} w-100 mb-3`}>
              Proceed to Checkout

              
            </button>

            <Link href="/products" className={`${styles.continueLink} d-block text-center`}>
              ← Continue Shopping
            </Link>
          </div>
        </div>
      </div>

        

      {/* YOU MIGHT ALSO LIKE */} 
     

      {cartItems.length > 0 && (
                 <Link href={'/products'}    style={{textDecoration:"none", color:"black"}}    >
        <YouMight product={cartItems[cartItems.length - 1]} />
     </Link>
      )}

    </div>
  );
}
