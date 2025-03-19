import { fetchAllProducts } from "@/actions";
import { auth } from "@/auth";
import ProductCard from "@/components/ProductCard";
import { redirect } from "next/navigation";

export default async function Home() {
  const getSession = await auth();
  // console.log(getSession);
  if (!getSession?.user) redirect("/unauth-page");
  const getAllProducts = await fetchAllProducts();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Shopping Cart
      </h1>

      {getAllProducts?.data?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {getAllProducts.data.map((productItem) => (
            <ProductCard key={productItem.id} item={productItem} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600 text-lg">
          No products available.
        </p>
      )}
    </div>
  );
}
