"use client";
import { useCustomerContext } from "@/context/customerContext";
import { useState } from "react";

const inputData = {
  userName: "",
  phone: "",
  image: "",
};
const CustomerForm = ({ setUsers}) => {
  const [input, setInput] = useState(inputData);
  const {state:{customers},dispatch}=useCustomerContext()
  const handleChange = (e) => {
    setInput((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
        id: Math.random().toString(36).substr(2, 9),
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(addProduct(input));
    setInput(inputData);
    setUsers((prevData) => [...prevData, input]);
    dispatch({
        type:"ADD",
        payload:input
    })
  };

  return (
    <div className="formContainer overflow-hidden bg-white bg-opacity-100 border border-gray-300 rounded-md p-4">
      <h4 className="formTitle mt-2 mb-8 text-center text-2xl font-bold leading-relaxed">
        Add New Customer
      </h4>
      <form onSubmit={handleSubmit} className="space-y-4 text-[#534F4F]">
        {/* <!-- product name --> */}
        <div className="space-y-2">
          <label htmlFor="inputName">Customer Name</label>
          <input
            className="w-full rounded-md border border-gray-300 p-1.5"
            id="inputName"
            type="text"
            name="userName"
            required
            value={input.userName}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="inputPhone">Phone Number</label>
          <input
            className="w-full rounded-md border border-gray-300 p-1.5"
            type="tel"
            name="phone"
            pattern="(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$"
            id="inputPhone"
            required
            value={input.phone}
            onChange={(e) => handleChange(e)}
          />
        </div>
        {/* <!-- product image url --> */}
        <div className="space-y-2">
          <label htmlFor="inputImage">Image Url <span className="text-red-400">(This time only accept pixels photos links)</span></label>
          <input
            className="w-full rounded-md border border-gray-300 p-1.5"
            type="text"
            id="inputImage"
            name="image"
            required
            value={input.image}
            onChange={(e) => handleChange(e)}
          />
        </div>
        {/* <!-- submit button --> */}
        <button
          type="submit"
          className="submit mt-4 block w-full rounded-md bg-blue-600 text-white p-2 hover:bg-opacity-80 active:bg-opacity-100"
        >
          Add Customer
        </button>
      </form>
    </div>
  );
};

export default CustomerForm;
