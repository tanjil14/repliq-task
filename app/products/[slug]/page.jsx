"use client";
import { useCartContext } from "@/context/cartContext";
import { useUserContext } from "@/context/userContext";
import products from "@/utils/products";
import Image from "next/image";
import { useRouter } from "next/navigation";

const page = ({ params }) => {
  const {
    state: { cart },
    dispatch,
  } = useCartContext();
  const getData = products?.filter((product) => product.id == params.slug);
  const { id, image, productName, category, price } = getData[0];
  const router = useRouter();
  const { loggedInUser } = useUserContext();
  if (!loggedInUser) {
    router?.push("/login");
  }
  if (loggedInUser) {
    return (
      <div className="mt-16 flex justify-center w-full">
        <div className="w-[500px] rounded-md border border-gray-300">
          <Image
            className=""
            src={image}
            alt="product"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "350px", objectFit: "cover" }}
          />

          <div className="p-4 space-y-2">
            <h4 className="font-semibold">{productName}</h4>
            <p className="text-sm leading-5 text-blue-gray-600">{category}</p>
            <div className="flex items-center justify-between pb-2">
              <p className="font-bold">
                BDT <span className="font-bold">{price}</span>
              </p>
            </div>
            {cart?.some((p) => p.id === id) ? (
              <button
                className="mt-4 block w-full rounded-md bg-red-700 p-2 text-white"
                onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: { id, image, productName, category, price },
                  })
                }
              >
                Remove from Cart
              </button>
            ) : (
              <button
                className="mt-4 block w-full rounded-md bg-blue-700 p-2 text-white"
                onClick={() =>
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: { id, image, productName, category, price },
                  })
                }
              >
                Add To Cart
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
};

export default page;
