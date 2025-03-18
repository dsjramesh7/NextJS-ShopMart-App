"use client";

import Image from "next/image";

const ProductCard = ({ item }) => {
  const { title, price, rating, thumbnail } = item;

  return (
    <div className="bg-white shadow-lg rounded-xl p-5 hover:shadow-2xl transition duration-300">
      <Image src={thumbnail} alt={title} width={100} height={100} />
      <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
      <p className="text-gray-600 text-sm mt-2">⭐ {rating}</p>
      <p className="text-lg font-bold text-blue-600 mt-2">${price}</p>
    </div>
  );
};

export default ProductCard;
