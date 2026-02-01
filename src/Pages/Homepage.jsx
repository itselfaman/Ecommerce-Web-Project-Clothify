import Hero from "../Components/Hero"
import ProductList from "../Components/ProductList"

const Homepage = () => {
  return (
    // Navbar height = 64px → pt-16 ONLY
    <div className="pt-16">
      <Hero />
      <ProductList />
    </div>
  )
}

export default Homepage
