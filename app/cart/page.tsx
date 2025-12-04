"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "../context/CardContext";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (cart.length === 0)
    return (
      <div className="p-10 text-center">
        <h1 className="text-3xl font-bold mb-4">🛒 Your Cart is Empty</h1>
        <Link
          href="/product"
          className="inline-block mt-3 bg-[#a35076] text-white px-6 py-3 rounded-lg shadow hover:opacity-90"
        >
          Start Shopping
        </Link>
      </div>
    );

  return (
    <div className="p-6 md:p-10 max-w-3xl mx-auto font-[Domine]">
      <h1 className="text-4xl font-bold mb-8 text-[#a35076]">Your Cart</h1>

      <div className="space-y-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-white p-5 rounded-xl shadow-md border"
          >
            {/* Product Info */}
            <div className="flex items-center gap-4">
              <Image
                src={item.image}
                alt={item.title}
                width={80}
                height={80}
                className="rounded-md object-cover border"
              />

              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  ₹{item.price} × {item.qty}
                </p>
              </div>
            </div>

            {/* Remove button */}
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-600 hover:text-red-800 font-medium"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Total Section */}
      <div className="mt-10 p-6 rounded-xl bg-gray-50 border shadow-inner">
        <div className="flex justify-between text-xl font-semibold">
          <span>Total:</span>
          <span className="text-[#a35076]">₹{total}</span>
        </div>

        <Link
          href="/checkout"
          className="block mt-6 bg-[#a35076] text-white text-center font-medium px-5 py-3 rounded-lg shadow hover:opacity-90"
        >
          Proceed to Checkout
        </Link>

        <button
          className="mt-4 text-red-600 underline w-full text-center"
          onClick={clearCart}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}
