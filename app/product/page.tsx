"use client"

import Link from "next/link";
import { useCart } from "../context/CardContext";
import Image from "next/image";

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



export default function ProductsPage() {

const { addToCart, cart } = useCart();

const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#f9f6f1] text-[#4a3f35]">
      {/* Header */}
      <header className="px-6 py-4 flex items-center justify-between bg-white shadow">
        <Link href="/" className="text-xl font-extrabold tracking-wide">
          Retro Reborn
        </Link>

        <nav className="flex items-center gap-6">
          <Link href="/" className="hover:text-[#d97706] transition">
            Home
          </Link>
          <Link href="/product" className="hover:text-[#d97706] transition">
            Products
          </Link>
            <Link href="/cart" className="relative">
          Cart{totalQty > 0 && ` (${totalQty})`}
        </Link>
        </nav>
      </header>

      {/* Page Title */}
      <div className="py-10 text-center">
        <h1 className="text-4xl font-extrabold">All Products</h1>
        <p className="text-lg text-gray-600 mt-2">
          Shop our full vintage-inspired collection.
        </p>
      </div>

      {/* Product Grid */}
      <main className="flex-1 px-6 pb-20">
       <div className="min-h-screen bg-[#f9f6f1] px-6 py-12">
      <h1 className="text-4xl font-extrabold text-center mb-12 tracking-tight">
        Explore Our Collection
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="group border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all bg-white"
          >
            <Link href={`/product/${product.id}`}>
              <div className="relative w-full h-80 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </Link>

            <div className="p-5">
              <h2 className="text-xl font-semibold tracking-tight">
                {product.title}
              </h2>

              <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                {product.description}
              </p>

              <p className="text-2xl font-bold mt-4">₹{product.price}</p>

              <button
                onClick={() => addToCart(product)}
                className="mt-5 w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition flex items-center justify-center gap-2"
              >
                🛒 Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#4a3f35] text-white py-6 mt-auto">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm">&copy; 2025 Retro Reborn. All rights reserved.</p>

          <div className="flex gap-6 text-sm">
            <Link href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/refund" className="hover:underline">
              Refund Policy
            </Link>
            <Link href="/terms" className="hover:underline">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
