import Image from "next/image";
import { useEffect, useState } from "react";
import { ProductServices } from "../../services/product-services";
import styles from "./product-detail.module.css";
import Link from "next/link";
import ProductDetailsSkeleton from "./ProductDetailSkeleton";
import { Metadata } from "next";
import Head from "next/head";

type Product = {
  id?: number;
  images?: string[];
  title: string;
  category: string;
  rating: number;
  price: number;
  description: string;
};

type CartItem = {
  id: string | number;
  title: string;
  price: number;
  quantity: number;
  images: string[];
  category?: string;
};

type Props = {
  product: {
    id: string;
    name: string;
    price: number;
    description: string;
    title: string;
    rating: number;
    category: string;
    images: string[];
  };
};


export const metadata:Metadata={
title:"Zaylo's Shop"
}

export default function ProductDetailsClient({ product }: Props) {
  const [activeImage, setActiveImage] = useState<string | undefined>(
    product.images?.[0]
  );

 const scrollToTop  = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [related, setRelated] = useState<Product[]>([]);



  // Load related products
  useEffect(() => {
    async function loadRelated() {
      if (!product.category) return;

      const items = await ProductServices.getProductsByCategory(
        product.category
      );

      // Convert product id (string) to number so the comparison matches types
      const productId = Number(product.id);

      // Remove same product
      const filtered = items.filter((p: Product) => p.id !== productId);

      setRelated(filtered.slice(0, 4));
    }

    loadRelated();
  }, [product.category, product.id]);

{scrollToTop()}

   const [loading, setLoading] = useState(true);
  
    useEffect(() => {
  
      setTimeout(() => {
        setLoading(false);
      },1000 );
    }, []);

  

    if(loading) return <ProductDetailsSkeleton/>
  return (
  
    <div className="container py-5 product-details-page">
    <Head>
        <title>{product.title} | Product Detail</title>
        <meta name="description" content={product.description} />
        <meta property="og:title" content={product.title} />
        <meta property="og:description" content={product.description} />
      </Head>
      <div className="row g-5">
        {/* LEFT IMAGES */}
        <div className="col-md-6">
          <div className="main-image-wrapper rounded-4 shadow-lg">
            <Image
              src={activeImage ?? ""}
              alt={product.title}
              width={600}
              height={600}
              className="img-fluid main-imag rounded-4 shadow-lg"
            />
          </div>

          <div className="d-flex gap-3 mt-5">
            {product.images?.map((img, i) => (
              <Image
                key={i}
                src={img}
                alt="thumb"
                width={100}
                height={100}
                onClick={() => setActiveImage(img)}
      className={`thumb-img rounded-5 border-success border shadow-lg 
        ${activeImage === img ? "active-thumb" : ""}`}     />
            ))}
          </div>
        </div>

        {/* RIGHT INFO */}
        <div className="col-md-6">
          <span className="category-label shadow-lg rounded-4 bg-white p-1" style={{background:"linear-gradient(90deg, rgb(194 183 253 / 77%) 0%, rgb(218 203 255 / 64%) 60%, rgb(242 229 251 / 75%) 100%)"}}>{product.category}</span>

          <h1 className="product-title fw--bold">{product.title}</h1>

          <p className="rating">⭐ {product.rating} / 5</p>

          <div className="price-area bg-white shadow-lg p-3 rounded-4 d-flex align-items-center gap-3">
            <h1 className="price">${product.price}</h1>
            <span className="old-price text-decoration-line-through">${product.price + 50}</span>
            <span className="discount-badge bg-success text-white p-1 rounded-4 shadow-sm" aria-disabled>10% OFF</span>
          </div>

          

          {/* BUTTONS */}
          <div className="actions mt-5 d-flex align-items-center gap-3 ">
           


            <Link href={'/cart'} className={`${styles.buyNow} btn btn-dark w-25  p-1 rounded-5 shadow-lg`}   onClick={() => {
  const stored = JSON.parse(localStorage.getItem("full-cart") || "[]");

  const newItem = {
    id: product.id,
    title: product.title,
    price: product.price,
    quantity: 1,
    images: product.images,
    category: product.category
  };

  stored.push(newItem);

  localStorage.setItem("full-cart", JSON.stringify(stored));

}}>Buy Now</Link>
        <button 
      
  type="button"
  className={`${styles.addToCart}   w-25 h-100 p-1 rounded-5 shadow-lg btn"`}
onClick={() => {
  const cart:CartItem[] = JSON.parse(localStorage.getItem("full-cart") || "[]");

  const existing = cart.find((item:CartItem) => item.id === product.id);

  let updated;

  if (existing) {

    updated = cart.map((item: CartItem) =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  } else {
   
    updated = [...cart, { ...product, quantity: 1 }];
  }

  localStorage.setItem("full-cart", JSON.stringify(updated));


  window.dispatchEvent(new Event("cart-updated"));
}}

>
  Add to Cart
</button>

        </div>
      </div>

      {/* DESCRIPTION AREA */}
      <div className="description-box shadow-lg mt-5 p-4 rounded-5">
        <ul className="nav nav-tabs description-tabs">
          <li className="nav-item">
            <button className="nav-link active">Description</button>
          </li>
          <li className="nav-item">
            <button className="nav-link">Specifications</button>
          </li>
          <li className="nav-item">
            <button className="nav-link">Reviews</button>
          </li>
        </ul>

        <p className="description-text mt-4">
          {product.description}
        </p>
      </div>

      {/* RELATED PRODUCTS */}
      <h2 className="mt-5 section-title">Related Products</h2>

      <div className="row g-4 ">
 
        {related.length === 0 && <p>No related products found.</p>}

        {related.map((item) => (
          <div key={item.id} className="col-6 col-md-3">
                     <Link href={'/products'}    style={{textDecoration:"none", color:"black"}}    >
            <div className="related-card shadow-lg p-3 rounded-5">

              <Image
                src={item.images?.[0] ?? "/placeholder.png"}
                alt={item.title}
                width={250}
                height={150}
                className="img-fluid rounded-3 mb-2 object-cover"
              />

              <h5 className="card-title">{item.title}</h5>
              <p className="text-muted">${item.price}</p>
            </div>
            </Link>
          </div>
        ))}
   
      </div>


    </div>
    </div>
  );
}
