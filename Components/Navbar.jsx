import React, { useEffect, useState, useContext } from "react"
import { BiCart } from "react-icons/bi"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { ShopContext } from "../Context/ShopContext"

const Navbar = () => {
  const { quantity } = useContext(ShopContext)
  const [user, setUser] = useState(null)
  const navigate = useNavigate()
  const location = useLocation()

  // load logged user safely
  useEffect(() => {
    const raw = localStorage.getItem("loggedUser")
    if (!raw) {
      setUser(null)
      return
    }
    try {
      setUser(JSON.parse(raw))
    } catch {
      localStorage.removeItem("loggedUser")
      setUser(null)
    }
  }, [location])

  const handleLogout = () => {
    localStorage.removeItem("loggedUser")
    setUser(null)
    navigate("/login")
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* ✅ Logo (CLICK = HOME PAGE, NO REFRESH) */}
        <button
          onClick={() => navigate("/")}
          className="text-2xl font-extrabold tracking-wide text-gray-900"
        >
          Clothify<span className="text-indigo-600">.</span>
        </button>

        {/* Menu */}
        <ul className="hidden md:flex gap-10 text-sm font-semibold text-gray-700">
          <li>
            <Link to="/" className="hover:text-indigo-600 transition">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-indigo-600 transition">
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="/shop" className="hover:text-indigo-600 transition">
              SHOP
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-indigo-600 transition">
              CONTACT
            </Link>
          </li>
        </ul>

        {/* Right section */}
        <div className="flex items-center gap-6">
          
          {/* Cart */}
          <Link to="/cart" className="relative">
            <BiCart className="text-2xl text-gray-800 hover:text-indigo-600 transition" />
            {quantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs h-5 w-5 rounded-full flex items-center justify-center">
                {quantity}
              </span>
            )}
          </Link>

          {/* Auth */}
          {user ? (
            <button
              onClick={handleLogout}
              className="text-sm font-semibold text-red-500 hover:text-red-600 transition"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="text-sm font-semibold text-gray-700 hover:text-indigo-600 transition"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-4 py-1.5 text-sm font-semibold bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
              >
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
