"use client";
import ProductCard from "@/components/ProductCard";
import { useUserContext } from "@/context/userContext";
import { useRouter } from "next/navigation";
import products from "@/utils/products";
const page = () => {
  const router = useRouter();
  const { loggedInUser } = useUserContext();
  if (!loggedInUser) {
    router?.push("/login");
  }
  if (loggedInUser) {
    return (
      <div className="py-16 flex flex-row">
      
          <div className="col-span-1">
            {products.length > 0 ? (
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <div className="w-full mx-auto">
                <p className="text-center bg-green-200 py-5 w-full">
                  No Products
                </p>
              </div>
            )}
          </div>
        </div>
    );
  }
};

export default page;
