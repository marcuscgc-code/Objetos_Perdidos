'use client'

import { useState } from "react";
import { ProductType } from "../types/ProductType";
import Image from "next/image";

// vaqi renderizar , usar o componente, sera construido no lado do cliente
// usado quando queremos algumas açoes do usuario como :clicar, interação
type ProductImageProps = {
  product: ProductType;
  fill?: boolean;
};

export default function ProductImage({ product, fill }: ProductImageProps) {
  const [loading, setLoading] = useState(true);

  return fill ? (
    <Image
      src={product.image}
      fill
      alt={product.title}
      className={`object-cover ${
        loading ? 'scale-110 blur-3xl grayscale' : 'scale-100 blur-0 grayscale-0'
      } transition-all duration-500 ease-in-out`}
      onLoadingComplete={() => setLoading(false)}
    />
  ) : (
    <Image
      src={product.image}
      width={400}
      height={400}
      alt={product.title}
      className={`object-cover ${
        loading ? 'scale-110 blur-3xl grayscale' : 'scale-100 blur-0 grayscale-0'
      } transition-all duration-500 ease-in-out`}
      onLoadingComplete={() => setLoading(false)}
    />
  );
}
