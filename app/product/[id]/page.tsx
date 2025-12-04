"use client"

import Link from "next/link";
import React from "react";
import { useCart } from "../../context/CardContext";

// TEMP PRODUCT DATA - Replace with DB later
const products = [
  {
    id: 1,
    title: "Vintage Denim Jacket",
    price: 1299,
    image: "https://images.unsplash.com/photo-1555583743-991174c11425?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "A timeless, rugged denim jacket with a classic vintage wash. Perfect for layering.",
  },
  {
    id: 2,
    title: "Retro Printed Shirt",
    price: 899,
    image: "https://images.unsplash.com/photo-1638260753148-d0316920e0af?q=80&w=633&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "A bold, colorful shirt featuring a striking retro geometric print. Made from breathable fabric.",
  },
  {
    id: 3,
    title: "Classic Windbreaker",
    price: 1499,
    image:
      "https://images.unsplash.com/photo-1592860699405-482d621e2bb1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Lightweight and water-resistant classic nylon windbreaker. Great for transitional weather.",
  },
  {
    id: 4,
    title: "Old Cassette",
    price: 1799,
    image:
      "https://images.unsplash.com/photo-1608934923502-4398e955df00?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Cassette with a distressed look for that authentic to provide an old-school vibe.",
  },
  {
    id: 5,
    title: "Vintage books",
    price: 1599,
    image:
      "https://images.unsplash.com/photo-1491841573634-28140fc7ced7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "A genuine collection of old books to enrich the aesthetic of your workplace.",
  },
  {
    id: 6,
    title: "Retro Sunglasses",
    price: 499,
    image:
      "https://images.unsplash.com/photo-1664848190601-408624123411?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Iconic round frame sunglasses with tinted lenses. A perfect accessory to complete your retro look.",
  },
];


export default function ProductDetailPage({ params }: any) {


    const {addToCart, cart } = useCart();

  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);

  const id  = params.id

 // 2. **IMPROVEMENT:** Convert the string ID to a number for comparison.
  // Using parseInt is generally clearer for integer IDs than Number().
  const productId = parseInt(id as string, 10); 
  // We use 'as string' to help TypeScript understand the expected type if 'any' is used for params.

  const product = products.find((p) => p.id === productId);

  // 3. Check if conversion failed (i.e., if productId is NaN) or if product wasn't found.
  if (!product || isNaN(productId)) {
    return <div className="p-10">Product not found.</div>;
  }

  return (
    <div className="min-h-screen bg-[#f9f6f1] text-[#4a3f35]">
      <header className="px-6 py-4 flex items-center justify-between bg-white shadow">
        <Link href="/" className="text-xl font-extrabold">Retro Reborn</Link>
        <nav className="flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
           <Link href="/cart" className="relative">
          Cart{totalQty > 0 && ` (${totalQty})`}
        </Link>
        </nav>
      </header>

      <div className="max-w-6xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <img
            src={product.image}
            alt={product.title}
            className="rounded-xl w-full h-[500px] object-cover shadow"
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold">{product.title}</h1>
          <p className="mt-4 text-lg text-gray-700">{product.description}</p>

          <p className="mt-6 text-3xl font-bold">₹{product.price}</p>

          <button className="mt-6 bg-[#d97706] hover:bg-[#b45309] text-white px-6 py-3 rounded-md"
           onClick={(e) => {e.preventDefault()
          addToCart(product)}}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
