"use client";
import { useUserContext } from "@/context/userContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import usersData from "../../utils/users.json"
const page = () => {
    const {login}=useUserContext()
  const [phone, setPhone] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router=useRouter()
  const isValidPhoneNumber = () => {
    const regex = new RegExp(/(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/);
    return regex.test(phone);
  };
  const handleRegister = (e) => {
    e.preventDefault();
    // creating a new user object
    const newUser = {
      userName,
      phone,
      password,
    };
    // Check if the phone number is valid or invalid
    if (!isValidPhoneNumber()) {
      setErrorMessage("Phone Number is Not Valid!");
      return;
    }
    // Check if the phone number is already registered
    const isPhoneRegistered = usersData.users.some(
      (user) => user.phone === phone
    );

    if (isPhoneRegistered) {
      setErrorMessage("Phone number is already registered.");
    } else {
      // Update the usersData array
      usersData.users.push(newUser);
      router.push('/products')
      // Save the updated usersData array to the local JSON file
      login(newUser)
      setSuccessMessage("Registration successful!");
      setErrorMessage("");
    }
  };
  return (
    <section>
      <div className="h-screen flex flex-col sm:flex-row justify-center">
        <div className="flex w-full sm:w-2/4 md:w-2/5 justify-around items-center -mt-2 sm:mt-0">
          <div className="w-full xl:w-3/5 px-10 sm:px-6 xl:px-0">
            <h5 className="text-2xl font-semibold mb-4">Lets Sign Up</h5>
            <p className="text-base font-medium mb-10">
              Have an account?{" "}
              <Link className="text-[#1A5DBE]" href="/login">
                Login
              </Link>
            </p>
            <div className="mt-10" onSubmit={handleRegister}>
              <form>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="block w-full bg-white border-[#900613] placeholder-[#898989] border rounded-[5px] p-2 focus:outline-none focus:border-2 my-8"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
                <input
                  type="tel"
                  placeholder="0198786875"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  pattern="(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$"
                  required
                  className="block w-full bg-white border-[#900613] placeholder-[#898989] border rounded-[5px] p-2 focus:outline-none focus:border-2 my-8"
                />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="block w-full bg-white border-[#900613] placeholder-[#898989] border rounded-[5px] p-2 focus:outline-none focus:border-2 my-6"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="submit"
                  className="button block w-full bg-[#900613] text-white font-medium text-lg rounded-[5px] border border-solid border-[#900613] cursor-pointer py-2.5 my-8 disabled:cursor-not-allowed"
                >
                  Create account
                </button>
                {errorMessage && <p>{errorMessage}</p>}
                {successMessage && <p>{successMessage}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
