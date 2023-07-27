"use client";

import CartItem from "@/components/CartItem";
import PaymentDetails from "@/components/PaymentDetails";
import { useCartContext } from "@/context/cartContext";

import { useUserContext } from "@/context/userContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const page = () => {
    const {state:{cart}}=useCartContext()
      // calculate total price
      const [total, setTotal] = useState();
      useEffect(() => {
        setTotal(
          (cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)).toFixed(2)
        );
      }, [cart]);
  const router = useRouter();
  const { loggedInUser } = useUserContext();
  if (!loggedInUser) {
    router?.push("/login");
  }
  if (loggedInUser) {
    return <div className="py-16">
    <div className="container 2xl:px-8 px-2 mx-auto">
      <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
      <div className="cartListContainer w-full sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px] mx-auto grid gap-8 sm:gap-4 lg:gap-8 p-2 grid-cols-1 lg:grid-cols-custom">
        <div className="space-y-6">
          {/* <!-- Cart Item --> */}
          {cart.length > 0 ? (
            cart.map((item) => <CartItem key={item.id} item={item} />)
          ) : (
            <p className="text-center bg-green-200 py-5">No items in cart</p>
          )}
          {/* <!-- Cart Items Ends --> */}
        </div>

        {/* <!-- Bill Details --> */}
        <div className="paymentDetailsContainer">
          <PaymentDetails totalPrice={total} />
        </div>
      </div>
    </div>
  </div>
  }
};

export default page;
