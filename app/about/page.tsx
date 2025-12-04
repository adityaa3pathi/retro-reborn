import Link from "next/link";

export default function About() {
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
      <section className="relative h-64 w-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1520975680077-48f91ee9b93c?auto=format&fit=crop&w=1500&q=80')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-white text-4xl md:text-5xl font-bold">About Us</h2>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 px-6 max-w-4xl mx-auto space-y-6">
        <h3 className="text-3xl font-bold">Our Mission</h3>
        <p className="text-gray-700 text-lg">
          Retro Reborn is dedicated to bringing vintage and pre-loved fashion back to life. Our mission is to make thrift shopping enjoyable, sustainable, and accessible to everyone.
        </p>

        <h3 className="text-3xl font-bold mt-8">What We Offer</h3>
        <p className="text-gray-700 text-lg">
          We curate a collection of unique thrift items — from clothing and accessories to bags and shoes. Every piece is handpicked to ensure quality and style.
        </p>

        <h3 className="text-3xl font-bold mt-8">Our Team</h3>
        <p className="text-gray-700 text-lg">
          Our team is passionate about sustainability, fashion, and delivering a seamless shopping experience. We believe every vintage piece has a story and we’re here to help it continue.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-10 mt-auto">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-xl font-bold mb-2">Retro Reborn</h3>
            <p className="text-gray-300">Your trusted thrift store for authentic vintage fashion.</p>
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
