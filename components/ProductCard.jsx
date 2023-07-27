// import { useDispatch, useSelector } from "react-redux";

import { useCartContext } from "@/context/cartContext";
import Image from "next/image";

const ProductCard = ({ product }) => {
  const {
    state: { cart },
    dispatch,
  } = useCartContext();
  return (
    <div className="max-w-[350px] rounded-md border border-gray-300">
      <Image
        className=""
        src={product.image}
        alt="product"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "350px",objectFit:"cover" }}
      />

      <div className="p-4 space-y-2">
        <h4 className="font-semibold">{product.productName}</h4>
        <p className="text-sm leading-5 text-blue-gray-600">
          {product.category}
        </p>
        <div className="flex items-center justify-between pb-2">
          <p className="font-bold">
            BDT <span className="font-bold">{product.price}</span>
          </p>
        </div>
        {cart?.some((p) => p.id === product.id) ? (
          <button
            className="mt-4 block w-full rounded-md bg-red-700 p-2 text-white"
            onClick={() =>
              dispatch({ type: "REMOVE_FROM_CART", payload: product })
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
                payload: product,
              })
            }
          >
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
