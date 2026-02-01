const categories = [
  {
    name: "Men",
    desc: "Premium menswear – shirts, t-shirts, jackets & more",
  },
  {
    name: "Women",
    desc: "Elegant & trendy outfits for every occasion",
  },
  {
    name: "Winter Wear",
    desc: "Sweaters, hoodies & jackets to keep you warm in style",
  },
  {
    name: "Casual Wear",
    desc: "Comfortable everyday fashion with a modern touch",
  },
  {
    name: "Formal Wear",
    desc: "Sharp and classy outfits for office & events",
  },
  {
    name: "Accessories",
    desc: "Belts, caps & fashion essentials to complete your look",
  },
]

const Shop = () => {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Shop By <span className="text-indigo-600">Category</span>
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Explore our wide range of clothing categories crafted for style,
            comfort, and confidence.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-bold text-gray-900">
                {cat.name}
              </h3>
              <p className="mt-3 text-gray-600 text-sm">
                {cat.desc}
              </p>
              <button className="mt-5 text-indigo-600 font-semibold hover:underline">
                Explore →
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Shop
