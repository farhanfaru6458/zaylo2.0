'use client'
import React, { useEffect, useState } from 'react'
import { ProductServices } from '../services/product-services';
import Image from 'next/image';



    type Product = {
   id: number;
  title: string;
  price: number;
  quantity: number;
  images: string[];
  category?: string;
  color?: string;
  band?: string;
  rating:number;
  description:string;
};

type Props = {
  product?: Product;
};

export default function YouMight({ product }: Props) {




 const [related, setRelated] = useState<Product[]>([]);


 useEffect(() => {
    let mounted = true;

    async function loadRelated() {
      if (!product?.category) {
        if (mounted) setRelated([]);
        return;
      }

      try {
        const items = await ProductServices.getProductsByCategory(
          product.category
        );
        if (!mounted) return;
        // exclude current product from related list if id exists
        const filtered = items.filter((i: Product) => i.id !== product.id);
        setRelated(filtered);
      } catch (err) {
        console.error('Failed to load related products', err);
        if (mounted) setRelated([]);
      }
    }

    loadRelated();

    return () => {
      mounted = false;
    };
  }, [product?.category, product?.id]);


  return (
    <div className='m-3'>
      <h2 className="mt-5 section-title">You Might Also Like This</h2>

      <div className="row g-4 ">
        {related.length === 0 && <p>No related products found.</p>}

        {related.map((item) => (
          <div key={item.id} className="col-6 col-md-3">
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
          </div>
        ))}
      </div>
    </div>
  )
}
