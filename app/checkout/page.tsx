"use client";

import { useState } from "react";

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("");

  return (
    <div className="min-h-screen bg-[#f8f1e3] text-gray-900">
      <div className="max-w-4xl mx-auto py-16 px-6">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center mb-10 font-serif tracking-wide">
          Checkout
        </h1>

        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT: SHIPPING FORM */}
          <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-300">
            <h2 className="text-xl font-semibold mb-4 font-serif">
              Shipping Details
            </h2>

            <div className="space-y-4">
              <input
                placeholder="Full Name"
                className="w-full border rounded-lg p-3"
              />
              <input
                placeholder="Email Address"
                className="w-full border rounded-lg p-3"
              />
              <input
                placeholder="Phone Number"
                className="w-full border rounded-lg p-3"
              />
              <textarea
                placeholder="Full Address"
                rows={3}
                className="w-full border rounded-lg p-3"
              />
            </div>
          </div>

          {/* RIGHT: ORDER SUMMARY */}
          <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-300">
            <h2 className="text-xl font-semibold mb-4 font-serif">
              Order Summary
            </h2>

            {/* One example item (you will replace with cart items) */}
            <div className="border-b pb-4 mb-4">
              <div className="flex justify-between">
                <p className="font-medium">Retro Jacket (x1)</p>
                <p>₹1299</p>
              </div>
            </div>

            <div className="flex justify-between text-lg font-semibold">
              <span>Total:</span>
              <span>₹1299</span>
            </div>

            {/* PAYMENT METHODS */}
            <h2 className="text-xl font-semibold mt-6 mb-3 font-serif">
              Payment Method
            </h2>

            <div className="space-y-3">
              {["Razorpay", "Stripe", "PhonePe", "Cash on Delivery"].map((m) => (
                <label
                  key={m}
                  className="flex items-center space-x-3 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="payment"
                    value={m}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <span>{m}</span>
                </label>
              ))}
            </div>

            {/* PAY BUTTON */}
            <button
              disabled={!paymentMethod}
              className={`mt-6 w-full py-3 rounded-lg text-white font-semibold text-lg transition ${
                paymentMethod
                  ? "bg-[#d97706] hover:bg-[#b45309]"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
            >
              {paymentMethod ? `Pay with ${paymentMethod}` : "Select Payment Method"}
            </button>

            <p className="text-sm text-gray-600 mt-2 text-center">
              No payment will be processed. This page is for verification only.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
