const About = () => {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            About <span className="text-indigo-600">Clothify</span>
          </h1>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
            Hi, I’m <span className="font-semibold">Aman</span>. Clothify is a
            modern clothing web application built to showcase premium fashion,
            clean design, and a smooth shopping experience.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          
          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              About This App
            </h3>
            <p className="text-gray-600">
              Clothify is designed as a clothing e-commerce platform where users
              can explore fashion products, browse categories, and experience a
              clean, user-friendly interface.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Purpose
            </h3>
            <p className="text-gray-600">
              This app is built to demonstrate frontend skills using React and
              Tailwind CSS, focusing on modern UI, responsiveness, and smooth
              navigation.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Clothing Focus
            </h3>
            <p className="text-gray-600">
              The application is centered around fashion and clothing, including
              premium wear, everyday essentials, and category-based browsing.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
