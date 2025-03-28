import { fetchSingleProductDetails } from "@/actions";
import { auth } from "@/auth";
import ProductDetailsCard from "@/components/ProductDetailsCard";
import { redirect } from "next/navigation";
import React from "react";

const ProductDetailsPage = async ({ params }) => {
  const getSession = await auth();
  // console.log(getSession);
  if (!getSession?.user) redirect("/unauth-page");
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
