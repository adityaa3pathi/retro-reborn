export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#f9f6f1] text-[#4a3f35] px-6 py-10">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="mb-4">
          At <strong>Retro Reborn</strong>, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Name, email, phone number</li>
          <li>Shipping and billing address</li>
          <li>Payment details (processed securely via Razorpay)</li>
          <li>Order history and interactions</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>To process and deliver your orders</li>
          <li>To provide customer support</li>
          <li>To improve our services and website experience</li>
          <li>To send important updates or order notifications</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Data Protection</h2>
        <p className="mb-4">
          All sensitive payment information is encrypted and securely processed by Razorpay. We never store your card or UPI details on our servers.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Contact Us</h2>
        <p>
          For questions regarding this Privacy Policy, contact us at:
          <br />
          <strong>support@retroreborn.com</strong>
        </p>
      </div>
    </div>
  );
}
