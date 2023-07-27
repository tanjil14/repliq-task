import { useCartContext } from "@/context/cartContext";
import Image from "next/image";

const CartItem = ({ item }) => {
  const { dispatch } = useCartContext();
  return (
    <div className="grid grid-cols-12 rounded-md border border-gray-300 p-4">
      <div className="flex items-center col-span-6 space-x-6">
        {/* <!-- cart image --> */}
        <Image  width={80} height={80} src={item.image} alt="product" />
        {/* <!-- cart item info --> */}
        <div className="space-y-2">
          <h4 className="font-semibold">{item.productName}</h4>
          <p className="text-sm leading-5 text-blue-gray-600">
            {item.category}
          </p>
          <p>
            BDT <span className="">{item.price}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
        {/* <!-- amount buttons --> */}
        <div className="flex items-center space-x-4">
          <span className="font-semibold">Quantity:</span>
          <input
            type="text"
            value={item?.qty}
            className="shadow appearance-none border rounded text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-semibold py-1 px-2 w-[100px]"
            onChange={(e) =>
              dispatch({
                type: "CHANGE_CART_QTY",
                payload: {
                  id: item.id,
                  qty: e.target.value,
                },
              })
            }
          />
        </div>
        {/* <!-- price --> */}
        <p className="text-lg font-bold">
          BDT <span className="">{(item.price * item.qty).toFixed(2)}</span>
        </p>
      </div>
      {/* <!-- delete button --> */}
      <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
        <button
          className=""
          onClick={() =>
            dispatch({
              type: "REMOVE_FROM_CART",
              payload: item,
            })
          }
        >
          <span className="text-lg text-red-400">Delete</span>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
