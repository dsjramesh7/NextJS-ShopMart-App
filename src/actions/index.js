"use server";

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
