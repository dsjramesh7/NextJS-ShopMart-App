import { fetchSingleProductDetails } from "@/actions";
import ProductDetailsCard from "@/components/ProductDetailsCard";
import React from "react";

const ProductDetailsPage = async ({ params }) => {
  const getProductDetails = await fetchSingleProductDetails(params?.details);
  // console.log("pro", getProductDetails?.data);
  return (
    <div>
      {getProductDetails?.data ? (
        <ProductDetailsCard productdetails={getProductDetails?.data} />
      ) : (
        <p>No Details Present of this Product</p>
      )}
    </div>
  );
};

export default ProductDetailsPage;
