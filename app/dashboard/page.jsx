"use client";
import Card from "@/components/Card";
import CustomerForm from "@/components/CustomerForm";
import { useCustomerContext } from "@/context/customerContext";
import { useUserContext } from "@/context/userContext";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import usersData from "../../utils/users.json";
const page = () => {
  const [users, setUsers] = useState(usersData.users);
  const router = useRouter();
  const { loggedInUser } = useUserContext();
  if (!loggedInUser) {
    router?.push("/login");
  }
  if (loggedInUser) {
    return (
      <div className="mx-10">
        <p className="my-3 font-semibold">Admin Dashboard/Overview</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 w-full ">
          <Card
            prog={40}
            progress="w-[40%]"
            value="&#9735;"
            text="Users"
            count={1500}
            color="bg-blue-500"
          />
          <Card
            prog={60}
            progress="w-[60%]"
            value="&#9794;"
            text="Sell"
            count={100000}
            color="bg-red-500"
          />
          <Card
            prog={80}
            progress="w-[80%]"
            value="&#9851;"
            text="Product"
            count={5000}
            color="bg-yellow-500"
          />
        </div>

        <h2 className="text-xl font-bold my-6">All Customer </h2>

        <div className="mx-auto grid gap-8 px-6 customerWrapper">
          <div className="flex flex-wrap gap-4">
            {users?.map((user) => (
              <div
                key={user.phone}
                className="bg-white rounded shadow p-4 h-fit w-[250px] flex items-center flex-col"
              >
                <div>
                  <Image
                    src={user.image}
                    alt=""
                    width={120}
                    height={50}
                    className="rounded-full"
                  />

                  <h3 className="text-xl">Name:{user.userName}</h3>
                  <p className="text-gray-600">Phone: {user.phone}</p>
                </div>
                <Link href={`/dashboard/customer/${user.userName}`}>
                  <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white rounded px-2 py-1 w-full">
                    View More
                  </button>
                </Link>
              </div>
            ))}
          </div>
          <div className="customerFormContainer">
            <CustomerForm setUsers={setUsers} />
          </div>
        </div>
      </div>
    );
  }
};

export default page;
