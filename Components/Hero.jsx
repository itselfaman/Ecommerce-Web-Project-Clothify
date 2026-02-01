import heroImg from "../assets/hero.png"

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        <div>
          <p className="text-sm font-semibold text-gray-600">
            Where Fashion Meets Confidence
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold">
            Upgrade Your Style with <br />
            <span className="text-indigo-600">
              Clothify Premium Collection
            </span>
          </h1>

          <p className="mt-6 text-gray-600 max-w-md">
            For everyday essentials to statement pieces, redefine your style
            with fashion that's as bold and unique as you are.
          </p>

        </div>

        <div className="flex justify-center">
          <img
            src={heroImg}
            alt="Product"
            className="max-h-[480px] object-contain"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
