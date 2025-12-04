"use client";

import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f9f6f1] text-[#4a3f35]">
      {/* Header */}
      <header className="w-full py-4 px-6 shadow-md bg-white">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Retro Reborn</h1>
          <nav className="space-x-6 text-gray-700 font-medium">
            <Link href="/" className="hover:text-black">Home</Link>
            <Link href="/products" className="hover:text-black">Products</Link>
            <Link href="/about" className="hover:text-black">About</Link>
            <Link href="/contact" className="hover:text-black">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-64 w-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1500&q=80')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-white text-4xl md:text-5xl font-bold">Contact Us</h2>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-6 max-w-4xl mx-auto space-y-6">
        <h3 className="text-3xl font-bold text-center">Get in Touch</h3>
        <p className="text-gray-700 text-center mb-8">
          Have questions or feedback? We'd love to hear from you.
        </p>

        {submitted && (
          <p className="text-green-600 text-center font-semibold mb-4">
            Thank you! Your message has been sent.
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full border px-4 py-2 rounded-md"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full border px-4 py-2 rounded-md"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={5}
            required
            className="w-full border px-4 py-2 rounded-md"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-[#d97706] hover:bg-[#b45309] text-white px-6 py-3 rounded-md text-lg font-semibold"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Map Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold mb-6 text-center">Find Us</h3>
        <div className="w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
          {/* Replace this div with Google Maps iframe if needed */}
          Map Placeholder
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
              <li><Link href="/products" className="hover:text-white">Products</Link></li>
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/refund" className="hover:text-white">Refund Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>

        <p className="text-center text-gray-400 mt-6">
          © {new Date().getFullYear()} Retro Reborn — All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
