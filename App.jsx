import React from "react"
import { Routes, Route } from "react-router-dom"

import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"

import Homepage from "./Pages/Homepage"
import Cart from "./Pages/Cart"
import ProductDetails from "./Pages/ProductDetails"
import Login from "./Pages/Auth/Login"
import Signup from "./Pages/Auth/Signup"
import About from "./Pages/About"
import Shop from "./Pages/Shop"
import Contact from "./Pages/Contact"


const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* NO padding here */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
