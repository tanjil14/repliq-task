"use client";
import { useUserContext } from "@/context/userContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import usersData from "../../utils/users.json";
const page = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { login } = useUserContext();
  const router = useRouter();
  const handleLogin = (e) => {
    e.preventDefault();
    const user = usersData.users.find(
      (user) => user.phone === phone && user.password === password
    );
    if (user) {
      login(user);
      setErrorMessage("");
      router.push("/products");
      console.log("Logged in successfully!", user);
    } else {
      setErrorMessage("Invalid credentials. Please try again.");
    }
  };
  return (
    <section>
      <div className="h-screen flex flex-col sm:flex-row justify-center">
        <div className="flex w-full sm:w-2/5 justify-center items-center">
          <div className="w-full ">
            <h5 className="text-2xl font-semibold mb-4">Lets Sign You In</h5>
            <p className="text-base font-medium mb-10">
              Don’t have an account?{" "}
              <Link className="text-[#1A5DBE]" href="register">
                Register
              </Link>
            </p>
            <div className="mt-10">
              <form onSubmit={handleLogin}>
                <input
                  type="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your phone"
                  className="block w-full bg-white border-[#900613] placeholder-[#898989] border rounded-[5px] p-2 focus:outline-none focus:border-2 my-8"
                />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="block w-full bg-white border-[#900613] placeholder-[#898989] border rounded-[5px] p-2 focus:outline-none focus:border-2 my-6"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="flex items-center justify-between my-8">
                  <div className="flex items-center gap-1">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      className="w-[14px] h-[14px] bg-[#898989] cursor-pointer"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="ml-1 text-sm font-medium text-[#898989] cursor-pointer"
                    >
                      Remember me
                    </label>
                  </div>
                  <span className="text-[#1A5DBE] text-base font-semibold">
                    Forget Password
                  </span>
                </div>
                <button
                  type="submit"
                  className="button block w-full bg-[#900613] text-white font-medium text-lg rounded-[5px] border border-solid border-[#900613] cursor-pointer py-2.5 my-8"
                >
                  Login
                </button>
                {errorMessage && <p>{errorMessage}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
