export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-[#f9f6f1] text-[#4a3f35] px-6 py-10">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow">
        <h1 className="text-3xl font-bold mb-4">Terms & Conditions</h1>

        <p className="mb-4">
          These Terms & Conditions govern the use of services provided by <strong>Retro Reborn</strong>. By accessing our website or making a purchase, you agree to these terms.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Orders & Payments</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Payments are processed securely through Razorpay.</li>
          <li>Orders are confirmed only after successful payment.</li>
          <li>Prices may change without prior notice.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. Shipping</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Orders are shipped within 2–5 business days.</li>
          <li>Delays from courier partners are beyond our control.</li>
          <li>Tracking details will be shared once shipped.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Products</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>All items are thrift / pre-owned unless stated otherwise.</li>
          <li>Slight color differences are possible due to lighting.</li>
          <li>Each item is unique and sold on first-come basis.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Contact</h2>
        <p>
          For any concerns or queries, contact us at:
          <br />
          <strong>support@retroreborn.com</strong>
        </p>
      </div>
    </div>
  );
}
