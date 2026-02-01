const Contact = () => {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Contact <span className="text-indigo-600">Us</span>
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            We'd love to hear from you. Reach out to us anytime.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          
          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Email
            </h3>
            <p className="text-gray-600">
              itselfaman@gmail.com
            </p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Phone
            </h3>
            <p className="text-gray-600">
              +91 7301553921
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
