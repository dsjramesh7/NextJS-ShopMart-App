import { auth } from "@/auth";
import Cart from "@/components/Cart";
import { redirect } from "next/navigation";
import React from "react";

const CartPage = async () => {
  const getSession = await auth();
  // console.log(getSession);
  if (!getSession?.user) redirect("/unauth-page");
  return <Cart />;
};

export default CartPage;
