"use server";

import { signIn, signOut } from "@/auth";

//get all the products from an api
export async function fetchAllProducts() {
  try {
    const result = await fetch("https://dummyjson.com/products", {
      method: "GET",
      cache: "no-store",
    });
    const data = await result.json();
    // console.log(data);
    return {
      success: true,
      data: data?.products,
      message: "Products fetched successfully",
    };
  } catch (error) {
    return {
      success: false,
      message: "something went wrong try again later",
    };
  }
}

//get Single Product Details
export const fetchSingleProductDetails = async (productId) => {
  try {
    const response = await fetch(
      `https://dummyjson.com/products/${productId}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );
    const result = await response.json();
    // console.log(result);
    return {
      success: true,
      data: result,
      message: "Product details fetched successfully",
    };
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong",
    };
  }
};

//action for sign in
export const loginAction = async () => {
  await signIn("github");
};

//action for sign out
export const logoutAction = async () => {
  await signOut();
};
