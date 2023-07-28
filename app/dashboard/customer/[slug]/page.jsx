"use client";
import { useCustomerContext } from "@/context/customerContext";
import { useUserContext } from "@/context/userContext";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Customer = ({ params }) => {
  const {
    state: { customers },
  } = useCustomerContext();
  const router = useRouter();
  const { loggedInUser } = useUserContext();
  if (!loggedInUser) {
    router?.push("/login");
  }
  const getData = customers?.filter(
    (customer) => customer.userName == params.slug
  );
  const { userName, image, phone } = getData[0] || [];

  if (loggedInUser) {
    return (
      <div className="bg-gray-100 h-screen">
        <div className="pt-10">
          <div className="max-w-md mx-auto bg-white p-8 shadow-md rounded-md">
            <div className="flex justify-center mb-6">
              <Image
                className="w-24 h-24 rounded-full object-cover border-2 border-indigo-500"
                src={image}
                alt="User Photo"
                width={96}
                height={96}
              />
            </div>
            <div className="text-center mb-4">
              <h1 className="text-2xl font-bold text-gray-800">{userName}</h1>
            </div>

            <div className="text-center">
              <p className="text-lg text-gray-600">Phone: {phone}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Customer;
