import ContactFormSection from "@/app/components/ContactFormSection";

export default function ContactPage() {
  // Placeholder contact information - edit with actual details
  const COMPANY_EMAIL = "support@mystashapp.com";
  const COMPANY_PHONE = "+234 813 146 2292";
  const COMPANY_ADDRESS = "Lagos, Nigeria";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-purple-600 to-purple-800 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Have questions about MyStash? We'd love to hear from you. Get in touch with our team today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Email Card */}
            <div className="bg-purple-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-200 rounded-full mb-4">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 mb-4">We'll respond within 24 hours</p>
              <a
                href={`mailto:${COMPANY_EMAIL}`}
                className="text-purple-600 font-semibold hover:text-purple-700 transition-colors break-all"
              >
                {COMPANY_EMAIL}
              </a>
            </div>

            {/* Phone Card */}
            <div className="bg-purple-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-200 rounded-full mb-4">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600 mb-4">Available Mon-Fri, 9AM-6PM</p>
              <a
                href={`tel:${COMPANY_PHONE}`}
                className="text-purple-600 font-semibold hover:text-purple-700 transition-colors"
              >
                {COMPANY_PHONE}
              </a>
            </div>

            {/* Location Card */}
            <div className="bg-purple-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-200 rounded-full mb-4">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Office</h3>
              <p className="text-gray-600 mb-4">Visit us at our office</p>
              <p className="text-purple-600 font-semibold">{COMPANY_ADDRESS}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <ContactFormSection />

      {/* FAQ Section */}
      <section className="w-full bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            {/* FAQ Item 1 */}
            <div className="bg-white rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How long does it take to get a response?
              </h3>
              <p className="text-gray-600">
                We typically respond to all enquiries within 24-48 hours during business days. For urgent matters, please call us directly.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-white rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What are your business hours?
              </h3>
              <p className="text-gray-600">
                We're available Monday through Friday, 9:00 AM to 6:00 PM WAT. We're closed on weekends and public holidays.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-white rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I schedule a call with your team?
              </h3>
              <p className="text-gray-600">
                Absolutely! Please mention your preferred time in the enquiry form, and we'll get back to you to confirm a suitable time for both parties.
              </p>
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-white rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Is my information secure?
              </h3>
              <p className="text-gray-600">
                Yes, we take your privacy seriously. All information submitted through our contact form is encrypted and protected according to our Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
