"use server";

//get all the products from an api
export async function fetchAllProducts() {
  try {
    const result = await fetch("https://dummyjson.com/products");
    console.log(result);
  } catch (error) {
    return {
      success: false,
      message: "something went wrong try again later",
    };
  }
}
