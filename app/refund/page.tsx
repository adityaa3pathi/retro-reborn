export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-[#f9f6f1] text-[#4a3f35] px-6 py-10">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow">
        <h1 className="text-3xl font-bold mb-4">Refund Policy</h1>
        <p className="mb-4">
          At <strong>Retro Reborn</strong>, we aim to provide the best thrift shopping experience. However, due to the nature of thrift items (pre-owned, one-of-a-kind), all sales are generally <strong>final and non-refundable</strong>.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Eligibility for Refund</h2>
        <p className="mb-4">
          Refunds are only applicable if:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>You received the wrong product</li>
          <li>The item is severely damaged beyond what was described</li>
          <li>The product never arrived</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. Process for Refund</h2>
        <p className="mb-4">
          To request a refund, email us within 48 hours of delivery with:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>Order ID</li>
          <li>Images of the issue (if damaged/wrong item)</li>
          <li>Your contact details</li>
        </ul>

        <p className="mb-4">
          Our team will review your request and respond within 2–4 business days.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Non-Refundable Cases</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Wrong size ordered by the customer</li>
          <li>Minor wear or vintage signs (normal for thrift items)</li>
          <li>Change of mind</li>
        </ul>

        <p>
          For support, reach out at <strong>support@retroreborn.com</strong>.
        </p>
      </div>
    </div>
  );
}
