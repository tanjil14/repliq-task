import { useCartContext } from '@/context/cartContext';
import React from 'react';

const PaymentDetails = ({ totalPrice }) => {
  const {dispatch}=useCartContext()
    return (
        <div className="mx-auto max-w-480 overflow-hidden rounded-md border border-gray-300 bg-white p-4">
      <h4 className="mt-2 mb-8 text-xl font-bold text-center">Bill Details</h4>
      <div className="space-y-4">
        {/* <!-- sub total --> */}
        <div className="flex items-center justify-between">
          <p>Sub Total</p>
          <p>
            BDT <span className="subtotal">{parseInt(totalPrice)}</span>
          </p>
        </div>
        {/* <!-- Discount --> */}
        <div className="flex items-center justify-between">
          <p>Discount</p>
          <p>
            BDT <span className="discount">0</span>
          </p>
        </div>
        {/* <!-- VAT --> */}
        <div className="flex items-center justify-between">
          <p>VAT</p>
          <p>
            BDT <span className="vat">0</span>
          </p>
        </div>
        {/* <!-- Total --> */}
        <div className="flex items-center justify-between pb-4">
          <p className="font-bold">TOTAL</p>
          <p className="font-bold">
            BDT <span className="total">{parseFloat(totalPrice)}</span>
          </p>
        </div>
        <button className="mt-4 block w-full rounded-md bg-blue-700 p-2 text-center uppercase text-white hover:bg-blue-500"  onClick={() =>
            dispatch({
              type: "REMOVE_CART",
              
            })
          }>place order</button>
      </div>
    </div>
    );
};

export default PaymentDetails;