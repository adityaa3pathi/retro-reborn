"use client"

import Link from "next/link";
import { useCart } from "./context/CardContext";

export default function Home() {

  const { cart } = useCart();
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  return (
    <main className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full py-4 px-6 shadow-md bg-white">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">
            Retro Reborn
          </h1>

          <nav className="space-x-6 text-gray-700 font-medium">
            <a href="/" className="hover:text-black">Home</a>
            <a href="/product" className="hover:text-black">Products</a>
            <a href="/about" className="hover:text-black">About</a>
            <a href="/contact" className="hover:text-black">Contact</a>
             <Link href="/cart" className="relative">
          Cart{totalQty > 0 && ` (${totalQty})`}
        </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[70vh] w-full">
        <img
          src="https://images.unsplash.com/photo-1558769132-cb1aea458c0d?auto=format&fit=crop&w=1500&q=80"
          className="h-full w-full object-cover"
          alt="Vintage Fashion"
        />

        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
              Discover Vintage Treasures
            </h2>
            <p className="text-lg md:text-xl mb-6">
              Curated thrift pieces that never go out of style.
            </p>

            <a
              href="/product"
              className="px-6 py-3 bg-white text-black rounded-xl font-semibold hover:bg-gray-200 transition"
            >
              Shop Now
            </a>
          </div>
        </div>
      </section>

      {/* Body / Featured Products */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between mb-10">
          <h3 className="text-3xl font-bold text-gray-900">Featured Products</h3>

          <a
            href="/product"
            className="text-blue-600 hover:underline text-lg font-medium"
          >
            View All →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
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
          ].map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition"
            >
              <img src={p.image} className="w-full h-64 object-cover" />

              <div className="p-4">
                <h4 className="text-xl font-semibold text-gray-900 mb-1">
                  {p.title}
                </h4>
                <p className="text-gray-700 font-medium">₹{p.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-10 mt-auto">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-xl font-bold mb-2">Retro Reborn</h3>
            <p className="text-gray-300">
              Your trusted thrift store for authentic vintage fashion.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/products" className="hover:text-white">Products</a></li>
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>

            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="/refund" className="hover:text-white">Refund Policy</a></li>
              <li><a href="/terms" className="hover:text-white">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

        <p className="text-center text-gray-400 mt-6">
          © {new Date().getFullYear()} Retro Reborn — All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}
