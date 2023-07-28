import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div  className="md:flex md:flex-row mt-20 mx-8">
     <div className="md:w-1/2 flex flex-col justify-center items-center">
     <h2 className="font-serif text-5xl text-gray-600 mb-4 text-center md:self-start md:text-left">Welcome to our Shop</h2>
        <p className="uppercase text-gray-600 tracking-wide text-center md:self-start md:text-left">Our brand tagline goes here.</p>
        <Link href="/" className="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-4 px-8 text-gray-50 uppercase text-xl md:self-start my-5">Shop Now</Link>
     </div>
     <div className="md:w-1/2">
      <Image src="/hero-img.svg" width={700} height={700}
      alt="hero"/>
      </div>
    </div>
  );
}
