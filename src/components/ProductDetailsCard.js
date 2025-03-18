"use client";
import Image from "next/image";

const ProductDetailsCard = ({ productdetails }) => {
  const { title, description, category, price, rating, stock, thumbnail } =
    productdetails;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="max-w-4xl w-full bg-white shadow-xl rounded-lg overflow-hidden border border-gray-200 p-6 flex flex-col md:flex-row gap-8">
        {/* Left - Product Image */}
        <div className="w-full md:w-1/2">
          <Image
            src={thumbnail}
            alt={title}
            width={500}
            height={500}
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Right - Product Info */}
        <div className="w-full md:w-1/2 flex flex-col justify-between">
          <div>
            {/* Title */}
            <h2 className="text-3xl font-bold text-gray-800">{title}</h2>

            {/* Category */}
            <span className="inline-block bg-blue-100 text-blue-600 text-sm font-semibold px-3 py-1 rounded-full mt-2">
              {category}
            </span>

            {/* Description */}
            <p className="text-gray-600 mt-4 text-sm">{description}</p>

            {/* Price & Stock */}
            <div className="flex justify-between items-center mt-4">
              <p className="text-2xl font-bold text-green-600">${price}</p>
              <p
                className={`text-sm font-semibold ${
                  stock > 0 ? "text-green-500" : "text-red-500"
                }`}
              >
                {stock > 0 ? `In Stock: ${stock}` : "Out of Stock"}
              </p>
            </div>

            {/* Rating */}
            <div className="mt-3 flex items-center">
              <span className="text-yellow-500 text-xl">⭐</span>
              <p className="ml-1 text-gray-700 font-semibold">{rating} / 5</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex gap-4">
            <button className="w-1/2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg shadow-md transition duration-300">
              Add to Cart 🛒
            </button>
            <button className="w-1/2 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg shadow-md transition duration-300">
              Buy Now ⚡
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
