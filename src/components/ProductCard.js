"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const ProductCard = ({ item }) => {
  const { id, title, price, rating, thumbnail } = item;
  const router = useRouter();
  const handleProductDetails = (currentProductId) => {
    // console.log(currentProductId);
    router.push(`/${currentProductId}`);
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-5 hover:shadow-2xl transition duration-300">
      <Image src={thumbnail} alt={title} width={100} height={100} />
      <h2>{id}</h2>
      <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
      <p className="text-gray-600 text-sm mt-2">⭐ {rating}</p>
      <p className="text-lg font-bold text-blue-600 mt-2">${price}</p>
      <Button onClick={() => handleProductDetails(id)} variant="destructive">
        Button
      </Button>
    </div>
  );
};

export default ProductCard;
