"use client";

import { useEffect, useState } from "react";
import { ProductServices } from "../../services/product-services";
import ProductDetailsClient from "../../components/ProductDetail";
import ProductDetailsSkeleton from "./ProductDetailSkeleton";
import { useRouter } from "next/router";

type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  title: string;
  rating: number;
  category: string;
  images: string[];
  // Add other fields as needed
};

export default function Page() {
  const [product, setProduct] = useState<Product | null>(null);
const router = useRouter();
const {id}= router.query;
  useEffect(() => {
if(!id)return;

    async function load() {
     
      const data = await ProductServices.getProductById(id as string);
      setProduct({
        ...data,
        description: data.description ?? "",
      });
    }
    load();
  }, [id]);
  

  if (!product) return <ProductDetailsSkeleton />;
  

  return <ProductDetailsClient product={product} />;
}
